import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import Account from './pages/Account';
import LegendFamily from './pages/LegendFamily';
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from './components/Navbar';
import Reservations from './pages/reservations';

function App() {
    return (
        <Router>
            <Navbar /> {/* ✅ Add Navbar here to show on all pages */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/account" element={<Account />} />
                <Route path="/legendfamily" element={<LegendFamily />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/reservations" element={<Reservations />} />
            </Routes>
        </Router>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
