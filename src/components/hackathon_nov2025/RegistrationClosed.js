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
            <h1 class="hackheader">Registration Closed</h1>
            <div class="px-2 lg:w-1/2 mx-auto mt-4">
                <h1 class="text-lg lg:text-2xl text-acm-orange font-bold pt-4">
                    Registration is now closed, and we will not be accepting any more participants for the November 2025 Hackathon.
                </h1>
                <p class="text-base lg:text-xl mt-4">
                    Thanks to the <span class="font-bold text-acm-red text-lg lg:text-2xl underline">197 participants</span> who registered for the Innovate 4 SDSU Hackathon! We look forward to seeing you there.
                </p>
                <p class="text-base lg:text-xl mt-4">
                    Join the <a href="https://discord.gg/6MTk5wcH9T" target="_blank" class="underline">Discord Server</a> to stay updated on future events!
                </p>
            </div>
        </section>
    );
}
