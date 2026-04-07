export type Axis = 'informe' | 'parent' | 'enseignant';

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  image: string;
  axis: Axis;
}

export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  duration: string;
  axis: Axis;
}

export interface AwarenessImage {
  id: string;
  url: string;
  alt: string;
  caption: string;
  axis: Axis;
}
