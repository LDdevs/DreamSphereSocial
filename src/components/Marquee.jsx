// import React from 'react'
// import Logo_white_alt from '../assets/logo-alt.png';

const Marquee = () => {
    return (
        <div>
            <div className='w-[100%] flex flex-nowrap overflow-hidden  border-solid border-2 border-red-600'>
                <ul className='flex items-center justify-center md:justify-start [&_li]:mx-8  animate-infinite-scroll  '>
                    <li>
                        <p>Go bungee jumping</p>
                    </li>
                    <li>
                        <p>Road trip across Canada</p>
                    </li>
                    <li>
                        <p>Try street food in Mexico</p>
                    </li>
                    <li>
                        <p>Seven Wonders of the World</p>
                    </li>
                    <li>
                        <p>Drink beer at Oktoberfest</p>
                    </li>
                    <li>
                        <p>Take a multi-day railroad trip</p>
                    </li>
                    <li>
                        <p>See the Northern Lights</p>
                    </li>
                    <li>
                        <p>Thanksgiving Day Parade in NYC</p>
                    </li>
                </ul>
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll" aria-hidden="true">
                    <li>
                        <p>Try skinny dipping</p>
                    </li>
                    <li>
                        <p>Eat shark in Iceland</p>
                    </li>
                    <li>
                        <p>Mardi Gras</p>
                    </li>
                    <li>
                        <p>Hike Machu Picchu</p>
                    </li>
                    <li>
                        <p>Go horseback riding</p>
                    </li>
                    <li>
                        <p>Retire early</p>
                    </li>
                    <li>
                        <p>Visit Tokyo, Japan</p>
                    </li>
                    <li>
                        <p>Have children</p>
                    </li>
                </ul>
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll" aria-hidden="true">
                    <li>
                        <p>Try kayaking down rapids</p>
                    </li>
                    <li>
                        <p>Ride a gondola</p>
                    </li>
                    <li>
                        <p>Scuba diving at the Great Barrier Reef</p>
                    </li>
                    <li>
                        <p>See elephants in Thailand</p>
                    </li>
                    <li>
                        <p>Go vegetarian for a month</p>
                    </li>
                    <li>
                        <p>Learn how to play guitar</p>
                    </li>
                    <li>
                        <p>Adopt a pet</p>
                    </li>
                    <li>
                        <p>Become debt-free</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Marquee