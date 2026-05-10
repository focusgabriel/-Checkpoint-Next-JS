import Link from "next/link";

export default function Home() {
  return(
    <main className="mt-30 min-h-screen transition duration-300 ease-in-out 2s" id="hero">
      <p className="text-2xl p-6 flex align-center justify-center">Ever, Welcome to my Website...</p> 
      <h1 className="font-bold lg:text-6xl text-3xl p-6 flex align-center justify-center">
        Software Developer
      </h1>
      <p className="px-6 flex align-center justify-center text-lg">looking for a software developer for your
        business, you are at the right place at the right time.
      </p>
      <p className="px-6 flex align-center justify-center text-lg">i'm not just another developer,
        i'm actually good at what i do. Bringing ideas into life...
      </p>
      <Link href="#about" className="flex align-center justify-center"><button style={{background: "white", color: "black", cursor:"pointer", borderRadius:"5px"}} className="p-2 mt-8">About Page</button></Link>
    </main>
  )
}