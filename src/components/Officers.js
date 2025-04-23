import React from "react";
import { officers } from "../data/officers";

export default function Officers() {
	return (
		<section id="officers" class="p-8 pb-10 bg-gray-900 text-gray-200">
			<h1 class="mainheader">Executive Committee</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center gap-4 m-4">
				{officers.map((officer) => (
					<a href={officer.url ? officer.url : `mailto:${officer.email}`} target="_blank">
						<div key={officer.id} className="min-h-12 min-w-16 text-center text-gray-200 bg-gradient-to-r from-acm-dark-blue to-acm-dark-blue via-acm-blue p-4 rounded-lg flex flex-col items-center justify-center">
							<img src={officer.photo} class="w-32 h-32 md:w-40 md:h-40 xl:w-48 xl:h-48 mb-1 rounded-xl"></img>
							<p class="text-2xl xl:text-3xl flex items-center justify-center space-x-2 font-bold">
								{officer.name}
								{/*(
									<img class="w-7 h-7 opacity-50" src="https://as.sdsu.edu/images/assets/assets-icons/email.svg" alt="Email Icon" />
									)*/}
							</p>
							<p class="text-xl xl:text-2xl">{officer.position}</p>
							<p class="text-gray-200 xl:text-lg italic">{officer.major}</p>
							{/* <p class="text-center text-gray-400">Committees: {officer.committees.join(", ")}</p> */}
						</div>
					</a>
				))}
			</div>
			<a href="history" class="text-center w-[100%] block text-lg xl:text-xl">
				Click <u>here</u> to see a list of past ACM officers.
			</a>
		</section>
	);
}
