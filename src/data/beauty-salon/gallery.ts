import { GalleryImage } from '@/types/beauty-salon';

/**
 * ギャラリー画像のモックデータ
 * Premiumプラン限定機能
 */
export const MOCK_GALLERY: GalleryImage[] = [
  {
    id: '1',
    imageUrl: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=800&fit=crop',
    title: 'ナチュラルショートボブ',
    category: 'short',
    description: '柔らかな質感のショートボブ。どんなシーンにも合わせやすいスタイル。',
    stylistId: '1',
  },
  {
    id: '2',
    imageUrl: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=800&h=800&fit=crop',
    title: '外国人風ハイライトカラー',
    category: 'color',
    description: '立体感のあるハイライトで外国人風の透明感を演出。',
    stylistId: '4',
  },
  {
    id: '3',
    imageUrl: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&h=800&fit=crop',
    title: 'ゆるふわミディアム',
    category: 'medium',
    description: 'デジタルパーマでつくる、ゆるふわな女性らしいスタイル。',
    stylistId: '2',
  },
  {
    id: '4',
    imageUrl: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=800&h=800&fit=crop',
    title: 'エレガントロング',
    category: 'long',
    description: 'ツヤ感のあるロングヘア。トリートメントで美しい髪質を実現。',
    stylistId: '3',
  },
  {
    id: '5',
    imageUrl: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=800&h=800&fit=crop',
    title: 'グラデーションカラー',
    category: 'color',
    description: '根元から毛先にかけてのグラデーションカラー。',
    stylistId: '4',
  },
  {
    id: '6',
    imageUrl: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800&h=800&fit=crop',
    title: 'フェミニンパーマ',
    category: 'perm',
    description: '女性らしい柔らかなパーマスタイル。',
    stylistId: '1',
  },
];
