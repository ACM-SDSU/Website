import React from "react";

import { Link, Element, animateScroll as scroll } from "react-scroll";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";

import { InfoChip, ChipTitle, ChipContent, ChipButton } from "../InfoChip";

import ILink from "../Link";

import { AcmAtSdsu } from "../Modules";
import { HackLogo } from "../Modules";

let chips = [
    {
        date: "October 31",
        weekday: "Friday",
        event: "Priority Registration Deadline. We cannot guarantee spots after this date, so register ASAP!",
        icon: require("../../images/hack25/lastday_final.jpeg"),
    },
    {
        date: "November 8",
        weekday: "Saturday",
        event: "Final Registration Deadline. No registrations will be accepted after this date.",
        icon: require("../../images/hack25/proposal_final.jpeg"),
    },
    {
        date: "November 15 & 16",
        weekday: "Saturday & Sunday",
        event: "The Hackathon will begin promptly at 9:00am, and will run until 7:00pm both days.",
        icon: require("../../images/hack25/hackathon_final.jpeg"),
    },
];

export default function Timeline({headerStyle}){
    return (
        // <section id="timeline" className="pt-6 pb-12 items-center text-white">
        <section id="timeline">
            {/* <h1 className="hackheader">Hackathon Timeline</h1> */}
            <div className="flex flex-wrap justify-center gap-6 py-0">
                {chips.map((chip) => (
                    <div
                        key={chip.date}
                        className="rounded-xl shadow-lg flex flex-col items-center w-full max-w-xs px-5 py-3 m-2 border-2 shadow-lg duration-200 bg-black/60 border-acm-yellow"
                    >
                        <div className="text-center mb-2">
                            <div className="text-base lg:text-lg font-semibold text-acm-blue">{chip.weekday}</div>
                            <div className="text-xl lg:text-3xl font-bold text-yellow-400">{chip.date}</div>
                        </div>
                        <div className="w-full flex flex-col flex-1 items-center justify-between">
                            <p className="text-base lg:text-lg text-center mb-2 text-white">{chip.event}</p>
                            <div className="flex-1 flex flex-col justify-end w-full">
                                {/* <img
                                    src={chip.icon}
                                    alt={chip.event}
                                    className="min-w-[75%] max-w-[90%] max-h-[35vh] mx-auto mt-2 rounded-md shadow"
                                    style={{ marginTop: "auto" }}
                                /> */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
