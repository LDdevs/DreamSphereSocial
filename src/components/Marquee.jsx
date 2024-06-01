// import React from 'react'
// import Logo_white_alt from '../assets/logo-alt.png';

const Marquee = () => {
    return (
        <div>
            <div className='w-[100%] flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]'>
                <ul className='flex items-center justify-center md:justify-start [&_li]:mx-8  animate-infinite-scroll  '>
                    <li>
                        <p className="w-auto m-4">Go bungee jumping</p>
                    </li>
                    <li>
                        <p className="w-auto m-4">Road trip across Canada</p>
                    </li>
                    <li>
                        <p className="w-auto m-4">Try street food in Mexico</p>
                    </li>
                    <li>
                        <p className="w-auto m-4">Seven Wonders of the World</p>
                    </li>
                    <li>
                        <p className="w-auto m-4">Drink beer at Oktoberfest</p>
                    </li>
                    <li>
                        <p className="w-auto m-4">Take a multi-day railroad trip</p>
                    </li>
                    <li>
                        <p className="w-auto m-4">See the Northern Lights</p>
                    </li>
                    <li>
                        <p className="w-auto m-4">Thanksgiving Day Parade in NYC</p>
                    </li>
                </ul>
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll" aria-hidden="true">
                    <li>
                        <p className="w-auto m-4">Try skinny dipping</p>
                    </li>
                    <li>
                        <p className="w-auto m-4">Eat shark in Iceland</p>
                    </li>
                    <li>
                        <p className="w-auto m-4">Mardi Gras</p>
                    </li>
                    <li>
                        <p className="w-auto m-4">Hike Machu Picchu</p>
                    </li>
                    <li>
                        <p className="w-auto m-4">Go horseback riding</p>
                    </li>
                    <li>
                        <p className="w-auto m-4">Retire early</p>
                    </li>
                    <li>
                        <p className="w-auto m-4">Visit Tokyo, Japan</p>
                    </li>
                    <li>
                        <p className="w-auto m-4">Have children</p>
                    </li>
                </ul>
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll" aria-hidden="true">
                    <li>
                        <p className="w-auto m-4">Try kayaking down rapids</p>
                    </li>
                    <li>
                        <p className="w-auto m-4">Ride a gondola</p>
                    </li>
                    <li>
                        <p className="w-auto m-4">Scuba diving at the Great Barrier Reef</p>
                    </li>
                    <li>
                        <p className="w-auto m-4">See elephants in Thailand</p>
                    </li>
                    <li>
                        <p className="w-auto m-4">Go vegetarian for a month</p>
                    </li>
                    <li>
                        <p className="w-auto m-4">Learn how to play guitar</p>
                    </li>
                    <li>
                        <p className="w-auto m-4">Adopt a pet</p>
                    </li>
                    <li>
                        <p className="w-auto m-4">Become debt-free</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Marquee