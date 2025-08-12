import React from 'react';
import Title from '../../components/Title';

const ListProducts = () => {
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
                            <th className='py-3 px-4 text-gray-800 font-medium'>Name</th>
                            <th className='py-3 px-4 text-gray-800 font-medium max-sm:hidden'>Image</th>
                            <th className='py-3 px-4 text-gray-800 font-medium'>Category</th>
                            <th className='py-3 px-4 text-gray-800 font-medium text-center'>Actions</th>
                        </tr>
                    </thead>
                    <tbody className='text-sm'>
                        <tr>
                            <td colSpan={4} className='text-center py-4 text-gray-600'>
                                Loading...
                            </td>
                        </tr>

                        {/* Example static product row */}
                        <tr>
                            <td className='py-3 px-4 text-gray-700 border-t border-gray-300'>
                                Example Product
                            </td>

                            <td className='py-3 px-4 text-gray-700 border-t border-gray-300 max-sm:hidden'>
                                <img
                                    src="https://via.placeholder.com/50"
                                    alt="Example Product"
                                    className="h-12 w-12 object-cover rounded"
                                />
                            </td>

                            <td className='py-3 px-4 text-gray-700 border-t border-gray-300'>
                                Category Name
                            </td>

                            <td className='py-3 px-4 border-t border-gray-300 text-sm text-center'>
                                <button
                                    className="bg-green-400 hover:bg-green-500 text-white px-3 py-1 rounded mr-2"
                                >
                                    Update
                                </button>
                                <button
                                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>

                        {/* More static rows can go here */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListProducts;
