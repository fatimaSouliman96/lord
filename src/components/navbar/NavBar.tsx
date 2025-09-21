import { useState, useEffect, useRef } from "react";
import { navLinks } from "../../constance/navLinks";
import { Link } from "react-router-dom";
import { CiUser } from "react-icons/ci";

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
        <nav
            className={`h-32 transition-all py-4  duration-1000 max-w-full w-full fixed top-0 z-50 flex items-center 
            px-4 xl:px-24 lg:-px-4 md:px-2
            md:gap-[70%] gap-[40%]  xl:gap-[4%] 2xl:gap-[7%] lg:gap-[2%] 
            justify-between lg:justify-center md:justify-center
            ${valueScroll >= 1 && valueScroll < 400 ? "transform -translate-y-28" :
                    `${scrolled ? "bg-white" : "bg-transparent"}`
                }
           
           `}
        >

            <img src="/logo.svg" className=" w-32 lg:w-44 md:w-32  h-44" alt="lord" />


            {/* Desktop Menu */}
            <ul className="gap-6 sm:hidden hidden lg:flex md:hidden">
                {navLinks.map((ele, index) => {

                    return (
                        <li
                            key={index}
                            className={`group transition-[color] duration-700 ease-in-out text-base font-medium  
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

            <div className="sm:hidden hidden lg:flex md:hidden" >
                <CiUser color={`${scrolled ? "#357faf" : "white"} `} size={30} />
                <p className={`${scrolled ? "text-[#357faf]" : "text-white"} `} >المعاملات عبر الإنترنت</p>
            </div>
            <button className="border-0 py-1.5 px-4.5 rounded-[10px]  sm:hidden hidden lg:flex md:hidden items-center justify-center bg-[linear-gradient(180deg,#ffd15d_-23%,#ff9900_100%)] text-[#357faf]" >
                اشترك
            </button>
            {/* Mobile Menu */}
            {open && (

                < div
                    ref={menuRef}
                    className={`absolute top-[7rem] left-0 flex flex-col items-center w-full gap-4 lg:hidden md:flex
                     bg-[#357faf] p-3`}
                >
                    <ul>
                        {navLinks.map((ele) => {

                            return (
                                <li
                                    key={ele.title}
                                    className={`text-lg w-fit transition-all duration-200 
                                ${scrolled ? "text-white" : "text-white"} 
                                ${"font-medium hover:border-b-2 hover:border-white"}`}
                                    onClick={() => setOpen(false)}
                                >
                                    <Link to={ele.link}>{ele.title}</Link>
                                </li>
                            );
                        })}
                    </ul>
                    <div className="flex" >
                        <CiUser color="white " size={30} />
                        <p className="text-white" >المعاملات عبر الإنترنت</p>
                    </div>
                    <button className="border-0 py-1.5 px-4.5 rounded-sm flex items-center justify-center bg-[linear-gradient(180deg,#ffd15d_-23%,#ff9900_100%)] text-[#357faf]" >
                        اشترك
                    </button>
                </div>
            )
            }

            {/* Mobile Menu Button */}
            <div className="flex gap-2 items-center">
                <button
                    ref={buttonRef}
                    onClick={() => setOpen(!open)}
                    className=" flex lg:hidden flex-col gap-2 w-8"
                >
                    <span className={`block w-full h-1 transition-all duration-300 bg-[#ffd15d]`}></span>
                    <span className={`block w-full h-1 transition-all duration-300 bg-[#ffd15d]`}></span>
                    <span className={`block w-full h-1 transition-all duration-300 bg-[#ffd15d]`}></span>
                </button>
            </div>
        </nav >
    );
}
