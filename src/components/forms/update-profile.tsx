"use client";

import React, { useState } from "react";
import Input from "../shared/input";
import { useFormState, useFormStatus } from "react-dom";
import {  UpdateProfileAction } from "@/actions/user.action";
import ImageUploadInput from "../shared/image-input";

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
