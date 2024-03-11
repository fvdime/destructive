"use client";

import React, { useState, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useFormState } from "react-dom";
import ImageUploadInput from "../shared/image-input";
import Input from "../shared/input";
import Link from "next/link";
import Button from "../shared/button";
import { createPost } from "@/actions/post.actions";
import toast from "react-hot-toast";
import TagInput from "../shared/tag-input";

interface PostFormProps {
  type?: "Create" | "Update";
}

export default function PostModal({ type }: PostFormProps) {
  const [content, setContent] = useState("");
  const [hashtag, setHashtag] = useState<string[]>([]);

  const overlay = useRef<HTMLDivElement>(null);
  const wrapper = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const [value, setValue] = useState("");

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  //for exiting when you click anywhere except the white part
  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === overlay.current && onDismiss) {
        onDismiss();
      }
    },
    [onDismiss, overlay]
  );

  async function handleSubmit() {
    try {
      const input: any = document.getElementById("image");
      var resultString = hashtag.join(",");

      const formData = new FormData();

      formData.append("hashtag", resultString);
      formData.append("image", input?.files[0]);
      formData.append("content", content);

      console.log("Form submitted with:", formData);

      try {
        const post = await createPost(formData);
        toast.success("Successfully Created!");

        console.log("Response:", post);
      } catch (error) {
        router.refresh();
        toast.error("Permission denied!");
        console.error("Error:", error);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const BodyContent = (
    <div className="flex flex-col gap-4">
      <ImageUploadInput value={value} onChange={(value) => setValue(value)} />
      <div className="relative w-full min-w-[200px]">
        <textarea
          name="content"
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Description"
          className="peer h-full min-h-[100px] w-full resize-none border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
        ></textarea>
        <label className="after:content[' '] pointer-events-none absolute left-0 -top-1 flex h-full w-full select-none text-sm font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-900 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"></label>
      </div>
      <TagInput hashtag={hashtag} setHashtag={setHashtag} />
      <Button label="Share" fullWidth large onClick={handleSubmit} />
    </div>
  );

  const FooterContent = (
    <div className="text-gray-400 text-center mt-4">
      <p>
        I agree with the
        <span className="text-sky-700 cursor-pointer hover:underline">
          {" "}
          terms and conditions.
        </span>
      </p>
    </div>
  );

  return (
    <div
      ref={overlay}
      className="fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black/80"
      onClick={handleClick}
    >
      <button
        type="button"
        onClick={onDismiss}
        className="absolute top-2 right-8 text-white/80 hover:text-white/20 duration-500 transition-all ease-in"
      >
        <svg
          className="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
      </button>

      <div
        ref={wrapper}
        className="flex flex-col absolute h-[95%] w-full bottom-0 bg-white rounded-t-3xl lg:px-40 px-8 py-16 overflow-auto"
      >
        {BodyContent}
        {FooterContent}
      </div>
    </div>
  );
}
