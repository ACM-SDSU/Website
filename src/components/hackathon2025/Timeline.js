import React from "react";

import { Link, Element, animateScroll as scroll } from "react-scroll";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";

import { InfoChip, ChipTitle, ChipContent, ChipButton } from "../InfoChip";

import ILink from "../Link";

import { AcmAtSdsu } from "../Modules";
import { HackLogo } from "../Modules";

let chips = [
    {
        date: "March 24",
        weekday: "Monday",
        event: "Registration for the Hackathon will begin.",
    },
    {
        date: "April 18",
        weekday: "Friday",
        event: "Last day to register for the Hackathon.",
    },
    {
        date: "April 21",
        weekday: "Monday",
        event: "Project proposal submissions open.",
    },
    {
        date: "April 25",
        weekday: "Friday",
        event: "Final deadline to submit project proposal.",
    },
    {
        date: "April 26",
        weekday: "Saturday",
        event: "The Hackathon will begin promptly at 9:00am.",
    },
];

export default function Timeline(){
    return (
        <section id="timeline" class="pt-6 pb-12 items-center bg-gray-900 text-white lg:min-h-screen">
            <h1 class="text-5xl font-bold text-center m-4 mb-8 text-acm-light-blue">Hackathon Timeline</h1>
            <p class="text-center text-2xl mt-6 p-2">
                View the Hackathon Timeline below for more information about important dates and times.
            </p>
            <div class="flex flex-row flex-wrap gap-x-6 gap-y-6 p-4 justify-center">
                {chips.map((chip) => (
                    <InfoChip key={chip.date} bgcolor="bg-gray-200" textcolor="text-gray-900" otherstyle="h-full lg:w-1/6 lg:h-[56vh]">
                        <ChipTitle otherstyle="text-lg">{chip.weekday}</ChipTitle>
                        <ChipTitle otherstyle="text-3xl">{chip.date}</ChipTitle>
                        <ChipContent>
                            {chip.event}
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
