/* eslint-disable react/prop-types */
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./../../assets/images/nkLogo.png";
import { scrollToSection } from "../../utils";
import resume from "./../../assets/Resume/Nilesh_Resume.pdf";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="mb-8 fixed top-0 right-0 left-0 !z-50">
      <header className=" bg-neutral-800 d-block z-50 w-full p-0 flex justify-between items-center">
        <div
          onClick={() => scrollToSection("Home")}
          className="text-2xl font-bold text-yellow-500 py-2 px-4"
        >
          <img src={Logo} alt="logo" className="w-14 h-10 cursor-pointer" />
        </div>
        <nav className="hidden md:block rounded-bl-full h-full bg-red-700 py-4 pl-20 pr-10">
          <Links />
        </nav>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </header>

      {isMenuOpen && (
        <div className="md:hidden fixed w-full bg-gray-700 p-4">
          <Links onClick={() => setIsMenuOpen(!isMenuOpen)} />
        </div>
      )}
    </div>
  );
}

export default Header;

const Links = ({ onClick }) => {
  const handleClick = (id) => {
    scrollToSection(id);
    if (onClick) {
      onClick();
    }
  };

  return (
    <ul className="md:flex md:space-x-4 space-y-2 md:space-y-0">
      <li>
        <div
          onClick={() => handleClick("About")}
          className="hover:text-yellow-500 hover:underline cursor-pointer"
        >
          About
        </div>
      </li>
      <li>
        <div
          onClick={() => handleClick("Experience")}
          className="hover:text-yellow-500 hover:underline cursor-pointer"
        >
          Experience
        </div>
      </li>
      <li>
        <div
          onClick={() => handleClick("Portfolio")}
          className="hover:text-yellow-500 hover:underline cursor-pointer"
        >
          Portfolio
        </div>
      </li>
      <li>
        <div
          onClick={() => handleClick("Blogs")}
          className="hover:text-yellow-500 hover:underline cursor-pointer"
        >
          Blogs
        </div>
      </li>
      <li>
        <div
          onClick={() => handleClick("ContactMe")}
          className="hover:text-yellow-500 hover:underline cursor-pointer"
        >
          Contact
        </div>
      </li>
      <li>
        <a
          className="hover:text-yellow-500 hover:underline cursor-pointer"
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </li>
    </ul>
  );
};
