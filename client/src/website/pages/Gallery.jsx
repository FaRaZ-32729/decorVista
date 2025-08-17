import React, { useContext, useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import { GalleryContext } from "../../contextApi/GalleryContext";
import { AuthContext } from "../../contextApi/AuthContext";
import axios from "axios";
import { toast } from "react-toastify";

const API_URL = import.meta.env.VITE_Node_Api_Url;

const Gallery = () => {
  const { gallery, loading, fetchGallery } = useContext(GalleryContext);
  const { user } = useContext(AuthContext);

  const [favouriteIds, setFavouriteIds] = useState([]);

  useEffect(() => {
    fetchGallery();
  }, []);

  const handleAddToFavourite = async (design) => {
    try {
      if (!user) {
        toast.error("Please login to add favourites");
        return;
      }

      if (favouriteIds.includes(design._id)) {
        toast.info("Already in favourites");
        return;
      }

      const formData = new FormData();
      formData.append("category", design.category || "");
      formData.append("theme", design.theme || "");
      formData.append("colorScheme", design.colorScheme || "");

      const response = await fetch(`${API_URL}${design.image}`);
      const blob = await response.blob();
      formData.append("image", blob, "design.jpg");

      await axios.post(`${API_URL}/favdesign`, formData, {
        withCredentials: true,
        headers: { "Content-Type": "multipart/form-data" },
      });

      // Add ID to local state so it doesn't get added again
      setFavouriteIds((prev) => [...prev, design._id]);

      toast.success("Added to favourites");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to add favourite");
    }
  };

  return (
    <>
      <HeroSection title={"Gallery Page"} />

      <div className="gallery-container">
        {loading ? (
          <p className="text-center py-10">Loading gallery...</p>
        ) : gallery.length === 0 ? (
          <p className="text-center py-10">No images found.</p>
        ) : (
          gallery.map((item) => (
            <div key={item._id} className="gallery-item">
              <img
                src={`${API_URL}${item.image}`}
                alt={item.category || "Gallery Image"}
              />
              <span
                className="fav-icon"
                onClick={() => handleAddToFavourite(item)}
              >
                <i
                  className={`fa-regular fa-heart ${favouriteIds.includes(item._id) ? "fa-solid fa-heart" : ""
                    }`}
                />
              </span>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Gallery;
