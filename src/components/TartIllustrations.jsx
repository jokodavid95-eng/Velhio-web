import React from 'react';

export const TartVessel = ({ variant = "classic", size = 200 }) => {
  const colors = {
    classic:     { top: "#F2EADA", accent: "#D4A84A" },
    nutella:     { top: "#6B4423", accent: "#8A5A2B" },
    lotus:       { top: "#B97B3A", accent: "#D4A84A" },
    oreo:        { top: "#2A2622", accent: "#4a4a4a" },
    dulce:       { top: "#C4853A", accent: "#D4A84A" },
    cafe:        { top: "#4A3024", accent: "#8A5A2B" },
    pantera:     { top: "#E88DA5", accent: "#B84C38" },
    pistacho:    { top: "#8BAA6A", accent: "#6E7A3B" },
    chocolate:   { top: "#3B2118", accent: "#6B4423" },
    mango:       { top: "#E8B450", accent: "#FFFFFF" },
    hippo:       { top: "#C89A6A", accent: "#F2EADA" },
    donut:       { top: "#E8C7A8", accent: "#B84C38" },
  };
  const c = colors[variant] || colors.classic;

  return (
    <svg viewBox="0 0 200 200" width={size} height={size} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <radialGradient id={`glow-${variant}`} cx="50%" cy="42%" r="55%">
          <stop offset="0%" stopColor="#F2EADA" stopOpacity="0.12"/>
          <stop offset="100%" stopColor="#F2EADA" stopOpacity="0"/>
        </radialGradient>
        <clipPath id={`top-${variant}`}>
          <ellipse cx="100" cy="88" rx="74" ry="18"/>
        </clipPath>
      </defs>
      <circle cx="100" cy="100" r="90" fill={`url(#glow-${variant})`}/>
      <ellipse cx="100" cy="148" rx="88" ry="10" fill="#17181B" opacity="0.35"/>
      <ellipse cx="100" cy="144" rx="86" ry="9" fill="#F2EADA" opacity="0.95"/>
      <path d="M 26 88 Q 26 130, 34 140 Q 100 154, 166 140 Q 174 130, 174 88 Z" fill="#8A5A2B"/>
      <g fill="#3B2118" opacity="0.55">
        <circle cx="48" cy="108" r="1.6"/><circle cx="62" cy="124" r="1.4"/>
        <circle cx="82" cy="116" r="1.5"/><circle cx="108" cy="128" r="1.6"/>
        <circle cx="130" cy="112" r="1.4"/><circle cx="148" cy="124" r="1.5"/>
        <circle cx="158" cy="104" r="1.4"/><circle cx="40" cy="130" r="1.3"/>
      </g>
      <path d="M 26 88 Q 100 100, 174 88" stroke="#3B2118" strokeWidth="1.5" fill="none" opacity="0.4"/>
      <ellipse cx="100" cy="88" rx="74" ry="18" fill={c.top}/>
      <ellipse cx="100" cy="86" rx="74" ry="18" fill="#17181B" opacity="0.12"/>
      <ellipse cx="82" cy="82" rx="32" ry="5" fill="#FFFFFF" opacity="0.22"/>
      <g clipPath={`url(#top-${variant})`}>
        {variant === "oreo" && (<g><circle cx="70" cy="82" r="6" fill="#F2EADA"/><circle cx="120" cy="90" r="7" fill="#F2EADA"/><circle cx="150" cy="84" r="5" fill="#F2EADA"/><circle cx="95" cy="94" r="4" fill="#F2EADA"/></g>)}
        {variant === "pistacho" && (<g fill="#3B4A1F"><ellipse cx="70" cy="84" rx="4" ry="2"/><ellipse cx="92" cy="90" rx="4" ry="2"/><ellipse cx="120" cy="86" rx="4" ry="2"/><ellipse cx="148" cy="92" rx="4" ry="2"/><ellipse cx="135" cy="80" rx="3" ry="1.5"/><ellipse cx="80" cy="94" rx="3" ry="1.5"/></g>)}
        {variant === "nutella" && (<g><path d="M 60 82 Q 80 78, 100 84 Q 120 90, 140 82" stroke="#F2EADA" strokeWidth="1.5" fill="none" opacity="0.5"/><circle cx="75" cy="90" r="2" fill="#F2EADA" opacity="0.6"/><circle cx="125" cy="86" r="2" fill="#F2EADA" opacity="0.6"/></g>)}
        {variant === "dulce" && (<g><path d="M 50 84 Q 100 74, 150 84" stroke="#6B4423" strokeWidth="2" fill="none" opacity="0.6"/><path d="M 55 92 Q 100 82, 145 92" stroke="#6B4423" strokeWidth="1.5" fill="none" opacity="0.5"/></g>)}
        {variant === "pantera" && (<g fill="#F2EADA"><circle cx="75" cy="85" r="1.5"/><circle cx="95" cy="90" r="1.5"/><circle cx="115" cy="86" r="1.5"/><circle cx="135" cy="92" r="1.5"/><circle cx="150" cy="86" r="1.5"/><circle cx="65" cy="92" r="1.5"/></g>)}
        {variant === "mango" && (<g><ellipse cx="80" cy="86" rx="6" ry="3" fill="#FFFFFF"/><ellipse cx="125" cy="90" rx="5" ry="2.5" fill="#FFFFFF"/><ellipse cx="150" cy="84" rx="4" ry="2" fill="#FFFFFF"/></g>)}
        {variant === "lotus" && (<g fill="#4A3024"><rect x="70" y="82" width="8" height="6" rx="1"/><rect x="100" y="88" width="10" height="6" rx="1"/><rect x="130" y="84" width="8" height="6" rx="1"/></g>)}
        {variant === "cafe" && (<g><circle cx="80" cy="86" r="2" fill="#F2EADA" opacity="0.5"/><circle cx="110" cy="90" r="2" fill="#F2EADA" opacity="0.5"/><circle cx="140" cy="86" r="2" fill="#F2EADA" opacity="0.5"/></g>)}
        {variant === "chocolate" && (<g><path d="M 50 84 L 70 82 L 68 92 L 50 90 Z" fill="#6B4423" opacity="0.8"/><path d="M 100 82 L 125 80 L 128 92 L 102 94 Z" fill="#6B4423" opacity="0.8"/><path d="M 140 86 L 158 86 L 156 94 L 140 94 Z" fill="#6B4423" opacity="0.8"/></g>)}
        {variant === "hippo" && (<g><circle cx="80" cy="86" r="3" fill="#F2EADA"/><circle cx="120" cy="90" r="3" fill="#F2EADA"/><circle cx="145" cy="84" r="2.5" fill="#F2EADA"/></g>)}
        {variant === "donut" && (<g><circle cx="75" cy="84" r="2" fill="#B84C38"/><circle cx="90" cy="90" r="2" fill="#6E7A3B"/><circle cx="110" cy="86" r="2" fill="#D4A84A"/><circle cx="130" cy="92" r="2" fill="#B84C38"/><circle cx="145" cy="84" r="2" fill="#6E7A3B"/></g>)}
      </g>
      <circle cx="100" cy="78" r="1.5" fill={c.accent} opacity="0.6"/>
    </svg>
  );
};

