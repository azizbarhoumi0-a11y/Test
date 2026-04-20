import { Article, Video, AwarenessImage } from './types';

export const ARTICLES: Article[] = [
{
    id: 'i1',
    title: "Le saviez-vous ? L'autisme, une différence de traitement de l'information",
    excerpt: "L'autisme n'est pas une maladie mentale mais un fonctionnement neurologique différent.",
    content: "L'autisme n'est pas une maladie mentale mais un fonctionnement neurologique différent. Présentation des 'lunettes' à travers lesquelles l'enfant voit le monde (détails vs globalité).\n\n### Vrai / Faux\n**L'autisme est une maladie mentale ?**\n**Faux**. C'est un trouble neurodéveloppemental.",
    category: 'Comprendre',
    axis: 'informe',
    titleAr: "هل كنت تعلم؟ التوحد، اختلاف في معالجة المعلومات",
    contentAr: "> \"التوحد ليس مرضاً نفسياً، بل هو اختلاف في طريقة معالجة المعلومات في الدماغ. يرى المصاب بالتوحد العالم من خلال عدسة تركز على التفاصيل الدقيقة أكثر من المعنى الإجمالي.\"\n\n### صحيح أم خطأ؟\n**التوحد هو مرض نفسي؟**\n**خطأ**. التوحد هو اضطراب نمائي عصبي يختلف فيه عمل الدماغ."
  },
  {
    id: 'i2',
    title: "Le saviez-vous ? Histoire et Évolution du concept",
    excerpt: "Passer du terme maladie au Trouble du Spectre de l'Autisme (TSA).",
    content: "Passer du terme 'maladie' au 'Trouble du Spectre de l'Autisme' (TSA). La notion de 'spectre' : il n'y a pas un autisme, mais des autismes, chaque personne étant unique.\n\n### Vrai / Faux\n**Il n'y a qu'un seul type d'autisme ?**\n**Faux**. L'autisme est un spectre, ce qui signifie qu'il y a une grande diversité de profils.",
    category: 'Histoire',
    axis: 'informe',
    titleAr: "هل كنت تعلم؟ تطور مفهوم التوحد",
    contentAr: "> \"تطور مفهوم التوحد من 'مرض' إلى 'طيف اضطراب التوحد'. كلمة 'طيف' تعني أنه لا يوجد نوع واحد من التوحد، بل حالات متنوعة تختلف من شخص لآخر.\"\n\n### صحيح أم خطأ؟\n**يوجد نوع واحد فقط من التوحد؟**\n**خطأ**. التوحد عبارة عن طيف، مما يعني وجود تنوع كبير في الحالات والقدرات."
  },
  {
    id: 'i3',
    title: "Le saviez-vous ? Les forces et talents souvent ignorés",
    excerpt: "Mettre en avant la mémoire exceptionnelle, la capacité de concentration...",
    content: "Mettre en avant la mémoire exceptionnelle, la capacité de concentration sur des sujets précis et l'honnêteté sociale qui caractérisent souvent les personnes autistes.\n\n### Vrai / Faux\n**Les personnes autistes n'ont pas de capacités particulières ?**\n**Faux**. Beaucoup ont des intérêts spécifiques qui développent des talents remarquables comme une excellente mémoire ou une grande rigueur.",
    category: 'Talents',
    axis: 'informe',
    titleAr: "هل كنت تعلم؟ نقاط القوة والمواهب",
    contentAr: "> \"غالباً ما يتمتع الأشخاص ذوو التوحد بنقاط قوة مذهلة، مثل الذاكرة القوية، والقدرة العالية على التركيز في مواضيع محددة، والصدق في التعامل الاجتماعي.\"\n\n### صحيح أم خطأ؟\n**الأشخاص ذوو التوحد ليس لديهم قدرات خاصة؟**\n**خطأ**. كثير منهم يمتلكون اهتمامات خاصة تطور لديهم مواهب استثنائية كقوة الذاكرة أو الدقة المتناهية."
  },
  {
    id: 'i4',
    title: "Les signes qui doivent alerter (Dépistage précoce)",
    excerpt: "Le diagnostic est clinique. Les signes précoces à observer.",
    content: "Le diagnostic est clinique. Les signes incluent le retard de l'utilisation du pointage du doigt (vers 18 mois), l'absence de réponse au prénom, ou le retard de langage (écholalie : répétition de mots hors contexte).\n\n### Vrai / Faux\n**Chaque enfant autiste présente les mêmes signes dès la naissance ?**\n**Faux**. Les signes deviennent généralement plus visibles autour de l'âge de 18 mois à 2 ans, et varient considérablement.",
    category: 'Dépistage',
    axis: 'informe',
    titleAr: "علامات الإنذار للتشخيص المبكر",
    contentAr: "> \"يتم التشخيص سريرياً. من العلامات المبكرة تأخر اكتساب الإشارة بالأصبع (حوالي 18 شهراً)، عدم الاستجابة عند المناداة بالاسم، أو تأخر النطق (مثل ترديد الكلام بشكل غير ملائم).\"\n\n### صحيح أم خطأ؟\n**כל الأطفال ذوي التوحد تظهر عليهم نفس العلامات منذ الولادة؟**\n**خطأ**. تبدأ العلامات بالظهور بوضوح أكثر بين 18 شهراً وسنتين، وتختلف بشكل كبير من طفل لآخر."
  },
  {
    id: 'i5',
    title: "L'hypersensibilité sensorielle expliquée",
    excerpt: "De nombreuses personnes autistes ont des réactions intenses aux stimuli.",
    content: "De nombreuses personnes autistes ont des réactions intenses aux stimuli : peur des bruits d'appareils ménagers, fascination pour la lumière, ou gêne face à certaines textures de vêtements.\n\n### Vrai / Faux\n**Un enfant qui se bouche les oreilles fait un caprice ?**\n**Faux**. C'est souvent une réaction à une \"surcharge sensorielle\" (un bruit que nous trouvons normal peut être douloureux pour lui).",
    category: 'Sensoriel',
    axis: 'informe',
    titleAr: "فرط الحساسية الحسية",
    contentAr: "> \"يبدي العديد من الأشخاص ذوي التوحد ردود فعل مبالغ فيها تجاه المحفزات الحسية: مثل الخوف من أصوات الأجهزة المنزلية، الانبهار بالضوء، أو الانزعاج الشديد من ملمس بعض الأقمشة.\"\n\n### صحيح أم خطأ؟\n**عندما يغطي الطفل أذنيه، فهو يتدلل؟**\n**خطأ**. هذا غالباً رد فعل على \"عبء حسي زائد\" (الصوت الذي نراه طبيعياً قد يكون مؤلماً جداً بالنسبة له)."
  },
  {
    id: 'i6',
    title: "Le droit à l'éducation : Un cadre mondial",
    excerpt: "L'éducation est un droit garanti par la Déclaration universelle.",
    content: "L'éducation est un droit garanti par la Déclaration universelle des droits de l'homme (Art. 26) et la Convention de l'UNESCO contre la discrimination. Chaque enfant, quel que soit son handicap, doit avoir accès à une école inclusive.\n\n### Vrai / Faux\n**Un enfant autiste ne peut pas aller dans une école classique ?**\n**Faux**. Avec un accompagnement adapté, l'inclusion en milieu classique (ordinaire) est tout à fait possible et très bénéfique.",
    category: 'Droits',
    axis: 'informe',
    titleAr: "الحق في التعليم: إطار عالمي",
    contentAr: "> \"التعليم حق تضمنه الإعلان العالمي لحقوق الإنسان (المادة 26) واتفاقية اليونسكو لمكافحة التمييز. يجب أن يتمتع كل طفل، مهما كانت إعاقته، بالحق في تعليم دامج.\"\n\n### صحيح أم خطأ؟\n**لا يمكن للطفل التوحدي الذهاب إلى مدرسة عادية؟**\n**خطأ**. مع الدعم المناسب والتكيف، يعد الإدماج في المدارس العادية ممكناً جداً ومفيداً للطفل."
  },
{
    id: '5',
    title: "Le droit à l'éducation inclusive : Cadre légal et ambition",
    excerpt: "Découvrez le cadre légal qui garantit le droit à l'éducation pour tous les enfants.",
    content: `La réalisation de l'égalité et la garantie de l'égalité des chances pour tous sont des principes fondamentaux.\n\n### Un droit universel\nL'éducation est un droit garanti à l'échelle internationale par l'Article 26 de la Déclaration universelle des droits de l'homme (1948). Toute personne a droit à l'éducation, qui doit être gratuite et obligatoire, au moins pour l'enseignement fondamental.\n\n### Un engagement national\nLa Constitution tunisienne garantit le droit à l'enseignement public gratuit et obligatoire. L'État s'engage solennellement à fournir les conditions appropriées pour l'intégration des enfants à besoins spécifiques, rassurant ainsi les parents et les équipes éducatives.`,
    category: 'Cadre Légal',
    axis: 'enseignant',
    titleAr: "التعليم حق لكل الأطفال : الإطار القانوني",
    contentAr: "> \"إن تحقيق المساواة وضمان تكافؤ الفرص بين الجميع كما ينص على ذلك الدستور ومجلة حقوق الطفل ونبذ كل أشكال التمييز بين أطفال تونس مبادئ عملنا على إدماجها. تضمن الدولة الحق في التعليم العمومي المجاني بكامل مراحله، والتعليم إلزامي إلى سن السادسة عشرة (الفصل 44 من دستور 2022). المادة 26 من الإعلان العالمي لحقوق الإنسان تكفل حق الطفل في التعليم المجاني والإلزامي في مراحله الأولى.\"\n\n### نصائح عملية للمربي:\n- **معرفة حقوق الطفل:** تأكد من إلمامك بالتشريعات المدرسية لتقديم دعم أفضل للعائلات وتوجيههم.\n- **تكييف القسم:** اطلب التجهيزات اللازمة من الإدارة لضمان تكافؤ الفرص في التعلم وإزالة العوائق."
  },
  {
    id: '6',
    title: "Mieux comprendre le fonctionnement d'un enfant autiste",
    excerpt: "Décryptage des 3 théories psychologiques essentielles pour comprendre l'autisme.",
    content: `Le Trouble du Spectre de l'Autisme (TSA) est un trouble neurodéveloppemental. Il se manifeste par des défis dans la communication, et par des intérêts restreints.\n\n### La théorie de l'esprit\nImaginez jouer aux devinettes sans voir le visage de l'autre : l'enfant a une difficulté à comprendre les intentions et les émotions d'autrui.\n\n### La cohérence centrale\nC'est comme regarder un tableau à la loupe : l'enfant va avoir tendance à se focaliser sur des détails précis au détriment de l'ensemble de la situation.\n\n### Les fonctions exécutives\nC'est comme un chef d'orchestre qui hésite : cela entraîne des difficultés de planification et d'adaptation face aux imprévus et aux changements de routine.`,
    category: 'Comprendre',
    axis: 'enseignant',
    titleAr: "ماهية اضطراب طيف التوحد (TSA)",
    contentAr: "> \"اضطراب طيف التوحد هو اضطراب نمائي عصبي يظهر من خلال تحديات في مجالين رئيسيين: التواصل والتفاعل الاجتماعي، وأنماط سلوكية أو اهتمامات مقيدة ومتكررة. لفهم الطفل، نعتمد على ثلاث نظريات: نظرية الذكاء الوجداني، نظرية التناسق المركزي للتفكير، والوظائف التنفيذية للمخ.\"\n\n### نصائح عملية للمربي:\n- **تجنب الحكم المتسرع:** تذكر أن التصرفات ليست عناداً، بل هي اختلاف في ترجمة الأحاسيس والمعلومات.\n- **استخدام وسائل بصرية:** لدعم \"المهام التنفيذية\"، استخدم الجداول البصرية لتنظيم المهام اليومية في القسم."
  },
  {
    id: '7',
    title: "Identifier les signes d'alerte",
    excerpt: "Une check-list visuelle pour vous aider à identifier les signes d'alerte en milieu scolaire.",
    content: `Les signes d'alerte du TSA peuvent apparaître très tôt. Il est important d'être attentif.\n\n### Check-list visuelle des signes d'alerte\n- [ ] **Pointage :** Absence de pointage du doigt pour demander ou montrer un objet.\n- [ ] **Contact visuel :** Fuite du regard ou manque de contact visuel soutenu.\n- [ ] **Langage :** Retard de langage manifeste ou absence d'expression verbale adaptée.\n\n### L'importance de l'orientation\nAttention : ne posez **jamais** de diagnostic vous-même. Le diagnostic ne peut être posé que par des spécialistes (pédopsychiatres). Votre rôle est de repérer ces signes et d'orienter la famille vers les professionnels compétents pour un accompagnement adapté.`,
    category: 'Dépistage',
    axis: 'enseignant',
    titleAr: "علامات الإنذار المبكر والتشخيص",
    contentAr: "> \"يمثل تأخر اكتساب الإشارة بالإصبع عن عمر السنة أحد الأعراض الفارقة. قد يبدو الطفل غير مهتم بمحيطه تماما أو قد يلجأ إلى الاستعانة بيد شخص مقرب للإشارة إلى احتياجاته. التشخيص يتم من قبل فريق مختص (أطباء نفسيين للأطفال) عبر الملاحظة السريرية.\"\n\n### نصائح عملية للمربي:\n- **الملاحظة الدقيقة:** راقب تفاعل الطفل وسجل ملاحظاتك موضوعياً للتواصل مع المختصين في حال لزم الأمر.\n- **التوجيه اللطيف:** وجه الأولياء بلطف للتحدث مع طبيب الأطفال دون إصدار أحكام أو تشخيص مسبق من طرفك."
  },
  {
    id: '8',
    title: "5 étapes pour rendre votre classe inclusive",
    excerpt: "Aménager l'espace et le temps pour favoriser la stabilité de l'enfant autiste.",
    content: `L'aménagement du milieu éducatif est crucial pour réduire l'anxiété et structurer la journée.\n\n### 5 étapes clés\n1. **Définir des zones dédiées :** Créez des lieux fixes pour chaque activité (coin jeu, coin repas, coin calme).\n2. **Utiliser des supports visuels :** Marquez ces espaces avec des photos ou des pictogrammes clairs.\n3. **Réduire les stimuli :** Atténuez les bruits excessifs ou les lumières trop vives qui perturbent la concentration.\n4. **Créer une routine prévisible :** Établissez un emploi du temps visuel régulier.\n5. **Anticiper l'imprévu :** Prévenez l'enfant à l'avance des changements d'activité.`,
    category: 'Aménagement',
    axis: 'enseignant',
    titleAr: "تنظيم الفضاء والوقت في الروضة",
    contentAr: "> \"إن العناية بالفضاء التربوي وهيكلة محيط الطفل يضمن له الاستقرار النفسي. يجب وضع روتين يومي يساهم في تقليص القلق، ويستحسن تقديم الجدول للطفل عبر وسائل مرئيّة. يحتاج الطفل إلى مزيد التفصيل لكي يتمكن من الاستيعاب الفردي لما هو جماعي.\"\n\n### نصائح عملية للمربي:\n- **تحديد المساحات:** اجعل كل ركن في القسم مقترناً بنشاط واحد (ركن القراءة، ركن اللعب) لتسهيل الفهم على الطفل.\n- **الروتين البصري:** ضع جدولاً يومياً مرئياً (صور أو رسوم) ليطمئن الطفل لمعرفة ما سيحدث تالياً."
  },
  {
    id: '9',
    title: "Conseils de pro : Développer l'autonomie",
    excerpt: "Techniques pour soutenir l'apprentissage physiologique et l'autonomie.",
    content: `L'acquisition de l'autonomie physiologique (propreté, repas) doit se faire progressivement et avec bienveillance.\n\n### Séquences visuelles\nPour la propreté, utilisez des bandes visuelles décomposant chaque étape : baisser le pantalon, s'asseoir, se laver les mains.\n\n### La technique du chaînage arrière\nCette méthode est très efficace : l'éducateur aide l'enfant pas à pas pour réaliser la tâche, **sauf pour la toute dernière étape** que l'enfant fait seul. Une fois cette étape maîtrisée, on laisse l'enfant faire les deux dernières, et ainsi de suite. Cela garantit un sentiment de réussite immédiat !\n\nL'environnement doit rester calme et les consignes simples (guidage physique ou instructions verbales courtes).`,
    category: 'Pédagogie',
    axis: 'enseignant',
    titleAr: "دعم الاستقلالية والوظائف الفيزيولوجية",
    contentAr: "> \"دعم الاستقلالية من أجل القيام بالوظائف الفيزيولوجية الأساسية (نظافة، أكل). يمكن استخدام تقنية 'التسلسل الخلفي': ساعد الطفل في كل خطوة باستثناء الأخيرة (مثل غلق السحاب) لتشجيعه. ثم زد الخطوات تدريجياً حتى ينجح في القيام بالمهمة كاملاً.\"\n\n### نصائح عملية للمربي:\n- **تجزئة المهام:** قسم المهمة الصعبة إلى خطوات صغيرة وبسيطة يسهل استيعابها.\n- **التعزيز الإيجابي المباشر:** شجع الطفل واحتفل بنجاحه في الخطوة الأخيرة لرفع معنوياته وتعزيز استقلاليته."
  },
  {
    id: '10',
    title: "Le pouvoir du jeu dans l'autisme",
    excerpt: "Comment favoriser la communication et les interactions à travers le jeu.",
    content: `La communication avec un enfant autiste ne passe pas uniquement par la parole. Le jeu est l'outil le plus puissant pour encourager l'interaction.\n\n### 3 idées d'activités simples\n1. **Le jeu d'imitation :** Mettez-vous face à l'enfant, observez-le et imitez ses actions (taper des mains, aligner des cubes). Cela lui montre que vous entrez dans son monde.\n2. **La variante douce :** Une fois le contact établi, introduisez doucement une petite variante dans le jeu pour susciter son intérêt sans le brusquer.\n3. **Le tour de rôle ludique :** Faites rouler une balle vers lui et attendez. Encouragez chaque tentative de retour (même non verbale) par un grand sourire.`,
    category: 'Interactions',
    axis: 'enseignant',
    titleAr: "مهارات التواصل والتفاعل الاجتماعي",
    contentAr: "> \"التواصل لا يقتصر على النطق. إذا كان الطفل لم ينطق بعد، ابدأ بتعلّم التواصل اللفظي بألعاب الفم والنفخ أمام المرآة. ارفق كل كلمة بالإيماءات أو الصور. اللعب هو المحرك الأساسي: انتظر حتى يقوم الطفل بإيماءة للمطالبة بشيء قبل تقديمه له.\"\n\n### نصائح عملية للمربي:\n- **استغلال الاهتمامات:** استخدم ألعاب الطفل المفضلة كجسر لبناء التواصل.\n- **الانتظار النشط:** أعط الطفل وقتاً كافياً (5 إلى 10 ثوان) لمعالجة المعلومة والرد قبل تكرار السؤال."
  },
  {
    id: '11',
    title: "Fiche pédagogique : Adapter les apprentissages",
    excerpt: "Solutions pratiques pour adapter la lecture, l'écriture et le calcul.",
    content: `L'adaptation des apprentissages fondamentaux est la clé de la réussite.\n\n### Lecture et Écriture\n- Privilégiez des livres très visuels et attractifs.\n- Laissez l'enfant manipuler le livre.\n- Pour l'écriture, utilisez des surfaces larges (grand tableau, fiches A3) et des aides à la préhension comme des manchons sur les crayons.\n\n### Calcul et Logique\nLe passage par le concret est **obligatoire**.\n- Utilisez des objets réels (jetons, boutons, bonbons) pour illustrer les opérations abstraites.\n- Divisez chaque tâche complexe en petites étapes simples.\n- Simplifiez les consignes à l'extrême : une idée = une phrase courte.`,
    category: 'Pédagogie',
    axis: 'enseignant',
    titleAr: "اكتساب المعارف المدرسية (القراءة والحساب)",
    contentAr: "> \"تعلم القراءة يبدأ بحب الكتاب؛ عوّد الطفل على رؤية الكتب وتصفحها بحرية. في الكتابة، يفضل استخدام المواد القابلة للمحو وأقلام الرصاص لتجنب الإحباط. في الحساب، يجب الاعتماد على المحسوس (درجات السلم، قطع الحلوى) قبل الانتقال للرموز المجردة.\"\n\n### نصائح عملية للمربي:\n- **التعليم الملموس:** استخدم أدوات حسية حقيقية (أزرار، معجون) لتبسيط المفاهيم المجردة كالحساب والعد.\n- **تقليل المشتتات:** قدم للطفل ورقة عمل خالية من الزينة المفرطة التي قد تشتت انتباهه أثناء التعلم."
  },
  {
    id: '12',
    title: "Comment réagir face à une crise émotionnelle ?",
    excerpt: "Gérer les émotions complexes et prévenir les situations de stress extrême.",
    content: `L'enfant autiste peine souvent à identifier et gérer ses propres émotions, ce qui peut mener à des crises (meltdowns).\n\n### L'importance de la prévention\nUtilisez un **"thermomètre des émotions"** visuel (du vert "calme" au rouge "colère"). Cela aide l'élève à exprimer son ressenti avant la surcharge.\n\n### En cas de crise\n1. **Restez calme :** L'éducateur doit être un modèle de gestion émotionnelle.\n2. **Moins de mots, plus d'espace :** Ne submergez pas l'enfant de consignes verbales. \n3. **Le coin calme :** Offrez doucement un espace de retrait sensoriel sécurisé.\n4. **Modélisation :** Nommez vos propres émotions de façon claire : "Je suis content car tu as réussi".`,
    category: 'Soutien',
    axis: 'enseignant',
    titleAr: "التعامل مع المشاعر والتوتر",
    contentAr: "> \"يجد الأطفال صعوبة في التعرف على مشاعرهم. يجب تسمية المشاعر من خلال المواقف المعيشة (مثال: 'أنت حزين، لم يعد هناك شوكولاتة'). استخدم 'مقياس المشاعر' بالوجوه الضاحكة والباكية لمساعدته على تحديد شدة شعوره (من هادئ إلى غاضب جداً).\"\n\n### نصائح عملية للمربي:\n- **الهدوء التام:** حافظ على نبرة صوت هادئة جداً لتفادي تصعيد نوبات الغضب.\n- **ركن الهدوء:** وفر زاوية مريحة خالية من المثيرات (خيمة صغيرة، مقعد مريح) ليلجأ إليها الطفل عند التوتر."
  },
  {
    id: '13',
    title: "Le partenariat éducatif : Un travail d'équipe",
    excerpt: "Pourquoi le réseau de soutien est-il la pièce maîtresse du succès de l'inclusion ?",
    content: `L'intégration réussie repose sur une approche participative. À l'école, un éducateur ne travaille jamais seul.\n\n### Une synergie indispensable\nL'éducateur collabore étroitement avec la famille, les médecins, les orthophonistes et les psychologues. Chaque intervenant est une pièce du puzzle indispensable autour de l'enfant.\n\n### Les outils de suivi\nL'utilisation d'un carnet de suivi ou d'un tableau de bord partagé permet de coordonner les efforts de tous. Cette collaboration évite la dispersion des énergies, assure une continuité cohérente entre la maison et l'école, et garantit ainsi un environnement porteur de sens et de progrès pour l'enfant.`,
    category: 'Collaboration',
    axis: 'enseignant',
    titleAr: "المربي وشبكة المتدخلين (العمل التشاركي)",
    contentAr: "> \"المربي لا يكتفي بالوظيفة البيداغوجية، بل يرافق الطفل في تطوره الاجتماعي والعاطفي. يجب التعاون مع العائلة والشباكات الخارجية (أخصائي تقويم النطق، أخصائي العلاج الوظيفي، والأخصائي الاجتماعي) لضمان دمج مدرسي ناجح.\"\n\n### نصائح عملية للمربي:\n- **كراس التواصل:** استخدم كراساً أسبوعياً للتواصل الإيجابي مع الأولياء وتبادل الملاحظات الهامة.\n- **تنسيق الجهود:** احرص على تطبيق نفس استراتيجيات المختص (مثال: أخصائي النطق) داخل القسم لدعم تقدم الطفل."
  },
  {
    id: '14',
    title: "Le portrait de l'éducateur inclusif",
    excerpt: "Un rôle qui dépasse l'enseignement pour devenir un pilier social et émotionnel.",
    content: `L'éducateur a une place particulièrement précieuse dans le réseau gravitant autour de l'élève avec TSA.\n\n### Bien plus qu'un enseignant\nSa mission ne se limite pas à transmettre des savoirs académiques. Il assure un accompagnement social et émotionnel profond. C'est lui qui observe, documente les intérêts de l'enfant et s'en sert comme levier de croissance globale.\n\nEn favorisant consciemment les interactions avec les camarades neurotypiques, l'éducateur aide l'élève à construire ses compétences sociales de manière sécurisante. Il est le garant de l'inclusion réelle au sein de l'établissement.`,
    category: 'Rôle expert',
    axis: 'enseignant',
    titleAr: "دور المربي كحلقة وصل",
    contentAr: "> \"المربي مسؤول عن الإشراف الاجتماعي والعاطفي للطفل داخل المؤسسة. يلاحظ ويوثق تطور الطفل ويدعمه في استكشافه واهتماماته الفردية، مما يسمح له ببناء مهاراته وتعزيز علاقاته مع الأطفال الآخرين.\"\n\n### نصائح عملية للمربي:\n- **الملاحظة الواعية:** دوّن اهتمامات الطفل الخاصة واستخدمها كمحفز في أنشطة القسم.\n- **كن النموذج:** لاحظ الأطفال كيف تتواصل بإيجابية وتقبل مع زميلهم، فاحرص على أن تكون مقداماً ومشجعاً طوال الوقت."
  },
  {
    id: '15',
    title: "Pourquoi et comment mettre en place un PEI ?",
    excerpt: "Évaluer pour mieux accompagner avec le Projet Éducatif Individuel.",
    content: `L'évaluation initiale est le point de départ incontournable de tout projet de prise en charge.\n\n### L'importance de l'évaluation\nElle permet de dresser un profil détaillé des capacités de l'enfant (moteur, langagier, cognitif et social) et d'identifier ses forces ainsi que ses besoins émergents.\n\n### Le Projet Éducatif Individuel (PEI)\nFondé sur cette évaluation, le PEI définit les objectifs d'intervention précis. Ce projet sur mesure s'adapte au stade de développement unique de l'enfant. Un suivi régulier permet ensuite de réajuster les stratégies, de mesurer les progrès et de maintenir les attentes au bon niveau.`,
    category: 'Méthodologie',
    axis: 'enseignant',
    titleAr: "التقييم والبرنامج التربوي الفردي",
    contentAr: "> \"التقييم الأولي هو حجر الزاوية في التكفل بالطفل. يسمح برسم صورة دقيقة لقدراته في مختلف المجالات (حركي، لغوي، ذهني). وبناءً عليه يتم وضع أهداف المشروع التربوي الفردي الذي يراعي وتيرة نمو الطفل.\"\n\n### نصائح عملية للمربي:\n- **أهداف واقعية:** حدد أهدافاً قصيرة المدى، قابلة للقياس والتحقيق لتجنب إحباط الطفل.\n- **التقييم المستمر:** راجع الأهداف بانتظام للتأكد من ملاءمتها، وعدّل خطتك التربوية حسب استجابة الطفل وتطوره."
  },
  {
    id: '16',
    title: "Comprendre et gérer l'hypersensibilité sensorielle",
    excerpt: "Solutions concrètes pour transformer une classe ordinaire en un lieu apaisant.",
    content: `Les enfants autistes perçoivent le monde extérieur avec une intensité différente. Ils ont grandement besoin de repères visuels et d'un cadre sensoriel stable.\n\n### Ajuster l'environnement\nIl est recommandé de baisser les lumières trop vives et les sources de bruit (utiliser des balles de tennis sous les chaises).\n\n### Concentration et Repli\n- Limitez le matériel sur la table : ne gardez que l'outil strictement nécessaire pour éviter la distraction.\n- Aménagez un **"espace de calme sensoriel"** : une petite tente ou un coin doux où l'enfant peut s'isoler librement s'il se sent submergé, sans que ce soit perçu comme une punition.`,
    category: 'Aménagement',
    axis: 'enseignant',
    titleAr: "الحساسية الحسية والبيئة المحيطة",
    contentAr: "> \"إذا كان الطفل شديد الحساسية السمعية، قم بتفسير ماهية الأصوات المختلفة (دراجة نارية، ضوضاء) لتقليل خوفه. توفير 'ركن هادئ' في القسم ضروري ليتمكن الطفل من الانسحاب إليه عند الشعور بالضغط الحسي.\"\n\n### نصائح عملية للمربي:\n- **التعديلات البيئية:** ضع كرات تنس قديمة أسفل كراسي القسم لتقليل ضجيج السحب الذي قد يزعج الطفل.\n- **الإعفاء عند اللزوم:** اسمح للطفل باستخدام سماعات للحد من الضجيج عند الشعور بإرهاق حسي شديد لتجنب الانهيار."
  },
  {
    id: '17',
    title: "Comment créer un scénario social ?",
    excerpt: "Utiliser la visualisation pour réduire l'anxiété des changements de routine.",
    content: `Face à l'imprévu ou à de nouvelles situations sociales, l'anxiété peut paralyser un élève TSA. Le scénario social est la solution idéale.\n\n### Qu'est-ce qu'un scénario social ?\nC'est une courte histoire dont l'enfant est le héros. Elle explique explicitement comment se comporter dans un contexte précis (premier jour d'école, cantine, exercice incendie).\n\n### Comment le créer ?\nUtilisez des phrases simples au présent, accompagnées de photos réelles, de dessins ou de pictogrammes que l'enfant connaît. En découpant la situation anxiogène étape par étape, on rend la nouveauté prévisible. Le cerveau de l'enfant sait ainsi exactement à quoi s'attendre, ce qui fait chuter son niveau de stress.`,
    category: 'Outils',
    axis: 'enseignant',
    titleAr: "استخدام القصص والسيناريوهات الاجتماعية",
    contentAr: "> \"استخدم السيناريو الاجتماعي (قصة قصيرة الطفل بطلها) لمساعدته على فهم كيفية التصرف في مواقف معينة (أول يوم في الروضة، زيارة الطبيب). الصور والرسوم التخطيطية تجعل الموقف قابلاً للتوقع وتقلل التوتر.\"\n\n### نصائح عملية للمربي:\n- **كتابة السيناريو سوياً:** اجعل الطفل بطل القصة واستخدم صوراً للمدرسة والقسم الحقيقيين لتسهيل الفهم والمطابقة.\n- **قراءة استباقية:** اقرأ القصة مع الطفل في أوقات استرخائه، وقبل موعد حدوث الموقف بفترة وجيزة لتخفيف التوتر."
  },
  {
    id: '18',
    title: "FAQ : L'enfant ne semble pas comprendre une consigne",
    excerpt: "Que faire face aux blocages de compréhension ?",
    content: `**Question :** Que faire quand un élève semble bloqué devant une instruction ?\n\n**Réponse :** Ne jugez jamais l'enfant et n'appliquez pas les mêmes standards de rapidité qu'aux autres.\n\n1. **Limitez les mots :** Privilégiez des phrases très courtes.\n2. **Séquencez :** Divisez la tâche en petites étapes ("Prends le crayon" -> *pause* -> "Ouvre le cahier" -> *pause*).\n3. **Passez au visuel :** La communication verbale est volatile. Remplacez ou soutenez toujours votre consigne par une image, un geste ou un pictogramme.`,
    category: 'Pédagogie',
    axis: 'enseignant',
    titleAr: "كيف أتصرف عند صعوبة التعلم؟",
    contentAr: "> \"لا تقيم الطفل على نفس القواعد التي تفرضها على زمالئه. تقبل الطفل كما هو. كن واضحاً واستعمل كلمات بسيطة وابتعد عن الجمل الطويلة. قم بتجزئة المهمة المعقدة إلى مهام بسيطة مع إعطاء فترات راحة.\"\n\n### نصائح عملية للمربي:\n- **تعليمات مبسطة:** قدم تعليماً واحداً قصيراً في كل مرة (\"افتح الكتاب\"، انتظر لحظة، ثم \"خذ القلم\").\n- **الدعم البصري الدائم:** رافق كلماتك بإشارة من يدك أو صورة توضيحية لتثبيت المعلومة المسموعة."
  },
  {
    id: '19',
    title: "Apprendre le calme : La relaxation au service de l'inclusion",
    excerpt: "Des exercices simples pour enseigner l'auto-régulation.",
    content: `La capacité à s'apaiser n'est pas innée pour un enfant autiste, mais elle peut s'enseigner.\n\n### Enseigner la relaxation\nL'éducateur peut introduire des techniques comme la respiration profonde (souffler sur un moulinet à vent), l'écoute d'une musique très douce au casque, ou le fait de s'allonger sur un tapis de motricité.\n\n### Progression\nCommencez par des sessions extrêmement courtes, en utilisant les centres d'intérêt de l'enfant pour la motivation. Augmentez très doucement la durée. Surtout, valorisez chaleureusement l'enfant à chaque effort réussi : cette confiance gagnée est le moteur de son autonomie émotionnelle.`,
    category: 'Soutien émotionnel',
    axis: 'enseignant',
    titleAr: "تقنيات الاسترخاء في القسم",
    contentAr: "> \"يمكن للمربي تعليم الطفل تقنيات الاسترخاء لتقليل التوتر: تمارين التنفس، الاستلقاء في هدوء، أو الاستماع لموسيقى هادئة. ابدأ بأنشطة قصيرة مرتبطة باهتمامات الطفل لزيادة قدرته على التحمل.\"\n\n### نصائح عملية للمربي:\n- **تمارين التنفس:** استخدم ألعاباً بسيطة مثل نفخ فقاعات الصابون لتدريب الطفل على التنفس العميق بهدوء.\n- **روتين الاسترخاء:** اجعل 5 دقائق من الاسترخاء والتمدد جزءاً ثابتاً وممتعاً من الروتين اليومي لكل أطفال القسم."
  },
  {
    id: '20',
    title: "Le jumelage : briser l'isolement social",
    excerpt: "Comment les activités en duo deviennent des ponts vers l'amitié.",
    content: `Pour beaucoup d'enfants autistes, comprendre les règles invisibles des interactions sociales est un défi immense et anxiogène.\n\n### La méthode du jumelage\nPour surmonter cet isolement, créez des duos encadrés. Jumelez l'enfant avec un camarade compréhensif autour d'une tâche très structurée (un dessin à deux mains, arroser les plantes, un jeu de construction).\n\n### Le rôle de l'éducateur\nL'éducateur doit, au départ, "scripter" la rencontre : dire exactement à l'enfant comment saluer ou demander l'objet. En utilisant une activité que l'élève autiste affectionne particulièrement, la motivation dépasse l'anxiété, et le duo devient le premier pas vers l'amitié véritable.`,
    category: 'Interactions',
    axis: 'enseignant',
    titleAr: "تشجيع الصداقات والاندماج مع الأقران",
    contentAr: "> \"شجع الطفل على القيام بمهام مشتركة مع زميل (مشروع فني، لعبة كرة). اشرح للطفل بوضوح ما يجب فعله في التفاعل الاجتماعي. منح الطفل حرية اختيار أنشطته المفضلة يزيد من دافعيته للمشاركة مع المجموعة.\"\n\n### نصائح عملية للمربي:\n- **الرفيق الداعم:** اختر طفلاً هادئاً ومتعاوناً من القسم ليكون \"زميل مساعدة\" للرفيق الذي لديه توحد في بعض الأنشطة المحددة.\n- **اللعب الموجه:** حدد قواعد لعب واضحة جداً للعبة المشتركة، وتدخل إيجابياً متى ما لزم الأمر لمنع الإحباط أو الخلاف."
  },
  {
    id: 'p1',
    title: "Comprendre l'autisme, un nouveau regard",
    excerpt: "L'autisme n'est pas une maladie, mais une manière différente de percevoir le monde.",
    content: "Il est tout à fait normal de se sentir perdu ou inquiet face au diagnostic. Rappelez-vous que l'autisme n'est pas une maladie à guérir, mais un trouble du neurodéveloppement. C'est une manière différente de percevoir le monde.\n\n### Une perception unique\nCe qui semble étrange pour nous a souvent un sens profond pour l'enfant. Il interagit avec son environnement selon ses propres repères. Il se manifeste de manière unique chez chaque enfant, allant des formes légères aux formes nécessitant plus de soutien.\n\n### Apprendre à observer\nPrenez le temps d'observer ce qui attire son attention et ce qui le calme. Votre amour et votre patience sont les clés pour l'accompagner sereinement.",
    category: 'Comprendre',
    axis: 'parent',
    titleAr: "فهم التوحد، نظرة جديدة",
    contentAr: "> \"التوحد ليس مرضاً، بل هو اضطراب نمائي عصبي يؤثر على طريقة إدراك الشخص للعالم وتفاعله معه. يتجلى بشكل فريد لدى كل طفل، من الأشكال البسيطة إلى الأشكال التي تتطلب دعماً كبيراً.\"\n\n### نصائح عملية للأولياء:\n- **الابتعاد عن الأحكام:** تقبل طفلك كما هو وافهم أن سلوكياته هي طريقة للتعبير.\n- **الاحتفال بالتميز:** ركز على نقاط قوة طفلك واهتماماته الخاصة لبناء جسر للتواصل."
  },
  {
    id: 'p2',
    title: "Créer un cocon sécurisant au quotidien",
    excerpt: "Aménagez l'espace et structurez le temps pour réduire l'anxiété de votre enfant.",
    content: "Gérer le quotidien peut parfois ressembler à un défi épuisant. L'enfant autiste a un besoin crucial de routine et de prévisibilité pour se sentir en sécurité.\n\n### La force de la routine\nOrganisez les journées avec des horaires fixes. Utilisez des pictogrammes ou un emploi du temps visuel pour l'aider à anticiper sa journée et réduire son anxiété.\n\n### Un espace adapté\nAménagez des zones dédiées spécifiques à la maison : un coin ludique pour le jeu, et un \"coin calme\" réduit en stimuli (sans bruit ni lumière forte) pour qu'il puisse s'y réfugier lorsqu'il en ressent le besoin.",
    category: 'Quotidien',
    axis: 'parent',
    titleAr: "خلق بيئة آمنة (الروتين والمكان)",
    contentAr: "> \"يحتاج الطفل التوحدي إلى بيئة يمكن توقعها وروتين واستقرار ليشعر بالأمان. نظم الأيام بجداول زمنية ثابتة واستخدم الصور لمساعدته على تخيل يومه. جهز زوايا خاصة لكل نشاط (لعب، دراسة، استرخاء).\"\n\n### نصائح عملية للأولياء:\n- **الجدول البصري:** استخدم صوراً لتمثيل أنشطة اليوم (أكل، لعب، نوم) لتخفيف قلق الانتظار.\n- **ركن الهدوء:** خصص مكاناً هادئاً في البيت يلجأ إليه الطفل عند الشعور بالضغط أو التعب."
  },
  {
    id: 'p3',
    title: "Mieux communiquer avec mon enfant",
    excerpt: "Des stratégies simples pour encourager et faciliter la communication.",
    content: "La communication peut être l'un des plus grands défis. Ne vous découragez pas si les mots tardent à venir, la communication ne se limite pas à la parole.\n\n### Le pouvoir du visuel\nL'enfant autiste est souvent beaucoup plus réceptif aux supports visuels. Utilisez des photos, des dessins ou des pictogrammes pour expliquer les règles et les attentes. \n\n### Clarté et renforcement\nFavorisez des phrases très courtes et claires. Laissez-lui le temps de traiter l'information. Surtout, soyez généreux en encouragements : récompensez chaque effort de communication, même s'il s'agit d'un simple regard ou d'un geste.",
    category: 'Communication',
    axis: 'parent',
    titleAr: "تواصل أفضل مع طفلي",
    contentAr: "> \"الطفل التوحدي أكثر استجابة للوسائل البصرية. استخدم الصور والرسوم لشرح القواعد. شجع التفاعلات البسيطة بجمل قصيرة وكافئ كل محاولة تواصل حتى لو لم تكن مثالية.\"\n\n### نصائح عملية للأولياء:\n- **الجمل القصيرة:** تحدث بوضوح وبطء، واستخدم كلمات بسيطة لتسهيل الفهم على الطفل.\n- **التشجيع المستمر:** كافئ كل محاولة تواصل (مثل إشارة باليد أو ابتسامة) لتشجيعه على تكرار المحاولة."
  },
  {
    id: 'p4',
    title: "Décoder et gérer les comportements intenses",
    excerpt: "Comprendre les déclencheurs pour mieux accompagner les surcharges sensorielles.",
    content: "Face à une crise ou à des comportements répétitifs, il est normal de se sentir démuni. Ces comportements ne sont pas des caprices, mais souvent des mécanismes pour gérer un surplus sensoriel ou une émotion forte.\n\n### Identifier les déclencheurs\nObservez l'environnement de votre enfant lors de ces moments : y a-t-il trop de bruit ? Une lumière clignotante ? Un changement inattendu ? L'identification des déclencheurs est la première étape.\n\n### Proposer des alternatives\nPlutôt que d'interdire un comportement répétitif (qui l'apaise souvent), proposez des alternatives de régulation : des jeux sensoriels, une balle anti-stress, ou un retrait dans son espace calme. Gardez toujours vous-même une attitude paisible.",
    category: 'Soutien',
    axis: 'parent',
    titleAr: "فك شفرة السلوكيات والتعامل معها",
    contentAr: "> \"السلوكيات المتكررة هي غالباً آليات دفاعية لمواجهة ضغط حسي أو وسيلة لإدارة العواطف القوية. حدد المسببات (ضوضاء، إضاءة، تغيير روتين) وقدم بدائل مثل الألعاب الحسية لمساعدة الطفل على الهدوء.\"\n\n### نصائح عملية للأولياء:\n- **تحليل السلوك:** بدلاً من الغضب، حاول ملاحظة ما حدث قبل السلوك مباشرة لفهم المسبب.\n- **تقديم البديل الحسّي:** إذا كان الطفل يرفرف بيديه عند التوتر، قدم له كرة مطاطية ليضغط عليها كطريقة بديلة لتفريغ الطاقة."
  },
  {
    id: 'p5',
    title: "Construire son équipe de soutien",
    excerpt: "Réseauter et s'entourer pour trouver des solutions et du réconfort.",
    content: "Vous n'êtes pas seul face à l'autisme. Solliciter de l'aide n'est pas un signe de faiblesse, mais une démarche indispensable pour votre enfant et votre famille.\n\n### S'entourer de professionnels\nLes éducateurs spécialisés, les orthophonistes et les paramédicaux aident l'enfant à progresser à son rythme. Les psychologues peuvent également soutenir l'équilibre familial global.\n\n### La force du groupe\nÉchanger avec d'autres parents vivant les mêmes défis est extrêmement thérapeutique. Rejoignez des groupes de soutien pour partager vos expériences, vos astuces et trouver un réconfort précieux auprès de ceux qui vous comprennent vraiment.",
    category: 'Collaboration',
    axis: 'parent',
    titleAr: "بناء فريق الدعم الخاص بك",
    contentAr: "> \"لا تبقَ وحيداً. المربون المختصون يساعدون الطفل على تطوير مهاراته، والأطباء النفسيون يلعبون دوراً في دعم التوازن العائلي. تبادل الخبرات مع أولياء أمور آخرين يخفف من الشعور بالعزلة.\"\n\n### نصائح عملية للأولياء:\n- **التواصل الفعّال:** احرص على التواصل المستمر مع المختصين ومعلمي طفلك لتوحيد جهود الدعم.\n- **مجموعات الدعم:** انضم إلى جمعيات أو مجموعات على وسائل التواصل الاجتماعي لأولياء أطفال التوحد لتبادل التجربة والشعور بالسند."
  },
  {
    id: 'p6',
    title: "Prendre soin de soi pour mieux accompagner",
    excerpt: "L'importance vitale du bien-être parental pour l'équilibre de l'enfant.",
    content: "Prendre soin d'un enfant ayant des besoins spécifiques demande une énergie phénoménale. Il est facile de s'oublier, pourtant, votre bien-être est la base de son évolution.\n\n### Un parent reposé est plus efficace\nL'épuisement n'aide ni vous ni votre enfant. Un parent ressourcé a plus de patience et d'intuition.\n\n### Accordez-vous du répit\nPrenez des pauses régulières. Pratiquez vos loisirs, lisez, marchez, ou accordez-vous du temps pour vous. N'hésitez pas à demander l'aide de vos proches pour un relais. Maintenir votre dynamique positive est essentiel pour continuer à l'accompagner avec bienveillance.",
    category: 'Bien-être',
    axis: 'parent',
    titleAr: "اعتن بنفسك لتتمكن من المساعدة بطريقة أفضل",
    contentAr: "> \"رعاية طفل توحدي تتطلب طاقة كبيرة. الوالد المنهك لا يمكنه المساعدة بفعالية. من الضروري أخذ فترات راحة منتظمة وممارسة أنشطة ترفيهية لتجنب الإنهاك. طلب الدعم ليس ضعفاً بل ضرورة للاستمرار.\"\n\n### نصائح عملية للأولياء:\n- **فترات الراحة:** لا تشعر بالذنب إذا طلبت من الجد أو الجدة الاهتمام بالطفل لساعة من الزمن لتأخذ قسطاً من الراحة.\n- **الحفاظ على الهوايات:** خصص وقتاً أسبوعياً صغيراً لنفسك للقيام بشيء يمتعك ويجدد طاقتك الإيجابية."
  },
  {
    id: 'p7',
    title: "Préparer les transitions (Sorties et Changements)",
    excerpt: "Comment anticiper les imprévus et structurer les sorties pour éviter le stress.",
    content: "Face à l'imprévu, l'enfant avec TSA peut vite se sentir menacé. La clé d'une sortie réussie réside dans l'anticipation et la douceur.\n\n### Prévenir avant d'agir\nLes changements, même mineurs, peuvent être sources de grand stress. Pour aider votre enfant, avertissez-le à l'avance d'une transition (ex: \"dans 5 minutes, on range\"). \n\n### Illustrer l'avenir\nVous pouvez utiliser des dessins ou raconter de petits \"scénarios sociaux\" pour lui expliquer le déroulement d'une sortie, comme une visite chez le médecin ou l'entrée dans un supermarché. Cela permet de rendre l'inconnu prévisible et de réduire drastiquement ses peurs.",
    category: 'Quotidien',
    axis: 'parent',
    titleAr: "التحضير للانتقالات (الخروج والتغييرات)",
    contentAr: "> \"التغييرات، حتى البسيطة منها، قد تسبب التوتر للطفل. لمساعدة طفلك، حذره مسبقاً قبل أي انتقال (مثال: \"بعد 5 دقائق، سنجمع الألعاب\"). يمكنك استخدام الرسوم أو \"السيناريوهات الاجتماعية\" لشرح مراحل الخروج، مثل زيارة الطبيب، لتقليل مخاوفه.\"\n\n### نصائح عملية للأولياء:\n- **التدرج الزمني:** استخدم مؤقتًا زمنيًا مرئيًا (مثل ساعة رملية) لمساعدة الطفل على إدراك اقتراب نهاية النشاط.\n- **صناعة القصة:** قبل زيارة مكان جديد (طبيب، حلاق)، أرِه صوراً للمكان واشرح له خطوة بخطوة ما سيحدث هناك."
  },
  {
    id: 'p8',
    title: "Gérer l'heure des repas et la sélectivité alimentaire",
    excerpt: "Astuces pour créer un environnement apaisant autour de l'alimentation.",
    content: "L'heure des repas est souvent redoutée. Beaucoup de parents s'inquiètent face à la sélectivité alimentaire de leur enfant. Gardez espoir, des gestes simples apaisent le moment.\n\n### Respecter ses sensibilités\nCertains enfants autistes sont très sensibles aux textures, odeurs ou couleurs des aliments. Ne mélangez pas les aliments dans l'assiette. Laissez-les séparés pour qu'il puisse les identifier. Introduisez les nouveautés très progressivement et incitez-le à goûter, sans jamais le forcer.\n\n### Un environnement serein\nCréez une ambiance extrêmement calme : réduisez les lumières vives, éteignez la télévision et évitez les bruits forts. Un environnement sans distraction favorise sa concentration et son appétit.",
    category: 'Quotidien',
    axis: 'parent',
    titleAr: "تنظيم أوقات الأكل والانتقائية في الطعام",
    contentAr: "> \"بعض الأطفال ذوي التوحد لديهم حساسية شديدة تجاه ملمس الطعام. لا تخلط الأطعمة في الصحن وقدم الأصناف الجديدة تدريجياً (التذوق دون إجبار). وفر أجواءً هادئة بعيدة عن المشتتات (تلفاز أو ضجيج) لتعزيز تركيزه أثناء الأكل.\"\n\n### نصائح عملية للأولياء:\n- **القواعد البصرية:** استخدم طبقاً مقسماً لتفادي اختلاط الأطعمة الذي قد يزعج الطفل حسياً.\n- **المشاركة في التحضير:** اطلب منه مساعدتك في غسل الخضار أو إعداد المائدة للتقليل من خوفه تجاه أصناف الطعام."
  },
  {
    id: 'p9',
    title: "Le carnet de liaison, un pont Famille-École",
    excerpt: "Comment assurer une continuité harmonieuse entre la maison et l'école.",
    content: "Vos efforts à la maison résonnent à l'école, et inversement. Une alliance solide avec les éducateurs est essentielle pour l'épanouissement de votre enfant.\n\n### Un outil précieux\nMettez en place un petit carnet de liaison quotidien. L'équipe éducative et vous-même pourrez y noter les progrès, une nuit agitée, une émotion marquante ou de nouvelles découvertes.\n\n### Harmoniser les méthodes\nCe flux d'informations permet à l'enseignant de donner du sens aux comportements de l'enfant dans la journée, et vous permet de reprendre à la maison les stratégies qui fonctionnent bien à l'école.",
    category: 'Scolarité',
    axis: 'parent',
    titleAr: "كراس التواصل، الجسر بين البيت والمدرسة",
    contentAr: "> \"التواصل مع المربي أمر أساسي. قم بإنشاء \"كراس تواصل\" تسجل فيه أنت والمعلم التقدم الحاصل، أو التغييرات في المزاج، أو الاكتشافات الجديدة. هذا يسمح بفهم سلوكيات الطفل وتوحيد الطرق المستخدمة بين البيت والروضة.\"\n\n### نصائح عملية للأولياء:\n- **المعلومات الضرورية:** دوّن في الكراس مثلاً إذا كان الطفل لم ينم جيداً لتنبيه المربي لتقلب مزاجه المحتمل.\n- **التشجيع المشترك:** اتفق مع المربي على كلمات مديح أو مكافآت موحدة يستخدمها الطرفان لتثبيت السلوك الإيجابي."
  },
  {
    id: 'p10',
    title: "Favoriser l'autonomie au quotidien",
    excerpt: "L'accompagner pas à pas vers la propreté et l'habillage.",
    content: "Chaque nouveau geste d'autonomie est une grande victoire. Patience et méthode sont vos meilleures alliées.\n\n### La magie de la décomposition\nPour aider votre enfant à s'habiller ou se laver seul, ne demandez pas la tâche globale. Décomposez-la en petites étapes très simples (prendre le pantalon, passer une jambe, puis l'autre). \n\n### Le guidage bienveillant\nAu début, vous pouvez utiliser la technique du \"guidage physique\" en accompagnant doucement sa main, ou utiliser l'imitation en le faisant en même temps que lui devant un miroir. Félicitez-le chaleureusement pour chaque petit pas, cela nourrit considérablement sa confiance en lui !",
    category: 'Autonomie',
    axis: 'parent',
    titleAr: "تعزيز الاستقلالية في الحياة اليومية",
    contentAr: "> \"لمساعدة طفلك على ارتداء ملابسه أو الاغتسال بمفرده، قم بتجزئة كل مهمة إلى خطوات بسيطة. يمكنك استخدام تقنية \"التوجيه الجسدي\" (أمسك يده في البداية) أو التقليد. احرص على تشجيعه عند كل نجاح صغير لتعزيز ثقته بنفسه.\"\n\n### نصائح عملية للأولياء:\n- **الصور التسلسلية:** الصق صوراً بالترتيب الخطوات (مثال: خطوات غسل اليدين) بجانب المغسلة لتذكيره بصرياً بالخطوات.\n- **الاستقلالية الموجهة:** دعه يكمل الخطوة الأخيرة بنفسه (مثل إغلاق صنبور الماء) لكي يشعر بمتعة الإنجاز والاعتماد على الذات."
  },
  {
    id: 'p11',
    title: "Apaiser les surcharges sensorielles",
    excerpt: "Créer un environnement de repli pour l'aider à retrouver son équilibre.",
    content: "Les enfants autistes ont parfois des filtres sensoriels différents des nôtres, rendant une situation banale très agressive pour eux. Comprendre cela change tout.\n\n### Une enquête sensorielle\nSi votre enfant semble agité sans raison apparente (se bouche les oreilles, crie), agissez comme un détective. Vérifiez l'environnement : y a-t-il trop de bruit de fond ? Une lumière fluorescente trop vive ? Une odeur de cuisine trop forte ?\n\n### Le pouvoir du \"Coin Calme\"\nOffrez-lui de manière préventive un espace de retrait. Aménagez un \"coin calme\" (une petite tente de jeu, un matelas au sol) avec ses objets apaisants préférés. S'il sent qu'il peut s'y réfugier librement, sa sérénité reviendra plus vite.",
    category: 'Soutien',
    axis: 'parent',
    titleAr: "التعامل مع الضغط الحسي المفرط",
    contentAr: "> \"إذا بدا طفلك مضطرباً دون سبب واضح، تفقد محيطه: هل هناك ضجيج عالٍ، إضاءة قوية أو رائحة نفاذة؟ وفر له \"ركناً هادئاً\" يحتوي على أشيائه المفضلة ليلجأ إليه ويستعيد هدوءه.\"\n\n### نصائح عملية للأولياء:\n- **أدوات الحماية:** فكر في توفير سماعات عازلة للضجيج أو نظارات شمسية استخدامها أثناء التسوق لتقليل التوتر الحسي.\n- **التفهم المطلق:** لا تجبره على البقاء في مكان مزدحم إذا لاحظت بداية توتره؛ احترام حواسه هو أول خطوات تهدئته."
  },
  {
    id: 'p12',
    title: "Joie et complicité avec les frères et sœurs",
    excerpt: "Expliquer l'autisme à la fratrie et partager des moments en famille.",
    content: "La place des frères et sœurs est fondamentale. Ils se posent souvent des questions et ressentent parfois de l'injustice. Une communication ouverte est réparatrice.\n\n### Mettre des mots simples\nExpliquez très simplement à la fratrie que leur frère ou sœur ne fait pas exprès, mais que son cerveau perçoit le monde un peu différemment. Répondez à leurs questions de manière naturelle.\n\n### Le jeu pour rassembler\nPour créer des liens solides, encouragez des moments de jeux simples basés sur les sens (faire des bulles de savon, se passer un ballon de gym). Ces jeux sensoriels ne demandent pas de langage complexe et créent de beaux sourires. N'oubliez pas non plus de conserver régulièrement des moments exclusifs avec chaque enfant pour maintenir l'harmonie familiale.",
    category: 'Famille',
    axis: 'parent',
    titleAr: "الإخوة والأخوات في مواجهة التوحد",
    contentAr: "> \"اشرح لبقية الأبناء ببساطة أن أخاهم أو أختهم يدركون العالم بشكل مختلف. شجعهم على ممارسة ألعاب بسيطة تعتمد على الحواس (فقاعات الصابون، الكرة) ولا تتطلب لغة معقدة. من المهم أيضاً تخصيص وقت لكل طفل على حدة للحفاظ على التوازن العائلي.\"\n\n### نصائح عملية للأولياء:\n- **المصارحة:** استخدم قصصاً للأطفال تتحدث عن التوحد لتشرح لهم الوضع بطريقة ناعمة ومطمئنة.\n- **العدل في الاهتمام:** تأكد من إعطاء وقت خاص للأخوة والأخوات للحديث عن يومهم بعيداً عن محور العناية بالتوحد."
  },
  {
    id: 'i7',
    title: "Le concept de 'Spectre' (Pourquoi chaque enfant est unique)",
    excerpt: "On ne dit plus l'autisme au singulier, mais les troubles du spectre.",
    content: "On ne dit plus 'l'autisme' au singulier, mais 'les troubles du spectre'. Imaginez un curseur sur plusieurs barres : communication, interactions, sensoriel. Pour chaque enfant, le curseur est placé différemment.",
    category: 'Comprendre',
    axis: 'informe',
    titleAr: "مفهوم 'الطيف' (لماذا كل طفل فريد من نوعه)",
    contentAr: "> \"لا نتحدث عن التوحد بصيغة المفرد، بل عن 'طيف اضطرابات التوحد'. تخيل مؤشراً على عدة مستويات: التواصل، التفاعل، والحواس. بالنسبة لكل طفل، يتغير مكان هذا المؤشر، مما يجعل كل حالة فريدة من نوعها.\""
  },
  {
    id: 'i8',
    title: "L'importance de la structure visuelle",
    excerpt: "Le cerveau autiste traite souvent mieux l'image que le son.",
    content: "Pour une personne s'informant sur le sujet, il faut comprendre que le cerveau autiste traite mieux l'image que le son. L'utilisation de pictogrammes n'est pas un gadget, c'est une aide à la pensée.",
    category: 'Soutien',
    axis: 'informe',
    titleAr: "أهمية البنية البصرية",
    contentAr: "> \"يجب أن نفهم أن دماغ المصاب بالتوحد يعالج الصور بشكل أفضل من الأصوات. استخدام الصور والرموز ليس مجرد وسيلة تعليمية، بل هو أداة تساعده على التفكير وتنظيم أفكاره.\""
  }
];

