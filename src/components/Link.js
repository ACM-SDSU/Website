import { Link, Element, animateScroll as scroll } from "react-scroll";

export default function ILink(params) {
	return (
		<Link
			activeClass="active"
			spy={true}
			smooth={true}
			offset={-40}
			duration={500}
			{...params}
		/>
	);
}

export function StyleLink({ children }, to = "overview") {
	console.log(to);
	return (
		<ILink to={to} class="text-acm-blue font-bold underline">
			{children}
		</ILink>
	);
}

export function BasicInternalLink({ children }, to = "overview") {
	return (
		<Link
			activeClass="active"
			to={to}
			spy={true}
			smooth={true}
			offset={-40}
			duration={500}
			className="mr-8 ml-1 hover:text-acm-yellow cursor-pointer drop-shadow-[0px_0px_2px_black]"
		>
			{children}
		</Link>
	)
}

/*
NOTE: ILink should offset differently (less) on mobile devices.
*/