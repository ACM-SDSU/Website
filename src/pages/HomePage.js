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
  // ["Hackathon 2025","hackathon"],
]

function App() {
  return (
    <main className="text-gray-900 bg-gray-900 body-font font-ACM">
      <Navbar navItems={homepage_buttons}/>
      <Overview />
      <About />
      <Events />
      <PastEvents />
      <Officers />
      {/* <Outreach /> */}
      {/*<GuestSpeakers />*/}
      <Contact />
      {/*<Footer />*/}
    </main>
  );
}

export default App;
