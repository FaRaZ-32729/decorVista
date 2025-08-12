import React from 'react';
import Title from '../../components/Title';
import { IoMdCloudUpload } from "react-icons/io";

const AddProduct = () => {
    return (
        <div>
            <form>
                <Title
                    align="left"
                    title="Add Product"
                    subTitle="Start adding details to showcase your new clothing item."
                />

                {/* Image Upload */}
                <p className='text-gray-800 mt-10'>Product Image</p>
                <div className='my-2'>
                    <label htmlFor="productImage">
                        {/* <img
                            className='h-32 w-32 object-contain border border-gray-300 rounded cursor-pointer'
                            src="https://via.placeholder.com/150?text=Upload"
                            alt="Upload"
                        /> */}
                        <IoMdCloudUpload className='h-32 w-32 object-contain border border-gray-300 rounded cursor-pointer '/>
                        <input
                            type="file"
                            accept="image/*"
                            id="productImage"
                            hidden
                        />
                    </label>
                </div>

                {/* Product Name */}
                <div className="mt-6">
                    <p className="text-gray-800">Product Name</p>
                    <input
                        type="text"
                        placeholder="Enter product name"
                        className="border border-gray-300 rounded p-2 w-full mt-1"
                    />
                </div>

                {/* Small Description */}
                <div className="mt-4">
                    <p className="text-gray-800">Small Description</p>
                    <input
                        type="text"
                        placeholder="Enter a short description"
                        className="border border-gray-300 rounded p-2 w-full mt-1"
                    />
                </div>

                {/* Price */}
                <div className="mt-4">
                    <p className="text-gray-800">Price</p>
                    <input
                        type="number"
                        placeholder="Enter product price"
                        className="border border-gray-300 rounded p-2 w-full mt-1"
                    />
                </div>

                {/* Detailed Description */}
                <div className="mt-4">
                    <p className="text-gray-800">Detailed Description</p>
                    <textarea
                        rows={4}
                        placeholder="Enter detailed description"
                        className="border border-gray-300 rounded p-2 w-full mt-1"
                    ></textarea>
                </div>

                {/* Star Rating */}
                <div className="mt-4">
                    <p className="text-gray-800">Star Rating (out of 5)</p>
                    <input
                        type="number"
                        min={0}
                        max={5}
                        placeholder="0"
                        className="border border-gray-300 rounded p-2 w-24 mt-1"
                    />
                </div>

                {/* Reviews */}
                <div className="mt-4">
                    <p className="text-gray-800">Reviews (Number)</p>
                    <input
                        type="number"
                        placeholder="0"
                        className="border border-gray-300 rounded p-2 w-24 mt-1"
                    />
                </div>

                {/* Category */}
                <div className="mt-4">
                    <p className="text-gray-800">Category</p>
                    <input
                        type="text"
                        placeholder="e.g., Men, Women, Kids"
                        className="border border-gray-300 rounded p-2 w-full mt-1"
                    />
                </div>

                {/* Sizes */}
                <div className="mt-4">
                    <p className="text-gray-800">Available Sizes</p>
                    <div className="flex gap-4 flex-wrap text-gray-700 mt-1">
                        {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                            <label key={size} className="flex items-center gap-1">
                                <input type="checkbox" />
                                {size}
                            </label>
                        ))}
                    </div>
                </div>

                <button
                    type="button"
                    className='bg-blue-600 text-white px-8 py-2 rounded mt-8 mb-20 cursor-pointer'
                >
                    Add Product
                </button>
            </form>
        </div>
    );
};

export default AddProduct;
