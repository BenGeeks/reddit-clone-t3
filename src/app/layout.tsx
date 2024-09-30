import Header from "@/components/header";
import SideBar from "@/components/side-bar";
import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="flex flex-col text-white">
        <Header />
        <div className="flex">
          <SideBar />
          <main className="flex-grow">{children}</main>
        </div>
      </body>
    </html>
  );
}
