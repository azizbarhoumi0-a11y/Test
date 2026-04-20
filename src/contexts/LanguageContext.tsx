import React, { createContext, useContext, useState, useEffect } from 'react';

type Lang = 'fr' | 'ar';

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  isAr: boolean;
  t: (key: string) => string;
}

export const translations: Record<string, Record<Lang, string>> = {
  // Navbar
  nav_informe: { fr: "Je m'informe", ar: "معلومات عامة" },
  nav_parent: { fr: "Je suis Parent", ar: "أنا أب/أم" },
  nav_enseignant: { fr: "Je suis Enseignant", ar: "أنا معلم" },
  nav_jeu: { fr: "Jeu Sensoriel", ar: "لعبة حسية" },

  // Hero
  hero_tag: { fr: "Sensibilisation & Éducation", ar: "التوعية والتعليم" },
  hero_title_1: { fr: "Comprendre l'autisme pour ", ar: "فهم التوحد من أجل " },
  hero_title_accent: { fr: "mieux accompagner", ar: "دعم أفضل" },
  hero_title_2: { fr: " nos enfants", ar: " لأطفالنا" },
  hero_desc: { fr: "Une ressource complète pour les parents, les enseignants et toute personne souhaitant créer un monde plus inclusif et bienveillant pour les enfants autistes.", ar: "مورد شامل للآباء والمعلمين وأي شخص يرغب في خلق عالم أكثر شمولاً وتعاطفاً للأطفال المصابين بالتوحد." },
  hero_cta: { fr: "Choisir mon profil", ar: "اختر ملفي الشخصي" },

  // Axes (Home)
  axis_informe_title: { fr: "Je m'informe", ar: "معلومات عامة" },
  axis_informe_desc: { fr: "Découvrir et comprendre l'autisme", ar: "اكتشاف وفهم التوحد" },
  axis_parent_title: { fr: "Je suis Parent", ar: "أنا أب/أم" },
  axis_parent_desc: { fr: "Ressources pour le quotidien", ar: "موارد للحياة اليومية" },
  axis_enseignant_title: { fr: "Je suis Enseignant", ar: "أنا معلم" },
  axis_enseignant_desc: { fr: "Outils pour l'inclusion scolaire", ar: "أدوات للإدماج المدرسي" },

  // Presentation (Home)
  home_pres_title: { fr: "Présentation Auti-Aura", ar: "تقديم Auti-Aura" },
  home_pres_text: { fr: "[Espace réservé pour la présentation d'Auti-Aura.]", ar: "[مساحة مخصصة لتقديم Auti-Aura.]" },
  home_pacte_title: { fr: "Le Projet Pacte", ar: "مشروع Pacte" },
  home_pacte_text: { fr: "[Espace réservé pour la présentation du Projet Pacte.]", ar: "[مساحة مخصصة لتقديم مشروع Pacte.]" },

  // Axis Page
  back_home: { fr: "Retour à l'accueil", ar: "العودة للرئيسية" },
  articles_title: { fr: "Articles Éducatifs", ar: "مقالات تعليمية" },
  articles_sub_ens: { fr: "Articles extraits du Guide de l'Enseignant", ar: "مقالات مستخرجة من دليل المعلم" },
  articles_sub_other: { fr: "Ressources approfondies pour ce profil.", ar: "موارد مفصلة لهذا الملف." },
  quiz_title: { fr: "Quiz Interactif", ar: "اختبار تفاعلي" },
  quiz_sub: { fr: "Mythes vs Réalités sur l'autisme", ar: "خرافات مقابل حقائق حول التوحد" },
  axis_informe_header_desc: { fr: "Découvrir et comprendre l'autisme", ar: "اكتشاف وفهم التوحد" },
  axis_parent_header_desc: { fr: "Ressources pour le quotidien", ar: "موارد للحياة اليومية" },
  axis_enseignant_header_desc: { fr: "Outils pour l'inclusion scolaire", ar: "أدوات للإدماج المدرسي" },
  read_fr: { fr: "Français", ar: "الفرنسية" },
  read_ar: { fr: "العربية", ar: "العربية" },

  // Game
  game_title: { fr: "Espace Détente", ar: "مساحة الاسترخاء" },
  game_desc: { fr: "Touchez les cercles pour les voir changer de couleur et écouter une douce mélodie. Il n'y a pas de règles, pas de score, juste le plaisir de l'exploration sensorielle.", ar: "المس الدوائر لترى تغير لونها والاستماع إلى لحن هادئ. لا توجد قواعد، ولا نقاط، فقط متعة الاستكشاف الحسي." },

  // Footer
  footer_desc: { fr: "Notre mission est de sensibiliser, éduquer et soutenir les familles touchées par l'autisme pour une société plus inclusive.", ar: "مهمتنا هي توعية وتعليم ودعم العائلات المتأثرة بالتوحد من أجل مجتمع أكثر شمولاً." },
  footer_nav_title: { fr: "Navigation", ar: "تصفح" },
  footer_nav_home: { fr: "Accueil", ar: "الرئيسية" },
  footer_nav_informe: { fr: "Je m'informe", ar: "معلومات عامة" },
  footer_nav_parent: { fr: "Je suis Parent", ar: "أنا أب/أم" },
  footer_nav_enseignant: { fr: "Je suis Enseignant", ar: "أنا معلم" },
  footer_nav_jeu: { fr: "Espace Détente (Jeu)", ar: "مساحة الاسترخاء (لعبة)" },
  footer_contact_title: { fr: "Contact", ar: "اتصل بنا" },
  footer_rights: { fr: "Tous droits réservés.", ar: "جميع الحقوق محفوظة." },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Lang>('fr');

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  const t = (key: string): string => {
    return translations[key]?.[lang] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, isAr: lang === 'ar', t }}>
      <div dir={lang === 'ar' ? 'rtl' : 'ltr'} className={`font-sans ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
