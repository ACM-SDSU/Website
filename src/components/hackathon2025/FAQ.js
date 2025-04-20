import React from "react";

import { AcmAtSdsu } from "../Modules";
import { HackLogo } from "../Modules";

import { faq } from "../../data/hack_faq";

export default function FAQ({headerStyle}){
    return (
        <section id="faq" className="pt-6 pb-12 items-center bg-gray-900 text-white">
            {/* <h1 className="text-5xl font-bold text-center m-4 mb-8">Register for <HackLogo /> Today!</h1> */}
            <h1 class="hackheader">Frequently Asked Questions (FAQ)</h1>
            <div className="text-left mt-6 p-2 w-full md:w-[90%] lg:w-3/5 mx-auto">
                {faq.map((QA) => (
                    <div class="mb-2 lg:mb-6">
                        <h2 class="font-bold italic text-acm-orange text-lg xl:text-2xl">{QA.question}</h2>
                        <p class="text-base xl:text-xl">{QA.answer}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
