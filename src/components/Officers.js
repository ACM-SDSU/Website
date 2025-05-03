import React from "react";
import OfficerCards from "./OfficerCards.js";
import { officers } from "../data/officers";

export default function Officers() {
	return (
		<section id="officers" class="p-8 pb-10 bg-gray-900 text-gray-200">
			<h1 class="mainheader">Executive Committee</h1>
			<OfficerCards officers={officers}/>
			<a href="history" class="text-center w-[100%] block text-lg xl:text-xl">
				Click <u>here</u> to see a list of past ACM officers.
			</a>
		</section>
	);
}
