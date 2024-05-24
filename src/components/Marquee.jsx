// import React from 'react'
// import Logo_white_alt from '../assets/logo-alt.png';

const Marquee = () => {
    return (
        <div>
            <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                    <li>
                        <img src="./facebook.svg" alt="Facebook" />
                    </li>
                    <li>
                        <img src="./disney.svg" alt="Disney" />
                    </li>
                    <li>
                        <img src="./airbnb.svg" alt="Airbnb" />
                    </li>
                    <li>
                        <img src="./apple.svg" alt="Apple" />
                    </li>
                    <li>
                        <img src="./spark.svg" alt="Spark" />
                    </li>
                    <li>
                        <img src="./samsung.svg" alt="Samsung" />
                    </li>
                    <li>
                        <img src="./quora.svg" alt="Quora" />
                    </li>
                    <li>
                        <img src="./sass.svg" alt="Sass" />
                    </li>
                </ul>
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                    <li>
                        <img src="./facebook.svg" alt="Facebook" />
                    </li>
                    <li>
                        <img src="./disney.svg" alt="Disney" />
                    </li>
                    <li>
                        <img src="./airbnb.svg" alt="Airbnb" />
                    </li>
                    <li>
                        <img src="./apple.svg" alt="Apple" />
                    </li>
                    <li>
                        <img src="./spark.svg" alt="Spark" />
                    </li>
                    <li>
                        <img src="./samsung.svg" alt="Samsung" />
                    </li>
                    <li>
                        <img src="./quora.svg" alt="Quora" />
                    </li>
                    <li>
                        <img src="./sass.svg" alt="Sass" />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Marquee