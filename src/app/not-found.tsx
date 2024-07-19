import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='flex flex-col justify-center items-center w-full h-screen'>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/" className='text-black p-4 bg-primary'>Return Home</Link>
    </div>
  )
}