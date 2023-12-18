import React from "react";
import Link from "next/link";
export default function Hero() {
  return (
    <div className="flex w-full flex-col gap-4 lg:flex-row ">
      <div className=" rounded-lg bg-black p-4 text-xl text-slate-100 lg:w-1/2 lg:text-3xl">
        Hello 👋 I'm a product engineer who specializes in building apps for web
        and mobile.
      </div>
      <div className=" rounded-lg bg-yellow-200 p-4 text-sm text-yellow-900 lg:w-1/2">
        <div className="text-lg font-semibold">About me</div>
        <div className="pb-8">
          I'm passionate about design and great UX, enjoy thinking about
          problems like state management and performance challenges.
        </div>
        <div class="flex flex-row gap-2">
          <Link href="mailto:liban@sabrie.net">
            <button class="rounded-full bg-black px-4 py-2  text-white hover:bg-gray-900">
              email me
            </button>
          </Link>
          <Link href="https://www.github.com/libantheworld" target="_blank">
            <button class="rounded-full bg-black px-4 py-2  text-white hover:bg-gray-900">
              github
            </button>
          </Link>
          <Link href="https://www.read.cv/liban" target="_blank">
            <button class="rounded-full bg-black px-4 py-2  text-white hover:bg-gray-900">
              read.cv
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
