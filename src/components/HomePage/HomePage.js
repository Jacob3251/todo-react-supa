import React from "react";
import CustomLink from "../CustomLink/CustomLink";
import IM from "./infoimg.jpg";
const HomePage = () => {
  return (
    <div className="mt-10">
      <div className="bg-gray-300 p-4 rounded-md h-96 w-[720px] m-auto">
        <h1 className=" mb-8 font-bold text-[28px] tracking-wider">
          Welcome to NotePads Online
        </h1>
        <div className="grid grid-cols-2">
          {/* Here Application features are written */}
          <div>
            <ul className="text-xl mb-10">
              <li>
                &#7;<span className="px-2"></span>Add records
              </li>
              <li>
                &#7;<span className="px-2"></span>Delete records
              </li>
              <li>
                &#7;<span className="px-2"></span>Update records
              </li>
              <li>
                &#7;<span className="px-2"></span>Clear all tasks
              </li>
            </ul>
            <CustomLink
              to="/tasks"
              className="text-white bg-blue-500 hover:shadow-stone-700 hover:shadow-xl rounded-[30px] px-5 py-2"
            >
              Start
            </CustomLink>
          </div>
          <div className="w-auto">
            <img className="" src={IM} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
