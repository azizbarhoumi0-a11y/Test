import { Article } from '../types';
import { motion } from 'motion/react';
import { ArrowRight, BookOpen } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface ArticleCardProps {
  article: Article;
  onClick: (article: Article) => void;
}

export default function ArticleCard({ article, onClick }: ArticleCardProps) {
  const { lang, isAr } = useLanguage();

  // Helper to extract a short preview from Arabic content if excerptAr is missing
  const getArabicExcerpt = () => {
    if (article.excerptAr) return article.excerptAr;
    if (article.contentAr) {
      const cleanContent = article.contentAr.replace(/^[> "\n]+/, ''); // Remove trailing blockquotes and quotes
      return cleanContent.split(/[\.۔]/)[0] + '...';
    }
    return '';
  };

  const categoryTranslations: Record<string, string> = {
    'Comprendre': 'شرح',
    'Histoire': 'تاريخ',
    'Talents': 'مواهب',
    'Dépistage': 'تشخيص',
    'Sensoriel': 'الحواس',
    'Droits': 'حقوق',
    'Cadre Légal': 'إطار قانوني',
    'Aménagement': 'تنظيم',
    'Pédagogie': 'بيداغوجيا',
    'Interactions': 'تفاعلات',
    'Soutien': 'دعم',
    'Collaboration': 'تعاون',
    'Rôle expert': 'دور الخبير',
    'Méthodologie': 'منهجية',
    'Outils': 'أدوات',
    'Soutien émotionnel': 'دعم عاطفي',
    'Quotidien': 'يوميات',
    'Communication': 'تواصل',
    'Bien-être': 'رفاهية',
    'Autonomie': 'استقلالية',
    'Famille': 'العائلة'
  };

  const displayTitle = isAr && article.titleAr ? article.titleAr : article.title;
  const displayExcerpt = isAr ? getArabicExcerpt() : article.excerpt;
  const displayCategory = isAr ? (categoryTranslations[article.category] || article.category) : article.category;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-xl transition-all group cursor-pointer flex flex-col h-full ${isAr ? 'text-right' : 'text-left'}`}
      onClick={() => onClick(article)}
      dir={isAr ? 'rtl' : 'ltr'}
    >
      <div className={`flex items-center gap-3 mb-4 ${isAr ? 'flex-row-reverse justify-end' : ''}`}>
        <div className="bg-slate-100 p-2 rounded-xl text-slate-500 group-hover:bg-[#3b82f6]/10 group-hover:text-[#3b82f6] transition-colors">
          <BookOpen className="w-5 h-5" />
        </div>
        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
          {displayCategory}
        </span>
      </div>
      
      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#3b82f6] transition-colors">
        {displayTitle}
      </h3>
      
      <p className="text-slate-600 text-sm mb-6 flex-grow leading-relaxed">
        {displayExcerpt}
      </p>
      
      <div className={`flex items-center gap-2 text-[#3b82f6] font-bold text-sm mt-auto pt-4 border-t border-slate-50 ${isAr ? 'justify-end' : ''}`}>
        {isAr ? 'اقرأ المقال' : "Lire l'article"}
        <ArrowRight className={`w-4 h-4 transition-transform ${isAr ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
      </div>
    </motion.div>
  );
}
