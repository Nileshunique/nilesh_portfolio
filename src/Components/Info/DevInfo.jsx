import { Link } from "react-router-dom";
import Typewriter from "../../SharedComponent/Typewriter/Typewriter";
import { handleCall, scrollToSection } from "../../utils";
import profile from "./../../assets/images/profile-small.png";
import { BsWhatsapp } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";

function DevInfo() {
  return (
    <div id="Home" className="text-white min-h-screen shadow-xl mt-8">
      <main className="flex flex-col md:flex-row justify-between items-center px-4 md:px-8 py-8 md:py-14">
        <div className="max-w-lg mb-8 md:mb-0 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {"I'M"} <span className="text-yellow-500">Nilesh Kumar</span>
          </h1>
          <div className="text-xl mb-6 flex">
            <Typewriter
              texts={[
                "Full Stack Developer",
                "MERN Stack Developer",
                "Software Engineer",
                "Web Developer",
                "UI Developer / Designer",
              ]}
              speed={100}
              delayBetweenTexts={1000}
            />
          </div>
          <p className="mb-4">
            I’m a passionate and detail-oriented Front-End Developer with over 3
            years of experience building responsive, accessible, and
            SEO-optimized web interfaces. I specialize in modern front-end
            technologies including ReactJS, NextJS, NodeJS, ExpressJS and
            MongoDB.
          </p>
          <button className="bg-yellow-500 text-gray-800 px-6 py-2 rounded-full font-bold hover:bg-yellow-600">
            <div onClick={() => scrollToSection("ContactMe")}>Contact Me</div>
          </button>
        </div>
        <div className="relative">
          <div className="rounded-lg w-auto border border-neutral-700">
            <img
              src={profile}
              alt="Ivan Dan"
              className="rounded-lg w-auto md:w-auto hover:drop-shadow-border relative"
            />
          </div>
          <div className="absolute right-0 bottom-0 flex md:flex-col space-x-4 md:space-x-0 md:space-y-4 bg-gray-800 p-2 rounded-tl-lg">
            <Link
              to={"https://www.facebook.com/nileshunique/"}
              target="_blank"
              className="text-[1.65rem]"
            >
              <FaFacebookF className="text-gray-400 hover:text-white cursor-pointer" />
            </Link>
            <Link
              to={"https://www.linkedin.com/in/nilesh-kumar-692906236/"}
              target="_blank"
              className="text-[1.65rem]"
            >
              <FaLinkedinIn className="text-gray-400 hover:text-white cursor-pointer" />
            </Link>
            <div onClick={handleCall} className="text-[1.65rem]">
              <FaPhoneAlt className="text-gray-400 hover:text-white cursor-pointer" />
            </div>
            <Link
              to={"https://wa.me/+919911148122"}
              target="_blank"
              className="text-[1.65rem]"
            >
              <BsWhatsapp className="text-gray-400 hover:text-white cursor-pointer" />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default DevInfo;
