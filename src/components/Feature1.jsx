import React from 'react'
import drone2 from'../assets/drone2.png'
import drone3 from'../assets/drone3.png'
import drone4 from'../assets/drone4.png'
import drone5 from'../assets/drone5.png'
import drone6 from'../assets/drone6.png'
import author1 from'../assets/author1.png'
import author2 from'../assets/author2.png'
import author3 from'../assets/author3.png'



const Feature1=()=> {
    return (
        <div>
 <div className='mt-28 md:mx-48 text-xs mx-4'>
                <div className='items-center justify-between text-center ' >
                    <h1 className='font-bold text-3xl'>Body Features</h1>
                    <p className='text-gray-500 md:text-base mt-3'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr <span className='block '>diam
                        nonumy eirmod tempor invidunt labore dolore magna
                        aliquyam.</span></p>
                </div>
        
            <div className='md:mx-48 mt-20 mx-4'>
                <img src={drone2} alt="" />
            </div>
        </div>

        <div className='mt-28 md:mx-48 text-xs mx-4'>
                <div className='items-center justify-between text-center ' >
                    <h1 className='font-bold text-3xl'>Getting Started Guide</h1>
                    <p className='text-gray-500 md:text-base mt-3'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr <span className='block '>diam
                        nonumy eirmod tempor invidunt labore dolore magna
                        aliquyam.</span></p>
                </div>
                <div className='md:mx-64 mt-20 mx-4'>
                <img src={drone3} alt="" />
            </div>
                </div>


                <div className="mt-12 text-center mx-4">
    <h2 className="text-3xl mt-20 font-semibold">Drone Features</h2>
    <p className="text-gray-500 mt-2">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </p>
    </div>
                <div className="p-8 bg-gray-100 md:mx-48 mt-32">
  {/* <!-- Products Section --> */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 mt-3 gap-6">
    {/* <!-- Product 1 --> */}
    <div className="bg-white p-4 rounded-lg shadow-md text-center">
      {/* <span className="absolute  right-2 top-2 bg-red-500 text-white text-xs px-2 py-1 rounded">-30%</span> */}
      <img
        className="mx-auto"
        src={drone4}
        alt="Drone Model Dream"
      />
      <h3 className="mt-4 text-lg font-semibold">Drone Model Dream</h3>
      <p className="text-gray-400 line-through">$756.00</p>
      <p className="text-blue-500 font-bold">$658.00</p>
    </div>
    {/* <!-- Product 2 --> */}
    <div className="mt-4 bg-white p-4 rounded-lg shadow-md text-center">
      {/* <span className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">New</span> */}
      <img
        className="mx-auto"
        src={drone5}
        alt="Drone Exclusive Model Z"
      />
      <h3 className="mt-4 text-lg font-semibold">Drone Exclusive Model Z</h3>
      <p className="text-gray-400 line-through">$458.00</p>
      <p className="text-blue-500 font-bold">$366.00</p>
    </div>
    {/* <!-- Product 3 --> */}
    <div className="mt-4 bg-white p-4 rounded-lg shadow-md text-center">
      {/* <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">-50%</span> */}
      <img
        className="mx-auto"
        src={drone6}
        alt="Drone Model S"
      />
      <h3 className="mt-4 text-lg font-semibold">Drone Model S</h3>
      <p className="text-gray-400 line-through">$830.00</p>
      <p className="text-blue-500 font-bold">$415.00</p>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
        Add to Card
      </button>
    </div>
    {/* <!-- Product 4 --> */}
    <div className="mt-4 bg-white p-4 rounded-lg shadow-md text-center">
      {/* <span className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">New</span> */}
      <img
        className="mx-auto"
        src={drone4}
        alt="Drone Model Cyber"
      />
      <h3 className="mt-4 text-lg font-semibold">Drone Model Cyber</h3>
      <p className="text-gray-400 line-through">$543.00</p>
      <p className="text-blue-500 font-bold">$512.00</p>
    </div>
    {/* <!-- Product 5 --> */}
    <div className="mt-4 bg-white p-4 rounded-lg shadow-md text-center">
      {/* <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">-30%</span> */}
      <img
        className="mx-auto"
        src={drone5}
        alt="Drone Model Hexa"
      />
      <h3 className="mt-4 text-lg font-semibold">Drone Model Hexa</h3>
      <p className="text-gray-400 line-through">$965.00</p>
      <p className="text-blue-500 font-bold">$635.00</p>
    </div>
  </div>

  {/* <!-- Testimonials Section --> */}
  <div className="mt-20 text-center">
    <h2 className="text-2xl font-semibold">Happy Customers</h2>
    <p className="text-gray-500 mt-2">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
      {/* <!-- Testimonial 1 --> */}
      <div className="mt-4 bg-white p-6 rounded-lg shadow-md text-center">
        <img
          className="w-16 h-16 mx-auto rounded-full"
          src={author1}
          alt="Chris Dave"
        />
        <h3 className="mt-4 font-semibold">Chris Dave</h3>
        <p className="text-gray-500 text-sm">Film Maker</p>
        <p className="mt-4 text-gray-600 text-sm">
          Ddipiscing elit, sed diam nonumy eirmod tempor invidunt ut labore.
        </p>
      </div>
      {/* <!-- Testimonial 2 --> */}
      <div className="mt-4 bg-white p-6 rounded-lg shadow-md text-center">
        <img
          className="w-16 h-16 mx-auto rounded-full"
          src={author2}
          alt="Robert John"
        />
        <h3 className="mt-4 font-semibold">Robert John</h3>
        <p className="text-gray-500 text-sm">YouTuber</p>
        <p className="mt-4 text-gray-600 text-sm">
          Ddipiscing elit, sed diam nonumy eirmod tempor invidunt ut labore.
        </p>
      </div>
      {/* <!-- Testimonial 3 --> */}
      <div className="mt-4 bg-white p-6 rounded-lg shadow-md text-center">
        <img
          className="w-16 h-16 mx-auto rounded-full"
          src={author3}
          alt="Sophia Smiarthds"
        />
        <h3 className="mt-4 font-semibold">Sophia Smiarthds</h3>
        <p className="text-gray-500 text-sm">Creative Director</p>
        <p className="mt-4 text-gray-600 text-sm">
          Ddipiscing elit, sed diam nonumy eirmod tempor invidunt ut labore.
        </p>
      </div>
    </div>
  </div>
</div>
                </div>
    )
}

export default Feature1
