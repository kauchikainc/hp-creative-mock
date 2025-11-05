import { Stylist } from '@/types/beauty-salon';

/**
 * スタイリストのモックデータ
 * Premiumプラン限定機能
 */
export const MOCK_STYLISTS: Stylist[] = [
  {
    id: '1',
    name: '佐藤 美咲',
    title: 'トップスタイリスト',
    imageUrl: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400&h=400&fit=crop',
    experience: 12,
    specialties: ['ショートヘア', 'トレンドカラー', 'ハイライト'],
    description: '12年のキャリアを活かし、お客様一人ひとりに似合うスタイルをご提案します。ショートヘアとカラーリングが得意です。',
  },
  {
    id: '2',
    name: '田中 翔太',
    title: 'スタイリスト',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    experience: 8,
    specialties: ['メンズカット', 'パーマ', 'スタイリング'],
    description: 'メンズスタイルを中心に、幅広いスタイルに対応しています。パーマスタイルもお任せください。',
  },
  {
    id: '3',
    name: '鈴木 麻衣',
    title: 'スタイリスト',
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    experience: 6,
    specialties: ['ロングヘア', 'アレンジ', 'トリートメント'],
    description: 'ロングヘアのお客様に寄り添い、髪質改善からスタイリングまでトータルでサポートいたします。',
  },
  {
    id: '4',
    name: '高橋 結衣',
    title: 'カラーリスト',
    imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop',
    experience: 10,
    specialties: ['外国人風カラー', 'グラデーション', 'ブリーチ'],
    description: 'カラーリングのスペシャリスト。外国人風カラーやハイトーンカラーが得意です。',
  },
];
