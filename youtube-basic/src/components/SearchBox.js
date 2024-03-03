import React, { useEffect, useState } from "react";
import SearchIcon from "../Icons/SearchIcon";
import { useDispatch, useSelector } from "react-redux";
import { cacheResults } from "../utils/slices/searchSlice";
import { setVideoList } from "../utils/slices/videoSlice";
import SuggestionBox from "./SuggestionBox";
import {
  callSearchAPI,
  callSuggestionAPI,
  getPopularYouTubeVideos,
} from "../utils/functions/functions";

const SearchBox = () => {
  const dispatch = useDispatch();
  const searchState = useSelector((store) => store.search);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState(null);
  const [showSuggestionBox, setShowSuggestionBox] = useState(true);

  const handleSuggestion = async () => {
    try {
      const response = await callSuggestionAPI(searchQuery);
      dispatch(
        cacheResults({
          [searchQuery]: response,
        })
      );

      if (!response) return;
      setSuggestions(response);
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleSearchAPI = async (query) => {
    try {
      let response;
      if (query) response = await callSearchAPI(query);
      else response = await getPopularYouTubeVideos();
      dispatch(setVideoList(response.items));
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (!searchQuery) {
      handleSearchAPI();
      return;
    }
    const timer = setTimeout(() => {
      if (searchState[searchQuery]) {
        setSuggestions(searchState[searchQuery]);
        return;
      }
      handleSuggestion();
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery, searchState]);

  return (
    <div
      className="w-full flex"
      onMouseLeave={() => setShowSuggestionBox(false)}
      onMouseOver={() => setShowSuggestionBox(true)}
    >
      <input
        type="search"
        className="flex-auto border-slate-500 border-2 rounded-l-full p-2 outline-none "
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button
        className="py-3 px-4 rounded-r-full bg-slate-500 text-white font-semibold text-xl items-center"
        onClick={() => handleSearchAPI(searchQuery)}
      >
        <SearchIcon color={"white"} />
      </button>
      {showSuggestionBox && suggestions && suggestions.length !== 0 && (
        <div className="absolute w-[93%] top-12 left-0 shadow-lg p-3 z-50 bg-white rounded-md">
          <SuggestionBox suggestions={suggestions} />
        </div>
      )}
    </div>
  );
};

export default SearchBox;
