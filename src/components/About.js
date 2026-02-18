import React from "react";
import { info } from "../data/meta";
import { AcmAtSdsuLightBg } from "./Modules";

import img1 from "../images/media/big_meeting.jpg";
import img2 from "../images/media/small_meeting.JPG";
import img3 from "../images/media/welcome_event.png";
import img4 from "../images/media/lecture.jpg";

export default function About() {
	return (
		<section id="about" className="p-6 md:p-12 pb-8">
			<div className="max-w-6xl mx-auto">
				<h1 className="mainheader text-acm-light-blue">About the ACM</h1>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mt-6">
					<article className="card-surface fade-up">
						<h2 className="text-2xl font-semibold text-white mb-3">Who we are</h2>
						<p className="text-base md:text-lg text-gray-200 mb-4">
							The <span className="font-semibold text-acm-light-blue">Association for Computing Machinery (ACM)</span> is the world’s largest computing society, advancing both the science and application of computing.
						</p>

						<p className="text-base md:text-lg text-gray-200 mb-4">
							At <span className="font-semibold text-acm-light-blue">SDSU’s ACM Student Chapter</span>, we’re a community of students building technical skills, collaborating on projects, and connecting with industry.
						</p>

						<h3 className="text-lg font-medium text-white mt-4 mb-2">What we do</h3>
						<ul className="list-disc list-inside text-gray-200 space-y-2">
							<li>Hands-on workshops (ML, web, security, systems)</li>
							<li>Project collaborations and competitions</li>
							<li>Guest talks and industry networking</li>
						</ul>

						<p className="text-sm text-muted-gray mt-4">Open to all SDSU students—no experience required.</p>
					</article>

					<div className="flex flex-col gap-4">
						<div className="card-surface fade-up">
							<h3 className="text-lg font-semibold text-white mb-2">Snapshot</h3>
							<p className="text-gray-200">We host weekly workshops, socials, and regular hackathons. Join us to learn and ship projects.</p>
						</div>

						<div className="card-surface fade-up">
							<div className="w-full aspect-[4/3] overflow-hidden rounded-lg">
								<iframe
									className="w-full h-full"
									src="https://docs.google.com/presentation/d/e/2PACX-1vQyo0WO3FX3jFY9-8J95QzjzoO7hkxnZJ_ntoSopqO-TFG24K2gNv4aB98wLzv7MqF826vWw7efTBKc/pubembed?start=true&loop=true&delayms=3000"
									frameBorder="0"
									allowFullScreen
									title="ACM Presentation"
								></iframe>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
