import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-full h-full bg-zinc-700 flex text-white">
      <div className="h-full p-5 bg-zinc-900">
        <div className="bg-white w-10 h-10 flex items-center justify-center rounded-full">
          <svg
            style={{ color: "rgb(29, 155, 240);" }}
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-discord"
            viewBox="0 0 16 16"
          >
            <path
              d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"
              fill="#1d9bf0"
            ></path>
          </svg>
        </div>
      </div>
      <div className="h-full bg-zinc-800  w-56 flex flex-col">
        <div className="shadow-md w-full px-2 py-3 font-semibold text-xl">
          Dweeter
        </div>
        <div className="flex flex-col justify-between flex-1">
          <div className="flex flex-col space-y-2 m-2 py-2 text-xs border-gray-600 border-b  border-solid ">
            <span>목표:레벨2</span>
            <div className="w-full h-1 bg-zinc-900">
              <div className="h-full w-[80%] overflow-hidden">
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
      <div></div>
    </div>
  );
}
