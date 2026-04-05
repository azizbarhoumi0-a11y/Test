import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SectionHeader from './components/SectionHeader';
import ArticleCard from './components/ArticleCard';
import VideoCard from './components/VideoCard';
import ImageGallery from './components/ImageGallery';
import ChatBot from './components/ChatBot';
import Logo from './components/Logo';
import { ARTICLES, VIDEOS, IMAGES } from './data';
import { Article } from './types';
import Markdown from 'react-markdown';
import { X, Heart, Mail, Facebook, Twitter, Instagram } from 'lucide-react';

export default function App() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#3b82f6]/20 selection:text-slate-900">
      <Navbar />
      
      <main>
        <Hero />

        {/* Articles Section */}
        <section id="articles" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader 
              title="Articles Éducatifs" 
              subtitle="Des ressources approfondies pour comprendre les défis et les opportunités liés à l'autisme chez les enfants."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ARTICLES.map((article) => (
                <ArticleCard 
                  key={article.id} 
                  article={article} 
                  onClick={setSelectedArticle}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Videos Section */}
        <section id="videos" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader 
              title="Vidéos & Témoignages" 
              subtitle="Découvrez des histoires inspirantes et des explications visuelles sur le spectre de l'autisme."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {VIDEOS.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader 
              title="Galerie de Sensibilisation" 
              subtitle="Des images et des messages pour porter un autre regard sur la neurodiversité."
            />
            <ImageGallery images={IMAGES} />
          </div>
        </section>

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
      </main>

      <ChatBot />

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
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#3b82f6] transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#3b82f6] transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#3b82f6] transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6">Navigation</h4>
              <ul className="space-y-4 text-slate-400">
                <li><a href="#articles" className="hover:text-white transition-colors">Articles</a></li>
                <li><a href="#videos" className="hover:text-white transition-colors">Vidéos</a></li>
                <li><a href="#gallery" className="hover:text-white transition-colors">Galerie</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Ressources</a></li>
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
            © 2026 Auti-Aura. Tous droits réservés.
          </div>
        </div>
      </footer>

      {/* Article Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          >
            <div 
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" 
              onClick={() => setSelectedArticle(null)}
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white w-full max-w-4xl max-h-[90vh] rounded-[2.5rem] shadow-2xl relative z-10 overflow-hidden flex flex-col"
            >
              <button 
                onClick={() => setSelectedArticle(null)}
                className="absolute top-6 right-6 p-2 bg-white/80 backdrop-blur rounded-full text-slate-900 hover:bg-slate-100 transition-colors z-20"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="overflow-y-auto">
                <div className="h-64 sm:h-96 relative">
                  <img 
                    src={selectedArticle.image} 
                    alt={selectedArticle.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                </div>
                
                <div className="px-8 sm:px-16 pb-16 -mt-20 relative z-10">
                  <div className="bg-[#3b82f6] text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest inline-block mb-6">
                    {selectedArticle.category}
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-8 leading-tight">
                    {selectedArticle.title}
                  </h2>
                  <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                    <Markdown>{selectedArticle.content}</Markdown>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
