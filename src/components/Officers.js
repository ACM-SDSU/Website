import React from "react";
import OfficerCards from "./OfficerCards.js";
import { officers } from "../data/officers";

export default function Officers() {
	return (
		<section id="officers" class="md:p-8 pb-2 md:pb-10 bg-gray-900 text-gray-200">
			<h1 class="mainheader mb-0">Executive Committee</h1>
			<OfficerCards officers={officers}/>
			<a href="history" class="text-center w-[100%] block text-base md:text-lg italic">
				Click <u>here</u> to see a list of past ACM officers.
			</a>
		</section>
	);
}
