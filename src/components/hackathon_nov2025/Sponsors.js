import React from "react";
import { info } from "../../data/meta";
import { AcmAtSdsuLightBg } from "../Modules";
import { C3PO } from "../../data/c3po";
import { GoogleLogo } from "../Modules";
import { HackLogo } from "../Modules"
import { StyleLink } from "../Link"
import ILink from "../Link"
import GooglePNG from "../../images/logos/google.png";
import CSSC from "../../images/logos/cssc.svg";
import SponsorPacket_1 from "../../images/hack25/sponsors1.jpg"
import SponsorPacket_2 from "../../images/hack25/sponsors2.jpg"
import SponsorPacket_3 from "../../images/hack25/sponsors3.jpg"


export default function Sponsors({ headerStyle }) {
    return (
        <section id="sponsors" className="pt-6 pb-12 items-center text-white">
            <h1 className="hackheader">Sponsors</h1>
            <div className="text-base xl:mx-36">
                <div className="flex flex-col xl:flex-row items-center justify-center gap-8">
                    <div class="w-full lg:w-[65%] p-4 mb-auto">
                        <a href="https://www.lpl.com/" target="_blank" class="items-center flex flex-col">
                            <h1 class="text-xl lg:text-2xl my-2 text-center w-[80%]">We are incredibly grateful to <b>LPL Financial</b> for being a <b>Mega Supporter</b> of the <HackLogo /> Hackathon ($1,000+)</h1>
                            <img src={"https://prosperion.us/wp-content/uploads/2017/02/LPL-Financial-Logo-e1488394897806.jpg"} className="max-w-[35vw] mx-auto m-2 p-2 mr-auto" />
                        </a>
                    </div>
                    <a className="w-full lg:w-[35%] flex flex-col items-center xl:flex-col" href="/hack25_sponsor_packet.pdf" target="_blank">
                        <p className="max-w-[100%] md:max-w-[90%] xl:max-w-[80%] mx-auto text-lg text-center mb-4">
                            If you are interested in sponsoring <HackLogo />, please review our <a className="text-acm-light-blue underline" target="_blank" href="/hack25_sponsor_packet.pdf">Sponsorship Packet</a> for further details.
                        </p>
                        <img src={SponsorPacket_2} className="max-h-[65vh] mx-auto" />
                    </a>
                </div>
            </div>
        </section>
    );
}
