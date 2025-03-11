import React from "react";
import { info } from "../data/meta";
import { AcmAtSdsuLightBg } from "./Modules";
import { C3PO } from "../data/c3po";
import { GoogleLogo } from "./Modules";
import GooglePNG from "../images/logos/google.png";
import CSSC from "../images/logos/cssc.svg";


export default function Outreach() {
	return (
		<section id="outreach" class="p-8 pb-10 bg-gray-900 text-white xl:inline-block">
			<h1 class="text-5xl font-bold text-center m-4 mb-8 text-acm-light-blue">Sponsors & Outreach</h1>
            <div class="text-lg xl:mx-36">

                <h2 class="text-3xl font-bold my-4">Google Sponsorship</h2>
                <div class="flex flex-col xl:flex-row items-center">
                    <p class="max-w-[100%] xl:max-w-[70%]">
                        <AcmAtSdsuLightBg /> is a proud partner of Google, which provides us with resources and opportunities to help our members grow as students and professionals. We are grateful for Google's support and look forward to working with them to provide our members with the best possible experience.
                    </p>
                    <img src={GooglePNG} class="h-24 mx-auto mt-8 xl:my-auto" />
                </div>

                <h2 class="text-3xl font-bold my-4">College of Sciences Student Council</h2>
                <div class="flex flex-col xl:flex-row items-center">
                    <p class="max-w-[100%] xl:max-w-[70%]">
                        <AcmAtSdsuLightBg /> is a proud member of the <a href="https://as.sdsu.edu/cssc/" target="_blank" class="underline">College of Sciences Student Council (CSSC)</a>. At the CSSC, we contribute to discussions about programs that will benefit students throughout the College of Sciences (CoS) at SDSU. As a CSSC member organization, we also participate in community service activities and events that promote the CoS and its students.
                    </p>
                    <img src={CSSC} class="h-36 mx-auto xl:my-auto" />
                </div>

                <div class="flex flex-col xl:flex-row items-center">
                    <p class="max-w-[100%] xl:max-w-[70%]">
                        <h2 class="text-3xl font-bold my-4">Affiliated Organizations</h2>
                        <AcmAtSdsuLightBg /> also collaborates with other on-campus organizations from time to time. For example, in November 2024, we co-hosted the SDSU STEM Karaoke Night alongside Women in Physics (WiP), the Society of Statisticians and Actuaries (SSA), and the Schwartz Astronomical Society (SAS).
                    </p>
                </div>
            </div>
		</section>
	);
}
