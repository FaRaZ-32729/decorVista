import React, { useContext } from "react";
import HeroSection from "../components/HeroSection";
import { GalleryContext } from "../../contextApi/GalleryContext";
import { useEffect } from "react";
const API_URL = import.meta.env.VITE_Node_Api_Url;

const Gallery = () => {
  const { gallery, loading, fetchGallery } = useContext(GalleryContext);
  useEffect(() => {
    fetchGallery();
  }, []);

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
              <span className="fav-icon">
                <i className="fa-regular fa-heart" />
              </span>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Gallery;
