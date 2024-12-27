import React from 'react'
import blog1 from'../assets/blog1.png'
import blog2 from'../assets/blog2.png'
import blog3 from'../assets/blog3.png'

const Feature2 =()=> {
    return (
        <div>
            <div className="p-8 mt-20 bg-gray-50 md:mx-48">
  {/* <!-- Special Purposes Section --> */}
  <div className="text-center mb-12">
    <h2 className="text-2xl font-semibold">Special Purposes</h2>
    <p className="text-gray-500 mt-2">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    </p>
  </div>
  <div className="grid grid-cols-1 mt-4 sm:grid-cols-3 gap-6">
    {/* <!-- Purpose 1 --> */}
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        className="w-full"
        src={blog1}
        alt="Film Making"
      />
      <div className="p-4 bg-blue-600 text-white">
        <span className="block ">01</span>
        <h3 className="text-lg font-semibold mt-2">Film Making</h3>
      </div>
    </div>
    {/* <!-- Purpose 2 --> */}
    <div className="mt-4 bg-white rounded-lg shadow-md overflow-hidden">
      <img
        className="w-full"
        src={blog2}
        alt="Security"
      />
      <div className="p-4 bg-blue-600 text-white">
        <span className="block">02</span>
        <h3 className="text-lg font-semibold mt-2">Security</h3>
      </div>
    </div>
    {/* <!-- Purpose 3 --> */}
    <div className="mt-4 bg-white rounded-lg shadow-md overflow-hidden">
      <img
        className="w-full"
        src={blog3}
        alt="Entertainment"
      />
      <div className="p-4 bg-blue-600 text-white">
        <span className="block ">03</span>
        <h3 className="text-lg font-semibold mt-2">Entertainment</h3>
      </div>
    </div>
  </div>

  {/* <!-- Get In Touch Section --> */}
  <div className="mt-12">
    <div className="text-center mb-6">
      <h2 className="text-3xl mt-24 font-semibold">Get In Touch</h2>
      <p className="md:text-base text-gray-500 mt-3 text-xl">
      Lorem ipsum dolor sit amet, consetetur
sadipscing elitr diam nonumy eirmod tempor
invidunt labore dolore magna aliquyam.
      </p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      {/* <!-- Contact Info --> */}
      <div>
        
        <ul className="mt-4 space-y-4">
          <li>
            <p className="md:text-base text-xl text-gray-500">
              📞 +123-456-789-03 <br />
              📞 +123-456-789-257
            </p>
          </li>
          <li>
            <p className="text-xl md:text-base text-gray-500">✉️ hellodrone@gmail.com</p>
          </li>
          <li>
            <p className="md:text-base text-xl text-gray-500">
              📍 868 6th 10001 Oakland Avenue, New York City, USA
            </p>
          </li>
        </ul>
      </div>
      {/* <!-- Contact Form --> */}
      <form className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Name"
            className="text-base w-full border border-gray-300 rounded p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 md:p-2"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="w-full border border-gray-300 rounded p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 md:p-2"
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            className="w-full border md:p-2 border-gray-300 rounded p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Drone Name"
            className="w-full border md:p-2 border-gray-300 rounded-sm p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
        </div>
        </div>
    )
}

export default Feature2
