import React, { useState } from 'react';
import backgroundImage from '../assets/menu-background.png'; // ✅ Background image

const menuData = [
    {
        category: "Appetizers",
        items: [
            { name: "Hot Buffalo Wings", price: "$12.95", description: "Crispy, spicy wings served with blue cheese dip." },
            { name: "Jerk Wings", price: "$12.95", description: "Smoky and spicy Caribbean jerk-marinated wings." },
            { name: "BBQ Chicken Wings", price: "$12.95", description: "Sweet and tangy BBQ sauce glazed wings." },
            { name: "Fried Chicken Wings", price: "$12.95", description: "Golden fried, crispy wings served with ranch dip." },
            { name: "Crispy Boneless Chicken Breast", price: "$14.95", description: "Tender, crispy chicken breast served with house sauce." },
            { name: "Golden Fried Calamari", price: "$14.95", description: "Crispy calamari rings served with marinara sauce." },
            { name: "Fried Guyana Snapper", price: "$16.95", description: "Delicately fried Guyanese snapper with house seasoning." },
            { name: "Sweet Chili Chicken (New!)", price: "$15.95", description: "Crispy chicken tossed in a sweet and spicy chili sauce." }
        ]
    },
    {
        category: "Soups",
        items: [
            { name: "Chicken Noodle Soup", price: "$7.95", description: "Homemade broth with tender chicken and noodles." },
            { name: "Seafood Soup", price: "$12.95", description: "Rich seafood broth with calamari, shrimp, and crab." },
            { name: "Guyana Provision Soup", price: "$9.97", description: "Traditional Guyanese soup with root vegetables and meat." },
            { name: "Chicken Veggie Soup", price: "$12.95", description: "Savory chicken broth loaded with fresh vegetables." }
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
                                onMouseEnter={() => setHoveredItem(item)}
                                onMouseLeave={() => setHoveredItem(null)}
                            >
                                <span>{item.name}</span>
                                <span className="price">{item.price}</span>

                                {/* Show Details on Hover */}
                                {hoveredItem === item && (
                                    <div className="item-details">
                                        <p>{item.description}</p>
                                        <div className="order-buttons">
                                            <button className="order-btn">Order</button>
                                            <a href="https://order.online/store/legend-cookhouse-south-ozone-park-194451/?hideModal=true&pickup=true&utm_source=sdk&visitorId=18421a12cec670eea" target="_blank" rel="noopener noreferrer" className="order-btn doordash">Order with DoorDash</a>
                                            <div className="small-buttons">
                                                <a href="https://www.ubereats.com/store/legend-cookhouse-south-ozone-park/TofQ_IA8RHu4DoykbiQjhg?diningMode=DELIVERY&mod=merchantUnavailable&modctx=%257B%2522storeUuid%2522%253A%25224e87d0fc-803c-447b-b80e-8ca46e242386%2522%257D&nt=1&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMmxlZ2VuZCUyMGNvb2tob3VzZSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMjkxYzgwYjY1LTZhMmYtODI4Ny0wZTgwLTMyODQyMzgwZGNjYSUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDAuNjc0NTQ1NyUyQyUyMmxvbmdpdHVkZSUyMiUzQS03My44MDI3NiU3RA%3D%3D&ps=1" target="_blank" rel="noopener noreferrer" className="small-order-btn ubereats">UberEats</a>
                                                <a href="https://www.grubhub.com/restaurant/legend-cookhouse-13511-rockaway-blvd-s-ozone-park/384500" target="_blank" rel="noopener noreferrer" className="small-order-btn grubhub">GrubHub</a>
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
                    font-weight: bold;
                    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
                }
                .subtitle {
                    color: #ddd;
                    margin-bottom: 20px;
                    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
                }
                .menu-section {
                    background: rgba(0, 0, 0, 0.6);
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
                .item-details {
                    position: absolute;
                    left: 100%;
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