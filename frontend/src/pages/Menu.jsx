import React from 'react';

const menuData = [
    {
        category: "Appetizers",
        items: [
            { name: "Hot Buffalo Wings", price: "$12.95" },
            { name: "Jerk Wings", price: "$12.95" },
            { name: "BBQ Chicken Wings", price: "$12.95" },
            { name: "Fried Chicken Wings", price: "$12.95" },
            { name: "Crispy Boneless Chicken Breast", price: "$14.95" },
            { name: "Golden Fried Calamari", price: "$14.95" },
            { name: "Fried Guyana Snapper", price: "$16.95" },
            { name: "Sweet Chili Chicken (New!)", price: "$15.95" },
        ]
    },
    {
        category: "Soups",
        items: [
            { name: "Chicken Noodle Soup", price: "$7.95" },
            { name: "Seafood Soup (Calamari, Shrimp, Crab Meat, Fish)", price: "$12.95" },
            { name: "Guyana Provision Soup", price: "$9.97" },
            { name: "Chicken Veggie Soup", price: "$12.95" }
        ]
    },
    {
        category: "Salads",
        items: [
            { name: "Fresh Garden Salad", price: "$10.95" },
            { name: "Grilled Chicken Salad", price: "$12.00" },
            { name: "Jerk Chicken Salad", price: "$12.00" }
        ]
    },
    {
        category: "Favorite Caribbean Delights",
        items: [
            { name: "Duck Curry", price: "$20.00" },
            { name: "Bunjal Duck", price: "$20.00" },
            { name: "Chicken Curry", price: "$16.95" },
            { name: "Chicken Stewed", price: "$16.95" },
            { name: "Curry Goat", price: "$18.95" },
            { name: "Guyana Snapper Stew", price: "$18.95" },
            { name: "Curry Jumbo Shrimp (Made to Order)", price: "$19.95" },
            { name: "Oxtails", price: "$20.95" }
        ]
    },
    {
        category: "Sides",
        items: [
            { name: "Dhal Puri", price: "$5.00" },
            { name: "Roti", price: "$4.00" },
            { name: "Rice & Peas", price: "$7.95" },
            { name: "Plain Rice", price: "$5.00" }
        ]
    },
    {
        category: "Desserts",
        items: [
            { name: "Cheesecake", price: "$7.00" },
            { name: "Chocolate Cake", price: "$7.00" },
            { name: "Red Velvet Cake", price: "$7.00" },
            { name: "Guyana Custard", price: "$7.00" }
        ]
    }
];

const Menu = () => {
    return (
        <div className="menu-page">
            <h1 className="title">Legend Cookhouse Menu</h1>
            <p className="subtitle">Authentic Caribbean & Guyanese Cuisine</p>

            {menuData.map((section, index) => (
                <div key={index} className="menu-section">
                    <h2 className="section-title">{section.category}</h2>
                    <ul className="menu-list">
                        {section.items.map((item, idx) => (
                            <li key={idx} className="menu-item">
                                <span>{item.name}</span>
                                <span className="price">{item.price}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}

            <style jsx>{`
                .menu-page {
                    text-align: center;
                    padding: 2rem;
                    background-color: #f8f8f8;
                }
                .title {
                    font-size: 2.5rem;
                    font-weight: bold;
                }
                .subtitle {
                    color: #777;
                    margin-bottom: 20px;
                }
                .menu-section {
                    background: white;
                    padding: 20px;
                    margin: 20px auto;
                    max-width: 600px;
                    border-radius: 10px;
                    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
                }
                .section-title {
                    font-size: 1.8rem;
                    color: #d35400;
                }
                .menu-list {
                    list-style: none;
                    padding: 0;
                }
                .menu-item {
                    display: flex;
                    justify-content: space-between;
                    padding: 10px 0;
                    border-bottom: 1px solid #ddd;
                }
                .menu-item:last-child {
                    border-bottom: none;
                }
                .price {
                    font-weight: bold;
                    color: #2c3e50;
                }
            `}</style>
        </div>
    );
};

export default Menu;
