export type WeightOption = {
  weight: string;
  price: number;
};

export type Product = {
  slug: string;
  name: string;
  origin: string;
  farm: string;
  varietal: string;
  process: string;
  roastLevel: string;
  tastingNotes: string[];
  weightOptions: WeightOption[];
  price: number;
  stock: number;
  description: string;
  imagePath: string;
};

export const products: Product[] = [
  {
    slug: "ethiopia-yirgacheffe",
    name: "エチオピア イルガチェフェ",
    origin: "エチオピア / イルガチェフェ地区",
    farm: "コチェレ・ウォッシングステーション",
    varietal: "ヘイルーム",
    process: "ウォッシュド",
    roastLevel: "中浅煎り",
    tastingNotes: ["ベルガモット", "白い花", "澄んだ酸味"],
    weightOptions: [
      { weight: "100g", price: 1400 },
      { weight: "200g", price: 2700 },
    ],
    price: 1400,
    stock: 12,
    description:
      "標高の高い土地で育った豆を丁寧に水洗処理。花のような香りと澄んだ酸味が特徴で、浅めの焙煎で持ち味を引き出しました。",
    imagePath: "/products/ethiopia-yirgacheffe.jpg",
  },
  {
    slug: "guatemala-huehuetenango",
    name: "グアテマラ ウェウェテナンゴ",
    origin: "グアテマラ / ウェウェテナンゴ県",
    farm: "ラ・エスメラルダ農園",
    varietal: "ブルボン",
    process: "ウォッシュド",
    roastLevel: "中煎り",
    tastingNotes: ["オレンジピール", "ブラウンシュガー", "柔らかな余韻"],
    weightOptions: [
      { weight: "100g", price: 1500 },
      { weight: "200g", price: 2900 },
    ],
    price: 1500,
    stock: 8,
    description:
      "山岳地帯の冷涼な気候で育まれた豆。柑橘の華やかさと優しい甘さが調和し、飲み終わりまで穏やかな余韻が続きます。",
    imagePath: "/products/guatemala-huehuetenango.jpg",
  },
  {
    slug: "brazil-cerrado",
    name: "ブラジル セラード",
    origin: "ブラジル / セラード地区",
    farm: "ファゼンダ・サンタイネス",
    varietal: "イエローブルボン",
    process: "ナチュラル",
    roastLevel: "中深煎り",
    tastingNotes: ["ナッツ", "ミルクチョコレート", "丸みのある甘さ"],
    weightOptions: [
      { weight: "100g", price: 1300 },
      { weight: "200g", price: 2500 },
    ],
    price: 1300,
    stock: 20,
    description:
      "毎日飲んでも飽きのこない、丸みのある味わい。ナッツやチョコレートを思わせる甘さで、ミルクとの相性も良い一杯です。",
    imagePath: "/products/brazil-cerrado.jpg",
  },
  {
    slug: "mandheling-lintong",
    name: "マンデリン リントン",
    origin: "インドネシア / 北スマトラ リントン",
    farm: "小規模生産者組合",
    varietal: "ティピカ系統",
    process: "スマトラ式（湿式脱穀）",
    roastLevel: "深煎り",
    tastingNotes: ["黒糖", "スパイス", "どっしりとした余韻"],
    weightOptions: [
      { weight: "100g", price: 1600 },
      { weight: "200g", price: 3100 },
    ],
    price: 1600,
    stock: 0,
    description:
      "土と森を思わせる重厚なコクが持ち味。深く焙煎することで黒糖のような甘さとスパイシーな香りを引き立てました。",
    imagePath: "/products/mandheling-lintong.jpg",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}
