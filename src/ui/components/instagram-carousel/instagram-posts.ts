import type { InstagramPost } from '@/lib/instagram'

export const instagramPosts: InstagramPost[] = [
  {
    id: '1',
    caption: 'Victoire de l’équipe ce week-end. Merci à tous pour votre soutien.',
    mediaType: 'IMAGE',
    permalink: 'https://www.instagram.com/p/POST_1/',
    timestamp: '2026-03-10T18:00:00.000Z',
    previewUrl: '/images/instagram/post-1.jpg',
  },
  {
    id: '2',
    caption: 'Retour en images sur notre dernier tournoi.',
    mediaType: 'CAROUSEL_ALBUM',
    permalink: 'https://www.instagram.com/p/POST_2/',
    timestamp: '2026-03-08T14:00:00.000Z',
    previewUrl: '/images/instagram/post-2.jpg',
  },
  {
    id: '3',
    caption: 'Entraînement intense avant le prochain match.',
    mediaType: 'IMAGE',
    permalink: 'https://www.instagram.com/p/POST_3/',
    timestamp: '2026-03-05T19:30:00.000Z',
    previewUrl: '/images/instagram/post-3.jpg',
  },
]