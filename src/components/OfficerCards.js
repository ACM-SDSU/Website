import React from "react";
import { officers as curr } from "../data/officers";

export default function OfficerCards({officers = curr}) {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 justify-center items-stretch gap-4 md:gap-6 m-4">
            {officers.map((officer) => (
                <a key={officer.id} href={officer.url ? officer.url : `mailto:${officer.email}`} target="_blank" rel="noreferrer" className="no-underline">
                    <div className="card-surface hover:translate-y-[-4px] transition-transform p-4 flex flex-col items-center text-center h-full">
                        <img src={officer.photo} alt={officer.name} className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 xl:w-44 xl:h-44 mb-3 rounded-lg bg-gray-700 object-cover" />
                        <p className="text-lg md:text-xl xl:text-2xl font-semibold text-white">{officer.name}</p>
                        <p className="text-sm md:text-base text-muted-gray">{officer.position}</p>
                        <p className="text-xs md:text-sm text-gray-300 italic mt-2">{officer.major}</p>
                    </div>
                </a>
            ))}
        </div>
    );
}