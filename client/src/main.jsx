import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ProductProvider } from './contextApi/ProductContext.jsx'
import { AuthProvider } from './contextApi/AuthContext.jsx'
import GalleryProvider, { GalleryContext } from './contextApi/GalleryContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <GalleryProvider>
        <ProductProvider>
          <AuthProvider>
            <App />
          </AuthProvider>
        </ProductProvider>
      </GalleryProvider>
    </StrictMode>
  </BrowserRouter>
)
