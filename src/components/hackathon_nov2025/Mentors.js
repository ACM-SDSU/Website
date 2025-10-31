import React from "react";

function OfficerCards({ officers }) {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 justify-center items-stretch gap-2 md:gap-5 m-4">
            {officers.map((officer) => (
                <div key={officer.id} className="min-h-12 min-w-16 text-center text-gray-200
                bg-black/60 border-4 border-acm-blue
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
        name: "Jianshu Liu",
        position: "Professor of Computer Science, SDSU",
        photo: "https://jianshuliu1721.github.io/assets/img/liu-profile3.png?d058ebc5cbd3f436c54c4caef1955d7a",
    },
    {
        name: "Dominic Dabish",
        position: "Computer Scientist, Google",
        photo: "https://media.licdn.com/dms/image/v2/C4E03AQGhKmdVxnRCvQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1603056291249?e=1763596800&v=beta&t=oN-Q6jKx4AkjwpkVoJvAFQTRjkfrzYyR7qaub0C6hKM",
    },
    {
        name: "Aishwariya Chunduru",
        position: "Product Manager, Resmed",
        expertise: "Data Structures",
        photo: "https://media.licdn.com/dms/image/v2/D5603AQGgax_nL_CQLg/profile-displayphoto-shrink_800_800/B56ZXMBuAyGoAc-/0/1742884758441?e=1763596800&v=beta&t=3gsxTG4fMD62ORBiCgaw-ydfo6wgLgvaIJls9Q0eii0",
    },
    {
        name: "Uday Kiran Chilakalapalli ",
        position: "Senior Data Analyst, LPL Financial",
        photo: "https://media.licdn.com/dms/image/v2/D4E03AQHjemeaEwGLjw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718245435773?e=1763596800&v=beta&t=NGaGQZPeTVCcv2AxrRi8OVmwHdI_4jktyMVkZTmDh08",
    },
    {
        name: "Juhi Godhwani",
        position: "Electrical / Hardware Engineer, Google",
        photo: "https://media.licdn.com/dms/image/v2/D5603AQEAu0gxUpHHLQ/profile-displayphoto-scale_200_200/B56ZleIsu5J0AY-/0/1758220963176?e=2147483647&v=beta&t=elns3hFsYxgQqc6HY3xWi0feVEm_wDy7BWPcljXNNHE",
    },
    {
        name: "Isabella Messina",
        position: "Cyber Security Engineer, Viasat",
        photo: "https://media.licdn.com/dms/image/v2/D5603AQEm4Cwujwjcuw/profile-displayphoto-crop_800_800/B56ZmDSU0TJ4AM-/0/1758844244231?e=1763596800&v=beta&t=B00lkSswqy2ki-Gyh08eDsx48uUr3XTBFjqyJ7P6yv8",
    },
]

export default function Mentors() {
    return (
        <section id="mentors" class="pt-6 pb-0 items-center text-white">
            <h1 class="hackheader mb-0">Project Mentors</h1>

            <div class="w-4/5 lg:w-[55%] mx-auto text-center mt-2 mb-2 lg:mt-6 lg:mb-8">
                <p class="md:text-xl xl:text-2xl">
                    We are excited to have a diverse group of experienced mentors from various fields in technology to guide and support our participants throughout the hackathon.
                </p>
            </div>

            <OfficerCards officers={committee} />
        </section>
    );
}
