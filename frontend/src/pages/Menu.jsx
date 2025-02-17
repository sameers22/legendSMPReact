import React, { useState } from 'react';
import backgroundImage from '../assets/menu-background.png'; // ✅ Background image

// ✅ Import Appetizer Images
import buffaloWingsImg from '../assets/Appetizer/A1-Chicken-Wings.png';
import bbqChickenImg from '../assets/Appetizer/A2-BBQ-Chicken-Boneless.png';
import beefFajitasImg from '../assets/Appetizer/A3-Beef-Fajitas.png';
import chickenFajitasImg from '../assets/Appetizer/A4-Chicken-Fajitas.png';
import chilliChickenImg from '../assets/Appetizer/A5-Chilli-Chicken.png';
import bonelessChickenImg from '../assets/Appetizer/A6-Crispy-Boneless-Chicken-Breast.avif';
import calamariImg from '../assets/Appetizer/A7-Golden-Fried-Calamari.avif';
import snapperImg from '../assets/Appetizer/A8-Fried-Guyana-Snapper.avif';
import roastLambImg from '../assets/Appetizer/A9-Roast-Lamb.avif';
import roastBeefImg from '../assets/Appetizer/A10-Roast-Beef.avif';
import roastChickenImg from '../assets/Appetizer/A11-Roast-Chicken.avif';
import bbqRibsImg from '../assets/Appetizer/A12-BBQ-Baby-Back-Ribs.avif';
import bbqChickenFullImg from '../assets/Appetizer/A13-BBQ-Chicken.avif';
import jerkChickenImg from '../assets/Appetizer/A14-Jerk-Chicken.avif';
import jerkPorkImg from '../assets/Appetizer/A15-Jerk-Pork.avif';
import pepperJumboShrimpImg from '../assets/Appetizer/A16-Pepper-Jumbo-Shrimp.avif';
import batteredShrimpImg from '../assets/Appetizer/A17-Fried-Battered-Jumbo-Shrimp.avif';
import shrimpWontonImg from '../assets/Appetizer/A18-Shrimp-Wonton.avif';
import friedSharkImg from '../assets/Appetizer/A19-Fried-Shark.avif';
import friedBangamaryImg from '../assets/Appetizer/A20-Fried-Small-Bangamary.avif';

// ✅ Import Soups Images
import seafoodSoupSmallImg from '../assets/Soups/B1-Seafood-Soup-Sm.avif';
import chickenNoodleSoupLargeImg from '../assets/Soups/B2-Chicken-Noodle-Soup-Lg .avif';
import chickenVeggieSoupLargeImg from '../assets/Soups/B3-Chicken-Veggie-Soup-Lg.avif';
import seafoodSoupLargeImg from '../assets/Soups/B4-Seafood-Soup-Lg.avif';
import chickenNoodleSoupSmallImg from '../assets/Soups/B5-Chicken-Noodle-Soup-sm.avif';
import chickenVeggieSoupSmallImg from '../assets/Soups/B6-Chicken-Veggie-Soup.avif';


