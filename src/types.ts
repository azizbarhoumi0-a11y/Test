export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'Comprendre' | 'Conseils' | 'Témoignages';
  date: string;
  image: string;
}

export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  duration: string;
}

export interface AwarenessImage {
  id: string;
  url: string;
  alt: string;
  caption: string;
}
