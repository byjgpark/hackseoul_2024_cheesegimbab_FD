"use client";

import {cn } from "@/lib/utils";
import * as React from "react";


const DropDown = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedOption, setSelectedOption] = React.useState("Options");
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false); // Close the dropdown after selecting an option
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={toggleDropdown}
          className={cn("inline-flex justify-between items-center w-full rounded-md border shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700", {"ring-2 ring-black" : isOpen})}
        >
          <span>{selectedOption}</span>
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06 0L10 10.9l3.71-3.69a.75.75 0 111.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <a
            
              onClick={() => handleOptionClick("Account settings")}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Account settings
            </a>
            <a
            
              onClick={() => handleOptionClick("Support")}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Support
            </a>
            <a
            
              onClick={() => handleOptionClick("License")}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              License
            </a>
            <form method="POST" action="#">
              <button
                type="submit"
                onClick={() => handleOptionClick("Sign out")}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Sign out
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDown;
