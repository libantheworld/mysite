import Link from "next/link";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Work from "./components/Work";

export default function HomePage() {
  return (
    <main className="flex w-full flex-col items-center md:w-1/2 lg:w-1/2">
      <div className="container flex min-h-screen flex-col gap-4 px-1 lg:gap-8">
        <Header />
        <Hero />
        <Work />
      </div>
    </main>
  );
}
