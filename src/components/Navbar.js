import React from "react";

import { Link, Element, animateScroll as scroll } from "react-scroll";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";

import SDSU_Mini_Logo_32px from "../images/logos/SDSU_Mini_Logo_32px.png";
import ACM_Mini_Logo_32px from "../images/logos/ACM_Mini_Logo_32px.jpg";
import CTRL_Mini_Logo_32px from "../images/logos/CTRL_Mini_Logo_32px.jpg";

const SDSU_White_BG = "https://brand.sdsu.edu/_images/_logo-section/downloads/1000-monogram-red.jpg";
const SDSU_Red_BG = "https://media.discordapp.net/attachments/1243989668194942996/1245081775382986794/image.png?ex=66577443&is=665622c3&hm=91d0fb90bd1abf46da3d108a223d54cc6a974acdbed7c11880ce786489957250&=&format=webp&quality=lossless&width=487&height=246";
const SDSU_Black_BG = "https://brand.sdsu.edu/_images/_logo-section/downloads/1000-monogram-white.jpg";
const ACM_Logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Association_for_Computing_Machinery_%28ACM%29_logo.svg/2048px-Association_for_Computing_Machinery_%28ACM%29_logo.svg.png";

export default function Navbar({ navItems, logotype }) {
  const navigate = useNavigate();
  const location = useLocation(); // Get current path

  const handleClick = () => {
    if (location.pathname === "/") {
      // If already on the homepage, scroll to the top
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Otherwise, navigate to the homepage
      navigate("/");
    }
  };

  return (
    <header className="bg-acm-dark-blue md:sticky top-0 z-[200] border-b-2 border-gray-900">
      <div className="container flex flex-wrap p-1 xl:py-2 flex-col md:flex-row items-center">

        {logotype === "acm" && (
          <button
            onClick={handleClick}
            className="flex justify-center items-center ml-3 mt-1 md:mt-0 text-lg title-font font-medium text-white mb-4 md:mb-0 cursor-pointer drop-shadow-[0px_0px_2px_black]"
          >
            <img
              src={SDSU_Mini_Logo_32px}
              className="h-7 xl:h-8 mt-0 mr-2 bg-sdsu-bright-red"
              alt="SDSU Logo"
            />
            <p className="xl:text-xl">Association for Computing Machinery</p>
          </button>
        )}

        {logotype === "acmctrl" && (
          <span
            //onClick={handleClick}
            className="flex justify-center items-center ml-3 mt-1 md:mt-0 text-lg title-font font-medium text-white mb-4 md:mb-0 cursor-pointer drop-shadow-[0px_0px_2px_black]"
          >
            <a href="https://cs.sdsu.edu/" className="text-2xl px-2 font-bold bg-red-700 mr-2 h-7 xl:h-8">
              SDSU
            </a>
            <a href="https://acm.sdsu.edu/" className="text-2xl px-2 font-bold bg-acm-dark-blue mr-2 h-7 xl:h-8">
              ACM
            </a>
            <a href="https://ctrl.sdsu.edu/" className="text-2xl px-2 font-bold bg-purple-900 h-7 xl:h-8">
              CTRL
            </a>
          </span>
        )}

        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-900	flex flex-wrap items-center text-lg justify-center text-gray-200">
          {navItems.map((button, index) =>
            button[1] === "hackathon" ? (
              <RouterLink
                key={index}
                to="/hack"
                className="mr-8 ml-1 hover:text-acm-yellow cursor-pointer drop-shadow-[0px_0px_2px_black]"
              >
                {button[0]}
              </RouterLink>
            ) : button[1] === "homepage" ? (
              <RouterLink
                key={index}
                to="/"
                className="mr-8 ml-1 hover:text-acm-yellow cursor-pointer drop-shadow-[0px_0px_2px_black]"
              >
                {button[0]}
              </RouterLink>
            ) : (
              <Link
                activeClass="active"
                to={button[1]}
                spy={true}
                smooth={true}
                offset={-40}
                duration={500}
                className="mr-8 ml-1 hover:text-acm-yellow cursor-pointer drop-shadow-[0px_0px_2px_black]"
              >
                {button[0]}
              </Link>
            ))}
        </nav>
      </div>
    </header>
  );
}
