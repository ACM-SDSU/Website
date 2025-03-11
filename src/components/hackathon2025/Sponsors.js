import React from "react";
import { info } from "../../data/meta";
import { AcmAtSdsuLightBg } from "../Modules";
import { C3PO } from "../../data/c3po";
import { GoogleLogo } from "../Modules";
import { HackLogo } from "../Modules"
import StyleLink from "../Link"
import GooglePNG from "../../images/logos/google.png";
import CSSC from "../../images/logos/cssc.svg";


export default function Sponsors() {
	return (
		<section id="sponsors" class="p-8 pb-10 bg-gray-900 text-white xl:inline-block lg:min-h-screen">
			<h1 class="text-5xl font-bold text-center m-4 mb-8">Sponsors</h1>
            <div class="text-lg xl:mx-36">

                <h2 class="text-3xl font-bold my-4">Google Sponsorship</h2>
                <div class="flex flex-col xl:flex-row items-center">
                    <p class="max-w-[100%] xl:max-w-[70%]">
                        <AcmAtSdsuLightBg /> is a proud partner of <b>Google</b>, which provides us with resources and opportunities to help our members grow as students and professionals. We are grateful for Google's support and look forward to working with them to provide our members with the best possible experience.
                    </p>
                    <img src={GooglePNG} class="h-24 mx-auto mt-8 xl:my-auto" />
                </div>  
                <br /><br />
                We would also like to say thank you to <b>Associated Students</b> for providing funding for our event through the Campus Program Funding (CPF) system, as well as the <b>SDSU College of Sciences Student Council</b>, which will also partially fund the event.
                <br /><br /><br />
                If you are interested in sponsoring <HackLogo />, please <StyleLink to="contact" class="text-acm-blue font-bold underline">Contact Us</StyleLink> to discuss further details.
            </div>
		</section>
	);
}
