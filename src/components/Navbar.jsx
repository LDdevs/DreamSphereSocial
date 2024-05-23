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

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    return (

        <div className=' w-screen h-[1px]  items-center p-[20px]  text-gray-300 z-10'>


            {/* <!-- Toggle button --> */}
            <div className='text-white flex justify-center  mx-[160px]'>
                <div className="hidden md:flex cursor-pointer">
                    <div>
                        <img src={Logo} alt="Logo Image" className='w-[145px]'  />
                    </div>
                    {/* <img className="" style={{ width: '155px' }} src={Logo_white_alt} alt='' id='Logo'></img> */}
                    <Link id='Link' className='block lg:inline-block hover:text-[rgb(2,0,36);] mt-4   p-4 text-right text-lg text-black flex-1 mx-[10px] my-[10px]' to='/'>Home</Link>
                    <Link id='Link' className='block lg:inline-block hover:text-[rgb(2,0,36);] mt-4   p-4 text-right text-lg text-black flex-1 mx-[10px] my-[10px]' to='/Featured'>Featured</Link>
                    <Link id='Link' className='block lg:inline-block hover:text-[rgb(2,0,36);] mt-4   p-4 text-right text-lg text-black flex-1 mx-[10px] my-[10px]' to='/dashboard'>Dashboard</Link>
                    <Link id='Link' className='block lg:inline-block hover:text-[rgb(2,0,36);] mt-4   p-4 text-right text-lg text-black flex-1 mx-[10px] my-[10px]' to='/contact'>Contact</Link>
                    {/* <Link id='Link' className='block lg:inline-block hover:text-green-400 mt-4   p-4 text-center text-lg text-white flex-2 mx-[10px] my-[10px]' to='/404.html'>404</Link> */}

                    <div id='search-box' className='flex bg-white px-[1px] py-[2px] rounded-full'>
                        <input id='search-box-input' type="text" placeholder='Search' className='p-1 bg-transparent outline-none text-lg max-w-64 text-[rgb(2,0,36);]' />
                        <img src={Search_b} alt="" id='search-icon' className='z-10 w-5 cursor-pointer mr-8 text-black' />
                    </div>
                    <Link id='Link' className='p-4 text-center text-lg text-black flex-4 mx-[10px] my-[20px] hover:text-[rgb(2,0,36);]' to='/Login'>Login</Link>
                    <Link id='Link' className='p-4 text-center text-lg text-black flex-4 mx-[10px] my-[20px] hover:text-[rgb(2,0,36);]' to='/Sign up'>Sign Up</Link>
                </div>

                <button className="show-nav text-3xl cursor-pointer">
                    <i className="fa-solid fa-bars"></i>
                </button>


                {/* Hamburger */}
                <div onClick={handleClick} className='flex justify-end p-[20px] bg-[#a5a9ae] hover:text-[rgb(2,0,36);] z-10 rounded-full'>
                    {!nav ? <FaBars /> : <FaTimes />}
                </div>

                {/* <div  className='w-5 cursor-pointer mr-8 p-5 text-3xl text-white max-w-32'>
                <SlLogin />
                </div>
                <img src={Toggle_day} alt="" id='toggle-icon' className='w-12 cursor-pointer ml-10'/> */}


                {/* <a href="/" className="logo text-4xl text-blue-500 font-bold">Studio</a>

                
                    <button
                        className="close-nav relative top-0 right-0 text-right text-3xl md:hidden"
                    >
                        <i className="fa-solid fa-xmark"></i>
                    </button>

                    <a
                        href="#"
                        className="nav-link text-2xl mb-2 md:mr-4 hover:text-blue-400 text-blue-400 font-bold"
                    >Home</a
                    >
                    <a href="#" className="nav-link text-2xl mb-2 md:mr-4 hover:text-blue-400"
                    >About</a
                    >
                    <a href="#" className="nav-link text-2xl mb-2 md:mr-4 hover:text-blue-400"
                    >Services</a
                    >
                    <a href="#" className="nav-link text-2xl mb-2 md:mr-4 hover:text-blue-400"
                    >Contact</a
                    > */}


            </div>
        </div>




    )
}

export default Navbar

