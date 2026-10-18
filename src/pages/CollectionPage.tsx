import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Filter, SlidersHorizontal, ArrowUpDown } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { Product } from '../types';

interface CollectionPageProps {
  onQuickView: (product: Product) => void;
}

export const CollectionPage: React.FC<CollectionPageProps> = ({ onQuickView }) => {
  const { category = 'all' } = useParams<{ category: string }>();

  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');
  const [selectedSize, setSelectedSize] = useState<string>('all');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Collection metadata
  const collectionMeta = useMemo(() => {
    switch (category) {
      case 'new-arrivals':
        return {
          title: 'NEW ARRIVALS',
          subtitle: 'The latest heavyweight garments, winter drops, and vintage washes representing faith boldly.',
          count: PRODUCTS.filter((p) => p.collections.includes('new-arrivals')).length
        };
      case 'community-favorites':
        return {
          title: 'COMMUNITY FAVORITES',
          subtitle: 'Our highest-rated, most requested Christian streetwear essentials worn by thousands worldwide.',
          count: PRODUCTS.filter((p) => p.collections.includes('community-favorites')).length
        };
      case 'hoodies':
        return {
          title: 'OVERSIZED FLEECE HOODIES',
          subtitle: 'Custom milled 480GSM loopback fleece with structured double hoods and drop shoulder silhouettes.',
          count: PRODUCTS.filter((p) => p.category === 'hoodies').length
        };
      case 'tees':
        return {
          title: 'PURE COTTON TEES',
          subtitle: 'Heavyweight 260GSM combed cotton and hand-snow-washed vintage boxy tees.',
          count: PRODUCTS.filter((p) => p.category === 'tees').length
        };
      default:
        return {
          title: 'ALL PRODUCTS',
          subtitle: 'Explore the entire UNFORSAKEN catalog. Premium heavyweight apparel rooted in 2 Corinthians 4:9.',
          count: PRODUCTS.length
        };
    }
  }, [category]);

  // Filter products
  const filteredProducts = useMemo(() => {
    let list = PRODUCTS.filter((p) => {
      if (category === 'all') return true;
      if (category === 'new-arrivals') return p.collections.includes('new-arrivals');
      if (category === 'community-favorites') return p.collections.includes('community-favorites');
      return p.category === category;
    });

    if (selectedSize !== 'all') {
      list = list.filter((p) => p.availableSizes.includes(selectedSize));
    }

    switch (sortBy) {
      case 'price-asc':
        return [...list].sort((a, b) => a.price - b.price);
      case 'price-desc':
        return [...list].sort((a, b) => b.price - a.price);
      case 'rating':
        return [...list].sort((a, b) => b.rating - a.rating);
      default:
        return list;
    }
  }, [category, selectedSize, sortBy]);

  const allSizes = ['all', 'S', 'M', 'L', 'XL', '2XL', '3XL'];

  return (
    <div className="w-full bg-white min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-400 mb-6">
          <Link to="/" className="hover:text-black">HOME</Link>
          <span>/</span>
          <Link to="/collection/all" className="hover:text-black">COLLECTIONS</Link>
          <span>/</span>
          <span className="text-black">{collectionMeta.title}</span>
        </nav>

        {/* Collection Header */}
        <div className="pb-8 border-b border-neutral-200">
          <span className="text-xs font-black tracking-[0.25em] uppercase text-neutral-400 block mb-1">
            OFFICIAL COLLECTION
          </span>
          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter text-[#111111]">
            {collectionMeta.title}
          </h1>
          <p className="text-sm text-neutral-600 mt-2 max-w-2xl leading-relaxed">
            {collectionMeta.subtitle}
          </p>
        </div>

        {/* Category Navigation Pills */}
        <div className="flex items-center gap-2 overflow-x-auto py-5 border-b border-neutral-100 scrollbar-none">
          {[
            { id: 'all', label: 'All Items' },
            { id: 'new-arrivals', label: 'New Arrivals' },
            { id: 'community-favorites', label: 'Community Favorites' },
            { id: 'hoodies', label: 'Hoodies' },
            { id: 'tees', label: 'Tees' }
          ].map((cat) => (
            <Link
              key={cat.id}
              to={`/collection/${cat.id}`}
              className={`px-4 py-2 text-xs font-black uppercase tracking-wider whitespace-nowrap shrink-0 transition-colors ${
                category === cat.id
                  ? 'bg-black text-white'
                  : 'bg-[#F6F5F2] text-neutral-700 hover:bg-neutral-200 hover:text-black'
              }`}
            >
              {cat.label}
            </Link>
          ))}
        </div>

        {/* Filter and Sort Toolbar */}
        <div className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-100">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
              SIZE FILTER:
            </span>
            <div className="flex items-center gap-1">
              {allSizes.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSelectedSize(s)}
                  className={`px-2.5 py-1 text-xs font-bold border transition-colors ${
                    selectedSize === s
                      ? 'border-black bg-black text-white'
                      : 'border-neutral-200 text-neutral-700 hover:border-black'
                  }`}
                >
                  {s.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Sort dropdown */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
              SORT BY:
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-3 py-1.5 bg-[#F6F5F2] border border-neutral-300 text-xs font-bold text-neutral-900 focus:outline-hidden focus:border-black cursor-pointer"
            >
              <option value="featured">Featured / Curated</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>

            <span className="text-xs font-bold uppercase text-neutral-400 pl-2">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'ITEM' : 'ITEMS'}
            </span>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 space-y-4">
            <p className="text-base font-bold text-black">No products match the selected filters.</p>
            <button
              onClick={() => setSelectedSize('all')}
              className="px-6 py-2.5 bg-black text-white text-xs font-bold uppercase tracking-wider hover:bg-neutral-800"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 pt-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={onQuickView}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
