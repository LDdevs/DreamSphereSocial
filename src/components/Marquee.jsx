// import React from 'react'
// import Logo_white_alt from '../assets/logo-alt.png';

const Marquee = () => {
    return (
        <div>
            <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] repeatType">
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll  ">
                    <li>
                        <p>Go bungee jumping</p>
                    </li>
                    <li>
                        <p>Road trip across Canada on the Alaskan Highway</p>
                    </li>
                    <li>
                        <p>Try the street food in Mexico</p>
                    </li>
                    <li>
                        <p>Visit one of the Seven Wonders of the World</p>
                    </li>
                    <li>
                        <p>Drink beer at Oktoberfest</p>
                    </li>
                    <li>
                        <p>Take a multi-day railroad trip in a sleeper car</p>
                    </li>
                    <li>
                        <p>See the Northern Lights</p>
                    </li>
                    <li>
                        <p>See the Thanksgiving Day Parade in New York City</p>
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
                        <p>Visit New Orleans during Mardi Gras</p>
                    </li>
                    <li>
                        <p>Hike to Machu Picchu in Peru</p>
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
                        <p>Ride a gondola in Venice, Italy</p>
                    </li>
                    <li>
                        <p>Go snorkeling or scuba diving at the Great Barrier Reef</p>
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