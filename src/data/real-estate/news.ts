import { RealEstateNews } from '@/types/real-estate';

/**
 * 不動産お知らせのモックデータ
 */
export const MOCK_NEWS: RealEstateNews[] = [
  {
    id: '1',
    title: '年末年始の営業日程のお知らせ',
    content: '誠に勝手ながら、12月29日(金)〜1月3日(水)まで年末年始休業とさせていただきます。',
    publishedAt: new Date('2024-12-15'),
    category: 'announcement',
  },
  {
    id: '2',
    title: '新規物件50件追加しました',
    content: '渋谷エリアを中心に、新規物件を50件追加いたしました。ぜひご覧ください。',
    publishedAt: new Date('2024-11-20'),
    category: 'news',
  },
  {
    id: '3',
    title: 'オンライン内見サービス開始',
    content: 'ご自宅から物件を内見できるオンライン内見サービスを開始しました。',
    publishedAt: new Date('2024-11-10'),
    category: 'news',
  },
];
