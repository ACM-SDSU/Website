import React from "react";
import Navbar from "../components/Navbar";
import Officers2024 from "../components/history/Officers2024";

// Navbar

const navbar_buttons = [
    ["Overview","overview"],
    ["2024-2025","officers2024"],
    ["Back to ACM","homepage"],
];

// Highlights: Workshops hosted? Funds raised? Key events held? Other fun facts?

const headerStyle = "text-white";

function History() {
    return (
        <main className="text-gray-100 bg-gray-900 body-font font-ACM">
            <Navbar navItems={navbar_buttons} headerStyle={headerStyle} />
            <Officers2024 headerStyle={headerStyle} />
        </main>
    );
}

export default History;
