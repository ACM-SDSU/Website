import React from "react";
import { Link, Element, animateScroll as scroll } from "react-scroll";

export function InfoChip({ children }) {
	return (
		<div class="text-gray-100 bg-gray-800 bg-opacity-90 p-4 rounded-xl flex flex-col items-center justify-start w-full lg:w-1/4">
			{children}
		</div>
	);
}

export function ChipTitle({ children }) {
	return (<p class="text-2xl font-bold mb-1">{children}</p>);
}
export function ChipContent({ children }) {
	return (<p class="text-lg">{children}</p>);
}

export function ChipButton({ children }) {
	return (
		<div class="flex items-center justify-center bg-acm-blue bg-opacity-70 py-0 px-2 mt-4 mb-1 rounded-xl space-x-2 text-2xl hover:text-acm-light-blue cursor-pointer">
			{children}
		</div>
	);
}
