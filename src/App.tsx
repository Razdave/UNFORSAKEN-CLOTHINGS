import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider, useCart } from './context/CartContext';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { SearchOverlay } from './components/SearchOverlay';
import { QuickViewModal } from './components/QuickViewModal';
import { HomePage } from './pages/HomePage';
import { CollectionPage } from './pages/CollectionPage';
import { ProductPage } from './pages/ProductPage';
import { AboutPage } from './pages/AboutPage';
import { AmbassadorPage } from './pages/AmbassadorPage';
import { GoodNewsPage } from './pages/GoodNewsPage';
import { GiftCardsPage } from './pages/GiftCardsPage';
import { PoliciesPage } from './pages/PoliciesPage';
import { Product } from './types';
import { Check, X } from 'lucide-react';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Global Toast for Add to Bag
function GlobalToast() {
  const { toastMessage, dismissToast, openCart } = useCart();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom duration-300">
      <div className="bg-black text-white px-5 py-3.5 shadow-2xl flex items-center gap-3 border border-neutral-700">
        <Check className="w-4 h-4 text-emerald-400 shrink-0" />
        <span className="text-xs font-bold uppercase tracking-wider">{toastMessage}</span>
        <button
          onClick={openCart}
          className="ml-2 text-xs font-black uppercase underline underline-offset-2 hover:text-neutral-300"
        >
          View Bag
        </button>
        <button
          onClick={dismissToast}
          className="ml-1 text-neutral-400 hover:text-white"
          aria-label="Dismiss toast"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}

function MainLayout() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#111111]">
      <ScrollToTop />

      {/* 1. Global Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Responsive Sticky Header */}
      <Header onOpenSearch={() => setSearchOpen(true)} />

      {/* 3. Main Content Routes */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage onQuickView={(p) => setQuickViewProduct(p)} />} />
          <Route path="/collection/:category" element={<CollectionPage onQuickView={(p) => setQuickViewProduct(p)} />} />
          <Route path="/product/:handle" element={<ProductPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/ambassador" element={<AmbassadorPage />} />
          <Route path="/the-good-news" element={<GoodNewsPage />} />
          <Route path="/gift-cards" element={<GiftCardsPage />} />
          <Route path="/policies/:type" element={<PoliciesPage />} />
          {/* Catch-all fallback */}
          <Route path="*" element={<HomePage onQuickView={(p) => setQuickViewProduct(p)} />} />
        </Routes>
      </main>

      {/* 4. Global Footer */}
      <Footer />

      {/* 5. Drawers and Overlays */}
      <CartDrawer />
      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <QuickViewModal product={quickViewProduct} onClose={() => setQuickViewProduct(null)} />
      <GlobalToast />
    </div>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <MainLayout />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
