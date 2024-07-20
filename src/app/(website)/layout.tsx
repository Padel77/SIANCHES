import { Background } from "@/components/background/Background";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/header/Navbar";

export default function WebstieLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Navbar />
      {children}
      <Footer/>
    </>
  );
}
