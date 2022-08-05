import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";
const Header = () => {
  return (
    <div className="top-0 bg-blue-500 flex justify-center px-12 py-8 md:justify-between">
      <div className="flex text-xl gap-5">
        <CustomLink
          to="/"
          className="font-semibold text-white hover:shadow-gray-600 hover:shadow-stone-700 hover:shadow-xl rounded-[30px] px-5 py-2"
        >
          Home
        </CustomLink>
        <CustomLink
          to="/tasks"
          className="text-white hover:shadow-gray-600 hover:shadow-stone-700 hover:shadow-xl rounded-[30px] px-5 py-2"
        >
          Task
        </CustomLink>
      </div>
    </div>
  );
};

export default Header;
