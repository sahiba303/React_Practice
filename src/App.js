import React from "react";
import Profile from "./Components/Profile/Profile";
import Button from "./Components/Button/Button";
import { GiWorld } from "react-icons/gi";
import { GoBook } from "react-icons/go";
import SocialLinks from "./Components/SocialLinks/SocialLinks";
import { FaInstagram, FaLinkedin, FaTelegramPlane } from "react-icons/fa";
import { BsThreads } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import Card from "./Components/Card/Card";
import Spotify from "./Components/Spotify/Spotify";
import Video from "./Components/Video/Video";
import Gallery from "./Components/Gallery/Gallery";
import Support from "./Components/Support/Support";
import Footer from "./Components/Footer/Footer";

const data = [
  {
    link: "https://example.com",
    logo: "https://unicorn-cdn.b-cdn.net/39d8a25d-4687-41c1-8c63-3df582b81d32/unicorn-ios.png?width=600&height=600",
    title: "Unicorn Platform",
    description: "Simple Website builder for busy founders",
  },
  {
    link: "https://example.com",
    logo: "https://unicorn-cdn.b-cdn.net/4c6bbe7e-d7c3-45fa-90c7-e9e07ec6e949/listing-ios.png?width=600&height=600",
    title: "Unicorn Platform",
    description: "Simple Website builder for busy founders",
  },
  {
    link: "https://example.com",
    logo: "https://unicorn-cdn.b-cdn.net/af0c4201-9421-4443-87c7-9b73be71a28c/index-ios.png?width=600&height=600",
    title: "Unicorn Platform",
    description: "Simple Website builder for busy founders",
  },
  {
    link: "https://example.com",
    logo: "https://unicorn-cdn.b-cdn.net/69622952-d83e-4b03-a9a8-61907e861cfc/devhunt-ios.png?width=600&height=600",
    title: "Unicorn Platform",
    description: "Simple Website builder for busy founders",
  },
  {
    link: "https://example.com",
    logo: "https://unicorn-cdn.b-cdn.net/93afec7d-5b67-4707-b7f3-68ce3913c713/filmgrail-ios.png?width=600&height=600",
    title: "Unicorn Platform",
    description: "Simple Website builder for busy founders",
  },
  {
    link: "https://example.com",
    logo: "https://unicorn-cdn.b-cdn.net/157c0cb5-fe43-4760-828f-6eebebc4f8bd/allgpts-ios.png?width=600&height=600s",
    title: "Unicorn Platform",
    description: "Simple Website builder for busy founders",
  },
];




export default function App() {
  return (
    <div className="flex flex-col bg-[#f5f3ff] h-auto ">
      <section>
        <div>
          <Profile />
        </div>
        <div className="w-full flex justify-center mt-4">
          <div className="flex gap-3 w-64">
            <Button text="Website" icon={<GiWorld />} />
            <Button text="News" icon={<GoBook />} />
          </div>
        </div>

        <div className="flex justify-center items-center mt-6 text-[25px] gap-4 ">
          <SocialLinks
            link="https://instagram.com"
            icon={<FaInstagram className="text-[#2E1065]" />}
          />
          <SocialLinks
            link="https://linkedin.com"
            icon={<FaLinkedin className="text-[#2E1065]" />}
          />
          <SocialLinks
            link="https://telegram.com"
            icon={<FaTelegramPlane className="text-[#2E1065]" />}
          />
          <SocialLinks
            link="https://threads.com"
            icon={<BsThreads className="text-[#2E1065]" />}
          />
          <SocialLinks
            link="https://twitter.com"
            icon={<FaXTwitter className="text-[#2E1065]" />}
          />
          <SocialLinks
            link="https://youtube.com"
            icon={<IoLogoYoutube className="text-[#2E1065]" />}
          />
        </div>
      </section>

      <section className=" mt-8 ">
        <div>
          <h1 className="text-center text-[#2e1065] mb-4 text-[1.2em] font-bold">
            Released projects
          </h1>
        </div>

        <div className="w-full flex justify-center">
          <hr className="border-gray-300 mb-4 w-[450px]" />
        </div>

        <div className="w-full">
          <Card data={data} />
        </div>
      </section>

      <section>
        <Spotify />
      </section>

      <section>
        <Video />
      </section>

      <section>
        <Gallery />
      </section>

      <section>
        <Support />
      </section>

      <section>
        <Footer />
      </section>
    </div>
  );
}
