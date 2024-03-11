"use client";

import React, { useState } from "react";

const TagInput = ({ hashtag, setHashtag }: any) => {
  const [tagValue, setTagValue] = useState<string>("");
  // const [tag, setTag] = useState<string[]>([])

  const addTags = (e: any) => {
    if (e.keyCode === 13 && tagValue) {
      setHashtag([...hashtag, tagValue]);
      setTagValue("");
    }
  };

  const handleRemove = (indexToRemove: any) => {
    setHashtag(hashtag.filter((_: any, index: any) => index !== indexToRemove));
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="relative w-full min-w-[200px]">
        <input
          value={tagValue}
          onChange={(e) => setTagValue(e.target.value)}
          onKeyUp={addTags}
          type="text"
          id="hashtag"
          placeholder="#Tag"
          className="peer h-full min-h-[56px] w-full resize-none border-b border-blue-gray-200 bg-transparent pt-4 pb-1 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
        ></input>
        <label className="after:content[' '] pointer-events-none absolute left-0 -top-1 flex h-full w-full select-none text-sm font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-900 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-blue-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500" />
      </div>
      <ul className="flex flex-row gap-2">
        {hashtag.map((item: any, index: number) => (
          <li
            key={index}
            className="flex flex-row justify-center items-center gap-2 border-b py-0.5 px-2 rounded-md flex-wrap"
          >
            <span className="text-sm text-gray-500">{item}</span>
            <button onClick={() => handleRemove(index)}>
              <svg
                className="w-2 h-2 text-gray-600"
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
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TagInput;
