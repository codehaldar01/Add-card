import React from "react";
import { Link } from "react-router-dom";
import { CiBookmarkPlus } from "react-icons/ci";
import { LuSun } from "react-icons/lu";
import { LuMoon } from "react-icons/lu";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center text-xl m-2 font-semibold">
      <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        <Link to={"/"}>Product Store 🛒</Link>
      </div>
      <div className="flex text-4xl m-1">
        <div className="text-4xl">
          <Link to={"/create"}>
            <CiBookmarkPlus />
          </Link>
        </div>
        <div>
          <LuSun />
          <LuMoon />
        </div>
      </div>
    </div>
  );
};

export default Navbar;