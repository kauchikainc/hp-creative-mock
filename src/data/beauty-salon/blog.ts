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
 * 美容室ブログのモックデータ
 * Premiumプラン限定機能
 */
export const MOCK_BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: '2025年春夏トレンドヘアカラー特集',
    excerpt: '今シーズンのトレンドカラーをご紹介。透明感のあるアッシュ系から、温かみのあるブラウン系まで...',
    content: '今シーズンのトレンドカラーをご紹介。透明感のあるアッシュ系から、温かみのあるブラウン系まで、あなたに似合うカラーを見つけましょう。',
    imageUrl: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=800&h=600&fit=crop',
    publishedAt: '2025-10-28',
    category: 'ヘアカラー',
  },
  {
    id: '2',
    title: '髪質改善トリートメントの効果とは',
    excerpt: '最近話題の髪質改善トリートメント。その効果や持続期間、おすすめのケア方法を詳しく解説します...',
    content: '最近話題の髪質改善トリートメント。その効果や持続期間、おすすめのケア方法を詳しく解説します。ダメージヘアでお悩みの方必見です。',
    imageUrl: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&h=600&fit=crop',
    publishedAt: '2025-10-25',
    category: 'ヘアケア',
  },
  {
    id: '3',
    title: '顔型別おすすめヘアスタイル',
    excerpt: '丸顔、面長、ベース型など、顔型に合わせたヘアスタイルの選び方をプロが伝授...',
    content: '丸顔、面長、ベース型など、顔型に合わせたヘアスタイルの選び方をプロが伝授します。あなたの魅力を最大限に引き出すスタイルを見つけましょう。',
    imageUrl: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=600&fit=crop',
    publishedAt: '2025-10-20',
    category: 'スタイリング',
  },
  {
    id: '4',
    title: 'ホームケアで美髪を保つ方法',
    excerpt: 'サロンでの施術効果を長持ちさせるホームケアのポイントをご紹介...',
    content: 'サロンでの施術効果を長持ちさせるホームケアのポイントをご紹介します。シャンプーの選び方からドライヤーの使い方まで、プロのテクニックをお伝えします。',
    imageUrl: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=800&h=600&fit=crop',
    publishedAt: '2025-10-15',
    category: 'ヘアケア',
  },
];
