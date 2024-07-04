import React from "react";

export default function Button(props) {
  return (
    <div className="w-full flex justify-center">
      <div>
        <button className="flex items-center text-[#2E1065] hover:bg-[#2E1065] hover:text-white transition duration-300 border-[1px] border-[#cdc5e0] gap-2 w-[120px] mx-auto p-3 rounded-md font-bold">
          {props.icon}
          {props.text}
        </button>
      </div>
    </div>
  );
}
