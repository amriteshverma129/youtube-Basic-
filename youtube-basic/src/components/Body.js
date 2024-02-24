import React from "react";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const Body = () => {
  const toggle = useSelector((store) => store.app.isMenuOpen);
  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-flow-col relative w-[100vw]">
        <div
          className={`p-5 w-[200px] h-[100vh] absolute top-0 shadow-md bg-white ${
            toggle ? `left-[-200px]` : `left-0`
          }`}
        >
          <Sidebar />
        </div>
        <div className="col-span-10">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Body;
