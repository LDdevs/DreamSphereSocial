
import Logo_white_alt from '../assets/logo-alt.png';
// import BG from '../assets/footerbg.png';
// import { Link } from 'react-router-dom';
// import Search_b from '../assets/search-b.png';

const Footer = () => {
    return (
        <div className='w-full h-[400px] bg-[rgb(2, 0, 36)])]  '>
            <div className=' bg-[rgb(2,0,36);]  h-[500px]'>


                <div id="hero-header" className='my-[10%] bg-[rgb(2,0,36);]'>

                    <div className='w-full inline-grid grid-cols-10 gap-[120px] text-white px-[50%] justify-center content-evenly align-middle py-[40px] h-[280px]'>



                        {/* <Link id='Link' className='px-[200px] py-[1px] space-between text-center text-lg text-l text-white inline-block mx-[120px] hover:text-blue-700' to='/'>Home</Link>
                    <Link id='Link' className='px-[200px] py-[1px] space-between text-center text-lg text-l text-white inline-block mx-[120px] ' to='/Featured'>Featured</Link>
                    <Link id='Link' className='px-[200px] py-[1px] space-between text-center text-lg text-l text-white inline-block mx-[120px] ' to='/Dashboard'>Dashboard</Link>
                    <Link id='Link' className='px-[200px] py-[1px] space-between text-center text-lg text-l text-white inline-block mx-[120px] ' to='/Contact'>Contact</Link> */}
                        {/* <Link id='Link' className='py-[1px]  text-center text-lg text-white inline-block mx-[120px] my-[0px]' to='/Login'>Login</Link>
                    <Link id='Link' className='py-[1px]  text-center text-lg text-white inline-block mx-[120px] w-[20px] my-[10px]' to='/Sign up'>Sign Up</Link> */}
                    </div>

                    <div>
                        <div className="text-white  relative flex flex-nowrap overflow-x-hidden ">
                            <div className="divide-x divide-dashed py-[auto] animate-marquee whitespace-nowrap">
                                <span className="mx-4 text-4xl">Login/Signup</span>
                                <span className="mx-4 text-4xl">Add Bucket List Items</span>
                                <span className="mx-4 text-4xl">Explore Others lists</span>
                                <span className="mx-4 text-4xl">Share Experiences</span>
                                <span className="mx-4 text-4xl">Complete your bucket List IRL</span>
                            </div>
                        </div>
                    </div>
                    <img className='min-w-[280] md:w-[380px] lg:w-[480px] mx-[auto] flex sm:w-auto h-[auto] justify-center align-middle' src={Logo_white_alt} alt="" />
                    <h1 id="title" className='text-white md:shrink-0 px-6 mx-[auto] flex text-4xl sm:text-7xl font-bold'>DREAMSPHERE</h1>
                    {/* <p className='text-white px-2 md:shrink-0 mx-[auto]'>The Brand New Bucket List Social Platform </p> */}
                    {/* <button onClick='/Login' className="mx-[auto] bg-[rgb(2,0,36);] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</button>
                    <button className=" mx-6 my-4 bg-[rgb(2,0,36);] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Sign Up</button> */}

                    

                    <div className='p-4 flex text-center text-lg text-white py-[auto] mx-[120px] my-[20px]'>
                        <p>© 2024 Lisa Downie, All rights reserved.</p>
                    </div>


                </div>




                {/* <div id='search-box' className='flex bg-white px-[20px] py-[2px] rounded-full'>
                <input id='search-box-input' type="text" placeholder='Search' className='p-1 bg-transparent outline-none text-lg  text-[rgb(2,0,36);]' />
                <img src={Search_b} alt="" id='search-icon' className='z-10 w-5 cursor-pointer mr-8 text-black' />
            </div> */}

                {/* <div className='justify-center align-middle text-white h-[480px] w-[500px] px-[50px] py-[auto]'>
                <h2 className=' justify-center align-middle py-[20px]'>Sign up to our Newsletter</h2>
                <input id='newsletter-input' type="text" placeholder='email address' className='p-1 px-6 bg-white outline-none text-lg max-w-64 text-[rgb(2,0,36);]' />
            </div> */}


                {/* <div className=' content-evenly'>



                <img className='w-[auto] flex justify-center align-middle  px-[20px] h-[auto] ' src={Logo_white_alt} alt='Logo' id='Logo'></img>




            </div> */}



            </div>

        </div>
    )
}

export default Footer