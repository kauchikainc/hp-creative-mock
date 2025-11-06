/**
 * 清掃・廃棄物処理業に関する型定義
 */

/**
 * サービスカテゴリー
 */
export type ServiceCategory =
  | 'office'           // オフィス清掃
  | 'commercial'       // 商業施設清掃
  | 'medical'          // 医療施設清掃
  | 'industrial'       // 産業廃棄物処理
  | 'general-waste'    // 一般廃棄物収集運搬
  | 'recycling';       // リサイクル処理

/**
 * サービス情報
 */
export interface Service {
  id: string;
  title: string;
  category: ServiceCategory;
  description: string;
  features: string[];
  imageUrl: string;
  price?: string;
}

/**
 * 施工実績
 */
export interface WorkCase {
  id: string;
  title: string;
  category: ServiceCategory;
  client: string;
  location: string;
  completedDate: string;
  description: string;
  beforeImageUrl: string;
  afterImageUrl: string;
  results: string[];
}

/**
 * 認証・許可情報
 */
export interface Certification {
  id: string;
  name: string;
  number: string;
  issueDate: string;
  authority: string;
}

/**
 * 対応エリア
 */
export interface ServiceArea {
  prefecture: string;
  cities: string[];
  description?: string;
}

/**
 * お知らせ・ニュース
 */
export interface NewsItem {
  id: string;
  date: string;
  category: string;
  title: string;
  content: string;
  imageUrl?: string;
}
