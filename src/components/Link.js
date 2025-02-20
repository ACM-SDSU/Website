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

export function StyleLink({children}, to = "overview") {
	return (
		<ILink to={to} class="text-acm-blue font-bold underline">
			{children}
		</ILink>
	);
}

/*
NOTE: ILink should offset differently (less) on mobile devices.
*/