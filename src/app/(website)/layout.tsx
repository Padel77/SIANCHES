import Footer from "@/components/footer/Footer";
import Navbar from "@/components/header/Navbar";
import { GetDataInServerSide } from "@/lib/action";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
  customProp: string;
}

export default async function WebstieLayout({
  children,
  customProp,
}: LayoutProps) {
  const data = await GetDataInServerSide("/home/");

  return (
    <>
      <Navbar data={data?.navbar} />
      {React.cloneElement(children as React.ReactElement, { customProp })}
      <Footer />
    </>
  );
}
