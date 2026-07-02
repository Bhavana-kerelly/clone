import React, { useEffect } from 'react';
import { FileText, Scale, Landmark, Info, DollarSign } from 'lucide-react';

export default function ForBuyers() {
  useEffect(() => {
    document.title = "Guide for Property Buyers in Barbados | Stewart & Co";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-cream min-h-screen">
      {/* 1. HERO HEADER */}
      <section className="relative pt-36 pb-20 px-6 md:px-12 bg-dark-blue text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://framerusercontent.com/images/L6RthZY2p5GiyPwLyRpf5Iuohs.jpg" 
            alt="Barbados beach coastline background" 
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-dark-blue/45"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-sage mb-3">
            Property Acquisition
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-wide">
            Guide For Buyers
          </h1>
          <div className="w-12 h-0.5 bg-sage mt-4 mb-6"></div>
          <p className="text-sm sm:text-base text-white/80 max-w-2xl leading-relaxed">
            Discover the ultimate guidelines to purchasing luxury real estate in Barbados. Stewart &amp; Co will assist you throughout the entire transaction process.
          </p>
        </div>
      </section>

      {/* 2. CORE CONTENT PROCESS */}
      <section className="max-w-4xl mx-auto px-6 py-16 flex flex-col gap-12 text-dark-blue">
        
        {/* Intro Card */}
        <div className="bg-[#fcf9f6] p-8 rounded-lg border border-dark-blue/5 card-shadow flex gap-4 items-start">
          <Info className="w-6 h-6 text-sage shrink-0 mt-0.5" />
          <div className="text-sm text-dark-blue/80 leading-relaxed text-justify">
            <h2 className="font-semibold text-dark-blue text-base mb-2">Introduction</h2>
            There are no restrictions on foreign nationals buying property in Barbados. Non-residents enjoy the same rights as residents, including the ability to purchase beachfront land, luxury estates, and townhouses. However, specific legal steps and financial structures must be followed to ensure compliance with local regulations.
          </div>
        </div>

        {/* Step 1: Legal Representation */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3 border-b border-dark-blue/10 pb-3">
            <Scale className="w-6 h-6 text-sage" />
            <h2 className="font-display text-2xl font-bold tracking-wide">
              1. Retaining a Local Attorney
            </h2>
          </div>
          <p className="text-sm text-dark-blue/80 leading-relaxed text-justify">
            Both the buyer and the seller must retain separate local attorneys to handle the transaction. The buyer’s attorney is responsible for conducting title searches, verifying that the property is free of liens or encumbrances, checking planning permissions, and drafting/reviewing the Agreement of Sale.
          </p>
          <p className="text-sm text-dark-blue/80 leading-relaxed text-justify font-semibold">
            Attorney fees typically range from 1% to 2% of the purchase price, plus 17.5% VAT (Value Added Tax).
          </p>
        </div>

        {/* Step 2: The Purchase Process */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3 border-b border-dark-blue/10 pb-3">
            <FileText className="w-6 h-6 text-sage" />
            <h2 className="font-display text-2xl font-bold tracking-wide">
              2. The Transaction Stages
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-2">
            <div className="bg-[#fcf9f6] p-6 rounded border border-dark-blue/5 card-shadow">
              <span className="text-xs font-bold text-sage uppercase tracking-wider block mb-2">Stage A: Deposit</span>
              <p className="text-xs text-dark-blue/70 leading-relaxed">
                Once a verbal offer is accepted, the seller's attorney drafts the Agreement of Sale. Upon signing, the buyer pays a 10% deposit, which is held in escrow by the seller's attorney.
              </p>
            </div>
            <div className="bg-[#fcf9f6] p-6 rounded border border-dark-blue/5 card-shadow">
              <span className="text-xs font-bold text-sage uppercase tracking-wider block mb-2">Stage B: Exchange</span>
              <p className="text-xs text-dark-blue/70 leading-relaxed">
                Both parties sign and exchange the Sale Agreement. The transaction is then legally binding, subject to the buyer's attorney completing clear title searches.
              </p>
            </div>
            <div className="bg-[#fcf9f6] p-6 rounded border border-dark-blue/5 card-shadow">
              <span className="text-xs font-bold text-sage uppercase tracking-wider block mb-2">Stage C: Completion</span>
              <p className="text-xs text-dark-blue/70 leading-relaxed">
                Within 3 to 6 months, the remaining 90% balance is paid, the conveyance deed is signed, and ownership transfers. The buyer is responsible for registering the deed.
              </p>
            </div>
          </div>
        </div>

        {/* Step 3: Ownership Structures */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3 border-b border-dark-blue/10 pb-3">
            <Landmark className="w-6 h-6 text-sage" />
            <h2 className="font-display text-2xl font-bold tracking-wide">
              3. Ownership Methods &amp; Corporate Vehicles
            </h2>
          </div>
          <p className="text-sm text-dark-blue/80 leading-relaxed text-justify">
            Buyers can purchase property personally or through an offshore holding company (such as a BVI or St. Lucia IBC). Utilizing an offshore holding company can offer tax efficiencies, simplify future sales (by transferring company shares rather than conveying physical land), and bypass local Property Transfer Taxes and Stamp Duties.
          </p>
          <p className="text-sm text-dark-blue/80 leading-relaxed text-justify font-semibold">
            We highly recommend consulting with a local tax professional and attorney to choose the best ownership vehicle for your specific situation.
          </p>
        </div>

        {/* Step 4: Outgoings & Taxes */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3 border-b border-dark-blue/10 pb-3">
            <DollarSign className="w-6 h-6 text-sage" />
            <h2 className="font-display text-2xl font-bold tracking-wide">
              4. Transfer Taxes, Fees &amp; Outgoings
            </h2>
          </div>
          <p className="text-sm text-dark-blue/80 leading-relaxed text-justify">
            When buying property, most transfer taxes are paid by the seller, but the buyer faces ongoing expenses. Here is a breakdown:
          </p>
          <div className="bg-[#fcf9f6] rounded border border-dark-blue/5 card-shadow p-6 mt-2">
            <div className="flex flex-col gap-4 text-xs">
              <div className="flex justify-between border-b border-dark-blue/5 pb-2">
                <span className="font-semibold">Buyer Attorney Fees</span>
                <span>1% to 2% + 17.5% VAT</span>
              </div>
              <div className="flex justify-between border-b border-dark-blue/5 pb-2">
                <span className="font-semibold">Annual Land Tax</span>
                <span>0.1% to 1.0% (capped based on land value)</span>
              </div>
              <div className="flex justify-between border-b border-dark-blue/5 pb-2">
                <span className="font-semibold">Exchange Control Registration</span>
                <span>Required for all foreign currency brought into Barbados</span>
              </div>
              <div className="flex justify-between pb-1">
                <span className="font-semibold">Communal / HOA Service Charges</span>
                <span>Varies by development (e.g. Apes Hill, Sandy Lane)</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
