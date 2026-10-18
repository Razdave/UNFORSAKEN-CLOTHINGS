import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'love-bled-death-lost-shirt',
    handle: 'love-bled-death-lost-boxy-short-sleeve-button-front-shirt',
    title: '"LOVE BLED. DEATH LOST." Boxy Short Sleeve Button-Front Shirt',
    subtitle: 'Washed Twill Cotton Boxy Button Down',
    price: 64.99,
    originalPrice: 80.00,
    isNew: true,
    isBestSeller: false,
    category: 'tees',
    collections: ['new-arrivals', 'all'],
    primaryImage: '/src/assets/images/product_under_god_tee_1792353953894.jpg',
    secondaryImage: '/src/assets/images/product_lamb_of_god_tee_1792353953183.jpg',
    gallery: [
      '/src/assets/images/product_under_god_tee_1792353953894.jpg',
      '/src/assets/images/product_lamb_of_god_tee_1792353953183.jpg',
      '/src/assets/images/campaign_ambassador_lifestyle_1792353908443.jpg'
    ],
    description: 'A statement button-front silhouette engineered with relaxed drop shoulders, custom resin buttons, and our high-contrast "LOVE BLED. DEATH LOST." typographic layout across the back.',
    scriptureReference: 'Colossians 2:15',
    scriptureVerse: 'He disarmed the rulers and authorities and put them to open shame, by triumphing over them in him.',
    details: [
      '240 GSM washed cotton twill',
      'Camp collar relaxed box cut',
      'Custom engraved buttons with reinforced cross-stitching',
      'Chest patch pocket with hidden scripture embroidery'
    ],
    availableSizes: ['S', 'M', 'L', 'XL', '2XL'],
    availableColors: [
      { name: 'Vintage Black', hex: '#1C1C1E' },
      { name: 'Raw Bone', hex: '#EBE7DE' }
    ],
    rating: 4.95,
    reviewCount: 34
  },
  {
    id: 'never-alone-sweatpants',
    handle: 'never-alone-essential-straight-leg-sweatpants',
    title: '"NEVER ALONE" Essential Straight-Leg Sweatpants',
    subtitle: '450GSM Heavyweight Fleece Lounge Pant',
    price: 54.99,
    originalPrice: 80.00,
    isNew: true,
    isBestSeller: true,
    category: 'accessories',
    collections: ['new-arrivals', 'community-favorites', 'all'],
    primaryImage: '/src/assets/images/campaign_ambassador_lifestyle_1792353908443.jpg',
    secondaryImage: '/src/assets/images/hero_unforsaken_campaign_1792353905878.jpg',
    gallery: [
      '/src/assets/images/campaign_ambassador_lifestyle_1792353908443.jpg',
      '/src/assets/images/hero_unforsaken_campaign_1792353905878.jpg'
    ],
    description: 'Straight-leg open hem sweatpants cut from custom-milled 450GSM loopback fleece. Deep slash pockets, thick elastic waistband with internal cotton drawstring, and clean NEVER ALONE tonal branding.',
    scriptureReference: 'Deuteronomy 31:6',
    scriptureVerse: 'He will never leave you nor forsake you.',
    details: [
      '450 GSM heavyweight cotton fleece',
      'Open straight leg hem with stacking drape',
      'Pre-shrunk vintage wash',
      'Deep side pockets and single rear welt pocket'
    ],
    availableSizes: ['S', 'M', 'L', 'XL', '2XL'],
    availableColors: [
      { name: 'Washed Charcoal', hex: '#2A2A2C' },
      { name: 'Bone White', hex: '#E7E3D8' }
    ],
    rating: 4.92,
    reviewCount: 58
  },
  {
    id: 'never-alone-fleece-hoodie',
    handle: 'never-alone-oversized-fleece-hoodie',
    title: '"NEVER ALONE" Oversized Fleece Hoodie',
    subtitle: '480GSM Thermal Brushed Fleece',
    price: 69.99,
    originalPrice: 86.00,
    isNew: false,
    isBestSeller: true,
    category: 'hoodies',
    collections: ['community-favorites', 'new-arrivals', 'all'],
    primaryImage: '/src/assets/images/product_fear_god_hoodie_pack_1792353952667.jpg',
    secondaryImage: '/src/assets/images/campaign_fear_god_hoodie_1792353907227.jpg',
    gallery: [
      '/src/assets/images/product_fear_god_hoodie_pack_1792353952667.jpg',
      '/src/assets/images/campaign_fear_god_hoodie_1792353907227.jpg'
    ],
    description: 'Our most requested hoodie. Built from 480GSM heavy loopback fleece with an intentional boxy drop shoulder, double-layered hood without strings, and our signature NEVER ALONE back graphic.',
    scriptureReference: 'Hebrews 13:5',
    scriptureVerse: 'I will never leave you nor forsake you.',
    details: [
      '480 GSM ultra-heavyweight loopback fleece',
      'Stringless double-layered hood',
      'Bar-tack reinforced kangaroo pocket',
      'Oversized boxy streetwear drape'
    ],
    availableSizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
    availableColors: [
      { name: 'Washed Black', hex: '#1C1C1E' },
      { name: 'Olive Green', hex: '#4A5340' }
    ],
    rating: 4.96,
    reviewCount: 142
  },
  {
    id: 'never-alone-tee',
    handle: 'never-alone-pure-cotton-tee',
    title: '"NEVER ALONE" Pure Cotton Tee',
    subtitle: '260GSM Vintage Combed Cotton',
    price: 34.99,
    originalPrice: 51.00,
    isNew: true,
    isBestSeller: true,
    category: 'tees',
    collections: ['new-arrivals', 'community-favorites', 'all'],
    primaryImage: '/src/assets/images/product_never_alone_tee_1792353952966.jpg',
    secondaryImage: '/src/assets/images/hero_unforsaken_campaign_1792353905878.jpg',
    gallery: [
      '/src/assets/images/product_never_alone_tee_1792353952966.jpg',
      '/src/assets/images/hero_unforsaken_campaign_1792353905878.jpg'
    ],
    description: 'A constant reminder of God’s steadfast presence. Vintage enzyme washed for broken-in comfort with a tight 1.25" ribbed collar that holds shape wash after wash.',
    scriptureReference: 'Matthew 28:20',
    scriptureVerse: 'And behold, I am with you always, to the end of the age.',
    details: [
      '260 GSM 100% combed cotton jersey',
      'Heavy 1.25" ribbed collar',
      'Enzyme pigment dyed finish',
      'Relaxed vintage fit'
    ],
    availableSizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
    availableColors: [
      { name: 'Vintage Black', hex: '#212121' },
      { name: 'Off White', hex: '#F0EEE8' }
    ],
    rating: 4.94,
    reviewCount: 96
  },
  {
    id: 'under-god-tee',
    handle: 'under-god-snow-washed-tee',
    title: '"UNDER GOD" Snow Washed Tee',
    subtitle: 'Hand Snow Washed Heavyweight Graphic Tee',
    price: 44.99,
    originalPrice: 60.00,
    isNew: true,
    isBestSeller: false,
    category: 'tees',
    collections: ['new-arrivals', 'all'],
    primaryImage: '/src/assets/images/product_under_god_tee_1792353953894.jpg',
    secondaryImage: '/src/assets/images/campaign_ambassador_lifestyle_1792353908443.jpg',
    gallery: [
      '/src/assets/images/product_under_god_tee_1792353953894.jpg',
      '/src/assets/images/campaign_ambassador_lifestyle_1792353908443.jpg'
    ],
    description: 'One life surrendered under God. Hand snow washed with archival distressed collegiate type across the chest.',
    scriptureReference: 'Psalm 33:12',
    scriptureVerse: 'Blessed is the nation whose God is the Lord.',
    details: [
      '250 GSM ring-spun cotton',
      'Hand-applied snow wash marble fade',
      'Reinforced shoulder seam tape',
      'Boxy streetwear proportion'
    ],
    availableSizes: ['S', 'M', 'L', 'XL', '2XL'],
    availableColors: [
      { name: 'Sage Green', hex: '#7C8A79' },
      { name: 'Washed Black', hex: '#242426' }
    ],
    rating: 4.89,
    reviewCount: 44
  },
  {
    id: 'celestial-tee',
    handle: 'celestial-snow-washed-tee',
    title: '"CELESTIAL" Snow Washed Tee',
    subtitle: 'Psalm 19 Heavens Declare Graphic Tee',
    price: 44.99,
    originalPrice: 60.00,
    isNew: true,
    isBestSeller: false,
    category: 'tees',
    collections: ['new-arrivals', 'all'],
    primaryImage: '/src/assets/images/product_lamb_of_god_tee_1792353953183.jpg',
    secondaryImage: '/src/assets/images/product_under_god_tee_1792353953894.jpg',
    gallery: [
      '/src/assets/images/product_lamb_of_god_tee_1792353953183.jpg',
      '/src/assets/images/product_under_god_tee_1792353953894.jpg'
    ],
    description: 'Reflecting the splendor of God declared in the cosmos. Hand-treated snow wash with minimalist celestial typography.',
    scriptureReference: 'Psalm 19:1',
    scriptureVerse: 'The heavens declare the glory of God; the skies proclaim the work of his hands.',
    details: [
      '260 GSM organic heavy cotton',
      'Acid snow wash marble finish',
      'Boxy drop-shoulder cut',
      'Pre-shrunk'
    ],
    availableSizes: ['S', 'M', 'L', 'XL', '2XL'],
    availableColors: [
      { name: 'Snow Wash Off-White', hex: '#EDE8DE' },
      { name: 'Midnight Navy', hex: '#1E2530' }
    ],
    rating: 4.91,
    reviewCount: 39
  },
  {
    id: 'god-is-bigger-hoodie',
    handle: 'god-is-bigger-than-what-youre-facing-oversized-fleece-hoodie',
    title: '"GOD IS BIGGER THAN WHAT YOU\'RE FACING" Oversized Fleece Hoodie',
    subtitle: '480GSM Heavy Thermal Drop Hoodie',
    price: 69.99,
    originalPrice: 86.00,
    isNew: true,
    isBestSeller: true,
    category: 'hoodies',
    collections: ['new-arrivals', 'community-favorites', 'all'],
    primaryImage: '/src/assets/images/campaign_fear_god_hoodie_1792353907227.jpg',
    secondaryImage: '/src/assets/images/product_fear_god_hoodie_pack_1792353952667.jpg',
    gallery: [
      '/src/assets/images/campaign_fear_god_hoodie_1792353907227.jpg',
      '/src/assets/images/product_fear_god_hoodie_pack_1792353952667.jpg'
    ],
    description: 'No matter the diagnosis, debt, struggle, or heartbreak — God is greater. 480GSM heavyweight fleece hoodie with high-density puff print statement lettering.',
    scriptureReference: '1 John 4:4',
    scriptureVerse: 'He who is in you is greater than he who is in the world.',
    details: [
      '480 GSM custom loopback fleece',
      'Double-ply structured hood',
      'Heavy-rib cuffs and hem',
      'True oversized fit'
    ],
    availableSizes: ['S', 'M', 'L', 'XL', '2XL'],
    availableColors: [
      { name: 'Washed Black', hex: '#1C1C1E' },
      { name: 'Vintage Olive', hex: '#4A5340' }
    ],
    rating: 4.97,
    reviewCount: 78
  },
  {
    id: 'the-highest-place-tee',
    handle: 'the-highest-place-oversized-tee',
    title: '"THE HIGHEST PLACE" Oversized Tee',
    subtitle: 'Philippians 2 Heavyweight Streetwear Tee',
    price: 44.99,
    originalPrice: 60.00,
    isNew: false,
    isBestSeller: true,
    category: 'tees',
    collections: ['community-favorites', 'all'],
    primaryImage: '/src/assets/images/product_never_alone_tee_1792353952966.jpg',
    secondaryImage: '/src/assets/images/product_under_god_tee_1792353953894.jpg',
    gallery: [
      '/src/assets/images/product_never_alone_tee_1792353952966.jpg',
      '/src/assets/images/product_under_god_tee_1792353953894.jpg'
    ],
    description: 'Therefore God exalted him to the highest place and gave him the name that is above every name. Heavyweight 280GSM cotton streetwear tee.',
    scriptureReference: 'Philippians 2:9',
    scriptureVerse: 'Therefore God exalted him to the highest place and gave him the name that is above every name.',
    details: [
      '280 GSM premium heavyweight cotton',
      'Drop shoulder box cut',
      'High-density screen print',
      'Pre-shrunk'
    ],
    availableSizes: ['S', 'M', 'L', 'XL', '2XL'],
    availableColors: [
      { name: 'Washed Charcoal', hex: '#262628' },
      { name: 'Bone White', hex: '#EDE8DF' }
    ],
    rating: 4.92,
    reviewCount: 54
  },
  {
    id: 'lamb-of-god-tee',
    handle: 'lamb-of-god-pure-cotton-tee',
    title: '"LAMB OF GOD" Pure Cotton Tee',
    subtitle: '260GSM Clean Typography Tee',
    price: 34.99,
    originalPrice: 51.00,
    isNew: false,
    isBestSeller: true,
    category: 'tees',
    collections: ['community-favorites', 'all'],
    primaryImage: '/src/assets/images/product_lamb_of_god_tee_1792353953183.jpg',
    secondaryImage: '/src/assets/images/hero_unforsaken_campaign_1792353905878.jpg',
    gallery: [
      '/src/assets/images/product_lamb_of_god_tee_1792353953183.jpg',
      '/src/assets/images/hero_unforsaken_campaign_1792353905878.jpg'
    ],
    description: 'Understated, powerful, uncompromising. Behold the Lamb of God who takes away the sin of the world.',
    scriptureReference: 'John 1:29',
    scriptureVerse: 'Behold, the Lamb of God, who takes away the sin of the world!',
    details: [
      '260 GSM combed pure cotton',
      'Clean high-kerning typography print',
      'Drop-shoulder boxy silhouette',
      'Tagless neck print'
    ],
    availableSizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
    availableColors: [
      { name: 'Bone White', hex: '#F0ECE3' },
      { name: 'Vintage Black', hex: '#1C1C1E' }
    ],
    rating: 4.93,
    reviewCount: 71
  },
  {
    id: 'jesus-saves-tee',
    handle: 'jesus-saves-pure-cotton-tee',
    title: '"JESUS SAVES" Pure Cotton Tee',
    subtitle: 'Essential Heavyweight Streetwear Graphic Tee',
    price: 34.99,
    originalPrice: 51.00,
    isNew: false,
    isBestSeller: true,
    category: 'tees',
    collections: ['community-favorites', 'all'],
    primaryImage: '/src/assets/images/product_lamb_of_god_tee_1792353953183.jpg',
    secondaryImage: '/src/assets/images/product_never_alone_tee_1792353952966.jpg',
    gallery: [
      '/src/assets/images/product_lamb_of_god_tee_1792353953183.jpg',
      '/src/assets/images/product_never_alone_tee_1792353952966.jpg'
    ],
    description: 'The cornerstone of our faith. Bold, unapologetic, and created to open conversations everywhere you go.',
    scriptureReference: 'Romans 10:9',
    scriptureVerse: 'If you confess with your mouth that Jesus is Lord, you will be saved.',
    details: [
      '260 GSM pure combed cotton',
      'Thick ribbed collar',
      'Enzyme pigment dyed',
      'Oversized fit'
    ],
    availableSizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
    availableColors: [
      { name: 'Raw Bone', hex: '#EBE7DD' },
      { name: 'Vintage Black', hex: '#1C1C1E' }
    ],
    rating: 4.97,
    reviewCount: 118
  },
  {
    id: 'fear-god-tee',
    handle: 'fear-god-pure-cotton-tee',
    title: '"FEAR GOD" Pure Cotton Tee',
    subtitle: '@THEJONMOODY Featured Tee · 260GSM Cotton',
    price: 29.99,
    originalPrice: 43.00,
    isNew: false,
    isBestSeller: true,
    category: 'tees',
    collections: ['community-favorites', 'all'],
    primaryImage: '/src/assets/images/product_never_alone_tee_1792353952966.jpg',
    secondaryImage: '/src/assets/images/campaign_fear_god_hoodie_1792353907227.jpg',
    gallery: [
      '/src/assets/images/product_never_alone_tee_1792353952966.jpg',
      '/src/assets/images/campaign_fear_god_hoodie_1792353907227.jpg'
    ],
    description: 'The fear of the Lord is the beginning of wisdom. Our signature FEAR GOD graphic printed on heavy 260GSM combed cotton.',
    scriptureReference: 'Proverbs 9:10',
    scriptureVerse: 'The fear of the Lord is the beginning of wisdom.',
    details: [
      '260 GSM carded heavyweight cotton',
      'Direct-to-garment distress graphic print',
      '1.25" high-density rib collar',
      'Washed vintage finish'
    ],
    availableSizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
    availableColors: [
      { name: 'Washed Black', hex: '#1C1C1E' },
      { name: 'Olive Green', hex: '#48523E' }
    ],
    rating: 4.98,
    reviewCount: 165
  },
  {
    id: 'lifting-club-tee',
    handle: 'lifting-club-pure-cotton-tee',
    title: '"LIFTING CLUB" Pure Cotton Tee',
    subtitle: 'The Official UNFORSAKEN Lifting Club Tee',
    price: 29.99,
    originalPrice: 43.00,
    isNew: true,
    isBestSeller: true,
    category: 'tees',
    collections: ['new-arrivals', 'community-favorites', 'all'],
    primaryImage: '/src/assets/images/product_under_god_tee_1792353953894.jpg',
    secondaryImage: '/src/assets/images/product_never_alone_tee_1792353952966.jpg',
    gallery: [
      '/src/assets/images/product_under_god_tee_1792353953894.jpg',
      '/src/assets/images/product_never_alone_tee_1792353952966.jpg'
    ],
    description: 'Discipline of the body, surrender of the soul. The official pump cover of Christian lifters and athletes worldwide.',
    scriptureReference: '1 Timothy 4:8',
    scriptureVerse: 'For physical training is of some value, but godliness has value for all things.',
    details: [
      '270 GSM heavyweight pump-cover cotton',
      'Boxy drop-shoulder cut designed for athletic builds',
      'High-contrast arch collegiate typography',
      'Double-stitch reinforced hems'
    ],
    availableSizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
    availableColors: [
      { name: 'Washed Black', hex: '#1C1C1E' },
      { name: 'Vintage Olive', hex: '#464E3D' }
    ],
    rating: 4.95,
    reviewCount: 84
  }
];
