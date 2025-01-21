import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="flex flex-col items-center mt-24 px-6 sm:px-20 text-center text-gray-700 space-y-4">
      <img
        src={assets.header_img}
        alt="header"
        className="w-28 h-28 sm:w-36 sm:h-36 rounded-full shadow-lg mb-4"
      />
      <h1 className="text-2xl sm:text-3xl font-semibold">
        Hey developer!{" "}
        <img
          className="w-8 inline-block"
          src={assets.hand_wave}
          alt="Hand wave"
        />
      </h1>
      <h2 className="text-lg sm:text-xl font-medium">
        Welcome to our authentication system
      </h2>
      <p className="text-sm sm:text-base text-gray-500 max-w-2xl">
        Let's start with a quick product tour, and we will have you up and
        running in no time!
      </p>
      <button className="border border-gray-500 rounded-full px-8 py-2.5 hover:bg-gray-700 hover:text-white transition duration-300">Get Started!</button>
    </div>
  );
};

export default Header;
