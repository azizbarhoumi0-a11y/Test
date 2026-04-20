import { useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import SectionHeader from '../components/SectionHeader';
import ArticleCard from '../components/ArticleCard';
import VideoCard from '../components/VideoCard';
import ImageGallery from '../components/ImageGallery';
import { ARTICLES, VIDEOS, IMAGES } from '../data';
import { Article, Axis } from '../types';
import Markdown from 'react-markdown';
import InteractiveQuiz from '../components/InteractiveQuiz';
import { X, ArrowLeft, Info, Users, GraduationCap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function AxisPage() {
  const { axisId } = useParams<{ axisId: string }>();
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const { t, lang } = useLanguage();

  const axesConfig: Record<string, any> = {
    informe: { title: t('axis_informe_title'), desc: t('axis_informe_header_desc'), icon: Info, color: "bg-[#3b82f6]", lightColor: "bg-[#3b82f6]/10", textColor: "text-[#3b82f6]" },
    parent: { title: t('axis_parent_title'), desc: t('axis_parent_header_desc'), icon: Users, color: "bg-[#22c55e]", lightColor: "bg-[#22c55e]/10", textColor: "text-[#22c55e]" },
    enseignant: { title: t('axis_enseignant_title'), desc: t('axis_enseignant_header_desc'), icon: GraduationCap, color: "bg-[#eab308]", lightColor: "bg-[#eab308]/10", textColor: "text-[#eab308]" }
  };

  const handleArticleClick = (article: Article) => {
    setSelectedArticle(article);
  };

  if (!axisId || !(axisId in axesConfig)) {
    return <Navigate to="/" replace />;
  }

  const axis = axisId as Axis;
  const config = axesConfig[axis];

  const filteredArticles = ARTICLES.filter(a => a.axis === axis);
  const filteredVideos = VIDEOS.filter(v => v.axis === axis);
  const filteredImages = IMAGES.filter(i => i.axis === axis);

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Header */}
      <div className={`${config.color} text-white py-16 relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors font-medium bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm hover:bg-white/20">
            <ArrowLeft className="w-4 h-4" />
            {t('back_home')}
          </Link>
          <div className="flex items-center gap-6">
            <div className="bg-white/20 p-5 rounded-3xl backdrop-blur-sm shadow-inner">
              <config.icon className="w-12 h-12" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-3">{config.title}</h1>
              <p className="text-xl text-white/90 font-medium">{config.desc}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="py-12">
        {filteredArticles.length > 0 && (
          <section id="articles" className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <SectionHeader 
                title={t('articles_title')} 
                subtitle={axis === 'enseignant' ? t('articles_sub_ens') : t('articles_sub_other')} 
              />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.map((article) => (
                  <ArticleCard key={article.id} article={article} onClick={handleArticleClick} />
                ))}
              </div>
            </div>
          </section>
        )}

        {axis === 'informe' && (
          <section className="py-12 bg-slate-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <SectionHeader title={t('quiz_title')} subtitle={t('quiz_sub')} />
              <InteractiveQuiz />
            </div>
          </section>
        )}
      </div>

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
                <div className="px-8 sm:px-16 py-16 relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`${config.color} text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest inline-block`}>
                      {selectedArticle.category}
                    </div>
                  </div>
                  
                  <div dir={lang === 'ar' ? 'rtl' : 'ltr'} className={lang === 'ar' ? 'text-right' : 'text-left'}>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-8 leading-tight">
                      {lang === 'ar' && selectedArticle.titleAr ? selectedArticle.titleAr : selectedArticle.title}
                    </h2>
                    <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                      <Markdown>{lang === 'ar' && selectedArticle.contentAr ? selectedArticle.contentAr : selectedArticle.content}</Markdown>
                    </div>
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
