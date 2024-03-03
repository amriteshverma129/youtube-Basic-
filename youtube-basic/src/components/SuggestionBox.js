import React from "react";
import SearchIcon from "../Icons/SearchIcon";
import { callSearchAPI } from "../utils/functions/functions";
import { useDispatch } from "react-redux";
import { setVideoList } from "../utils/slices/videoSlice";

const SuggestionBox = ({ suggestions }) => {
  const dispatch = useDispatch();

  const handleSearchAPI = async (query) => {
    try {
      const response = await callSearchAPI(query);
      dispatch(setVideoList(response.items));
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <ul>
        {suggestions?.map((suggestion, index) => {
          return (
            <li
              className="flex flex-row  py-3 border-b-2 cursor-pointer border-slate-200 hover:bg-slate-200"
              onClick={() => handleSearchAPI(suggestion)}
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
  );
};

export default SuggestionBox;
