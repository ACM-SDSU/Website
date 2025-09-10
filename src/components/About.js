import React from "react";
import { info } from "../data/meta";
import { AcmAtSdsuLightBg } from "./Modules";

import img1 from "../images/media/big_meeting.jpg";
import img2 from "../images/media/small_meeting.JPG";
import img3 from "../images/media/welcome_event.png";
import img4 from "../images/media/lecture.jpg";

export default function About() {
	return (
		<section id="about" className="p-3 md:p-8 pb-0 bg-gray-900">
			<h1 className="mainheader">About the ACM</h1>
			{/*<p className="m-4 mx-auto max-w-3xl text-lg" dangerouslySetInnerHTML={{ __html: info.description }}></p>*/}
			<div className="flex flex-col xl:flex-row items-center">
				<div className="max-w-5xl mx-auto text-white text-base md:text-xl xl:text-2xl bg-gray-800 p-3">
					<p className="mb-6">
						The <span className="font-semibold text-acm-light-blue">Association for Computing Machinery (ACM)</span> is the world’s largest computing society, dedicated to advancing the science and application of computing technology.
					</p>
					<p className="mb-6">
						At <span className="font-semibold text-acm-light-blue">SDSU’s ACM Student Chapter</span>, we are a vibrant community of tech enthusiasts passionate about innovation, learning, and collaboration. Our mission is to equip students with cutting-edge skills, industry connections, and real-world experience.
					</p>
					<p className="mb-6">
						In addition to frequent <span className="font-semibold text-acm-light-blue">social events</span> and <span className="font-semibold text-acm-light-blue">competitions</span>, We host <span className="font-semibold text-acm-light-blue">biweekly workshops</span> covering a wide range of beginner-friendly tech topics, including <span className="italic">machine learning, web development, AI, cybersecurity, and software engineering.</span>
					</p>
					<p className="mb-6">
						Open to all SDSU students—regardless of major—ACM @ SDSU is your gateway to the tech industry. Join us and elevate your computing journey!
					</p>
				</div>

				{/* <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 md:grid-rows-2 items-center justify-center w-[100%] lg:max-w-[40%] xl:max-w-[33%] md:mt-3 lg:mt-0">
					<img src={img2} className="w-full md:w-full md:px-4 lg:px-2 h-auto my-2 mx-auto rounded-sm" />
					<img src={img4} className="hide w-full md:w-full px-4 lg:px-2 h-auto my-2 mx-auto rounded-sm" />
					<img src={img1} className="hide w-full md:w-full px-4 lg:px-2 h-auto m-4 mx-auto rounded-sm" />
					<img src={img3} className="hide w-full md:w-full px-4 lg:px-2 h-auto m-4 mx-auto rounded-sm" />
				</div> */}

				<div className="w-full max-w-[720px] aspect-[3/2] xl:w-[720px] xl:h-[480px]">
					<iframe
						className="w-full h-full ml-0 xl:ml-4 xl:lg:ml-6"
						src="https://docs.google.com/presentation/d/e/2PACX-1vQyo0WO3FX3jFY9-8J95QzjzoO7hkxnZJ_ntoSopqO-TFG24K2gNv4aB98wLzv7MqF826vWw7efTBKc/pubembed?start=true&loop=true&delayms=3000"
						frameBorder="0"
						allowFullScreen
						mozallowfullscreen="true"
						webkitallowfullscreen="true"
						title="ACM Presentation"
					></iframe>
				</div>
			</div>
		</section>
	);
}
