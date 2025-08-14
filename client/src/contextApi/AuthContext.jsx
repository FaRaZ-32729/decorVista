import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { replace, useNavigate } from "react-router-dom";
import { FavouriteContext } from "./FavouriteContext";

const API_URL = import.meta.env.VITE_Node_Api_Url;
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    console.log(user)


    const fetchProfile = async () => {
        try {
            const res = await axios.get(`${API_URL}/auth/me`, {
                withCredentials: true,
            });
            setUser(res.data);
        } catch (error) {
            console.log(error)
            setUser(null);
        } finally {
            setIsLoading(false);
        }
    };
    // console.log(user.name)
    const logout = async () => {
        try {
            await axios.delete(`${API_URL}/auth/logout`, { withCredentials: true });
            setUser(null);
            toast.success("Logged out successfully");
            navigate("/" , replace);

        } catch (error) {
            toast.error("Failed to logout");
        }
    };

    useEffect(() => {
        fetchProfile();
    }, []);

    return (
        <AuthContext.Provider value={{ user, isLoading, fetchProfile, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
