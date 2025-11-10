/**
 * プラン関連の型定義
 */

/**
 * プラン種別の定数
 */
export const PLANS = {
  STANDARD: 'standard',
  PREMIUM: 'premium',
} as const;

/**
 * プラン型
 */
export type Plan = typeof PLANS[keyof typeof PLANS];

/**
 * 業種種別の定数
 */
export const INDUSTRIES = {
  REAL_ESTATE: 'real-estate',
  USED_CAR: 'used-car',
  BEAUTY_SALON: 'beauty-salon',
  SCAFFOLDING: 'scaffolding',        // 足場・鳶職
  TUTORIAL_SCHOOL: 'tutorial-school', // 学習塾
  PET_SHOP: 'pet-shop',              // ペットショップ
  RYOKAN: 'ryokan',                  // 旅館
  DINING_BAR: 'dining-bar',          // ダイニングバー
  CLEANING_SERVICE: 'cleaning-service', // 清掃・廃棄物処理
  GYNECOLOGY_SALON: 'gynecology-salon', // 婦人科サロン
  CAFE: 'cafe',                      // カフェ
  // 今後追加予定:
  // CONSTRUCTION: 'construction',      // 建設業
  // RESTAURANT: 'restaurant',          // 飲食店
  // MEDICAL: 'medical',                // 医療機関
  // LEGAL: 'legal',                    // 士業
  // ECOMMERCE: 'ecommerce',            // ECサイト
} as const;

/**
 * 業種型
 */
export type Industry = typeof INDUSTRIES[keyof typeof INDUSTRIES];

/**
 * プラン別機能設定
 */
export interface PlanFeatures {
  /** お問い合わせフォームの有無 */
  hasContactForm: boolean;
  /** CMS機能の有無 */
  hasCMS: boolean;
  /** ブログ機能の有無 */
  hasBlog: boolean;
  /** お知らせ・ニュース機能の有無 */
  hasNews: boolean;
  /** 在庫管理機能の有無 */
  hasInventoryManagement: boolean;
  /** 販売実績表示の有無（業種依存） */
  hasSalesHistory?: boolean;
}
