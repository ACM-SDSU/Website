import React from "react";
import { info } from "../../data/meta";
import { AcmAtSdsuLightBg } from "../Modules";
import { C3PO } from "../../data/c3po";
import { GoogleLogo } from "../Modules";
import { HackLogo } from "../Modules"
import StyleLink from "../Link"
import GooglePNG from "../../images/logos/google.png";
import CSSC from "../../images/logos/cssc.svg";


export default function Sponsors({headerStyle}) {
	return (
		<section id="sponsors" class="pt-6 pb-12 items-center bg-gray-900 text-white lg:min-h-screen">
			<h1 className={`text-5xl font-bold text-center m-4 mb-8 ${headerStyle}`}>Sponsors</h1>
            <div class="text-base xl:mx-36">
                <br />
                <img src={GooglePNG} class="w-full mx-auto md:w-1/3 lg:w-1/5 xl:my-auto" />
                <div class="flex flex-col xl:flex-row items-center">
                    <p class="max-w-[100%] md:max-w-[90%] xl:max-w-[80%] mx-auto">
                    <AcmAtSdsuLightBg /> is proud to collaborate with Google, whose generous support empowers our members with invaluable resources, mentorship, and opportunities for growth. Through this partnership, we strive to equip students with the skills and experiences they need to succeed in the ever-evolving tech industry. We appreciate Google's commitment to education and innovation and look forward to the continued impact of this collaboration.
                    </p>
                </div> 
                {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Qualcomm-Logo.svg/2560px-Qualcomm-Logo.svg.png" class="w-full mx-auto lg:w-1/4 pt-8 pb-2 xl:my-auto" />
                <div class="flex flex-col xl:flex-row items-center">
                    <p class="max-w-[100%] xl:max-w-[80%] mx-auto">
                    <AcmAtSdsuLightBg /> is excited to partner with Qualcomm, a leader in cutting-edge technology and innovation. With Qualcomm's support, we can offer our members unique opportunities to engage with industry professionals, explore emerging technologies, and develop critical technical and professional skills. We are grateful for Qualcomm's investment in the next generation of engineers and look forward to the incredible experiences this partnership will bring.
                    </p>
                </div>    */}
                
                <br /><br />
                <div class="flex flex-col xl:flex-row items-center">
                    <p class="max-w-[100%] md:max-w-[90%] xl:max-w-[80%] mx-auto text-xl">
                        If you are interested in sponsoring <HackLogo /> or <AcmAtSdsuLightBg />, please <StyleLink to="contact" class="text-acm-blue font-bold underline">Contact Us</StyleLink> to discuss further details.
                    </p>
                </div>
            </div>
		</section>
	);
}
