import React, { useEffect, useContext } from "react";
import HeroSection from "../components/HeroSection";
import { FavouriteContext } from "../../contextApi/FavouriteContext";

const API_URL = import.meta.env.VITE_Node_Api_Url;

const Favorite = () => {
  const { favourites, fetchFavourites, loading, deleteFavourite } = useContext(FavouriteContext);

  useEffect(() => {
    fetchFavourites();
  }, []);

  return (
    <>
      <HeroSection title={"Favorite Designs"} />
      <section className="favorites-section">
        {loading ? (
          <p className="text-center py-10">Loading favourites...</p>
        ) : favourites.length === 0 ? (
          <p className="text-center py-10">No favourite designs found.</p>
        ) : (
          <div className="gallery-container">
            {favourites.map((item) => (
              <div className="gallery-item" key={item._id}>
                <img
                  src={`${API_URL}${item.image}`}
                  alt={item.category || "Favourite Design"}
                />
                <span
                  className="fav-icon"
                  onClick={() => deleteFavourite(item._id)}
                >
                  <i className="fa-solid fa-heart" />
                </span>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default Favorite;
