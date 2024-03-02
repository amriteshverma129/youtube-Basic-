import React, { useEffect, useState } from "react";
import SearchIcon from "../Icons/SearchIcon";
import { toogleMenu } from "../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { cacheResults } from "../utils/searchSlice";
import openai from "../utils/openAI";
import { setVideoList } from "../utils/videoSlice";

const Head = () => {
  const dispatch = useDispatch();
  const searchState = useSelector((store) => store.search);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (!searchQuery) return;
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
      const autoSuggestion = await openai.chat.completions.create({
        messages: [
          {
            role: "user",
            content:
              "Act as autocomplete suggestion for the query :" +
              searchQuery +
              ". Give me atmost 10 suggestions, comma seperated like the example result given ahead for iphone. Example Result: iphone 11, iphone 12, iphone 12 pro, iphone 15, iphone 15 pro max",
          },
        ],
        model: "gpt-3.5-turbo",
      });
      const suggestionArr =
        autoSuggestion?.choices[0]?.message?.content?.split(",");
      setSuggestions(suggestionArr);
      dispatch(
        cacheResults({
          [searchQuery]: suggestionArr,
        })
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  const callSearchAPI = async (query) => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${query}&key=` +
          process.env.REACT_APP_YOUTUBE_API_KEY
      );
      const data = await response.json();
      dispatch(setVideoList(data.items));
      setSearchQuery("");
      setSuggestions([]);
    } catch (error) {}
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
      <div className="flex w-3/6 mx-20 relative">
        <input
          type="search"
          className="flex-1 border-slate-400 border-2 rounded-l-full p-2 outline-none "
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          className="py-3 px-4 rounded-r-full bg-slate-400 text-white font-semibold text-xl items-center"
          onClick={() => callSearchAPI(searchQuery)}
        >
          <SearchIcon color={"white"} />
        </button>
        {suggestions && suggestions.length !== 0 && (
          <div className="absolute w-[93%] top-16 left-0 shadow-lg p-3 z-20 bg-white rounded-md">
            <ul>
              {suggestions.map((suggestion, index) => {
                return (
                  <li
                    className="flex flex-row  py-3 border-b-2 cursor-pointer border-slate-200 hover:bg-slate-200"
                    onClick={() => callSearchAPI(suggestion)}
                    key={"suggestion" + index}
                  >
                    <span className="mr-2">
                      <SearchIcon color={"grey"} />
                    </span>{" "}
                    <span>{suggestion}</span>
                  </li>
                );
              })}
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
