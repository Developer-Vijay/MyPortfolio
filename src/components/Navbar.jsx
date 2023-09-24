import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Projects",
    },
    {
      id: 4,
      link: "Experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <div className="flex justify-between items-center w-full h-20 text-white bg-black fixed px-4  ">
      <div>
        <h1 className="font-signature text-4xl ml-2">Vijay Sahoo</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map((link) => (
          <li
            key={link.id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
          >
            {link.link}
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
      </div>
      {nav && (
        <ul
          className="flex flex-col justify-center items-center absolute top-0 left-0 
w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500"
        >
          {links.map((link) => (
            <li
              key={link.id}
              className="px-5 cursor-pointer capitalize py-6 text-3xl"
            >
              {link.link}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