const menuData = [
    {
        category: "Appetizers",
        items: [
            { name: "Hot Buffalo Wings", price: "$12.95", description: "Crispy, spicy wings served with blue cheese dip.", image: buffaloWingsImg },
            { name: "BBQ Chicken Wings", price: "$12.95", description: "Sweet and tangy BBQ sauce glazed wings.", image: bbqChickenImg },
            { name: "Beef Fajitas", price: "$15.95", description: "Sizzling beef fajitas with peppers and onions.", image: beefFajitasImg },
            { name: "Chicken Fajitas", price: "$14.95", description: "Tender chicken fajitas with seasoned veggies.", image: chickenFajitasImg },
            { name: "Sweet Chili Chicken", price: "$15.95", description: "Crispy chicken tossed in a sweet and spicy chili sauce.", image: chilliChickenImg },
            { name: "Crispy Boneless Chicken Breast", price: "$14.95", description: "Tender, crispy chicken breast served with house sauce.", image: bonelessChickenImg },
            { name: "Golden Fried Calamari", price: "$14.95", description: "Crispy calamari rings served with marinara sauce.", image: calamariImg },
            { name: "Fried Guyana Snapper", price: "$16.95", description: "Delicately fried Guyanese snapper with house seasoning.", image: snapperImg },
            { name: "Roast Lamb", price: "$19.95", description: "Slow-roasted lamb with rich seasoning.", image: roastLambImg },
            { name: "Roast Beef", price: "$18.95", description: "Juicy roast beef with a flavorful crust.", image: roastBeefImg },
            { name: "Roast Chicken", price: "$14.95", description: "Slow-roasted chicken with a smoky flavor.", image: roastChickenImg },
            { name: "BBQ Baby Back Ribs", price: "$19.95", description: "Smoky, tender BBQ ribs glazed to perfection.", image: bbqRibsImg },
            { name: "BBQ Chicken", price: "$15.95", description: "Classic BBQ chicken with rich smoky flavors.", image: bbqChickenFullImg },
            { name: "Jerk Chicken", price: "$16.95", description: "Spicy and flavorful jerk-marinated chicken.", image: jerkChickenImg },
            { name: "Jerk Pork", price: "$16.95", description: "Tender pork marinated in Caribbean spices.", image: jerkPorkImg },
            { name: "Pepper Jumbo Shrimp", price: "$18.95", description: "Sweet and spicy peppered shrimp.", image: pepperJumboShrimpImg },
            { name: "Fried Battered Jumbo Shrimp", price: "$19.95", description: "Crispy battered shrimp served with dip.", image: batteredShrimpImg },
            { name: "Shrimp Wonton", price: "$14.95", description: "Delicious crispy wontons filled with shrimp.", image: shrimpWontonImg },
            { name: "Fried Shark", price: "$17.95", description: "Lightly battered and fried shark fillets.", image: friedSharkImg },
            { name: "Fried Small Bangamary", price: "$16.95", description: "Crispy fried Bangamary fish with house seasoning.", image: friedBangamaryImg }
        ]
    },
    {
        category: "Soups",
        items: [
            { name: "Seafood Soup (Small)", price: "$12.95", description: "Rich seafood broth with calamari, shrimp, and crab.", image: seafoodSoupSmallImg },
            { name: "Seafood Soup (Large)", price: "$16.95", description: "A larger portion of our delicious seafood soup.", image: seafoodSoupLargeImg },
            { name: "Chicken Noodle Soup (Small)", price: "$7.95", description: "Homemade broth with tender chicken and noodles.", image: chickenNoodleSoupSmallImg },
            { name: "Chicken Noodle Soup (Large)", price: "$11.95", description: "Large portion of classic chicken noodle soup.", image: chickenNoodleSoupLargeImg },
            { name: "Chicken Veggie Soup (Small)", price: "$10.95", description: "Savory chicken broth loaded with fresh vegetables.", image: chickenVeggieSoupSmallImg },
            { name: "Chicken Veggie Soup (Large)", price: "$14.95", description: "Larger bowl of nutritious chicken veggie soup.", image: chickenVeggieSoupLargeImg }
        ]
    },
    {
        category: "Salads",
        items: [
            { name: "Fresh Garden Salad", price: "$10.95", description: "Crisp greens, tomatoes, cucumbers, and carrots." },
            { name: "Grilled Chicken Salad", price: "$12.00", description: "Fresh salad topped with juicy grilled chicken." },
            { name: "Jerk Chicken Salad", price: "$12.00", description: "Caribbean-style jerk chicken over fresh greens." }
        ]
    },
    {
        category: "Favorite Caribbean Delights",
        items: [
            { name: "Duck Curry", price: "$20.00", description: "Authentic Caribbean-style duck curry with rich flavors." },
            { name: "Bunjal Duck", price: "$20.00", description: "Spicy dry-style duck curry, bursting with flavor." },
            { name: "Chicken Curry", price: "$16.95", description: "Aromatic curry chicken served with choice of sides." },
            { name: "Oxtails", price: "$20.95", description: "Slow-cooked oxtail in a flavorful brown sauce." }
        ]
    },
    {
        category: "Rasta Pasta",
        items: [
            { name: "Rasta Pasta BBQ Baby Back Ribs", price: "$13.95 / $22.95", description: "BBQ baby back ribs tossed in creamy Rasta Pasta sauce." },
            { name: "Roast Duck", price: "$24.95", description: "Slow-roasted duck served with lo mein or penne pasta." },
            { name: "Jerk Chicken", price: "$10.95 / $16.95", description: "Fiery jerk chicken served over creamy pasta." }
        ]
    },
    {
        category: "Sides",
        items: [
            { name: "Dhal Puri", price: "$5.00", description: "Soft flatbread stuffed with seasoned split peas." },
            { name: "Roti", price: "$4.00", description: "Flaky Caribbean-style flatbread." },
            { name: "Rice & Peas", price: "$7.95", description: "Savory rice cooked with kidney beans and coconut milk." },
            { name: "Plain Rice", price: "$5.00", description: "Steamed fluffy white rice." }
        ]
    },
    {
        category: "Fried Rice",
        items: [
            { name: "BBQ Baby Back Ribs Fried Rice", price: "$15.95 / $22.95", description: "Fried rice with tender BBQ baby back ribs." },
            { name: "Jerk Chicken Fried Rice", price: "$15.95 / $22.95", description: "Flavor-packed jerk chicken fried rice." },
            { name: "Mixed Fried Rice", price: "$12.95 / $19.95", description: "Combination of chicken, pork, and shrimp fried rice." }
        ]
    },
    {
        category: "Chow Mein / Lo Mein",
        items: [
            { name: "BBQ Baby Back Ribs Chow Mein", price: "$13.95 / $22.95", description: "BBQ ribs stir-fried with chow mein noodles." },
            { name: "Shrimp Chow Mein", price: "$12.95 / $19.95", description: "Chow mein stir-fried with juicy shrimp." }
        ]
    },
    {
        category: "Vegetables",
        items: [
            { name: "Mixed Vegetables", price: "$12.95", description: "Steamed mixed vegetables in a light sauce." },
            { name: "Broccoli in Garlic Sauce", price: "$12.95", description: "Fresh broccoli cooked in garlic-infused sauce." }
        ]
    },
    {
        category: "Desserts",
        items: [
            { name: "Cheesecake", price: "$7.00", description: "Creamy cheesecake with a graham cracker crust." },
            { name: "Chocolate Cake", price: "$7.00", description: "Decadent chocolate cake with a rich ganache." },
            { name: "Red Velvet Cake", price: "$7.00", description: "Classic red velvet cake with cream cheese frosting." },
            { name: "Guyana Custard", price: "$7.00", description: "Traditional Guyanese custard dessert." }
        ]
    }
];
const Menu = () => {
    const [hoveredItem, setHoveredItem] = useState(null);
    const [hoverPosition, setHoverPosition] = useState("left");

    return (
        <div className="menu-page">
            <h1 className="title">Legend Cookhouse Menu</h1>
            <p className="subtitle">Authentic Caribbean & Guyanese Cuisine</p>

            {menuData.map((section, index) => (
                <div key={index} className="menu-section">
                    <h2 className="section-title">{section.category}</h2>
                    <ul className="menu-list">
                        {section.items.map((item, idx) => (
                            <li 
                                key={idx} 
                                className="menu-item"
                                onMouseLeave={() => setHoveredItem(null)}
                            >
                                <span 
                                    className="item-name"
                                    onMouseEnter={() => { setHoveredItem(item); setHoverPosition("left"); }}
                                >
                                    {item.name}
                                </span>

                                <span 
                                    className="price"
                                    onMouseEnter={() => { setHoveredItem(item); setHoverPosition("right"); }}
                                >
                                    {item.price}
                                </span>

                                {/* Show Details Based on Hover Position */}
                                {hoveredItem === item && (
                                    <div className={`item-details ${hoverPosition}`}>
                                        <img src={item.image} alt={item.name} className="dish-image" />
                                        <p>{item.description}</p>
                                        <div className="order-buttons">
                                            <button className="order-btn">Order</button>
                                            <a href="https://www.doordash.com/" target="_blank" rel="noopener noreferrer" className="order-btn doordash">Order with DoorDash</a>
                                            <div className="small-buttons">
                                                <a href="https://www.ubereats.com/" target="_blank" rel="noopener noreferrer" className="small-order-btn ubereats">UberEats</a>
                                                <a href="https://www.grubhub.com/" target="_blank" rel="noopener noreferrer" className="small-order-btn grubhub">GrubHub</a>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}

            <style jsx>{`
                .menu-page {
                    text-align: center;
                    padding: 6rem 2rem 2rem;
                    background: url(${backgroundImage}) no-repeat center center/cover;
                    color: white;
                    min-height: 100vh;
                }
                .title {
                    font-size: 2.5rem;
                    color:rgb(255, 255, 255);
                    font-weight: bold;
                    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
                }
                .subtitle {
                    color: #ddd;
                    margin-bottom: 20px;
                    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
                }
                .menu-section {
                    background: rgba(0, 0, 0, 0.85);
                    padding: 20px;
                    margin: 20px auto;
                    max-width: 600px;
                    border-radius: 10px;
                    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
                }
                .section-title {
                    font-size: 1.8rem;
                    color: #ffd700;
                }
                .menu-list {
                    list-style: none;
                    padding: 0;
                }
                .menu-item {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 10px 15px;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
                    position: relative;
                    transition: background 0.3s ease-in-out;
                    cursor: pointer;
                }
                .menu-item:hover {
                    background: rgba(255, 255, 255, 0.1);
                }
                .price {
                    font-weight: bold;
                    color: #ffdd57;
                }
                .item-name {
                    flex: 1;
                    text-align: left;
                }
                .item-details {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 300px;
                    background: rgba(0, 0, 0, 0.8);
                    padding: 10px;
                    border-radius: 5px;
                    color: white;
                    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
                    text-align: left;
                }
                .dish-image {
                    width: 100%;
                    max-width: 280px;
                    height: auto;
                    border-radius: 5px;
                    margin-bottom: 10px;
                }
                .item-details.left {
                    left: -320px;
                }
                .item-details.right {
                    left: 100%;
                }
                .order-buttons {
                    display: flex;
                    flex-direction: column;
                    gap: 5px;
                    margin-top: 10px;
                }
                .order-btn {
                    background: #ffd700;
                    color: black;
                    border: none;
                    padding: 8px 12px;
                    cursor: pointer;
                    border-radius: 5px;
                    transition: background 0.3s;
                    text-align: center;
                    display: inline-block;
                    text-decoration: none;
                    font-weight: bold;
                }
                .order-btn:hover {
                    background: #e6c200;
                }
                .doordash {
                    background: #ff2e2e;
                    color: white;
                    font-size: 1rem;
                }
                .doordash:hover {
                    background: #cc2424;
                }
                .small-buttons {
                    display: flex;
                    gap: 5px;
                    justify-content: center;
                }
                .small-order-btn {
                    background: #00a000;
                    color: white;
                    border: none;
                    padding: 6px 10px;
                    cursor: pointer;
                    border-radius: 5px;
                    transition: background 0.3s;
                    text-align: center;
                    display: inline-block;
                    text-decoration: none;
                    font-size: 0.9rem;
                    width: 50%;
                }
                .ubereats {
                    background: #00a000;
                }
                .ubereats:hover {
                    background: #008a00;
                }
                .grubhub {
                    background: #ff6600;
                }
                .grubhub:hover {
                    background: #cc5500;
                }
                @media (max-width: 900px) {
                    .item-details {
                        position: relative;
                        left: auto;
                        top: auto;
                        transform: none;
                        width: 100%;
                        margin-top: 10px;
                        text-align: center;
                    }
                    .small-buttons {
                        flex-direction: row;
                        justify-content: center;
                        gap: 10px;
                    }
                    .small-order-btn {
                        width: auto;
                        padding: 6px 10px;
                    }
                }
            `}</style>
        </div>
    );
};

export default Menu;