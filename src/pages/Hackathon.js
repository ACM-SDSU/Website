import React from "react";
import Navbar from "../components/Navbar";
import Overview from "../components/hackathon2025/Overview";
import Contact from "../components/hackathon2025/Contact";

const hackathon_buttons = [
    ["Overview", "overview"],
    // ["Timeline","timeline"],
    // ["Register", "register"],
    // ["Sponsors", "sponsors"],
    // ["FAQ","faq"],
    ["Contact Us","contact"],
]

// Basic info (Date/logistics)
// Timeline?
// Registration / application form
// Info about potential sponsors?
// FAQ
// Contact info

function Hackathon() {
    return (
        <main className="text-gray-900 bg-gray-100 body-font font-ACM">
            <Navbar navItems={hackathon_buttons} />
            <Overview />
            {/* <Timeline />
            <Register />
            <Sponsors />
            <FAQ /> */}
            <Contact />
        </main>
    );
}

export default Hackathon;
