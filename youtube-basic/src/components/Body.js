import React from "react";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { closeMenu } from "../utils/slices/appSlice";

const Body = () => {
  const toggle = useSelector((store) => store.app.isMenuOpen);
  const dispatch = useDispatch();

  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-flow-col relative w-[100vw]">
        {toggle && (
          <>
            <div
              className={`p-5 w-[200px] h-[100vh] absolute top-0 shadow-md bg-white left-0 z-50
            }`}
            >
              <Sidebar />
            </div>
            <div
              className="bg-transparent absolute inset-0 z-40"
              onClick={() => dispatch(closeMenu())}
              style={{ top: "-100px" }}
            ></div>
          </>
        )}
        <div className="col-span-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Body;
