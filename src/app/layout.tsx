"use client";

import "./globals.css";
import Sidebar from "./_components/_layouts/Sidebar";
import Topbar from "./_components/_layouts/Topbar";
import getMenuItems from "@/config/menu";
import { Suspense } from "react";
import ProgressBar from "./_progressBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const menu = getMenuItems();
  return (
    <html lang="en">
      <body className="flex min-h-screen bg-[#F5F6FA]">
        {/* <Suspense> */}
        <Sidebar menu={menu} />
        <div className="flex-1">
          <Topbar />
          {children}
        </div>
        <ProgressBar />
        {/* </Suspense> */}
      </body>
    </html>
  );
}
