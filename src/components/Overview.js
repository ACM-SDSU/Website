import React from "react";
import ComputerChip from "../images/logos/ComputerChip.jpg";
import { InfoChip, ChipTitle, ChipContent, ChipButton } from "./InfoChip";
import { AcmAtSdsu } from "./Modules";

export default function Overview() {
	return (
		<section
			id="overview"
			className="min-h-screen bg-cover bg-center grid"
			style={{ backgroundImage: `url(${ComputerChip})` }}
		>
			<div
				className="w-full h-full flex flex-col justify-center items-center py-12"
				style={{
					background:
						"linear-gradient(180deg, rgba(7,16,37,0.6), rgba(7,16,37,0.78))",
				}}
			>
				<h1 className="text-4xl md:text-6xl lg:text-7xl text-gray-100 w-11/12 md:w-3/4 font-extrabold text-center mb-6 drop-shadow-[0px_6px_18px_rgba(2,6,23,0.8)]">
					Welcome to <AcmAtSdsu />
				</h1>

				<div className="flex flex-row flex-wrap gap-4 p-2 md:p-4 justify-center w-full max-w-5xl">
					<InfoChip otherstyle="md:w-1/3 lg:w-1/4">
						<ChipTitle>About Us</ChipTitle>
						<ChipContent>
							We are the <span className="text-acm-light-blue font-bold">Association for
							Computing Machinery (ACM)</span> Student Chapter at <span className="font-bold">San Diego
							State University</span>.
						</ChipContent>
						<ChipButton goal="about">See What We Offer</ChipButton>
					</InfoChip>

					<InfoChip otherstyle="md:w-1/3 lg:w-1/4">
						<ChipTitle>Meeting Times</ChipTitle>
						<ChipContent>
							Weekly tech workshops, competitions, and socials every{' '}
							<b className="text-acm-light-blue">Monday</b> from{' '}
							<b className="text-acm-light-blue">3:30 - 5:30pm</b> in{' '}
							<a href="https://maps.app.goo.gl/tgdibpQhui853wTw5" target="_blank" rel="noreferrer" className="text-acm-light-blue underline">GMCS 405</a>.
						</ChipContent>
						<ChipButton goal="events">View Upcoming Events</ChipButton>
					</InfoChip>

					<InfoChip otherstyle="md:w-1/3 lg:w-1/4">
						<ChipTitle>Get Involved</ChipTitle>
						<ChipContent>
							Join our <a href="https://discord.gg/UuNuggpKYV" target="_blank" rel="noreferrer" className="text-acm-light-blue font-bold underline">Discord</a> and follow <a href="https://www.instagram.com/sdsu_acm/" target="_blank" rel="noreferrer" className="text-acm-light-blue font-bold underline">Instagram</a> to stay up to date.
						</ChipContent>
						<div className="flex flex-row gap-2">
							<ChipButton goal="contact">Connect With Us</ChipButton>
						</div>
					</InfoChip>
				</div>
			</div>
		</section>
	);
}
