import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ChatBot from './components/ChatBot';
import Logo from './components/Logo';
import Home from './pages/Home';
import AxisPage from './pages/AxisPage';
import SensoryGame from './pages/SensoryGame';
import { Heart, Mail, Facebook, Instagram } from 'lucide-react';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white font-sans selection:bg-[#3b82f6]/20 selection:text-slate-900 flex flex-col">
        <Navbar />
        
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profil/:axisId" element={<AxisPage />} />
            <Route path="/jeu" element={<SensoryGame />} />
          </Routes>
        </div>

        {/* Newsletter / CTA */}
        <section className="py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-slate-200">
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Restez informé et soutenez la cause</h2>
                <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
                  Rejoignez notre communauté pour recevoir des conseils, des ressources et des actualités sur l'inclusion des enfants autistes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input 
                    type="email" 
                    placeholder="Votre adresse email" 
                    className="flex-1 px-6 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#3b82f6] transition-all"
                  />
                  <button className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-bold hover:bg-slate-100 transition-all">
                    S'abonner
                  </button>
                </div>
              </div>
              {/* Decorative circles */}
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-[#ef4444]/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-[#3b82f6]/20 rounded-full blur-3xl" />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-950 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
              <div className="col-span-1 md:col-span-2">
                <div className="mb-6">
                  <Logo />
                </div>
                <p className="text-slate-400 max-w-sm mb-8 leading-relaxed">
                  Notre mission est de sensibiliser, éduquer et soutenir les familles touchées par l'autisme pour une société plus inclusive.
                </p>
                <div className="flex gap-4">
                  <a href="https://www.facebook.com/profile.php?id=61587332244018" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#3b82f6] transition-colors">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="https://www.instagram.com/auti_aura/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#3b82f6] transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-6">Navigation</h4>
                <ul className="space-y-4 text-slate-400">
                  <li><a href="/" className="hover:text-white transition-colors">Accueil</a></li>
                  <li><a href="/profil/informe" className="hover:text-white transition-colors">Je m'informe</a></li>
                  <li><a href="/profil/parent" className="hover:text-white transition-colors">Je suis Parent</a></li>
                  <li><a href="/profil/enseignant" className="hover:text-white transition-colors">Je suis Enseignant</a></li>
                  <li><a href="/jeu" className="hover:text-white transition-colors">Espace Détente (Jeu)</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-6">Contact</h4>
                <ul className="space-y-4 text-slate-400">
                  <li className="flex items-center gap-3">
                    <Mail className="w-4 h-4" />
                    contact@auti-aura.fr
                  </li>
                  <li className="flex items-center gap-3">
                    <Heart className="w-4 h-4" />
                    Faire un don
                  </li>
                </ul>
              </div>
            </div>
            <div className="pt-8 border-t border-white/10 text-center text-slate-500 text-sm">
              © {new Date().getFullYear()} Auti-Aura. Tous droits réservés.
            </div>
          </div>
        </footer>

        <ChatBot />
      </div>
    </Router>
  );
}
