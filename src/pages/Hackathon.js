import React from "react";
import Navbar from "../components/Navbar";
import About from "../components/hackathon2025/About";
//import Timeline from "../components/hackathon2025/Timeline";
//import Register from "../components/hackathon2025/Register";

const hackathon_buttons = [
    ["Getting Started", "about"],
    //["Timeline","timeline"]
    //["Register", "register"],
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
            <About />
        </main>
    );
}

export default Hackathon;
