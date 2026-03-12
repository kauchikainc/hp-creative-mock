/**
 * 介護業種の型定義
 * 介護施設・訪問介護サービス向けのデータモデル
 */

/**
 * 介護サービス種別
 */
export type CareServiceType =
  | 'home-care'        // 訪問介護
  | 'day-service'      // デイサービス
  | 'group-home'       // グループホーム
  | 'residential'      // 住宅型有料老人ホーム
  | 'nursing-home';    // 特別養護老人ホーム

/**
 * 介護サービス情報
 */
export interface CareService {
  /** サービスID */
  id: string;
  /** サービス名 */
  name: string;
  /** サービス種別 */
  type: CareServiceType;
  /** 説明 */
  description: string;
  /** 特徴 */
  features: string[];
  /** 料金目安（円/月） */
  priceRange?: {
    min: number;
    max: number;
  };
  /** 画像URL */
  imageUrl: string;
}

/**
 * スタッフ情報
 */
export interface CareStaff {
  /** スタッフID */
  id: string;
  /** 名前 */
  name: string;
  /** 役職 */
  position: string;
  /** 資格 */
  qualifications: string[];
  /** 経験年数 */
  experienceYears: number;
  /** メッセージ */
  message: string;
  /** 画像URL */
  imageUrl: string;
}

/**
 * 施設情報
 */
export interface CareFacility {
  /** 施設ID */
  id: string;
  /** 施設名 */
  name: string;
  /** 住所 */
  address: string;
  /** 電話番号 */
  phone: string;
  /** 定員 */
  capacity: number;
  /** 設備 */
  amenities: string[];
  /** 画像URL */
  imageUrl: string;
  /** 特徴 */
  features: string[];
}

/**
 * 利用者の声
 */
export interface CareTestimonial {
  /** ID */
  id: string;
  /** 利用者名（イニシャルなど） */
  name: string;
  /** 続柄（ご家族など） */
  relation: string;
  /** 利用サービス */
  service: string;
  /** コメント */
  comment: string;
  /** 年代 */
  ageGroup?: string;
}

/**
 * お知らせ
 */
export interface CareNews {
  /** ID */
  id: string;
  /** タイトル */
  title: string;
  /** 内容 */
  content: string;
  /** 日付 */
  date: string;
  /** カテゴリ */
  category: 'news' | 'event' | 'notice';
  /** 画像URL */
  imageUrl?: string;
}
