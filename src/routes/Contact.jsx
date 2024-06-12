// import { useState } from 'react';
// import { FaBars, FaTimes } from 'react-icons/fa';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

// import { HiOutlineMail } from 'react-icons/hi';
// import { BsFillPersonLinesFill } from 'react-icons/bs';
// import { Link } from 'react-router-dom';
// import { SlLogin } from "react-icons/sl";
import Logo from '../assets/2.png';
// import Logo_white from '../assets/dslogo-white.png';
// import Logo_white_alt from '../assets/logo-alt.png';
// import Search_b from '../assets/search-b.png';
// import Toggle_day from '../assets/day.png';

// import { SlLogin } from "react-icons/sl";

const Contact = () => {
    return (
        <div>
            <Navbar />

<div id='hero' className="mx-[auto] w-full z-1 flex justify-center  bg-full items-center text-center px-[80px] py-[7px] bg-cover bg-[url('/assets/boat.png')] text-[rgb(2,0,36);] bg-fixed">
<div className='h-[100%] '>

    
    

    </div>
    <div id="hero-header" className="my-[50%]">
        <img className='min-w-[280] md:w-[380px] lg:w-[480px] mx-[auto] flex sm:w-auto h-[auto] justify-center align-middle' src={Logo} alt="" />
        <h1 id="title" className='text-white md:shrink-0 px-6 mx-[auto] flex text-4xl sm:text-7xl font-bold'>Contact Us</h1>
        <p className='text-white px-2 md:shrink-0 mx-[auto]'>Contact us below! </p>
        
        <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/868c2a09-1ae3-4ca2-b376-8e6fae0f74ac" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#ff66c4] text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4 '>Submit the form below or send me an email - lisadownie5@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name'/>
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email'/>
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-[#ff66c4] hover:border-[#ff66c4] px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate!</button>
        </form>


    </div>
</div>

{/* CARDS */}

</div>


<Footer />
        </div>
    )
}

export default Contact