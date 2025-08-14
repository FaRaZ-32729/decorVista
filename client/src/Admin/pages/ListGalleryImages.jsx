import React, { useContext } from "react";
import Title from "../components/Title";
import { GalleryContext } from "../../contextApi/GalleryContext";
import { useEffect } from "react";

const API_URL = import.meta.env.VITE_Node_Api_Url;

const ListGalleryImages = () => {
    const { gallery, loading, deleteImage, fetchGallery } = useContext(GalleryContext);
    useEffect(() => {
        fetchGallery();
    }, []);
    return (
        <div>
            <Title align="left" title="Gallery Images" subTitle="View and manage gallery images" />

            <div className="w-full max-w-3xl text-left border border-gray-300 rounded-lg max-h-80 overflow-y-scroll mt-3">
                <table className="w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="py-3 px-4 max-sm:hidden">Image</th>
                            <th className="py-3 px-4">Category</th>
                            <th className="py-3 px-4">Theme</th>
                            <th className="py-3 px-4">Color Scheme</th>
                            <th className="py-3 px-4 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            <tr>
                                <td colSpan={5} className="text-center py-4">Loading...</td>
                            </tr>
                        ) : gallery.length === 0 ? (
                            <tr>
                                <td colSpan={5} className="text-center py-4">No Images Found</td>
                            </tr>
                        ) : (
                            gallery.map(item => (
                                <tr key={item._id}>
                                    <td className="py-3 px-4 border-t max-sm:hidden">
                                        <img
                                            src={`${API_URL}${item.image}`}
                                            alt="gallery"
                                            className="h-12 w-12 object-cover rounded"
                                        />
                                    </td>
                                    <td className="py-3 px-4 border-t">{item.category}</td>
                                    <td className="py-3 px-4 border-t">{item.theme}</td>
                                    <td className="py-3 px-4 border-t">{item.colorScheme}</td>
                                    <td className="py-3 px-4 border-t text-center">
                                        <button
                                            onClick={() => deleteImage(item._id)}
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

export default ListGalleryImages;
