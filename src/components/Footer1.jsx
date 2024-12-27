import React from 'react'
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { Footer } from "flowbite-react";

const Footer1=()=> {
    return (
        <div>
            {/* <!-- Footer Section --> */}
  <footer className="mt-16 mx-2 text-gray-700 p-8 md:mx-48">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* <!-- Logo and Description --> */}
      <div>
        <h3 className="text-3xl font-bold text-blue-600">PRODUCTO</h3>
        <p className="text-gray-400 mt-2">
        Lorem ipsum dolor sit amet, consetetur
sadipscing elitr, sed diam nonum eirmod tempor
invidunt ut labore et dolomagna vero eos
etaccusa diam.
        </p>
        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
      </div>
      {/* <!-- Quick Links --> */}
      <div className='md:ml-9 '>
        <h3 className="text-3xl font-semibold  ">Quick Links</h3>
        <ul className="mt-4 space-y-2">
          <li><a href="#" className="text-gray-400 hover:text-white">Terms of service</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white">Refund Policy</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white">Support</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white">Branches</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white">License</a></li>
        </ul>
      </div>
      {/* <!-- Why To Buy --> */}
      <div>
        <h3 className=" font-semibold text-3xl">Why To Buy</h3>
        <ul className="mt-4 space-y-2">
          <li><a href="#" className="text-gray-400 hover:text-white">Direct</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white">Amazon</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white">Walmart</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white">BestBuy</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white">Etsy</a></li>
        </ul>
      </div>
      {/* <!-- Support --> */}
      <div>
        <h3 className="text-3xl font-semibold ">Support</h3>
        <ul className="mt-4 space-y-2">
          <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white">Features</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white">Tutorial</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white">Gallery</a></li>
        </ul>
      </div>
    </div>
  </footer>
</div>
        
    )
}

export default Footer1
