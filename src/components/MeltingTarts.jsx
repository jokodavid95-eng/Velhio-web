import React from 'react';

const MeltingTart = ({ variant = 'classic', delay = 0 }) => {
  const colors = {
    classic:'#F2EADA', pistacho:'#8BAA6A', nutella:'#6B4423',
    oreo:'#2A2622', dulce:'#C4853A', chocolate:'#3B2118',
    mango:'#E8B450', pantera:'#E88DA5',
  };
  const fill = colors[variant] || colors.classic;
  const animName = `melt-${variant}-${Math.round(delay * 100)}`;
  return (
    <div style={{ flex:'0 0 90px', position:'relative', width:90, height:140 }}>
      <svg viewBox="0 0 100 150" width="100%" height="100%" style={{ overflow:'visible' }}>
        <path d="M 10 70 Q 10 92, 20 100 Q 50 108, 80 100 Q 90 92, 90 70 Z" fill="#8A5A2B"/>
        <path style={{ animation:`${animName} 3.2s ease-in-out ${delay}s infinite` }}
          d="M 10 70 Q 10 76, 20 78 L 30 78 Q 35 82, 40 78 L 55 78 Q 60 82, 65 78 L 80 78 Q 90 76, 90 70 Q 90 60, 50 58 Q 10 60, 10 70 Z"
          fill={fill}/>
        <circle cx="25" cy="108" r="3" fill={fill} opacity="0.9">
          <animate attributeName="cy" values="100;140;100" dur="3.2s" begin={`${delay}s`} repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0;0.9;0" dur="3.2s" begin={`${delay}s`} repeatCount="indefinite"/>
        </circle>
        <circle cx="55" cy="108" r="2.5" fill={fill} opacity="0.8">
          <animate attributeName="cy" values="100;145;100" dur="3.2s" begin={`${delay+0.4}s`} repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0;0.8;0" dur="3.2s" begin={`${delay+0.4}s`} repeatCount="indefinite"/>
        </circle>
        <circle cx="75" cy="108" r="2.8" fill={fill} opacity="0.85">
          <animate attributeName="cy" values="100;142;100" dur="3.2s" begin={`${delay+0.8}s`} repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0;0.85;0" dur="3.2s" begin={`${delay+0.8}s`} repeatCount="indefinite"/>
        </circle>
        <ellipse cx="35" cy="65" rx="12" ry="2" fill="#FFFFFF" opacity="0.4"/>
      </svg>
      <style>{`@keyframes ${animName}{0%,100%{d:path("M 10 70 Q 10 76, 20 78 L 30 78 Q 35 82, 40 78 L 55 78 Q 60 82, 65 78 L 80 78 Q 90 76, 90 70 Q 90 60, 50 58 Q 10 60, 10 70 Z")}50%{d:path("M 10 70 Q 10 82, 22 92 L 30 96 Q 35 104, 40 100 L 55 102 Q 60 108, 65 100 L 80 96 Q 90 84, 90 70 Q 90 60, 50 58 Q 10 60, 10 70 Z")}}`}</style>
    </div>
  );
};

const MeltingTarts = ({ variants = ['classic','pistacho','nutella'], height = 180 }) => (
  <div style={{ position:'relative', height, overflow:'hidden', background:'linear-gradient(180deg,var(--bg) 0%,var(--bg-elev) 100%)', borderTop:'1px solid var(--rule)', borderBottom:'1px solid var(--rule)', display:'flex', alignItems:'flex-start', justifyContent:'space-around', padding:'20px 24px 0' }}>
    <div style={{ position:'absolute', bottom:20, left:0, right:0, height:22, backgroundImage:"url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 20'><path d='M0 16 L0 4 L16 4 L16 12 L8 12 L8 8 L12 8 L12 16 L20 16 L20 4 L36 4 L36 12 L28 12 L28 8 L32 8 L32 16 L40 16 L40 4 L56 4 L56 12 L48 12 L48 8 L52 8 L52 16 L60 16' stroke='%23D4A84A' stroke-width='1.2' fill='none'/></svg>\")", backgroundRepeat:'repeat-x', backgroundSize:'auto 16px', opacity:0.4 }}/>
    {variants.map((v,i) => <MeltingTart key={i} variant={v} delay={i*0.7}/>)}
    <div style={{ position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)', textAlign:'center', pointerEvents:'none' }}>
      <div className="eyebrow" style={{ fontSize:10, color:'var(--gold)' }}>ΛΙΩΝΩ · SE DERRITE</div>
      <div className="script" style={{ fontSize:28, color:'var(--cream)', marginTop:2 }}>muy muy cremosas</div>
    </div>
  </div>
);

export default MeltingTarts;
