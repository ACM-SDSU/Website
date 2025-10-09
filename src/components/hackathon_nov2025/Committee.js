import React from "react";

function OfficerCards({officers}) {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 justify-center items-stretch gap-2 md:gap-4 m-4">
            {officers.map((officer) => (
                <a href={officer.url ? officer.url : `mailto:${officer.email}`} target="_blank">
                    <div key={officer.id} className="min-h-12 min-w-16 text-center text-gray-200
                    bg-black/60 border-2 border-acm-blue
                    p-1 md:p-4 rounded-lg flex flex-col items-center justify-center h-full"
                    >
                        <img src={officer.photo} class="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 xl:w-48 xl:h-48 mb-1 rounded-xl bg-gray-300"></img>
                        <p class="text-base md:text-xl xl:text-2xl flex items-center justify-center space-x-2 font-bold">
                            {officer.name}
                        </p>
                        <p class="text-sm md:text-lg xl:text-xl">{officer.position}</p>
                    </div>
                </a>
            ))}
        </div>
    );
}

const blank = "https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3407.jpg"

const committee = [
    {
        name: "Isabella King",
        position: "Chair",
        photo: require("../../images/officers25/bella.png"),
    },
    {
        name: "Everett Richards",
        position: "Member, Webmaster, ACM President, CTRL VP",
        photo: require("../../images/officers25/everett.png"),
    },
    {
        name: "Justin Pelak",
        position: "Member, CTRL President, AI Club President",
        photo: blank,
    },
    {
        name: "Amelia Grevin",
        position: "Member, GWC President",
        photo: blank,
    },
    {
        name: "Enzo Weiss",
        position: "Member, WCO President",
        photo: blank,
    },
    {
        name: "Caleb Dickson",
        position: "Member",
        photo: "https://media.discordapp.net/attachments/1415038021379555398/1425959451311210496/calebProf.png?ex=68e97bba&is=68e82a3a&hm=83250db65cbf5aca310a5abd121326075d3d1146be579ebdf0f613b13dc22bad&=&format=webp&quality=lossless&width=698&height=902",
    },
    {
        name: "Richie Walcher",
        position: "Member",
        photo: blank,
    },
    {
        name: "Paul Steitz",
        position: "Member",
        photo: blank,
    },
    {
        name: "Matthew Hernandez",
        position: "Member",
        photo: blank,
    },
    {
        name: "Patricia Alfonso",
        position: "Member",
        photo: blank,
    },
    {
        name: "Avishka Wickramaratna",
        position: "Member",
        photo: blank,
    },
    {
        name: "Tanish Gheewala",
        position: "Member",
        photo: require("../../images/officers25/tanish.png"),
    },
    {
        name: "Priya Manju Muralidharan",
        position: "Faculty Advisor",
        photo: require("../../images/hack25/committee/manju.jpg"),
    },
]

export default function Committee() {
    return (
        <section id="committee" class="pt-6 pb-0 items-center text-white">
            <h1 class="hackheader mb-0">Planning Committee</h1>
            <OfficerCards officers={committee}/>
        </section>
    );
}
