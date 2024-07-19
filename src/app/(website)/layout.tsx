import { Background } from "@/components/background/Background";
import Navbar from "@/components/header/Navbar";

export default function WebstieLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
