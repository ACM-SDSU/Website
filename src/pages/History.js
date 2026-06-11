import React from "react";
import Navbar from "../components/Navbar";
import OfficerCards from "../components/OfficerCards";

import { officers as officers2024 } from "../data/officers2024.js";
import { officers as officers2025 } from "../data/officers2025.js";
import { officers as officers2026 } from "../data/officers2026.js";

// Navbar

const navbar_buttons = [
    ["Overview","overview"],
    ["2026-2027","officers2026"],
    ["2025-2026","officers2025"],
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
                    <h1 className="text-4xl md:text-5xl font-bold text-acm-light-blue text-center py-4">ACM History & Past Leadership</h1>
                    <div className="mt-6 mb-8">
                        <p className="w-[90%] mx-auto text-lg">
                            ACM SDSU was founded in April 2024 by a team of passionate SDSU students who wanted to create a space where students can come together and develop the skills they need to succeed in their careers.

                            Since then, the ACM has grown tremendously, hosting a variety of events and workshops that have helped students develop their skills and connect with industry professionals. We have hosted workshops on topics such as web development, data science, and machine learning, as well as social events and hackathons.
                        </p>
                    </div>

                    <section id="officers2026" class="p-8 pb-10 bg-gray-900 text-gray-200">
                        <h1 class="text-5xl font-bold text-center m-4 mb-8 text-acm-light-blue">2026-2027 Executive Committee</h1>
                        <OfficerCards officers={officers2026} />
                    </section>

                    <br />
                    
                    <section id="officers2025" class="p-8 pb-10 bg-gray-900 text-gray-200">
                        <h1 class="text-5xl font-bold text-center m-4 mb-8 text-acm-light-blue">2025-2026 Executive Committee</h1>
                        <OfficerCards officers={officers2025} />
                    </section>

                    <br />

                    <section id="officers2024" class="p-8 pb-10 bg-gray-900 text-gray-200">
                        <h1 class="text-5xl font-bold text-center m-4 mb-8 text-acm-light-blue">2024-2025 Executive Committee</h1>
                        <OfficerCards officers={officers2024} />
                    </section>
                </section>
            </div>
        </main>
    );
}

export default History;
