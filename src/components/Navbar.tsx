import { motion } from 'motion/react';
import { BookOpen, Video, Image as ImageIcon, Menu, X } from 'lucide-react';
import { useState } from 'react';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Articles', icon: BookOpen, href: '#articles' },
    { name: 'Vidéos', icon: Video, href: '#videos' },
    { name: 'Galerie', icon: ImageIcon, href: '#gallery' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Logo />

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center gap-2 text-slate-600 hover:text-slate-900 font-medium transition-colors"
              >
                <item.icon className="w-4 h-4" />
                {item.name}
              </a>
            ))}
            <button className="bg-slate-900 text-white px-5 py-2 rounded-full font-semibold hover:bg-slate-800 transition-all shadow-sm">
              Soutenir
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
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
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 text-slate-700 font-medium p-2 hover:bg-slate-50 rounded-lg"
            >
              <item.icon className="w-5 h-5" />
              {item.name}
            </a>
          ))}
          <button className="w-full bg-slate-900 text-white py-3 rounded-xl font-semibold">
            Soutenir
          </button>
        </motion.div>
      )}
    </nav>
  );
}
