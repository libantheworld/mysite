import React from "react";

export default function Hero() {
  return (
    <div className="flex w-full flex-col gap-4 lg:flex-row ">
      <div className=" rounded-lg bg-black p-8 text-xl text-slate-200 lg:w-1/2 lg:p-12 lg:text-4xl">
        Hello 👋 I'm a product engineer who specializes in building apps for web
        and mobile.
      </div>
      <div className=" rounded-lg bg-yellow-200 p-8 text-xl text-yellow-900 lg:w-1/2 lg:p-12">
        I'm passionate about design and great UX, enjoy thinking about problems
        like state management and performance challenges.
      </div>
    </div>
  );
}
