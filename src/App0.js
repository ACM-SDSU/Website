import React from "react";
import About from "./components/About";
import Officers from "./components/Officers";
import Contact from "./components/Contact";
import Events from "./components/Events";
import Outreach from "./components/Outreach";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Overview from "./components/Overview";
import GuestSpeakers from "./components/GuestSpeakers";

function App() {
  return (
    <main className="text-gray-900 bg-gray-100 body-font font-ACM">
      <Navbar />
      <Overview />
      <About />
      <Outreach />
      <Officers />
      {/*<GuestSpeakers />*/}
      <Events />
      <Contact />
      {/*<Footer />*/}
    </main>
  );
}

export default App;
