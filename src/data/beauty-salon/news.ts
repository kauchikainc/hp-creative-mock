/**
 * ニュース記事の型定義
 */
export interface News {
  id: string;
  title: string;
  content: string;
  publishedAt: Date;
  category: 'announcement' | 'campaign' | 'event';
}

/**
 * 美容室お知らせのモックデータ
 * Premiumプラン限定機能
 */
export const MOCK_NEWS: News[] = [
  {
    id: '1',
    title: '年末年始の営業日程のお知らせ',
    content: '12月30日(土)まで通常営業、12月31日(日)〜1月3日(水)休業、1月4日(木)より通常営業いたします。',
    publishedAt: new Date('2025-11-01'),
    category: 'announcement',
  },
  {
    id: '2',
    title: '【期間限定】カラー+トリートメントキャンペーン',
    content: '11月限定でカラーとトリートメントのセットが通常価格より20%OFF。この機会にぜひご利用ください。',
    publishedAt: new Date('2025-10-28'),
    category: 'campaign',
  },
  {
    id: '3',
    title: '新スタイリスト加入のお知らせ',
    content: '11月より新しいスタイリストが加わりました。豊富な経験を持つベテランスタイリストです。',
    publishedAt: new Date('2025-10-25'),
    category: 'announcement',
  },
  {
    id: '4',
    title: 'ヘアケアセミナー開催のお知らせ',
    content: '12月15日(日)14:00〜 無料ヘアケアセミナーを開催します。正しいホームケアの方法をお伝えします。',
    publishedAt: new Date('2025-10-20'),
    category: 'event',
  },
  {
    id: '5',
    title: '秋の髪質改善フェア開催中',
    content: '夏のダメージを集中ケア。髪質改善トリートメントが特別価格でご利用いただけます。',
    publishedAt: new Date('2025-10-10'),
    category: 'campaign',
  },
];
