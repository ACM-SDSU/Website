import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//import Navbar from "./components/Navbar";

import HomePage from './pages/HomePage'; // Your main index page
import Hackathon2025 from './pages/Hackathon';   // Your new subpage
import History from "./pages/History";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/hack" element={<Hackathon2025 />} />
                <Route path="/hackathon" element={<Hackathon2025 />} />
                <Route path="/innovate" element={<Hackathon2025 />} />
                <Route path="/innovate4sdsu" element={<Hackathon2025 />} />
                <Route path="/hack2025" element={<Hackathon2025 />} />
                <Route path="/history" element={<History />} />
            </Routes>
        </Router>
    );
}

export default App;