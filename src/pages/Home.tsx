import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import Hero from '../components/Hero';
import { Info, Users, GraduationCap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import Markdown from 'react-markdown';

export default function Home() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const axesConfig = [
    { id: 'informe', title: t('axis_informe_title'), desc: t('axis_informe_desc'), icon: Info, color: "bg-[#3b82f6]" },
    { id: 'parent', title: t('axis_parent_title'), desc: t('axis_parent_desc'), icon: Users, color: "bg-[#22c55e]" },
    { id: 'enseignant', title: t('axis_enseignant_title'), desc: t('axis_enseignant_desc'), icon: GraduationCap, color: "bg-[#eab308]" }
  ];

  return (
    <main>
      <Hero />

      {/* Axes Selection */}
      <section id="axes" className="relative z-20 -mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {axesConfig.map((axis) => (
            <button
              key={axis.id}
              onClick={() => navigate(`/profil/${axis.id}`)}
              className={`p-8 rounded-3xl shadow-xl transition-all duration-300 flex flex-col items-center text-center group hover:-translate-y-2 opacity-95 hover:opacity-100 ${axis.color} text-white border-4 border-white`}
            >
              <div className="bg-white/20 p-4 rounded-full mb-6 group-hover:scale-110 transition-transform">
                <axis.icon className="w-10 h-10" />
              </div>
              <h3 className="text-3xl font-bold mb-3">{axis.title}</h3>
              <p className="text-lg opacity-90">{axis.desc}</p>
            </button>
          ))}
        </div>
      </section>

      {/* Presentation Auti-Aura & Projet Pacte */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Auti-Aura */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100"
            >
              <h2 className="text-3xl font-extrabold text-slate-900 mb-6 flex items-center gap-3">
                <span className="w-12 h-12 rounded-2xl bg-[#3b82f6]/10 flex items-center justify-center text-[#3b82f6]">
                  <Info className="w-6 h-6" />
                </span>
                {t('home_pres_title')}
              </h2>
              <div className="prose prose-lg prose-slate mt-4">
                <div className="text-slate-600 leading-relaxed font-medium">
                  <Markdown>{t('home_pres_text')}</Markdown>
                </div>
              </div>
            </motion.div>

            {/* Projet Pacte */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100"
            >
              <h2 className="text-3xl font-extrabold text-slate-900 mb-6 flex items-center gap-3">
                <span className="w-12 h-12 rounded-2xl bg-[#22c55e]/10 flex items-center justify-center text-[#22c55e]">
                  <Users className="w-6 h-6" />
                </span>
                {t('home_pacte_title')}
              </h2>
              <div className="prose prose-lg prose-slate mt-4">
                <div className="text-slate-600 leading-relaxed font-medium">
                  <Markdown>{t('home_pacte_text')}</Markdown>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
