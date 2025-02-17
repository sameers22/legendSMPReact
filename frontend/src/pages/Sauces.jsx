import React from 'react';

const saucesData = [
    {
        name: 'Legend Chow Mein/Lo Mein Sauce',
        price: '$9.99 USD',
        description: 'Authentic Asian-style sauce perfect for Ramen, Lo Mein, and Cantonese dishes. Enhances flavor and aroma, replicating restaurant-quality meals at home.',
        imageUrl: 'https://legendchefsauce.com/cdn/shop/products/legend-chow-mein-lo-mein-sauce.jpg',
        affiliateLink: 'https://www.amazon.com/dp/B09NLDJRDZ',
    },
    {
        name: 'Legend Fried Rice Sauce',
        price: '$9.99 USD',
        description: 'Chinese restaurant-style fried rice sauce, versatile for various cultural dishes including Cantonese, Caribbean, Indian, Spanish, and Middle Eastern fried rice.',
        imageUrl: 'https://legendchefsauce.com/cdn/shop/products/legend-fried-rice-sauce.jpg',
        affiliateLink: 'https://www.amazon.com/dp/B09NHWNF1L',
    },
    {
        name: 'Legend Pepper Sauce',
        price: '$6.99 USD',
        description: 'A hot and flavorful sauce made with Caribbean peppers. Ideal as a dip, topping, seasoning, or condiment for dishes like sandwiches, rice, stews, and more.',
        imageUrl: 'https://legendchefsauce.com/cdn/shop/products/legend-pepper-sauce.jpg',
        affiliateLink: 'https://www.amazon.com/dp/B09NP9KN5J',
    },
    {
        name: 'Legend Pepper Shrimp Sauce',
        price: '$9.99 USD',
        description: 'Perfect for creating Chinese-inspired comfort food. Suitable for fried rice, Lo Mein, stir-fry, and Caribbean-style dishes.',
        imageUrl: 'https://legendchefsauce.com/cdn/shop/products/legend-pepper-shrimp-sauce.jpg',
        affiliateLink: 'https://www.amazon.com/dp/B09NLD34XX',
    },
    {
        name: 'Legend Wings Sauce',
        price: '$9.99 USD',
        description: 'Mild hot buffalo wing sauce with a rich, tangy flavor. Complements chicken wings, drumsticks, and even veggies.',
        imageUrl: 'https://legendchefsauce.com/cdn/shop/products/legend-wings-sauce.jpg',
        affiliateLink: 'https://www.amazon.com/dp/B09QHBQHJD',
    },
    // Add more products as needed
];

const Sauces = () => {
    return (
        <div className="sauces-container">
            <h1>Our Signature Sauces</h1>
            <p className="subtitle">Explore our collection of flavorful sauces.</p>
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
                    text-align: center;
                    background-color: #f9f9f9;
                    min-height: 100vh;
                }
                h1 {
                    font-size: 2.5rem;
                    font-weight: bold;
                    color: #d35400;
                    margin-bottom: 10px;
                }
                .subtitle {
                    font-size: 1.2rem;
                    color: #555;
                    margin-bottom: 30px;
                }
                .sauces-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 20px;
                    justify-items: center;
                }
                .sauce-card {
                    background: white;
                    border-radius: 10px;
                    padding: 20px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    text-align: center;
                    width: 300px;
                    transition: transform 0.3s ease;
                }
                .sauce-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
                }
                .sauce-image {
                    width: 100%;
                    height: 200px;
                    object-fit: cover;
                    border-radius: 10px;
                }
                .price {
                    font-weight: bold;
                    margin-top: 8px;
                    color: #2c3e50;
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
