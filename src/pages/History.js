import React from "react";
import Navbar from "../components/Navbar";
import Officers2024 from "../components/history/Officers2024";

// Navbar

navbar_buttons = [
    ["Home","overview"],
    ["2024","officers2024"]
];

const headerStyle = "text-white";

function History() {
    return (
        <main className="text-gray-900 bg-gray-100 body-font font-ACM">
            <Navbar navItems={navbar_buttons} headerStyle={headerStyle} />
            <Officers2024 headerStyle={headerStyle} />
        </main>
    );
}

export default Hackathon;
