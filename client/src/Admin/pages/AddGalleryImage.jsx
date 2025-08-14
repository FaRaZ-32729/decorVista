import React, { useState } from 'react';
import Title from '../components/Title';
import { IoMdCloudUpload } from "react-icons/io";
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const API_URL = import.meta.env.VITE_Node_Api_Url;

const AddGalleryImage = () => {
    const navigate = useNavigate();
    const [image, setImage] = useState(null);
    const [inputs, setInputs] = useState({
        category: '',
        theme: '',
        colorScheme: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!image) {
            toast.error("Please upload an image");
            return;
        }

        try {
            const formData = new FormData();
            formData.append("image", image);
            formData.append("category", inputs.category);
            formData.append("theme", inputs.theme);
            formData.append("colorScheme", inputs.colorScheme);

            const res = await axios.post(`${API_URL}/gallrey/`, formData, {
                withCredentials: true,
                headers: { "Content-Type": "multipart/form-data" }
            });

            toast.success("Gallery image added successfully");
            setInputs({ category: '', theme: '', colorScheme: '' });
            setImage(null);
            navigate("/admin/list-gallery");
        } catch (error) {
            toast.error(error.response?.data?.message || "Error adding image");
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Title align="left" title="Add Gallery Image" subTitle="Upload a new design to the gallery." />

                {/* Image Upload */}
                <p className='text-gray-800 mt-10'>Gallery Image</p>
                <div className='my-2'>
                    <label htmlFor="galleryImage">
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
                            id="galleryImage"
                            hidden
                            onChange={(e) => setImage(e.target.files[0])}
                        />
                    </label>
                </div>

                {/* Category */}
                <div className="mt-4">
                    <p className="text-gray-800">Category</p>
                    <input
                        type="text"
                        placeholder="Enter category"
                        className="border border-gray-300 rounded p-2 w-full mt-1"
                        value={inputs.category}
                        onChange={(e) => setInputs({ ...inputs, category: e.target.value })}
                    />
                </div>

                {/* Theme */}
                <div className="mt-4">
                    <p className="text-gray-800">Theme</p>
                    <input
                        type="text"
                        placeholder="Enter theme"
                        className="border border-gray-300 rounded p-2 w-full mt-1"
                        value={inputs.theme}
                        onChange={(e) => setInputs({ ...inputs, theme: e.target.value })}
                    />
                </div>

                {/* Color Scheme */}
                <div className="mt-4">
                    <p className="text-gray-800">Color Scheme</p>
                    <input
                        type="text"
                        placeholder="Enter color scheme"
                        className="border border-gray-300 rounded p-2 w-full mt-1"
                        value={inputs.colorScheme}
                        onChange={(e) => setInputs({ ...inputs, colorScheme: e.target.value })}
                    />
                </div>

                <button
                    type="submit"
                    className='bg-blue-600 text-white px-8 py-2 rounded mt-8 mb-20 cursor-pointer'
                >
                    Add Image
                </button>
            </form>
        </div>
    );
};

export default AddGalleryImage;
