"use client";

import React, { useCallback } from "react";
import { useRouter } from "next/navigation";

const Navbar = ({
  showBackArrow,
  label,
}: {
  showBackArrow?: any;
  label: string;
}) => {
  const router = useRouter();

  const handleBack = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <div className="border-b border-neutral-800 px-2 pb-2">
      <div className="flex flex-row items-center justify-between w-full gap-2">
        <div className="flex flex-row items-center gap-2">
          <button
            onClick={handleBack}
            className="cursor-pointer hover:opacity-70 transition text-2xl font-medium"
          >
            ←
          </button>
          <h1 className="text-lg font-semibold">{label}</h1>
        </div>
        <h1 className="text-3xl">✵</h1>
      </div>
    </div>
  );
};

export default Navbar;
