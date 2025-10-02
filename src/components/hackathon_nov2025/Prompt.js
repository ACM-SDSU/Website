import React from "react";

import { AcmAtSdsu } from "../Modules";
import { HackLogo } from "../Modules";

export default function Prompt({ headerStyle }) {
    return (
        <div class="leading-snug">
            <section id="prompt" className="pt-6 pb-12 items-center text-white lg:min-h-screen">
                <h1 className="hackheader">Hackathon Theme: <HackLogo /></h1>
                <div className="text-left mt-4 xl:mt-8 p-2 w-full md:w-[90%] lg:w-[45%] mx-auto">
                    <div className="rounded-xl border-2 border-acm-yellow bg-black/60 shadow-lg p-6 mb-8">
                        <span className="block">
                            <span className="font-bold text-xl xl:text-3xl text-acm-yellow">
                                PROMPT: Innovate to transform the SDSU student experience.
                            </span>
                            <br />
                            <span className="italic text-lg xl:text-2xl">
                                Choose one of the following challenge areas and design a creative, impactful solution.
                            </span>
                        </span>
                    </div>

                    {/* Campus Experience & Third Spaces */}
                    <div className="rounded-xl border border-acm-orange bg-black/40 shadow p-5 mb-6">
                        <span className="font-bold text-acm-orange text-lg xl:text-2xl">
                            1) Campus Experience & Third Spaces
                        </span>
                        <p className="italic text-base xl:text-lg mt-1">
                            How can we create safe and flexible ways for students to study, collaborate, or hang out after hours?
                        </p>
                        <ul className="list-disc list-inside mt-2 text-base lg:text-base xl:text-lg">
                            <li className="pb-1">An app to crowd-share safe study locations</li>
                            <li className="pb-1">A booking system for classrooms at night</li>
                            <li className="pb-1">A “virtual third space” for late-night collaboration</li>
                        </ul>
                    </div>

                    {/* AI & Privacy */}
                    <div className="rounded-xl border border-acm-orange bg-black/40 shadow p-5 mb-6">
                        <span className="font-bold text-acm-orange text-lg xl:text-2xl">
                            2) AI & Privacy
                        </span>
                        <p className="italic text-base xl:text-lg mt-1">
                            How can AI be used responsibly to support students without invading their privacy?
                        </p>
                        <ul className="list-disc list-inside mt-2 text-base lg:text-base xl:text-lg">
                            <li className="pb-1">A study buddy chatbot that doesn’t store personal data</li>
                            <li className="pb-1">An AI tool that helps with scheduling while keeping info local on-device</li>
                        </ul>
                    </div>

                    {/* Safety & Security */}
                    <div className="rounded-xl border border-acm-orange bg-black/40 shadow p-5 mb-6">
                        <span className="font-bold text-acm-orange text-lg xl:text-2xl">
                            3) Safety & Security
                        </span>
                        <p className="italic text-base xl:text-lg mt-1">
                            How can students feel safer moving around campus, especially at night or during emergencies?
                        </p>
                        <ul className="list-disc list-inside mt-2 text-base lg:text-base xl:text-lg">
                            <li className="pb-1">A campus safety alert app</li>
                            <li className="pb-1">A “walk-with-me” buddy system</li>
                            <li className="pb-1">A low-cost IoT panic button</li>
                        </ul>
                    </div>

                    {/* Student Success & Wellbeing */}
                    <div className="rounded-xl border border-acm-orange bg-black/40 shadow p-5 mb-6">
                        <span className="font-bold text-acm-orange text-lg xl:text-2xl">
                            4) Student Success & Wellbeing
                        </span>
                        <p className="italic text-base xl:text-lg mt-1">
                            How can we reduce stress and give students the right support at the right time?
                        </p>
                        <ul className="list-disc list-inside mt-2 text-base lg:text-base xl:text-lg">
                            <li className="pb-1">An app that connects students to tutors or study groups instantly</li>
                            <li className="pb-1">A tool that matches students with wellness resources based on their needs</li>
                        </ul>
                    </div>

                    {/* Sustainability & Community Impact */}
                    <div className="rounded-xl border border-acm-orange bg-black/40 shadow p-5 mb-6">
                        <span className="font-bold text-acm-orange text-lg xl:text-2xl">
                            5) Sustainability & Community Impact
                        </span>
                        <p className="italic text-base xl:text-lg mt-1">
                            How can students lead the way in making campus life more sustainable?
                        </p>
                        <ul className="list-disc list-inside mt-2 text-base lg:text-base xl:text-lg">
                            <li className="pb-1">An app that tracks recycling points or food waste</li>
                            <li className="pb-1">IoT sensors that monitor classroom energy use</li>
                            <li className="pb-1">Gamified challenges for green behavior</li>
                        </ul>
                    </div>

                    {/* Deliverables */}
                    <div className="rounded-xl border-2 border-acm-yellow bg-black/60 shadow-lg p-6 mt-10 mb-2">
                        <span className="font-bold text-2xl xl:text-3xl text-acm-yellow">
                            Deliverables
                        </span>
                        <p className="italic text-base xl:text-lg mt-1">
                            You only have 2 days. Keep it simple and working.
                        </p>
                        <ul className="list-disc list-inside mt-2 text-base lg:text-base xl:text-lg">
                            <li className="pb-1">
                                <span className="font-bold text-acm-yellow">Software:</span> A mobile app, web app, or dashboard with basic functionality. Doesn’t need full features, but must show a working demo.
                            </li>
                            <li className="pb-1">
                                <span className="font-bold text-acm-yellow">Hardware:</span> A low-cost prototype (Arduino, Raspberry Pi, sensors). Show at least one working feature.
                            </li>
                            <li className="pb-1">
                                <span className="font-bold text-acm-yellow">Hybrid:</span> Show how hardware and software connect (even one interaction counts).
                            </li>
                        </ul>
                        <p className="italic text-base xl:text-lg mt-3">
                            Judges care more about clarity, creativity, and your demo than polish. Show us how your project makes SDSU student life better.
                        </p>
                    </div>
                </div>
            </section>

            <section id="ai_policy" className="pt-6 pb-12 items-center text-white">
                <h1 className="hackheader">Generative AI Policy</h1>
                <div className="text-left mt-4 xl:mt-8 p-2 w-full md:w-[90%] lg:w-2/3 mx-auto">
                    <div className="rounded-xl border-2 border-acm-yellow bg-black/60 shadow-lg p-6 mb-8 w-[90%] mx-auto">
                        <span className="flex items-center">
                            <span className="font-bold text-xl xl:text-3xl text-acm-yellow text-center mx-auto w-full">
                                Use GenAI to <i>accelerate</i> your work, not <i>replace</i> it.
                            </span>
                        </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-[90%] lg:w-[90%] mx-auto">
                        <div className="rounded-xl border border-acm-orange bg-black/40 shadow p-5">
                            <span className="font-bold text-xl xl:text-2xl text-acm-orange">What’s Allowed:</span>
                            <ul className="list-disc list-inside mt-1 text-base lg:text-base xl:text-lg">
                                <li className="pb-1">Coding help (debugging, boilerplate, explanations)</li>
                                <li className="pb-1">Design mockups (logos, UI, visuals)</li>
                                <li className="pb-1">Brainstorming (ideas, starter text)</li>
                                <li className="pb-1">Documentation support (README, slides, pitch)</li>
                            </ul>
                        </div>
                        <div className="rounded-xl border border-acm-orange bg-black/40 shadow p-5">
                            <span className="font-bold text-xl xl:text-2xl text-acm-orange">What’s <u>NOT</u> Allowed:</span>
                            <ul className="list-disc list-inside mt-1 text-base lg:text-base xl:text-lg">
                                <li className="pb-1">Submitting end-to-end AI-generated projects</li>
                                <li className="pb-1">Hiding AI usage or claiming AI’s work as your own</li>
                                <li className="pb-1">Feeding real student/private data into AI tools</li>
                                <li className="pb-1">Training large AI models from scratch</li>
                            </ul>
                        </div>
                        <div className="rounded-xl border border-acm-orange bg-black/40 shadow p-5">
                            <span className="font-bold text-xl xl:text-2xl text-acm-orange">Expectations:</span>
                            <ul className="list-disc list-inside mt-1 text-base lg:text-base xl:text-lg">
                                <li className="pb-1">Judges will look at your process as much as your demo</li>
                                <li className="pb-1">Be ready to explain what you built vs. what AI generated</li>
                                <li className="pb-1">Bonus points for showing ethical and effective AI use</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
