import React from "react";
import Navbar from "../components/Navbar";
import Overview from "../components/hackathon_nov2025/Overview";
import Register from "../components/hackathon_nov2025/Register";
import Sponsors from "../components/hackathon_nov2025/Sponsors";
import Prompt from "../components/hackathon_nov2025/Prompt";
import Contact from "../components/hackathon_nov2025/Contact";
import Judges from "../components/hackathon_nov2025/Judges";
import FAQ from "../components/hackathon_nov2025/FAQ";
import Timeline from "../components/hackathon_nov2025/Timeline";
import Prizes from "../components/hackathon_nov2025/Prizes";

import BackgroundFX from "../components/hackathon_nov2025/BackgroundFX";  // 👈 your slideshow component
import HackBG1 from "../images/logos/hackbg1.jpeg";
import HackBG2 from "../images/logos/hackbg2.jpeg";

const hackathon_buttons = [
  ["Home", "overview"],
  ["Theme", "prompt"],
  ["Prizes", "prizes"],
  ["Timeline", "timeline"],
  ["Judges", "judges"],
  ["Sponsors", "sponsors"],
  ["FAQs", "faq"],
  ["Contact", "contact"],
];

const headerStyle = "text-white";

function Hackathon() {
  return (
    <>
      {/* Fixed fading techno background, only for Hackathon */}
      
      <BackgroundFX images={[HackBG1, HackBG2]} className="fixed inset-0 z-[0]" interval={3000} fade={2000} />

      {/* Foreground content */}
      <main className="relative z-10 text-gray-900 body-font font-ACM bg-black/20">
        <Navbar navItems={hackathon_buttons} headerStyle={headerStyle} />
        <Overview headerStyle={headerStyle} />
        {/* <Prompt headerStyle={headerStyle} /> */}
        {/* <Prizes headerStyle={headerStyle} /> */}
        {/* <Timeline headerStyle={headerStyle} /> */}
        {/* <Register headerStyle={headerStyle} /> */}
        {/* <Judges headerStyle={headerStyle} /> */}
        {/* <Sponsors headerStyle={headerStyle} /> */}
        {/* <FAQ headerStyle={headerStyle} /> */}
        <Contact headerStyle={headerStyle} />
      </main>
    </>
  );
}

export default Hackathon;
