import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Truck, RefreshCw, Shield, FileText } from 'lucide-react';

export const PoliciesPage: React.FC = () => {
  const { type = 'shipping' } = useParams<{ type: string }>();

  return (
    <div className="w-full bg-white min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Policy Tab Navigation */}
        <div className="flex items-center gap-2 border-b border-neutral-200 overflow-x-auto pb-2 scrollbar-none">
          <Link
            to="/policies/shipping"
            className={`px-4 py-2 text-xs font-black uppercase tracking-wider whitespace-nowrap ${
              type === 'shipping' ? 'border-b-2 border-black text-black' : 'text-neutral-500 hover:text-black'
            }`}
          >
            Shipping & Delivery
          </Link>
          <Link
            to="/policies/returns"
            className={`px-4 py-2 text-xs font-black uppercase tracking-wider whitespace-nowrap ${
              type === 'returns' ? 'border-b-2 border-black text-black' : 'text-neutral-500 hover:text-black'
            }`}
          >
            Returns & Exchanges
          </Link>
          <Link
            to="/policies/terms"
            className={`px-4 py-2 text-xs font-black uppercase tracking-wider whitespace-nowrap ${
              type === 'terms' ? 'border-b-2 border-black text-black' : 'text-neutral-500 hover:text-black'
            }`}
          >
            Terms of Service
          </Link>
          <Link
            to="/policies/privacy"
            className={`px-4 py-2 text-xs font-black uppercase tracking-wider whitespace-nowrap ${
              type === 'privacy' ? 'border-b-2 border-black text-black' : 'text-neutral-500 hover:text-black'
            }`}
          >
            Privacy Policy
          </Link>
        </div>

        {/* Content */}
        <div className="space-y-6 text-neutral-800 text-sm leading-relaxed">
          {type === 'shipping' && (
            <div className="space-y-6">
              <h1 className="text-3xl font-black uppercase tracking-tight text-black">
                SHIPPING & DELIVERY
              </h1>
              <p>
                At UNFORSAKEN, we treat every order with intentional care. All items are packed by our dedicated fulfillment team in the United States.
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-4 bg-[#F6F5F2] border border-neutral-200 space-y-1">
                  <h3 className="font-black uppercase text-xs text-black">Free Domestic Shipping</h3>
                  <p className="text-xs text-neutral-600">
                    We offer Free Standard U.S. Shipping on all orders totaling $75.00 or more (after promotional discounts and before taxes).
                  </p>
                </div>

                <div className="p-4 bg-[#F6F5F2] border border-neutral-200 space-y-1">
                  <h3 className="font-black uppercase text-xs text-black">Order Processing & Fulfillment</h3>
                  <p className="text-xs text-neutral-600">
                    Orders are processed and dispatched within 24 to 48 business hours (excluding major holidays). During new collection drops, processing may extend up to 3-4 business days due to high volume.
                  </p>
                </div>

                <div className="p-4 bg-[#F6F5F2] border border-neutral-200 space-y-1">
                  <h3 className="font-black uppercase text-xs text-black">Delivery Times</h3>
                  <p className="text-xs text-neutral-600">
                    • <strong>Standard U.S. Priority:</strong> 3-5 business days once shipped.<br />
                    • <strong>Express Delivery:</strong> 1-2 business days.<br />
                    • <strong>International Orders:</strong> 7-14 business days depending on customs clearance.
                  </p>
                </div>
              </div>
            </div>
          )}

          {type === 'returns' && (
            <div className="space-y-6">
              <h1 className="text-3xl font-black uppercase tracking-tight text-black">
                RETURNS & 30-DAY EXCHANGES
              </h1>
              <p>
                We want you to love your UNFORSAKEN garments and feel completely confident in your fit. If your hoodie or tee isn’t the perfect size, we make exchanges straightforward.
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-4 bg-[#F6F5F2] border border-neutral-200 space-y-1">
                  <h3 className="font-black uppercase text-xs text-black">30-Day Window</h3>
                  <p className="text-xs text-neutral-600">
                    Items may be exchanged or returned for store credit within 30 days of delivery. Garments must be unworn, unwashed, and in original packaging with tags intact.
                  </p>
                </div>

                <div className="p-4 bg-[#F6F5F2] border border-neutral-200 space-y-1">
                  <h3 className="font-black uppercase text-xs text-black">How to Start an Exchange</h3>
                  <p className="text-xs text-neutral-600">
                    Email our support team at <strong>support@shopunforsaken.com</strong> with your order number and desired replacement size. We will provide a pre-paid return shipping label.
                  </p>
                </div>
              </div>
            </div>
          )}

          {type === 'terms' && (
            <div className="space-y-6">
              <h1 className="text-3xl font-black uppercase tracking-tight text-black">
                TERMS OF SERVICE
              </h1>
              <p className="text-xs text-neutral-500">Last updated: October 2026</p>
              <p>
                Welcome to UNFORSAKEN Apparel. By accessing or using our website at shopunforsaken.com, you agree to comply with and be bound by these Terms of Service.
              </p>
              <h3 className="text-base font-black uppercase text-black pt-2">Store Products & Pricing</h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                All prices are listed in USD. While we make every effort to display accurate colors and sizing specifications, variations may occur due to device screens and unique vintage enzyme wash treatments.
              </p>
            </div>
          )}

          {type === 'privacy' && (
            <div className="space-y-6">
              <h1 className="text-3xl font-black uppercase tracking-tight text-black">
                PRIVACY POLICY
              </h1>
              <p className="text-xs text-neutral-500">Last updated: October 2026</p>
              <p>
                Your privacy is of utmost importance to us. UNFORSAKEN collects only the personal information necessary to fulfill orders, process payments securely, and notify you of upcoming collection drops. We never sell or rent your personal data to third parties.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
