import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            try {
                const decodedUser = jwtDecode(token);
                setUser(decodedUser);
            } catch (error) {
                console.error("Invalid token", error);
                localStorage.removeItem("token");
                setUser(null);
            }
        }
    }, []);

    const login = async (email, password) => {
        try {
            const res = await axios.post("/api/auth/login", { email, password });
            localStorage.setItem("token", res.data.token);
            const decodedUser = jwtDecode(res.data.token);
            setUser(decodedUser);
            navigate("/account");
        } catch (error) {
            console.error("Login failed", error);
        }
    };

    const register = async (name, email, password) => {
        try {
            await axios.post("/api/auth/register", { name, email, password });
            navigate("/login");
        } catch (error) {
            console.error("Registration failed", error);
        }
    };

    const logout = () => {
        localStorage.removeItem("token");
        setUser(null);
        navigate("/login");
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};