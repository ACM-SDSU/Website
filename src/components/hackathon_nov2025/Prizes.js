import React from "react";
import { HackLogo } from "../Modules"

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
        title: "Apple Watch",
        photo: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYG03ref_FV98_VW_34FR+watch-case-44-aluminum-midnight-nc-se3_VW_34FR+watch-face-44-aluminum-midnight-se3_VW_34FR?wid=752&hei=720&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=OUh6OFdFVEJxVkF6SUo5TWxpTE50MG5TeWJ6QW43NUFnQ2V4cmRFc1VnWWxvMTNVeXVWaTk0Ui9PSEVKVVU0d1lhaWUxTWU2aU04eE1hTy9TdWx3bWRGNnlaeXQ4NGFKQTAzc0NGeHR2aVovaXdUUWpjcUxCU0VQMFk3TFQ4aVV3MWtUbEY3SEFHcklpYWRuOHA5UEEveDMxaWg4TFhITTVrUW41Z084dENpYmZuSTdFUnErS0g3SWYxazQrNDdyRzE3K0tORmZaUy9vOVdqTEp2dmJNMlpHNW80UjJWZzYxTVdqVTNBWWxkVHoxUSt3MXdXOU45RlVNNm9vaUhPUw",
        value: "$250",
    },
    {
        title: "DJI Neo Drone",
        photo: "https://macstarcamera.com/wp-content/uploads/2024/09/1725526207_IMG_2316075.jpg",
        value: "$200",
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

export default function Prizes({ headerStyle }) {
    return (
        <section id="prizes" class="pt-6 pb-12 items-center text-white">
            <h1 class="hackheader">Prizes</h1>
            <div class="w-4/5 lg:w-2/3 mx-auto text-center">
                <p class="md:text-xl xl:text-2xl">
                    Participants who develop innovative, creative, high-impact projects, will have the chance to win exciting prizes!
                </p>
                <p class="md:text-lg xl:text-xl mt-2 italic">
                    Participants in the top three teams will get to choose from a pool of 12 prizes, including but not limited to those below.
                </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4  md:w-[70%] lg:w-[58%] mx-auto justify-center gap-4 m-4 lg:my-12">
                {prizes.map((prize) => (
                    <div key={prize.id} className="min-h-32 min-w-16 text-center text-gray-200 p-2 bg-black/50 rounded-2xl border-2 border-acm-orange flex flex-col items-center justify-center">
                        <img src={prize.photo} class="h-32 xl:h-40 w-auto mx-auto mb-1 rounded-xl bg-none"></img>
                        <p class="text-xl flex items-center justify-center space-x-2 font-bold mt-2">
                            {prize.title}
                        </p>
                        {/* {prize.value && (
                            <p class="text-lg flex items-center justify-center space-x-2">
                                ({prize.value} value)
                            </p>
                        )} */}
                    </div>
                ))}
            </div>
            <p class="w-4/5 lg:w-2/3 mx-auto text-center xl:text-2xl">There will also be opportunities for additional prizes and giveaways throughout the event!</p>
        </section>
    );
}
