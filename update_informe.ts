import * as fs from 'fs';

let content = fs.readFileSync('src/data.ts', 'utf8');

content = content.replace(/Le coin des parents :\s*/g, '');
content = content.replace(/زاوية الأولياء:\s*/g, '');

const informeArticles = [
  {
    id: 'i1',
    title: "Le saviez-vous ? L'autisme, une différence de traitement de l'information",
    excerpt: "L'autisme n'est pas une maladie mentale mais un fonctionnement neurologique différent.",
    category: "Comprendre",
    axis: "informe",
    content: `L'autisme n'est pas une maladie mentale mais un fonctionnement neurologique différent. Présentation des 'lunettes' à travers lesquelles l'enfant voit le monde (détails vs globalité).

### Vrai / Faux
**L'autisme est une maladie mentale ?**
**Faux**. C'est un trouble neurodéveloppemental.`,
    titleAr: "هل كنت تعلم؟ التوحد، اختلاف في معالجة المعلومات",
    contentAr: `> "التوحد ليس مرضاً نفسياً، بل هو اختلاف في طريقة معالجة المعلومات في الدماغ. يرى المصاب بالتوحد العالم من خلال عدسة تركز على التفاصيل الدقيقة أكثر من المعنى الإجمالي."

### صحيح أم خطأ؟
**التوحد هو مرض نفسي؟**
**خطأ**. التوحد هو اضطراب نمائي عصبي يختلف فيه عمل الدماغ.`
  },
  {
    id: 'i2',
    title: "Le saviez-vous ? Histoire et Évolution du concept",
    excerpt: "Passer du terme maladie au Trouble du Spectre de l'Autisme (TSA).",
    category: "Histoire",
    axis: "informe",
    content: `Passer du terme 'maladie' au 'Trouble du Spectre de l'Autisme' (TSA). La notion de 'spectre' : il n'y a pas un autisme, mais des autismes, chaque personne étant unique.

### Vrai / Faux
**Il n'y a qu'un seul type d'autisme ?**
**Faux**. L'autisme est un spectre, ce qui signifie qu'il y a une grande diversité de profils.`,
    titleAr: "هل كنت تعلم؟ تطور مفهوم التوحد",
    contentAr: `> "تطور مفهوم التوحد من 'مرض' إلى 'طيف اضطراب التوحد'. كلمة 'طيف' تعني أنه لا يوجد نوع واحد من التوحد، بل حالات متنوعة تختلف من شخص لآخر."

### صحيح أم خطأ؟
**يوجد نوع واحد فقط من التوحد؟**
**خطأ**. التوحد عبارة عن طيف، مما يعني وجود تنوع كبير في الحالات والقدرات.`
  },
  {
    id: 'i3',
    title: "Le saviez-vous ? Les forces et talents souvent ignorés",
    excerpt: "Mettre en avant la mémoire exceptionnelle, la capacité de concentration...",
    category: "Talents",
    axis: "informe",
    content: `Mettre en avant la mémoire exceptionnelle, la capacité de concentration sur des sujets précis et l'honnêteté sociale qui caractérisent souvent les personnes autistes.

### Vrai / Faux
**Les personnes autistes n'ont pas de capacités particulières ?**
**Faux**. Beaucoup ont des intérêts spécifiques qui développent des talents remarquables comme une excellente mémoire ou une grande rigueur.`,
    titleAr: "هل كنت تعلم؟ نقاط القوة والمواهب",
    contentAr: `> "غالباً ما يتمتع الأشخاص ذوو التوحد بنقاط قوة مذهلة، مثل الذاكرة القوية، والقدرة العالية على التركيز في مواضيع محددة، والصدق في التعامل الاجتماعي."

### صحيح أم خطأ؟
**الأشخاص ذوو التوحد ليس لديهم قدرات خاصة؟**
**خطأ**. كثير منهم يمتلكون اهتمامات خاصة تطور لديهم مواهب استثنائية كقوة الذاكرة أو الدقة المتناهية.`
  },
  {
    id: 'i4',
    title: "Les signes qui doivent alerter (Dépistage précoce)",
    excerpt: "Le diagnostic est clinique. Les signes précoces à observer.",
    category: "Dépistage",
    axis: "informe",
    content: `Le diagnostic est clinique. Les signes incluent le retard de l'utilisation du pointage du doigt (vers 18 mois), l'absence de réponse au prénom, ou le retard de langage (écholalie : répétition de mots hors contexte).

### Vrai / Faux
**Chaque enfant autiste présente les mêmes signes dès la naissance ?**
**Faux**. Les signes deviennent généralement plus visibles autour de l'âge de 18 mois à 2 ans, et varient considérablement.`,
    titleAr: "علامات الإنذار للتشخيص المبكر",
    contentAr: `> "يتم التشخيص سريرياً. من العلامات المبكرة تأخر اكتساب الإشارة بالأصبع (حوالي 18 شهراً)، عدم الاستجابة عند المناداة بالاسم، أو تأخر النطق (مثل ترديد الكلام بشكل غير ملائم)."

### صحيح أم خطأ؟
**כל الأطفال ذوي التوحد تظهر عليهم نفس العلامات منذ الولادة؟**
**خطأ**. تبدأ العلامات بالظهور بوضوح أكثر بين 18 شهراً وسنتين، وتختلف بشكل كبير من طفل لآخر.`
  },
  {
    id: 'i5',
    title: "L'hypersensibilité sensorielle expliquée",
    excerpt: "De nombreuses personnes autistes ont des réactions intenses aux stimuli.",
    category: "Sensoriel",
    axis: "informe",
    content: `De nombreuses personnes autistes ont des réactions intenses aux stimuli : peur des bruits d'appareils ménagers, fascination pour la lumière, ou gêne face à certaines textures de vêtements.

### Vrai / Faux
**Un enfant qui se bouche les oreilles fait un caprice ?**
**Faux**. C'est souvent une réaction à une "surcharge sensorielle" (un bruit que nous trouvons normal peut être douloureux pour lui).`,
    titleAr: "فرط الحساسية الحسية",
    contentAr: `> "يبدي العديد من الأشخاص ذوي التوحد ردود فعل مبالغ فيها تجاه المحفزات الحسية: مثل الخوف من أصوات الأجهزة المنزلية، الانبهار بالضوء، أو الانزعاج الشديد من ملمس بعض الأقمشة."

### صحيح أم خطأ؟
**عندما يغطي الطفل أذنيه، فهو يتدلل؟**
**خطأ**. هذا غالباً رد فعل على "عبء حسي زائد" (الصوت الذي نراه طبيعياً قد يكون مؤلماً جداً بالنسبة له).`
  },
  {
    id: 'i6',
    title: "Le droit à l'éducation : Un cadre mondial",
    excerpt: "L'éducation est un droit garanti par la Déclaration universelle.",
    category: "Droits",
    axis: "informe",
    content: `L'éducation est un droit garanti par la Déclaration universelle des droits de l'homme (Art. 26) et la Convention de l'UNESCO contre la discrimination. Chaque enfant, quel que soit son handicap, doit avoir accès à une école inclusive.

### Vrai / Faux
**Un enfant autiste ne peut pas aller dans une école classique ?**
**Faux**. Avec un accompagnement adapté, l'inclusion en milieu classique (ordinaire) est tout à fait possible et très bénéfique.`,
    titleAr: "الحق في التعليم: إطار عالمي",
    contentAr: `> "التعليم حق تضمنه الإعلان العالمي لحقوق الإنسان (المادة 26) واتفاقية اليونسكو لمكافحة التمييز. يجب أن يتمتع كل طفل، مهما كانت إعاقته، بالحق في تعليم دامج."

### صحيح أم خطأ؟
**لا يمكن للطفل التوحدي الذهاب إلى مدرسة عادية؟**
**خطأ**. مع الدعم المناسب والتكيف، يعد الإدماج في المدارس العادية ممكناً جداً ومفيداً للطفل.`
  }
];

const articleArrayRegex = /export const ARTICLES: Article\[\] = (\[[\s\S]*?\]);\s*export const VIDEOS/;
const match = content.match(articleArrayRegex);

if (match) {
  let rawArrayBody = match[1];
  let withoutInforme = rawArrayBody.replace(/\s*{\s*id: '[^']+',[\s\S]*?axis:\s*'informe'[\s\S]*?},?/g, '');
  let innerBody = withoutInforme.trim().replace(/^\[/, '').replace(/\]$/, '').trim();
  if (innerBody.endsWith(',')) innerBody = innerBody.slice(0, -1);
  
  let newArticlesStr = informeArticles.map(a => {
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
  
  let finalArray = `[\n${newArticlesStr},\n${innerBody}\n]`;
  content = content.replace(articleArrayRegex, `export const ARTICLES: Article[] = ${finalArray};\n\nexport const VIDEOS`);
}

fs.writeFileSync('src/data.ts', content);
