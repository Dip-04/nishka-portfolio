'use client';

import dynamic from 'next/dynamic';

const PortfolioGallery = dynamic(() => import('@/components/PortfolioGallery'), {
  ssr: false
});

export default function PortfolioGallerySection() {
  return <PortfolioGallery />;
}
