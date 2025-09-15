import React from "react";

import { AcmAtSdsu } from "../Modules";
import { HackLogo } from "../Modules";

export default function Prompt({headerStyle}){
    return (
        <section id="prompt" className="pt-6 pb-12 items-center text-white lg:min-h-screen">
            {/* <h1 className="text-5xl font-bold text-center m-4 mb-8">Register for <HackLogo /> Today!</h1> */}
            <h1 class="hackheader">Hackathon Theme: <HackLogo /></h1>
            <div className="text-left mt-4 xl:mt-16 p-2 w-full md:w-[90%] lg:w-4/5 xl:w-2/3 mx-auto">
                <span className="block">
                    <span className="font-bold text-xl xl:text-3xl text-acm-green">
                        PROMPT: Design a comprehensive digital solution to revolutionize student life at SDSU.
                    </span>
                    <br />
                    <span className="italic text-lg xl:text-2xl">
                        Your mission is to create a platform—whether mobile, web-based, or hybrid—that tackles one or several key challenges faced by students today. Your solution can include features such as:
                    </span>
                </span>
                <ul className="list-disc list-inside mt-4 text-base lg:text-base xl:text-xl">
                    <li className="pb-1"><span className="font-bold text-acm-green">Seamless Campus Navigation & Event Integration:</span> Offer real-time campus maps, directions, and updates on events, clubs, and academic services.</li>
                    <li className="pb-1"><span className="font-bold text-acm-green">Community Engagement & Club Connectivity:</span> Connect students with clubs, organizations, and peer groups through personalized recommendations.</li>
                    <li className="pb-1"><span className="font-bold text-acm-green">Mental Health & Wellness Support:</span> Integrate tools for stress management, mindfulness exercises, and access to on-campus counseling.</li>
                    {/* <li className="pb-1"><span className="font-bold text-acm-green">Optimized Study Space Management:</span> Enable easy reservation, review, and discovery of quiet study areas and collaborative spaces.</li> */}
                    <li className="pb-1"><span className="font-bold text-acm-green">Sustainable Campus Initiatives:</span> Promote eco-friendly practices like ride-sharing, recycling programs, and energy-saving tips.</li>
                    <li className="pb-1"><span className="font-bold text-acm-green">Enhanced Dining Experience:</span> Provide aggregated dining options, nutritional insights, and budget-friendly meal choices.</li>
                    <li className="pb-1"><span className="font-bold text-acm-green">Financial Literacy Resources:</span> Offer budgeting tools, financial advice, and access to student discounts and part-time opportunities.</li>
                    {/* <li className="pb-1"><span className="font-bold text-acm-green">Dynamic Event Discovery:</span> Curate personalized event calendars that help balance academic and social life.</li> */}
                    <li className="pb-1"><span className="font-bold text-acm-green">Campus Safety & Real-Time Alerts:</span> Create a reliable safety network with emergency alerts and direct communication with campus security.</li>
                    <li className="pb-1"><span className="font-bold text-acm-green">Diversity, Equity & Inclusion Hub:</span> Foster an inclusive environment through resources and forums that celebrate diversity and support all students.</li>
                </ul>
                <br />
                <span className="text-lg xl:text-2xl italic">
                    Embrace a user-centric approach by leveraging data, design thinking, and cutting-edge technology to craft a solution that not only addresses these issues individually but also creates a cohesive, engaging experience that makes SDSU campus life more accessible, safe, and enriching. Your challenge is to innovate, integrate, and impact the student community in meaningful ways.
                </span>
            </div>
        </section>
    );
}
