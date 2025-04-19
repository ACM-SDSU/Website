import React from "react";

import { Link, Element, animateScroll as scroll } from "react-scroll";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";

import { InfoChip, ChipTitle, ChipContent, ChipButton } from "../InfoChip";

import ILink from "../Link";

import { AcmAtSdsu } from "../Modules";
import { HackLogo } from "../Modules";

let chips = [
    // {
    //     date: "March 19",
    //     weekday: "Wednesday",
    //     event: "Registration for the Hackathon began.",
    //     icon: require("../../images/hack25/register_final.jpeg"),
    // },
    {
        date: "April 18",
        weekday: "Friday",
        event: "Last day to register for the Hackathon.",
        icon: require("../../images/hack25/lastday_final.jpeg"),
    },
    {
        date: "April 19",
        weekday: "Saturday",
        event: "Project proposal submissions open.",
        icon: require("../../images/hack25/proposal_final.jpeg"),
    },
    {
        date: "April 25",
        weekday: "Friday",
        event: "Final deadline to submit project proposal.",
        icon: require("../../images/hack25/projectdue_final.jpeg"),
    },
    {
        date: "April 26",
        weekday: "Saturday",
        event: "The Hackathon will begin promptly at 9:00am.",
        icon: require("../../images/hack25/hackathon_final.jpeg"),
    },
];

export default function Timeline({headerStyle}){
    return (
        <section id="timeline" class="pt-6 pb-12 items-center bg-gray-900 text-white lg:min-h-screen">
            <h1 className={`text-5xl font-bold text-center m-4 mb-8 ${headerStyle}`}>Hackathon Timeline</h1>
            <p class="text-center text-2xl mt-6 p-2">
                View the Hackathon Timeline below for more information about important dates and times.
            </p>
            <div class="flex flex-row flex-wrap gap-x-3 gap-y-3 lg:gap-x-6 lg:gap-y-6 py-2 lg:p-4 justify-center">
                {chips.map((chip) => (
                    <InfoChip key={chip.date} bgcolor="bg-gray-200" textcolor="text-gray-900" otherstyle="h-full w-1/3 lg:w-1/5 h-auto">
                        <ChipTitle otherstyle="text-base lg:text-lg">{chip.weekday}</ChipTitle>
                        <ChipTitle otherstyle="text-xl lg:text-3xl">{chip.date}</ChipTitle>
                        <ChipContent>
                            <p class="text-base lg:text-lg">{chip.event}</p>
                            <img src={chip.icon} className={`min-w-[75%] max-w-[90%] max-h-[35vh] mx-auto mt-2`}/>
                            <p class="text-xs text-center text-gray-400">img credit: Isabella King</p>
                        </ChipContent>
                        {/* <ChipButton bgcolor="bg-acm-blue" hovercolor="acm-orange" goal="register">
                            Register
                        </ChipButton> */}
                    </InfoChip>
                ))}
            </div>
        </section>
    );
}
