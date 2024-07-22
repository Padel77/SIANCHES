<<<<<<< HEAD
import { Background } from "@/components/background/Background";
import Navbar from "@/components/header/Navbar";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center w-full h-screen">
        <Background
          title={"Page Not Found"}
          className="flex h-full text-center items-center justify-center md:text-7xl text-5xl  italic font-bold max-w-lg mx-auto"
          showButton={false}
        />
      </div>
    </>
  );
}
=======
import Navbar from '@/components/header/Navbar'
import Link from 'next/link'
 
export default function NotFound() {
  return (<>
    <Navbar data={""} />
    <div className='flex flex-col justify-center items-center w-full h-screen'>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/" className='text-black p-4 bg-primary'>Return Home</Link>
    </div>
    </>
  )
}
>>>>>>> 5a1dd8417225a4855126502c447e4d06596241f1
