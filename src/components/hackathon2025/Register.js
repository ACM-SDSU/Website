import React from "react";
import { AcmAtSdsuLightBg } from "../Modules";
import { AcmAtSdsu } from "../Modules";
import { HackLogo } from "../Modules";

export default function Register(){
    return (
        <section id="register" class="pt-6 pb-12 bg-gray-900 text-white lg:min-h-screen">
            <h1 className="text-5xl font-bold text-center m-4 mb-8 text-acm-light-blue">Register for <HackLogo /> Today!</h1>
            <p class="text-center text-2xl mt-6 p-2">
                The Hackathon Registration Form will be released very soon.
                <br /><br />
                Join the <a href="https://discord.gg/UuNuggpKYV" target="_blank" class="text-acm-light-blue hover:text-acm-blue">ACM Discord Server</a> for the latest announcements!
            </p>
        </section>
    );
}
