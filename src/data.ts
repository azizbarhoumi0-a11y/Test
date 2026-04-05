import { Article, Video, AwarenessImage } from './types';

export const ARTICLES: Article[] = [
  {
    id: '1',
    title: "Qu'est-ce que l'autisme chez l'enfant ?",
    excerpt: "Comprendre les bases du Trouble du Spectre de l'Autisme (TSA) et comment il se manifeste chez les jeunes enfants.",
    content: `L'autisme, ou Trouble du Spectre de l'Autisme (TSA), est un trouble du développement neurologique qui affecte la façon dont une personne communique et interagit avec les autres.

### Les premiers signes
Chez les jeunes enfants, certains signes peuvent alerter :
- Absence de contact visuel.
- Retard de langage.
- Intérêts restreints ou répétitifs.
- Difficulté à comprendre les émotions d'autrui.

Il est important de se rappeler que chaque enfant est unique et que le spectre est large.`,
    category: 'Comprendre',
    date: '2024-03-15',
    image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    title: "5 conseils pour aménager l'espace à la maison",
    excerpt: "Comment créer un environnement apaisant et structuré pour aider votre enfant à se sentir en sécurité.",
    content: `Un environnement structuré aide énormément l'enfant autiste à réduire son anxiété.

1. **Zone de calme** : Créez un petit coin avec des coussins et peu de stimuli visuels.
2. **Supports visuels** : Utilisez des pictogrammes pour le planning de la journée.
3. **Organisation** : Rangez les jouets dans des bacs transparents avec des étiquettes.
4. **Éclairage** : Privilégiez les lumières douces.
5. **Réduction du bruit** : Utilisez des tapis pour absorber les sons.`,
    category: 'Conseils',
    date: '2024-03-20',
    image: 'https://images.unsplash.com/photo-1581578731522-745505146317?auto=format&fit=crop&q=80&w=800'
  }
];

export const VIDEOS: Video[] = [
  {
    id: '1',
    title: "Vivre avec l'autisme : Le quotidien de Léo",
    description: "Un court documentaire sur la vie quotidienne d'un enfant de 6 ans et ses progrès à l'école.",
    thumbnail: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=800',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder
    duration: '5:30'
  },
  {
    id: '2',
    title: "Comprendre les stimulations sensorielles",
    description: "Pourquoi certains bruits ou textures peuvent être difficiles à gérer pour un enfant autiste.",
    thumbnail: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=800',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder
    duration: '3:45'
  }
];

export const IMAGES: AwarenessImage[] = [
  {
    id: '1',
    url: 'https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?auto=format&fit=crop&q=80&w=800',
    alt: 'Enfant jouant avec des blocs',
    caption: "Le jeu est un langage universel. Apprenons à jouer à leur façon."
  },
  {
    id: '2',
    url: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800',
    alt: 'Main dans la main',
    caption: "La patience et l'amour sont les clés de la communication."
  }
];
