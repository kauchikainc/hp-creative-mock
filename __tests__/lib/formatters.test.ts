import {
  formatAddress,
  formatFullAddress,
  formatPrice,
  formatArea,
} from '@/lib/formatters';
import { CompanyInfo } from '@/types';

describe('formatters', () => {
  describe('formatAddress', () => {
    test('すべての住所項目がある場合、正しく整形される', () => {
      const info: CompanyInfo = {
        companyName: 'テスト株式会社',
        representativeName: '田中 太郎',
        postalCode: '100-0001',
        prefecture: '東京都',
        city: '千代田区',
        streetAddress: '千代田1-1-1',
        buildingName: 'テストビル3F',
      };

      expect(formatAddress(info)).toBe('東京都千代田区千代田1-1-1テストビル3F');
    });

    test('建物名がない場合、建物名を除いて整形される', () => {
      const info: CompanyInfo = {
        companyName: 'テスト株式会社',
        representativeName: '田中 太郎',
        postalCode: '100-0001',
        prefecture: '東京都',
        city: '千代田区',
        streetAddress: '千代田1-1-1',
        buildingName: '',
      };

      expect(formatAddress(info)).toBe('東京都千代田区千代田1-1-1');
    });
  });

  describe('formatFullAddress', () => {
    test('郵便番号付きの住所が整形される', () => {
      const info: CompanyInfo = {
        companyName: 'テスト株式会社',
        representativeName: '田中 太郎',
        postalCode: '100-0001',
        prefecture: '東京都',
        city: '千代田区',
        streetAddress: '千代田1-1-1',
        buildingName: 'テストビル3F',
      };

      expect(formatFullAddress(info)).toBe(
        '〒100-0001 東京都千代田区千代田1-1-1テストビル3F'
      );
    });
  });

  describe('formatPrice', () => {
    test('価格がカンマ区切りで整形される', () => {
      expect(formatPrice(1000000)).toBe('1,000,000');
    });

    test('小さい金額も正しく整形される', () => {
      expect(formatPrice(500)).toBe('500');
    });

    test('大きい金額も正しく整形される', () => {
      expect(formatPrice(123456789)).toBe('123,456,789');
    });
  });

  describe('formatArea', () => {
    test('面積が小数点2桁で整形される', () => {
      expect(formatArea(50.5)).toBe('50.50㎡');
    });

    test('整数の面積も小数点2桁で整形される', () => {
      expect(formatArea(100)).toBe('100.00㎡');
    });

    test('小数点3桁以上は2桁に丸められる', () => {
      expect(formatArea(75.555)).toBe('75.56㎡');
    });
  });
});
