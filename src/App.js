import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//import Navbar from "./components/Navbar";

import HomePage from './pages/HomePage'; // Your main index page
//import HackathonApr2025 from './pages/HackathonApr2025';   // Your new subpage
import Hackathon from './pages/HackathonNov2025';
import History from "./pages/History";

function App() {
    const hack_aliases = [
        "/hack",
        "/hackathon",
        "/innovate",
        "/innovate4sdsu",
        "/hack2025",
        "/ctrlhack",
    ];

    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/history" element={<History />} />
                {hack_aliases.map(path => (
                    <Route key={path} path={path} element={<Hackathon />} />
                ))}
            </Routes>
        </Router>
    );
}

export default App;