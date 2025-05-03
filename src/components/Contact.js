import React from "react";
import { AcmAtSdsuLightBg } from "./Modules";

export default function Contact(){
    return (
        <section id="contact" class="p-2 md:p-8 pb-8 md:pb-12 bg-gray-900 text-white">
            <h1 class="mainheader">Get Involved</h1>
            {/* <p class="text-center text-xl m-4 p-4">Come join us at our weekly chapter meeting, every Wednesday from 4:00-5:00pm in GMCS 405.<br /><br />You can also stay connected by joining our Discord server and following us on Instagram.</p> */}
            <p class="text-center text-base md:text-xl m-4 p-4">Come join us at our weekly chapter meeting, every Wednesday from 4:00-5:00pm in GMCS 405.</p>
            {/* <p class="text-center text-xl m-4 p-4">Feel free to reach out at any time via Discord, Instagram, or Email.</p> */}
            <div class="flex flex-row flex-wrap md:space-x-4 m-2 lg:m-4 justify-left xl:justify-center text-lg md:text-2xl text-center">
                <div class="p-2 md:p-4 min-w-1/6">
                    <a href="https://discord.gg/UuNuggpKYV" target="_blank" class="flex space-x-2 hover:text-acm-blue">
                        <img class="w-7 h-7 mr-3 xl:ml-0" src="https://cdn.iconscout.com/icon/free/png-256/free-discord-3691244-3073764.png?f=webp"/>
                        discord.gg/UuNuggpKYV
                    </a>
                </div>
                <div class="p-2 md:p-4 min-w-1/6">
                    <a href="https://www.instagram.com/sdsu_acm/" target="_blank" class="flex space-x-2 hover:text-acm-blue">
                        <img class="w-7 h-7 mr-3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/800px-Instagram_logo_2022.svg.png"/>
                        @sdsu_acm
                    </a>
                </div>
                <div class="p-2 md:p-4 min-w-1/6">
                    <a href="mailto:aztecs.acm@gmail.com" target="_blank" class="flex space-x-2 hover:text-acm-blue">
                        <img class="w-8 h-8 mr-3" src="https://cdn-icons-png.flaticon.com/256/281/281769.png"/>
                        aztecs.acm@gmail.com
                    </a>
                </div>
                <div class="p-2 md:p-4 min-w-1/6">
                    <a href="https://www.youtube.com/@SDSUACM/videos" target="_blank" class="flex space-x-2 hover:text-acm-blue">
                        <img class="w-10 h-10 mr-2 pb-1" src="https://www.iconpacks.net/icons/2/free-youtube-logo-icon-2431-thumb.png"/>
                        @sdsuacm
                    </a>
                </div>
            </div>
            {/* <p class="text-center text-xl m-4 p-4 italic">If you miss a meeting, you can always catch up by watching our recorded lectures and workshops on our <a href="https://www.youtube.com/@SDSUACM/videos" target="_blank" class="underline">YouTube Channel</a>.</p> */}
        </section>
    );
}
// Todo: make social media more left aligned