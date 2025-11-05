import { render, screen } from '@testing-library/react';
import { PropertyDetailPage } from '@/components/PropertyDetailPage';
import { CompanyInfo } from '@/types';
import { Property } from '@/types/real-estate';

/**
 * PropertyDetailPage コンポーネントのテスト
 * 不動産物件の詳細ページ
 */
describe('PropertyDetailPage', () => {
  const mockCompanyInfo: CompanyInfo = {
    companyName: 'テスト不動産',
    postalCode: '100-0001',
    prefecture: '東京都',
    city: '千代田区',
    address: '千代田1-1-1',
    phoneNumber: '03-1234-5678',
    email: 'test@example.com',
  };

  const mockProperty: Property = {
    id: '1',
    title: 'ザ・タワーマンション 3LDK',
    location: '東京都港区六本木',
    price: 85000000,
    layout: '3LDK',
    area: 75.5,
    buildingAge: 5,
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00',
    description: '六本木駅徒歩5分の高級タワーマンション。南向きで眺望良好です。',
  };

  test('should render property title', () => {
    render(<PropertyDetailPage companyInfo={mockCompanyInfo} property={mockProperty} />);
    expect(screen.getByText('ザ・タワーマンション 3LDK')).toBeInTheDocument();
  });

  test('should render property price', () => {
    render(<PropertyDetailPage companyInfo={mockCompanyInfo} property={mockProperty} />);
    expect(screen.getByText(/85,000,000/)).toBeInTheDocument();
  });

  test('should render property details', () => {
    render(<PropertyDetailPage companyInfo={mockCompanyInfo} property={mockProperty} />);
    expect(screen.getByText(/75.50㎡/)).toBeInTheDocument();
    expect(screen.getByText(/築5年/)).toBeInTheDocument();
    const ldkElements = screen.getAllByText(/3LDK/);
    expect(ldkElements.length).toBeGreaterThan(0);
  });

  test('should render property description', () => {
    render(<PropertyDetailPage companyInfo={mockCompanyInfo} property={mockProperty} />);
    expect(screen.getByText(/六本木駅徒歩5分の高級タワーマンション/)).toBeInTheDocument();
  });

  test('should render property image', () => {
    render(<PropertyDetailPage companyInfo={mockCompanyInfo} property={mockProperty} />);
    const images = screen.getAllByRole('img');
    expect(images.length).toBeGreaterThan(0);
  });

  test('should render contact button', () => {
    render(<PropertyDetailPage companyInfo={mockCompanyInfo} property={mockProperty} />);
    const contactElements = screen.getAllByText(/お問い合わせ/);
    expect(contactElements.length).toBeGreaterThan(0);
  });

  test('should render back to list button', () => {
    render(<PropertyDetailPage companyInfo={mockCompanyInfo} property={mockProperty} />);
    expect(screen.getByText(/一覧に戻る/)).toBeInTheDocument();
  });
});
