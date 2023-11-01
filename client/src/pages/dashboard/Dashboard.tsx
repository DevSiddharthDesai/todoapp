import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { AiOutlineSearch, AiOutlinePlus } from "react-icons/ai";
import { FaAnglesRight } from "react-icons/fa6";
import { LuListTodo } from "react-icons/lu";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { PiStickerFill } from "react-icons/pi";

export const Dashboard = () => {
  const [isLeftOpen, setIsLeftOpen] = useState(false);
  const [isRightOpen, setIsRightOpen] = useState(false);

  const toggleLeft = () => {
    setIsLeftOpen(!isLeftOpen);
  };

  const toggleRight = () => {
    setIsRightOpen(!isRightOpen);
  };

  const leftClasses = isLeftOpen ? "w-1/4" : "w-0";
  const rightClasses = isRightOpen ? "w-1/4" : "w-0";

  const paddingStyles = "p-4";

  const contentLeftClasses = isLeftOpen ? "" : "hidden";
  const contentRightClasses = isRightOpen ? "" : "hidden";
  return (
    <div className={`h-screen flex overflow-hidden ${paddingStyles}`}>
      <div
        className={`bg-SidebarBackground transition-all transform ${leftClasses} overflow-y-auto`}
      >
        <div className={`${contentLeftClasses} px-5`}>
          <div className="flex justify-between">
            <div className="py-3 sidebar-title">
              <h1 className="font-bold text-xl">Menu</h1>
            </div>
            <div className="py-3 text-black" onClick={toggleLeft}>
              <FontAwesomeIcon icon={isLeftOpen ? faTimes : faBars} />
            </div>
          </div>
          <div
            id="whoobe-l6k6r"
            className="my-4 flex flex-row bg-gray-100 rounded-lg"
          >
            <span
              id="whoobe-4occ6"
              className="z-highest rounded-l-lg w-10 h-10 flex justify-center items-center text-2xl text-gray-400 border border-r-0"
            >
              <AiOutlineSearch />
            </span>
            <input
              type="password"
              value=""
              className="h-10 border border-gray-200 rounded-r-lg outline-none focus:ring-1 ring-blue-300 w-full pl-1 bg-transparent mb-4"
              id=""
              name=""
              placeholder="password"
            />
          </div>
          <div className="">
            <h3 className="font-bold uppercase">Tasks</h3>
            <div className="flex items-center justify-between py-3">
              <div className="flex items-center">
                <FaAnglesRight />
                <span className="text-sm font-semibold pl-3">Upcoming</span>
              </div>
              <span className="bg-blue-500 text-white py-1 px-3 rounded-md text-sm">
                5
              </span>
            </div>
            <div className="flex items-center justify-between py-3">
              <div className="flex items-center">
                <LuListTodo />
                <span className="text-sm font-semibold pl-3">Upcoming</span>
              </div>
              <span className="bg-blue-500 text-white py-1 px-3 rounded-md text-sm">
                5
              </span>
            </div>
            <div className="flex items-center justify-between py-3">
              <div className="flex items-center">
                <BsFillCalendarCheckFill />
                <span className="text-sm font-semibold pl-3">Calendar</span>
              </div>
              <span className="bg-blue-500 text-white py-1 px-3 rounded-md text-sm">
                5
              </span>
            </div>
            <div className="flex items-center justify-between py-3">
              <div className="flex items-center">
                <PiStickerFill />
                <span className="text-sm font-semibold pl-3">Sticky Wall</span>
              </div>
              <span className="bg-blue-500 text-white py-1 px-3 rounded-md text-sm">
                5
              </span>
            </div>
            <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
          </div>
          <div className="">
            <h3 className="font-bold uppercase">Lists</h3>
            <div className="flex items-center justify-between py-3">
              <div className="flex items-center">
                <span className="bg-red-500 text-white py-3 px-3 rounded-md text-sm"></span>
                <span className="text-sm font-semibold pl-3">Personal</span>
              </div>
              <span className="bg-blue-500 text-white py-1 px-3 rounded-md text-sm">
                5
              </span>
            </div>
            <div className="flex items-center justify-between py-3">
              <div className="flex items-center">
                <span className="bg-blue-200 text-white py-3 px-3 rounded-md text-sm"></span>
                <span className="text-sm font-semibold pl-3">Work</span>
              </div>
              <span className="bg-blue-500 text-white py-1 px-3 rounded-md text-sm">
                5
              </span>
            </div>
            <div className="flex items-center justify-between py-3">
              <div className="flex items-center">
                <span className="bg-yellow-500 text-white py-3 px-3 rounded-md text-sm"></span>
                <span className="text-sm font-semibold pl-3">List 1</span>
              </div>
              <span className="bg-blue-500 text-white py-1 px-3 rounded-md text-sm">
                5
              </span>
            </div>
            <div className="flex items-center justify-between py-3">
              <div className="flex items-center">
                <AiOutlinePlus />
                <span className="text-sm font-semibold pl-3">Add New List</span>
              </div>
            </div>
            <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700" />
          </div>
          <div className="">
            <h3 className="font-bold uppercase">Tags</h3>
            <div className="flex items-center py-3">
              <div className="bg-blue-500 items-center mr-1 px-2 py-2">
                Personal
              </div>
              <div className="bg-yellow-500 items-center mr-1 px-2 py-2">
                Personal
              </div>
              <div className="bg-cyan-500 items-center mr-1 px-2 py-2">
                Personal
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`flex-1 bg-gray-400`}>
        <div className={`flex bg-gray-400 w-full`}>
          <div className="px-2 py-1 text-black w-16" onClick={toggleLeft}>
            <FontAwesomeIcon icon={isLeftOpen ? faTimes : faBars} />
          </div>
          <div className="px-2 py-1 text-black" style={{ width: "inherit" }}>
            <h1 className="text-2xl mb-5">Upcoming</h1>
            <div className="border border-gray-500 p-3">+ Add New Task</div>
          </div>
        </div>
      </div>
      <div className={`bg-gray-300 transition-all transform ${rightClasses}`}>
        <div className={contentRightClasses}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          hic itaque vero quae facilis adipisci culpa nostrum, voluptas omnis
          est qui amet totam soluta et debitis? Sequi nihil aut debitis!{" "}
        </div>
      </div>
    </div>
  );
};
