import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

// import { HiOutlineMail } from 'react-icons/hi';
// import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
// import { SlLogin } from "react-icons/sl";
import Logo from '../assets/Dreamspherelogo.png';
// import Logo_white from '../assets/dslogo-white.png';
// import Logo_white_alt from '../assets/logo-alt.png';
import Search_b from '../assets/search-b.png';
// import Toggle_day from '../assets/day.png';

// import { SlLogin } from "react-icons/sl";



const Navbar = () => {

    // const [nav] = useState(false)
    // // const handleClick = () => setNav(!nav)
    // const [showMenu, setShowMenu] = useState(false)

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (

        <div className=' w-full h-[100px]  items-center p-[20px]  text-gray-300 z-1000'>


            {/* <!-- Toggle button --> */}
            <div className='text-black flex justify-center h-full mx-[160px]'>
                <div className="hidden md:flex cursor-pointer">
                    <div>
                        <img src={Logo} alt="Logo Image" className='w-[145px]' />
                    </div>
                    {/* <img className="" style={{ width: '155px' }} src={Logo_white_alt} alt='' id='Logo'></img> */}
                    <Link id='Link' className='block lg:inline-block hover:text-[rgb(2,0,36);] mt-4   p-4 text-right text-lg text-black flex-1 mx-[10px] my-[10px]' to='/'>Home</Link>
                    <Link id='Link' className='block lg:inline-block hover:text-[rgb(2,0,36);] mt-4   p-4 text-right text-lg text-black flex-1 mx-[10px] my-[10px]' to='/Featured'>Featured</Link>
                    {/* <Link id='Link' className='block lg:inline-block hover:text-[rgb(2,0,36);] mt-4   p-4 text-right text-lg text-black flex-1 mx-[10px] my-[10px]' to='/dashboard'>Dashboard</Link> */}
                    <Link id='Link' className='block lg:inline-block hover:text-[rgb(2,0,36);] mt-4   p-4 text-right text-lg text-black flex-1 mx-[10px] my-[10px]' to='/contact'>Contact</Link>
                    {/* <Link id='Link' className='block lg:inline-block hover:text-green-400 mt-4   p-4 text-center text-lg text-white flex-2 mx-[10px] my-[10px]' to='/404.html'>404</Link> */}

                    <div id='search-box' className='flex bg-green-300 px-[1px] py-[2px] rounded-full'>
                        <input id='search-box-input' type="text" placeholder='Search' className='p-1 bg-transparent outline-none text-lg max-w-64 text-[rgb(2,0,36);]' />
                        <img src={Search_b} alt="" id='search-icon' className='z-10 w-5 cursor-pointer mr-8 text-black' />
                    </div>
                    <Link id='Link' className='p-4 text-center text-lg text-black flex-4 mx-[10px] my-[20px] hover:text-[rgb(2,0,36);]' to='/Login'>Login/SignUp</Link>
                    {/* <Link id='Link' className='p-4 text-center text-lg text-black flex-4 mx-[10px] my-[20px] hover:text-[rgb(2,0,36);]' to='/src/routes/Signup.jsx'>Sign Up</Link> */}
                </div>

                <button className="show-nav text-3xl cursor-pointer">
                    <i className="fa-solid fa-bars"></i>
                </button>


                {/* Hamburger */}

                {/* Hamburger */}
                <div onClick={handleClick} className='text-green-300 md:hidden z-10'>
                    {!nav ? <FaBars /> : <FaTimes />}
                </div>

                {/* Mobile Menu */}
                <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] text-white flex flex-col justify-center items-center cursor-pointer'}>
                    <li className='py-6 text-4xl'><li><Link onClick={handleClick} to="/" smooth={true} duration={500} >
                        Home
                    </Link></li></li>
                    <li className='py-6 text-4xl'><li><Link onClick={handleClick} to="/Featured" smooth={true} duration={500} >
                        Featured
                    </Link></li></li>
                    <li className='py-6 text-4xl'><li><Link onClick={handleClick} to="/Contact" smooth={true} duration={500} >
                        Contact
                    </Link></li></li>
                    <li className='py-6 text-4xl'><li><Link onClick={handleClick} to="/Login" smooth={true} duration={500} >
                        Login/SignUp
                    </Link></li></li>
                    
                </ul>

                

            </div>
        </div>




    )
}

export default Navbar

