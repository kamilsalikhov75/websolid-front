import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    background_color: '#fff',
    description: 'Команда по разработке веб-сайтов.',
    display: 'standalone',
    icons: [
      {
        sizes: 'any',
        src: '/favicon.ico',
        type: 'image/x-icon'
      }
    ],
    name: 'Web Sold',

    short_name: 'Web Solid',
    start_url: '/',

    theme_color: '#fff'
  };
}
