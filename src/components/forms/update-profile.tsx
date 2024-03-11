"use client";

import React, { useState } from "react";
import Input from "../shared/input";
import Button from "../shared/button";
import { useFormState, useFormStatus } from "react-dom";
import { UpdateProfile, UpdateProfileAction, UpdateUserProfile } from "@/actions/user.action";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ImageUploadInput from "../shared/image-input";

const profileSchema = z.object({
  username: z.string().min(1),
  bio: z.string().min(1).nullish(),
  name: z.string().nullish(),
  email: z
    .string()
    .min(1, { message: 'This field has to be filled.' })
    .email('This is not a valid email.'),
});

const initialState: { errorMessage: string } = {
  errorMessage: '',
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" aria-disabled={pending} className="rounded text-center text-semibold border border-secondary transition-all ease-in duration-300 text-sm hover:shadow-md bg-secondary text-white font-bold px-8 py-1.5">
      Add
    </button>
  );
}

export default function UpdateProfileForm({ currentUser }: { currentUser: any }) {
  const [value, setValue] = useState("");

  const updateUser = UpdateProfileAction.bind(null, currentUser.id)

  const [state, formAction] = useFormState(updateUser, initialState)

  return (
  <form className="flex flex-col gap-4" action={formAction}>
    <div className="relative w-full min-w-[200px]">
      <ImageUploadInput value={currentUser.profilePic || value} onChange={(value) => setValue(value)} />
      <Input
        id="username"
        name="username"
        placeholder="Username"
        defaultValue={currentUser.username || ""}
      />
      <Input
        id="name"
        name="name"
        placeholder="Name"
        defaultValue={currentUser.name || ""}
      />
      <Input
        id="email"
        name="email"
        placeholder="Email"
        defaultValue={currentUser.email || ""}
      />
      <Input
        id="bio"
        name="bio"
        placeholder="Bio"
        defaultValue={currentUser.bio || ""}
      />
    </div>
    <SubmitButton/>
    {/* <Button label="Update" fullWidth large  /> */}
    {state.errorMessage &&
      <p aria-live="polite" className="sr-only text-red-600" role="status">
          {state?.errorMessage}
      </p>
    }
  </form>
  );
}
