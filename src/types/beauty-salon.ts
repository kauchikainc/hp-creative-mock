/**
 * 美容室業種関連の型定義
 */

/**
 * スタイリスト情報
 */
export interface Stylist {
  /** ID */
  id: string;
  /** 名前 */
  name: string;
  /** 役職 */
  title: string;
  /** 画像URL */
  imageUrl: string;
  /** 経歴年数 */
  experience: number;
  /** 得意スタイル */
  specialties: string[];
  /** 自己紹介 */
  description: string;
}

/**
 * メニュー情報
 */
export interface MenuInfo {
  /** ID */
  id: string;
  /** メニュー名 */
  name: string;
  /** カテゴリ */
  category: 'cut' | 'color' | 'perm' | 'treatment' | 'head-spa' | 'set';
  /** 価格 */
  price: number;
  /** 所要時間（分） */
  duration: number;
  /** 説明 */
  description: string;
  /** 人気メニューかどうか */
  isPopular?: boolean;
}

/**
 * ギャラリー画像情報
 */
export interface GalleryImage {
  /** ID */
  id: string;
  /** 画像URL */
  imageUrl: string;
  /** タイトル */
  title: string;
  /** カテゴリ */
  category: 'short' | 'medium' | 'long' | 'color' | 'perm' | 'arrange';
  /** 説明 */
  description?: string;
  /** スタイリストID */
  stylistId?: string;
}

/**
 * お客様の声
 */
export interface CustomerReview {
  /** ID */
  id: string;
  /** お客様名（イニシャル等） */
  customerName: string;
  /** 年代 */
  age: string;
  /** 評価（1-5） */
  rating: number;
  /** コメント */
  comment: string;
  /** 利用メニュー */
  menu: string;
  /** 投稿日 */
  date: Date;
}
