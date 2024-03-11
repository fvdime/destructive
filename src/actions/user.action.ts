"use server"

import prisma from '@/libs/prisma';;
import { z } from 'zod'
import { revalidatePath } from 'next/cache'
import uploadImage from '@/libs/upload-image';
import { redirect } from 'next/navigation'

const profileSchema = z.object({
  username: z.string().min(1),
  bio: z.string().min(1).nullish(),
  name: z.string().nullish(),
  email: z
    .string()
    .min(1, { message: 'This field has to be filled.' })
    .email('This is not a valid email.'),
});

export const GetUserById = async (userId: string) => {
  return await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
};

export const GetUsers = async () => {
  return await prisma.user.findMany({
    orderBy: { createdAt: 'desc' },
    take: 9
  })
}

export const GetUserProfile = async (userId: string) => {
  try {
    const existingUser = await prisma.user.findUnique({
      where: { id: userId },
      include: { post: true, followedBy: true, following: true }
    })

    return ({ ...existingUser });
  } catch (error) {
    throw new Error("Failed to fetch user")
  }
}

export const UpdateProfile = async (values: z.infer<typeof profileSchema>, currentUserId: string) => {
  try {
    const isValidData = profileSchema.safeParse(values);

    console.log(isValidData);

    if (!isValidData.success) {
      return {
        errors: isValidData.error.flatten().fieldErrors,
        message: "Missing Fields! Failed to update user."
      }
    }

    const data = isValidData.data

    // const token = getToken()
    // console.log("token:::::::::::::::::", token)

    // const currentUserId = getUserIdFromToken(token) as string

    if (!currentUserId) {
      throw new Error("User ID not provided");
    }

    const updatedUser = await prisma.user.update({
      where: { id: currentUserId },
      data: {
        username: data.username,
        name: data.name,
        bio: data.bio,
        email: data.email,
      },
    });

    console.log("User Updated!", updatedUser);

    return {
      message: "",
      updatedUser
    };
  } catch (error) {
    console.error("Error while updating profile:", error);
    throw new Error("Failed to update profile");
  }
};

export const UpdateUserProfile = async (formData: FormData, prevState: any, currentUserId: string) => {
  try {
    const isValidData = profileSchema.parse({
      email: formData.get('email'),
      username: formData.get('username'),
      name: formData.get('name'),
      bio: formData.get('bio'),
    });

    const user = await GetUserById(currentUserId)

    if (user?.email != isValidData.email) {
      const existingUser = await prisma.user.findUnique({
        where: { email: isValidData.email }
      })

      if (existingUser) return { message: 'This email address is exists!' }
    }

    if (user?.username != isValidData.username) {
      const existingUsername = await prisma.user.findUnique({
        where: { username: isValidData.username }
      })

      if (existingUsername) return { message: 'This username is exists!' }
    }

    try {
      await prisma.user.update({
        where: { id: currentUserId },
        data: {
          username: isValidData.username,
          name: isValidData.name,
          email: isValidData.email,
          bio: isValidData.bio
        }
      })

      revalidatePath(`/user/${currentUserId}`)
      return { message: "Updated Profile!" }
    } catch (error) {
      console.log(error)
      return { message: "Error While Updating Profile!" }
    }
  } catch (error) {
    console.log(error)
    return { message: "Error While Updating Profile!" }
  }
}

export async function UpdateProfileAction(
  currentUserId: string,
  prevState: any,
  formData: FormData
) {
  try {
    const isValidData = profileSchema.parse({
      email: formData.get('email'),
      username: formData.get('username'),
      name: formData.get('name'),
      bio: formData.get('bio'),
    });

    const user = await GetUserById(currentUserId)

    if (user?.email != isValidData.email) {
      const existingUser = await prisma.user.findUnique({
        where: { email: isValidData.email }
      })

      if (existingUser) return { errorMessage: 'This email address is exists!' }
    }

    if (user?.username != isValidData.username) {
      const existingUsername = await prisma.user.findUnique({
        where: { username: isValidData.username }
      })

      if (existingUsername) return { errorMessage: 'This username is exists!' }
    }

    const image = formData.get('image') as FormDataEntryValue;
    let filePath = '';

    if (image) {
      const response = await uploadImage({ file: image });
      if (
        response !== null &&
        response.result['$metadata'].httpStatusCode == 200
      )
        filePath = response.filePath;
    }

    await prisma.user.update({
      where: {
        id: currentUserId,
      },
      data: {
        ...isValidData,
        profilePic: filePath
      },
    });

    redirect(`/user/${currentUserId}`);

  } catch (err) {
    if (err instanceof Error && err.name == 'ZodError') {
      const errors = {
        errorMessage: '',
      };

      [...JSON.parse(err.message)].forEach((item) => {
        if (item?.path[0] == 'email') {
          errors.errorMessage = item?.message || '';
        }
      });

      return errors;
    }

    return {
      errorMessage: '',
    };
  }
}

export const getSearchUsers = async (q: any, page: any) => {
  const regex = new RegExp(q, "i")

  const ITEM_PER_PAGE = 5

  try {
    const count = await prisma.user.count({
      where: { username: {
        contains: q,
        mode: "insensitive"
      }}
    })

    const users = await prisma.user.findMany({
      where: {
        username: {
          contains: q,
          mode: "insensitive"
        }
      },
      take: ITEM_PER_PAGE,
      skip: ITEM_PER_PAGE * (page - 1) 
    })

    return { count, users }
  } catch (error) {
    throw new Error("Failed to fetch featured posts!")
  }
}