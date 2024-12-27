import React from 'react'
import logoo from '../assets/logoo.png'
import logo1 from '../assets/logo1.png'
import logo2 from '../assets/logo2.png'
import logo3 from '../assets/logo3.png'
import logo4 from '../assets/logo4.png'
import dronee1 from '../assets/dronee1.png'


const Home = () => {
    const home = [
        { id: 1, title: 'Camera', description: '20 MP Resolution, 4k at 60 FPS', image: logo1 },
        { id: 2, title: 'Battery Life', description: 'Up to 90 Minutes Flight Time, 4k at 60 FPS', image: logo2 },
        { id: 3, title: 'Control', description: '2 KM of Smooth Range', image: logo3 },
        { id: 4, title: 'Speed', description: 'Fly up to 30 MPH', image: logo4 },
    ]
    return (
        <div>
            <div className='md:mx-48 mx-4 text-sm md:flex md:flex-row-reverse  mt-32 items-center justify-between '>
                <div className='md:w-auto '>
                    <img src={logoo} alt="" />
                </div>
                <div className='font-bold mx-3 mt-5 items-center justify-between'>
                    <h1 className='text-3xl'>Represent Your
                        <span className=' md:mt-2 block '> Product In Better Way.</span></h1>
                    <p className='font-medium mt-5 text-slate-500 md:text-base'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                        diam nonumy eirmod tempor invidunt ut labore et dolore
                        magna aliquyam erat, sed diam voluptua. At vero eos
                        etaccusa diam.</p>
                    <button className='mt-5 font-medium py-2 focus:outline-none focus-within:ring-2 focus:ring-blue-300 px-6 rounded-full text-white bg-blue-600 '>Explore</button>
                </div>
            </div>

            <div className='mt-28 md:mx-48 text-xs mx-4'>
                <div className='items-center justify-between text-center ' >
                    <h1 className='font-bold text-3xl'>Drone Features</h1>
                    <p className='text-gray-500 md:text-base mt-3'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr <span className='block '>diam
                        nonumy eirmod tempor invidunt labore dolore magna
                        aliquyam.</span></p>
                </div>




                <div className='mt-20 grid md:grid-cols-4 grid-cols-1 items-center justify-between gap-28'>
                    {
                        home.map(home => <div key={home.id} className='px-4 py-8 text-center md:w-[300px]  cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all rounded-md shadow-lg w-full mx-2 '>
                            <div>
                                <div className='mb-3 h-14 w-full  text-center  mx-28 rounded-tl-3xl '>
                                    <img src={home.image} alt="" />
                                </div>
                                <div>
                                    <h4 className='font-bold text-2xl
                                    md:text-2xl'>{home.title}</h4>
                                    <p className='text-gray-600 text-sm mt-2 items-center justify-start'>{home.description}</p>
                                </div>
                            </div>
                        </div>)
                    }
                </div>

<div className='mt-32 md:flex items-center mx-4 justify-between '>
    <div className='w-full'>
        <img src={dronee1} alt="" />
    </div>

    <div className='md:ml-10 mx-4'>
        <h4 className=' mt-5 font-bold md:text-3xl text-3xl
        '>Overview of Drone</h4>
        <p className='text-gray-600 mt-5 text-base md:text-base md:mt-2 justify-start'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut 
<span className='block'>labore et dolore
magna aliquyam erat, sed diam voluptua. At vero eos et
accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem  </span>ipsum
dolor sit amet, consetetur sadipscing elitr,
sed diam nonumy eirmod.</p>
<button className='mt-6 px-6 rounded-full font-medium text-white py-2 focus:outline-none focus-within:ring-2 focus:ring-blue-300 bg-blue-600 '>Read More</button>
    </div>
</div>

            </div>
        </div>

    )
}

export default Home
