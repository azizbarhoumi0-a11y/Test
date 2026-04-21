import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ChatBot from './components/ChatBot';
import Logo from './components/Logo';
import Home from './pages/Home';
import AxisPage from './pages/AxisPage';
import SensoryGame from './pages/SensoryGame';
import { Heart, Mail, Facebook, Instagram } from 'lucide-react';
import { useLanguage } from './contexts/LanguageContext';

export default function App() {
  const { t } = useLanguage();

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

        {/* Footer */}
        <footer className="bg-slate-950 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
              <div className="col-span-1 md:col-span-2">
                <div className="mb-6">
                  <Logo />
                </div>
                <p className="text-slate-400 max-w-sm mb-8 leading-relaxed">
                  {t('footer_desc')}
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
                <h4 className="font-bold text-lg mb-6">{t('footer_nav_title')}</h4>
                <ul className="space-y-4 text-slate-400">
                  <li><a href="/" className="hover:text-white transition-colors">{t('footer_nav_home')}</a></li>
                  <li><a href="/profil/informe" className="hover:text-white transition-colors">{t('footer_nav_informe')}</a></li>
                  <li><a href="/profil/parent" className="hover:text-white transition-colors">{t('footer_nav_parent')}</a></li>
                  <li><a href="/profil/enseignant" className="hover:text-white transition-colors">{t('footer_nav_enseignant')}</a></li>
                  <li><a href="/jeu" className="hover:text-white transition-colors">{t('footer_nav_jeu')}</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-6">{t('footer_contact_title')}</h4>
                <ul className="space-y-4 text-slate-400">
                  <li className="flex items-center gap-3">
                    <Mail className="w-4 h-4" />
                    contact@auti-aura.fr
                  </li>
                </ul>
              </div>
            </div>
            <div className="pt-8 border-t border-white/10 text-center text-slate-500 text-sm">
              © {new Date().getFullYear()} Auti-Aura. {t('footer_rights')}
            </div>
          </div>
        </footer>

        <ChatBot />
      </div>
    </Router>
  );
}
