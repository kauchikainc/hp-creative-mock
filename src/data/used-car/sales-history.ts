import { SalesRecord } from '@/types/used-car';

/**
 * 販売実績のモックデータ
 */
export const MOCK_SALES_RECORDS: SalesRecord[] = [
  {
    id: '1',
    vehicleModel: 'クラウン',
    soldDate: new Date('2024-11-01'),
    soldPrice: 2800000,
    imageUrl: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?w=400&h=300&fit=crop',
  },
  {
    id: '2',
    vehicleModel: 'セレナ',
    soldDate: new Date('2024-10-28'),
    soldPrice: 2200000,
    imageUrl: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=400&h=300&fit=crop',
  },
  {
    id: '3',
    vehicleModel: 'レクサス RX',
    soldDate: new Date('2024-10-25'),
    soldPrice: 5500000,
    imageUrl: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=400&h=300&fit=crop',
  },
  {
    id: '4',
    vehicleModel: 'N-BOX',
    soldDate: new Date('2024-10-20'),
    soldPrice: 1150000,
    imageUrl: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=400&h=300&fit=crop',
  },
  {
    id: '5',
    vehicleModel: 'ヴォクシー',
    soldDate: new Date('2024-10-18'),
    soldPrice: 2950000,
    imageUrl: 'https://images.unsplash.com/photo-1610710758477-9e72b40b0e92?w=400&h=300&fit=crop',
  },
];
