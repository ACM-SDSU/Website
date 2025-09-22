import React from "react";
import { AcmAtSdsuLightBg } from "../Modules";

export default function Contact({headerStyle}){
    return (
        <section id="contact" class="pt-6 pb-12 text-white">
            <h1 class="hackheader">Contact Us</h1>
            <p class="text-center text-2xl mt-6 p-2">
                Join the ACM and CTRL Discord Servers to stay up-to-date with the Hackathon and other upcoming events.<br /><br />If you have any questions or concerns, please don't hesitate to reach out!
            </p>
            <div class="flex flex-row flex-wrap space-x-4 m-2 lg:m-2 justify-left xl:justify-center text-2xl text-center">
                <div class="p-4 min-w-1/6">
                    <a href="https://discord.gg/UuNuggpKYV" target="_blank" class="flex space-x-2 text-acm-light-blue hover:text-acm-blue">
                        <img class="w-7 h-7 mr-3 ml-4 xl:ml-0" src="https://cdn.iconscout.com/icon/free/png-256/free-discord-3691244-3073764.png?f=webp"/>
                        ACM Discord Server
                    </a>
                </div>
                <div class="p-4 min-w-1/6">
                    <a href="mailto:aztecs.acm@gmail.com" target="_blank" class="flex space-x-2 text-acm-light-blue hover:text-acm-blue">
                        <img class="w-8 h-8 mr-3" src="https://cdn-icons-png.flaticon.com/256/281/281769.png"/>
                        aztecs.acm@gmail.com
                    </a>
                </div>
                <div class="p-4 min-w-1/6">
                    <a href="https://discord.com/invite/6MTk5wcH9T" target="_blank" class="flex space-x-2 text-acm-light-blue hover:text-acm-blue">
                        <img class="w-7 h-7 mr-3 ml-4 xl:ml-0" src="https://cdn.iconscout.com/icon/free/png-256/free-discord-3691244-3073764.png?f=webp"/>
                        CTRL Discord Server
                    </a>
                </div>
            </div>
        </section>
    );
}
