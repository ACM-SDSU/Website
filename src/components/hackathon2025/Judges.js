import React from "react";
import { judges } from "../../data/hack2025judges";

export default function Judges() {
    return (
        <section id="judges" class="p-8 pb-10 bg-gray-900 text-gray-200 lg:min-h-screen">
            <h1 class="text-5xl font-bold text-center m-4 mb-8 text-white">Hackathon Judges</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 lg:w-1/2 mx-auto justify-center gap-4 m-4">
                {judges.map((officer) => (
                    <a href={officer.url ? officer.url : "https://acm.sdsu.edu/hack"} target="_blank">
                        <div key={officer.id} className="min-h-12 min-w-16 text-center text-gray-200 bg-gradient-to-r from-acm-dark-blue to-acm-dark-blue via-acm-blue p-4 rounded-lg flex flex-col items-center justify-center">
                            <img src={officer.photo} class="w-32 h-32 mb-1 rounded-xl"></img>
                            <p class="text-2xl flex items-center justify-center space-x-2 font-bold">
                                {officer.name}
                                {/*(
                                    <img class="w-7 h-7 opacity-50" src="https://as.sdsu.edu/images/assets/assets-icons/email.svg" alt="Email Icon" />
                                    )*/}
                            </p>
                            <p class="text-xl">{officer.position}</p>
                            {/* <p class="text-center text-gray-400">Committees: {officer.committees.join(", ")}</p> */}
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}
