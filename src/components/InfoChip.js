import React from "react";
import { Link, Element, animateScroll as scroll } from "react-scroll";
import ILink from "./Link";

export function InfoChip({ children, bgcolor="bg-gray-800", textcolor="text-gray-100", otherstyle="lg:w-1/4" }) {
	return (
		<div className={`${textcolor} ${bgcolor} bg-opacity-90 p-4 rounded-xl flex flex-col items-center justify-start w-full ${otherstyle}`}>
			{children}
		</div>
	);
}

export function ChipTitle({ children, otherstyle="" }) {
	return (<p className={`text-2xl font-bold mb-1 ${otherstyle}`}>{children}</p>);
}
export function ChipContent({ children }) {
	return (<p class="text-lg">{children}</p>);
}

export function ChipButton({ children, bgcolor="bg-acm-blue", hovercolor="acm-light-blue", goal="overview", otherstyle }) {
	return (
		<ILink to={goal}>
			<div className={`${bgcolor} ${otherstyle} flex items-center justify-center bg-opacity-70 py-1 px-6 mt-4 mb-1 rounded-xl space-x-2 text-xl hover:text-${hovercolor} cursor-pointer`}>
				{children}
			</div>
		</ILink>
	);
}
