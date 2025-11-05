/**
 * CMS関連の型定義
 */

/**
 * 共通コンテンツインターフェース
 */
export interface CMSContent {
  /** コンテンツID */
  id: string;
  /** タイトル */
  title: string;
  /** 本文 */
  content: string;
  /** 公開日時 */
  publishedAt: Date;
  /** カテゴリ */
  category: string;
}
