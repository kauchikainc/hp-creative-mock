/**
 * ブログ記事の型定義
 */
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  publishedAt: string;
  category: string;
}

/**
 * 不動産ブログのモックデータ
 */
export const MOCK_BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: '理想の住まいの選び方：立地編',
    excerpt: '住まい選びで最も重要な要素の一つが立地です。通勤・通学の利便性、周辺環境、将来性など...',
    content: '住まい選びで最も重要な要素の一つが立地です。通勤・通学の利便性、周辺環境、将来性など、様々な観点から理想の立地を見つけましょう。',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
    publishedAt: '2025-10-28',
    category: '住まい選び',
  },
  {
    id: '2',
    title: '住宅ローンの基礎知識',
    excerpt: '初めての住宅購入で不安なのが住宅ローン。金利の種類、返済方法、審査のポイントなど...',
    content: '初めての住宅購入で不安なのが住宅ローン。固定金利と変動金利の違い、返済計画の立て方など、基礎から解説します。',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop',
    publishedAt: '2025-10-25',
    category: '資金計画',
  },
  {
    id: '3',
    title: 'リノベーション物件の魅力',
    excerpt: '最近人気のリノベーション物件。新築にはない独自の魅力と、選ぶ際の注意点をご紹介...',
    content: 'リノベーション物件は、自分好みにカスタマイズされた空間を手に入れられるのが最大の魅力です。',
    imageUrl: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop',
    publishedAt: '2025-10-20',
    category: 'リノベーション',
  },
  {
    id: '4',
    title: '不動産投資入門ガイド',
    excerpt: '資産運用として注目される不動産投資。始めるために知っておきたい基礎知識を解説...',
    content: '不動産投資は長期的な資産形成に有効です。物件選び、資金計画、運用のポイントを押さえましょう。',
    imageUrl: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=800&h=600&fit=crop',
    publishedAt: '2025-10-15',
    category: '投資',
  },
];
