import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, User } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { MobileMenu } from './MobileMenu';

interface HeaderProps {
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenSearch }) => {
  const { totalItems, openCart } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'TEES', href: '/collection/tees' },
    { label: 'HOODIES', href: '/collection/hoodies' },
    { label: 'CREW NECKS', href: '/collection/crew-necks' },
    { label: 'SHORTS', href: '/collection/shorts' },
    { label: 'PANTS', href: '/collection/pants' },
    { label: 'THE “LIFTING CLUB”', href: '/collection/the-lifting-club' },
    { label: 'GIFT CARDS', href: '/gift-cards' },
    { label: 'ALL PRODUCTS', href: '/collection/all' },
    { label: 'AMBASSADOR PORTAL', href: '/ambassador' },
    { label: 'ABOUT', href: '/about' },
    { label: 'THE GOOD NEWS', href: '/the-good-news' }
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 bg-white ${
          isScrolled ? 'border-b border-neutral-200 shadow-xs py-3' : 'border-b border-neutral-200 py-4'
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-6">
            {/* Left: Mobile menu toggle & Brand Logo */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="xl:hidden p-1.5 text-neutral-800 hover:text-black focus:outline-hidden"
                aria-label="Open mobile menu"
              >
                <Menu className="w-6 h-6" />
              </button>

              <Link
                to="/"
                className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#151515] uppercase hover:opacity-90 transition-opacity whitespace-nowrap shrink-0"
              >
                UNFORSAKEN
              </Link>
            </div>

            {/* Middle: Desktop Navigation Links (exact menu items from shopunforsaken.com) */}
            <nav className="hidden xl:flex items-center gap-5 text-sm font-semibold tracking-wide uppercase text-neutral-800">
              {navLinks.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`hover:text-black transition-colors whitespace-nowrap shrink-0 ${
                    location.pathname === item.href ? 'text-black underline underline-offset-4' : 'text-neutral-700'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Right: Search, Account, Bag */}
            <div className="flex items-center gap-3 sm:gap-4 shrink-0">
              <button
                type="button"
                onClick={onOpenSearch}
                className="p-1.5 text-neutral-800 hover:text-black transition-colors"
                aria-label="Search catalog"
              >
                <Search className="w-5 h-5" />
              </button>

              <Link
                to="/ambassador"
                className="hidden sm:inline-flex p-1.5 text-neutral-800 hover:text-black transition-colors"
                title="Account / Ambassador"
                aria-label="Account or Ambassador login"
              >
                <User className="w-5 h-5" />
              </Link>

              <button
                type="button"
                onClick={openCart}
                className="relative flex items-center justify-center p-1.5 text-neutral-900 hover:text-black transition-colors focus:outline-hidden"
                aria-label={`Shopping Bag with ${totalItems} items`}
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] font-bold w-4.5 h-4.5 rounded-full flex items-center justify-center tabular-nums">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer with exact same categories */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onOpenSearch={onOpenSearch}
      />
    </>
  );
};
