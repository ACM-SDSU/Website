import React from "react";
import { Link, Element, animateScroll as scroll } from "react-scroll";
import SDSU_Mini_Logo_32px from "../images/logos/SDSU_Mini_Logo_32px.png";
//import SDSU_Small_TR from "../images/logos/SDSU_Small_TR.png";
const SDSU_White_BG = "https://brand.sdsu.edu/_images/_logo-section/downloads/1000-monogram-red.jpg";
const SDSU_Red_BG = "https://media.discordapp.net/attachments/1243989668194942996/1245081775382986794/image.png?ex=66577443&is=665622c3&hm=91d0fb90bd1abf46da3d108a223d54cc6a974acdbed7c11880ce786489957250&=&format=webp&quality=lossless&width=487&height=246";
const SDSU_Black_BG = "https://brand.sdsu.edu/_images/_logo-section/downloads/1000-monogram-white.jpg";
const ACM_Logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Association_for_Computing_Machinery_%28ACM%29_logo.svg/2048px-Association_for_Computing_Machinery_%28ACM%29_logo.svg.png";

const buttons = [
  ["About", "about"],
  ["Officers", "officers"],
  //["Guest Speakers", "guestspeakers"],
  ["Sponsors & Outreach", "outreach"],
  ["Upcoming Events", "events"],
  ["Contact Us", "contact"],
]

export default function Navbar() {
    return (
      <header className="bg-acm-blue md:sticky top-0 z-10 border-b-2 border-gray-700">
        <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
            <Link
              activeClass="active"
              to="overview"
              spy={true}
              smooth={true}
              offset={-64}
              duration={500}
              className="flex justify-center items-center ml-3 text-xl title-font font-medium text-white mb-4 md:mb-0 cursor-pointer"
              >
              <img src={SDSU_Mini_Logo_32px} class="h-7 mt-1 mr-2 bg-sdsu-bright-red" />
              Association for Computing Machinery
            </Link>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center text-gray-200">
            {buttons.map((button) => (
              <Link
                activeClass="active"
                to={button[1]}
                spy={true}
                smooth={true}
                offset={-64}
                duration={500}
                className="mr-6 ml-1 hover:text-acm-yellow cursor-pointer"
                >
                {button[0]}
                </Link>
            ))}
          </nav>
        </div>
      </header>
    );
  }
