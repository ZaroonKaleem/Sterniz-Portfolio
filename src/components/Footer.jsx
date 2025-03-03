import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import logo from "../assets/Sterniz-bg.png"; // Import the logo image

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto flex flex-wrap justify-between px-6">
        
        {/* Logo Section */}
        <div className="w-full md:w-1/4">
          <Link to="/">  {/* Wrap logo with Link */}
            <img src={logo} alt="Sterniz Logo" className="h-16 mb-4 cursor-pointer" />
          </Link>
          {/* <p className="text-sm text-gray-400">
            Suspendisse hendrerit tellus laoreet luctus pharetra. Aliquam
            porttitor vitae orci nec ultricies.
          </p> */}
        </div>

        {/* Menu Section */}
        <div className="w-full md:w-1/4">
          <h2 className="text-lg font-semibold mb-2">Menu</h2>
          <ul className="text-gray-400 space-y-2">
            <li><Link to="/about" className="hover:text-white transition">About</Link></li>
            <li><Link to="/news" className="hover:text-white transition">News</Link></li>
            <li><Link to="/services" className="hover:text-white transition">Services</Link></li>
            <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div className="w-full md:w-1/4">
          <h2 className="text-lg font-semibold mb-2">Follow Us</h2>
          <ul className="text-gray-400 space-y-2">
            <li><a href="#" className="hover:text-white transition">Facebook</a></li>
            <li><a href="#" className="hover:text-white transition">Twitter</a></li>
            <li><a href="#" className="hover:text-white transition">Instagram</a></li>
            <li><a href="#" className="hover:text-white transition">RSS</a></li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="w-full md:w-1/4">
          <h2 className="text-lg font-semibold mb-2">Newsletter</h2>
          <p className="text-gray-400 text-sm mb-4">
            Stay updated with our latest news and offers.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 w-full text-black rounded-l-md focus:outline-none"
            />
            <button className="bg-blue-500 px-4 py-2 rounded-r-md hover:bg-blue-600 transition">
              📧
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-gray-500 text-sm mt-10">
        © {new Date().getFullYear()} Sterniz. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
