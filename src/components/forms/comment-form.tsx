"use client";

import React from "react";
import Button from "../shared/button";

const CommentForm = () => {
  const handleSubmit = () => {};

  return (
    <>
      <h2 className="my-8 text-xl">Comments</h2>
      <form className="mb-6">
        <div className="relative w-full">
          <textarea
            placeholder=" "
            className="peer h-full min-h-[100px] w-full resize-none border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
          ></textarea>
          <label className="after:content[' '] pointer-events-none absolute left-0 -top-2 flex h-full w-full select-none text-sm font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-900 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            Your Comment
          </label>
        </div>
        <div className="w-full flex flex-row justify-end ">
          <Button onClick={handleSubmit} label="Post Comment" />
        </div>
      </form>
    </>
  );
};

export default CommentForm;
