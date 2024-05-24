import React from 'react'
// import Logo_white_alt from '../assets/logo-alt.png';

const Marquee = () => {
    return (
        <div>
            <div className="w-full inline-flex flex-nowrap">
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none">
                    <li>
                        <img src="icon.png" alt="Facebook" />
                    </li>
                    <li>
                        <img src="../icon2.png" alt="Disney" />
                    </li>
                    <li>
                        <img src="icon2.png" alt="Airbnb" />
                    </li>
                    <li>
                        <img src="icon2.png" alt="Apple" />
                    </li>
                    <li>
                        <img src="icon2.png" alt="Spark" />
                    </li>
                    <li>
                        <img src="icon2.png" alt="Samsung" />
                    </li>
                    <li>
                        <img src="icon2.png" alt="Quora" />
                    </li>
                    <li>
                        <img src="icon2.png" alt="Sass" />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Marquee