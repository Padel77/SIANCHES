import Footer from "@/components/footer/Footer";
import Navbar from "@/components/header/Navbar";
import { GetDataInServerSide } from "@/lib/action";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
<<<<<<< HEAD
  
}

export default async function WebsiteLayout({ children }: LayoutProps) {
  

  return (
    <>
      <Navbar /> {/* Use fetchedData here */}
      {children}  
=======
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
>>>>>>> 5a1dd8417225a4855126502c447e4d06596241f1
      <Footer />
    </>
  );
}
