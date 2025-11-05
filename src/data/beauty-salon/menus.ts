import { MenuInfo } from '@/types/beauty-salon';

/**
 * メニューのモックデータ
 */
export const MOCK_MENUS: MenuInfo[] = [
  {
    id: '1',
    name: 'カット',
    category: 'cut',
    price: 5500,
    duration: 60,
    description: 'シャンプー・ブロー込み。骨格や髪質に合わせた丁寧なカットで理想のスタイルを実現します。',
    isPopular: true,
  },
  {
    id: '2',
    name: 'カット + カラー',
    category: 'color',
    price: 12000,
    duration: 120,
    description: 'カットとカラーのセットメニュー。トレンドカラーからナチュラルカラーまで幅広く対応。',
    isPopular: true,
  },
  {
    id: '3',
    name: 'カット + パーマ',
    category: 'perm',
    price: 13000,
    duration: 150,
    description: 'カットとパーマのセット。デジタルパーマ、エアウェーブなどお選びいただけます。',
  },
  {
    id: '4',
    name: 'カラーリング',
    category: 'color',
    price: 7500,
    duration: 90,
    description: 'カラーのみのメニュー。ファッションカラー、グレイカラー、ハイライトなど。',
  },
  {
    id: '5',
    name: 'デジタルパーマ',
    category: 'perm',
    price: 8500,
    duration: 120,
    description: 'ふんわりとした柔らかいカールが長持ち。スタイリングも簡単です。',
  },
  {
    id: '6',
    name: 'ヘッドスパ',
    category: 'head-spa',
    price: 3500,
    duration: 30,
    description: '頭皮のケアとリラクゼーション。疲れを癒やしながら健やかな頭皮環境へ。',
    isPopular: true,
  },
  {
    id: '7',
    name: 'プレミアムトリートメント',
    category: 'treatment',
    price: 5000,
    duration: 45,
    description: '髪質改善トリートメント。ダメージケアとツヤ髪を実現します。',
  },
  {
    id: '8',
    name: 'ヘアセット',
    category: 'set',
    price: 4000,
    duration: 45,
    description: '結婚式や成人式、パーティーなど特別な日のヘアセット。',
  },
];
