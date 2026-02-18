import React from "react";
import ILink from "./Link";

export function InfoChip({ children, bgcolor = 'bg-black/50', textcolor = 'text-gray-100', otherstyle = 'lg:w-1/4' }) {
	// Default to a slightly transparent black with subtle border so text pops over background images
	const surface = `${bgcolor} border border-white/6 p-4 rounded-2xl flex flex-col items-start justify-start w-full ${otherstyle}`;
	return (
		<div className={`${textcolor} ${surface}`}>
			{children}
		</div>
	);
}

export function ChipTitle({ children, otherstyle = '' }) {
	return <p className={`text-xl md:text-2xl font-semibold mb-1 ${otherstyle}`}>{children}</p>;
}

export function ChipContent({ children }) {
	return <p className="text-sm md:text-base leading-relaxed">{children}</p>;
}

export function ChipButton({ children, variant = 'primary', goal = 'overview', otherstyle = '' }) {
	const base = 'inline-flex items-center justify-center py-2 px-5 rounded-xl text-sm font-medium transition';
	const styles = variant === 'primary' ? `${base} bg-acm-blue text-white hover:bg-acm-light-blue` : `${base} bg-white/6 text-white`;

	if (typeof goal === 'string' && goal.startsWith('http')) {
		return (
			<a href={goal} target="_blank" rel="noopener noreferrer" className={`${styles} ${otherstyle}`}>
				{children}
			</a>
		);
	}

	return (
		<ILink to={goal} className={`${styles} ${otherstyle}`}>
			{children}
		</ILink>
	);
}
