import React from "react";
import { HackLogo } from "../Modules"
import { useState } from "react";

const judges = [
    {
        name: "Brij Mohan",
        position: "Vice President, LPL Financial",
        url: "",
        photo: require("../../images/hack25/judges_nov25/brij_photo.jpg"),
        description: "Brij Mohan is an accomplished technology leader with over 25 years of experience architecting enterprise-scale financial solutions. Currently Vice President - Principal Software Dev. at LPL Financial, he leads teams working extensively with AI/ML, Generative AI, Agentic AI, Data analytics, AWS cloud technologies, and API development, where his role involves evaluating innovative technical solutions, assessing their scalability and real-world impact, and mentoring development teams. He has served as a judge for technology innovation, business and leadership awards, evaluating cutting-edge solutions across diverse sectors and assessing technical merit and practical impact. He holds multiple AWS certifications including Solutions Architect Professional and Machine Learning Engineer - Associate, is a PMP, and actively contributes to IEEE as Senior Member and ACM professional communities."
    },
    {
        name: "Nadeem Bulsara",
        position: "Principal Solutions Architect, AWS",
        url: "",
        photo: require("../../images/hack25/judges_nov25/nadeem_photo.jpeg"),
        description: "Nadeem Bulsara is a Principal Solutions Architect at Amazon Web Services (AWS) specializing in Genomics and Life Sciences. He brings his 13+ years of Bioinformatics, Software Engineering, and Cloud Development skills as well as experience in research and clinical genomics and multi-omics to help Healthcare and Life Sciences organizations globally. He is motivated by the industry’s mission to enable people to have a long and healthy life."
    },
    {
        name: "Logan Wolff",
        position: "Data Engineer, LPL Financial",
        url: "",
        photo: require("../../images/hack25/judges_nov25/logan_photo.jpeg"),
        description: "Logan Wolff is a Data Engineer at LPL Financial, where he builds and maintains data pipelines and infrastructure to support data analytics and business intelligence initiatives. He has a strong background in computer science and data engineering, being a San Diego State University graduate and former campus AI Club president. Logan is passionate about leveraging data to drive business decisions and improve data-readiness."
    },
    {
        name: "Balakrishnan Srinivasan",
        position: "Firmware Engineer, Apple Inc.",
        url: "",
        photo: require("../../images/hack25/judges_nov25/balak_photo.jpg"),
        description: "Balakrishnan Srinivasan is an expert in DSP and embedded software and firmware development for wireless communication protocols with focus on physical layer. With extensive experience spanning 3G, 4G, and 5G cellular device design, development, and verification, he has contributed to leading-edge innovations at companies like Motorola Mobility, Intel, and Apple. His work has focused on pre- and post-silicon software validation across multiple generations of wireless chipsets, consistently driving improvements in power, performance, and area. Outside of work, Balakrishnan enjoys cricket, hiking and playing board games."
    },
    {
        name: "Shubham Pandey",
        position: "Senior Firmware Engineer, Qualcomm",
        url: "",
        photo: require("../../images/hack25/judges_nov25/shubham_photo.jpg"),
        description: "Shubham Pandey is a Senior Firmware Engineer at Qualcomm, with nearly a decade of experience in embedded systems, Linux/QNX kernel development, and performance optimization. Before Qualcomm, he worked at Samsung Semiconductor and Intel, contributing to core platform technologies across automotive and consumer devices. He brings deep expertise in system software design, hardware–software integration, and product innovation. Shubham is passionate about mentoring engineers, leveraging AI to enhance development efficiency, and fostering creativity through hands-on innovation challenges. Outside of work, he enjoys traveling and is an avid cinephile.",
    },
    {
        name: "Drishti Idnani",
        position: "Independent Data Scientist and Analytics Consultant",
        url: "https://drishtiidnani.com/",
        photo: require("../../images/hack25/judges_nov25/drishti_photo.jpg"),
        description: "Drishti Idnani is an independent Data Scientist and analytics consultant who helps organizations design scalable forecasting models, automation pipelines, and data-driven decision systems. She has led large-scale analytics and automation initiatives at ASUS and Intel, where her work shaped data strategy across product, operations, and forecasting domains - driving decisions at the senior leadership level. Beyond her industry experience, Drishti is deeply engaged in the hackathon and academic ecosystem. She has judged at MHacks 17 (University of Michigan), mentored at CalHacks (UC Berkeley) and the AI Futures Hackathon (Laney College), and serves on Laney College’s AI Advisory Board, where she supports efforts to make AI education more applied and accessible. She’s passionate about helping teams bridge creativity and analytics - turning early ideas into solutions that are impactful, explainable, and human-centered.",
    },
]

export default function Judges({ headerStyle }) {
    const [/* placeholder to satisfy linter if needed */] = [];

    return (function JudgesComponent() {
        const [open, setOpen] = useState(() => judges.map(() => false));

        const toggle = (i) =>
            setOpen((prev) => {
                const next = [...prev];
                next[i] = !next[i];
                return next;
            });

        const allOpen = open.every(Boolean);
        const toggleAll = () =>
            setOpen((prev) => {
                const all = prev.every(Boolean);
                return prev.map(() => !all);
            });

        return (
            <section id="judges" className="pt-6 pb-12 items-center text-white">
                <h1 className="hackheader">Industry Judges</h1>

                <div class="w-4/5 lg:w-[55%] mx-auto text-center">
                    <p class="md:text-xl xl:text-2xl">
                        Our team of talented industry judges will use their expertise to evaluate hackathon projects based on creativity, technical complexity, impact, and presentation.
                    </p>
                </div>

                <div className="flex items-center justify-between mb-4 px-4 lg:px-10">
                    <button
                        onClick={toggleAll}
                        className="px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 rounded-md text-white transition"
                    >
                        {allOpen ? "Hide all" : "Show All Bios"}
                    </button>
                </div>

                <div className="mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto px-4 lg:px-10">
                    {judges.map((judge, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col bg-black/60 rounded-xl shadow-lg border-4 border-acm-blue p-5 hover:scale-[1.02] transition-transform"
                        >
                            <div className="flex items-start space-x-4">
                                <img
                                    src={judge.photo}
                                    alt={judge.name}
                                    className="w-28 h-28 lg:w-36 lg:h-36 rounded-3xl object-cover border-4 border-blue-500 shadow-md flex-shrink-0"
                                />
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-start justify-between">
                                        <div>
                                            {judge.url ? (
                                                <a
                                                    href={judge.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-lg md:text-xl lg:text-2xl font-bold text-blue-400 hover:underline break-words"
                                                >
                                                    {judge.name}
                                                </a>
                                            ) : (
                                                <div className="text-lg md:text-xl lg:text-2xl font-bold text-blue-400 break-words">
                                                    {judge.name}
                                                </div>
                                            )}
                                            <div className="text-base md:text-lg lg:text-xl text-gray-300 mt-1">{judge.position}</div>
                                        </div>

                                        <div className="ml-4">
                                            <button
                                                onClick={() => toggle(idx)}
                                                aria-expanded={open[idx]}
                                                className="inline-block px-3 py-1 text-sm bg-blue-600 hover:bg-blue-700 rounded-md text-white transition"
                                            >
                                                {open[idx] ? "Hide Bio" : "Show Bio"}
                                            </button>
                                        </div>
                                    </div>

                                    {open[idx] && (
                                        <p className="text-gray-200 text-sm mt-3 leading-relaxed">
                                            {judge.description ||
                                                "Judge bio coming soon. Stay tuned for more information about our distinguished panel!"}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        );
    })();
}
