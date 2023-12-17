"use client";
import React from "react";
import Time from "./Time";
export default function Header() {
  return (
    <div className="mb-6 flex w-full flex-row justify-between text-sm lg:mb-12 lg:px-2">
      <div className="flex flex-col">
        <p className="font-bold">Liban Abdulle</p>
        <p className="text-sm">Software Designer</p>
      </div>
      <div>
        <Time />
      </div>
    </div>
  );
}
