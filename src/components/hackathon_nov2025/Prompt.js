import React from "react";

import { AcmAtSdsu } from "../Modules";
import { HackLogo } from "../Modules";

export default function Prompt({ headerStyle }) {
    return (
        <section id="prompt" className="pt-6 pb-12 items-center text-white lg:min-h-screen">
            {/* <h1 className="text-5xl font-bold text-center m-4 mb-8">Register for <HackLogo /> Today!</h1> */}
            <h1 class="hackheader">Hackathon Theme: <HackLogo /></h1>
            <div className="text-left mt-4 xl:mt-16 p-2 w-full md:w-[90%] lg:w-4/5 xl:w-2/3 mx-auto">
                <span className="block">
                    <span className="font-bold text-xl xl:text-3xl text-purple-500">
                        PROMPT: Innovate to transform the SDSU student experience.
                    </span>
                    <br />
                    <span className="italic text-lg xl:text-2xl">
                        Choose one of the following challenge areas and design a creative, impactful solution.
                    </span>
                </span>

                {/* Campus Experience & Third Spaces */}
                <div className="mt-6">
                    <span className="font-bold text-acm-yellow text-lg xl:text-2xl">
                        Campus Experience & Third Spaces
                    </span>
                    <p className="italic text-base xl:text-lg mt-1">
                        How can we create safe and flexible ways for students to study, collaborate, or hang out after hours?
                    </p>
                    <ul className="list-disc list-inside mt-2 text-base lg:text-base xl:text-xl">
                        <li className="pb-1">An app to crowd-share safe study locations</li>
                        <li className="pb-1">A booking system for classrooms at night</li>
                        <li className="pb-1">A “virtual third space” for late-night collaboration</li>
                    </ul>
                </div>

                {/* AI & Privacy */}
                <div className="mt-6">
                    <span className="font-bold text-acm-yellow text-lg xl:text-2xl">
                        AI & Privacy
                    </span>
                    <p className="italic text-base xl:text-lg mt-1">
                        How can AI be used responsibly to support students without invading their privacy?
                    </p>
                    <ul className="list-disc list-inside mt-2 text-base lg:text-base xl:text-xl">
                        <li className="pb-1">A study buddy chatbot that doesn’t store personal data</li>
                        <li className="pb-1">An AI tool that helps with scheduling while keeping info local on-device</li>
                    </ul>
                </div>

                {/* Safety & Security */}
                <div className="mt-6">
                    <span className="font-bold text-acm-yellow text-lg xl:text-2xl">
                        Safety & Security
                    </span>
                    <p className="italic text-base xl:text-lg mt-1">
                        How can students feel safer moving around campus, especially at night or during emergencies?
                    </p>
                    <ul className="list-disc list-inside mt-2 text-base lg:text-base xl:text-xl">
                        <li className="pb-1">A campus safety alert app</li>
                        <li className="pb-1">A “walk-with-me” buddy system</li>
                        <li className="pb-1">A low-cost IoT panic button</li>
                    </ul>
                </div>

                {/* Student Success & Wellbeing */}
                <div className="mt-6">
                    <span className="font-bold text-acm-yellow text-lg xl:text-2xl">
                        Student Success & Wellbeing
                    </span>
                    <p className="italic text-base xl:text-lg mt-1">
                        How can we reduce stress and give students the right support at the right time?
                    </p>
                    <ul className="list-disc list-inside mt-2 text-base lg:text-base xl:text-xl">
                        <li className="pb-1">An app that connects students to tutors or study groups instantly</li>
                        <li className="pb-1">A tool that matches students with wellness resources based on their needs</li>
                    </ul>
                </div>

                {/* Sustainability & Community Impact */}
                <div className="mt-6">
                    <span className="font-bold text-acm-yellow text-lg xl:text-2xl">
                        Sustainability & Community Impact
                    </span>
                    <p className="italic text-base xl:text-lg mt-1">
                        How can students lead the way in making campus life more sustainable?
                    </p>
                    <ul className="list-disc list-inside mt-2 text-base lg:text-base xl:text-xl">
                        <li className="pb-1">An app that tracks recycling points or food waste</li>
                        <li className="pb-1">IoT sensors that monitor classroom energy use</li>
                        <li className="pb-1">Gamified challenges for green behavior</li>
                    </ul>
                </div>

                {/* Deliverables */}
                <div className="mt-8">
                    <span className="font-bold text-xl xl:text-2xl text-acm-yellow">
                        Deliverables
                    </span>
                    <p className="italic text-base xl:text-lg mt-1">
                        You only have 2 days. Keep it simple and working.
                    </p>
                    <ul className="list-disc list-inside mt-2 text-base lg:text-base xl:text-xl">
                        <li className="pb-1">
                            <span className="font-bold text-acm-light-blue">Software:</span> A mobile app, web app, or dashboard with basic functionality. Doesn’t need full features, but must show a working demo.
                        </li>
                        <li className="pb-1">
                            <span className="font-bold text-acm-light-blue">Hardware:</span> A low-cost prototype (Arduino, Raspberry Pi, sensors). Show at least one working feature.
                        </li>
                        <li className="pb-1">
                            <span className="font-bold text-acm-light-blue">Hybrid:</span> Show how hardware and software connect (even one interaction counts).
                        </li>
                    </ul>
                    <p className="italic text-base xl:text-lg mt-3">
                        Judges care more about clarity, creativity, and your demo than polish. Show us how your project makes SDSU student life better.
                    </p>
                </div>

                {/* AI Usage */}
                <div className="mt-8">
                    <span className="font-bold text-xl xl:text-2xl text-acm-yellow">
                        AI Usage
                    </span>
                    <p className="italic text-base xl:text-lg mt-1">
                        Use AI to accelerate your work, not replace it.
                    </p>
                    <div className="mt-2">
                        <span className="font-bold text-acm-light-blue">What’s Allowed:</span>
                        <ul className="list-disc list-inside mt-1 text-base lg:text-base xl:text-xl">
                            <li className="pb-1">Coding help (debugging, boilerplate, explanations)</li>
                            <li className="pb-1">Design mockups (logos, UI, visuals)</li>
                            <li className="pb-1">Brainstorming (ideas, starter text)</li>
                            <li className="pb-1">Documentation support (README, slides, pitch)</li>
                        </ul>
                    </div>
                    <div className="mt-4">
                        <span className="font-bold text-acm-light-blue">What’s Not Allowed:</span>
                        <ul className="list-disc list-inside mt-1 text-base lg:text-base xl:text-xl">
                            <li className="pb-1">Submitting end-to-end AI-generated projects</li>
                            <li className="pb-1">Hiding AI usage or claiming AI’s work as your own</li>
                            <li className="pb-1">Feeding real student/private data into AI tools</li>
                            <li className="pb-1">Training large AI models from scratch</li>
                        </ul>
                    </div>
                    <div className="mt-4">
                        <span className="font-bold text-acm-light-blue">Expectations:</span>
                        <ul className="list-disc list-inside mt-1 text-base lg:text-base xl:text-xl">
                            <li className="pb-1">Judges will look at your process as much as your demo</li>
                            <li className="pb-1">Be ready to explain what you built vs. what AI generated</li>
                            <li className="pb-1">Bonus points for showing ethical and effective AI use</li>
                        </ul>
                    </div>
                </div>
            </div>

        </section>
    );
}
