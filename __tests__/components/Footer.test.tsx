import { render, screen } from '@testing-library/react';
import { Footer } from '@/components/Footer';
import { DEFAULT_COMPANY_INFO } from '@/lib/defaultCompanyInfo';

describe('Footer', () => {
  test('会社名が正しく表示される', () => {
    render(<Footer companyInfo={DEFAULT_COMPANY_INFO} />);

    expect(screen.getByText('サンプル株式会社')).toBeInTheDocument();
  });

  test('代表者名が正しく表示される', () => {
    render(<Footer companyInfo={DEFAULT_COMPANY_INFO} />);

    expect(screen.getByText(/山田 太郎/)).toBeInTheDocument();
  });

  test('住所が正しく表示される', () => {
    render(<Footer companyInfo={DEFAULT_COMPANY_INFO} />);

    // 郵便番号
    expect(screen.getByText(/100-0001/)).toBeInTheDocument();
    // 都道府県
    expect(screen.getByText(/東京都/)).toBeInTheDocument();
  });

  test('カスタム会社情報が正しく表示される', () => {
    const customInfo = {
      ...DEFAULT_COMPANY_INFO,
      companyName: 'テスト不動産株式会社',
      representativeName: '鈴木 花子',
      postalCode: '150-0001',
      prefecture: '東京都',
      city: '渋谷区',
      streetAddress: '渋谷1-1-1',
      buildingName: 'テストビル5F',
    };

    render(<Footer companyInfo={customInfo} />);

    expect(screen.getByText('テスト不動産株式会社')).toBeInTheDocument();
    expect(screen.getByText(/鈴木 花子/)).toBeInTheDocument();
    expect(screen.getByText(/150-0001/)).toBeInTheDocument();
    expect(screen.getByText(/渋谷区/)).toBeInTheDocument();
  });

  test('著作権表示が含まれる', () => {
    render(<Footer companyInfo={DEFAULT_COMPANY_INFO} />);

    const currentYear = new Date().getFullYear();
    expect(screen.getByText(new RegExp(currentYear.toString()))).toBeInTheDocument();
  });

  test('footerロールを持つ要素が存在する', () => {
    render(<Footer companyInfo={DEFAULT_COMPANY_INFO} />);

    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });
});
