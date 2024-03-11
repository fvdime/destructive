import React from "react";

const Message = () => {
  return (
    <div className="lg:p-4 w-full">
      <div className="flex flex-col items-start gap-2.5 w-full">
        <div className="flex flex-col gap-1 w-full max-w-[440px]">
          <div className="flex flex-col leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
            <p className="text-sm font-normal text-gray-900 dark:text-white">
              {" "}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
          </div>
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
            11:46
          </span>
        </div>
        <div className="flex flex-col gap-1 w-full max-w-[440px] self-end">
          <div className="flex flex-col leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-s-xl rounded-ee-xl">
            <p className="text-sm font-normal text-gray-900">
              {" "}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
          </div>
          <span className="text-sm font-normal text-gray-500">
            11:46
          </span>
        </div>
      </div>
    </div>
  );
};

export default Message;
