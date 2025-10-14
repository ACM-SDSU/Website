import React from "react";

function OfficerCards({officers}) {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 justify-center items-stretch gap-2 md:gap-4 m-4">
            {officers.map((officer) => (
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
            ))}
        </div>
    );
}

const blank = "https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3407.jpg"

const committee = [
    {
        name: "Isabella King",
        position: "Committee Chair",
        photo: require("../../images/officers25/bella.png"),
    },
    {
        name: "Manju Muralidharan Priya",
        position: "Faculty Advisor",
        photo: require("../../images/hack25/committee/manju.jpg"),
    },
    {
        name: "Everett Richards",
        position: "Member, Webmaster, ACM President, CTRL VP",
        photo: require("../../images/officers25/everett.png"),
    },
    {
        name: "Justin Pelak",
        position: "Member, CTRL President, AI Club President",
        photo: "https://media.licdn.com/dms/image/v2/D5603AQHUSG5rSdE5Pg/profile-displayphoto-shrink_800_800/B56ZSgCEzGHQAg-/0/1737851686946?e=1762992000&v=beta&t=KVwsQ6h4OPr7v-eNs7kaPMKDmDzcMSEx33A41vA2c2Q",
    },
    {
        name: "Tanish Gheewala",
        position: "Member, CTRL Secretary",
        photo: require("../../images/officers25/tanish.png"),
    },
    {
        name: "Amelia Grevin",
        position: "Member, GWC President",
        photo: "https://media.licdn.com/dms/image/v2/D5603AQFIxWLKgqLoWw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1690661812589?e=1762992000&v=beta&t=H82zR8fFDcqGDuOqiH39gxdpYw0oQsYB4z2mVhSTxd8",
    },
    {
        name: "Enzo Weiss",
        position: "Member, WCO President",
        photo: require("../../images/hack25/committee/enzo.jpg"),
    },
    {
        name: "Caleb Dickson",
        position: "Member",
        photo: require("../../images/hack25/committee/caleb.png"),
    },
    {
        name: "Richie Walcher",
        position: "Member",
        photo: "https://media.licdn.com/dms/image/v2/D5603AQG7mi5bb9xDZQ/profile-displayphoto-shrink_800_800/B56ZY6GWUAGoAc-/0/1744731465337?e=1762992000&v=beta&t=TVRAvgy0GVrpF0T-E9mAClozOhaX88iXgmjx59LeNLs",
    },
    {
        name: "Paul Steitz",
        position: "Member",
        photo: require("../../images/hack25/committee/paul.jpg"),
    },
    {
        name: "Mathew Hernandez",
        position: "Member",
        photo: require("../../images/hack25/committee/mathew.jpg"),
    },
    {
        name: "Patricia Alfonso",
        position: "Member",
        photo: require("../../images/hack25/committee/patricia.jpg"),
    },
    {
        name: "Avishka Wickramaratna",
        position: "Member",
        photo: require("../../images/hack25/committee/avi.jpg"),
    },
    {
        name: "Roger Dao",
        position: "Member",
        photo: blank,
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
