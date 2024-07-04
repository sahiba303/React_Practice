import React from "react";

function Spotify() {
  return (
    <>
      <div className="w-[450px] flex justify-center mx-auto flex-col">
        <h1 className=" text-[#2e1065] mt-10 text-[1.2em] font-bold">
          New Podcast Episode
        </h1>
        <p className="text-[#603e9f]">Check out more on Spotify</p>
      </div>

      <div className="w-full flex justify-center">
        <hr className="border-gray-300 mt-6 w-[450px]" />
      </div>

      <div className="w-[450px] rounded-2xl mx-auto mt-6 flex justify-center items-center h-40 bg-black">
        <div className="items-center text-center">
          <h5 className="text-md text-white font-medium">
            Sorry, that’s not currently available in your region.
          </h5>
          <p className="text-xs text-gray-600">
            Luckily, lots of other stuff is.
          </p>
        </div>
      </div>

     
    </>
  );
}

export default Spotify;
