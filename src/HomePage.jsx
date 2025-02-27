import React from "react";
import { Sidebar } from "./Sidebar";
import { MainPage } from "./MainPage";
export const HomePage = () => {
  return (
    <>
      <div className="m-0 p-0 box-border w-screen h-screen bg-gray-400 flex   ">
        <Sidebar />
        <MainPage />
      </div>
    </>
  );
};
