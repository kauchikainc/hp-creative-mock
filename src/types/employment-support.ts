/**
 * 就労支援業種の型定義
 * 障害者就労支援サービス向けのデータモデル
 */

/**
 * 支援種別
 */
export type SupportType =
  | 'transition-a'     // 就労移行支援
  | 'transition-b'     // 就労継続支援A型
  | 'continuation-b'   // 就労継続支援B型
  | 'settlement';      // 就労定着支援

/**
 * 支援プログラム
 */
export interface SupportProgram {
  /** プログラムID */
  id: string;
  /** プログラム名 */
  name: string;
  /** 支援種別 */
  type: SupportType;
  /** 説明 */
  description: string;
  /** 訓練内容 */
  trainingContents: string[];
  /** 対象者 */
  targetUsers: string;
  /** 画像URL */
  imageUrl: string;
}

/**
 * 就職実績
 */
export interface EmploymentResult {
  /** ID */
  id: string;
  /** 年度 */
  year: number;
  /** 就職者数 */
  employedCount: number;
  /** 定着率（%） */
  retentionRate: number;
  /** 主な就職先業種 */
  industries: string[];
}

/**
 * 利用者の声（成功事例）
 */
export interface SuccessStory {
  /** ID */
  id: string;
  /** 利用者名（イニシャルなど） */
  name: string;
  /** 年代 */
  ageGroup: string;
  /** 利用サービス */
  serviceUsed: SupportType;
  /** 利用期間 */
  duration: string;
  /** 現在の就職先業種 */
  currentJob: string;
  /** ストーリー */
  story: string;
  /** 画像URL */
  imageUrl?: string;
}

/**
 * スタッフ情報
 */
export interface SupportStaff {
  /** スタッフID */
  id: string;
  /** 名前 */
  name: string;
  /** 役職 */
  position: string;
  /** 保有資格 */
  qualifications: string[];
  /** 専門分野 */
  specialties: string[];
  /** メッセージ */
  message: string;
  /** 画像URL */
  imageUrl: string;
}

/**
 * 作業内容
 */
export interface WorkContent {
  /** ID */
  id: string;
  /** 作業名 */
  name: string;
  /** カテゴリ */
  category: 'office' | 'manufacturing' | 'service' | 'it' | 'craft';
  /** 説明 */
  description: string;
  /** 身につくスキル */
  skills: string[];
  /** 画像URL */
  imageUrl: string;
}

/**
 * 提携企業
 */
export interface PartnerCompany {
  /** ID */
  id: string;
  /** 企業名 */
  name: string;
  /** 業種 */
  industry: string;
  /** ロゴURL */
  logoUrl?: string;
}

/**
 * お知らせ
 */
export interface SupportNews {
  /** ID */
  id: string;
  /** タイトル */
  title: string;
  /** 内容 */
  content: string;
  /** 日付 */
  date: string;
  /** カテゴリ */
  category: 'news' | 'event' | 'success' | 'recruitment';
  /** 画像URL */
  imageUrl?: string;
}

/**
 * 利用案内
 */
export interface SupportGuide {
  /** 対象者 */
  targetUsers: string;
  /** 利用時間 */
  serviceHours: string;
  /** 定員 */
  capacity: number;
  /** 工賃（B型の場合） */
  wage?: {
    average: number;
    max: number;
  };
  /** 利用料金の説明 */
  feeDescription: string;
}
