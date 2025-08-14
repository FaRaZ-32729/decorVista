import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "./AuthContext";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const { user } = useContext(AuthContext);
    const [cart, setCart] = useState({ items: [] });
    const [loading, setLoading] = useState(false);

    const API_URL = import.meta.env.VITE_Node_Api_Url;

    // Axios instance with credentials
    const axiosInstance = axios.create({
        baseURL: API_URL,
        withCredentials: true,
    });

    useEffect(() => {
        if (user) {
            fetchCart();
        } else {
            setCart({ items: [] });
        }
    }, [user]);

    // Get Cart
    const fetchCart = async () => {
        try {
            setLoading(true);
            const { data } = await axiosInstance.get("/cart");
            if (data.success) {
                setCart(data.cart);
            }
        } catch (error) {
            console.error("Error fetching cart:", error.response?.data || error.message);
        } finally {
            setLoading(false);
        }
    };

    // Add to Cart
    const addToCart = async (productId, quantity = 1) => {
        try {
            const { data } = await axiosInstance.post("/cart", { productId, quantity });
            if (data.success) {
                setCart(data.cart || { items: [] });
            }
        } catch (error) {
            console.error("Error adding to cart:", error.response?.data || error.message);
        }
    };

    // Update Cart Item
    const updateCartItem = async (productId, quantity) => {
        try {
            const { data } = await axiosInstance.put("/cart", { productId, quantity });
            if (data.success) {
                setCart(data.cart || { items: [] });
            }
        } catch (error) {
            console.error("Error updating cart item:", error.response?.data || error.message);
        }
    };

    // Remove Cart Item
    const removeCartItem = async (productId) => {
        try {
            const { data } = await axiosInstance.delete(`/cart/${productId}`);
            if (data.success) {
                setCart(data.cart || { items: [] });
            }
        } catch (error) {
            console.error("Error removing cart item:", error.response?.data || error.message);
        }
    };

    // Clear Cart
    const clearCart = async () => {
        try {
            const { data } = await axiosInstance.delete("/cart");
            if (data.success) {
                setCart({ items: [] });
            }
        } catch (error) {
            console.error("Error clearing cart:", error.response?.data || error.message);
        }
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                loading,
                fetchCart,
                addToCart,
                updateCartItem,
                removeCartItem,
                clearCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
