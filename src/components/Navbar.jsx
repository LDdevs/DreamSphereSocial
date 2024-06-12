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



const Navbar = () => {

    const [nav] = useState(false)
    // const handleClick = () => setNav(!nav)
    const [showMenu, setShowMenu] = useState(false)

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
                    {/* <Link id='Link' className='block lg:inline-block hover:text-[rgb(2,0,36);] mt-4   p-4 text-right text-lg text-black flex-1 mx-[10px] my-[10px]' to='/dashboard'>Dashboard</Link> */}
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
                
                <div onClick={() => setShowMenu (showMenu => !showMenu)} className='my-[50px] xl:hidden flex flex-wrap justify-end p-[20px] bg-[#a5a9ae] hover:text-[rgb(2,0,36);] z-10 rounded-full'>
                    {!nav ? <FaBars /> : <FaTimes />}
                </div>
                    {showMenu && (
                    <div className='flex flex-wrap bg-[#a5a9ae] lg:hidden text-sm lg:flex-grow '>
                        <a
                            href="#responsive-header" to='/'
                            className="block mt-4 lg:inline-block lg:mt-10 text-teal-200 hover:text-white mr-4 sm:mr-8"
                        >
                            Home
                        </a>
                        <a
                            href="#responsive-header" to='/Featured'
                            className="block mt-4 lg:inline-block lg:mt-10 text-teal-200 hover:text-white mr-4 sm:mr-8"
                        >
                            Featured
                        </a>
                        {/* <a
                            href="#responsive-header"
                            className="block mt-4 lg:inline-block lg:mt-10 text-teal-200 hover:text-white mr-4 sm:mr-8"
                        >
                            Dashboard
                        </a> */}
                        <a
                            href="#responsive-header" to='/contact'
                            className="block mt-4 lg:inline-block lg:mt-10 text-teal-200 hover:text-white mr-4 sm:mr-8"
                        >
                            Contact
                        </a>
                        <a
                            href="#responsive-header" to='/Login'
                            className="block mt-4 lg:inline-block lg:mt-10 text-teal-200 hover:text-white mr-4 sm:mr-8"
                        >
                            Login/Signup
                        </a>
                    </div>)}
                           
                    
            </div>
        </div>




    )
}

export default Navbar

