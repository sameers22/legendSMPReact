import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import menuBackground from "../assets/menu-background.png"; // ✅ Background same as sauces page

const Cart = () => {
    const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem("cart")) || []);
    const navigate = useNavigate();

    // ✅ Group items by count
    const groupedCart = cart.reduce((acc, item) => {
        const existingItem = acc.find(i => i.variantId === item.variantId);
        if (existingItem) {
            existingItem.quantity += 1;
            existingItem.totalPrice = (existingItem.quantity * parseFloat(item.price)).toFixed(2);
        } else {
            acc.push({ ...item, quantity: 1, totalPrice: parseFloat(item.price).toFixed(2) });
        }
        return acc;
    }, []);

    // ✅ Update localStorage after modification
    const updateCartStorage = (updatedCart) => {
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    // ✅ Increase quantity of an item
    const increaseQuantity = (variantId) => {
        const updatedCart = [...cart, cart.find(item => item.variantId === variantId)];
        updateCartStorage(updatedCart);
    };

    // ✅ Decrease quantity of an item (removes if quantity = 1)
    const decreaseQuantity = (variantId) => {
        let found = false;
        const updatedCart = cart.filter((item) => {
            if (!found && item.variantId === variantId) {
                found = true;
                return false; // ✅ Removes one instance
            }
            return true;
        });
        updateCartStorage(updatedCart);
    };

    // ✅ Calculate Total Cost
    const totalCost = groupedCart.reduce((sum, item) => sum + parseFloat(item.totalPrice), 0).toFixed(2);

    // ✅ Shopify Checkout Redirect
    const checkoutWithShopify = () => {
        if (groupedCart.length === 0) return alert("Your cart is empty!");

        const cartQuery = groupedCart.map(item => `${item.variantId.split('/').pop()}:${item.quantity}`).join(",");
        window.location.href = `https://legendchefsauce.com/cart/${cartQuery}`;
    };

    return (
        <div className="cart-container">
            <h1 className="cart-title">Shopping Cart</h1>

            {groupedCart.length === 0 ? (
                <p className="empty-cart">Your cart is empty.</p>
            ) : (
                <>
                    <ul className="cart-list">
                        {groupedCart.map((item, index) => (
                            <li key={index} className="cart-item">
                                <img src={item.image} alt={item.title} className="cart-img" />
                                <div className="cart-info">
                                    <h2 className="cart-item-title">{item.title}</h2>
                                    <p className="cart-quantity">
                                        <button className="quantity-btn" onClick={() => decreaseQuantity(item.variantId)}>-</button>
                                        <span className="quantity-white">{item.quantity}</span>
                                        <button className="quantity-btn" onClick={() => increaseQuantity(item.variantId)}>+</button>
                                    </p>
                                    <p className="cart-price">${item.totalPrice} {item.currency}</p>
                                </div>
                                <button className="remove-btn" onClick={() => decreaseQuantity(item.variantId)}>Remove</button>
                            </li>
                        ))}
                    </ul>

                    <h3 className="total-cost">Total: ${totalCost}</h3>

                    {/* ✅ Checkout Button */}
                    <button className="checkout-btn" onClick={checkoutWithShopify}>
                        Checkout Now
                    </button>
                </>
            )}

            <button className="back-btn" onClick={() => navigate("/sauces")}>← Back to Sauces</button>

            <style jsx>{`
                .cart-container {
                    padding: 120px 20px 50px;
                    text-align: center;
                    min-height: 100vh;
                    background: url(${menuBackground}) no-repeat center center/cover; /* ✅ Same background */
                    width: 100vw;  /* Ensure it spans the entire viewport width */
                    position: absolute;
                    left: 0;
                    right: 0;
                }
                .cart-title {
                    font-size: 2.5rem;
                    font-weight: bold;
                    color: gold;
                    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
                    margin-bottom: 30px;
                }
                .empty-cart {
                    font-size: 1.5rem;
                    color: white;
                    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
                }
                .cart-list {
                    list-style: none;
                    padding: 0;
                    margin: 0 auto;
                    max-width: 800px;
                    background: rgba(0, 0, 0, 0.7); /* ✅ Translucent black */
                    border-radius: 10px;
                    padding: 15px;
                }
                .cart-item {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 15px;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
                }
                .cart-item:last-child {
                    border-bottom: none;
                }
                .cart-img {
                    width: 60px;
                    height: 60px;
                    object-fit: cover;
                    border-radius: 5px;
                    margin-right: 15px;
                }
                .cart-info {
                    flex: 1;
                    text-align: left;
                }
                .cart-item-title {
                    font-size: 1.2rem;
                    font-weight: bold;
                    color: white;
                    margin: 0;
                }
                .cart-quantity {
                    font-size: 1.2rem;
                    font-weight: bold;
                    color: gold;
                    margin: 5px 0;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }
                .quantity-btn {
                    background: gold;
                    color: black;
                    border: none;
                    padding: 5px 10px;
                    border-radius: 5px;
                    font-weight: bold;
                    cursor: pointer;
                    transition: background 0.3s;
                }
                .quantity-btn:hover {
                    background: #d4ac0d;
                }
                .quantity-white {
                    color: white;
                    font-size: 1.3rem;
                }
                .cart-price {
                    font-size: 1rem;
                    color: gold;
                    margin: 5px 0;
                }
                .total-cost {
                    font-size: 1.5rem;
                    font-weight: bold;
                    color: gold;
                    margin: 20px 0;
                }
                .remove-btn {
                    padding: 8px 12px;
                    background-color: red;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    font-weight: bold;
                    cursor: pointer;
                    transition: background 0.3s;
                }
                .remove-btn:hover {
                    background-color: darkred;
                }
                .checkout-btn {
                    padding: 12px 20px;
                    background-color: gold;
                    color: black;
                    border: none;
                    border-radius: 5px;
                    font-weight: bold;
                    cursor: pointer;
                    transition: background 0.3s;
                    margin-top: 20px;
                }
                .checkout-btn:hover {
                    background: #d4ac0d;
                }
                .back-btn {
                    padding: 10px 15px;
                    background-color: gold;
                    color: black;
                    border: none;
                    border-radius: 5px;
                    font-weight: bold;
                    cursor: pointer;
                    transition: background 0.3s;
                    margin-top: 20px;
                    display: block;
                    width: 200px;
                    margin-left: auto;
                    margin-right: auto;
                }
                .back-btn:hover {
                    background: #d4ac0d;
                }
            `}</style>
        </div>
    );
};

export default Cart;
