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
    image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&q=80&w=800',
    axis: 'informe'
  },
  {
    id: '2',
    title: "Les idées reçues sur l'autisme",
    excerpt: "Démêler le vrai du faux concernant les stéréotypes les plus courants sur l'autisme.",
    content: `Il existe de nombreuses idées reçues sur l'autisme. Déconstruisons-les ensemble. Non, les personnes autistes ne manquent pas d'empathie, elles l'expriment différemment. Non, l'autisme n'est pas une maladie à guérir, c'est une neurodivergence.`,
    category: 'Sensibilisation',
    date: '2024-03-18',
    image: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&q=80&w=800',
    axis: 'informe'
  },
  {
    id: '3',
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
    image: 'https://images.unsplash.com/photo-1581578731522-745505146317?auto=format&fit=crop&q=80&w=800',
    axis: 'parent'
  },
  {
    id: '4',
    title: "Gérer les crises et surcharges sensorielles",
    excerpt: "Des stratégies pratiques pour accompagner votre enfant lors des moments difficiles.",
    content: `Les surcharges sensorielles peuvent mener à des crises (meltdowns). Voici comment réagir : restez calme, réduisez les stimuli autour de l'enfant, ne le forcez pas au contact physique s'il n'en veut pas, et proposez-lui un objet de régulation (fidget).`,
    category: 'Quotidien',
    date: '2024-03-22',
    image: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&q=80&w=800',
    axis: 'parent'
  },
  {
    id: '5',
    title: "Adapter sa pédagogie en classe inclusive",
    excerpt: "Outils et méthodes pour favoriser l'apprentissage d'un élève autiste au sein d'une classe ordinaire.",
    content: `L'inclusion scolaire nécessite des adaptations. L'utilisation de supports visuels, la structuration du temps avec des timers, et la clarté des consignes sont essentielles pour la réussite de l'élève autiste.`,
    category: 'Pédagogie',
    date: '2024-03-25',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800',
    axis: 'enseignant'
  },
  {
    id: '6',
    title: "Créer un coin de retour au calme en classe",
    excerpt: "Pourquoi et comment aménager un espace de régulation émotionnelle pour vos élèves.",
    content: `Un espace de retour au calme permet à l'élève de s'isoler lorsqu'il se sent submergé. Il doit être facilement accessible, délimité visuellement, et contenir des objets apaisants (casque anti-bruit, balles anti-stress).`,
    category: 'Aménagement',
    date: '2024-03-28',
    image: 'https://images.unsplash.com/photo-1536337005238-94b997371b40?auto=format&fit=crop&q=80&w=800',
    axis: 'enseignant'
  }
];

export const VIDEOS: Video[] = [
  {
    id: '1',
    title: "Comprendre l'autisme en 3 minutes",
    description: "Une animation simple pour expliquer le TSA au grand public.",
    thumbnail: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=800',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    duration: '3:15',
    axis: 'informe'
  },
  {
    id: '2',
    title: "Vivre avec l'autisme : Le quotidien de Léo",
    description: "Un court documentaire sur la vie quotidienne d'un enfant de 6 ans et ses progrès à l'école.",
    thumbnail: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=800',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    duration: '5:30',
    axis: 'parent'
  },
  {
    id: '3',
    title: "Témoignage : Mon expérience d'enseignante AESH",
    description: "Comment accompagner au mieux les élèves autistes dans leurs apprentissages.",
    thumbnail: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    duration: '8:45',
    axis: 'enseignant'
  }
];

export const IMAGES: AwarenessImage[] = [
  {
    id: '1',
    url: 'https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?auto=format&fit=crop&q=80&w=800',
    alt: 'Neurodiversité',
    caption: "La neurodiversité est une force. Chaque esprit fonctionne différemment.",
    axis: 'informe'
  },
  {
    id: '2',
    url: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800',
    alt: 'Main dans la main',
    caption: "La patience et l'amour sont les clés de la communication au quotidien.",
    axis: 'parent'
  },
  {
    id: '3',
    url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800',
    alt: 'Enfant à l\'école',
    caption: "Chaque enfant a le droit d'apprendre dans un environnement qui le comprend.",
    axis: 'enseignant'
  }
];
