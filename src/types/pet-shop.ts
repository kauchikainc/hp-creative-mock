/**
 * ペットショップ業種の型定義
 */

/**
 * ペットの型
 */
export interface Pet {
  id: string;
  name: string;
  species: '犬' | '猫' | '小動物' | '鳥' | '爬虫類' | '魚';
  breed: string;
  age: string;
  gender: '男の子' | '女の子';
  price: number;
  description: string;
  imageUrl: string;
  status: '販売中' | '商談中' | '売約済み';
}

/**
 * サービスメニューの型
 */
export interface PetService {
  id: string;
  name: string;
  description: string;
  price: number;
  duration?: string;
  features: string[];
  icon: string;
}

/**
 * スタッフの型
 */
export interface PetShopStaff {
  id: string;
  name: string;
  role: string;
  specialties: string[];
  introduction: string;
  imageUrl: string;
}

/**
 * お客様の声の型
 */
export interface CustomerReview {
  id: string;
  customerName: string;
  petName: string;
  petSpecies: string;
  comment: string;
  rating: number;
  date: string;
  imageUrl?: string;
}

/**
 * お知らせの型
 */
export interface PetShopNews {
  id: string;
  date: string;
  category: '新着ペット' | 'イベント' | 'お知らせ' | '休業日';
  title: string;
  content?: string;
}

/**
 * ブログ記事の型
 */
export interface PetShopBlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: '飼育方法' | 'ペット紹介' | 'イベントレポート' | 'スタッフ日記';
  author: string;
  publishedAt: string;
  imageUrl: string;
  tags: string[];
}
