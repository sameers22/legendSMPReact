import React, { useState, useEffect } from "react";

const Sauces = () => {
    const [sauces, setSauces] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const fetchSauces = async () => {
            try {
                const response = await fetch("http://localhost:5002/api/shopify-products");
                const data = await response.json();
                setSauces(data.products);
            } catch (error) {
                console.error("Error fetching sauces:", error);
            }
        };
        fetchSauces();
    }, []);

    // ✅ Add item to Cart
    const addToCart = (sauce) => {
        setCart([...cart, sauce]);
    };

    // ✅ Checkout Function (Place inside the component)
    const checkoutWithShopify = async () => {
        if (cart.length === 0) {
            alert("Your cart is empty!");
            return;
        }
    
        try {
            const response = await fetch("http://localhost:5002/api/shopify-checkout", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ 
                    items: cart.map(item => ({ id: item.variantId, quantity: 1 })) 
                })
            });
    
            const data = await response.json();
            console.log("🔄 Shopify Response:", data); // ✅ Log Shopify Response
    
            if (data.checkoutUrl) {
                console.log("✅ Redirecting to:", data.checkoutUrl);
                window.location.href = data.checkoutUrl; // ✅ Redirect to Shopify Checkout
            } else {
                console.error("❌ Failed to create checkout:", data);
                alert("Failed to create checkout. Please try again.");
            }
        } catch (error) {
            console.error("❌ Checkout error:", error);
            alert("An error occurred. Check the console for details.");
        }
    };
    

    return (
        <div className="sauces-container">
            <h1>Our Signature Sauces</h1>
            <p className="subtitle">Explore our collection of flavorful sauces.</p>

            {/* ✅ Display Cart Items */}
            <div className="cart-container">
                <h2>Cart</h2>
                {cart.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    cart.map((item, index) => (
                        <div key={index} className="cart-item">
                            <p>{item.title} - {item.price} {item.currency}</p>
                        </div>
                    ))
                )}

                {/* ✅ Checkout Button (Place below cart) */}
                {cart.length > 0 && (
                    <button className="checkout-btn" onClick={checkoutWithShopify}>
                        Checkout Now
                    </button>
                )}
            </div>

            <div className="sauces-grid">
                {sauces.map((sauce, index) => (
                    <div key={index} className="sauce-card">
                        <img src={sauce.image} alt={sauce.title} className="sauce-image" />
                        <h2>{sauce.title}</h2>
                        <p>{sauce.description}</p>
                        <p className="price">{sauce.price} {sauce.currency}</p>
                        <button className="order-now-btn" onClick={() => addToCart(sauce)}>
                            Add to Cart
                        </button>
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
                .cart-container {
                    background: white;
                    padding: 20px;
                    border-radius: 10px;
                    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
                    margin-bottom: 20px;
                }
                .cart-item {
                    border-bottom: 1px solid #ddd;
                    padding: 10px 0;
                }
                .checkout-btn {
                    background-color: #27ae60;
                    color: white;
                    padding: 10px;
                    border: none;
                    border-radius: 5px;
                    font-weight: bold;
                    cursor: pointer;
                    width: 100%;
                    transition: background 0.3s;
                }
                .checkout-btn:hover {
                    background-color: #219150;
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
            `}</style>
        </div>
    );
};

export default Sauces;
