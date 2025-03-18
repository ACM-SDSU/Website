import React from "react";
import { AcmAtSdsuLightBg } from "../Modules";
import { AcmAtSdsu } from "../Modules";
import { HackLogo } from "../Modules";
import { ChipButton } from "../InfoChip"

export default function Register({headerStyle}){
    return (
        <section id="register" class="pt-6 pb-12 bg-gray-900 text-white lg:min-h-screen">
            <h1 className={`text-5xl font-bold text-center m-4 mb-8 ${headerStyle}`}>Register for <HackLogo /> Today!</h1>
            <div class="px-2 lg:w-1/2 mx-auto">
                <p class="text-left text-xl mt-6 p-2">
                    Please fill out the <a href="https://forms.gle/5x5n7pMwsoVJtg1q7" target="_blank" class="text-acm-light-blue hover:text-acm-blue underline">Registration Form</a> when you are ready to register. If you plan to work in a team (limit 3 people), <span class="font-bold">ALL TEAM MEMBERS</span> must fill out this form separately.
                </p>
                <p class="text-left text-xl mt-2 p-2">
                    Before signing up, please make sure you have the following materials available:
                </p>
                <ul class="list-disc list-inside text-left text-xl mt-2 p-2">
                    <li>Your SDSU Email Address and Red ID number</li>
                    <li>Your resume (optional but recommended)</li>
                </ul>
                {/* <p class="text-left text-xl mt-2 p-2">
                    Join the <a href="https://discord.gg/UuNuggpKYV" target="_blank" class="text-acm-light-blue hover:text-acm-blue underline">ACM Discord Server</a> for the latest announcements!
                </p> */}
            </div>
            <a href="https://forms.gle/5x5n7pMwsoVJtg1q7" target="_blank">
                <p class="bg-acm-blue w-4/5 lg:w-1/2 text-3xl text-center mx-auto mt-8 p-2 bg-opacity-70 rounded-xl">
                    Register Today
                </p>
            </a>
        </section>
    );
}
