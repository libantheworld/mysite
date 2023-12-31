import "~/styles/globals.css";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Liban Abdulle",
  description: "Liban Abdulle's portfolio site",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={` bg-gray-50 pt-8 font-sans  text-gray-800 ${inter.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
