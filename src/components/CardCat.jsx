// import React from 'react'

const CardCat = () => {
    return (
        <div className='bg-green-300'>
            <h2 className='flex flex-wrap justify-center text-4xl py-1'>Categories</h2>
            <div className='flex gap-8 flex-wrap justify-center bg-gray-300 h-screen py-10'>
                
                <div
                    className='p-1 m-1 transform  rounded-xl h-40 w-60 sm:h-64 sm:w-64 bg-white shadow-xl transition duration-300 hover:scale-105'>
                    <div className='flex h-full justify-center items-center'>
                        <span className='font-bold text-gray-500'>Travel</span>
                    </div>
                </div>

                <div
                    className='transform  rounded-xl h-40 w-40 sm:h-64 sm:w-64 bg-white shadow-xl transition duration-300 hover:scale-105'>
                    <div className='flex h-full justify-center items-center'>
                        <span className='font-bold text-green-600'>Hobbies</span>
                    </div>
                </div>

                <div
                    className='transform rounded-xl h-40 w-40 sm:h-64 sm:w-64 bg-white shadow-xl transition duration-300 hover:scale-105'>
                    <div className='flex h-full justify-center items-center'>
                        <span className='font-bold text-amber-500'>Experiences</span>
                    </div>
                </div>
                <div
                    className='p-1 m-1 transform  rounded-xl h-40 w-60 sm:h-64 sm:w-64 bg-white shadow-xl transition duration-300 hover:scale-105'>
                    <div className='flex h-full justify-center items-center'>
                        <span className='font-bold text-gray-500'>Travel</span>
                    </div>
                </div>

                <div
                    className='transform  rounded-xl h-40 w-40 sm:h-64 sm:w-64 bg-white shadow-xl transition duration-300 hover:scale-105'>
                    <div className='flex h-full justify-center items-center'>
                        <span className='font-bold text-green-600'>Hobbies</span>
                    </div>
                </div>

                <div
                    className='transform rounded-xl h-40 w-40 sm:h-64 sm:w-64 bg-white shadow-xl transition duration-300 hover:scale-105'>
                    <div className='flex h-full justify-center items-center'>
                        <span className='font-bold text-amber-500'>Experiences</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardCat