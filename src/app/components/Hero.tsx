import React from "react";

export default function Hero() {
  return (
    <div className="flex w-full flex-col gap-4 lg:flex-row ">
      <div className=" rounded-lg bg-black p-4 text-xl text-slate-100 lg:w-1/2">
        Hello 👋 I'm a product engineer who specializes in building apps for web
        and mobile.
      </div>
      <div className=" rounded-lg bg-yellow-200 p-4 text-sm text-yellow-900 lg:w-1/2">
        I'm passionate about design and great UX, enjoy thinking about problems
        like state management and performance challenges.
      </div>
    </div>
  );
}
