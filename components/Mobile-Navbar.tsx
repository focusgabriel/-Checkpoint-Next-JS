// "use client"

// import {
//   Sheet,
//   SheetContent,
//   SheetDescription,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet"
// import {FaBars} from "react-icons/fa"
// import { useState } from "react";


// const MobileNav = () => {
//     const [isOpen, setIsOpen] = useState(true);
//     const navLinks = [
//         { name: "Home", href: "#home" },
//         { name: "About", href: "#about" },
//         { name: "Projects", href: "#projects" },
//         { name: "Skills", href: "#skills" },
//         { name: "Contact", href: "#contact" },
//     ]

//     return(
//         <header >
//             <Sheet > 
//                 <SheetTrigger className="md:hidden cursor-pointer text-white hover:text-gray-500 hover:scale-125 transition-all duration-500 text-right m-2 p-4 text-xl"><FaBars /></SheetTrigger>
//                     <SheetContent 
//                         side="right"
//                         className="transition-transform duration-500 ease-in-out transform data-[state=open]:translate-x-0 data-[state=closed]:translate-x-full"
//                     >
//                     <SheetHeader>
//                         <SheetTitle >Navigation</SheetTitle>
//                         <SheetDescription >Menu</SheetDescription>
//                     </SheetHeader>
//                     <nav className="flex flex-col gap-4 mt-6">
//                         {isOpen && navLinks.map(({name, href}) => (
//                             <a 
//                                 key={name}
//                                 href={href}
//                                 className="text-lg hover:text-blue-500 cursor-pointer text-center my-4 transition-all duration-300 ease-in-out transform hover:scale-110"
//                             >
//                                 {name}
//                             </a>
//                         ))}
//                     </nav>
//                 </SheetContent>
//             </Sheet>
//         </header>
//     )
// }

// export default MobileNav



"use client"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {FaBars} from "react-icons/fa"
import { useState } from "react";


const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(true);
    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Skills", href: "#skills" },
        { name: "Contact", href: "#contact" },
    ]

    return(
        <header >
            <Sheet > 
                <SheetTrigger className="md:hidden cursor-pointer text-white hover:text-gray-500 hover:scale-125 transition-all duration-500 text-right m-2 p-4 text-xl"><FaBars /></SheetTrigger>
                <SheetContent 
                    side="right"
                    className="transition-transform duration-500 ease-in-out transform data-[state=open]:translate-x-0 data-[state=closed]:translate-x-full"
                    >
                    <SheetHeader>
                        <SheetTitle >Navigation</SheetTitle>
                        <SheetDescription >Menu</SheetDescription>
                    </SheetHeader>
                    <nav className="flex flex-col gap-4 mt-6 transition-all duration-500 ease-in-out">
                        {isOpen && navLinks.map(({name, href}) => (
                            <a 
                                key={name}
                                href={href}
                                className="text-lg hover:text-blue-500 cursor-pointer text-center my-4 "
                                // onClick={() => setIsOpen(false)}
                            >
                                {name}
                            </a>
                        ))}
                    </nav>
                </SheetContent>
            </Sheet>
        </header>
    )
}

export default MobileNav