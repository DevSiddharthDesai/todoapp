import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

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
        className={`bg-SidebarBackground transition-all transform ${leftClasses}`}
      >
        <div className="flex justify-between">
          <div className="px-5 py-3 sidebar-title">
            <h1 className="font-bold text-xl">Menu</h1>
          </div>
          <div className="px-5 py-3 text-black" onClick={toggleLeft}>
            <FontAwesomeIcon icon={isLeftOpen ? faTimes : faBars} />
          </div>
        </div>
        <div id="whoobe-l6k6r" className="my-4 flex flex-row">
          <span
            id="whoobe-4occ6"
            className="z-highest rounded-l-lg w-10 h-10 flex justify-center items-center text-2xl text-gray-400 border border-r-0"
          ></span>
          <input
            type="password"
            value=""
            className="h-10 border border-gray-200 rounded-r-lg outline-none focus:ring-1 ring-blue-300 w-full pl-1"
            id=""
            name=""
            placeholder="password"
          />
        </div>
        <div className={contentLeftClasses}></div>
      </div>
      <div className={`flex-1 bg-gray-400`}>
        <div className="px-2 py-1 text-black" onClick={toggleLeft}>
          <FontAwesomeIcon icon={isLeftOpen ? faTimes : faBars} />
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
