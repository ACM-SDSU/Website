import React from "react";
import { AcmAtSdsuLightBg } from "../Modules";
import { AcmAtSdsu } from "../Modules";
import { HackLogo } from "../Modules";
import { ChipButton } from "../InfoChip"
import Timeline from "./Timeline";

const FormLink = "https://docs.google.com/forms/d/e/1FAIpQLSf3y0iYGxi0LdNoiBJ3LkJZx9-WFURiAlwHjpML6fxkIzHGBw/viewform"

export default function Register({ headerStyle }) {
    return (
        <section id="register" class="pt-6 pb-12 text-white">
            <h1 class="hackheader">Register Today!</h1>
            <Timeline />
            <div class="px-2 lg:w-1/2 mx-auto mt-4">
                <h1 class="text-lg lg:text-xl text-acm-orange font-bold pt-4">
                    Before you register, you'll need:
                </h1>
                <ul class="list-disc list-inside text-left text-lg mt-0 py-1">
                    <li class="my-1 lg:mb-1">Your SDSU Email Address and Red ID number</li>
                    <li class="my-1 lg:mb-1">A list of team members, if you already have a team. Limit 4 members per team.</li>
                    <li class="mb-1">Your resume (optional but recommended)</li>
                </ul>
                <h1 class="text-lg lg:text-xl text-acm-orange font-bold pt-2">
                    No team? No problem!
                </h1>
                <p class="text-left text-lg mt-0 py-1">
                    If you do not already have a team, we will do our best to place you on a team that aligns with your skills and interests. Past participants who were assigned to teams had a great experience and were able to meet new people!
                </p>
                <h1 class="text-lg lg:text-xl text-acm-orange font-bold pt-2">
                    Stay Up-To-Date
                </h1>
                <p class="text-left text-lg mt-0 py-1">
                    Join the <a href="https://discord.gg/UuNuggpKYV" target="_blank" class="text-acm-light-blue hover:text-acm-blue underline">ACM Discord Server</a> and <a href="https://discord.com/invite/6MTk5wcH9T" target="_blank" class="text-acm-light-blue hover:text-acm-blue underline">CTRL Discord Server</a> for the latest announcements.
                </p>
            </div>
            <a href={FormLink} target="_blank">
                <p class="bg-acm-blue w-[95%] lg:w-[22.5%] text-3xl text-center mx-auto mt-6 lg:mt-6 p-2 bg-opacity-70 rounded-xl">
                    Registration Form
                </p>
            </a>
            <span className="font-bold text-xl xl:text-xl text-acm-red text-center w-full block italic mt-2 lg:mt-4">
                If you are registering as a team, please have <u>ALL</u> team members fill out the form individually.
            </span>
        </section>
    );
}
