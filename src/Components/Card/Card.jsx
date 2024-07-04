import React from "react";
import { FaLink } from "react-icons/fa6";

const Card = ({ data }) => {
  console.log(data, "MyData");
  return (
    <div>
  <div className="flex flex-col gap-3">
        {data.map((item, index) => (
          <div key={index}>
            <a
              href={item.link}
              className="block w-full max-w-md mx-auto rounded-lg border-[1px] border-gray-300 hover:border-gray-500 transition-all duration-200 relative overflow-hidden"
            >
              <div className="flex items-center justify-between gap-2 p-2 cursor-pointer group">
                <div className="flex items-center gap-2">
                  <img
                    className="w-14 h-14 rounded-[2px]"
                    src={item.logo}
                    alt="Logo"
                  />
                  <div>
                    <h5 className="text-md font-medium text-gray-900">
                      {item.title}
                    </h5>
                    <p className="text-xs text-gray-600">{item.description}</p>
                  </div>
                </div>
                <div className="opacity-0 absolute right-3 inset-0 flex items-center justify-end bg-opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                  <FaLink className="text-black" />
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Card;
