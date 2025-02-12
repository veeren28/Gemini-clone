import React from "react";
import { assets } from "./assets/img/assets";

export const Sidebar = () => {
  return (
    <div
      id="side-bar"
      className="w-20 h-full bg-gray-300 flex flex-col  items-center "
    >
      {/* Menu Icon */}
      <div className=" w-8 h-8 m-4 flex items-center justify-center hover:rounded-[90px] hover:bg-gray-400">
        <img
          src={assets.menu_icon}
          alt="Menu"
          className="w-5 h-6 cursor-pointer "
        />
      </div>

      {/* Plus Icon */}
      <div className="w-6 h-6 mt-16  flex items-center justify-center hover:rounded-full hover:bg-gray-400">
        <img
          src={assets.plus_icon}
          alt="Add"
          className="w-4 h-4 cursor-pointer "
        />
      </div>

      {/* Settings, History, and Other Icons (Placed at Bottom) */}
      <div className="mt-96 flex flex-col gap-3 pb-4">
        <img
          src={assets.question_icon}
          alt="Help"
          className="w-4 h-4 cursor-pointer"
        />
        <img
          src={assets.history_icon}
          alt="History"
          className="w-4 h-4 cursor-pointer"
        />
        <img
          src={assets.setting_icon}
          alt="Settings"
          className="w-4 h-4 cursor-pointer"
        />
      </div>
    </div>
  );
};
