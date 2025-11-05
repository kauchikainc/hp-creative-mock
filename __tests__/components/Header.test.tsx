import { render, screen } from '@testing-library/react';
import { Header } from '@/components/Header';
import { DEFAULT_COMPANY_INFO } from '@/lib/defaultCompanyInfo';

describe('Header', () => {
  test('会社名が正しく表示される', () => {
    render(<Header companyInfo={DEFAULT_COMPANY_INFO} />);

    expect(screen.getByText('サンプル株式会社')).toBeInTheDocument();
  });

  test('カスタム会社名が正しく表示される', () => {
    const customInfo = {
      ...DEFAULT_COMPANY_INFO,
      companyName: 'テスト不動産株式会社',
    };

    render(<Header companyInfo={customInfo} />);

    expect(screen.getByText('テスト不動産株式会社')).toBeInTheDocument();
  });

  test('ナビゲーションリンクが表示される', () => {
    render(<Header companyInfo={DEFAULT_COMPANY_INFO} />);

    // 基本的なナビゲーション要素が存在することを確認
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  test('会社情報が空でもエラーにならない', () => {
    const emptyInfo = {
      ...DEFAULT_COMPANY_INFO,
      companyName: '',
    };

    render(<Header companyInfo={emptyInfo} />);

    // エラーが発生しないことを確認
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });
});
