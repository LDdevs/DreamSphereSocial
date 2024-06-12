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
            <div className="grid grid-flow-row ">
                <div>
                    <div className="w-80 bg-white shadow rounded border border-transparent hover:border-blue-500 cursor-pointer">
                        <div className="h-48 w-full bg-gray-200 flex flex-col justify-between p-4 bg-cover bg-center">
                            <p>Bucket Item 1</p>
                            <div className="w-8 h-9 bg-white rounded flex items-center justify-center text-red-500">
                                <button className='w-8 h-9 p-[auto] m-4 bg-white rounded flex items-center justify-center text-red-500'>Add to bucket list</button>
                                <button className='w-8 h-9 p-[auto] m-4 bg-white rounded flex items-center justify-center text-red-500'>Heart</button>
                                <button className='w-8 h-9 p-[auto] m-4 bg-white rounded flex items-center justify-center text-red-500'>See discussion <svg class="h-8 w-8 text-red-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1" />  <line x1="12" y1="12" x2="12" y2="12.01" />  <line x1="8" y1="12" x2="8" y2="12.01" />  <line x1="16" y1="12" x2="16" y2="12.01" /></svg></button>
                            </div>
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