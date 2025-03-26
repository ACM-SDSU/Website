import React from "react";
import { prizes } from "../../data/hack2025prizes";
import {HackLogo} from "../Modules"

export default function Prizes({headerStyle}) {
    return (
        <section id="prizes" class="pt-6 pb-12 items-center bg-gray-900 text-white lg:min-h-screen">
            <h1 className={`text-5xl font-bold text-center m-4 mb-8 ${headerStyle}`}>Prizes</h1>
            <p class="w-4/5 lg:w-2/3 mx-auto text-center">Participants who develop creative, high-impact projects, are eligible to receive the following prizes.</p>
            <div className="grid grid-cols-2 lg:grid-cols-3 lg:w-2/3 mx-auto justify-center gap-4 m-4">
                {prizes.map((prize) => (
                    <div key={prize.id} className="min-h-32 min-w-16 text-center text-gray-200 bg-gradient-to-r from-acm-orange to-acm-orange via-acm-yellow p-2 rounded-2xl flex flex-col items-center justify-center">
                        <img src={prize.photo} class="h-28 w-auto mx-auto mb-1 rounded-xl"></img>
                        <p class="text-xl flex items-center justify-center space-x-2 font-bold drop-shadow-[1px_1px_2px_black]">
                            {prize.title}
                        </p>
                    </div>
                ))}
            </div>
            <p class="w-4/5 lg:w-2/3 mx-auto text-center">...and many more!</p>
        </section>
    );
}
