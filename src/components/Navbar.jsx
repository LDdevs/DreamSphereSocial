import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

// import { HiOutlineMail } from 'react-icons/hi';
// import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
// import { SlLogin } from "react-icons/sl";
import Logo from '../assets/2.png';
// import Logo_white from '../assets/dslogo-white.png';
// import Logo_white_alt from '../assets/logo-alt.png';
import Search_b from '../assets/search-b.png';
// import Toggle_day from '../assets/day.png';

// import { SlLogin } from "react-icons/sl";

import { Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Navbar = () => {

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    const Nav = () => {
        const [isOpen, setIsOpen] = useState(false);

    return (

        <div className=' w-full h-[100px]  items-center p-[20px]  text-gray-300 z-1000'>


            {/* <!-- Toggle button --> */}
            <div className='text-white flex justify-center h-full mx-[160px]'>
                <div className="hidden md:flex cursor-pointer">
                    <div>
                        <img src={Logo} alt="Logo Image" className='w-[145px]' />
                    </div>
                    {/* <img className="" style={{ width: '155px' }} src={Logo_white_alt} alt='' id='Logo'></img> */}
                    <Link id='Link' className='block lg:inline-block hover:text-[rgb(2,0,36);] mt-4   p-4 text-right text-lg text-black flex-1 mx-[10px] my-[10px]' to='/'>Home</Link>
                    <Link id='Link' className='block lg:inline-block hover:text-[rgb(2,0,36);] mt-4   p-4 text-right text-lg text-black flex-1 mx-[10px] my-[10px]' to='/Featured'>Featured</Link>
                    <Link id='Link' className='block lg:inline-block hover:text-[rgb(2,0,36);] mt-4   p-4 text-right text-lg text-black flex-1 mx-[10px] my-[10px]' to='/dashboard'>Dashboard</Link>
                    <Link id='Link' className='block lg:inline-block hover:text-[rgb(2,0,36);] mt-4   p-4 text-right text-lg text-black flex-1 mx-[10px] my-[10px]' to='/contact'>Contact</Link>
                    {/* <Link id='Link' className='block lg:inline-block hover:text-green-400 mt-4   p-4 text-center text-lg text-white flex-2 mx-[10px] my-[10px]' to='/404.html'>404</Link> */}

                    <div id='search-box' className='flex bg-green-300 px-[1px] py-[2px] rounded-full'>
                        <input id='search-box-input' type="text" placeholder='Search' className='p-1 bg-transparent outline-none text-lg max-w-64 text-[rgb(2,0,36);]' />
                        <img src={Search_b} alt="" id='search-icon' className='z-10 w-5 cursor-pointer mr-8 text-black' />
                    </div>
                    <Link id='Link' className='p-4 text-center text-lg text-black flex-4 mx-[10px] my-[20px] hover:text-[rgb(2,0,36);]' to='/Login'>Login/SignUp</Link>
                    {/* <Link id='Link' className='p-4 text-center text-lg text-black flex-4 mx-[10px] my-[20px] hover:text-[rgb(2,0,36);]' to='/src/routes/Signup.jsx'>Sign Up</Link> */}
                </div>

                <button className="show-nav text-3xl cursor-pointer">
                    <i className="fa-solid fa-bars"></i>
                </button>


                {/* Hamburger */}
                <div onClick={handleClick} className='flex justify-end p-[20px] bg-[#a5a9ae] hover:text-[rgb(2,0,36);] z-10 rounded-full'>
                    {!nav ? <FaBars /> : <FaTimes />}
                </div>

                <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
                    <div className="flex items-center flex-shrink-0 text-white mr-6">
                        <span className="font-semibold text-xl tracking-tight">Burger Menu</span>
                    </div>
                    <div className="block lg:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
                        >
                            {isOpen ? (
                                <XIcon className="h-6 w-6" aria-hidden="true" />
                            ) : (
                                <MenuIcon className="h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                    <Transition
                        show={isOpen}
                        enter="transition duration-200 ease-out"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="transition duration-200 ease-in"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        {(ref) => (
                            <div
                                ref={ref}
                                className="w-full block flex-grow lg:flex lg:items-center lg:w-auto"
                            >
                                <div className="text-sm lg:flex-grow">
                                    <a
                                        href="#responsive-header"
                                        className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                                    >
                                        Link 1
                                    </a>
                                    <a
                                        href="#responsive-header"
                                        className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                                    >
                                        Link 2
                                    </a>
                                    <a
                                        href="#responsive-header"
                                        className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
                                    >
                                        Link 3
                                    </a>
                                </div>
                            </div>
                        )}
                    </Transition>
                </nav>

            </div>
        </div>




    )
}}

export default Navbar

