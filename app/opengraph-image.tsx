import { ImageResponse } from 'next/og';
import Home from './page';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const alt = 'Web Solid';
export const size = { height: 630, width: 1200 };

export const contentType = 'image/png';

// Image generation
export default async function Image() {
  return new ImageResponse(<Home />, {
    ...size
  });
}
