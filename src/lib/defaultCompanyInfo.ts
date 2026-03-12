import { CompanyInfo } from '@/types';

/**
 * 会社情報のデフォルト値
 * 入力が空の場合にサンプルとして表示される
 */
export const DEFAULT_COMPANY_INFO: CompanyInfo = {
  companyName: 'サンプル株式会社',
  representativeName: '山田 太郎',
  postalCode: '100-0001',
  prefecture: '東京都',
  city: '千代田区',
  streetAddress: '千代田1-1-1',
  buildingName: 'サンプルビル3F',
  phone: '03-1234-5678',
  email: 'info@sample.co.jp',
};
