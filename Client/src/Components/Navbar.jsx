import React from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center p-4 sm:p-6 sm:px-24 bg-white shadow-lg fixed top-0 z-10">
      <img src={assets.logo} alt="Logo" className="w-28 sm:w-32" />
      <button className="flex items-center gap-2 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">
        Login <img src={assets.arrow_icon} alt="arrow" />
      </button>
    </div>
  );
};

export default Navbar;
