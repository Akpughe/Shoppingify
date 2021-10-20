import React from 'react';
import {
  AiOutlineUnorderedList,
  AiOutlineHistory,
  AiOutlineShoppingCart,
} from 'react-icons/ai';
import { RiBarChartBoxLine } from 'react-icons/ri';
const SideNav = () => {
  return (
    <nav className="bg-white w-24 h-screen flex flex-col justify-between py-6 rounded-tl-2xl rounded-bl-2xl">
      <div className="flex justify-center">
        <img src="./s-logo.png" width="50px" alt="" />
      </div>

      <div>
        <ul>
          <li className=" border-l-4 border-yellow-600 pl-8 cursor-pointer">
            <AiOutlineUnorderedList size={25} />
          </li>
          <li className="pl-8 my-12 cursor-pointer">
            <AiOutlineHistory size={25} />
          </li>
          <li className="pl-8 cursor-pointer">
            <RiBarChartBoxLine size={25} />
          </li>
        </ul>
      </div>

      <div className="flex flex-col items-end px-6">
        <span className="flex justify-center items-center bg-red-400 h-5 w-5 -mb-4 z-10 rounded text-xs text-white ">
          3
        </span>
        <div className="bg-yellow-500 rounded-full h-12 w-12 flex justify-center items-center">
          <AiOutlineShoppingCart color="white" size={25} />
        </div>
      </div>
    </nav>
  );
};

export default SideNav;
