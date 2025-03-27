import React from "react";
// import { guests } from "../data/officers";

export default function GuestSpeakers(){
    return (
        <section id="guestspeakers"  class="pt-8 h-screen">
            <h1 class="text-4xl font-bold text-center m-4">Guest Speakers</h1>
            <div class="flex flex-row space-x-4 p-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pl-8 pr-8 justify-items-center">
                    {/* {guests.map((officer) => (
                        <div key={officer.id} className="text-gray-200 bg-gradient-to-r from-gray-700 to-gray-700 via-gray-500 p-4 rounded-lg flex flex-col items-center justify-center">
                            <img src={officer.photo} class="w-32 h-32 mb-1 rounded-2xl"></img>
                            <a href={"mailto:" + officer.email} class="text-2xl flex items-center justify-center space-x-2 font-bold">{officer.name} (
                                <img class="w-7 h-7 opacity-50" src="https://as.sdsu.edu/images/assets/assets-icons/email.svg" alt="Email Icon"></img>
                                )
                            </a>
                            <p class="text-2xl">{officer.status}</p>
                            <p class="text-gray-200"><span class="font-bold underline">Expertise:</span> {officer.expertise}</p>
                            <p class="text-gray-200"><span class="font-bold underline">Known For:</span> {officer.knownfor}</p>
                        </div>
                    ))} */}
                </div>
            </div>
        </section>
    );
}