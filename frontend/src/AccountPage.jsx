import React, { useContext, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const AccountPage = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate("/login");
        }
    }, [user, navigate]);

    return (
        <div>
            <h1>Account Page</h1>
            {user && <p>Welcome, {user.name}</p>}
            <button onClick={logout}>Logout</button>
        </div>
    );
};

export default AccountPage;