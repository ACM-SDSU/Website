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
        <main className="min-h-screen bg-brand-bg text-muted-gray body-font font-ACM">
            <Navbar navItems={navbar_buttons} headerStyle={headerStyle} />
            <div className="max-w-6xl mx-auto px-4">
                <section className="mt-8 card-surface">
                    <h1 className="text-4xl md:text-5xl font-bold text-acm-light-blue text-center py-4">History & Leadership</h1>
                    <Officers2024 headerStyle={headerStyle} />
                </section>
            </div>
        </main>
    );
}

export default History;
