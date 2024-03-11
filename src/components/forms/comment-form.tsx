"use client";

import React, { useState } from "react";
import Button from "../shared/button";
import { createComment } from "@/actions/comment.action";
import { useFormStatus } from "react-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" aria-disabled={pending}>
      Add
    </button>
  );
}

const commentSchema = z.object({
  comment: z.string(),
});

const CommentForm = ({ postId }: { postId: any }) => {
  const form = useForm<z.infer<typeof commentSchema>>({
    resolver: zodResolver(commentSchema),
    defaultValues: {
      comment: "",
    },
  });

  return (
    <div {...form}>
      <h2 className="mb-8 text-lg">Comments</h2>
      <form
        className="mb-6"
        onSubmit={form.handleSubmit(async (values) => {
          await createComment(values, postId);
          form.reset();
        })}
      >
        <div className="relative w-full">
          <textarea
            id="comment"
            placeholder=" "
            className="peer h-full min-h-[100px] w-full resize-none border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
            {...form.register("comment")}
          ></textarea>
          <label className="after:content[' '] pointer-events-none absolute left-0 -top-2 flex h-full w-full select-none text-sm font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-900 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            Your Comment
          </label>
        </div>
        <div className="w-full flex flex-row justify-end ">
          <SubmitButton />
          {/* <Button label="Update" fullWidth large  /> */}
          <p aria-live="polite" className="sr-only" role="status"></p>
        </div>
      </form>
    </div>
  );
};

export default CommentForm;
