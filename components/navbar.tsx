"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
export default function Navbar(){
    const [isOpen, setIsOpen] = useState<boolean>(false);
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
            
            <nav className={ `${hasScrolled && 'bg-[#000080] backdrop-blur-[8px] transition-all duration-500 lg:py-2'} navbar flex mb-12 justify-between mx-auto text-white transition-all duration-500 lg:fixed lg:top-0 lg:inset-x-0 `}>
                {/* <Link href="/"><Image src="/welcome.png" alt="logo" width={100} height={80}  /></Link> */}
                <ul className="lg:flex hidden justify-around align-center text-center gap-8 text-white p-6 space-x-8">
                    <Link href="/"><li>Home . </li></Link>
                    <Link href="#about" className="transition duration-300 ease-in-out 2s"><li>About . </li></Link>
                    <Link href="#project"><li>Projects . </li></Link>
                    <Link href="#skills"><li>Skills . </li></Link>
                    <Link href="#contact"><li>Contact . </li></Link>
                </ul>

                <div className={`${isOpen ? "block" :"hidden"} md:hidden`}>
                    <ul className="lg:flex justify-between align-center transition-all duration-500 2s relative float-left text-center gap-8 text-white p-6 space-x-8 ">
                        <Link href="/" onClick={() => setIsOpen(false)}><li>Home</li></Link>
                        <Link href="#about" onClick={() => setIsOpen(false)} className="transition duration-300 ease-in-out 2s"><li>About</li></Link>
                        <Link href="#project" onClick={() => setIsOpen(false)}><li>Projects</li></Link>
                        <Link href="#skills" onClick={() => setIsOpen(false)}><li>Skills</li></Link>
                        <Link href="#contact" onClick={() => setIsOpen(false)}><li>Contact</li></Link>
                    </ul>
                </div>
                <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 rounded-md hover:bg-gray-100 text-black font-bold text-2xl focus:outline-none">
                    {isOpen ? (
                    <p><FontAwesomeIcon icon={faTimes } className="absolute top-5 right-5 transition 2s" />
                    </p>) : (<p><FontAwesomeIcon icon={faBars} className="transition 2s" /></p>)}
                </button>
            </nav>
        </div>
    )
}