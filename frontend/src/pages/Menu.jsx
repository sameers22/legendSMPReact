import React, { useState } from 'react';

const Menu = () => {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState({ name: '', cost: '', ingredients: '', description: '' });

    const handleAddItem = () => {
        setItems([...items, newItem]);
        setNewItem({ name: '', cost: '', ingredients: '', description: '' });
    };

    return (
        <div className="p-5">
            <h1 className="text-3xl font-bold mb-4">Menu</h1>
            <div className="mb-4">
                <input type="text" placeholder="Name" value={newItem.name} onChange={e => setNewItem({ ...newItem, name: e.target.value })} />
                <input type="text" placeholder="Cost" value={newItem.cost} onChange={e => setNewItem({ ...newItem, cost: e.target.value })} />
                <input type="text" placeholder="Ingredients" value={newItem.ingredients} onChange={e => setNewItem({ ...newItem, ingredients: e.target.value })} />
                <textarea placeholder="Description" value={newItem.description} onChange={e => setNewItem({ ...newItem, description: e.target.value })}></textarea>
                <button onClick={handleAddItem}>Add Item</button>
            </div>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item.name} - {item.cost}</li>
                ))}
            </ul>
        </div>
    );
};

export default Menu;
