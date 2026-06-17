'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';

export default function BeforeAfterSlider({
  before,
  after,
  altBefore,
  altAfter
}: {
  before: string;
  after: string;
  altBefore: string;
  altAfter: string;
}) {
  const [value, setValue] = useState(50);
  const clipStyle = useMemo(() => ({ clipPath: `inset(0 ${100 - value}% 0 0)` }), [value]);

  return (
    <div className="glass neon-border relative overflow-hidden rounded-[1.5rem]">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image src={after} alt={altAfter} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
        <div style={clipStyle} className="absolute inset-0">
          <Image src={before} alt={altBefore} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
        </div>

        <div
          className="absolute inset-y-0 w-px bg-white/80 shadow-[0_0_18px_rgba(102,247,255,0.9)]"
          style={{ left: `${value}%` }}
        />
        <div
          className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-[#081020]/80 px-3 py-2 text-[10px] uppercase tracking-[0.35em] text-white/80 backdrop-blur"
          style={{ left: `${value}%` }}
        >
          Compare
        </div>

        <input
          aria-label="Before and after comparison"
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={(event) => setValue(Number(event.target.value))}
          className="absolute inset-0 z-10 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>
    </div>
  );
}
