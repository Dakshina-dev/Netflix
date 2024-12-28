import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" bg-gradient-to-b from-neutral-900 to-transparent absolute top-0 z-50 w-full md:pt-3">
      {isOpen ? (
        <div className="md:hidden w-full  top-16 text-center block absolute bg-gradient-to-b to-black/60 from-transparent p-8">
          <ul className="flex flex-col gap-4 text-white  font-semibold text-lg">
            <li className="hover:text-[#E50914]">
              <a href="/">Home</a>
            </li>
            <li className="hover:text-[#E50914]">
              <a href="/now_playing">Now Playing</a>
            </li>
            <li className="hover:text-[#E50914]">
              <a href="/top_rated">Top Rated</a>
            </li>
            <li className="hover:text-[#E50914]">
              <a href="/upcoming" className="active:text-red-600">Upcoming</a>
            </li>
          </ul>
        </div>
      ) : null}
      <div className="container mx-auto lg:px-20 p-5 relative">
        <div className="flex justify-between items-center">
          <div>
            <Link to="/">
              <h1 className="text-[#E50914] text-3xl font-bold flex flex-col">
                NETFLIX
                <span className="text-white text-[10px] font-normal absolute top-10">
                  Developed By Dakshina
                </span>
              </h1>
            </Link>
          </div>
          <div className="hidden md:flex gap-8 items-center justify-between">
            <ul className="flex gap-8 lg:gap-10 text-white font-medium">
              <li className="hover:text-[#E50914]">
                <a href="/">Home</a>
              </li>
              <li className="hover:text-[#E50914]">
                <a href="/now_playing">Now Playing</a>
              </li>
              <li className="hover:text-[#E50914]">
                <a href="/top_rated">Top Rated</a>
              </li>
              <li className="hover:text-[#E50914]">
                <a href="/upcoming" className="active:text-red-600">Upcoming</a>
              </li>
            </ul>
           
          </div>
          <div className="flex gap-5 items-center md:hidden">

            <div className="md:hidden">
              {isOpen ? (
                <IoClose
                  onClick={() => setIsOpen(!true)}
                  className="size-8 text-white"
                />
              ) : (
                <IoMenu
                  onClick={() => setIsOpen(!false)}
                  className="size-8 text-white"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
