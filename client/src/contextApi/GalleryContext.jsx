import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const API_URL = import.meta.env.VITE_Node_Api_Url;

export const GalleryContext = createContext();

export const GalleryProvider = ({ children }) => {
    const [gallery, setGallery] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchGallery = async () => {
        try {
            const res = await axios.get(`${API_URL}/gallrey/`, { withCredentials: true });
            setGallery(res.data.designs);
        } catch (error) {
            toast.error("Failed to fetch gallery images");
        } finally {
            setLoading(false);
        }
    };

    const deleteImage = async (id) => {
        try {
            await axios.delete(`${API_URL}/gallrey/${id}`, { withCredentials: true });
            toast.success("Image deleted");
            fetchGallery();
        } catch (error) {
            toast.error("Failed to delete image");
        }
    };

    useEffect(() => {
        fetchGallery();
    }, []);

    return (
        <GalleryContext.Provider value={{ gallery, loading, fetchGallery, deleteImage }}>
            {children}
        </GalleryContext.Provider>
    );
};

export default GalleryProvider;