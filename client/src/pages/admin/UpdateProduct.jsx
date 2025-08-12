import React from 'react';
import Title from '../../components/Title';

const UpdateProduct = () => {
    return (
        <div>
            <form>
                <Title align="left" title="Update Product" subTitle="Edit the product details" />

                {/* Image Upload */}
                <p className='text-gray-800 mt-10'>Product Image</p>
                <div className='my-2'>
                    <label htmlFor="productImage">
                        <img
                            className='h-32 w-32 object-contain border border-gray-300 rounded cursor-pointer'
                            src="https://via.placeholder.com/150?text=Product"
                            alt="Upload"
                        />
                        <input
                            type="file"
                            accept="image/*"
                            id="productImage"
                            hidden
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
                        defaultValue="Example Product"
                    />
                </div>

                {/* Small Description */}
                <div className="mt-4">
                    <p className="text-gray-800">Small Description</p>
                    <input
                        type="text"
                        placeholder="Enter a short description"
                        className="border border-gray-300 rounded p-2 w-full mt-1"
                        defaultValue="Short product description"
                    />
                </div>

                {/* Detailed Description */}
                <div className="mt-4">
                    <p className="text-gray-800">Detailed Description</p>
                    <textarea
                        rows={4}
                        placeholder="Enter detailed description"
                        className="border border-gray-300 rounded p-2 w-full mt-1"
                        defaultValue="This is a detailed product description."
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
                        defaultValue={4}
                    />
                </div>

                {/* Reviews */}
                <div className="mt-4">
                    <p className="text-gray-800">Reviews (Number)</p>
                    <input
                        type="number"
                        placeholder="0"
                        className="border border-gray-300 rounded p-2 w-24 mt-1"
                        defaultValue={23}
                    />
                </div>

                {/* Category */}
                <div className="mt-4">
                    <p className="text-gray-800">Category</p>
                    <input
                        type="text"
                        placeholder="e.g., Men, Women, Kids"
                        className="border border-gray-300 rounded p-2 w-full mt-1"
                        defaultValue="Men"
                    />
                </div>

                {/* Sizes */}
                <div className="mt-4">
                    <p className="text-gray-800">Available Sizes</p>
                    <div className="flex gap-4 flex-wrap text-gray-700 mt-1">
                        {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                            <label key={size} className="flex items-center gap-1">
                                <input type="checkbox" defaultChecked={size === 'M' || size === 'L'} />
                                {size}
                            </label>
                        ))}
                    </div>
                </div>

                <button type="submit" className='bg-green-600 text-white px-8 py-2 rounded mt-8 mb-20 cursor-pointer'>
                    Update Product
                </button>
            </form>
        </div>
    );
};

export default UpdateProduct;
