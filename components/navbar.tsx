"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import MobileNav from "@/components/Mobile-Navbar"
export default function Navbar(){
    // const [isOpen, setIsOpen] = useState<boolean>(false);
    const [hasScrolled, setHasScrolled] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            setHasScrolled(window.scrollY > 32)
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.addEventListener('scroll', handleScroll);
        }
    }, [])
    return(
        <div>
            
            <nav className={ `${hasScrolled && 'bg-[#39686c] backdrop-blur-[8px] transition-all duration-500 lg:py-2'} navbar flex mb-12 lg:justify-center sm:flex justify-end mx-auto text-white transition-all duration-500 lg:fixed lg:top-0 lg:inset-x-0 `}>
                {/* <Link href="/"><Image src="/welcome.png" alt="logo" width={100} height={80}  /></Link> */}
                <ul className="lg:flex hidden justify-between align-center text-center gap-4 text-white p-4 space-x-4">
                    <Link href="/"><li>Home <span className="ml-6">.</span> </li></Link>
                    <Link href="#about"><li>About <span className="ml-6">.</span> </li></Link>
                    <Link href="#project"><li>Projects <span className="ml-6">.</span> </li></Link>
                    <Link href="#skills"><li>Skills <span className="ml-6">.</span> </li></Link>
                    <Link href="#contact"><li>Contact </li></Link>
                </ul>
                <MobileNav />
                {/* <nav className={`${isOpen ? "block" :"hidden"} md:hidden`}>
                    <ul className="lg:flex justify-between align-center transition-all duration-500 2s relative float-left text-center gap-8 text-white p-6 space-x-8 ">
                        <Link href="/" onClick={() => setIsOpen(false)}><li>Home</li></Link>
                        <Link href="#about" onClick={() => setIsOpen(false)} className="transition duration-300 ease-in-out 2s"><li>About</li></Link>
                        <Link href="#project" onClick={() => setIsOpen(false)}><li>Projects</li></Link>
                        <Link href="#skills" onClick={() => setIsOpen(false)}><li>Skills</li></Link>
                        <Link href="#contact" onClick={() => setIsOpen(false)}><li>Contact</li></Link>
                    </ul>
                </nav>
                <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 rounded-md cursor-pointer text-white font-bold text-2xl focus:outline-none text-center ">
                    {isOpen ? (
                    <p><FontAwesomeIcon icon={faTimes } className="absolute top-5 right-5 transition 2s" />
                    </p>) : (<p><FontAwesomeIcon icon={faBars} className="transition 2s text-center" /></p>)}
                </button> */}
            </nav>
        </div>
    )
}