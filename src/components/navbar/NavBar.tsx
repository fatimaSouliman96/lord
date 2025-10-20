import { useState, useEffect, useRef } from "react";
import { navLinks } from "../../constance/navLinks";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";

export default function NavBar() {

    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [valueScroll, setValueScroll] = useState(0)

    const menuRef = useRef<HTMLDivElement>(null);

    // Track scroll to change styles
    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            window.scrollY == 100 && console.log(window.scrollY)
            setValueScroll(window.scrollY)
            setScrolled(offset > 20); // threshold to trigger change
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close menu on outside click
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target as Node)
            ) {
                setOpen(false);
            }
        }

        if (open) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [open]);
    return (
        <>
            <div className={`${open ? "block" : "hidden"} z-50 w-full h-full absolute top-0 left-0 bg-[#00000040]`} >
            </div>
            <nav
                className={`h-32 transition-all duration-1000 py-4 max-w-full w-full fixed top-0 z-50 flex items-center 
                            px-4 xl:px-24 lg:-px-4 md:px-2
                            justify-between 
                            ${open ? "" : `${valueScroll >= 1 && valueScroll < 400 ? "transform -translate-y-28" :
                        `${scrolled ? "bg-white shadow-md" : "bg-transparent"}`
                        }`
                    }
                        `}
            >


                <img src="/new-logo.svg" className="w-44 lg:w-64 md:w-56 h-52" alt="lord" />


                {/* Desktop Menu */}
                <ul className="gap-16 pl-16 sm:hidden hidden lg:flex md:hidden">
                    {navLinks.map((ele, index) => {

                        return (
                            <li
                                key={index}
                                className={`group text-lg transition-[color] duration-700 ease-in-out  font-medium  
                            hover:text-[#ffd15d]
                              ${scrolled ? "text-black" : "text-white"}`}
                            >
                                <Link to={ele.link}>{ele.title}</Link>
                                <span
                                    className="
                                    block 
                                    h-[2px] 
                                    bg-[#ffd15d] 
                                    w-0 
                                    transition-all 
                                    duration-700 
                                    ease-in-out 
                                    group-hover:w-full
                                " ></span>
                            </li>
                        );
                    })}
                </ul>
                <Link to={"campaigns"} className="border-0 text-lg font-medium py-1.5 px-4.5 rounded-[10px]  sm:hidden hidden lg:flex md:hidden items-center justify-center bg-[linear-gradient(180deg,#ffd15d_-23%,#ff9900_100%)] text-[#357faf]" >

                    اشترك

                </Link >
                {/* Mobile Menu Button */}
                <div className={`${scrolled ? "bg-[#1c577d]" : "bg-[#00000052]"} lg:hidden xl:hidden w-[45px] h-[45px] justify-center rounded-full  flex gap-2 items-center`}>
                    <button
                        ref={buttonRef}
                        onClick={() => setOpen(!open)}
                        className=" flex flex-col justify-center items-center gap-[5px] w-full"
                    >
                        <span className={`block w-[42%] h-0.5 transition-all duration-300 bg-white`}></span>
                        <span className={`block w-[42%] h-[1px] transition-all duration-300 bg-white`}></span>
                        <span className={`block w-[42%] h-0.5 transition-all duration-300 bg-white`}></span>
                    </button>
                </div>
                {/* Mobile Menu */}
                < div
                    ref={menuRef}
                    className={`${open ? "translate-x-0  transform" : "-translate-x-[70rem]  transform"}  fixed top-0 left-0 w-full transition-all flex xl:hidden  duration-1000  h-screen  flex-col items-center  gap-1 lg:hidden 
                     bg-black p-10`}
                >
                    <IoClose className="self-end text-[#ffffff7a]" size={50} onClick={() => setOpen(!open)} />
                    <img src="/logo.svg" className="self-center w-32 lg:w-44 md:w-32  h-44" alt="lord" />

                    <ul className="w-full" >
                        {navLinks.map((ele) => {

                            return (
                                <li
                                    key={ele.title}
                                    className={`text-lg py-3.5 w-full transition-all duration-200 
                                ${scrolled ? "text-white" : "text-white"} 
                                ${"font-medium border-b-[1px] border-[#ffffff3c] "}`}
                                    onClick={() => setOpen(false)}
                                >
                                    <Link onClick={() => setOpen(!open)} to={ele.link}>{ele.title}</Link>
                                </li>
                            );

                        })}
                        <li className={`text-lg py-3.5 w-full transition-all duration-200 
                                ${scrolled ? "text-white" : "text-white"} 
                                ${"font-medium"}`}>
                            اشترك
                        </li>
                    </ul>
                </div>



            </nav >
        </>
    );
}
