import React from "react";
import { Link, Element, animateScroll as scroll } from "react-scroll";

export function InfoChip({ children, bgcolor="gray-800", textcolor="gray-100" }) {
	return (
		<div className={`text-${textcolor} bg-${bgcolor} bg-opacity-90 p-4 rounded-xl flex flex-col items-center justify-start w-full lg:w-1/4`}>
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

export function ChipButton({ children, bgcolor="acm-blue", hovercolor="acm-light-blue" }) {
	return (
		<div className={`bg-${bgcolor} flex items-center justify-center bg-opacity-70 py-0 px-2 mt-4 mb-1 rounded-xl space-x-2 text-2xl hover:text-${hovercolor} cursor-pointer`}>
			{children}
		</div>
	);
}
