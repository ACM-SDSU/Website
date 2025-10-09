import React from "react";
import { HackLogo } from "../Modules";
import SponsorPacket_2 from "../../images/hack25/sponsors2.jpg";

// Group sponsors by level
const sponsorLevels = [
    {
        level: "Mega Supporters",
        amount: "$1,000+",
        sponsors: [
            {
                name: "LPL Financial",
                logo: "https://prosperion.us/wp-content/uploads/2017/02/LPL-Financial-Logo-e1488394897806.jpg",
                url: "https://www.lpl.com/"
            },
            {
                name: "SDSU Artificial Intelligence (AI) Club",
                logo: require("../../images/hack25/aiclub_banner.jpg"),
                url: "https://aiclub.sdsu.edu/"
            },
            {
                name: "SDSU Association for Computing Machinery (ACM)",
                logo: require("../../images/hack25/acm_banner.jpg"),
                url: "https://acm.sdsu.edu/"
            },
        ]
    },
    {
        level: "Byte Supporters",
        amount: "$500+",
        sponsors: [
            {
                name: "Sony Electronics",
                logo: require("../../images/hack25/Sony_Logo_K_Nrule-black.jpg"),
                url: "https://www.sony.com/"
            },
        ]
    },
    {
        level: "Bit Supporters",
        amount: "$250+",
        sponsors: [
            {
                name: "SDSU Girls Who Code",
                logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQic3yRLq7DnSa78uICVXLu2Mf5r3NGOgR7A&s",
                url: "https://www.instagram.com/sdsu.gwc/?hl=en"
            },
            {
                name: "San Diego VR - Escape Reality",
                logo: "https://www.sandiegovr.com/_next/image?url=%2Flogo-light.png&w=1080&q=75",
                url: "https://www.sandiegovr.com/",
            }
        ]
    }
];

export default function Sponsors({ headerStyle }) {
    // Define logo size by sponsor level
    const getLogoClass = (levelName) => {
        switch (levelName) {
            case "Mega Supporters":
                return "max-w-[400px] max-h-[160px]";
            case "Bit Supporters":
                return "max-w-[250px] max-h-[125px]";
            default:
                return "max-w-[300px] max-h-[140px]";
        }
    };

    return (
        <section id="sponsors" className="pt-6 pb-0 lg:pb-4 items-center text-white">
            <h1 className="hackheader">Sponsors</h1>
            <div className="text-base xl:mx-36">
                <div className="flex flex-col xl:flex-row items-center justify-center gap-8">
                    <div className="w-full lg:w-[80%] p-4 mb-auto">
                        {sponsorLevels.map((level, idx) => (
                            <div key={level.level} className="lg:mb-2">
                                <h2 className="text-2xl font-bold text-yellow-300 mb-2 lg:mb-5 text-center">
                                    {level.level} <span className="text-white text-lg">({level.amount})</span>
                                </h2>
                                <div className="flex flex-wrap justify-center gap-x-8">
                                    {level.sponsors.map((sponsor) => (
                                        <a
                                            key={sponsor.name}
                                            href={sponsor.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex flex-col items-center mb-4"
                                        >
                                            <img
                                                src={sponsor.logo}
                                                alt={sponsor.name + " logo"}
                                                className={`${getLogoClass(level.level)} object-contain mb-2 rounded-lg border-2 border-acm-orange bg-black p-1`}
                                            />
                                            <span className="text-lg text-center">{sponsor.name}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* <a className="w-full lg:w-[35%] flex flex-col items-center xl:flex-col hidden lg:block" href="/hack25_sponsor_packet.pdf" target="_blank" rel="noopener noreferrer">
                        <img src={SponsorPacket_2} className="max-h-[60vh] mx-auto rounded-lg border-2 border-acm-orange" alt="Sponsorship Packet" />
                        <p className="max-w-[100%] md:max-w-[90%] xl:max-w-[80%] mx-auto text-base text-center mt-4">
                            If you are interested in sponsoring <HackLogo />, please review our <a className="text-acm-light-blue underline" target="_blank" rel="noopener noreferrer" href="/hack25_sponsor_packet.pdf">Sponsorship Packet</a> for further details.
                        </p>
                    </a> */}
                </div>
            </div>
            <p className="max-w-[100%] md:max-w-[90%] xl:max-w-[80%] mx-auto text-base text-center mt-0 text-base md:text-xl">
                If you are interested in sponsoring <HackLogo />, please review our <a className="text-acm-light-blue underline" target="_blank" rel="noopener noreferrer" href="/hack25_sponsor_packet.pdf">Sponsorship Packet</a> for further details.
            </p>
        </section>
    );
}
