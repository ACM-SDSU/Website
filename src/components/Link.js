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

/*
NOTE: ILink should offset differently (less) on mobile devices.
*/