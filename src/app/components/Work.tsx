import React from "react";
import Link from "next/link";

export default function Work() {
  return (
    <>
      <div className="pl-2 pt-8 text-2xl font-semibold lg:pt-20">
        Currently building:
      </div>
      <div className="flex w-full flex-col items-center rounded-lg bg-gray-300">
        {" "}
        <img className="" src="./desktop.png" />
      </div>

      <div className="pl-2 pt-20 text-2xl font-semibold">Previous work:</div>

      <div className=" flex w-full flex-col gap-4 text-sm lg:flex-row">
        <div className="relative flex flex-col items-center justify-center rounded-lg bg-gradient-to-r from-pink-500 to-rose-500 lg:w-1/2 lg:p-12">
          <img
            className="h-60 object-contain lg:h-96"
            src="./creditscore.png"
          />
          <div className="absolute inset-0 z-10 flex items-center justify-center text-6xl font-semibold text-white opacity-0 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] duration-300 hover:opacity-100">
            <Link target="_blank" href="https://www.totallymoney.com">
              totallymoney
            </Link>
          </div>
        </div>

        <div className="relative flex flex-col items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 lg:w-1/2 lg:p-12">
          <img
            className="h-60 object-contain lg:h-96"
            src="./messly_home.png"
          />
          <div className="absolute inset-0 z-10 flex items-center justify-center text-6xl font-semibold text-white opacity-0 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] duration-300 hover:opacity-100">
            <Link target="_blank" href="https://www.messly.com">
              messly
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
