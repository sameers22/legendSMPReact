import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="nav-container">
                {/* Logo */}
                <Link to="/" className="logo">LegendCookHouse</Link>

                {/* Menu Button for Mobile */}
                <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
                    ☰
                </button>

                {/* Menu Links */}
                <ul className={menuOpen ? "nav-links open" : "nav-links"}>
                    <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
                    <li><Link to="/menu" onClick={() => setMenuOpen(false)}>Menu</Link></li>
                    <li><Link to="/reservations" onClick={() => setMenuOpen(false)}>Reservations</Link></li>
                    <li><Link to="/book-event" onClick={() => setMenuOpen(false)}>Book Even</Link></li>
                    <li><Link to="/legendfamily" onClick={() => setMenuOpen(false)}>Legend Family</Link></li> {/* ✅ Added Legend Family */}
                    <li><Link to="/account" onClick={() => setMenuOpen(false)}>Account</Link></li>
                </ul>
            </div>

            <style jsx>{`
                .navbar {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    background: white;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    padding: 10px 0;
                    z-index: 1000;
                }
                .nav-container {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 5px;
                    width: 100%;
                }
                .logo {
                    font-size: 1.8rem;
                    font-weight: bold;
                    text-decoration: none;
                    color: #d35400;
                }
                .menu-button {
                    display: none;
                    font-size: 2rem;
                    background: none;
                    border: none;
                    cursor: pointer;
                    color: #d35400;
                }
                .nav-links {
                    list-style: none;
                    display: flex;
                    gap: 20px;
                    margin: 0;
                    padding: 0;
                }
                .nav-links li {
                    transition: all 0.3s ease;
                }
                .nav-links li:hover {
                    transform: scale(1.1);
                }
                .nav-links a {
                    text-decoration: none;
                    font-size: 1rem;
                    font-weight: 500;
                    color: #2c3e50;
                    transition: color 0.3s ease;
                    white-space: nowrap;
                }
                .nav-links a:hover {
                    color: #d35400;
                }
                @media (max-width: 900px) {
                    .nav-container {
                        padding: 0 20px;
                    }
                    .menu-button {
                        display: block;
                    }
                    .nav-links {
                        display: none;
                        flex-direction: column;
                        position: absolute;
                        top: 60px;
                        left: 0;
                        width: 100%;
                        background: white;
                        padding: 20px;
                        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
                    }
                    .nav-links.open {
                        display: flex;
                    }
                }
            `}</style>
        </nav>
    );
};

export default Navbar;
