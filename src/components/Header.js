import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IoNotificationsOutline, IoSearchOutline } from "react-icons/io5";
import { FaArrowRightFromBracket } from "react-icons/fa6";

export function Header() {
  return (
    <header className="header flex  justify-between items-center  py-4 lg:py-5  pe-3 ">
      {/* left */}
      <div>
        {/* logo name */}
        <h2 className="flex flex-col justify-center ">
          <span className="text-sm lg:text-2xl font-bold text-violet-800">
            Covid-19
          </span>
          <span className="text-[7px] lg:block lg:text-xs text-zinc-500">
            Live Tracker Dashboard
          </span>
        </h2>
      </div>

      {/* right */}
      <div className="flex justify-center items-center gap-4 lg:gap-6 lg:pe-12">
        {/* search input */}
        <div className="pe-0 lg:pe-60 hidden lg:flex justify-center items-center">
          <input
            type="text"
            placeholder="Search..."
            className="py-1 px-3 rounded-lg  text-lg shadow-sm shadow-zinc-300"
          />
          <IoSearchOutline className="relative right-6 text-zinc-400" />
        </div>

        {/* user profile */}
        <div className="flex justify-center items-center gap-1">
          <FaUserCircle className="text-xl lg:text-3xl text-zinc-700" />
          <IoIosArrowDown className="text-zinc-400 text-xs lg:text-lg" />
        </div>

        {/* notification */}
        <div className="text-lg lg:text-lg text-zinc-500">
          <IoNotificationsOutline />
        </div>

        <div className="text-lg lg:text-lg text-zinc-500">
          <FaArrowRightFromBracket />
        </div>
      </div>
    </header>
  );
}
