import Footer from "@/components/footer/Footer";
import Navbar from "@/components/header/Navbar";
import { GetDataInServerSide } from "@/lib/action";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
  customProp: string;
  data?: [];
}

export default async function WebstieLayout({
  children,
  customProp,
}: LayoutProps) {
  let data
  try {
    const response = await GetDataInServerSide("/home/");
    const result = JSON.stringify(response.data, null, 2);
    data = JSON.parse(result);
  } catch (error) {
    console.log(error);
  }

  return (
    <>
      <Navbar data={data?.sliders} />
      {React.cloneElement(children as React.ReactElement, { data })}
      <Footer />
    </>
  );
}
