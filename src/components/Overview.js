import React from "react";
import { Link, Element, animateScroll as scroll } from "react-scroll";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import ComputerChip from "../images/logos/ComputerChip.jpg";
import { InfoChip, ChipTitle, ChipContent, ChipButton } from "./InfoChip";
import ILink from "./Link";
import { AcmAtSdsu } from "./Modules";

export default function Overview() {
	return (
		<section id="overview" class="min-h-screen bg-cover bg-center grid" style={{ backgroundImage: `url(${ComputerChip})` }}>
			<div class="bg-black bg-cover bg-opacity-50 w-full h-full flex flex-col justify-center items-center py-8">
				<h1 class="text-6xl lg:text-8xl text-gray-100 w-4/5 font-bold text-center mb-4 drop-shadow-[0px_0px_4px_black]">
				Welcome to <AcmAtSdsu />!
				</h1>
				
				{/* <RouterLink
					to="/hack"
					className="mr-8 ml-1 hover:text-acm-yellow cursor-pointer"
					>
					<h2 class="text-4xl text-acm-yellow w-full font-bold text-center mb-4 underline drop-shadow-[0px_0px_3px_black]">
						Learn about the 2025 "Innovate 4 SDSU" Hackathon
					</h2>
				</RouterLink> */}

				<div class="flex flex-row flex-wrap gap-4 p-2 md:p-4 justify-center">
					<InfoChip>
						<ChipTitle>About Us</ChipTitle>
						<ChipContent>We are the <span class="text-acm-light-blue font-bold">Association for Computing Machinery (ACM)</span> Student Chapter at <span class="NOTtext-acm-red NOTfont-bold">San Diego State University!</span>.</ChipContent>
						<ChipButton goal="about">
							See What We Offer
						</ChipButton>
					</InfoChip>

					<InfoChip>
						<ChipTitle>Meeting Times</ChipTitle>
						<ChipContent>
							We host biweekly tech workshops on specific <b class="text-acm-light-blue">
								Wednesdays
							</b>
							&nbsp;from&nbsp;
							<b class="text-acm-light-blue">
								4:00&nbsp;-&nbsp;5:00pm
							</b> in <a href="https://maps.app.goo.gl/iuyL9JJoyQMHhB6s7" target="_blank" class="text-acm-light-blue">
								<b class="underline hover:text-acm-blue">
									E-300
								</b>
							</a> (Engineering Building, Room 300)
							, in addition to social events and competitions throughout the semester.
						</ChipContent>
						<ChipButton goal="events">
							View Upcoming Events
						</ChipButton>
					</InfoChip>
					<InfoChip>
						<ChipTitle>Get Involved</ChipTitle>
						<ChipContent>Join our <a href="https://discord.gg/UuNuggpKYV" target="_blank" class="text-acm-light-blue font-bold underline">Discord Server</a> and follow us on <a href="https://www.instagram.com/sdsu_acm/" target="_blank" class="text-acm-light-blue font-bold underline">Instagram</a> to stay up to date with all the latest ACM news and upcoming events.</ChipContent>
						<ChipButton goal="contact">
							Connect With Us
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
