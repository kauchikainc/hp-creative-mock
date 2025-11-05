import { render, screen } from '@testing-library/react';
import { VehicleDetailPage } from '@/components/VehicleDetailPage';
import { CompanyInfo } from '@/types';
import { Vehicle } from '@/types/used-car';

/**
 * VehicleDetailPage コンポーネントのテスト
 * 中古車両の詳細ページ
 */
describe('VehicleDetailPage', () => {
  const mockCompanyInfo: CompanyInfo = {
    companyName: 'テスト中古車販売',
    postalCode: '100-0001',
    prefecture: '東京都',
    city: '千代田区',
    address: '千代田1-1-1',
    phoneNumber: '03-1234-5678',
    email: 'test@example.com',
  };

  const mockVehicle: Vehicle = {
    id: '1',
    manufacturer: 'トヨタ',
    model: 'プリウス',
    year: 2020,
    price: 2500000,
    mileage: 25000,
    color: 'パールホワイト',
    transmission: 'CVT',
    fuelType: 'ハイブリッド',
    imageUrl: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341',
    description: '燃費性能に優れたハイブリッドカー。ワンオーナー車で走行距離も少なく、状態良好です。',
  };

  test('should render vehicle model', () => {
    render(<VehicleDetailPage companyInfo={mockCompanyInfo} vehicle={mockVehicle} />);
    expect(screen.getByText('プリウス')).toBeInTheDocument();
  });

  test('should render vehicle manufacturer', () => {
    render(<VehicleDetailPage companyInfo={mockCompanyInfo} vehicle={mockVehicle} />);
    expect(screen.getByText(/トヨタ/)).toBeInTheDocument();
  });

  test('should render vehicle price', () => {
    render(<VehicleDetailPage companyInfo={mockCompanyInfo} vehicle={mockVehicle} />);
    expect(screen.getByText(/250万/)).toBeInTheDocument();
  });

  test('should render vehicle specifications', () => {
    render(<VehicleDetailPage companyInfo={mockCompanyInfo} vehicle={mockVehicle} />);
    expect(screen.getByText(/2020年式/)).toBeInTheDocument();
    expect(screen.getByText(/25,000km/)).toBeInTheDocument();
    expect(screen.getByText(/パールホワイト/)).toBeInTheDocument();
    expect(screen.getByText(/CVT/)).toBeInTheDocument();
    expect(screen.getByText(/ハイブリッド/)).toBeInTheDocument();
  });

  test('should render vehicle description', () => {
    render(<VehicleDetailPage companyInfo={mockCompanyInfo} vehicle={mockVehicle} />);
    expect(screen.getByText(/燃費性能に優れたハイブリッドカー/)).toBeInTheDocument();
  });

  test('should render vehicle image', () => {
    render(<VehicleDetailPage companyInfo={mockCompanyInfo} vehicle={mockVehicle} />);
    const images = screen.getAllByRole('img');
    expect(images.length).toBeGreaterThan(0);
  });

  test('should render contact button', () => {
    render(<VehicleDetailPage companyInfo={mockCompanyInfo} vehicle={mockVehicle} />);
    expect(screen.getByText(/お問い合わせ/)).toBeInTheDocument();
  });

  test('should render back to list button', () => {
    render(<VehicleDetailPage companyInfo={mockCompanyInfo} vehicle={mockVehicle} />);
    expect(screen.getByText(/一覧に戻る/)).toBeInTheDocument();
  });
});
