import React from "react";
import {HackLogo} from "../Modules"

const judges = [
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
        photo: "", //require("../../images/hack25/judges_nov25/logan_photo.jpeg"),
        description: "Logan Wolff is a Data Engineer at LPL Financial, where he builds and maintains data pipelines and infrastructure to support data analytics and business intelligence initiatives. He has a strong background in computer science and data engineering, with experience in various programming languages and technologies. Logan is passionate about leveraging data to drive business decisions and improve processes."
    },
]

export default function Judges({headerStyle}) {
    return (
        <section id="judges" class="pt-6 pb-12 items-center text-white">
            <h1 class="hackheader">Project Judges</h1>
            <p class="w-4/5 lg:w-2/3 mx-auto text-center xl:text-xl"><HackLogo /> has invited a diverse array of judges to evaluate the technical merits and potential impact of each project.<br />More judges will be announced in the coming weeks!</p>
            <div className="mt-10 space-y-8 max-w-2xl mx-auto">
                {judges.map((judge, idx) => (
                    <div
                        key={idx}
                        className="flex items-start bg-gray-900 bg-opacity-70 rounded-lg shadow-lg p-5 hover:scale-[1.02] transition-transform"
                    >
                        <img
                            src={judge.photo}
                            alt={judge.name}
                            className="w-20 h-20 rounded-full object-cover border-4 border-blue-500 shadow-md mr-6"
                        />
                        <div>
                            <a
                                href={judge.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xl font-bold text-blue-400 hover:underline"
                            >
                                {judge.name}
                            </a>
                            <div className="text-sm text-gray-300 mb-2">{judge.position}</div>
                            <p className="text-gray-200">
                                {judge.description ||
                                    "Judge bio coming soon. Stay tuned for more information about our distinguished panel!"}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
