import React from "react";
import Navbar from "../components/Navbar";
import Overview from "../components/hackathon2025/Overview";
import Register from "../components/hackathon2025/Register"
import Sponsors from "../components/hackathon2025/Sponsors";
import Prompt from "../components/hackathon2025/Prompt";
import Contact from "../components/hackathon2025/Contact";
import Judges from "../components/hackathon2025/Judges";
import FAQ from "../components/hackathon2025/FAQ";
import Timeline from "../components/hackathon2025/Timeline";

const hackathon_buttons = [
    ["Home", "overview"],
    // ["Timeline","timeline"],
    ["Prompt", "prompt"],
    ["Timeline", "timeline"],
    ["Register", "register"],
    ["Judges", "judges"],
    ["Sponsors", "sponsors"],
    ["FAQs","faq"],
    // ["FAQ","faq"],
    ["Contact","contact"],
    ["Back to ACM","homepage"]
];

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
            <Prompt />
            <Timeline />
            <Register />
            <Judges />
            <Sponsors />
            <FAQ />
            {/* <Timeline />
            <Register />
            <Sponsors />
            <FAQ /> */}
            <Contact />
        </main>
    );
}

export default Hackathon;
