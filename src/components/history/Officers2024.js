import React from "react";
import OfficerCards from "../OfficerCards.js";
import { officers } from "../../data/officers2024";

export default function Officers() {
    return (
        <section id="officers2024" class="p-8 pb-10 bg-gray-900 text-gray-200">
            <h1 class="text-5xl font-bold text-center m-4 mb-8 text-acm-light-blue">2024-2025 Executive Committee</h1>
            <OfficerCards officers={officers} />
        </section>
    );
}
