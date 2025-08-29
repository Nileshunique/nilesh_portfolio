import { Link } from "react-router-dom";
import Typewriter from "../../SharedComponent/Typewriter/Typewriter";
import { handleCall, scrollToSection } from "../../utils";
import { BsWhatsapp } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import userProfile from "./../../constant/constant";

function DevInfo() {
  const {
    profileName,
    typeWriterTexts,
    description,
    profileImage,
    profileLinks,
  } = userProfile;
  const { facebook, linkedin, whatsapp, phone } = profileLinks || {};

  return (
    <div id="Home" className="text-white min-h-screen shadow-xl mt-8">
      <main className="flex flex-col md:flex-row justify-between items-center px-4 md:px-8 py-8 md:py-14">
        <div className="max-w-lg mb-8 md:mb-0 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {"I'M"} <span className="text-yellow-500">{profileName}</span>
          </h1>
          <div className="text-xl mb-6 flex">
            <Typewriter
              texts={typeWriterTexts}
              speed={100}
              delayBetweenTexts={1000}
            />
          </div>
          <p className="mb-4">{description}</p>
          <button className="bg-yellow-500 text-gray-800 px-6 py-2 rounded-full font-bold hover:bg-yellow-600">
            <div onClick={() => scrollToSection("ContactMe")}>Contact Me</div>
          </button>
        </div>
        <div className="relative">
          {profileImage && (
            <div className="rounded-lg w-auto border border-neutral-700">
              <img
                src={profileImage}
                alt="Ivan Dan"
                className="rounded-lg w-auto md:w-auto hover:drop-shadow-border relative"
              />
            </div>
          )}
          <div className="absolute right-0 bottom-0 flex md:flex-col space-x-4 md:space-x-0 md:space-y-4 bg-gray-800 p-2 rounded-tl-lg">
            {facebook && (
              <Link to={facebook} target="_blank" className="text-[1.65rem]">
                <FaFacebookF className="text-gray-400 hover:text-white cursor-pointer" />
              </Link>
            )}
            {linkedin && (
              <Link to={linkedin} target="_blank" className="text-[1.65rem]">
                <FaLinkedinIn className="text-gray-400 hover:text-white cursor-pointer" />
              </Link>
            )}
            {phone && (
              <div onClick={handleCall} className="text-[1.65rem]">
                <FaPhoneAlt className="text-gray-400 hover:text-white cursor-pointer" />
              </div>
            )}
            {whatsapp && (
              <Link to={whatsapp} target="_blank" className="text-[1.65rem]">
                <BsWhatsapp className="text-gray-400 hover:text-white cursor-pointer" />
              </Link>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default DevInfo;
