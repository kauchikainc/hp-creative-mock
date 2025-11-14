/**
 * 民泊業種の型定義
 */

/**
 * 客室情報
 */
export interface Room {
  /** 客室ID */
  id: string;
  /** 客室名 */
  name: string;
  /** 客室タイプ（和室、洋室、和洋室など） */
  type: string;
  /** 定員 */
  capacity: number;
  /** 広さ（平米） */
  size: number;
  /** 1泊あたりの料金 */
  pricePerNight: number;
  /** 客室説明 */
  description: string;
  /** メイン画像URL */
  imageUrl: string;
  /** ギャラリー画像URL */
  images: string[];
  /** 設備・アメニティ */
  amenities: string[];
  /** 眺望 */
  view?: string;
}

/**
 * 宿泊プラン
 */
export interface Plan {
  /** プランID */
  id: string;
  /** プラン名 */
  name: string;
  /** プラン説明 */
  description: string;
  /** 料金（1名あたり） */
  pricePerPerson: number;
  /** 含まれるサービス */
  includes: string[];
  /** プラン画像URL */
  imageUrl: string;
  /** 対象客室タイプ */
  applicableRooms: string[];
}

/**
 * 周辺観光スポット
 */
export interface TouristSpot {
  /** スポットID */
  id: string;
  /** スポット名 */
  name: string;
  /** カテゴリー（観光地、グルメ、アクティビティなど） */
  category: string;
  /** 説明 */
  description: string;
  /** 民泊からの距離（km） */
  distance: number;
  /** 所要時間（分） */
  travelTime: number;
  /** 画像URL */
  imageUrl: string;
}

/**
 * 施設情報
 */
export interface Facility {
  /** 施設名 */
  name: string;
  /** アイコン */
  icon: string;
  /** 説明 */
  description: string;
}

/**
 * ゲストレビュー
 */
export interface GuestReview {
  /** レビューID */
  id: string;
  /** ゲスト名 */
  guestName: string;
  /** 滞在時期 */
  stayDate: string;
  /** 評価（5段階） */
  rating: number;
  /** レビュー本文 */
  comment: string;
  /** 客室タイプ */
  roomType: string;
}
