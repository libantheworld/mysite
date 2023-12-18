"use client";
import React from "react";
import Time from "./Time";
export default function Header() {
  return (
    <>
      <div className="mb-6 flex w-full flex-row justify-between text-sm lg:mb-12 lg:px-2">
        <div className="flex flex-col">
          <p className="font-bold">Liban Abdulle</p>
          <p className="text-sm">Product Engineer</p>
        </div>
        <div className="flex flex-col items-end">
          <Time />
          {/* <div className="flex flex-row items-center  gap-1 border-x-black text-sm">
            Available for work{" "}
            <span className="h-2 w-2 rounded-full bg-green-500"></span>
          </div> */}
        </div>
      </div>
    </>
  );
}
