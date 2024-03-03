import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <ul className="border-b-2 border-slate-200 mb-4 py-4">
        <li className="hover:text-red-800 border-l-2 border-white px-3 py-1 hover:border-red-600">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-red-800 border-l-2 border-white px-3 py-1 hover:border-red-600">
          Shorts
        </li>
        <li className="hover:text-red-800 border-l-2 border-white px-3 py-1 hover:border-red-600">
          Videos
        </li>
        <li className="hover:text-red-800 border-l-2 border-white px-3 py-1 hover:border-red-600">
          Live
        </li>
      </ul>
      <h1 className="font-bold text-lg">Subscription</h1>
      <ul className="border-b-2 border-slate-200 mb-4 py-4">
        <li className="hover:text-red-800 border-l-2 border-white px-3 py-1 hover:border-red-600">
          Music
        </li>
        <li className="hover:text-red-800 border-l-2 border-white px-3 py-1 hover:border-red-600">
          Sports
        </li>
        <li className="hover:text-red-800 border-l-2 border-white px-3 py-1 hover:border-red-600">
          Gaming
        </li>
        <li className="hover:text-red-800 border-l-2 border-white px-3 py-1 hover:border-red-600">
          Movies
        </li>
      </ul>
      <h1 className="font-bold text-lg">Watch Later</h1>
      <ul className=" mb-4 py-4">
        <li className="hover:text-red-800 border-l-2 border-white px-3 py-1 hover:border-red-600">
          Music
        </li>
        <li className="hover:text-red-800 border-l-2 border-white px-3 py-1 hover:border-red-600">
          Music
        </li>
        <li className="hover:text-red-800 border-l-2 border-white px-3 py-1 hover:border-red-600">
          Music
        </li>
        <li className="hover:text-red-800 border-l-2 border-white px-3 py-1 hover:border-red-600">
          Music
        </li>
        <li className="hover:text-red-800 border-l-2 border-white px-3 py-1 hover:border-red-600">
          Music
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
