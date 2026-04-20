import * as fs from 'fs';

let content = fs.readFileSync('src/data.ts', 'utf8');

const parentArticles = [
  {
    id: 'p1',
    title: "Le coin des parents : Comprendre l'autisme, un nouveau regard",
    excerpt: "L'autisme n'est pas une maladie, mais une manière différente de percevoir le monde.",
    category: 'Comprendre',
    axis: 'parent',
    content: `Il est tout à fait normal de se sentir perdu ou inquiet face au diagnostic. Rappelez-vous que l'autisme n'est pas une maladie à guérir, mais un trouble du neurodéveloppement. C'est une manière différente de percevoir le monde.\n\n### Une perception unique\nCe qui semble étrange pour nous a souvent un sens profond pour l'enfant. Il interagit avec son environnement selon ses propres repères. Il se manifeste de manière unique chez chaque enfant, allant des formes légères aux formes nécessitant plus de soutien.\n\n### Apprendre à observer\nPrenez le temps d'observer ce qui attire son attention et ce qui le calme. Votre amour et votre patience sont les clés pour l'accompagner sereinement.`,
    titleAr: "زاوية الأولياء: فهم التوحد، نظرة جديدة",
    contentAr: `> "التوحد ليس مرضاً، بل هو اضطراب نمائي عصبي يؤثر على طريقة إدراك الشخص للعالم وتفاعله معه. يتجلى بشكل فريد لدى كل طفل، من الأشكال البسيطة إلى الأشكال التي تتطلب دعماً كبيراً."\n\n### نصائح عملية للأولياء:\n- **الابتعاد عن الأحكام:** تقبل طفلك كما هو وافهم أن سلوكياته هي طريقة للتعبير.\n- **الاحتفال بالتميز:** ركز على نقاط قوة طفلك واهتماماته الخاصة لبناء جسر للتواصل.`
  },
  {
    id: 'p2',
    title: "Le coin des parents : Créer un cocon sécurisant au quotidien",
    excerpt: "Aménagez l'espace et structurez le temps pour réduire l'anxiété de votre enfant.",
    category: 'Quotidien',
    axis: 'parent',
    content: `Gérer le quotidien peut parfois ressembler à un défi épuisant. L'enfant autiste a un besoin crucial de routine et de prévisibilité pour se sentir en sécurité.\n\n### La force de la routine\nOrganisez les journées avec des horaires fixes. Utilisez des pictogrammes ou un emploi du temps visuel pour l'aider à anticiper sa journée et réduire son anxiété.\n\n### Un espace adapté\nAménagez des zones dédiées spécifiques à la maison : un coin ludique pour le jeu, et un "coin calme" réduit en stimuli (sans bruit ni lumière forte) pour qu'il puisse s'y réfugier lorsqu'il en ressent le besoin.`,
    titleAr: "زاوية الأولياء: خلق بيئة آمنة (الروتين والمكان)",
    contentAr: `> "يحتاج الطفل التوحدي إلى بيئة يمكن توقعها وروتين واستقرار ليشعر بالأمان. نظم الأيام بجداول زمنية ثابتة واستخدم الصور لمساعدته على تخيل يومه. جهز زوايا خاصة لكل نشاط (لعب، دراسة، استرخاء)."\n\n### نصائح عملية للأولياء:\n- **الجدول البصري:** استخدم صوراً لتمثيل أنشطة اليوم (أكل، لعب، نوم) لتخفيف قلق الانتظار.\n- **ركن الهدوء:** خصص مكاناً هادئاً في البيت يلجأ إليه الطفل عند الشعور بالضغط أو التعب.`
  },
  {
    id: 'p3',
    title: "Le coin des parents : Mieux communiquer avec mon enfant",
    excerpt: "Des stratégies simples pour encourager et faciliter la communication.",
    category: 'Communication',
    axis: 'parent',
    content: `La communication peut être l'un des plus grands défis. Ne vous découragez pas si les mots tardent à venir, la communication ne se limite pas à la parole.\n\n### Le pouvoir du visuel\nL'enfant autiste est souvent beaucoup plus réceptif aux supports visuels. Utilisez des photos, des dessins ou des pictogrammes pour expliquer les règles et les attentes. \n\n### Clarté et renforcement\nFavorisez des phrases très courtes et claires. Laissez-lui le temps de traiter l'information. Surtout, soyez généreux en encouragements : récompensez chaque effort de communication, même s'il s'agit d'un simple regard ou d'un geste.`,
    titleAr: "زاوية الأولياء: تواصل أفضل مع طفلي",
    contentAr: `> "الطفل التوحدي أكثر استجابة للوسائل البصرية. استخدم الصور والرسوم لشرح القواعد. شجع التفاعلات البسيطة بجمل قصيرة وكافئ كل محاولة تواصل حتى لو لم تكن مثالية."\n\n### نصائح عملية للأولياء:\n- **الجمل القصيرة:** تحدث بوضوح وبطء، واستخدم كلمات بسيطة لتسهيل الفهم على الطفل.\n- **التشجيع المستمر:** كافئ كل محاولة تواصل (مثل إشارة باليد أو ابتسامة) لتشجيعه على تكرار المحاولة.`
  },
  {
    id: 'p4',
    title: "Le coin des parents : Décoder et gérer les comportements intenses",
    excerpt: "Comprendre les déclencheurs pour mieux accompagner les surcharges sensorielles.",
    category: 'Soutien',
    axis: 'parent',
    content: `Face à une crise ou à des comportements répétitifs, il est normal de se sentir démuni. Ces comportements ne sont pas des caprices, mais souvent des mécanismes pour gérer un surplus sensoriel ou une émotion forte.\n\n### Identifier les déclencheurs\nObservez l'environnement de votre enfant lors de ces moments : y a-t-il trop de bruit ? Une lumière clignotante ? Un changement inattendu ? L'identification des déclencheurs est la première étape.\n\n### Proposer des alternatives\nPlutôt que d'interdire un comportement répétitif (qui l'apaise souvent), proposez des alternatives de régulation : des jeux sensoriels, une balle anti-stress, ou un retrait dans son espace calme. Gardez toujours vous-même une attitude paisible.`,
    titleAr: "زاوية الأولياء: فك شفرة السلوكيات والتعامل معها",
    contentAr: `> "السلوكيات المتكررة هي غالباً آليات دفاعية لمواجهة ضغط حسي أو وسيلة لإدارة العواطف القوية. حدد المسببات (ضوضاء، إضاءة، تغيير روتين) وقدم بدائل مثل الألعاب الحسية لمساعدة الطفل على الهدوء."\n\n### نصائح عملية للأولياء:\n- **تحليل السلوك:** بدلاً من الغضب، حاول ملاحظة ما حدث قبل السلوك مباشرة لفهم المسبب.\n- **تقديم البديل الحسّي:** إذا كان الطفل يرفرف بيديه عند التوتر، قدم له كرة مطاطية ليضغط عليها كطريقة بديلة لتفريغ الطاقة.`
  },
  {
    id: 'p5',
    title: "Le coin des parents : Construire son équipe de soutien",
    excerpt: "Réseauter et s'entourer pour trouver des solutions et du réconfort.",
    category: 'Collaboration',
    axis: 'parent',
    content: `Vous n'êtes pas seul face à l'autisme. Solliciter de l'aide n'est pas un signe de faiblesse, mais une démarche indispensable pour votre enfant et votre famille.\n\n### S'entourer de professionnels\nLes éducateurs spécialisés, les orthophonistes et les paramédicaux aident l'enfant à progresser à son rythme. Les psychologues peuvent également soutenir l'équilibre familial global.\n\n### La force du groupe\nÉchanger avec d'autres parents vivant les mêmes défis est extrêmement thérapeutique. Rejoignez des groupes de soutien pour partager vos expériences, vos astuces et trouver un réconfort précieux auprès de ceux qui vous comprennent vraiment.`,
    titleAr: "زاوية الأولياء: بناء فريق الدعم الخاص بك",
    contentAr: `> "لا تبقَ وحيداً. المربون المختصون يساعدون الطفل على تطوير مهاراته، والأطباء النفسيون يلعبون دوراً في دعم التوازن العائلي. تبادل الخبرات مع أولياء أمور آخرين يخفف من الشعور بالعزلة."\n\n### نصائح عملية للأولياء:\n- **التواصل الفعّال:** احرص على التواصل المستمر مع المختصين ومعلمي طفلك لتوحيد جهود الدعم.\n- **مجموعات الدعم:** انضم إلى جمعيات أو مجموعات على وسائل التواصل الاجتماعي لأولياء أطفال التوحد لتبادل التجربة والشعور بالسند.`
  },
  {
    id: 'p6',
    title: "Le coin des parents : Prendre soin de soi pour mieux accompagner",
    excerpt: "L'importance vitale du bien-être parental pour l'équilibre de l'enfant.",
    category: 'Bien-être',
    axis: 'parent',
    content: `Prendre soin d'un enfant ayant des besoins spécifiques demande une énergie phénoménale. Il est facile de s'oublier, pourtant, votre bien-être est la base de son évolution.\n\n### Un parent reposé est plus efficace\nL'épuisement n'aide ni vous ni votre enfant. Un parent ressourcé a plus de patience et d'intuition.\n\n### Accordez-vous du répit\nPrenez des pauses régulières. Pratiquez vos loisirs, lisez, marchez, ou accordez-vous du temps pour vous. N'hésitez pas à demander l'aide de vos proches pour un relais. Maintenir votre dynamique positive est essentiel pour continuer à l'accompagner avec bienveillance.`,
    titleAr: "زاوية الأولياء: اعتن بنفسك لتتمكن من المساعدة بطريقة أفضل",
    contentAr: `> "رعاية طفل توحدي تتطلب طاقة كبيرة. الوالد المنهك لا يمكنه المساعدة بفعالية. من الضروري أخذ فترات راحة منتظمة وممارسة أنشطة ترفيهية لتجنب الإنهاك. طلب الدعم ليس ضعفاً بل ضرورة للاستمرار."\n\n### نصائح عملية للأولياء:\n- **فترات الراحة:** لا تشعر بالذنب إذا طلبت من الجد أو الجدة الاهتمام بالطفل لساعة من الزمن لتأخذ قسطاً من الراحة.\n- **الحفاظ على الهوايات:** خصص وقتاً أسبوعياً صغيراً لنفسك للقيام بشيء يمتعك ويجدد طاقتك الإيجابية.`
  },
  {
    id: 'p7',
    title: "Le coin des parents : Préparer les transitions (Sorties et Changements)",
    excerpt: "Comment anticiper les imprévus et structurer les sorties pour éviter le stress.",
    category: 'Quotidien',
    axis: 'parent',
    content: `Face à l'imprévu, l'enfant avec TSA peut vite se sentir menacé. La clé d'une sortie réussie réside dans l'anticipation et la douceur.\n\n### Prévenir avant d'agir\nLes changements, même mineurs, peuvent être sources de grand stress. Pour aider votre enfant, avertissez-le à l'avance d'une transition (ex: "dans 5 minutes, on range"). \n\n### Illustrer l'avenir\nVous pouvez utiliser des dessins ou raconter de petits "scénarios sociaux" pour lui expliquer le déroulement d'une sortie, comme une visite chez le médecin ou l'entrée dans un supermarché. Cela permet de rendre l'inconnu prévisible et de réduire drastiquement ses peurs.`,
    titleAr: "زاوية الأولياء: التحضير للانتقالات (الخروج والتغييرات)",
    contentAr: `> "التغييرات، حتى البسيطة منها، قد تسبب التوتر للطفل. لمساعدة طفلك، حذره مسبقاً قبل أي انتقال (مثال: "بعد 5 دقائق، سنجمع الألعاب"). يمكنك استخدام الرسوم أو "السيناريوهات الاجتماعية" لشرح مراحل الخروج، مثل زيارة الطبيب، لتقليل مخاوفه."\n\n### نصائح عملية للأولياء:\n- **التدرج الزمني:** استخدم مؤقتًا زمنيًا مرئيًا (مثل ساعة رملية) لمساعدة الطفل على إدراك اقتراب نهاية النشاط.\n- **صناعة القصة:** قبل زيارة مكان جديد (طبيب، حلاق)، أرِه صوراً للمكان واشرح له خطوة بخطوة ما سيحدث هناك.`
  },
  {
    id: 'p8',
    title: "Le coin des parents : Gérer l'heure des repas et la sélectivité alimentaire",
    excerpt: "Astuces pour créer un environnement apaisant autour de l'alimentation.",
    category: 'Quotidien',
    axis: 'parent',
    content: `L'heure des repas est souvent redoutée. Beaucoup de parents s'inquiètent face à la sélectivité alimentaire de leur enfant. Gardez espoir, des gestes simples apaisent le moment.\n\n### Respecter ses sensibilités\nCertains enfants autistes sont très sensibles aux textures, odeurs ou couleurs des aliments. Ne mélangez pas les aliments dans l'assiette. Laissez-les séparés pour qu'il puisse les identifier. Introduisez les nouveautés très progressivement et incitez-le à goûter, sans jamais le forcer.\n\n### Un environnement serein\nCréez une ambiance extrêmement calme : réduisez les lumières vives, éteignez la télévision et évitez les bruits forts. Un environnement sans distraction favorise sa concentration et son appétit.`,
    titleAr: "زاوية الأولياء: تنظيم أوقات الأكل والانتقائية في الطعام",
    contentAr: `> "بعض الأطفال ذوي التوحد لديهم حساسية شديدة تجاه ملمس الطعام. لا تخلط الأطعمة في الصحن وقدم الأصناف الجديدة تدريجياً (التذوق دون إجبار). وفر أجواءً هادئة بعيدة عن المشتتات (تلفاز أو ضجيج) لتعزيز تركيزه أثناء الأكل."\n\n### نصائح عملية للأولياء:\n- **القواعد البصرية:** استخدم طبقاً مقسماً لتفادي اختلاط الأطعمة الذي قد يزعج الطفل حسياً.\n- **المشاركة في التحضير:** اطلب منه مساعدتك في غسل الخضار أو إعداد المائدة للتقليل من خوفه تجاه أصناف الطعام.`
  },
  {
    id: 'p9',
    title: "Le coin des parents : Le carnet de liaison, un pont Famille-École",
    excerpt: "Comment assurer une continuité harmonieuse entre la maison et l'école.",
    category: 'Scolarité',
    axis: 'parent',
    content: `Vos efforts à la maison résonnent à l'école, et inversement. Une alliance solide avec les éducateurs est essentielle pour l'épanouissement de votre enfant.\n\n### Un outil précieux\nMettez en place un petit carnet de liaison quotidien. L'équipe éducative et vous-même pourrez y noter les progrès, une nuit agitée, une émotion marquante ou de nouvelles découvertes.\n\n### Harmoniser les méthodes\nCe flux d'informations permet à l'enseignant de donner du sens aux comportements de l'enfant dans la journée, et vous permet de reprendre à la maison les stratégies qui fonctionnent bien à l'école.`,
    titleAr: "زاوية الأولياء: كراس التواصل، الجسر بين البيت والمدرسة",
    contentAr: `> "التواصل مع المربي أمر أساسي. قم بإنشاء "كراس تواصل" تسجل فيه أنت والمعلم التقدم الحاصل، أو التغييرات في المزاج، أو الاكتشافات الجديدة. هذا يسمح بفهم سلوكيات الطفل وتوحيد الطرق المستخدمة بين البيت والروضة."\n\n### نصائح عملية للأولياء:\n- **المعلومات الضرورية:** دوّن في الكراس مثلاً إذا كان الطفل لم ينم جيداً لتنبيه المربي لتقلب مزاجه المحتمل.\n- **التشجيع المشترك:** اتفق مع المربي على كلمات مديح أو مكافآت موحدة يستخدمها الطرفان لتثبيت السلوك الإيجابي.`
  },
  {
    id: 'p10',
    title: "Le coin des parents : Favoriser l'autonomie au quotidien",
    excerpt: "L'accompagner pas à pas vers la propreté et l'habillage.",
    category: 'Autonomie',
    axis: 'parent',
    content: `Chaque nouveau geste d'autonomie est une grande victoire. Patience et méthode sont vos meilleures alliées.\n\n### La magie de la décomposition\nPour aider votre enfant à s'habiller ou se laver seul, ne demandez pas la tâche globale. Décomposez-la en petites étapes très simples (prendre le pantalon, passer une jambe, puis l'autre). \n\n### Le guidage bienveillant\nAu début, vous pouvez utiliser la technique du "guidage physique" en accompagnant doucement sa main, ou utiliser l'imitation en le faisant en même temps que lui devant un miroir. Félicitez-le chaleureusement pour chaque petit pas, cela nourrit considérablement sa confiance en lui !`,
    titleAr: "زاوية الأولياء: تعزيز الاستقلالية في الحياة اليومية",
    contentAr: `> "لمساعدة طفلك على ارتداء ملابسه أو الاغتسال بمفرده، قم بتجزئة كل مهمة إلى خطوات بسيطة. يمكنك استخدام تقنية "التوجيه الجسدي" (أمسك يده في البداية) أو التقليد. احرص على تشجيعه عند كل نجاح صغير لتعزيز ثقته بنفسه."\n\n### نصائح عملية للأولياء:\n- **الصور التسلسلية:** الصق صوراً بالترتيب الخطوات (مثال: خطوات غسل اليدين) بجانب المغسلة لتذكيره بصرياً بالخطوات.\n- **الاستقلالية الموجهة:** دعه يكمل الخطوة الأخيرة بنفسه (مثل إغلاق صنبور الماء) لكي يشعر بمتعة الإنجاز والاعتماد على الذات.`
  },
  {
    id: 'p11',
    title: "Le coin des parents : Apaiser les surcharges sensorielles",
    excerpt: "Créer un environnement de repli pour l'aider à retrouver son équilibre.",
    category: 'Soutien',
    axis: 'parent',
    content: `Les enfants autistes ont parfois des filtres sensoriels différents des nôtres, rendant une situation banale très agressive pour eux. Comprendre cela change tout.\n\n### Une enquête sensorielle\nSi votre enfant semble agité sans raison apparente (se bouche les oreilles, crie), agissez comme un détective. Vérifiez l'environnement : y a-t-il trop de bruit de fond ? Une lumière fluorescente trop vive ? Une odeur de cuisine trop forte ?\n\n### Le pouvoir du "Coin Calme"\nOffrez-lui de manière préventive un espace de retrait. Aménagez un "coin calme" (une petite tente de jeu, un matelas au sol) avec ses objets apaisants préférés. S'il sent qu'il peut s'y réfugier librement, sa sérénité reviendra plus vite.`,
    titleAr: "زاوية الأولياء: التعامل مع الضغط الحسي المفرط",
    contentAr: `> "إذا بدا طفلك مضطرباً دون سبب واضح، تفقد محيطه: هل هناك ضجيج عالٍ، إضاءة قوية أو رائحة نفاذة؟ وفر له "ركناً هادئاً" يحتوي على أشيائه المفضلة ليلجأ إليه ويستعيد هدوءه."\n\n### نصائح عملية للأولياء:\n- **أدوات الحماية:** فكر في توفير سماعات عازلة للضجيج أو نظارات شمسية استخدامها أثناء التسوق لتقليل التوتر الحسي.\n- **التفهم المطلق:** لا تجبره على البقاء في مكان مزدحم إذا لاحظت بداية توتره؛ احترام حواسه هو أول خطوات تهدئته.`
  },
  {
    id: 'p12',
    title: "Le coin des parents : Joie et complicité avec les frères et sœurs",
    excerpt: "Expliquer l'autisme à la fratrie et partager des moments en famille.",
    category: 'Famille',
    axis: 'parent',
    content: `La place des frères et sœurs est fondamentale. Ils se posent souvent des questions et ressentent parfois de l'injustice. Une communication ouverte est réparatrice.\n\n### Mettre des mots simples\nExpliquez très simplement à la fratrie que leur frère ou sœur ne fait pas exprès, mais que son cerveau perçoit le monde un peu différemment. Répondez à leurs questions de manière naturelle.\n\n### Le jeu pour rassembler\nPour créer des liens solides, encouragez des moments de jeux simples basés sur les sens (faire des bulles de savon, se passer un ballon de gym). Ces jeux sensoriels ne demandent pas de langage complexe et créent de beaux sourires. N'oubliez pas non plus de conserver régulièrement des moments exclusifs avec chaque enfant pour maintenir l'harmonie familiale.`,
    titleAr: "زاوية الأولياء: الإخوة والأخوات في مواجهة التوحد",
    contentAr: `> "اشرح لبقية الأبناء ببساطة أن أخاهم أو أختهم يدركون العالم بشكل مختلف. شجعهم على ممارسة ألعاب بسيطة تعتمد على الحواس (فقاعات الصابون، الكرة) ولا تتطلب لغة معقدة. من المهم أيضاً تخصيص وقت لكل طفل على حدة للحفاظ على التوازن العائلي."\n\n### نصائح عملية للأولياء:\n- **المصارحة:** استخدم قصصاً للأطفال تتحدث عن التوحد لتشرح لهم الوضع بطريقة ناعمة ومطمئنة.\n- **العدل في الاهتمام:** تأكد من إعطاء وقت خاص للأخوة والأخوات للحديث عن يومهم بعيداً عن محور العناية بالتوحد.`
  }
];

