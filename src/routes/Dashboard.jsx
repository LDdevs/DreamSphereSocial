// import Logo from '../assets/Dreamspherelogo.png';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


// import { useState } from 'react';
// import { FaBars, FaTimes } from 'react-icons/fa';

// import { HiOutlineMail } from 'react-icons/hi';
// import { BsFillPersonLinesFill } from 'react-icons/bs';
// import { Link } from 'react-router-dom';
// import { SlLogin } from "react-icons/sl";
// import Logo from '../assets/2.png';
import Avatar from '../assets/Avatar2.png';
// import Logo_white from '../assets/dslogo-white.png';
// import Logo_white_alt from '../assets/logo-alt.png';
// import Search_b from '../assets/search-b.png';
// import Toggle_day from '../assets/day.png';

// import { SlLogin } from "react-icons/sl";

const Dashboard = () => {
    return (
        <div>
            <Navbar />

            <div id='dashboardhero' className="mx-[auto] w-full z-1 flex justify-center  bg-full items-center text-center px-[80px] py-[7px] bg-cover bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-[rgb(2,0,36);] bg-fixed">
                <div className='h-[full] '>
                </div>
                <div id='profilepic' className=''>
                    <h1 className='text-white md:shrink-0 px-6 mx-[auto]  text-4xl sm:text-7xl font-bold py-[7px] grid grid-flow-row auto-rows-max'>My Dashboard</h1>

                </div> 
                </div>
                <div className='bg-white  w-[80px] flex flex-wrap'>
                    <img src={[Avatar]} alt="" className='rounded-[30px] flex flex-wrap justify-center' />
                </div>


                {/* CARDS */}



            
            <Footer />
        </div>
    )
}

export default Dashboard