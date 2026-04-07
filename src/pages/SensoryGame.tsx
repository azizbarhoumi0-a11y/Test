import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const COLORS = [
  'bg-[#ef4444]', // Rouge
  'bg-[#eab308]', // Jaune
  'bg-[#3b82f6]', // Bleu
  'bg-[#22c55e]', // Vert
  'bg-purple-400',
  'bg-pink-400',
  'bg-orange-400',
  'bg-teal-400'
];

// Générateur de son doux (Web Audio API)
const playSound = () => {
  try {
    const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
    const audioCtx = new AudioContext();
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    // Fréquences d'une gamme pentatonique majeure (C, D, E, G, A, C) pour un son toujours harmonieux
    const frequencies = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25];
    const randomFreq = frequencies[Math.floor(Math.random() * frequencies.length)];
    
    oscillator.type = 'sine'; // Son pur et doux
    oscillator.frequency.setValueAtTime(randomFreq, audioCtx.currentTime);

    // Enveloppe sonore pour créer un effet de "plop" ou de note de marimba/piano doux
    gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.15, audioCtx.currentTime + 0.02); // Attaque rapide
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.5); // Déclin progressif

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    oscillator.start();
    oscillator.stop(audioCtx.currentTime + 0.5);
  } catch (e) {
    console.error("L'audio n'est pas supporté ou a été bloqué", e);
  }
};

const InteractiveCircle = () => {
  const [colorIndex, setColorIndex] = useState(Math.floor(Math.random() * COLORS.length));

  const handleClick = () => {
    playSound();
    // Passe à la couleur suivante (ou une couleur aléatoire)
    setColorIndex((prev) => (prev + 1) % COLORS.length);
  };

  return (
    <motion.div
      whileTap={{ scaleX: 1.15, scaleY: 0.8 }} // Animation d'aplatissement
      onClick={handleClick}
      className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full cursor-pointer shadow-sm hover:shadow-md ${COLORS[colorIndex]} transition-colors duration-300`}
    />
  );
};

export default function SensoryGame() {
  // Génère un tableau de 48 éléments pour remplir l'écran
  const circles = Array.from({ length: 48 });

  return (
    <div className="min-h-screen bg-slate-50 pt-20 flex flex-col selection:bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-6">
        <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 mb-8 transition-colors font-medium">
          <ArrowLeft className="w-4 h-4" />
          Retour à l'accueil
        </Link>
        
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Espace Détente</h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Touchez les cercles pour les voir changer de couleur et écouter une douce mélodie. 
            Il n'y a pas de règles, pas de score, juste le plaisir de l'exploration sensorielle.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto pb-20">
          {circles.map((_, i) => (
            <InteractiveCircle key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
