import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import Account from './pages/Account';
import LegendFamily from './pages/LegendFamily';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
    return (
        <Router>
            <div>
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/account" element={<Account />} />
                <Route path="/legendfamily" element={<LegendFamily />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </Router>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