export const VIDEOS: Video[] = [
  {
    id: '1',
    title: "Comprendre l'autisme en 3 minutes",
    description: "Une animation simple pour expliquer le TSA au grand public.",
    thumbnail: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=800',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    duration: '3:15',
    axis: 'informe'
  },
  {
    id: '2',
    title: "Vivre avec l'autisme : Le quotidien de Léo",
    description: "Un court documentaire sur la vie quotidienne d'un enfant de 6 ans et ses progrès à l'école.",
    thumbnail: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=800',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    duration: '5:30',
    axis: 'parent'
  },
  {
    id: '3',
    title: "Témoignage : Mon expérience d'enseignante AESH",
    description: "Comment accompagner au mieux les élèves autistes dans leurs apprentissages.",
    thumbnail: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    duration: '8:45',
    axis: 'enseignant'
  }
];

export const IMAGES: AwarenessImage[] = [
  {
    id: '1',
    url: 'https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?auto=format&fit=crop&q=80&w=800',
    alt: 'Neurodiversité',
    caption: "La neurodiversité est une force. Chaque esprit fonctionne différemment.",
    axis: 'informe'
  },
  {
    id: '2',
    url: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800',
    alt: 'Main dans la main',
    caption: "La patience et l'amour sont les clés de la communication au quotidien.",
    axis: 'parent'
  },
  {
    id: '3',
    url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800',
    alt: 'Enfant à l\'école',
    caption: "Chaque enfant a le droit d'apprendre dans un environnement qui le comprend.",
    axis: 'enseignant'
  }
];
