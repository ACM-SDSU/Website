import React from "react";
import { info } from "../data/meta";
import { AcmAtSdsuLightBg } from "./Modules";

import img1 from "../images/media/big_meeting.jpg";
import img2 from "../images/media/small_meeting.JPG";
import img3 from "../images/media/welcome_event.png";
import img4 from "../images/media/lecture.jpg";

export default function About() {
	return (
		<section id="about" class="p-8 pb-10 bg-gray-900">
			<h1 class="text-5xl font-bold text-acm-light-blue text-center m-4 mb-8">Welcome to ACM @ SDSU</h1>
			{/*<p class="m-4 mx-auto max-w-3xl text-lg" dangerouslySetInnerHTML={{ __html: info.description }}></p>*/}
			<div class="flex flex-col xl:flex-row items-center">
				<div class="flex flex-col items-center w-[100%] xl:max-w-[25%]">
					<img src={img2} class="h-48 w-64 my-2 lg:m-4 rounded-lg" />
					<img src={img4} class="h-48 w-64 my-2 lg:m-4 rounded-lg" />
				</div>
				<div className="max-w-4xl mx-auto text-white">
					<p className="text-xl mb-6">
					The <span className="font-semibold text-acm-light-blue">Association for Computing Machinery (ACM)</span> is the world’s largest computing society, dedicated to advancing the science and application of computing technology.
					</p>
					<p className="text-xl mb-6">
					At <span className="font-semibold text-acm-light-blue">SDSU’s ACM Student Chapter</span>, we are a vibrant community of tech enthusiasts passionate about innovation, learning, and collaboration. Our mission is to equip students with cutting-edge skills, industry connections, and real-world experience.
					</p>
					<p className="text-xl mb-6">
					We host <span className="font-semibold text-acm-light-blue">weekly workshops</span>, guest lectures, and networking events covering topics like <span className="italic">machine learning, web development, AI, cybersecurity, and software engineering.</span>
					</p>
					<p className="text-xl mb-6">
					Open to all SDSU students—regardless of major—ACM @ SDSU is your gateway to the tech industry. Join us and elevate your computing journey!
					</p>
				</div>
				{/* <p class="m-4 mx-auto max-w-[100%] xl:max-w-[50%] text-lg xl:text-md">
				Welcome to the Association for Computing Machinery (ACM) Student Chapter at San Diego State University!

				<br /><br />

				The Association for Computing Machinery (ACM), founded in 1947, is an international scientific and educational organization
				dedicated to advancing the art, science, engineering, and application of information technology, serving both professional
				and public interests by fostering the open interchange of information and by promoting the highest professional and ethical standards.

				<br /><br />

				The <AcmAtSdsuLightBg /> is a group of SDSU students who are
				passionate about computing and technology. We are dedicated to providing our members with opportunities to learn about
				the latest technologies, network with professionals, and develop their skills.
				We host weekly workshops and lectures on a variety of topics, including machine learning, web development, and version control systems (Git/GitHub).

				<br /><br />

				The <AcmAtSdsuLightBg /> is open to all students at SDSU, regardless of major.
				</p> */}
				<div class="flex flex-col items-center w-[100%] xl:max-w-[25%]">
					<img src={img1} class="h-48 w-64 m-4 rounded-lg" />
					<img src={img3} class="h-48 w-64 m-4 rounded-lg" />
				</div>
			</div>
		</section>
	);
}
