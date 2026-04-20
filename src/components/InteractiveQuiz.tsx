import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, XCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const quizData = [
  {
    question: "L'autisme est une maladie mentale.",
    questionAr: "التوحد هو مرض عقلي.",
    isTrue: false,
    explanation: "Faux. C'est un trouble neurodéveloppemental qui affecte le développement du cerveau.",
    explanationAr: "خطأ. إنه اضطراب نمائي عصبي يؤثر على تطور الدماغ."
  },
  {
    question: "Le manque de contact visuel signifie que l'enfant ne nous aime pas.",
    questionAr: "نقص التواصل البصري يعني أن الطفل لا يحبنا.",
    isTrue: false,
    explanation: "Faux. C'est une difficulté de communication sociale, pas un manque d'affection.",
    explanationAr: "خطأ. هذه صعوبة في التواصل الاجتماعي وليست نقصاً في العاطفة."
  },
  {
    question: "Les comportements répétitifs (balancements) sont inutiles.",
    questionAr: "السلوكيات المتكررة (مثل الاهتزاز) لا فائدة منها.",
    isTrue: false,
    explanation: "Faux. Ce sont des mécanismes pour gérer le stress ou réguler les émotions.",
    explanationAr: "خطأ. هذه آليات للتعامل مع التوتر أو تنظيم العواطف."
  },
  {
    question: "L'autisme ne concerne que les garçons.",
    questionAr: "التوحد يصيب الأولاد فقط.",
    isTrue: false,
    explanation: "Faux. Il touche les deux sexes, bien que les statistiques montrent une prévalence plus élevée chez les garçons.",
    explanationAr: "خطأ. يصيب كلا الجنسين، على الرغم من أن الإحصائيات تظهر انتشاراً أعلى بين الأولاد."
  },
  {
    question: "Un enfant autiste peut aller à l'école ordinaire.",
    questionAr: "يمكن لطفل التوحد الذهاب إلى مدرسة عادية.",
    isTrue: true,
    explanation: "Vrai. L'inclusion est un droit et le guide propose des outils pour adapter l'environnement scolaire.",
    explanationAr: "صحيح. الإدماج حق، والدليل يقترح أدوات لتكييف البيئة المدرسية."
  },
  {
    question: "L'autisme est-il le résultat d'un traumatisme psychologique durant l'enfance ?",
    questionAr: "هل التوحد نتيجة صدمة نفسية في الطفولة؟",
    isTrue: false,
    explanation: "Faux. L'autisme est présent dès la naissance. Ce n'est pas un blocage psychologique dû à un événement, mais une structure cérébrale différente.",
    explanationAr: "خطأ. التوحد موجود منذ الولادة. ليس عائقاً نفسياً بسبب حدث معين، بل هو بنية دماغية مختلفة."
  },
  {
    question: "Une personne autiste préfère-t-elle toujours rester seule ?",
    questionAr: "هل يفضل الشخص المتوحد دائماً البقاء وحيداً؟",
    isTrue: false,
    explanation: "Faux. Beaucoup d'enfants autistes veulent se faire des amis, mais ils ne savent pas toujours comment s'y prendre ou sont épuisés par les codes sociaux complexes.",
    explanationAr: "خطأ. العديد من الأطفال المصابين بالتوحد يريدون تكوين صداقات، لكنهم قد لا يعرفون كيفية القيام بذلك أو يرهقون بالقواعد الاجتماعية المعقدة."
  },
  {
    question: "Le langage non-verbal (gestes, regard) est-il aussi important que la parole pour eux ?",
    questionAr: "هل اللغة غير اللفظية (الإيماءات، النظرات) مهمة بالنسبة لهم مثل الكلام؟",
    isTrue: true,
    explanation: "Vrai. Souvent, les personnes autistes s'appuient énormément sur les visuels car le traitement des informations auditives et sociales peut être saturé.",
    explanationAr: "صحيح. غالباً ما يعتمد الأشخاص المصابون بالتوحد بشكل كبير على المرئيات لأن معالجة المعلومات السمعية والاجتماعية قد تكون مشبعة."
  },
  {
    question: "Est-ce qu'une personne autiste peut mener une vie professionnelle et autonome ?",
    questionAr: "هل يمكن لشخص مصاب بالتوحد أن يعيش حياة مهنية ومستقلة؟",
    isTrue: true,
    explanation: "Vrai. Avec un diagnostic précoce et un accompagnement adapté, de nombreux adultes autistes travaillent, ont des familles et vivent de façon autonome.",
    explanationAr: "صحيح. مع التشخيص المبكر والدعم المناسب، العديد من البالغين المصابين بالتوحد يعملون، لديهم عائلات ويعيشون بشكل مستقل."
  },
  {
    question: "Les crises de colère sont-elles simplement des caprices ?",
    questionAr: "هل نوبات الغضب مجرد نزوات؟",
    isTrue: false,
    explanation: "Faux. Ces \"crises\" sont souvent des \"effondrements\" dus à une surcharge sensorielle ou émotionnelle que l'enfant ne peut plus supporter.",
    explanationAr: "خطأ. هذه \"الأزمات\" غالباً ما تكون \"انهيارات\" بسبب حمل زائد حسي أو عاطفي لم يعد الطفل قادراً على تحمله."
  }
];

