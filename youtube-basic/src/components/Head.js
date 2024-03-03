import React from "react";
import { toogleMenu } from "../utils/slices/appSlice";
import { useDispatch } from "react-redux";
import SearchBox from "./SearchBox";

const Head = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-row p-5 shadow-md items-center">
      <div className="flex w-1/6">
        <img
          alt="hamburgerMenu"
          src="./image/hamburgerMenu.webp"
          className="h-8 mx-3 cursor-pointer"
          onClick={() => dispatch(toogleMenu())}
        />
        <img alt="youtubeLogo" src="./image/youTubeLogo.webp" className="h-8" />
      </div>
      <div className="flex w-3/6 mx-20 relative">
        <SearchBox />
      </div>
      <div className="w-1/6 ">
        <div className="h-12 w-12 rounded-full bg-red-400 ml-[auto]">
          <img
            src="./image/amriteshVerma.jpeg"
            alt="Amritesh Verma"
            className="h-12 w-12 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Head;
