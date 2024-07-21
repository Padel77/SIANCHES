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
  const ruselt = await GetDataInServerSide("/home/");
  const data = JSON.stringify(ruselt.data, null, 2); 

  return (
    <>
      <Navbar data={data} />
      {React.cloneElement(children as React.ReactElement, { customProp })}
      <Footer />
    </>
  );
}
