import { Industry } from '@/types/plan';

/**
 * 業種別設定インターフェース
 */
export interface IndustryConfig {
  /** 業種名 */
  name: string;
  /** 説明文 */
  description: string;
  /** ヒーロー画像のパス */
  heroImage: string;
  /** プライマリーカラー */
  primaryColor: string;
  /** アクセントカラー */
  accentColor: string;
  /** 業種に適したフォント（オプション） */
  font?: string;
}

/**
 * 業種別設定
 * 各業種ごとのビジュアルや設定を定義
 */
export const INDUSTRY_CONFIG: Record<Industry, IndustryConfig> = {
  'real-estate': {
    name: '不動産',
    description: '理想の住まい探しをサポート',
    heroImage: '/images/real-estate-hero.jpg',
    primaryColor: '#2563eb', // blue-600
    accentColor: '#3b82f6', // blue-500
  },
  'used-car': {
    name: '中古車販売',
    description: 'あなたにぴったりの一台を',
    heroImage: '/images/used-car-hero.jpg',
    primaryColor: '#dc2626', // red-600
    accentColor: '#ef4444', // red-500
  },
  'beauty-salon': {
    name: '美容室',
    description: 'あなたの魅力を最大限に引き出す',
    heroImage: '/images/beauty-salon-hero.jpg',
    primaryColor: '#ec4899', // pink-500
    accentColor: '#c084fc', // purple-400
    font: 'serif',
  },
  'scaffolding': {
    name: '足場・鳶職',
    description: '安全第一、確かな技術で現場を支える',
    heroImage: '/images/scaffolding-hero.jpg',
    primaryColor: '#f59e0b', // amber-500
    accentColor: '#fb923c', // orange-400
  },
  'tutorial-school': {
    name: '学習塾',
    description: '一人ひとりの夢を、確かな学力で支える',
    heroImage: '/images/tutorial-school-hero.jpg',
    primaryColor: '#10b981', // emerald-500
    accentColor: '#3b82f6', // blue-500
  },
  'pet-shop': {
    name: 'ペットショップ',
    description: '大切な家族との出会いをお手伝い',
    heroImage: '/images/pet-shop-hero.jpg',
    primaryColor: '#f59e0b', // amber-500
    accentColor: '#ec4899', // pink-500
  },
  // 今後追加予定の業種設定例:
  // 'construction': {
  //   name: '建設業',
  //   description: '確かな技術で未来を創る',
  //   heroImage: '/images/construction-hero.jpg',
  //   primaryColor: '#f59e0b', // amber-500
  //   accentColor: '#fbbf24', // amber-400
  // },
  // 'restaurant': {
  //   name: '飲食店',
  //   description: '心を満たす美味しさを',
  //   heroImage: '/images/restaurant-hero.jpg',
  //   primaryColor: '#f97316', // orange-500
  //   accentColor: '#fb923c', // orange-400
  // },
};
