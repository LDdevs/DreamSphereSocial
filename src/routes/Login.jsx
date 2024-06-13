import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
// import { useState } from 'react';
// import { FaBars, FaTimes } from 'react-icons/fa';

// import { HiOutlineMail } from 'react-icons/hi';
// import { BsFillPersonLinesFill } from 'react-icons/bs';
// import { Link } from 'react-router-dom';
// import { SlLogin } from "react-icons/sl";
import Logo from '../assets/Dreamspherelogo.png';
// import Logo_white from '../assets/dslogo-white.png';
// import Logo_white_alt from '../assets/logo-alt.png';
// import Search_b from '../assets/search-b.png';
// import Toggle_day from '../assets/day.png';

// import { SlLogin } from "react-icons/sl";


const Login = () => {
    return (
        <div>
            <Navbar />

            <div id='loginhero' className="mx-[auto] w-full z-1 flex justify-center items-center text-center px-[80px] py-[7px] bg-cover bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-[rgb(2,0,36);] ">
                <div className='h-[100%] '>


                    <div id="hero-header" className="my-[50%]">
                        <img className='min-w-[280] md:w-[380px] lg:w-[480px] mx-[auto] flex sm:w-auto h-[auto] justify-center align-middle' src={Logo} alt="" />
                        <h1 id="title" className='text-white md:shrink-0 px-6 mx-[auto] flex text-4xl sm:text-7xl font-bold'>Login</h1>
                        

                    <div className='bg-white w-[auto] h-[auto] rounded-[40px]'>
                        <p className='text-[rgb(134,239,172);] px-2 md:shrink-0 mx-[auto]'>Log in below! </p>
                        <form action="#" className='flex flex-col max-w-[1000px] w-[auto]'>
                        <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
                        <input className='my-4 p-2 bg-[#ccd6f6]' type="password" placeholder='Password' name='password'/>
                        <button className='flex w-[auto]'>Forgotten Password?</button>
                        <button className='flex w-[auto] my-4 p-2 bg-[rgb(134,239,172);]'>Login</button>
                        </form>
                    </div>

                    </div>
                </div>

            </div>


            <Footer />
        </div>
    )
}

export default Login