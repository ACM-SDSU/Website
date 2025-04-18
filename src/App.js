import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//import Navbar from "./components/Navbar";

import HomePage from './pages/HomePage'; // Your main index page
import Hackathon from './pages/Hackathon';   // Your new subpage
import History from "./pages/History";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/hack" element={<Hackathon />} />
                <Route path="/hackathon" element={<Hackathon />} />
                <Route path="/innovate" element={<Hackathon />} />
                <Route path="/innovate4sdsu" element={<Hackathon />} />
                <Route path="/history" element={<History />} />
            </Routes>
        </Router>
    );
}

export default App;