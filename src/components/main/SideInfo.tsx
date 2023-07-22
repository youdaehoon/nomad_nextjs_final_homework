import React from "react";

const SideInfo = () => {
  return (
    <div className="h-full bg-zinc-800  w-56 flex flex-col">
      <div className="shadow-md w-full px-2 py-3 font-semibold text-xl">
        Dweeter
      </div>
      <div className="flex flex-col justify-between flex-1">
        <div className="flex flex-col space-y-2 m-2 py-2 text-xs border-gray-600 border-b  border-solid ">
          <span>목표:레벨2</span>
          <div className="w-full h-1 bg-zinc-900">
            <div className="h-full w-[30%] overflow-hidden">
              <div className="bg-[linear-gradient(90deg,purple,darkorange)] w-40 h-full"></div>
            </div>
          </div>
        </div>
        <div className="flex p-2 items-center justify-between  bg-zinc-900">
          <div className="flex items-center space-x-2">
            <div className="bg-indigo-500 w-10 h-10 rounded-full" />
            <h4 className="font-semibold">유대훈</h4>
          </div>
          <div className="cursor-pointer">
            <svg
              style={{ color: "white" }}
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-log-out"
            >
              <path
                d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"
                fill="white"
              ></path>
              <polyline points="16 17 21 12 16 7"></polyline>
              <line x1="21" y1="12" x2="9" y2="12"></line>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideInfo;
