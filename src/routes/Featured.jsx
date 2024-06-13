import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
// import React from 'react'

// import { useState } from 'react';
// import { FaBars, FaTimes } from 'react-icons/fa';

// import { HiOutlineMail } from 'react-icons/hi';
// import { BsFillPersonLinesFill } from 'react-icons/bs';
// import { Link } from 'react-router-dom';
// import { SlLogin } from "react-icons/sl";
import Logo from '../assets/Dreamspherelogo.png';
import Marquee from '../components/Marquee';
import CardCat from '../components/CardCat';
// import Logo_white from '../assets/dslogo-white.png';
// import Logo_white_alt from '../assets/logo-alt.png';
// import Search_b from '../assets/search-b.png';
// import Toggle_day from '../assets/day.png';

// import { SlLogin } from "react-icons/sl";

import { SlLike } from "react-icons/sl";
import { SlHeart } from "react-icons/sl";
import { SlSpeech } from "react-icons/sl";

import travel from '../assets/travelcard.png';

const Featured = () => {
    return (
        <div>
            <Navbar />
            <Marquee />
            <div id='hero' className="mx-[auto] w-full z-1 flex justify-center  bg-full items-center text-center px-[80px] py-[7px] bg-cover bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-[rgb(2,0,36);] bg-fixed">
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
            <h1 className='md:shrink-0 my-4 px-6 mx-[auto] flex text-4xl sm:text-7xl font-bold'>New</h1>
            <div className="flex grid-col-4 grid-flow-col flex-wrap gap-4">
                <div>
                    <div className="w-80 shadow rounded border border-transparent hover:border-blue-500 cursor-pointer bg-gray-200">
                        <div  id='travelcard' className="h-[auto] w-full rounded-[40px] flex flex-col justify-between p-4 bg-cover bg-center">
                        <img  className='' src={travel} alt="" />
                            <p>Bucket Item 1</p>
                            <p className='flex items-center justify-center w-[auto] p-auto'>info about this one</p>
                            <div className="w-auto h-auto  rounded flex items-center justify-center ">
                                <button className='w-8 h-9 p-[auto] m-4 bg-white rounded flex items-center justify-center text-[rgb(134,239,172);]'><SlLike /></button>
                                <button className='w-8 h-9 p-[auto] m-4 bg-white rounded flex items-center justify-center text-red-700'><SlHeart /></button>
                                <button className='w-8 h-9 p-[auto] m-4 bg-white rounded flex items-center justify-center text-[rgb(134,239,172);]'><SlSpeech /></button>
                            </div>
                        </div>

                    </div>
                </div>

                <div>
                    <div className="w-80 shadow rounded border border-transparent hover:border-blue-500 cursor-pointer bg-gray-200">
                        <div  id='travelcard' className="h-[auto] w-full rounded-[40px] flex flex-col justify-between p-4 bg-cover bg-center">
                        <img  className='' src={travel} alt="" />
                            <p>Bucket Item 2</p>
                            <p className='flex items-center justify-center w-[auto] p-auto'>info about this one</p>
                            <div className="w-auto h-auto  rounded flex items-center justify-center ">
                                <button className='w-8 h-9 p-[auto] m-4 bg-white rounded flex items-center justify-center text-[rgb(134,239,172);]'><SlLike /></button>
                                <button className='w-8 h-9 p-[auto] m-4 bg-white rounded flex items-center justify-center text-red-700'><SlHeart /></button>
                                <button className='w-8 h-9 p-[auto] m-4 bg-white rounded flex items-center justify-center text-[rgb(134,239,172);]'><SlSpeech /></button>
                            </div>
                        </div>

                    </div>
                </div>
                <div>
                    <div className="w-80 shadow rounded border border-transparent hover:border-blue-500 cursor-pointer bg-gray-200">
                        <div  id='travelcard' className="h-[auto] w-full rounded-[40px] flex flex-col justify-between p-4 bg-cover bg-center">
                        <img  className='' src={travel} alt="" />
                            <p>Bucket Item 3</p>
                            <p className='flex items-center justify-center w-[auto] p-auto'>info about this one</p>
                            <div className="w-auto h-auto  rounded flex items-center justify-center ">
                                <button className='w-8 h-9 p-[auto] m-4 bg-white rounded flex items-center justify-center text-[rgb(134,239,172);]'><SlLike /></button>
                                <button className='w-8 h-9 p-[auto] m-4 bg-white rounded flex items-center justify-center text-red-700'><SlHeart /></button>
                                <button className='w-8 h-9 p-[auto] m-4 bg-white rounded flex items-center justify-center text-[rgb(134,239,172);]'><SlSpeech /></button>
                            </div>
                        </div>

                    </div>
                </div>
                <div>
                    <div className="w-80 shadow rounded border border-transparent hover:border-blue-500 cursor-pointer bg-gray-200">
                        <div  id='travelcard' className="h-[auto] w-full rounded-[40px] flex flex-col justify-between p-4 bg-cover bg-center">
                        <img  className='' src={travel} alt="" />
                            <p>Bucket Item 4</p>
                            <p className='flex items-center justify-center w-[auto] p-auto'>info about this one</p>
                            <div className="w-auto h-auto  rounded flex items-center justify-center ">
                                <button className='w-8 h-9 p-[auto] m-4 bg-white rounded flex items-center justify-center text-[rgb(134,239,172);]'><SlLike /></button>
                                <button className='w-8 h-9 p-[auto] m-4 bg-white rounded flex items-center justify-center text-red-700'><SlHeart /></button>
                                <button className='w-8 h-9 p-[auto] m-4 bg-white rounded flex items-center justify-center text-[rgb(134,239,172);]'><SlSpeech /></button>
                            </div>
                        </div>

                    </div>
                </div>
                <div>
                    <div className="w-80 shadow rounded border border-transparent hover:border-blue-500 cursor-pointer bg-gray-200">
                        <div  id='travelcard' className="h-[auto] w-full rounded-[40px] flex flex-col justify-between p-4 bg-cover bg-center">
                        <img  className='' src={travel} alt="" />
                            <p>Bucket Item 5</p>
                            <p className='flex items-center justify-center w-[auto] p-auto'>info about this one</p>
                            <div className="w-auto h-auto  rounded flex items-center justify-center ">
                                <button className='w-8 h-9 p-[auto] m-4 bg-white rounded flex items-center justify-center text-[rgb(134,239,172);]'><SlLike /></button>
                                <button className='w-8 h-9 p-[auto] m-4 bg-white rounded flex items-center justify-center text-red-700'><SlHeart /></button>
                                <button className='w-8 h-9 p-[auto] m-4 bg-white rounded flex items-center justify-center text-[rgb(134,239,172);]'><SlSpeech /></button>
                            </div>
                        </div>

                    </div>
                </div>
                <div>
                    <div className="w-80 shadow rounded border border-transparent hover:border-blue-500 cursor-pointer bg-gray-200">
                        <div  id='travelcard' className="h-[auto] w-full rounded-[40px] flex flex-col justify-between p-4 bg-cover bg-center">
                        <img  className='' src={travel} alt="" />
                            <p>Bucket Item 6</p>
                            <p className='flex items-center justify-center w-[auto] p-auto'>info about this one</p>
                            <div className="w-auto h-auto  rounded flex items-center justify-center ">
                                <button className='w-8 h-9 p-[auto] m-4 bg-white rounded flex items-center justify-center text-[rgb(134,239,172);]'><SlLike /></button>
                                <button className='w-8 h-9 p-[auto] m-4 bg-white rounded flex items-center justify-center text-red-700'><SlHeart /></button>
                                <button className='w-8 h-9 p-[auto] m-4 bg-white rounded flex items-center justify-center text-[rgb(134,239,172);]'><SlSpeech /></button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            <h1 className='md:shrink-0 my-4 px-6 mx-[auto] flex text-4xl sm:text-7xl font-bold'>Popular</h1>
            <div className="flex grid-col-4 grid-flow-col flex-wrap gap-4">
                <div>
                    <div className="w-80 shadow rounded border border-transparent hover:border-blue-500 cursor-pointer bg-gray-200">
                        <div  id='travelcard' className="h-[auto] w-full rounded-[40px] flex flex-col justify-between p-4 bg-cover bg-center">
                        <img  className='' src={travel} alt="" />
                            <p>Bucket Item 1</p>
                            <p className='flex items-center justify-center w-[auto] p-auto'>info about this one</p>
                            <div className="w-auto h-auto  rounded flex items-center justify-center ">
                                <button className='w-8 h-9 p-[auto] m-4 bg-white rounded flex items-center justify-center text-[rgb(134,239,172);]'><SlLike /></button>
                                <button className='w-8 h-9 p-[auto] m-4 bg-white rounded flex items-center justify-center text-red-700'><SlHeart /></button>
                                <button className='w-8 h-9 p-[auto] m-4 bg-white rounded flex items-center justify-center text-[rgb(134,239,172);]'><SlSpeech /></button>
                            </div>
                        </div>

                    </div>
                </div>

                <div>
                    <div className="w-80 shadow rounded border border-transparent hover:border-blue-500 cursor-pointer bg-gray-200">
                        <div  id='travelcard' className="h-[auto] w-full rounded-[40px] flex flex-col justify-between p-4 bg-cover bg-center">
                        <img  className='' src={travel} alt="" />
                            <p>Bucket Item 2</p>
                            <p className='flex items-center justify-center w-[auto] p-auto'>info about this one</p>
                            <div className="w-auto h-auto  rounded flex items-center justify-center ">
                                <button className='w-8 h-9 p-[auto] m-4 bg-white rounded flex items-center justify-center text-[rgb(134,239,172);]'><SlLike /></button>
                                <button className='w-8 h-9 p-[auto] m-4 bg-white rounded flex items-center justify-center text-red-700'><SlHeart /></button>
                                <button className='w-8 h-9 p-[auto] m-4 bg-white rounded flex items-center justify-center text-[rgb(134,239,172);]'><SlSpeech /></button>
                            </div>
                        </div>

                    </div>
                </div>
                <div>
                    <div className="w-80 shadow rounded border border-transparent hover:border-blue-500 cursor-pointer bg-gray-200">
                        <div  id='travelcard' className="h-[auto] w-full rounded-[40px] flex flex-col justify-between p-4 bg-cover bg-center">
                        <img  className='' src={travel} alt="" />
                            <p>Bucket Item 3</p>
                            <p className='flex items-center justify-center w-[auto] p-auto'>info about this one</p>
                            <div className="w-auto h-auto  rounded flex items-center justify-center ">
                                <button className='w-8 h-9 p-[auto] m-4 bg-white rounded flex items-center justify-center text-[rgb(134,239,172);]'><SlLike /></button>
                                <button className='w-8 h-9 p-[auto] m-4 bg-white rounded flex items-center justify-center text-red-700'><SlHeart /></button>
                                <button className='w-8 h-9 p-[auto] m-4 bg-white rounded flex items-center justify-center text-[rgb(134,239,172);]'><SlSpeech /></button>
                            </div>
                        </div>

                    </div>
                </div>
                <div>
                    <div className="w-80 shadow rounded border border-transparent hover:border-blue-500 cursor-pointer bg-gray-200">
                        <div  id='travelcard' className="h-[auto] w-full rounded-[40px] flex flex-col justify-between p-4 bg-cover bg-center">
                        <img  className='' src={travel} alt="" />
                            <p>Bucket Item 4</p>
                            <p className='flex items-center justify-center w-[auto] p-auto'>info about this one</p>
                            <div className="w-auto h-auto  rounded flex items-center justify-center ">
                                <button className='w-8 h-9 p-[auto] m-4 bg-white rounded flex items-center justify-center text-[rgb(134,239,172);]'><SlLike /></button>
                                <button className='w-8 h-9 p-[auto] m-4 bg-white rounded flex items-center justify-center text-red-700'><SlHeart /></button>
                                <button className='w-8 h-9 p-[auto] m-4 bg-white rounded flex items-center justify-center text-[rgb(134,239,172);]'><SlSpeech /></button>
                            </div>
                        </div>

                    </div>
                </div>
                <div>
                    <div className="w-80 shadow rounded border border-transparent hover:border-blue-500 cursor-pointer bg-gray-200">
                        <div  id='travelcard' className="h-[auto] w-full rounded-[40px] flex flex-col justify-between p-4 bg-cover bg-center">
                        <img  className='' src={travel} alt="" />
                            <p>Bucket Item 5</p>
                            <p className='flex items-center justify-center w-[auto] p-auto'>info about this one</p>
                            <div className="w-auto h-auto  rounded flex items-center justify-center ">
                                <button className='w-8 h-9 p-[auto] m-4 bg-white rounded flex items-center justify-center text-[rgb(134,239,172);]'><SlLike /></button>
                                <button className='w-8 h-9 p-[auto] m-4 bg-white rounded flex items-center justify-center text-red-700'><SlHeart /></button>
                                <button className='w-8 h-9 p-[auto] m-4 bg-white rounded flex items-center justify-center text-[rgb(134,239,172);]'><SlSpeech /></button>
                            </div>
                        </div>

                    </div>
                </div>
                <div>
                    <div className="w-80 shadow rounded border border-transparent hover:border-blue-500 cursor-pointer bg-gray-200">
                        <div  id='travelcard' className="h-[auto] w-full rounded-[40px] flex flex-col justify-between p-4 bg-cover bg-center">
                        <img  className='' src={travel} alt="" />
                            <p>Bucket Item 6</p>
                            <p className='flex items-center justify-center w-[auto] p-auto'>info about this one</p>
                            <div className="w-auto h-auto  rounded flex items-center justify-center ">
                                <button className='w-8 h-9 p-[auto] m-4 bg-white rounded flex items-center justify-center text-[rgb(134,239,172);]'><SlLike /></button>
                                <button className='w-8 h-9 p-[auto] m-4 bg-white rounded flex items-center justify-center text-red-700'><SlHeart /></button>
                                <button className='w-8 h-9 p-[auto] m-4 bg-white rounded flex items-center justify-center text-[rgb(134,239,172);]'><SlSpeech /></button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            <h1 className='md:shrink-0 my-4 px-6 mx-[auto] flex text-4xl sm:text-7xl font-bold'>Categories</h1>
            <div className="flex grid-col-4 grid-flow-col flex-wrap gap-4">
                <div>
                    <div className="w-80 shadow rounded border border-transparent hover:border-blue-500 cursor-pointer bg-gray-200">
                        <div  id='travelcard' className="h-[auto] w-full rounded-[40px] flex flex-col justify-between p-4 bg-cover bg-center">
                        <img  className='' src={travel} alt="" />
                            <p>Bucket Item 1</p>
                            <p className='flex items-center justify-center w-[auto] p-auto'>info about this one</p>
                            <div className="w-auto h-auto  rounded flex items-center justify-center ">
                                <button className='w-8 h-9 p-[auto] m-4 bg-white rounded flex items-center justify-center text-[rgb(134,239,172);]'><SlLike /></button>
                                <button className='w-8 h-9 p-[auto] m-4 bg-white rounded flex items-center justify-center text-red-700'><SlHeart /></button>
                                <button className='w-8 h-9 p-[auto] m-4 bg-white rounded flex items-center justify-center text-[rgb(134,239,172);]'><SlSpeech /></button>
                            </div>
                        </div>

                    </div>
                </div>

                <div>
                    <div className="w-80 shadow rounded border border-transparent hover:border-blue-500 cursor-pointer bg-gray-200">
                        <div  id='travelcard' className="h-[auto] w-full rounded-[40px] flex flex-col justify-between p-4 bg-cover bg-center">
                        <img  className='' src={travel} alt="" />
                            <p>Bucket Item 2</p>
                            <p className='flex items-center justify-center w-[auto] p-auto'>info about this one</p>
                            <div className="w-auto h-auto  rounded flex items-center justify-center ">
                                <button className='w-8 h-9 p-[auto] m-4 bg-white rounded flex items-center justify-center text-[rgb(134,239,172);]'><SlLike /></button>
                                <button className='w-8 h-9 p-[auto] m-4 bg-white rounded flex items-center justify-center text-red-700'><SlHeart /></button>
                                <button className='w-8 h-9 p-[auto] m-4 bg-white rounded flex items-center justify-center text-[rgb(134,239,172);]'><SlSpeech /></button>
                            </div>
                        </div>

                    </div>
                </div>
                <div>
                    <div className="w-80 shadow rounded border border-transparent hover:border-blue-500 cursor-pointer bg-gray-200">
                        <div  id='travelcard' className="h-[auto] w-full rounded-[40px] flex flex-col justify-between p-4 bg-cover bg-center">
                        <img  className='' src={travel} alt="" />
                            <p>Bucket Item 3</p>
                            <p className='flex items-center justify-center w-[auto] p-auto'>info about this one</p>
                            <div className="w-auto h-auto  rounded flex items-center justify-center ">
                                <button className='w-8 h-9 p-[auto] m-4 bg-white rounded flex items-center justify-center text-[rgb(134,239,172);]'><SlLike /></button>
                                <button className='w-8 h-9 p-[auto] m-4 bg-white rounded flex items-center justify-center text-red-700'><SlHeart /></button>
                                <button className='w-8 h-9 p-[auto] m-4 bg-white rounded flex items-center justify-center text-[rgb(134,239,172);]'><SlSpeech /></button>
                            </div>
                        </div>

                    </div>
                </div>
                <div>
                    <div className="w-80 shadow rounded border border-transparent hover:border-blue-500 cursor-pointer bg-gray-200">
                        <div  id='travelcard' className="h-[auto] w-full rounded-[40px] flex flex-col justify-between p-4 bg-cover bg-center">
                        <img  className='' src={travel} alt="" />
                            <p>Bucket Item 4</p>
                            <p className='flex items-center justify-center w-[auto] p-auto'>info about this one</p>
                            <div className="w-auto h-auto  rounded flex items-center justify-center ">
                                <button className='w-8 h-9 p-[auto] m-4 bg-white rounded flex items-center justify-center text-[rgb(134,239,172);]'><SlLike /></button>
                                <button className='w-8 h-9 p-[auto] m-4 bg-white rounded flex items-center justify-center text-red-700'><SlHeart /></button>
                                <button className='w-8 h-9 p-[auto] m-4 bg-white rounded flex items-center justify-center text-[rgb(134,239,172);]'><SlSpeech /></button>
                            </div>
                        </div>

                    </div>
                </div>
                <div>
                    <div className="w-80 shadow rounded border border-transparent hover:border-blue-500 cursor-pointer bg-gray-200">
                        <div  id='travelcard' className="h-[auto] w-full rounded-[40px] flex flex-col justify-between p-4 bg-cover bg-center">
                        <img  className='' src={travel} alt="" />
                            <p>Bucket Item 5</p>
                            <p className='flex items-center justify-center w-[auto] p-auto'>info about this one</p>
                            <div className="w-auto h-auto  rounded flex items-center justify-center ">
                                <button className='w-8 h-9 p-[auto] m-4 bg-white rounded flex items-center justify-center text-[rgb(134,239,172);]'><SlLike /></button>
                                <button className='w-8 h-9 p-[auto] m-4 bg-white rounded flex items-center justify-center text-red-700'><SlHeart /></button>
                                <button className='w-8 h-9 p-[auto] m-4 bg-white rounded flex items-center justify-center text-[rgb(134,239,172);]'><SlSpeech /></button>
                            </div>
                        </div>

                    </div>
                </div>
                <div>
                    <div className="w-80 shadow rounded border border-transparent hover:border-blue-500 cursor-pointer bg-gray-200">
                        <div  id='travelcard' className="h-[auto] w-full rounded-[40px] flex flex-col justify-between p-4 bg-cover bg-center">
                        <img  className='' src={travel} alt="" />
                            <p>Bucket Item 6</p>
                            <p className='flex items-center justify-center w-[auto] p-auto'>info about this one</p>
                            <div className="w-auto h-auto  rounded flex items-center justify-center ">
                                <button className='w-8 h-9 p-[auto] m-4 bg-white rounded flex items-center justify-center text-[rgb(134,239,172);]'><SlLike /></button>
                                <button className='w-8 h-9 p-[auto] m-4 bg-white rounded flex items-center justify-center text-red-700'><SlHeart /></button>
                                <button className='w-8 h-9 p-[auto] m-4 bg-white rounded flex items-center justify-center text-[rgb(134,239,172);]'><SlSpeech /></button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>


            <Footer />

        </div>

    )
}

export default Featured