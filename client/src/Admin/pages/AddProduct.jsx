import React, { useContext, useState } from 'react';
import Title from '../components/Title';
import { IoMdCloudUpload } from "react-icons/io";
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { ProductContext } from '../../contextApi/ProductContext';

const API_URL = import.meta.env.VITE_Node_Api_Url;

const AddProduct = () => {
    const navigate = useNavigate();
    const { fetchProducts } = useContext(ProductContext);
    const [image, setImage] = useState(null);
    const [inputs, setInputs] = useState({
        name: '',
        category: '',
        brand: '',
        price: '',
        description: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!image) {
            toast.error("Please upload a product image");
            return;
        }

        try {
            const formData = new FormData();
            formData.append("name", inputs.name);
            formData.append("category", inputs.category);
            formData.append("brand", inputs.brand);
            formData.append("price", inputs.price);
            formData.append("description", inputs.description);
            formData.append("image", image);

            const res = await axios.post(`${API_URL}/product`, formData, {
                headers: { "Content-Type": "multipart/form-data" }
            });

            toast.success(res.data.message);
            setInputs({ name: '', category: '', brand: '', price: '', description: '' });
            setImage(null);
            fetchProducts();
            navigate("/admin/all-products");
        } catch (error) {
            toast.error(error.response?.data?.message || "Error adding product");
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Title align="left" title="Add Product" subTitle="Start adding details to showcase your new item." />

                {/* Image Upload */}
                <p className='text-gray-800 mt-10'>Product Image</p>
                <div className='my-2'>
                    <label htmlFor="productImage">
                        {image ? (
                            <img
                                src={URL.createObjectURL(image)}
                                alt="Preview"
                                className='h-32 w-32 object-cover border border-gray-300 rounded'
                            />
                        ) : (
                            <IoMdCloudUpload className='h-32 w-32 object-contain border border-gray-300 rounded cursor-pointer' />
                        )}
                        <input
                            type="file"
                            accept="image/*"
                            id="productImage"
                            hidden
                            onChange={(e) => setImage(e.target.files[0])}
                        />
                    </label>
                </div>

                {/* Name */}
                <div className="mt-6">
                    <p className="text-gray-800">Product Name</p>
                    <input
                        type="text"
                        placeholder="Enter product name"
                        className="border border-gray-300 rounded p-2 w-full mt-1"
                        value={inputs.name}
                        onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
                    />
                </div>

                {/* Brand */}
                <div className="mt-4">
                    <p className="text-gray-800">Brand</p>
                    <input
                        type="text"
                        placeholder="Enter brand name"
                        className="border border-gray-300 rounded p-2 w-full mt-1"
                        value={inputs.brand}
                        onChange={(e) => setInputs({ ...inputs, brand: e.target.value })}
                    />
                </div>

                {/* Category */}
                <div className="mt-4">
                    <p className="text-gray-800">Category</p>
                    <input
                        type="text"
                        placeholder="e.g., home , office "
                        className="border border-gray-300 rounded p-2 w-full mt-1"
                        value={inputs.category}
                        onChange={(e) => setInputs({ ...inputs, category: e.target.value })}
                    />
                </div>

                {/* Price */}
                <div className="mt-4">
                    <p className="text-gray-800">Price</p>
                    <input
                        type="number"
                        placeholder="Enter product price"
                        className="border border-gray-300 rounded p-2 w-full mt-1"
                        value={inputs.price}
                        onChange={(e) => setInputs({ ...inputs, price: e.target.value })}
                    />
                </div>

                {/* Description */}
                <div className="mt-4">
                    <p className="text-gray-800">Detailed Description</p>
                    <textarea
                        rows={4}
                        placeholder="Enter detailed description"
                        className="border border-gray-300 rounded p-2 w-full mt-1"
                        value={inputs.description}
                        onChange={(e) => setInputs({ ...inputs, description: e.target.value })}
                    ></textarea>
                </div>

                <button

                    type="submit"
                    className='bg-blue-600 text-white px-8 py-2 rounded mt-8 mb-20 cursor-pointer'
                >
                    Add Product
                </button>
            </form>
        </div>
    );
};

export default AddProduct;
