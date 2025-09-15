import React from "react";
import { AcmAtSdsuLightBg } from "../Modules";

export default function Contact({headerStyle}){
    return (
        <section id="contact" class="pt-6 pb-12 text-white">
            <h1 class="hackheader">Contact Us</h1>
            <p class="text-center text-2xl mt-6 p-2">
                If you have any questions or concerns, please don't hesitate to reach out!
            </p>
            <p class="text-center text-xl xl:text-2xl mt-4 p-0">
                The best way to contact us is by <b>Email</b> and <b>Discord</b>:
            </p>
            <div class="flex flex-row flex-wrap space-x-4 m-2 lg:m-2 justify-left xl:justify-center text-2xl text-center">
                <div class="p-4 min-w-1/6">
                    <a href="mailto:aztecs.acm@gmail.com" target="_blank" class="flex space-x-2 text-acm-light-blue hover:text-acm-blue">
                        <img class="w-8 h-8 mr-3" src="https://cdn-icons-png.flaticon.com/256/281/281769.png"/>
                        aztecs.acm@gmail.com
                    </a>
                </div>
                <div class="p-4 min-w-1/6">
                    <a href="https://discord.gg/UuNuggpKYV" target="_blank" class="flex space-x-2 text-acm-light-blue hover:text-acm-blue">
                        <img class="w-7 h-7 mr-3 ml-4 xl:ml-0" src="https://cdn.iconscout.com/icon/free/png-256/free-discord-3691244-3073764.png?f=webp"/>
                        discord.gg/UuNuggpKYV
                    </a>
                </div>
            </div>
            <p class="text-center text-xl xl:text-2xl mt-4 p-0">
                You can also follow us on <b>Instagram</b> and <b>YouTube</b> for further updates and information:
            </p>
            {/* <p class="text-center text-xl m-4 p-4">Feel free to reach out at any time via Discord, Instagram, or Email.</p> */}
            <div class="flex flex-row flex-wrap space-x-4 m-2 lg:m-2 justify-left xl:justify-center text-2xl text-center">
                <div class="p-4 min-w-1/6">
                    <a href="https://www.instagram.com/sdsu_acm/" target="_blank" class="flex space-x-2 text-acm-light-blue hover:text-acm-blue">
                        <img class="w-7 h-7 mr-3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/800px-Instagram_logo_2022.svg.png"/>
                        @sdsu_acm
                    </a>
                </div>
                <div class="p-4 min-w-1/6">
                    <a href="https://www.youtube.com/@SDSUACM/videos" target="_blank" class="flex space-x-2 text-acm-light-blue hover:text-acm-blue">
                        <img class="w-10 h-10 mr-3 pb-1" src="https://www.iconpacks.net/icons/2/free-youtube-logo-icon-2431-thumb.png"/>
                        @sdsuacm
                    </a>
                </div>
            </div>
        </section>
    );
}