// Read existing content
const fileData = fs.readFileSync('src/data.ts', 'utf8');

// Match the entire ARTICLES array
const articleArrayRegex = /export const ARTICLES: Article\[\] = (\[[\s\S]*?\]);\s*export const VIDEOS/;
const match = fileData.match(articleArrayRegex);

if (match) {
  // Try to parse the existing array content
  // Since it's a TS string, it might be tricky to parse safely with JSON.parse.
  // Instead, we will do a string manipulation.
  
  // We want to remove any article block where axis is 'parent'
  // Let's just generate the new string representations for the parent array
  
  let newArticlesStr = parentArticles.map(a => {
    return `  {
    id: '${a.id}',
    title: ${JSON.stringify(a.title)},
    excerpt: ${JSON.stringify(a.excerpt)},
    content: ${JSON.stringify(a.content)},
    category: '${a.category}',
    axis: '${a.axis}',
    titleAr: ${JSON.stringify(a.titleAr)},
    contentAr: ${JSON.stringify(a.contentAr)}
  }`;
  }).join(',\n');

  // Let's remove the old 'parent' articles from the string block.
  // The structure is roughly { id: '3', ... axis: 'parent' },
  let rawArrayBody = match[1];
  
  // We can just filter them out using a quick regex replacing blocks with axis: 'parent'
  let withoutParent = rawArrayBody.replace(/\s*{\s*id: '[^']+',[\s\S]*?axis:\s*'parent'[\s\S]*?},?/g, '');
  
  // Now add our new articles to the array
  // Wait, withoutParent might end with a `]` or `, ]`
  // Let's strip the exact brackets and combine them safely.
  
  // Just strip the brackets
  let innerBody = withoutParent.trim().replace(/^\[/, '').replace(/\]$/, '').trim();
  if (innerBody.endsWith(',')) {
    innerBody = innerBody.slice(0, -1);
  }

  let finalArray = `[\n${innerBody},\n${newArticlesStr}\n]`;
  
  let newFileData = fileData.replace(articleArrayRegex, `export const ARTICLES: Article[] = ${finalArray};\n\nexport const VIDEOS`);
  fs.writeFileSync('src/data.ts', newFileData);
  console.log('Update finished.');
}
