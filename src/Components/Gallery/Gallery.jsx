import React, { useState } from "react";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";
const photos = [
  "https://unicorn-cdn.b-cdn.net/24934d1f-378a-49dc-a78c-eba105152be6/theregisti-ziszilqlsom-unsplash-(1).png?width=1476&height=986",
  "https://unicorn-cdn.b-cdn.net/2efd4e37-8600-4f45-b74c-1db24e525e52/kal-visuals-b5v2bz8uso0-unsplash-(1).png?width=1476&height=984",
  "https://unicorn-cdn.b-cdn.net/c9a6965d-e063-4e99-8701-35741c7dd8ad/nubelson-fernandes-ie71-tmrrke-unsplash-(1).png?width=1476&height=832",
  "https://unicorn-cdn.b-cdn.net/7f56e79b-1b1b-4a6b-b652-f6392e58eb74/onur-binay-o2-ezngziyk-unsplash-(1).png?width=1476&height=832",
];
function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevPhoto = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };
  const nextPhoto = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <section className="  flex flex-col items-center">
      <div className="w-[450px] flex justify-center mx-auto flex-col">
        <h1 className=" text-[#2e1065] mt-10 text-[1.2em] font-bold">
          Gallery
        </h1>
      </div>
      <div className="w-full flex justify-center">
        <hr className="border-gray-300 mt-6 w-[450px]" />
      </div>
      <div className="mt-6 relative flex items-center justify-center">
        <button
          className="absolute left-[-16px] top-[138px] bg-gray-500 text-white p-2 rounded-full"
          onClick={prevPhoto}
        >
          <FaCircleArrowLeft />
        </button>
        <div className="rounded-2xl overflow-hidden w-full mb-6">
          <img
            className="rounded-2xl"
            src={photos[currentIndex]}
            alt={`Photo ${currentIndex + 1}`}
            width="450"
            height="315"
          />
          <img
            className="rounded-2xl"
            src={photos[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            width="450"
            height="315"
          />
        </div>
        <button
          className="absolute right-[-16px] top-[138px] bg-gray-500 text-white p-2 rounded-full"
          onClick={nextPhoto}
        >
          <FaCircleArrowRight />
        </button>
      </div>
    </section>
  );
}
export default Gallery;
