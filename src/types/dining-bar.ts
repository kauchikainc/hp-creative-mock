/**
 * ダイニングバー業種の型定義
 */

/**
 * メニューアイテムの型
 */
export interface MenuItem {
  id: string;
  name: string;
  category: '前菜' | 'メイン' | 'デザート' | 'ドリンク' | 'カクテル' | 'ワイン';
  description: string;
  price: number;
  imageUrl: string;
  isRecommended?: boolean;
  allergens?: string[];
}

/**
 * コースメニューの型
 */
export interface CourseMenu {
  id: string;
  name: string;
  description: string;
  courses: string[];
  price: number;
  imageUrl: string;
  availableTime: '昼' | '夜' | '終日';
}

/**
 * イベント情報の型
 */
export interface BarEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  description: string;
  category: 'ライブ' | 'パーティー' | 'ワイン会' | 'その他';
  imageUrl: string;
  capacity?: number;
  price?: number;
}

/**
 * スタッフの型
 */
export interface BarStaff {
  id: string;
  name: string;
  role: 'シェフ' | 'バーテンダー' | 'ソムリエ' | 'マネージャー';
  introduction: string;
  imageUrl: string;
  specialties: string[];
}

/**
 * お客様の声の型
 */
export interface CustomerReview {
  id: string;
  customerName: string;
  visitDate: string;
  rating: number;
  comment: string;
  occasion: 'デート' | '接待' | '友人との食事' | '一人飲み' | '記念日';
}

/**
 * お知らせの型
 */
export interface DiningBarNews {
  id: string;
  date: string;
  category: 'お知らせ' | 'イベント' | 'メニュー' | '定休日';
  title: string;
  content?: string;
}

/**
 * ブログ記事の型
 */
export interface DiningBarBlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: '新メニュー' | 'ワイン紹介' | 'イベントレポート' | 'スタッフ日記';
  author: string;
  publishedAt: string;
  imageUrl: string;
  tags: string[];
}

/**
 * 予約情報の型
 */
export interface Reservation {
  id: string;
  date: string;
  time: string;
  guests: number;
  course?: string;
  specialRequests?: string;
}
