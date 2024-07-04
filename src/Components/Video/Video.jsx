import React from "react";

const Video = () => {
  return (
    <>
      <div className="w-[450px] flex justify-center mx-auto flex-col">
        <h1 className=" text-[#2e1065] mt-10 text-[1.2em] font-bold">
          Latest Video
        </h1>
        <p className="text-[#603e9f]">Check out more on my channel</p>
      </div>
      <div className="w-full flex justify-center">
        <hr className="border-gray-300 mt-6 w-[450px]" />
      </div>
      <div className="flex justify-center rounded-lg border-gray-300 pt-4">
        <iframe
        className="rounded-xl"
          src="https://www.youtube.com/embed/52FkiPbDBi4?si=vp3_kjDYhKhqBtzW"
          width= "450px"
          height= "315px"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
          title="video"
        />
      </div>
      
    </>
  );
};

export default Video;
