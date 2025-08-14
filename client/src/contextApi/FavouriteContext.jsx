import React, { createContext, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "./AuthContext"; // Make sure path is correct
import { useEffect } from "react";

export const FavouriteContext = createContext();
const API_URL = import.meta.env.VITE_Node_Api_Url;

export const FavouriteProvider = ({ children }) => {
    const { user } = useContext(AuthContext); // Get logged-in user
    const [favourites, setFavourites] = useState([]);
    const [loading, setLoading] = useState(false);

    // Fetch favourites for the logged-in user
    const fetchFavourites = async () => {
        if (!user?._id) {
            console.warn("No user logged in, skipping favourites fetch.");
            return;
        }
        setLoading(true);
        try {
            const res = await axios.get(`${API_URL}/favdesign/${user._id}`, {
                withCredentials: true,
            });
            setFavourites(res.data.designs || []);
        } catch (err) {
            console.error("Error fetching favourites:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (user?._id) {
            fetchFavourites();
        }
        else{
            fetchFavourites([]);
        }
    }, [user]);

    // Add a new favourite
    // const addFavourite = async (formData) => {
    //     if (!user?._id) return;
    //     try {
    //         const res = await axios.post(`${API_URL}/favdesign`, formData, {
    //             withCredentials: true,
    //             headers: { "Content-Type": "multipart/form-data" },
    //         });
    //         setFavourites((prev) => [...prev, res.data.design]);
    //     } catch (err) {
    //         console.error("Error adding favourite:", err);
    //     }
    // };

    // Delete a favourite
    const deleteFavourite = async (id) => {
        try {
            await axios.delete(`${API_URL}/favdesign/${id}`, {
                withCredentials: true,
            });
            setFavourites((prev) => prev.filter((fav) => fav._id !== id));
        } catch (err) {
            console.error("Error deleting favourite:", err);
        }
    };

    return (
        <FavouriteContext.Provider
            value={{
                favourites,
                loading,
                fetchFavourites,
                // addFavourite,
                deleteFavourite,
            }}
        >
            {children}
        </FavouriteContext.Provider>
    );
};


export default FavouriteProvider;