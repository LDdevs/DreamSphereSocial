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
                <div>01</div>
                <div>02</div>
                <div>03</div>
            </div>




            <Footer />

        </div>

    )
}

export default Featured