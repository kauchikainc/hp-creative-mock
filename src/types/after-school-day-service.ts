/**
 * 放課後デイサービス業種の型定義
 * 障害のある子どもたちの放課後支援サービス向けのデータモデル
 */

/**
 * プログラム種別
 */
export type ProgramType =
  | 'learning'         // 学習支援
  | 'social'           // 社会性訓練
  | 'motor'            // 運動・体育
  | 'creative'         // 創作活動
  | 'daily-life'       // 日常生活訓練
  | 'communication';   // コミュニケーション

/**
 * プログラム情報
 */
export interface DayServiceProgram {
  /** プログラムID */
  id: string;
  /** プログラム名 */
  name: string;
  /** 種別 */
  type: ProgramType;
  /** 説明 */
  description: string;
  /** 対象年齢 */
  targetAge: string;
  /** 実施曜日 */
  schedule: string[];
  /** 画像URL */
  imageUrl: string;
}

/**
 * スタッフ情報
 */
export interface DayServiceStaff {
  /** スタッフID */
  id: string;
  /** 名前 */
  name: string;
  /** 役職 */
  position: string;
  /** 保有資格 */
  qualifications: string[];
  /** 得意分野 */
  specialties: string[];
  /** メッセージ */
  message: string;
  /** 画像URL */
  imageUrl: string;
}

/**
 * 活動の様子（ギャラリー）
 */
export interface ActivityPhoto {
  /** ID */
  id: string;
  /** タイトル */
  title: string;
  /** 説明 */
  description: string;
  /** 画像URL */
  imageUrl: string;
  /** 活動カテゴリ */
  category: ProgramType;
  /** 撮影日 */
  date: string;
}

/**
 * 保護者の声
 */
export interface ParentTestimonial {
  /** ID */
  id: string;
  /** 保護者名（イニシャルなど） */
  name: string;
  /** お子様の年齢/学年 */
  childInfo: string;
  /** 利用期間 */
  duration: string;
  /** コメント */
  comment: string;
}

/**
 * 一日の流れ
 */
export interface DailyScheduleItem {
  /** 時間 */
  time: string;
  /** 活動内容 */
  activity: string;
  /** 説明 */
  description?: string;
}

/**
 * お知らせ
 */
export interface DayServiceNews {
  /** ID */
  id: string;
  /** タイトル */
  title: string;
  /** 内容 */
  content: string;
  /** 日付 */
  date: string;
  /** カテゴリ */
  category: 'news' | 'event' | 'notice' | 'blog';
  /** 画像URL */
  imageUrl?: string;
}

/**
 * 利用案内
 */
export interface ServiceGuide {
  /** 対象者 */
  targetUsers: string;
  /** 利用時間 */
  serviceHours: string;
  /** 定員 */
  capacity: number;
  /** 送迎エリア */
  transportArea: string;
  /** 利用料金の説明 */
  feeDescription: string;
}
