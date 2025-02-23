import React from 'react';

import chowMeinImg from '../assets/sauces/chow-mein-sauce.jpg';
import friedRiceImg from '../assets/sauces/fried-rice-sauce.jpg';
import pepperImg from '../assets/sauces/pepper-sauce.jpg';
import pepperShrimpSauce from '../assets/sauces/sauce-pepper-shrimp.jpg';
import wingsSauce from '../assets/sauces/sauce-wings.jpg';
import SeafoodDip from '../assets/sauces/Seafood-Dip.jpg';
import jerkSauce from '../assets/sauces/JerkSauce.jpg';
import CaribbeanSauce from '../assets/sauces/Caribbean-BBQ.jpg';

import backgroundImage from '../assets/menu-background.png'; // ✅ Background image

const saucesData = [
    {
        name: 'Legend Chow Mein/Lo Mein Sauce',
        price: '$9.99 USD',
        description: 'Authentic Asian-style sauce perfect for Ramen, Lo Mein, and Cantonese dishes. Enhances flavor and aroma, replicating restaurant-quality meals at home.',
        imageUrl: chowMeinImg,
        affiliateLink: 'https://www.amazon.com/dp/B09NLDJRDZ',
    },
    {
        name: 'Legend Fried Rice Sauce',
        price: '$9.99 USD',
        description: 'Chinese restaurant-style fried rice sauce, versatile for various cultural dishes including Cantonese, Caribbean, Indian, Spanish, and Middle Eastern fried rice.',
        imageUrl: friedRiceImg,
        affiliateLink: 'https://www.amazon.com/dp/B09NHWNF1L',
    },
    {
        name: 'Legend Pepper Sauce',
        price: '$6.99 USD',
        description: 'A hot and flavorful sauce made with Caribbean peppers. Ideal as a dip, topping, seasoning, or condiment for dishes like sandwiches, rice, stews, and more.',
        imageUrl: pepperImg ,
        affiliateLink: 'https://www.amazon.com/dp/B09NP9KN5J',
    },
    {
        name: 'Legend Pepper Shrimp Sauce',
        price: '$9.99 USD',
        description: 'Perfect for creating Chinese-inspired comfort food. Suitable for fried rice, Lo Mein, stir-fry, and Caribbean-style dishes.',
        imageUrl: pepperShrimpSauce,
        affiliateLink: 'https://www.amazon.com/dp/B09NLD34XX',
    },
    {
        name: 'Legend Wings Sauce',
        price: '$9.99 USD',
        description: 'Mild hot buffalo wing sauce with a rich, tangy flavor. Complements chicken wings, drumsticks, and even veggies.',
        imageUrl: wingsSauce,
        affiliateLink: 'https://www.amazon.com/dp/B09QHBQHJD',
    },
    {
        name: 'Seafood Dip & Dessing',
        price: '$9.99 USD',
        description: 'Try our special white creamy dip – smooth, flavorful, and with a touch of heat! Perfect for calamari, fish, sandwiches, veggies, and salads, it adds a delicious twist to any dish.',
        imageUrl: SeafoodDip,
        affiliateLink: 'https://www.amazon.com/dp/B09QHBQHJD',
    },
    {
        name: 'Legend Jerk Sauce',
        price: '$9.99 USD',
        description: 'Savor the bold, smoky, and spicy Caribbean flavors with our authentic seasoning! Perfect for meats and seafood, it adds rich taste to any dish.',
        imageUrl: jerkSauce,
        affiliateLink: 'https://www.amazon.com/dp/B09QHBQHJD',
    },
    {
        name: 'Legend Caribbean BBQ',
        price: '$9.99 USD',
        description: 'Add rich Caribbean flavor to any dish with our smoky, spicy seasoning! Perfect for meats, dips, or glazes, it brings authentic taste to your meals.',
        imageUrl: CaribbeanSauce,
        affiliateLink: 'https://www.amazon.com/dp/B09QHBQHJD',
    },
    // Add more products as needed
];

const Sauces = () => {
    return (
        <div className="sauces-container">
            <h1></h1>
            <p className="subtitle"></p>
            <div className="sauces-grid">
                {saucesData.map((sauce, index) => (
                    <div key={index} className="sauce-card">
                        <img src={sauce.imageUrl} alt={sauce.name} className="sauce-image" />
                        <h2>{sauce.name}</h2>
                        <p>{sauce.description}</p>
                        <p className="price">{sauce.price}</p>
                        <div className="button-group">
                            <button className="order-now-btn">Order Now</button>
                            <a href={sauce.affiliateLink} target="_blank" rel="noopener noreferrer" className="amazon-btn">
                                Order from Amazon
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            <style jsx>{`
                .sauces-container {
                    padding: 120px 20px 50px;
                    background: url(${backgroundImage}) no-repeat center center/cover;
                    text-align: center;
                    background-color: #ffdd57;
                    min-height: 100vh;
                    width: 100vw;  /* Ensure it spans the entire viewport width */
                    position: absolute;
                    left: 0;
                    right: 0;
                }
                h1 {
                    font-size: 2.5rem;
                    font-weight: bold;
                    color:rgb(137, 55, 0);
                    margin-bottom: 10px;
                }
                .subtitle {
                    font-size: 1.2rem;
                    color:rgb(137, 55, 0);
                    margin-bottom: 30px;
                }
                .sauces-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 0.5fr); /* ✅ Exactly 4 items per row */
                    gap: 30px;
                    justify-items: center;
                }
                
                @media (max-width: 600px) {
                    .sauces-grid {
                        grid-template-columns: repeat(1, 1fr); /* ✅ 1 per row on mobile */
                    }
                }
                .sauce-card {
                    background: rgba(0, 0, 0, 0.90);
                    color:rgb(255, 255, 255);
                    border-radius: 10px;
                    padding: 20px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    text-align: center;
                    width: 300px;
                    transition: transform 0.3s ease;
                }
                .sauce-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.20);
                }
                .sauce-image {
                    width: 100%;
                    height: 180px; /* ✅ Adjust the height to match all images */
                    object-fit: contain; /* ✅ Ensures image is fully visible without being cropped */
                    border-radius: 10px;
                }
                .price {
                    font-weight: bold;
                    margin-top: 8px;
                    color: #ffd700;
                }
                .button-group {
                    display: flex;
                    gap: 10px;
                    justify-content: center;
                    margin-top: 15px;
                }
                .order-now-btn {
                    padding: 8px 12px;
                    background-color: #f1c40f;
                    color: black;
                    border: none;
                    border-radius: 5px;
                    font-weight: bold;
                    cursor: pointer;
                    transition: background 0.3s;
                }
                .order-now-btn:hover {
                    background-color: #d4ac0d;
                }
                .amazon-btn {
                    padding: 8px 12px;
                    background-color: #ff9900;
                    color: white;
                    text-decoration: none;
                    border-radius: 5px;
                    font-weight: bold;
                    transition: background 0.3s;
                }
                .amazon-btn:hover {
                    background-color: #e68a00;
                }
            `}</style>
        </div>
    );
};

export default Sauces;
