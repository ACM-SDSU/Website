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
                                Location: Montezuma Hall, Aztec Student Union
                            </span>
                            <br />
                            <span className="italic text-lg xl:text-xl">
                                Take the stairs or elevators to Montezuma Hall on the second floor of the Aztec Student Union. Park in <a target="_blank" href="https://maps.app.goo.gl/ofPNuC5knpqCbs7Z8" class="underline">Parking Lot 4</a> if you are driving to campus.
                            </span>
                        </span>
                    </div>

                    {/* Food */}
                    <div className="rounded-xl border border-acm-orange bg-black/40 shadow p-5 mb-6">
                        <span className="font-bold text-acm-orange text-lg xl:text-2xl">
                            Food & Drinks (EDIT BEFORE PUBLISHING)
                        </span>
                        <ul className="list-disc list-inside mt-2 text-base lg:text-base xl:text-xl">
                            <li className="pb-1">Breakfast: TBA</li>
                            <li className="pb-1">Lunch: TBA</li>
                            <li className="pb-1">Snacks: TBA</li>
                            <li className="pb-1">Dinner: TBA</li>
                        </ul>
                    </div>

                    {/* Schedule */}
                    <div className="rounded-xl border-2 border-acm-yellow bg-black/60 shadow-lg p-6 mt-10 mb-2">
                        <span className="font-bold text-2xl xl:text-3xl text-acm-yellow">
                            Event Schedule
                        </span>
                        <p class="text-lg font-bold text-acm-orange">Day One (Saturday, November 15)</p>
                        <ul className="list-disc list-inside mt-2 text-base lg:text-base xl:text-xl">
                            <li className="pb-1"><span className="font-bold">9:00am:</span> Doors open, check-in, breakfast</li>
                            <li className="pb-1"><span className="font-bold">9:30am:</span> Opening ceremony</li>
                            <li className="pb-1"><span className="font-bold">10:30am:</span> Team formation & ice breakers</li>
                            <li className="pb-1"><span className="font-bold">11:00am:</span> Hacking Time</li>
                            <li className="pb-1"><span className="font-bold">1:00pm:</span> Lunch served</li>
                            <li className="pb-1"><span className="font-bold">3:30pm:</span> Social Break & Kahoot Game</li>
                            <li className="pb-1"><span className="font-bold">7:00pm:</span> End of Day One</li>
                        </ul>
                        <p class="text-lg font-bold text-acm-orange mt-4">Day Two (Sunday, November 16)</p>
                        <ul className="list-disc list-inside mt-2 text-base lg:text-base xl:text-xl">
                            <li className="pb-1"><span className="font-bold">9:00am:</span> Doors open, check-in, breakfast</li>
                            <li className="pb-1"><span className="font-bold">9:30am:</span> Hacking Time</li>
                            <li className="pb-1"><span className="font-bold">11:00am:</span> Social Break & Kahoot Game</li>
                            <li className="pb-1"><span className="font-bold">1:00pm:</span> Lunch served</li>
                            <li className="pb-1"><span className="font-bold">3:30pm:</span> Move to the Theater</li>
                            <li className="pb-1"><span className="font-bold">4:00pm:</span> Project demos & judging</li>
                            <li className="pb-1"><span className="font-bold">6:30pm:</span> Awards & closing remarks</li>
                            <li className="pb-1"><span className="font-bold">7:00pm:</span> Event ends, clean up</li>
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
