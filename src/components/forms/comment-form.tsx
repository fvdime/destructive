"use client";

import React from "react";
import { createCommentAction } from "@/actions/comment.action";
import { useFormState, useFormStatus } from "react-dom";

const initialState: { errorMessage: string } = {
  errorMessage: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      aria-disabled={pending}
      className="rounded text-center text-semibold border border-secondary transition-all ease-in duration-300 text-sm hover:shadow-md bg-secondary text-white font-bold px-8 py-1.5"
    >
      Comment
    </button>
  );
}

const CommentForm = ({ postId }: { postId: string }) => {
  const comment = createCommentAction.bind(null, postId);

  const [state, formAction] = useFormState(comment, initialState);

  // NEED TO FIX RESET FORM AFTER SUBMIT
  return (
    <div className="mt-8">
      {/* <h2 className="mb-8 text-lg">Comments</h2> */}
      <form className="mb-6" action={formAction}>
        <div className="relative w-full">
          <textarea
            name="comment"
            placeholder=" "
            className="peer h-full min-h-[100px] w-full resize-none border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
          ></textarea>
          <label className="after:content[' '] pointer-events-none absolute left-0 -top-2 flex h-full w-full select-none text-sm font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-900 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            Your Comment
          </label>
        </div>
        <p
          aria-live="polite"
          className="text-xs font-medium my-2 text-red-600"
          role="status"
        >
          {state?.errorMessage}
        </p>
        <div className="w-full flex flex-row justify-end ">
          <SubmitButton />
        </div>
      </form>
    </div>
  );
};

export default CommentForm;
