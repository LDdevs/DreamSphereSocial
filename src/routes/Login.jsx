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

            <div id='loginhero' className="mx-[auto] w-screen z-1 flex flex-wrap justify-center items-center text-center px-[80px] py-[70px] bg-cover bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-[rgb(2,0,36);] ">
                <div className='h-[full] '>


                    <div id="hero-header" className='my-[auto]'>
                        <img className='min-w-[280] md:w-[380px] lg:w-[480px] mx-[auto] flex sm:w-auto h-[auto] justify-center align-middle' src={Logo} alt="" />

                        <h1 id="title" className='text-white md:shrink-0 px-6 mx-[auto]  text-4xl sm:text-7xl font-bold py-[7px] grid grid-cols-2 gap-4'>Login</h1>
                        <div className='bg-[#ccd6f67e] w-[auto] h-[auto] shadow-md rounded py-[7px]'>
                            <p className='text-[rgb(134,239,172);] px-2 md:shrink-0 mx-[auto]'>Log in below! </p>
                            <form action="#" className='flex flex-col max-w-[1000px] w-[auto]'>
                                <input className='my-4 p-2 py-[7px] bg-[#ffffff]' type="email" placeholder='Email' name='email' />
                                <input className='my-4 p-2 py-[7px] bg-[#ffffff]' type="password" placeholder='Password' name='password' />
                                <button className='flex w-[auto]'>Forgotten Password?</button>
                                <button className='bg-transparent hover:bg-[rgb(134,239,172);] text-white font-semibold hover:text-white py-2 px-4 border border-[rgb(134,239,172);] hover:border-transparent rounded'>Login</button>
                            </form>
                        </div>



                        <h1 id="title" className=' text-white md:shrink-0 px-6 mx-[auto]  text-4xl sm:text-7xl font-bold py-[7px] grid grid-cols-2 gap-4'>Sign Up</h1>
                        <div className=' bg-[#ccd6f67e] w-[auto] h-[auto] shadow-md rounded py-[7px]'>
                            <p className='text-[rgb(134,239,172);] px-2 py-[7px] md:shrink-0 mx-[auto]'>Log in below! </p>
                            <form action="#" className='flex flex-col max-w-[1000px] w-[auto]'>
                                <input className='my-4 bg-[#ffffff] p-2 py-[7px]' type="text" placeholder='First Name' name='name' />
                                <input className='my-4 bg-[#ffffff] p-2 py-[7px]' type="text" placeholder='Last Name' name='name' />
                                <input className='my-4 p-2 py-[7px] bg-[#ffffff]' type="email" placeholder='Email' name='email' />
                                <input className='my-4 p-2 py-[7px] bg-[#ffffff]' type="password" placeholder='New Password' name='password' />
                                <input className='my-4 p-2 py-[7px] bg-[#ffffff]' type="password" placeholder='Confirm Password' name='password' />
                                <div className="inline-block relative w-64 my-4">
                                    <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                        <option>Town/City</option>
                                        <option>Edinburgh</option>
                                        <option>London</option>
                                        <option>Dublin</option>
                                        <option>Cardiff</option>
                                        <option>Paris</option>
                                        <option>Rome</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                    </div>
                                </div>
                                <button className='bg-transparent hover:bg-[rgb(134,239,172);] text-white font-semibold hover:text-white py-2 px-4 border border-[rgb(134,239,172);] hover:border-transparent rounded'>Sign Up</button>
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