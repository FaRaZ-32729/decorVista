import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Title from '../components/Title';
import { ProductContext } from '../../contextApi/ProductContext';

const API_URL = import.meta.env.VITE_Node_Api_Url;

const UpdateProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [image, setImage] = useState(null);
    const { fetchProducts } = useContext(ProductContext);
    const [productData, setProductData] = useState({
        name: "",
        category: "",
        brand: "",
        price: "",
        description: "",
        image: ""
    });

    // Fetch product data
    useEffect(() => {
        axios.get(`${API_URL}/product/${id}`)
            .then(res => setProductData(res.data.product))
            .catch(() => toast.error("Failed to load product"));
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name", productData.name);
        formData.append("category", productData.category);
        formData.append("brand", productData.brand);
        formData.append("price", productData.price);
        formData.append("description", productData.description);
        if (image) {
            formData.append("image", image); // Only append if updated
        }

        try {
            await axios.put(`${API_URL}/product/${id}`, formData, {
                headers: { "Content-Type": "multipart/form-data" }
            });
            toast.success("Product updated successfully");
            navigate("/admin/all-products");
            fetchProducts();
        } catch (error) {
            toast.error("Failed to update product");
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Title align="left" title="Update Product" subTitle="Edit the product details" />

                {/* Image Upload */}
                <p className='text-gray-800 mt-10'>Product Image</p>
                <div className='my-2'>
                    <label htmlFor="productImage">
                        <img
                            className='h-32 w-32 object-contain border border-gray-300 rounded cursor-pointer'
                            src={image ? URL.createObjectURL(image) : `${API_URL}${productData.image}`}
                            alt="Product"
                        />
                        <input
                            type="file"
                            accept="image/*"
                            id="productImage"
                            hidden
                            onChange={e => setImage(e.target.files[0])}
                        />
                    </label>
                </div>

                {/* Product Name */}
                <div className="mt-4">
                    <p className="text-gray-800">Product Name</p>
                    <input
                        type="text"
                        placeholder="Enter product name"
                        className="border border-gray-300 rounded p-2 w-full mt-1"
                        value={productData.name}
                        onChange={e => setProductData({ ...productData, name: e.target.value })}
                    />
                </div>

                {/* Brand */}
                <div className="mt-4">
                    <p className="text-gray-800">Brand</p>
                    <input
                        type="text"
                        placeholder="Enter brand name"
                        className="border border-gray-300 rounded p-2 w-full mt-1"
                        value={productData.brand}
                        onChange={e => setProductData({ ...productData, brand: e.target.value })}
                    />
                </div>

                {/* Price */}
                <div className="mt-4">
                    <p className="text-gray-800">Price</p>
                    <input
                        type="number"
                        placeholder="Enter product price"
                        className="border border-gray-300 rounded p-2 w-full mt-1"
                        value={productData.price}
                        onChange={e => setProductData({ ...productData, price: e.target.value })}
                    />
                </div>

                {/* Detailed Description */}
                <div className="mt-4">
                    <p className="text-gray-800">Detailed Description</p>
                    <textarea
                        rows={4}
                        placeholder="Enter detailed description"
                        className="border border-gray-300 rounded p-2 w-full mt-1"
                        value={productData.description}
                        onChange={e => setProductData({ ...productData, description: e.target.value })}
                    ></textarea>
                </div>

                {/* Category */}
                <div className="mt-4">
                    <p className="text-gray-800">Category</p>
                    <input
                        type="text"
                        placeholder="e.g., Men, Women, Kids"
                        className="border border-gray-300 rounded p-2 w-full mt-1"
                        value={productData.category}
                        onChange={e => setProductData({ ...productData, category: e.target.value })}
                    />
                </div>

                <button
                    type="submit"
                    className='bg-green-600 text-white px-8 py-2 rounded mt-8 mb-20 cursor-pointer'
                >
                    Update Product
                </button>
            </form>
        </div>
    );
};

export default UpdateProduct;
