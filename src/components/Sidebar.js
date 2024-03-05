import React, { useState } from "react";
import { MdCoronavirus, MdDashboard, MdCancel } from "react-icons/md";
import { PiSmileySadDuotone } from "react-icons/pi";
import { HiBeaker } from "react-icons/hi2";
import { FaHandHoldingUsd, FaBars } from "react-icons/fa";
import { TiMessageTyping } from "react-icons/ti";
import { IoIosSettings } from "react-icons/io";

export function Sidebar() {
  const [visible, setVisible] = useState(false);

  return (
    <aside className="sidebar h-screen">
      {/* bar for small devices */}
      <div className="flex justify-center items-center py-6 ps-3 gap-2 md:hidden ">
        <div onClick={() => setVisible(true)} className="relative left-28">
          {" "}
          <FaBars />{" "}
        </div>
      </div>

      {/* sidebar for large devices */}
      <div className="hidden md:flex flex-col justify-between h-full w-20  bg-blue-800  rounded-full py-5 ">
        {/* logo */}
        <div className="mx-auto text-3xl text-white">
          <MdCoronavirus />
        </div>

        {/* nav items */}
        <nav className="flex flex-col justify-center gap-4 mx-auto text-xl text-zinc-300  ">
          <span className="opacity-75 hover:opacity-100 cursor-pointer">
            {" "}
            <MdDashboard />{" "}
          </span>
          <span className="opacity-75 hover:opacity-100 cursor-pointer">
            {" "}
            <PiSmileySadDuotone />{" "}
          </span>
          <span className="opacity-75 hover:opacity-100 cursor-pointer">
            {" "}
            <HiBeaker />{" "}
          </span>
          <span className="opacity-75 hover:opacity-100 cursor-pointer">
            {" "}
            <FaHandHoldingUsd />{" "}
          </span>
          <span className="opacity-75 hover:opacity-100 cursor-pointer">
            {" "}
            <TiMessageTyping />{" "}
          </span>
        </nav>

        {/* setting icon */}
        <div className="mx-auto text-xl text-zinc-300 opacity-75 hover:opacity-100 cursor-pointer">
          {" "}
          <IoIosSettings />{" "}
        </div>
      </div>

      {visible && (
        <div>
          {/* sidebar for small devices */}
          <div className="absolute z-50 top-0 md:static md:hidden flex flex-col justify-between h-full w-1/3 md:w-20  bg-blue-800  md:rounded-full py-5 ">
            {/* cancel icon to hide sidebar in small devices */}
            <div
              onClick={() => setVisible(false)}
              className="block md:hidden absolute right-2 top-2 text-white text-xl"
            >
              {" "}
              <MdCancel />{" "}
            </div>

            {/* logo */}
            <div className="mx-auto text-4xl text-white">
              <MdCoronavirus />
            </div>

            {/* nav items */}
            <nav className="flex flex-col justify-center gap-4 mx-auto text-2xl text-zinc-300  ">
              <span className="opacity-75 hover:opacity-100 cursor-pointer">
                {" "}
                <MdDashboard />{" "}
              </span>
              <span className="opacity-75 hover:opacity-100 cursor-pointer">
                {" "}
                <PiSmileySadDuotone />{" "}
              </span>
              <span className="opacity-75 hover:opacity-100 cursor-pointer">
                {" "}
                <HiBeaker />{" "}
              </span>
              <span className="opacity-75 hover:opacity-100 cursor-pointer">
                {" "}
                <FaHandHoldingUsd />{" "}
              </span>
              <span className="opacity-75 hover:opacity-100 cursor-pointer">
                {" "}
                <TiMessageTyping />{" "}
              </span>
            </nav>

            {/* setting icon */}
            <div className="mx-auto text-2xl text-zinc-300 opacity-75 hover:opacity-100 cursor-pointer">
              {" "}
              <IoIosSettings />{" "}
            </div>
          </div>
        </div>
      )}
    </aside>
  );
}
