import React from "react";
import {HackLogo} from "../Modules"

const blank = "https://www.booksie.com/files/profiles/22/mr-anonymous_230x230.png?0000-00-00%2000:00:00"

const prizes = [
    {
        title: "Sony WH1000-XM5 Premium Headphones",
        photo: "https://m.media-amazon.com/images/I/51aXvjzcukL.jpg",
        value: "$300",
    },
    {
        title: "San Diego VR Experience for 4",
        photo: "https://www.sandiegovr.com/_next/image?url=%2Flogo-light.png&w=1080&q=75",
        value: "$250",
    },
    {
        title: "Amazon Gift Card",
        photo: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6545/6545175_sd.jpg",
        value: "$250",
    },
    // {
    //     title: "Anker Bluetooth Speaker",
    //     photo: "https://m.media-amazon.com/images/I/614l20nEhmL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    // },
    // {
    //     title: "Gaming Mouse and Keyboard",
    //     photo: "https://m.media-amazon.com/images/I/71AR+xtHK7L._AC_SX569_.jpg",
    // },
    // {
    //     title: "STEAM Gaming Gift Card",
    //     photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-3mrll8inNYxpTqtbHlJymURw_978a_VRRQ&s",
    // },
]

export default function Prizes({headerStyle}) {
    return (
        <section id="prizes" class="pt-6 pb-12 items-center text-white">
            <h1 class="hackheader">Prizes</h1>
            <p class="w-4/5 lg:w-2/3 mx-auto text-center md:text-xl xl:text-2xl">
            Participants who develop creative, high-impact projects, are eligible to receive the following prizes.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-3  md:w-[70%] lg:w-1/2 mx-auto justify-center gap-4 m-4">
                {prizes.map((prize) => (
                    <div key={prize.id} className="min-h-32 min-w-16 text-center text-gray-200 p-2 bg-black/50 rounded-2xl border-2 border-acm-orange flex flex-col items-center justify-center">
                        <img src={prize.photo} class="h-32 xl:h-40 w-auto mx-auto mb-1 rounded-xl bg-none"></img>
                        <p class="text-xl flex items-center justify-center space-x-2 font-bold mt-2">
                            {prize.title}
                        </p>
                        {prize.value && (
                            <p class="text-lg flex items-center justify-center space-x-2">
                                ({prize.value} value)
                            </p>
                        )}
                    </div>
                ))}
            </div>
            <p class="w-4/5 lg:w-2/3 mx-auto text-center xl:text-2xl">...and many more!</p>
        </section>
    );
}
