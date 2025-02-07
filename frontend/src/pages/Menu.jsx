import React, { useState } from 'react';

const Menu = () => {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState({ name: '', cost: '', ingredients: '', description: '' });

    const handleAddItem = () => {
        if (newItem.name && newItem.cost) {
            setItems([...items, newItem]);
            setNewItem({ name: '', cost: '', ingredients: '', description: '' });
        } else {
            alert('Please fill in the required fields.');
        }
    };

    return (
        <div className="menu-page">
            <h1 className="title">Menu</h1>
            <p className="subtitle">Discover our delicious dishes crafted with love.</p>

            <div className="menu-form">
                <input type="text" placeholder="Dish Name" value={newItem.name} onChange={e => setNewItem({ ...newItem, name: e.target.value })} />
                <input type="text" placeholder="Price ($)" value={newItem.cost} onChange={e => setNewItem({ ...newItem, cost: e.target.value })} />
                <input type="text" placeholder="Ingredients" value={newItem.ingredients} onChange={e => setNewItem({ ...newItem, ingredients: e.target.value })} />
                <textarea placeholder="Description" value={newItem.description} onChange={e => setNewItem({ ...newItem, description: e.target.value })}></textarea>
                <button onClick={handleAddItem}>Add to Menu</button>
            </div>

            <div className="menu-list">
                {items.length > 0 ? (
                    items.map((item, index) => (
                        <div key={index} className="menu-item">
                            <h3>{item.name} - ${item.cost}</h3>
                            <p><strong>Ingredients:</strong> {item.ingredients}</p>
                            <p>{item.description}</p>
                        </div>
                    ))
                ) : (
                    <p className="empty-message">No menu items added yet.</p>
                )}
            </div>

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
                }
                .menu-form {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    max-width: 400px;
                    margin: 20px auto;
                }
                .menu-form input, .menu-form textarea {
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    width: 100%;
                }
                .menu-form button {
                    padding: 10px;
                    background-color: #d35400;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                }
                .menu-list {
                    margin-top: 20px;
                }
                .menu-item {
                    background-color: white;
                    padding: 15px;
                    border-radius: 8px;
                    margin-bottom: 10px;
                    box-shadow: 0px 4px 6px rgba(0,0,0,0.1);
                }
                .empty-message {
                    color: #777;
                }
            `}</style>
        </div>
    );
};

export default Menu;
