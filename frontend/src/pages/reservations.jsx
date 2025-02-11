import React, { useState } from 'react';
import backgroundImg from '../assets/reservation-background.png';
import waiterImg from '../assets/waiter-cartoon.jpeg'; // ✅ Waiter Image

const Reservations = () => {
    const [reservation, setReservation] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: 1,
        specialRequest: ''
    });

    const [greeting, setGreeting] = useState('Hello, welcome to Legend Cookhouse!');

    const handleChange = (e) => {
        setReservation({ ...reservation, [e.target.name]: e.target.value });

        // ✅ Extract First Name only
    if (e.target.name === "name") {
        const firstName = e.target.value.split(" ")[0]; // Takes only the first word
        setGreeting(firstName ? `Hello, ${firstName}!` : "Hello, welcome to Legend Cookhouse!");
    }
    
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Reservation submitted for ${reservation.name} on ${reservation.date} at ${reservation.time}`);
    };

    return (
        <div className="reservation-container">
            <div className="background-overlay"></div>
            <div className="reservation-page">
                
                {/* ✅ Waiter Section with Thought Bubble */}
                <div className="waiter-section">
                    <div className="thought-bubble">
                        <p>{greeting}</p>
                    </div>
                    <img src={waiterImg} alt="Waiter" className="waiter-img" />
                </div>

                <h1>Reserve a Table</h1>
                <p>Enjoy an exclusive dining experience at Legend Cookhouse.</p>

                <form className="reservation-form" onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Full Name" required value={reservation.name} onChange={handleChange} />
                    <input type="email" name="email" placeholder="Email Address" required value={reservation.email} onChange={handleChange} />
                    <input type="tel" name="phone" placeholder="Phone Number" required value={reservation.phone} onChange={handleChange} />
                    <input type="date" name="date" required value={reservation.date} onChange={handleChange} />
                    <input type="time" name="time" required value={reservation.time} onChange={handleChange} />
                    <select name="guests" required value={reservation.guests} onChange={handleChange}>
                        {[...Array(10).keys()].map(num => <option key={num + 1} value={num + 1}>{num + 1} Guest{num > 0 ? 's' : ''}</option>)}
                    </select>
                    <textarea name="specialRequest" placeholder="Special Requests (optional)" value={reservation.specialRequest} onChange={handleChange} />
                    <button type="submit">Submit Reservation</button>
                </form>
            </div>

            <style jsx>{`
                .reservation-container {
                    position: relative;
                    height: 100vh;
                    background: url(${backgroundImg}) no-repeat center center/cover;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .background-overlay {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.5);
                    backdrop-filter: blur(8px);
                    z-index: 1;
                }
                .reservation-page {
                    position: relative;
                    z-index: 2;
                    text-align: center;
                    color: white;
                    max-width: 600px;
                }
                .waiter-section {
                    position: absolute;
                    right: -550px; /* ✅ Move the waiter slightly outside the reservation container */
                    top: 60%;
                    transform: translateY(-50%);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
                .waiter-img {
                    height: 480px;
                    animation: float 3s ease-in-out infinite;
                }
                .thought-bubble {
                    position: absolute;
                    top: -80px;
                    right: 50%;
                    transform: translateX(50%);
                    width: 200px;
                    background: white;
                    padding: 10px;
                    border-radius: 10px;
                    text-align: center;
                    font-size: 1rem;
                    font-weight: bold;
                    color: black;
                    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
                }
                .thought-bubble:before {
                    content: "";
                    position: absolute;
                    bottom: -10px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 0;
                    height: 0;
                    border-left: 10px solid transparent;
                    border-right: 10px solid transparent;
                    border-top: 10px solid white;
                }
                @keyframes float {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                    100% { transform: translateY(0px); }
                }
                h1 {
                    font-size: 2.5rem;
                    font-weight: bold;
                    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
                }
                p {
                    font-size: 1.2rem;
                    margin-bottom: 20px;
                    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
                }
                .reservation-form {
                    background: rgba(0, 0, 0, 0.7);
                    padding: 20px;
                    border-radius: 10px;
                    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
                }
                input, select, textarea {
                    width: 90%;
                    padding: 10px;
                    margin: 10px 0;
                    border: none;
                    border-radius: 5px;
                }
                button {
                    background: #ffd700;
                    color: black;
                    padding: 10px;
                    border: none;
                    cursor: pointer;
                    width: 100%;
                    font-weight: bold;
                    border-radius: 5px;
                }
                button:hover {
                    background: #e6c200;
                }
                @media (max-width: 768px) {
                    .thought-bubble {
                        left: 0;
                        width: 150px;
                        font-size: 0.9rem;
                    }
                    .waiter-img {
                        height: 120px;
                    }
                }
            `}</style>
        </div>
    );
};

export default Reservations;
