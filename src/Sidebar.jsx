import React, { useState } from "react";
import { assets } from "./assets/img/assets";
// import { Plus } from "lucide-react";
import { Plus } from "lucide-react";

export const Sidebar = () => {
  const [menu, SetMenu] = useState(false);
  const [recentChats, setRecentChats] = useState([]);

  return (
    <div
      id="side-bar"
      /* className={
        menu
          ? "w-40 bg-gray-300 "
          : "w-20 h-full bg-gray-300 flex flex-col  items-center "
      } */
      className={`${
        menu
          ? "w-40 bg-gray-300"
          : "w-20 h-full bg-gray-300 flex flex-col  items-center "
      } `}
    >
      {/* Menu Icon */}
      <div className=" w-8 h-8 m-4 flex items-center justify-center hover:rounded-[90px] hover:bg-gray-400">
        <img
          src={assets.menu_icon}
          alt="Menu"
          className="w-5 h-6 cursor-pointer "
          onClick={() => SetMenu(!menu)}
        />
      </div>
      {/* Plus Icon */}
      <div
        // className={
        //   menu
        //     ? " w-36 h-10 mt-16  flex items-center  justify-center rounded-full bg-gray-400"
        //     : "w-6 h-6 mt-16  flex items-center justify-center hover:rounded-full hover:bg-gray-400"
        // }
        className={`${
          menu
            ? "w-36 h-10 mt-16  flex items-center  justify-center rounded-full bg-gray-400"
            : "w-8 h-8 mt-16  flex items-center justify-center hover:rounded-full hover:bg-gray-400"
        }`}
      >
        <Plus size={20} className="text-black cursor-pointer" />
        {menu && <h1 className="text-xs p-2 ">Add new Task</h1>}
      </div>
      <div className="max-w-fit h-40 flex-grow">
        {menu && (
          <div>
            <h1 className="p-4">Recent</h1>
            {recentChats.map((chat, index) => (
              <div key={index} className="p-2 border-b border-gray-400">
                {/* Assuming 'chat' is a string */}
              </div>
            ))}
          </div>
        )}
      </div>{" "}
      {/* Settings, History, and Other Icons (Placed at Bottom) */}
      <div
        // className={
        //   menu
        //     ? "mt-72 flex-col p-2 gap-3 pb-4"
        //     : "mt-96 flex justify-center flex-col gap-3 pb-4"
        // }
        className={`flex-col gap-3 pb-4  ${
          menu ? "mt-60" : " mt-68 flex justify-center"
        }`}
      >
        <div className=" flex flex-row items-center hover:rounded-2xl hover:bg-gray-400 px-2">
          <img
            src={assets.question_icon}
            alt="Help"
            className="w-4 h-4 cursor-pointer"
          />
          {menu && (
            // <div className="w-full ">
            <h1 className="text-xs p-2 ">Settings </h1>
            // </div>
          )}
        </div>

        <div className="w-full flex flex-row items-center hover:rounded-2xl hover:bg-gray-400 px-2">
          <img
            src={assets.history_icon}
            alt="History"
            className="w-4 h-4 cursor-pointer"
          />
          {menu && (
            // <div>
            <h1 className="text-xs p-2 ">Add new Task</h1>
            // </div>
          )}
        </div>
        <div className="w-full flex flex-row items-center hover:rounded-2xl hover:bg-gray-400 px-2">
          <img
            src={assets.setting_icon}
            alt="Settings"
            className="w-4 h-4 cursor-pointer"
          />
          {menu && (
            // <div>
            <h1 className="text-xs p-2 ">Add new Task</h1>
            // </div>
          )}
        </div>
      </div>
    </div>
  );
};
