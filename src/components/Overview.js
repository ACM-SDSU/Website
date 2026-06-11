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

				<div className="flex flex-row flex-wrap gap-4 p-2 md:p-4 justify-center w-full max-w-7xl">
					<InfoChip otherstyle="md:w-1/3 lg:w-1/4">
						<ChipTitle otherstyle="mx-auto">About Us</ChipTitle>
						<ChipContent otherstyle="mb-3">
							We are the <span className="text-acm-light-blue font-bold">Association for
							Computing Machinery (ACM)</span> Student Chapter at <span className="font-bold">San Diego
							State University</span>.
						</ChipContent>
						<ChipButton goal="about" otherstyle="mx-auto mt-auto text-xl">See What We Offer</ChipButton>
					</InfoChip>

					<InfoChip otherstyle="md:w-1/3 lg:w-1/4">
						<ChipTitle otherstyle="mx-auto">Meeting Times</ChipTitle>
						<ChipContent otherstyle="mb-3">
							Weekly tech workshops, competitions, and socials every{' '}
							<b className="text-acm-light-blue">Monday</b> from{' '}
							<b className="text-acm-light-blue">3:30 - 5:30pm</b> in{' '}
							<a href="https://maps.app.goo.gl/tgdibpQhui853wTw5" target="_blank" rel="noreferrer" className="text-acm-light-blue underline">GMCS 405</a>.
						</ChipContent>
						<ChipButton goal="events" otherstyle="mx-auto mt-auto text-xl">View Upcoming Events</ChipButton>
					</InfoChip>

					<InfoChip otherstyle="md:w-1/3 lg:w-1/4">
						<ChipTitle otherstyle="mx-auto">Get Involved</ChipTitle>
						<ChipContent otherstyle="mb-3">
							The best way to stay up-to-date is to join our <b className="text-acm-light-blue">Discord Server</b> and attend our frequent workshops, socials, and competitions!
						</ChipContent>
						{/* <div className="flex flex-row gap-2"> */}
							<ChipButton goal="https://discord.com/invite/UuNuggpKYV" otherstyle="mx-auto mt-auto text-xl">Join Our Discord</ChipButton>
							{/* <ChipButton goal="contact" otherstyle="mx-auto mt-3">Connect With Us</ChipButton> */}
						{/* </div> */}
					</InfoChip>
				</div>
			</div>
		</section>
	);
}
