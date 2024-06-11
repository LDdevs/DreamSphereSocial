// import React from 'react'
// import Boat from '../assets/boat.png'


const CardCat = () => {
    return (
        <div className='text-green-300 bg-[#020024] my-[10px] border-solid'>
            <h2 className='flex flex-wrap justify-center text-4xl py-1  bg-[#020024]'>Categories</h2>
            <div className='flex gap-8 flex-wrap justify-center  h-full py-10 bg-[#020024]'>
                
                <div
                id="travelcard"
                    className=' p-1 m-1 transform  rounded-xl h-40 w-60 sm:h-64 sm:w-64  shadow-xl transition duration-300 hover:scale-105' >
                    <div className='flex h-full justify-center items-center bg-[{}]' >
                        <span className='font-bold text-gray-500'>Travel</span>
                    </div>
                </div>

                <div
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
                </div>
            </div>
        </div>
    )
}

export default CardCat