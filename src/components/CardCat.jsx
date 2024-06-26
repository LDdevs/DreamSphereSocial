// import React from 'react'
// import Boat from '../assets/boat.png'

// import me from '../assets/boat.png';
import travel from '../assets/travelcard.png';
import skills from '../assets/skillscard.png';
import exp from '../assets/expcard.png';
import career from '../assets/career1.png';
import fears from '../assets/fears.png';
import life from '../assets/lifecard.png';


const CardCat = () => {
    return (
        <div className='text-white bg-[#020024] my-[10px] border-solid'>
            <h2 className='flex flex-wrap justify-center text-4xl py-1  bg-[#020024]'>Categories</h2>
            <div  className='flex gap-8 flex-wrap justify-center  h-full py-10 bg-[#020024]'>

                <div
                    id="travelcard"
                    className='flex justify-center align-middle p-1 m-10 transform  rounded-xl h-40 w-60 sm:h-64 sm:w-64  shadow-xl transition duration-300 hover:scale-105' >
                    <img className='rounded-full max-w-[300px] hover:scale-120 hover:rotate-6' src={travel} alt="" />
                    <div className="centered">Travel</div>
                </div>

                <div
                    id="travelcard"
                    className='flex justify-center align-middle p-1 m-10 transform  rounded-xl h-40 w-60 sm:h-64 sm:w-64  shadow-xl transition duration-300 hover:scale-105' >
                    <img className='rounded-full max-w-[300px] hover:scale-120 hover:rotate-6' src={skills} alt="" />
                    <div className="centered">Skills/Hobbies</div>
                </div>
                <div
                    id="travelcard"
                    className='flex justify-center align-middle p-1 m-10 transform  rounded-xl h-40 w-60 sm:h-64 sm:w-64  shadow-xl transition duration-300 hover:scale-105' >
                    <img className='rounded-full max-w-[300px] hover:scale-120 hover:rotate-6' src={exp} alt="" />
                    <div className="centered">Experiences</div>
                </div>
                <div
                    id="travelcard"
                    className='flex justify-center align-middle p-1 m-10 transform  rounded-xl h-40 w-60 sm:h-64 sm:w-64  shadow-xl transition duration-300 hover:scale-105' >
                    <img className='rounded-full max-w-[300px] hover:scale-120 hover:rotate-6' src={career} alt="" />
                    <div className="centered">Career Goals</div>
                </div>
                <div
                    id="travelcard"
                    className='flex justify-center align-middle p-1 m-10 transform  rounded-xl h-40 w-60 sm:h-64 sm:w-64  shadow-xl transition duration-300 hover:scale-105' >
                    <img className='rounded-full max-w-[300px] hover:scale-120 hover:rotate-6' src={fears} alt="" />
                    <div className="centered">Fears</div>
                </div>
                <div
                    id="travelcard"
                    className='flex justify-center align-middle p-1 m-10 transform  rounded-xl h-40 w-60 sm:h-64 sm:w-64  shadow-xl transition duration-300 hover:scale-105' >
                    <img className='rounded-full max-w-[300px] hover:scale-120 hover:rotate-6' src={life} alt="" />
                    <div className="centered">Life Goals</div>
                </div>

                {/* <div
                    id="skillscard" 
                    className='p-1 m-1 transform  rounded-xl h-40 w-60 sm:h-64 sm:w-64 bg-white shadow-xl transition duration-300 hover:scale-105'>
                    <div className='flex h-full justify-center items-center'>
                        <span className='font-bold text-green-600'>Skills/Hobbies</span>
                    </div>
                </div>

                <div
                    id="expcard"
                    className='p-1 m-1 transform  rounded-xl h-40 w-60 sm:h-64 sm:w-64 bg-white shadow-xl transition duration-300 hover:scale-105'>
                    <div className='flex h-full justify-center items-center'>
                        <span className='font-bold text-amber-500'>Experiences</span>
                    </div>
                </div>
                <div
                    id="careercard"
                    className='p-1 m-1 transform  rounded-xl h-40 w-60 sm:h-64 sm:w-64 bg-white shadow-xl transition duration-300 hover:scale-105'>
                    <div className='flex h-full justify-center items-center'>
                        <span className='font-bold text-gray-500'>Career</span>
                    </div>
                </div>

                <div
                    id="fearscard"
                    className='p-1 m-1 transform  rounded-xl h-40 w-60 sm:h-64 sm:w-64 bg-white shadow-xl transition duration-300 hover:scale-105'>
                    <div className='flex h-full justify-center items-center'>
                        <span className='font-bold text-green-600'>Fears</span>
                    </div>
                </div>

                <div
                    id="goalscard"
                    className='p-1 m-1 transform  rounded-xl h-40 w-60 sm:h-64 sm:w-64 bg-white shadow-xl transition duration-300 hover:scale-105'>
                    <div className='flex h-full justify-center items-center'>
                        <span className='font-bold text-amber-500'>Life Goals</span>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default CardCat