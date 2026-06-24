import React from 'react';

interface BrandLogoProps {
  className?: string;
  showText?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ className = "w-10 h-10", showText = true }) => {
  return (
    <div className="flex items-center gap-3 group select-none">
      {/* Emblem Badge matching uploaded image */}
      <div className={`${className} relative rounded-full bg-[#15202D] border border-[#233345] flex flex-col items-center justify-center p-1 shadow-md group-hover:scale-105 transition-transform duration-300 flex-shrink-0 overflow-hidden`}>
        {/* Subtle inner gold glow */}
        <div className="absolute inset-0 bg-radial from-[#C5A059]/10 to-transparent pointer-events-none" />
        
        {/* Golden Architectural & Furniture Outline SVG */}
        <svg viewBox="0 0 100 100" className="w-[78%] h-[78%] overflow-visible">
          {/* Gold architectural highrise lines forming M & H with chair arm */}
          <g fill="none" stroke="#C5A059" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            {/* Left building / M peak */}
            <path d="M18 55 V28 L32 15 L46 28 V55" />
            <path d="M32 15 V55" />
            {/* Right building / H structure */}
            <path d="M46 38 H64 V22 L76 32 V55" />
            <path d="M64 22 V55" />
            {/* Right chaise / couch scroll arm */}
            <path d="M76 44 C84 44, 86 38, 82 35" />
            <path d="M14 55 H80" />
          </g>

          {/* Bold White MH Text */}
          <text x="50" y="74" fontSize="22" fontWeight="800" fontFamily="Outfit, sans-serif" fill="#FFFFFF" textAnchor="middle" tracking="2">MH</text>
          
          {/* Small White INTERIOR DESIGN Text */}
          <text x="50" y="88" fontSize="7.5" fontWeight="600" fontFamily="Inter, sans-serif" fill="#E2E8F0" textAnchor="middle" letterSpacing="0.5">INTERIOR DESIGN</text>
        </svg>
      </div>

      {/* Brand Name Next to Emblem */}
      {showText && (
        <div className="flex flex-col text-left">
          <span className="font-heading font-extrabold tracking-wider text-base sm:text-lg uppercase text-[#1A1A1A] leading-tight group-hover:text-[#C5A059] transition-colors">
            MH Interior Design
          </span>
          <span className="text-[10px] tracking-[0.22em] text-[#C5A059] font-semibold uppercase flex items-center gap-1">
            <span>Amroha</span>
            <span className="w-1 h-1 rounded-full bg-[#1A1A1A]/40 inline-block" />
            <span>Studio</span>
          </span>
        </div>
      )}
    </div>
  );
};