export default function InteractiveQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null);
  const { lang, isAr } = useLanguage();

  const handleAnswer = (answer: boolean) => {
    setSelectedAnswer(answer);
    if (answer === quizData[currentQuestion].isTrue) {
      setScore(score + 1);
    }
    
    setTimeout(() => {
      setSelectedAnswer(null);
      if (currentQuestion < quizData.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowResult(true);
      }
    }, 2500); // Wait to read explanation
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
  };
  
  const text = {
    questionPrefix: isAr ? 'السؤال' : 'Question',
    vrai: isAr ? 'صحيح' : 'Vrai',
    faux: isAr ? 'خطأ' : 'Faux',
    finished: isAr ? 'انتهى الاختبار!' : 'Quiz terminé !',
    result1: isAr ? 'لقد حصلت على' : 'Vous avez obtenu',
    result2: isAr ? 'من' : 'sur',
    result3: isAr ? 'برافو على التزامك! هذا الاختبار وسيلة ممتازة للتوعية وكسر التحيزات.' : 'Bravo pour votre engagement ! Ce quiz est un excellent moyen de sensibiliser et de briser les préjugés.',
    replay: isAr ? 'إعادة الاختبار' : 'Rejouer le quiz',
  };

  return (
    <div className="bg-white rounded-[2rem] shadow-xl p-8 max-w-2xl mx-auto border border-slate-100 relative">
      <div dir={isAr ? 'rtl' : 'ltr'} className={isAr ? 'text-right mt-4' : 'text-left mt-4'}>
        <AnimatePresence mode="wait">
          {!showResult ? (
            <motion.div
              key="question"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <div className="text-sm font-bold text-[#3b82f6] mb-4 uppercase tracking-wider">
                {text.questionPrefix} {currentQuestion + 1} / {quizData.length}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-8 leading-tight">
                {isAr ? quizData[currentQuestion].questionAr : quizData[currentQuestion].question}
              </h3>
              
              <div className="flex gap-4 mb-8">
                <button
                  onClick={() => handleAnswer(true)}
                  disabled={selectedAnswer !== null}
                  className={`flex-1 py-4 rounded-xl font-bold text-lg transition-all ${
                    selectedAnswer === true
                      ? quizData[currentQuestion].isTrue
                        ? 'bg-green-500 text-white'
                        : 'bg-red-500 text-white'
                      : selectedAnswer !== null
                      ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                      : 'bg-[#3b82f6]/10 text-[#3b82f6] hover:bg-[#3b82f6]/20'
                  }`}
                >
                  {text.vrai}
                </button>
                <button
                  onClick={() => handleAnswer(false)}
                  disabled={selectedAnswer !== null}
                  className={`flex-1 py-4 rounded-xl font-bold text-lg transition-all ${
                    selectedAnswer === false
                      ? !quizData[currentQuestion].isTrue
                        ? 'bg-green-500 text-white'
                        : 'bg-red-500 text-white'
                      : selectedAnswer !== null
                      ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                      : 'bg-[#3b82f6]/10 text-[#3b82f6] hover:bg-[#3b82f6]/20'
                  }`}
                >
                  {text.faux}
                </button>
              </div>

              <AnimatePresence>
                {selectedAnswer !== null && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className={`p-4 rounded-xl flex items-start gap-3 ${
                      selectedAnswer === quizData[currentQuestion].isTrue ? 'bg-green-50 text-green-800' : 'bg-slate-50 text-slate-700'
                    }`}
                  >
                    {selectedAnswer === quizData[currentQuestion].isTrue ? (
                      <CheckCircle className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                    ) : (
                      <XCircle className="w-6 h-6 text-slate-400 shrink-0 mt-0.5" />
                    )}
                    <p className="font-medium text-sm sm:text-base leading-relaxed">
                      {isAr ? quizData[currentQuestion].explanationAr : quizData[currentQuestion].explanation}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <div className="w-24 h-24 bg-[#3b82f6] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl font-black text-white">{score}</span>
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">{text.finished}</h3>
              <p className="text-slate-600 mb-8 max-w-md mx-auto text-lg leading-relaxed">
                {text.result1} {score} {text.result2} {quizData.length}. {text.result3}
              </p>
              <button
                onClick={restartQuiz}
                className="bg-[#3b82f6] text-white px-8 py-4 rounded-full font-bold hover:bg-[#2563eb] transition-all shadow-lg shadow-blue-200"
              >
                {text.replay}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
