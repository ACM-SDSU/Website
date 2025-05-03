import React from "react";
import { officers as curr } from "../data/officers";

export default function OfficerCards({officers = curr}) {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 justify-center items-stretch gap-4 m-4">
            {officers.map((officer) => (
                <a href={officer.url ? officer.url : `mailto:${officer.email}`} target="_blank">
                    <div key={officer.id} className="min-h-12 min-w-16 text-center text-gray-200
                    bg-gradient-to-r from-acm-dark-blue to-acm-dark-blue via-acm-blue
                    p-4 rounded-lg flex flex-col items-center justify-center h-full"
                    >
                        <img src={officer.photo} class="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 xl:w-48 xl:h-48 mb-1 rounded-xl bg-gray-300"></img>
                        <p class="text-xl md:text-2xl xl:text-3xl flex items-center justify-center space-x-2 font-bold">
                            {officer.name}
                            {/*(
                                <img class="w-7 h-7 opacity-50" src="https://as.sdsu.edu/images/assets/assets-icons/email.svg" alt="Email Icon" />
                                )*/}
                        </p>
                        <p class="text-lg md:text-xl xl:text-2xl">{officer.position}</p>
                        <p class="text-gray-200 text-md xl:text-lg italic">{officer.major}</p>
                        {/* <p class="text-center text-gray-400">Committees: {officer.committees.join(", ")}</p> */}
                    </div>
                </a>
            ))}
        </div>
    );
}