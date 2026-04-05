import { Article } from '../types';
import { motion } from 'motion/react';
import { Calendar, ArrowRight } from 'lucide-react';

interface ArticleCardProps {
  article: Article;
  onClick: (article: Article) => void;
}

export default function ArticleCard({ article, onClick }: ArticleCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all group cursor-pointer"
      onClick={() => onClick(article)}
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-slate-700 uppercase tracking-wider">
          {article.category}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 text-slate-400 text-sm mb-3">
          <Calendar className="w-4 h-4" />
          {new Date(article.date).toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#3b82f6] transition-colors">
          {article.title}
        </h3>
        <p className="text-slate-600 text-sm mb-6 line-clamp-2">
          {article.excerpt}
        </p>
        <div className="flex items-center gap-2 text-[#3b82f6] font-bold text-sm">
          Lire l'article
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </motion.div>
  );
}
