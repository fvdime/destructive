"use client";

import Image from "next/image";
import { useCallback } from "react";

interface ImageUploadProps {
  onChange: (value: string) => void;
  value: string;
}

const ImageUploadInput = ({ value, onChange }: ImageUploadProps) => {
  const handleUpload = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          const imageUrl = reader.result as string;
          onChange(imageUrl);
        };
        reader.readAsDataURL(file);
      }
    },
    [onChange]
  );

  return (
    <div className="mb-6">
      <label
        htmlFor="upload"
        className="h-[50vh] md:h-[70vh] relative cursor-pointer hover:opacity-50 transition duration-200 ease-in border-dashed border-2 p-20 flex flex-col border-slate-600 justify-center items-center text-slate-800"
      >
        <input
          id="upload"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleUpload}
        />
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 18"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 12.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
          />
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 3h-2l-.447-.894A2 2 0 0 0 12.764 1H7.236a2 2 0 0 0-1.789 1.106L5 3H3a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V5a2 2 0 0 0-2-2Z"
          />
        </svg>
        <h2 className="font-semibold text-lg">Click to upload</h2>
        {value && (
          <div className="absolute inset-0 w-full h-full">
            <Image alt="upload" layout="fill" objectFit="cover" src={value} />
          </div>
        )}
      </label>
    </div>
  );
};

export default ImageUploadInput;
