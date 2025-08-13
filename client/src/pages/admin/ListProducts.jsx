import React, { useContext } from 'react';
import Title from '../../components/Title';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { ProductContext } from '../../contextApi/ProductContext';

const API_URL = import.meta.env.VITE_Node_Api_Url;

const ListProducts = () => {
    const { products, loading, fetchProducts } = useContext(ProductContext);
    const navigate = useNavigate();

    const deleteProduct = async (id) => {
        try {
            await axios.delete(`${API_URL}/product/${id}`);
            toast.success("Product deleted");
            fetchProducts(); 
        } catch (error) {
            console.error("Error deleting product:", error);
            toast.error("Failed to delete product");
        }
    };

    return (
        <div>
            <Title
                align="left"
                title="All Products"
                subTitle="Here you can see and update your products"
            />

            <div className="w-full max-w-3xl text-left border border-gray-300 rounded-lg max-h-80 overflow-y-scroll mt-3">
                <table className='w-full'>
                    <thead className='bg-gray-50'>
                        <tr>
                            <th className='py-3 px-4'>Name</th>
                            <th className='py-3 px-4 max-sm:hidden'>Image</th>
                            <th className='py-3 px-4'>Category</th>
                            <th className='py-3 px-4 text-center'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            <tr>
                                <td colSpan={4} className="text-center py-4">Loading...</td>
                            </tr>
                        ) : products.length === 0 ? (
                            <tr>
                                <td colSpan={4} className="text-center py-4">No Products Found</td>
                            </tr>
                        ) : (
                            products.map(product => (
                                <tr key={product._id}>
                                    <td className='py-3 px-4 border-t'>{product.name}</td>

                                    <td className='py-3 px-4 border-t max-sm:hidden'>
                                        <img
                                            src={`${API_URL}${product.image}`}
                                            alt={product.name}
                                            className="h-12 w-12 object-cover rounded"
                                        />
                                    </td>

                                    <td className='py-3 px-4 border-t'>{product.category}</td>

                                    <td className='py-3 px-4 border-t text-center'>
                                        <button
                                            onClick={() => navigate(`/update-product/${product._id}`)}
                                            className="bg-green-400 hover:bg-green-500 text-white px-3 py-1 rounded mr-2"
                                        >
                                            Update
                                        </button>
                                        <button
                                            onClick={() => deleteProduct(product._id)}
                                            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListProducts;
