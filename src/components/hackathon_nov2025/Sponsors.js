import React from "react";
import { info } from "../../data/meta";
import { AcmAtSdsuLightBg } from "../Modules";
import { C3PO } from "../../data/c3po";
import { GoogleLogo } from "../Modules";
import { HackLogo } from "../Modules"
import { StyleLink }  from "../Link"
import ILink from "../Link"
import GooglePNG from "../../images/logos/google.png";
import CSSC from "../../images/logos/cssc.svg";
import SponsorPacket_1 from "../../images/hack25/sponsors1.jpg"
import SponsorPacket_2 from "../../images/hack25/sponsors2.jpg"
import SponsorPacket_3 from "../../images/hack25/sponsors3.jpg"


export default function Sponsors({headerStyle}) {
	return (
		<section id="sponsors" class="pt-6 pb-12 items-center text-white">
			<h1 class="hackheader">Sponsors</h1>
            <div class="text-base xl:mx-36">
                <div class="flex flex-col xl:flex-row items-center mb-6">
                    <p class="max-w-[100%] md:max-w-[90%] xl:max-w-[80%] mx-auto text-xl text-center">
                        If you are interested in sponsoring <HackLogo />, please review our <a class="text-acm-light-blue underline" target="_blank" href="/hack25_sponsor_packet.pdf">Sponsorship Packet</a> for further details.
                    </p>
                </div>
                <div class="flex flex-col xl:flex-row items-center">
                    <img src={SponsorPacket_1} class="max-h-[65vh] mx-auto"/>
                    <img src={SponsorPacket_2} class="max-h-[65vh] mx-auto"/>
                    <img src={SponsorPacket_3} class="max-h-[65vh] mx-auto"/>
                </div>
            </div>
		</section>
	);
}
