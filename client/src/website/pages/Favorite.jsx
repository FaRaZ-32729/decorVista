import React, { useState } from "react";
import HeroSection from "../components/HeroSection";

const Favorite = () => {
  const [activeTab, setActiveTab] = useState("gallery");
  const [favorites, setFavorites] = useState({});

  const galleryItems = [
    {
      src: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
      alt: "Interior Design 1",
    },
    {
      src: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80",
      alt: "Interior Design 2",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1661595245288-65d1430d0d13?auto=format&fit=crop&w=800&q=80",
      alt: "Interior Design 3",
    },
    {
      src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
      alt: "Interior Design 4",
    },
    {
      src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
      alt: "Interior Design 5",
    },
    {
      src: "https://images.unsplash.com/photo-1663811396760-b6c84fa45ee9?auto=format&fit=crop&w=800&q=80",
      alt: "Interior Design 6",
    },
    {
      src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      alt: "Interior Design 7",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1675616563084-63d1f129623d?auto=format&fit=crop&w=800&q=80",
      alt: "Interior Design 8",
    },
    {
      src: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800&q=80",
      alt: "Interior Design 9",
    },
    {
      src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
      alt: "Interior Design 10",
    },
    {
      src: "https://images.unsplash.com/photo-1657524398377-567034729507?auto=format&fit=crop&w=800&q=80",
      alt: "Interior Design 11",
    },
    {
      src: "https://images.unsplash.com/photo-1586105251261-72a756497a11?auto=format&fit=crop&w=800&q=80",
      alt: "Interior Design 12",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1683917067988-1b0323c3b574?auto=format&fit=crop&w=800&q=80",
      alt: "Interior Design 13",
    },
    {
      src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
      alt: "Interior Design 14",
    },
    {
      src: "https://images.unsplash.com/photo-1599327286062-40b0a7f2b305?auto=format&fit=crop&w=800&q=80",
      alt: "Interior Design 15",
    },
    {
      src: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80",
      alt: "Interior Design 15",
    },
    {
      src: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800&q=80",
      alt: "Interior Design 16",
    },
    {
      src: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=800&q=80",
      alt: "Interior Design 17",
    },
    {
      src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
      alt: "Interior Design 18",
    },
    {
      src: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=800&q=80",
      alt: "Interior Design 19",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1670360414483-64e6d9ba9038?auto=format&fit=crop&w=800&q=80",
      alt: "Interior Design 20",
    },
  ];

  const products = [
    {
      src: "assets/images/product_1.png",
      name: "Quartz Belt Watch",
      price: "$150.00",
    },
    {
      src: "assets/images/product_2.png",
      name: "Quartz Belt Watch",
      price: "$150.00",
    },
    {
      src: "assets/images/product_3.png",
      name: "Quartz Belt Watch",
      price: "$150.00",
    },
    {
      src: "assets/images/product_4.png",
      name: "Quartz Belt Watch",
      price: "$150.00",
    },
  ];

  const toggleFavorite = (index) => {
    setFavorites((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <>
    <HeroSection title={'Favorite Page'} />
      <section className="favorites-section">
        <div className="tabs">
          <button
            className={`tab-btn ${activeTab === "gallery" ? "active" : ""}`}
            onClick={() => setActiveTab("gallery")}
          >
            Gallery
          </button>
          <button
            className={`tab-btn ${activeTab === "products" ? "active" : ""}`}
            onClick={() => setActiveTab("products")}
          >
            Products
          </button>
        </div>

        {/* Gallery */}
        {activeTab === "gallery" && (
          <div className="tab-content active" id="gallery">
            <div className="gallery-container">
              {galleryItems.map((item, index) => (
                <div className="gallery-item" key={index}>
                  <img src={item.src} alt={item.alt} />
                  <span
                    className="fav-icon"
                    onClick={() => toggleFavorite(index)}
                  >
                    <i
                      className={
                        favorites[index]
                          ? "fa-solid fa-heart"
                          : "fa-regular fa-heart"
                      }
                    ></i>
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Products */}
        {activeTab === "products" && (
          <div className="tab-content active" id="products">
            <div className="products">
              <div className="products-row">
                {products.map((product, index) => (
                  <div className="col-lg-3" key={index}>
                    <div className="single_product_item">
                      <img src={product.src} width="100%" alt={product.name} />
                      <div className="single_product_text">
                        <h4>{product.name}</h4>
                        <h3>{product.price}</h3>
                        <a href="/" className="add_cart">
                          + add to cart<i className="ti-heart"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Favorite;
