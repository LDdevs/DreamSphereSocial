import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
// import React from 'react'

// import { useState } from 'react';
// import { FaBars, FaTimes } from 'react-icons/fa';

// import { HiOutlineMail } from 'react-icons/hi';
// import { BsFillPersonLinesFill } from 'react-icons/bs';
// import { Link } from 'react-router-dom';
// import { SlLogin } from "react-icons/sl";
import Logo from '../assets/2.png';
import Marquee from '../components/Marquee';
import CardCat from '../components/CardCat';
// import Logo_white from '../assets/dslogo-white.png';
// import Logo_white_alt from '../assets/logo-alt.png';
// import Search_b from '../assets/search-b.png';
// import Toggle_day from '../assets/day.png';

// import { SlLogin } from "react-icons/sl";

const Featured = () => {
    return (
        <div>
            <Navbar />
            <Marquee />
            <div id='hero' className="mx-[auto] w-full z-1 flex justify-center  bg-full items-center text-center px-[80px] py-[7px] bg-cover bg-[url('/assets/boat.png')] text-[rgb(2,0,36);] bg-fixed">
                <div className='h-[100%] '>


                    <div id="hero-header" className="my-[50%]">
                        <img className='min-w-[280] md:w-[380px] lg:w-[480px] mx-[auto] flex sm:w-auto h-[auto] justify-center align-middle' src={Logo} alt="" />
                        <h1 id="title" className='text-white md:shrink-0 px-6 mx-[auto] flex text-4xl sm:text-7xl font-bold'>Featured</h1>
                        <p className='text-white px-2 md:shrink-0 mx-[auto]'>Browse the latest Bucket list Items! </p>

                    </div>
                </div>

            </div>
            <CardCat />
            {/* CARDS */}
            <div className="grid grid-flow-row auto-rows-max">
                <div>
                    <div className="w-80 bg-white shadow rounded border border-transparent hover:border-blue-500 cursor-pointer">
                        <div className="h-48 w-full bg-gray-200 flex flex-col justify-between p-4 bg-cover bg-center" style="background-image: url('https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')">
                            <div>
                                <input type="checkbox" />
                            </div>
                            <div className="w-8 h-9 bg-white rounded flex items-center justify-center text-red-500">

                                {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" /></svg> */}
                            </div>
                        </div>
                        <div className="p-4">
                            <div className="flex items-center justify-between">
                                <h1 className="text-gray-600 font-medium">titan.jpg</h1>
                                <button className="text-gray-500 hover:text-gray-900">
                                    {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" /></svg> */}
                                </button>
                            </div>
                            <p className="text-gray-400 text-sm my-1">Jack cooper</p>
                            <span className="uppercase text-xs bg-green-50 p-0.5 border-green-500 border rounded text-green-700 font-medium">Approved</span>
                        </div>
                    </div>
                </div>
                <div>02</div>
                <div>03</div>
            </div>




            <Footer />

        </div>

    )
}

export default Featured