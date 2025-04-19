import React from "react";

import { Link, Element, animateScroll as scroll } from "react-scroll";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";

import ComputerChip from "../../images/logos/ComputerChip.jpg";
import HackBackground from "../../images/logos/hackathon_bg_compressed.jpg";

import { InfoChip, ChipTitle, ChipContent, ChipButton } from "../InfoChip";

import ILink from "../Link";

import { AcmAtSdsu } from "../Modules";
import { HackLogo } from "../Modules";

export default function Overview() {
	return (
		<section id="overview" class="min-h-screen bg-cover bg-center grid" style={{ backgroundImage: `url(${HackBackground})` }}>
			<div class="bg-black bg-cover bg-opacity-50 w-full h-full flex flex-col justify-center items-center py-">
				<h1 class="text-6xl lg:text-8xl text-gray-100 w-4/5 font-bold text-center mb-4 drop-shadow-[0px_0px_4px_black]">
					{/* <span class="text-2xl lg:text-4xl text-gray-300">
						Welcome to
					</span>
					<br /> */}
					<HackLogo />
				</h1>
				
				<RouterLink
					to="/"
					className="mr-8 ml-1 hover:text-acm-yellow cursor-pointer"
					>
					<h2 class="text-4xl text-gray-300 w-full font-bold text-center mb-4 drop-shadow-[0px_0px_3px_black]">
						Proudly hosted by <AcmAtSdsu />
					</h2>
				</RouterLink>

				<div class="flex flex-row flex-wrap gap-4 p-4 justify-center">
					<InfoChip bgcolor="bg-gray-200" textcolor="text-gray-900">
						<ChipTitle>About the Hackathon</ChipTitle>
						<ChipContent>
							The <HackLogo /> Hackathon invites all SDSU students to compete in teams to develop projects that benefit the SDSU community.
						</ChipContent>
						<ChipButton bgcolor="bg-acm-blue" hovercolor="acm-orange" goal="prompt">
							Learn More
						</ChipButton>
					</InfoChip>

					<InfoChip bgcolor="bg-gray-200" textcolor="text-gray-900">
						<ChipTitle>Time and Location</ChipTitle>
						<ChipContent>
							The <HackLogo /> Hackathon will take place on Saturday, April 26, 2025 from 9:00am-5:00pm at Park Boulevard, in the Conrad Prebys Aztec Student Union.
						</ChipContent>
						<ChipButton bgcolor="bg-acm-blue" hovercolor="acm-orange" goal="timeline">
								Event Timeline
						</ChipButton>
					</InfoChip>

					<InfoChip bgcolor="bg-gray-200" textcolor="text-gray-900">
						<ChipTitle>Registration Closed</ChipTitle>
						<ChipContent>
							Registration for <HackLogo /> is has closed. Due to logisitcal constraints, late registrations will not be accepted. Thank you for understanding.
						</ChipContent>
						<ChipButton bgcolor="bg-acm-blue" hovercolor="acm-orange" goal="register">
								Register Today
						</ChipButton>
					</InfoChip>
					{/*<InfoChip>
						<ChipTitle>Join the ACM Chapter</ChipTitle>
						<ChipContent>Join our <span class="text-acm-light-blue font-bold">Discord Server</span> to stay up to date with all the latest ACM news and upcoming events.</ChipContent>
						<ChipButton>
							<img class="w-8 h-8 mr-2" src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/discord-white-icon.png" />
							<a href="https://discord.gg/UuNuggpKYV" target="_blank">
								discord.gg/UuNuggpKYV
							</a>
						</ChipButton>
					</InfoChip>*/}
				</div>
			</div>
		</section>
	);
}