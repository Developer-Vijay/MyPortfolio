import React from "react";
import myImage from "../images/my self.jpeg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black to-gray-800 text-white
      via-black
      "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold">
            I'm a Mobile Engineer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have 2 years of Experience building and designing Mobile Software
            Applications. Currently , I love to work on Mobile Applications
            using Technologies like Flutter, Swift.
          </p>
          <div>
            <button
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-b from-cyan-500
             to-blue-500 cursor-pointer"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={22} className="ml-1" />
              </span>
            </button>
          </div>
        </div>
        <div>
          <img
            src={myImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:will-change-auto"
          />
        </div>
      </div> 
    </div>
  );
};

export default Home;
