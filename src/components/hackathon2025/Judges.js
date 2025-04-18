import React from "react";
import { judges } from "../../data/hack2025judges";
import {HackLogo} from "../Modules"

export default function Judges({headerStyle}) {
    return (
        <section id="judges" class="pt-6 pb-12 items-center bg-gray-900 text-white lg:min-h-screen">
            <h1 className={`text-5xl font-bold text-center m-4 mb-8 ${headerStyle}`}>Project Judges</h1>
            <p class="w-4/5 lg:w-2/3 mx-auto text-center"><HackLogo /> has invited a diverse array of judges to evaluate the technical merits and potential impact of each project.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:w-2/3 mx-auto justify-center gap-4 m-4">
                {judges.map((officer) => (
                    <a href={officer.url ? officer.url : "https://acm.sdsu.edu/hack"} target="_blank">
                        <div key={officer.id} className="min-h-32 min-w-16 text-center text-gray-200 bg-gradient-to-r from-acm-dark-blue to-acm-dark-blue via-acm-blue p-2 rounded-lg flex flex-col items-center justify-center">
                            <img src={officer.photo} class="w-28 h-28 mb-1 rounded-xl"></img>
                            <p class="text-xl flex items-center justify-center space-x-2 font-bold">
                                {officer.name}
                                {/*(
                                    <img class="w-7 h-7 opacity-50" src="https://as.sdsu.edu/images/assets/assets-icons/email.svg" alt="Email Icon" />
                                    )*/}
                            </p>
                            <p class="text-lg">{officer.position}</p>
                            {/* <p class="text-center text-gray-400">Committees: {officer.committees.join(", ")}</p> */}
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}
