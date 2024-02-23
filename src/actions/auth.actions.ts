"use server"

import prisma from "@/libs/prisma"
import { NextResponse } from "next/server"
import bcrypt, { compare } from 'bcrypt'
import { z } from 'zod'
import { revalidatePath } from 'next/cache'
import { signToken } from "@/libs/token"

const authSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(6),
  email: z
    .string()
    .min(1, { message: 'This field has to be filled.' })
    .email('This is not a valid email.'),
});

export const registerUser = async (formData: FormData) => {
  const isValidData = authSchema.parse({
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
  })

  console.log(isValidData.username, isValidData.email, isValidData.password)

  try {
    if (!isValidData.username || !isValidData.email || !isValidData.password) {
      return new NextResponse("Missing Credentials!", { status: 400 })
    }

    const existingUser = await prisma.user.findFirst({
      where: {
        email: isValidData.email
      }
    })

    if (existingUser) return new NextResponse("User already exists!", { status: 401 })

    const hashedPassword = await bcrypt.hash(isValidData.password, 12)

    const user = await prisma.user.create({
      data: {
        email: isValidData.email,
        username: isValidData.username,
        password: hashedPassword,
      }
    })
    // revalidatePath(path)

    if (user) {
      const response = await signToken({ user });
      console.log(response);
    }

  } catch (error) {
    return console.log(error)
  }

}

export const loginUser = async (formData: FormData) => {
  const isValidData = authSchema.parse({
    email: formData.get("email"),
    password: formData.get("password"),
  })

  console.log(isValidData.email, isValidData.password)

  console.log(isValidData.email, isValidData.password)
  try {
    if (!isValidData.email || !isValidData.password) {
      return new NextResponse("Missing Credentials!", { status: 400 })
    }

    const user = await prisma.user.findFirst({
      where: {
        email: isValidData.email
      }
    })

    if (!user || !(await compare(isValidData.password, user.password!))) {
      return new NextResponse(JSON.stringify({ message: "Wrong Credentials!" }), { status: 401 })
    }

    // revalidatePath(path)

    if (user) {
      const response = await signToken({ user });
      console.log(response);
    }

  } catch (error) {
    return console.log(error)
  }

}