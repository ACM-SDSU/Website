import React from "react";

import { AcmAtSdsu } from "../Modules";
import { HackLogo } from "../Modules";

export default function Logistics({ headerStyle }) {
    return (
        <div>
            <section id="logistics" className="pt-6 pb-12 items-center text-white lg:min-h-screen">
                <h1 className="hackheader">Event Logistics</h1>
                <div className="text-left mt-4 xl:mt-8 p-2 w-full md:w-[90%] lg:w-[45%] mx-auto">
                    {/* Location */}
                    <div className="rounded-xl border-2 border-acm-yellow bg-black/60 shadow-lg p-6 mb-8">
                        <span className="block">
                            <span className="font-bold text-xl xl:text-3xl text-acm-yellow">
                                Location: SDSU Engineering Building, Room E-203
                            </span>
                            <br />
                            <span className="italic text-lg xl:text-2xl">
                                Enter through the main Engineering entrance. Signs and volunteers will guide you to E-203 on the second floor. Elevator access is available.
                            </span>
                        </span>
                    </div>

                    {/* Food */}
                    <div className="rounded-xl border border-acm-orange bg-black/40 shadow p-5 mb-6">
                        <span className="font-bold text-acm-orange text-lg xl:text-2xl">
                            Food & Drinks
                        </span>
                        <ul className="list-disc list-inside mt-2 text-base lg:text-base xl:text-xl">
                            <li className="pb-1">Breakfast: Bagels, fruit, coffee, and juice (served 9:00–10:00am)</li>
                            <li className="pb-1">Lunch: Pizza (vegetarian & meat options), salad, and drinks (served 12:30–1:30pm)</li>
                            <li className="pb-1">Snacks: Chips, granola bars, and soda available all day</li>
                            <li className="pb-1">Dinner: Burritos (vegan, vegetarian, and meat options) and drinks (served 6:30–7:30pm)</li>
                        </ul>
                    </div>

                    {/* Attendance Hours */}
                    <div className="rounded-xl border border-acm-orange bg-black/40 shadow p-5 mb-6">
                        <span className="font-bold text-acm-orange text-lg xl:text-2xl">
                            Attendance & Hours
                        </span>
                        <ul className="list-disc list-inside mt-2 text-base lg:text-base xl:text-xl">
                            <li className="pb-1">Doors open: <span className="font-bold">8:30am</span></li>
                            <li className="pb-1">Opening ceremony: <span className="font-bold">9:30am</span></li>
                            <li className="pb-1">Project work: <span className="font-bold">10:00am – 8:00pm</span></li>
                            <li className="pb-1">Demos & judging: <span className="font-bold">8:00pm – 9:00pm</span></li>
                            <li className="pb-1">Event ends: <span className="font-bold">9:15pm</span></li>
                            <li className="pb-1">You are expected to attend the opening, demo, and judging sessions. You may leave the room for breaks, but please check in with an organizer if you step out for more than 30 minutes.</li>
                        </ul>
                    </div>

                    {/* Schedule */}
                    <div className="rounded-xl border-2 border-acm-yellow bg-black/60 shadow-lg p-6 mt-10 mb-2">
                        <span className="font-bold text-2xl xl:text-3xl text-acm-yellow">
                            Event Schedule
                        </span>
                        <ul className="list-disc list-inside mt-2 text-base lg:text-base xl:text-xl">
                            <li className="pb-1"><span className="font-bold">8:30am:</span> Doors open, check-in, breakfast</li>
                            <li className="pb-1"><span className="font-bold">9:30am:</span> Opening ceremony & rules</li>
                            <li className="pb-1"><span className="font-bold">10:00am:</span> Hacking begins</li>
                            <li className="pb-1"><span className="font-bold">12:30pm:</span> Lunch served</li>
                            <li className="pb-1"><span className="font-bold">6:30pm:</span> Dinner served</li>
                            <li className="pb-1"><span className="font-bold">8:00pm:</span> Project demos & judging</li>
                            <li className="pb-1"><span className="font-bold">9:00pm:</span> Awards & closing remarks</li>
                            <li className="pb-1"><span className="font-bold">9:15pm:</span> Event ends, clean up</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="bigdata_policy" className="pt-6 pb-12 items-center text-white">
                <h1 className="hackheader">Big Data Hackathon Policy</h1>
                <div className="text-left mt-4 xl:mt-8 p-2 w-full md:w-[90%] lg:w-1/2 mx-auto">
                    <div className="rounded-xl border-2 border-acm-yellow bg-black/60 shadow-lg p-6 mb-8">
                        <span className="flex items-center">
                            <span className="font-bold text-xl xl:text-3xl text-acm-yellow text-center mx-auto w-full">
                                Competing in Both Hackathons?
                            </span>
                        </span>
                    </div>
                    <div className="rounded-xl border border-acm-orange bg-black/40 shadow p-5 mb-6">
                        <span className="font-bold text-acm-orange text-lg xl:text-2xl">
                            Policy for Dual Participants
                        </span>
                        <ul className="list-disc list-inside mt-2 text-base lg:text-base xl:text-xl">
                            <li className="pb-1">You may participate in both this hackathon and the Big Data Hackathon.</li>
                            <li className="pb-1">If you need to step out for Big Data Hackathon activities, please notify an organizer in advance.</li>
                            <li className="pb-1">You are still expected to attend the opening, demo, and judging sessions for this event.</li>
                            <li className="pb-1">Your project for each hackathon must be distinct and not submitted to both events.</li>
                            <li className="pb-1">If you have a scheduling conflict, contact staff as soon as possible so we can help coordinate.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}
