import React from "react";

import { Link, Element, animateScroll as scroll } from "react-scroll";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";

import { InfoChip, ChipTitle, ChipContent, ChipButton } from "../InfoChip";

import ILink from "../Link";

import { AcmAtSdsu } from "../Modules";
import { HackLogo } from "../Modules";

export default function Timeline(){
    return (
        <section id="timeline" class="pt-6 pb-12 items-center bg-gray-900 text-white lg:min-h-screen">
            <h1 class="text-5xl font-bold text-center m-4 mb-8">Hackathon Timeline</h1>
            <p class="text-center text-2xl mt-6 p-2">
                View the Hackathon Timeline below for more information about important dates and times.
            </p>
            <div class="flex flex-row flex-wrap gap-x-6 gap-y-6 p-4 justify-center">
                <InfoChip bgcolor="bg-gray-200" textcolor="text-gray-900">
                    <ChipTitle>March XX</ChipTitle>
                    <ChipContent>
                        Registration for <HackLogo /> will begin.
                    </ChipContent>
                    <ChipButton bgcolor="bg-acm-blue" hovercolor="acm-orange" goal="register">
                        Register
                    </ChipButton>
                </InfoChip>
                <InfoChip bgcolor="bg-gray-200" textcolor="text-gray-900">
                    <ChipTitle>March XX</ChipTitle>
                    <ChipContent>
                        Registration for <HackLogo /> will begin.
                    </ChipContent>
                    <ChipButton bgcolor="bg-acm-blue" hovercolor="acm-orange" goal="register">
                        Register
                    </ChipButton>
                </InfoChip>
                <InfoChip bgcolor="bg-gray-200" textcolor="text-gray-900">
                    <ChipTitle>March XX</ChipTitle>
                    <ChipContent>
                        Registration for <HackLogo /> will begin.
                    </ChipContent>
                    <ChipButton bgcolor="bg-acm-blue" hovercolor="acm-orange" goal="register">
                        Register
                    </ChipButton>
                </InfoChip>
                <InfoChip bgcolor="bg-gray-200" textcolor="text-gray-900">
                    <ChipTitle>March XX</ChipTitle>
                    <ChipContent>
                        Registration for <HackLogo /> will begin.
                    </ChipContent>
                    <ChipButton bgcolor="bg-acm-blue" hovercolor="acm-orange" goal="register">
                        Register
                    </ChipButton>
                </InfoChip>
                <InfoChip bgcolor="bg-gray-200" textcolor="text-gray-900">
                    <ChipTitle>April 26</ChipTitle>
                    <ChipContent>
                        The <HackLogo /> Hackathon will begin promptly at 9:00am.
                    </ChipContent>
                    <ChipButton bgcolor="bg-acm-blue" hovercolor="acm-orange" goal="register">
                        Register
                    </ChipButton>
                </InfoChip>
            </div>
        </section>
    );
}
