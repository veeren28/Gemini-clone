import React, { useRef, useState } from "react";
import { assets } from "./assets/img/assets";
import grid from "./assets/img/grid.svg";

export const MainPage = () => {
  const [sentButton, setSentButton] = useState(false);
  // const [inputdata, setInputdata] = useState("");
  const [message, setMessage] = useState([]);
  const inputRef = useRef(null);
  function UserMessage() {
    // if ((inputRef.current.value.trim() = "")) return;
    if (!inputRef.current) return;

    const msg = inputRef.current.value.trim();
    if (msg == "") return;
    setMessage((prev) => [...prev, msg]);
    inputRef.current.value = "";
  }
  return (
    <div className="bg-transparent w-screen h-screen flex flex-col">
      {/* Top Bar */}
      <div className="w-full h-20 flex items-center px-4">
        {/* Gemini Model Selection */}
        <div className="flex flex-col items-start">
          <h1 className="text-xl font-semibold">Gemini</h1>
          <p className="text-sm text-gray-600">1.5</p>
        </div>

        {/* Right Side: Try Gemini Advanced + Icons */}
        <div className="flex w-full justify-end items-center space-x-4">
          <button className="w-48 h-10 bg-gray-300 rounded-lg flex justify-center items-center text-sm font-semibold cursor-pointer hover:bg-gray-400 transition duration-300">
            Try Gemini Advanced
          </button>
          {/* Grid Icon */}
          <img src={grid} alt="Grid Icon" className="w-8 h-8 cursor-pointer" />
          {/* User Icon */}
          <img
            src={assets.user_icon}
            alt="User Icon"
            className="w-10 h-10 rounded-full cursor-pointer"
          />
        </div>
      </div>

      {/* Main Content (Takes Remaining Space) */}
      <div className="flex-1 flex flex-col justify-center items-center">
        {!sentButton && (
          <div className="flex-1 flex justify-center items-center -translate-y-4">
            <h1 className="text-3xl font-semibold">Hello Veeren</h1>
          </div>
        )}
        {/* User Message */}
        {sentButton && (
          <div className="flex-1  flex items-end ">
            <ul>
              {message.map((name, index) => (
                <div
                  className="w-auto bg-white px-4 p-2 rounded-[40px] flex  "
                  key={index}
                >
                  <li key={index}>{name}</li>
                </div>
              ))}
            </ul>
          </div>
        )}
        <div className="max-w-lg w-full h-12 mb-10 bg-white rounded-lg flex items-center px-4 shadow-md ">
          <input
            type="text"
            placeholder="Type here"
            className="p-2 flex-1 outline-none text-gray-700"
            ref={inputRef}
          />
          {/* {console.log(inputdata) */}
          <div className="flex items-center gap-x-2">
            <img src={assets.gallery_icon} alt="Gallery" className="w-7 h-7" />
            <img
              src={assets.send_icon}
              alt="Send"
              className="w-7 h-7 cursor-pointer "
              onClick={() => {
                setSentButton(true);
                UserMessage();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
