import React, { useEffect, useState } from "react";
import SearchIcon from "../Icons/SearchIcon";
import { toogleMenu } from "../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_SUGGESTION_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const dispatch = useDispatch();
  const searchState = useSelector((store) => store.search);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchState[searchQuery]) {
        setSuggestions(searchQuery[searchQuery]);
      } else callSuggestionAPI();
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const callSuggestionAPI = async () => {
    try {
      const res = await fetch("");
      const data = await res.json();
      dispatch(
        cacheResults({
          searchQuery: data,
        })
      );
    } catch (error) {
      console.log(error.message);
    }
  };

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
      <div
        className="flex w-3/6 mx-20 relative"
        onFocus={() => setShowSuggestion(true)}
        onBlur={() => setShowSuggestion(false)}
      >
        <input
          type="search"
          className="flex-1 border-slate-400 border-2 rounded-l-full p-2 outline-none "
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="py-3 px-4 rounded-r-full bg-slate-400 text-white font-semibold text-xl items-center">
          <SearchIcon color={"white"} />
        </button>
        {showSuggestion && (
          <div className="absolute w-[93%] top-16 left-0 shadow-lg p-3 z-20 bg-white rounded-md">
            <ul>
              <li className="flex flex-row  py-3 border-b-2 cursor-pointer border-slate-200 hover:bg-slate-200">
                <span className="mr-2">
                  <SearchIcon color={"grey"} />
                </span>{" "}
                <span>iphone 13</span>
              </li>
              <li className="flex flex-row  py-3 border-b-2 cursor-pointer border-slate-200 hover:bg-slate-200">
                <span className="mr-2">
                  <SearchIcon color={"grey"} />
                </span>{" "}
                <span>iphone 13</span>
              </li>
              <li className="flex flex-row py-3 border-b-2 cursor-pointer border-slate-200 hover:bg-slate-200">
                <span className="mr-2">
                  <SearchIcon color={"grey"} />
                </span>{" "}
                <span>iphone 13</span>
              </li>
              <li className="flex flex-row  py-3 border-b-2 cursor-pointer border-slate-200 hover:bg-slate-200">
                <span className="mr-2">
                  <SearchIcon color={"grey"} />
                </span>{" "}
                <span>iphone 13</span>
              </li>
              <li className="flex flex-row py-3 border-b-2 cursor-pointer border-slate-200 hover:bg-slate-200">
                <span className="mr-2">
                  <SearchIcon color={"grey"} />
                </span>{" "}
                <span>iphone 13</span>
              </li>
            </ul>
          </div>
        )}
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
