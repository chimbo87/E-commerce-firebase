import React from "react";

function Header() {
  return (
    <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between pl-20 pr-20">
        <div>
          <h2>CHIMBO</h2>
        </div>
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <li className="text-base text-black font-bold hover:text-orange-800 hover:underline underline-offset-2 decoration-[1px] cursor-pointer">
              Home
            </li>
            <li className="text-base text-black font-bold hover:text-orange-800 hover:underline underline-offset-2 decoration-[1px] cursor-pointer">
              About
            </li>
            <li className="text-base text-black font-bold hover:text-orange-800 hover:underline underline-offset-2 decoration-[1px] cursor-pointer">
              Service
            </li>
            <li className="text-base text-black font-bold hover:text-orange-800 hover:underline underline-offset-2 decoration-[1px] cursor-pointer">
              Elements
            </li>
            <li className="text-base text-black font-bold hover:text-orange-800 hover:underline underline-offset-2 decoration-[1px] cursor-pointer">
              Blog
            </li>
          </ul>
          <div>
          <i class='bx bx-shopping-bag'></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
