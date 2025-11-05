/**
 * 旅館業種の型定義
 */

/**
 * 客室の型
 */
export interface Room {
  id: string;
  name: string;
  type: '和室' | '洋室' | '和洋室' | '露天風呂付き客室' | '特別室';
  capacity: string;
  size: string;
  price: number;
  description: string;
  imageUrl: string;
  features: string[];
  view: '庭園' | '海' | '山' | '川' | '街';
}

/**
 * 温泉・大浴場の型
 */
export interface Onsen {
  id: string;
  name: string;
  type: '露天風呂' | '内湯' | '貸切風呂' | '足湯';
  spring: string;
  features: string[];
  description: string;
  imageUrl: string;
  openingHours: string;
}

/**
 * お料理プランの型
 */
export interface CuisinePlan {
  id: string;
  name: string;
  description: string;
  features: string[];
  price: number;
  season?: string;
  imageUrl: string;
}

/**
 * 館内施設の型
 */
export interface Facility {
  id: string;
  name: string;
  category: 'リラクゼーション' | '娯楽' | 'ショップ' | 'その他';
  description: string;
  icon: string;
  imageUrl?: string;
}

/**
 * 宿泊プランの型
 */
export interface StayPlan {
  id: string;
  title: string;
  description: string;
  roomType: string;
  meals: '2食付き' | '朝食付き' | '夕食付き' | '素泊まり';
  price: number;
  features: string[];
  imageUrl: string;
  validFrom: string;
  validTo: string;
}

/**
 * お客様の声の型
 */
export interface GuestReview {
  id: string;
  guestName: string;
  stayDate: string;
  roomType: string;
  rating: number;
  comment: string;
  purpose: '家族旅行' | '夫婦旅行' | '一人旅' | 'ビジネス' | '記念日';
}

/**
 * お知らせの型
 */
export interface RyokanNews {
  id: string;
  date: string;
  category: 'お知らせ' | 'イベント' | 'プラン情報' | '休館日' | '季節のお便り';
  title: string;
  content?: string;
}

/**
 * ブログ記事の型
 */
export interface RyokanBlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: '季節のお便り' | '周辺観光' | 'お料理' | '館内施設' | 'イベント';
  author: string;
  publishedAt: string;
  imageUrl: string;
  tags: string[];
}
