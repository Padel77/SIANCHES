import Footer from "@/components/footer/Footer";
import Navbar from "@/components/header/Navbar";
import { GetDataInServerSide } from "@/lib/action";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;

}

export default async function WebsiteLayout({ children }: LayoutProps) {

  return (
    <>
      <Navbar /> {/* Use fetchedData here */}
      {children}
      <Footer />
    </>
  );
}
