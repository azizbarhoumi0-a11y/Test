import { motion } from 'motion/react';
import { BookOpen, Video, Image as ImageIcon, Menu, X, PlayCircle } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { useLanguage } from '../contexts/LanguageContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, lang, setLang } = useLanguage();

  const navItems = [
    { name: t('nav_informe'), icon: BookOpen, href: '/profil/informe' },
    { name: t('nav_parent'), icon: BookOpen, href: '/profil/parent' },
    { name: t('nav_enseignant'), icon: BookOpen, href: '/profil/enseignant' },
    { name: t('nav_jeu'), icon: PlayCircle, href: '/jeu' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/">
            <Logo />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              item.href.startsWith('/#') ? (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-2 text-slate-600 hover:text-slate-900 font-medium transition-colors"
                >
                  <item.icon className="w-4 h-4" />
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="flex items-center gap-2 text-slate-600 hover:text-slate-900 font-medium transition-colors"
                >
                  <item.icon className="w-4 h-4" />
                  {item.name}
                </Link>
              )
            ))}
          </div>

          <div className="hidden md:flex bg-slate-100/50 rounded-full p-1 shadow-sm border border-slate-200">
            <button
              onClick={() => setLang('fr')}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-colors ${
                lang === 'fr' 
                  ? 'bg-[#3b82f6] text-white' 
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              FR
            </button>
            <button
              onClick={() => setLang('ar')}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-colors ${
                lang === 'ar' 
                  ? 'bg-[#3b82f6] text-white' 
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              عربي
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <div className="flex bg-slate-100/50 rounded-full p-1 shadow-sm border border-slate-200">
              <button
                onClick={() => setLang('fr')}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-colors ${
                  lang === 'fr' ? 'bg-[#3b82f6] text-white' : 'text-slate-500'
                }`}
              >
                FR
              </button>
              <button
                onClick={() => setLang('ar')}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-colors ${
                  lang === 'ar' ? 'bg-[#3b82f6] text-white' : 'text-slate-500'
                }`}
              >
                عربي
              </button>
            </div>
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-slate-100 px-4 py-4 space-y-4"
        >
          {navItems.map((item) => (
            item.href.startsWith('/#') ? (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 text-slate-700 font-medium p-2 hover:bg-slate-50 rounded-lg"
              >
                <item.icon className="w-5 h-5" />
                {item.name}
              </a>
            ) : (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 text-slate-700 font-medium p-2 hover:bg-slate-50 rounded-lg"
              >
                <item.icon className="w-5 h-5" />
                {item.name}
              </Link>
            )
          ))}
        </motion.div>
      )}
    </nav>
  );
}
