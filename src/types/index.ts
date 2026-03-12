/**
 * 共通型定義
 */

/**
 * 会社情報
 */
export interface CompanyInfo {
  /** 会社名/組織名/屋号（必須） */
  companyName: string;
  /** 代表者名（任意） */
  representativeName: string;
  /** 郵便番号（任意） */
  postalCode: string;
  /** 都道府県（任意） */
  prefecture: string;
  /** 市区町村（任意） */
  city: string;
  /** 丁目番地（任意） */
  streetAddress: string;
  /** 建物名（任意） */
  buildingName: string;
  /** 電話番号（任意） */
  phone: string;
  /** メールアドレス（任意） */
  email: string;
}

/**
 * ページパラメータ
 */
export interface PageParams {
  industry: string;
  plan: string;
}
