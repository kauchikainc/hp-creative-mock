/**
 * カフェ業種の型定義
 */

/**
 * カフェメニューアイテム
 */
export interface CafeMenuItem {
  id: string;
  name: string;
  category: 'coffee' | 'tea' | 'food' | 'dessert';
  price: number;
  description: string;
  imageUrl: string;
  isRecommended?: boolean;
}

/**
 * カフェの雰囲気・特徴
 */
export interface CafeFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

/**
 * カフェのギャラリー画像
 */
export interface CafeGalleryImage {
  id: string;
  imageUrl: string;
  caption: string;
  category: 'interior' | 'food' | 'drink' | 'event';
}

/**
 * カフェのイベント情報
 */
export interface CafeEvent {
  id: string;
  title: string;
  date: string;
  description: string;
  imageUrl: string;
}