export const GreekFigure = ({ type = "procession", width = 400, height = 120, color = "#17181B" }) => {
  if (type === "procession") {
    return (
      <svg viewBox="0 0 400 120" width={width} height={height} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <g fill={color}>
          <path d="M 40 90 L 40 50 Q 40 42, 48 42 Q 56 42, 56 50 L 56 72 Q 60 68, 64 68 L 72 68 L 72 74 L 64 74 L 60 78 L 60 90 L 64 110 L 58 110 L 54 95 L 50 110 L 44 110 Z"/>
          <circle cx="48" cy="34" r="7"/>
          <path d="M 62 68 L 74 62 L 84 64 L 84 58 L 74 56 L 62 62 Z"/>
          <path d="M 120 90 L 120 48 Q 120 40, 128 40 Q 136 40, 136 48 L 136 68 L 148 66 L 148 74 L 136 76 L 136 90 L 140 110 L 134 110 L 130 96 L 126 110 L 120 110 Z"/>
          <circle cx="128" cy="32" r="7"/>
          <rect x="140" y="58" width="20" height="4" rx="1"/>
          <ellipse cx="150" cy="54" rx="8" ry="3"/>
          <path d="M 200 90 L 200 50 Q 200 42, 208 42 Q 216 42, 216 50 L 216 68 L 216 90 L 220 110 L 214 110 L 210 96 L 206 110 L 200 110 Z"/>
          <circle cx="208" cy="34" r="7"/>
          <path d="M 360 90 L 360 50 Q 360 42, 368 42 Q 376 42, 376 50 L 376 68 L 376 90 L 380 110 L 374 110 L 370 96 L 366 110 L 360 110 Z"/>
          <circle cx="368" cy="34" r="7"/>
          <ellipse cx="352" cy="58" rx="12" ry="4"/>
          <path d="M 340 58 L 340 66 Q 352 72, 364 66 L 364 58 Z"/>
        </g>
      </svg>
    );
  }
  return null;
};
