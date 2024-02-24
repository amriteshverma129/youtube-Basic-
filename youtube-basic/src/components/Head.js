import React from "react";
import SearchIcon from "../Icons/SearchIcon";
import { toogleMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";

const Head = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-row p-5 shadow-md items-center">
      <div className="flex w-1/6">
        <img
          alt="hamburgerMenu"
          src="./image/hamburgerMenu.webp"
          className="h-8 mx-3"
          onClick={() => dispatch(toogleMenu())}
        />
        <img alt="youtubeLogo" src="./image/youTubeLogo.webp" className="h-8" />
      </div>
      <div className="flex w-3/6 mx-20">
        <input
          type="search"
          className="flex-1 border-slate-400 border-2 rounded-l-full p-2 outline-none "
        />
        <button className="py-3 px-4 rounded-r-full bg-slate-400 text-white font-semibold text-xl items-center">
          <SearchIcon />
        </button>
      </div>
      <div className="w-1/6 ">
        <div className="h-8 w-8 rounded-full bg-red-400 ml-[auto]"></div>
      </div>
    </div>
  );
};

export default Head;
