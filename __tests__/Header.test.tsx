import { render, screen } from '@testing-library/react';
import { Header } from '@/components/Header';
import { CompanyInfo } from '@/types';

/**
 * Header コンポーネントのテスト
 * ナビゲーション機能とスクロール動作のテスト
 */
describe('Header', () => {
  const mockCompanyInfo: CompanyInfo = {
    companyName: 'テスト株式会社',
    postalCode: '100-0001',
    prefecture: '東京都',
    city: '千代田区',
    address: '千代田1-1-1',
    phoneNumber: '03-1234-5678',
    email: 'test@example.com',
  };

  test('should render company name', () => {
    render(<Header companyInfo={mockCompanyInfo} />);
    expect(screen.getByText('テスト株式会社')).toBeInTheDocument();
  });

  test('should render navigation links', () => {
    render(<Header companyInfo={mockCompanyInfo} />);
    expect(screen.getByText('ホーム')).toBeInTheDocument();
    expect(screen.getByText('会社概要')).toBeInTheDocument();
    expect(screen.getByText('お問い合わせ')).toBeInTheDocument();
  });

  test('should have correct href attributes for navigation links', () => {
    render(<Header companyInfo={mockCompanyInfo} />);

    const homeLink = screen.getByText('ホーム').closest('a');
    const aboutLink = screen.getByText('会社概要').closest('a');
    const contactLink = screen.getByText('お問い合わせ').closest('a');

    expect(homeLink).toHaveAttribute('href', '#');
    expect(aboutLink).toHaveAttribute('href', '#about');
    expect(contactLink).toHaveAttribute('href', '#contact');
  });

  test('should render mobile menu button', () => {
    render(<Header companyInfo={mockCompanyInfo} />);
    const menuButton = screen.getByLabelText('メニューを開く');
    expect(menuButton).toBeInTheDocument();
  });

  test('should have sticky positioning', () => {
    const { container } = render(<Header companyInfo={mockCompanyInfo} />);
    const header = container.querySelector('header');
    expect(header).toHaveClass('sticky');
  });
});
