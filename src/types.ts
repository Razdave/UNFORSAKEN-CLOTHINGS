export type ProductCategory = 'hoodies' | 'tees' | 'headwear' | 'accessories';

export interface ProductVariant {
  id: string;
  size: string;
  color: string;
  inStock: boolean;
  priceModifier?: number;
}

export interface Product {
  id: string;
  handle: string;
  title: string;
  subtitle?: string;
  price: number;
  originalPrice?: number;
  isNew?: boolean;
  isBestSeller?: boolean;
  category: ProductCategory;
  collections: ('new-arrivals' | 'community-favorites' | 'all')[];
  primaryImage: string;
  secondaryImage?: string;
  gallery: string[];
  description: string;
  scriptureReference?: string;
  scriptureVerse?: string;
  details: string[];
  availableSizes: string[];
  availableColors: { name: string; hex: string }[];
  rating: number;
  reviewCount: number;
}

export interface CartItem {
  id: string; // unique item instance id: product.id + size + color
  productId: string;
  product: Product;
  size: string;
  color: string;
  quantity: number;
  unitPrice: number;
}

export interface CustomerReview {
  id: string;
  author: string;
  rating: number;
  date: string;
  title: string;
  content: string;
  productTitle: string;
  verified: boolean;
  fitFeedback?: 'Runs True to Size' | 'Oversized Fit' | 'Slightly Snug';
}
