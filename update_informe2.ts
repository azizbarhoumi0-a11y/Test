import * as fs from 'fs';

let content = fs.readFileSync('src/data.ts', 'utf8');

const newArticles = [
  {
    id: 'i7',
    title: "Le concept de 'Spectre' (Pourquoi chaque enfant est unique)",
    excerpt: "On ne dit plus l'autisme au singulier, mais les troubles du spectre.",
    category: "Comprendre",
    axis: "informe",
    content: "On ne dit plus 'l'autisme' au singulier, mais 'les troubles du spectre'. Imaginez un curseur sur plusieurs barres : communication, interactions, sensoriel. Pour chaque enfant, le curseur est placé différemment.",
    titleAr: "مفهوم 'الطيف' (لماذا كل طفل فريد من نوعه)",
    contentAr: "> \"لا نتحدث عن التوحد بصيغة المفرد، بل عن 'طيف اضطرابات التوحد'. تخيل مؤشراً على عدة مستويات: التواصل، التفاعل، والحواس. بالنسبة لكل طفل، يتغير مكان هذا المؤشر، مما يجعل كل حالة فريدة من نوعها.\""
  },
  {
    id: 'i8',
    title: "L'importance de la structure visuelle",
    excerpt: "Le cerveau autiste traite souvent mieux l'image que le son.",
    category: "Soutien",
    axis: "informe",
    content: "Pour une personne s'informant sur le sujet, il faut comprendre que le cerveau autiste traite mieux l'image que le son. L'utilisation de pictogrammes n'est pas un gadget, c'est une aide à la pensée.",
    titleAr: "أهمية البنية البصرية",
    contentAr: "> \"يجب أن نفهم أن دماغ المصاب بالتوحد يعالج الصور بشكل أفضل من الأصوات. استخدام الصور والرموز ليس مجرد وسيلة تعليمية، بل هو أداة تساعده على التفكير وتنظيم أفكاره.\""
  }
];

const articleArrayRegex = /export const ARTICLES: Article\[\] = (\[[\s\S]*?\]);\s*export const VIDEOS/;
const match = content.match(articleArrayRegex);

if (match) {
  let rawArrayBody = match[1];
  let innerBody = rawArrayBody.trim().replace(/^\[/, '').replace(/\]$/, '').trim();
  if (innerBody.endsWith(',')) innerBody = innerBody.slice(0, -1);
  
  let newArticlesStr = newArticles.map(a => {
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
  
  let finalArray = `[\n${innerBody},\n${newArticlesStr}\n]`;
  content = content.replace(articleArrayRegex, `export const ARTICLES: Article[] = ${finalArray};\n\nexport const VIDEOS`);
  
  fs.writeFileSync('src/data.ts', content);
}
