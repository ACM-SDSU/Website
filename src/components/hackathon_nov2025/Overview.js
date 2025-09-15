import React, { useEffect, useState } from "react";

import ComputerChip from "../../images/logos/ComputerChip.jpg";
import HackBG1 from "../../images/logos/hackbg1.jpeg";
import HackBG2 from "../../images/logos/hackbg2.jpeg";

import { InfoChip, ChipTitle, ChipContent, ChipButton } from "../InfoChip";
import ILink from "../Link";
import { AcmAtSdsu, CtrlSdsu, HackLogo } from "../Modules";

export default function Overview() {
  const images = [HackBG1, HackBG2];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 2500); // change every 3s
    return () => clearInterval(id);
  }, [images.length]);

  return (
    <section
      id="overview"
      className="relative min-h-screen grid overflow-hidden"
    >
      {/* background layers */}
      {/* <div className="absolute inset-0 z-0">
        {images.map((img, i) => (
          <div
            key={i}
            className={[
              "absolute inset-0 bg-cover bg-center",
              "transition-opacity duration-[3000ms] ease-in-out",
              "pointer-events-none",
              index === i ? "opacity-100" : "opacity-0",
            ].join(" ")}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div> */}

      {/* foreground content */}
      <div className="relative z-10 flex flex-col justify-center items-center w-full h-full">
        <h1 className="text-6xl lg:text-8xl text-gray-100 w-4/5 font-bold text-center mb-4 drop-shadow-[0px_0px_4px_black]">
          <HackLogo />
        </h1>

        <h2 className="text-center text-4xl text-gray-300 w-full font-bold mb-4 drop-shadow-[0px_0px_3px_black]">
          Proudly hosted by <AcmAtSdsu /> and <CtrlSdsu />
        </h2>

        <div className="flex flex-row flex-wrap gap-4 p-4 justify-center">
          <InfoChip bgcolor="bg-gray-200" textcolor="text-gray-900">
            <ChipTitle>About the Hackathon</ChipTitle>
            <ChipContent>
              The <HackLogo /> Hackathon invites all SDSU students to compete in
              teams to develop projects that benefit the SDSU community.
            </ChipContent>
            <ChipButton bgcolor="bg-acm-blue" hovercolor="acm-orange" goal="prompt">
              Learn More
            </ChipButton>
          </InfoChip>

          <InfoChip bgcolor="bg-gray-200" textcolor="text-gray-900">
            <ChipTitle>Time and Location</ChipTitle>
            <ChipContent>
              The <HackLogo /> Hackathon will take place on <b>Saturday, November 15, 2025 </b>
              from 9:00am–8:00pm in Templo Mayor, Conrad Prebys Aztec
              Student Union.
            </ChipContent>
            <ChipButton bgcolor="bg-acm-blue" hovercolor="acm-orange" goal="timeline">
              Event Timeline
            </ChipButton>
          </InfoChip>

		  <InfoChip bgcolor="bg-gray-200" textcolor="text-gray-900">
            <ChipTitle>Registration Begins Soon</ChipTitle>
            <ChipContent>
              Registration for <HackLogo /> will begin soon. Stay tuned for updates! Fill out the Interest Form below to be notified as soon as registration opens.
            </ChipContent>
            <ChipButton bgcolor="bg-acm-blue" hovercolor="acm-orange" goal="https://ctrl.sdsu.edu">
              Submit Interest Form
            </ChipButton>
          </InfoChip>
        </div>
      </div>
    </section>
  );
}
