import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative pt-32 pb-32 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
          >
            <Sparkles className="w-4 h-4 text-[#eab308]" />
            {t('hero_tag')}
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6"
          >
            {t('hero_title_1')}<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ef4444] via-[#eab308] to-[#22c55e]">{t('hero_title_accent')}</span>{t('hero_title_2')}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 mb-10 leading-relaxed"
          >
            {t('hero_desc')}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#axes"
              className="w-full sm:w-auto bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-800 transition-all shadow-lg shadow-slate-200 flex items-center justify-center gap-2"
            >
              {t('hero_cta')}
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative elements representing the 4 puzzle colors */}
      <div className="absolute top-1/4 left-0 -translate-y-1/2 w-64 h-64 bg-[#3b82f6]/10 rounded-full blur-3xl -z-0" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-[#eab308]/10 rounded-full blur-3xl -z-0" />
      <div className="absolute top-10 right-1/4 w-48 h-48 bg-[#ef4444]/10 rounded-full blur-3xl -z-0" />
      <div className="absolute bottom-10 left-1/4 w-56 h-56 bg-[#22c55e]/10 rounded-full blur-3xl -z-0" />
    </section>
  );
}
