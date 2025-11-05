import { validateCompanyInfo, normalizePostalCode } from '@/lib/validation';
import { CompanyInfo } from '@/types';

describe('validation', () => {
  describe('validateCompanyInfo', () => {
    test('会社名が未入力の場合エラーを返す', () => {
      const info: Partial<CompanyInfo> = {
        companyName: '',
      };

      const errors = validateCompanyInfo(info);

      expect(errors.companyName).toBe('会社名/組織名/屋号は必須です');
    });

    test('会社名が空白のみの場合エラーを返す', () => {
      const info: Partial<CompanyInfo> = {
        companyName: '   ',
      };

      const errors = validateCompanyInfo(info);

      expect(errors.companyName).toBe('会社名/組織名/屋号は必須です');
    });

    test('郵便番号の形式が不正な場合エラーを返す', () => {
      const info: Partial<CompanyInfo> = {
        companyName: 'テスト株式会社',
        postalCode: '12345',
      };

      const errors = validateCompanyInfo(info);

      expect(errors.postalCode).toBe('郵便番号の形式が正しくありません (例: 100-0001)');
    });

    test('正しい入力の場合エラーを返さない', () => {
      const info: Partial<CompanyInfo> = {
        companyName: 'テスト株式会社',
        representativeName: '田中 太郎',
        postalCode: '100-0001',
        prefecture: '東京都',
        city: '千代田区',
        streetAddress: '千代田1-1-1',
        buildingName: 'テストビル',
      };

      const errors = validateCompanyInfo(info);

      expect(Object.keys(errors).length).toBe(0);
    });

    test('郵便番号がハイフンなしでも正しい場合はエラーを返さない', () => {
      const info: Partial<CompanyInfo> = {
        companyName: 'テスト株式会社',
        postalCode: '1000001',
      };

      const errors = validateCompanyInfo(info);

      expect(errors.postalCode).toBeUndefined();
    });
  });

  describe('normalizePostalCode', () => {
    test('7桁の数字をハイフン付きに整形する', () => {
      expect(normalizePostalCode('1000001')).toBe('100-0001');
    });

    test('すでにハイフンがある場合はそのまま返す', () => {
      expect(normalizePostalCode('100-0001')).toBe('100-0001');
    });

    test('7桁でない場合はそのまま返す', () => {
      expect(normalizePostalCode('123')).toBe('123');
    });

    test('ハイフン以外の記号を除去して整形する', () => {
      expect(normalizePostalCode('100@0001')).toBe('100-0001');
    });
  });
});
