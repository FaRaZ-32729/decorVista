import React, { createContext, useState, useContext } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_Node_Api_Url;

export const ReviewContext = createContext();


export const ReviewProvider = ({ children }) => {
    // const [reviews, setReviews] = useState([]);
    const [reviews, setReviews] = useState({
        products: {},
        designers: {}
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    // Product Reviews
    const getProductReviews = async (productId) => {
        try {
            setLoading(true);
            const res = await axios.get(`${API_URL}/reviews/product/${productId}`);
            setReviews((prev) => ({
                ...prev,
                products: {
                    ...prev.products,
                    [productId]: res.data.reviews || []
                }
            }));
        } catch (err) {
            setError(err.response?.data?.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    // Designer Reviews
    const getDesignerReviews = async (designerId) => {
        try {
            setLoading(true);
            const res = await axios.get(`${API_URL}/reviews/designer/${designerId}`, { withCredentials: true });
            setReviews((prev) => ({
                ...prev,
                designers: {
                    ...prev.designers,
                    [designerId]: res.data.reviews || []
                }
            }));
        } catch (err) {
            setError(err.response?.data?.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    // Add Review
    const createReview = async ({ productId = null, designerId = null, comment, rating }) => {
        try {
            setLoading(true);
            const res = await axios.post(`${API_URL}/reviews/`, {
                productId,
                designerId,
                comment,
                rating,
            }, { withCredentials: true });

            setReviews((prev) => {
                if (productId) {
                    return {
                        ...prev,
                        products: {
                            ...prev.products,
                            [productId]: [res.data.review, ...(prev.products[productId] || [])]
                        }
                    };
                } else if (designerId) {
                    return {
                        ...prev,
                        designers: {
                            ...prev.designers,
                            [designerId]: [res.data.review, ...(prev.designers[designerId] || [])]
                        }
                    };
                }
                return prev;
            });

            return res.data.review;
        } catch (err) {
            setError(err.response?.data?.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };


    return (
        <ReviewContext.Provider
            value={{
                reviews,
                loading,
                error,
                getProductReviews,
                getDesignerReviews,
                createReview,
            }}
        >
            {children}
        </ReviewContext.Provider>
    );
};

