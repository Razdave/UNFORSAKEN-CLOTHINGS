import { CustomerReview } from '../types';

export const REVIEWS_SUMMARY = {
  averageRating: 4.9,
  totalReviews: 373,
  fiveStarPercentage: 94,
  recommendationRate: 98
};

export const CUSTOMER_REVIEWS: CustomerReview[] = [
  {
    id: 'rev-1',
    author: 'Caleb M.',
    rating: 5,
    date: '3 days ago',
    title: 'The best quality hoodie I own hands down',
    content: 'The weight on this Fear God hoodie is insane. I own hoodies from several luxury streetwear brands and this honestly beats them in fabric density and fit. More importantly, I’ve had 3 people at the gym ask me about the print and what it means. Best way to represent faith.',
    productTitle: 'FEAR GOD Oversized Fleece Hoodie',
    verified: true,
    fitFeedback: 'Oversized Fit'
  },
  {
    id: 'rev-2',
    author: 'Hannah R.',
    rating: 5,
    date: '1 week ago',
    title: 'Washed black tee is perfection',
    content: 'The collar does not bacon or stretch out! That’s the test for me. 260GSM pure cotton feels so sturdy yet soft. I wear the NEVER ALONE tee almost weekly. Constantly getting compliments from brothers and sisters at church.',
    productTitle: 'NEVER ALONE Pure Cotton Tee',
    verified: true,
    fitFeedback: 'Runs True to Size'
  },
  {
    id: 'rev-3',
    author: 'Marcus D.',
    rating: 5,
    date: '2 weeks ago',
    title: 'Carson and the team killed this brand',
    content: 'Finding Christian apparel that actually feels like modern streetwear instead of cheesy graphics used to be impossible. UNFORSAKEN is the real deal. The 2 Cor 4:9 message hits home personally. Shipping was fast too.',
    productTitle: 'LAMB OF GOD Pure Cotton Tee',
    verified: true,
    fitFeedback: 'Runs True to Size'
  },
  {
    id: 'rev-4',
    author: 'Sarah T.',
    rating: 5,
    date: '3 weeks ago',
    title: 'Quality matches the mission',
    content: 'Bought this for my college brother and ended up stealing it back because the snow wash is so aesthetic. The boxy drape is exactly how high-end oversized tees should fit.',
    productTitle: 'UNDER GOD Snow Washed Tee',
    verified: true,
    fitFeedback: 'Oversized Fit'
  },
  {
    id: 'rev-5',
    author: 'David K.',
    rating: 5,
    date: '1 month ago',
    title: 'True heavy fleece. Will buy every drop.',
    content: 'I live in Chicago where winters are brutal. This 480GSM fleece is thicker than anything on the market. The lack of cheap drawstrings and the structured double hood gives it that clean architectural look.',
    productTitle: 'NEVER ALONE Oversized Fleece Hoodie',
    verified: true,
    fitFeedback: 'Oversized Fit'
  },
  {
    id: 'rev-6',
    author: 'Joshua P.',
    rating: 5,
    date: '1 month ago',
    title: 'Sparks real conversations',
    content: 'Wore the Jesus Saves tee to a coffee shop downtown. The barista read it, paused, and told me he had been struggling that whole morning and needed that reminder. That alone was worth 100x the purchase.',
    productTitle: 'JESUS SAVES Pure Cotton Tee',
    verified: true,
    fitFeedback: 'Runs True to Size'
  }
];
