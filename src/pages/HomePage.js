import React from "react";
import About from "../components/About";
import Officers from "../components/Officers";
import Contact from "../components/Contact";
import Events from "../components/Events";
import PastEvents from "../components/PastEvents";
import Outreach from "../components/Outreach";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Overview from "../components/Overview";
import GuestSpeakers from "../components/GuestSpeakers";

const homepage_buttons = [
  ["About", "about"],
  ["Upcoming Events", "events"],
  ["Recent Events", "pastevents"],
  ["Officers", "officers"],
  //["Guest Speakers", "guestspeakers"],
  // ["Outreach", "outreach"],
  ["Get Involved", "contact"],
  ["Innovate4SDSU","hackathon"],
]

function App() {
  return (
    <main className="min-h-screen bg-brand-bg text-muted-gray body-font font-ACM">
      <Navbar navItems={homepage_buttons} logotype={"acm"} />
      <Overview />
      <div className="mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <About />
        </div>
        <div className="max-w-5xl mx-auto">
          <Events />
          <PastEvents />
          <Officers />
          <br />
          <Contact />
        </div>
      </div>
    </main>
  );
}

export default App;
