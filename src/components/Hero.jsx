
import Logo from '../assets/Dreamspherelogo.png';
// import BG from '../assets/mountain-bg.png';

const Hero = () => {
    return (
        <div id='hero' className="mx-[auto] w-full z-1 flex justify-center  bg-full items-center text-center px-[80px] py-[7px] bg-cover bg-[url('/assets/boat.png')] text-[rgb(2,0,36);] bg-fixed">
            <div className='h-[100%] '>

                
                <div id="hero-header" className="my-[50%]">
                    <img className='min-w-[280] md:w-[380px] lg:w-[480px] mx-[auto] flex sm:w-auto h-[auto] justify-center align-middle' src={Logo} alt="" />
                    <h1 id="title" className='text-white md:shrink-0 px-6 mx-[auto] flex text-4xl sm:text-7xl font-bold'>DREAMSPHERE</h1>
                    <p className='text-white px-2 md:shrink-0 mx-[auto]'>The Brand New Bucket List Social Platform </p>
                    <button onClick='/Login' className="mx-[auto] bg-[rgb(2,0,36);] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</button>
                    <button className=" mx-6 my-4 bg-[rgb(2,0,36);] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Sign Up</button>
                </div>
            </div>

            {/* CARDS */}

        </div>


    )
}

export default Hero