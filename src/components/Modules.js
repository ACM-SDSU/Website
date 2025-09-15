import React from "react";
import ILink from "./Link";
import googlepng from "../images/logos/google.png";

export function AcmAtSdsu({ children }) {
    return (
        // <ILink to="overview">
        <a href="https://acm.sdsu.edu">
            <span class="acm-at-sdsu font-bold cursor-pointer">
                <span class="text-acm-light-blue">ACM</span> <span class="text-acm-red">SDSU</span>
            </span>
        </a>
        // </ILink>
    );
}

export function CtrlSdsu({ children }) {
    return (
        // <ILink to="overview">
        <a href="https://ctrl.sdsu.edu" target="_blank">
            <span class="acm-at-sdsu font-bold cursor-pointer">
                <span class="text-acm-orange">CTRL</span> <span class="text-acm-red">SDSU</span>
            </span>
        </a>
        // </ILink>
    );
}


export function AcmAtSdsuLightBg({ children }) {
    return (
        // <ILink to="overview">
        <a href="https://ctrl.sdsu.edu">
            <span class="acm-at-sdsu font-bold hover:text-yellow-500 cursor-pointer">
                <span class="text-acm-blue">ACM</span> @<span class="text-acm-red">SDSU</span>
            </span>
        </a>
        // </ILink>
    );
}

export function HackLogo({ children }) {
    return (
        // <ILink to="overview">
        <span class="acm-at-sdsu font-bold hover:text-yellow-500 cursor-pointer">
            <span class="text-acm-orange">Innovate</span><span class="text-acm-blue"> 4 </span><span class="text-acm-red">SDSU</span>
        </span>
        // </ILink>
    );
}

export function GoogleLogo({ children }) {
    return (
        <ILink to="outreach">
            <span class="google-logo font-bold cursor-pointer inline-block">
                <img src={googlepng} class="h-4 mx-1" />
            </span>
        </ILink>
    );
}