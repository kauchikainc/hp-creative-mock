import { CustomerReview } from '@/types/beauty-salon';

/**
 * お客様の声のモックデータ
 * Premiumプラン限定機能
 */
export const MOCK_REVIEWS: CustomerReview[] = [
  {
    id: '1',
    customerName: 'M.Y様',
    age: '30代',
    rating: 5,
    comment: 'いつも丁寧なカウンセリングで、希望通りのスタイルに仕上げていただけます。カラーの色持ちも良く、大満足です。',
    menu: 'カット + カラー',
    date: new Date('2025-10-28'),
  },
  {
    id: '2',
    customerName: 'S.K様',
    age: '20代',
    rating: 5,
    comment: 'トレンドを取り入れつつ、私に似合うスタイルを提案してくださいます。スタッフの皆さんも親切で通いやすいサロンです。',
    menu: 'カット',
    date: new Date('2025-10-25'),
  },
  {
    id: '3',
    customerName: 'A.T様',
    age: '40代',
    rating: 5,
    comment: 'ヘッドスパが本当に気持ち良くて、毎回楽しみにしています。髪の状態も良くなりました。',
    menu: 'ヘッドスパ',
    date: new Date('2025-10-20'),
  },
  {
    id: '4',
    customerName: 'R.N様',
    age: '20代',
    rating: 5,
    comment: '初めてのパーマでしたが、丁寧に説明していただき安心してお任せできました。仕上がりも理想通りです。',
    menu: 'カット + パーマ',
    date: new Date('2025-10-15'),
  },
  {
    id: '5',
    customerName: 'H.M様',
    age: '30代',
    rating: 5,
    comment: 'カラーリストの方の技術が本当に素晴らしいです。外国人風カラーがこんなに綺麗に仕上がるとは思いませんでした。',
    menu: 'カラーリング',
    date: new Date('2025-10-10'),
  },
];
