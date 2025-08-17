import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ProductProvider } from './contextApi/ProductContext.jsx'
import { AuthProvider } from './contextApi/AuthContext.jsx'
import GalleryProvider, { GalleryContext } from './contextApi/GalleryContext.jsx'
import FavouriteProvider from './contextApi/FavouriteContext.jsx'
import CartProvider from './contextApi/CartContext.jsx'
import { ReviewProvider } from './contextApi/ReviewsContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <AuthProvider>
        <ReviewProvider>
          <CartProvider>
            <GalleryProvider>
              <ProductProvider>
                <FavouriteProvider>
                  <App />
                </FavouriteProvider>
              </ProductProvider>
            </GalleryProvider>
          </CartProvider>
        </ReviewProvider>
      </AuthProvider>
    </StrictMode>
  </BrowserRouter >
)
