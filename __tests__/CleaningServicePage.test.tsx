import { render, screen } from '@testing-library/react';
import { CleaningServicePage } from '@/components/CleaningServicePage';
import { defaultCompanyInfo } from '@/lib/defaultCompanyInfo';

describe('CleaningServicePage', () => {
  const mockCompanyInfo = {
    ...defaultCompanyInfo,
    companyName: 'クリーンサービス株式会社',
  };

  describe('Standard プラン', () => {
    test('会社名が表示される', () => {
      render(<CleaningServicePage companyInfo={mockCompanyInfo} plan="standard" />);
      const headings = screen.getAllByText('クリーンサービス株式会社');
      expect(headings.length).toBeGreaterThan(0);
    });

    test('ヒーローセクションが表示される', () => {
      render(<CleaningServicePage companyInfo={mockCompanyInfo} plan="standard" />);
      expect(screen.getByText('クリーンな環境づくりで、持続可能な社会を実現')).toBeInTheDocument();
    });

    test('サービス紹介セクションが表示される', () => {
      render(<CleaningServicePage companyInfo={mockCompanyInfo} plan="standard" />);
      const headings = screen.getAllByText('サービス案内');
      expect(headings.length).toBeGreaterThan(0);
    });

    test('会社の強みが表示される', () => {
      render(<CleaningServicePage companyInfo={mockCompanyInfo} plan="standard" />);
      expect(screen.getByText('選ばれる理由')).toBeInTheDocument();
    });

    test('お問い合わせボタンが表示される', () => {
      render(<CleaningServicePage companyInfo={mockCompanyInfo} plan="standard" />);
      const buttons = screen.getAllByText(/お問い合わせ/);
      expect(buttons.length).toBeGreaterThan(0);
    });

    test('認証・許可情報が表示される', () => {
      render(<CleaningServicePage companyInfo={mockCompanyInfo} plan="standard" />);
      expect(screen.getByText('認証・許可')).toBeInTheDocument();
    });

    test('対応エリアが表示される', () => {
      render(<CleaningServicePage companyInfo={mockCompanyInfo} plan="standard" />);
      expect(screen.getByText('対応エリア')).toBeInTheDocument();
    });

    test('実績が表示される', () => {
      render(<CleaningServicePage companyInfo={mockCompanyInfo} plan="standard" />);
      expect(screen.getByText(/年の実績/)).toBeInTheDocument();
    });
  });

  describe('Premium プラン', () => {
    test('施工事例セクションが表示される', () => {
      render(<CleaningServicePage companyInfo={mockCompanyInfo} plan="premium" />);
      expect(screen.getByText('施工事例')).toBeInTheDocument();
    });

    test('ブログセクションが表示される', () => {
      render(<CleaningServicePage companyInfo={mockCompanyInfo} plan="premium" />);
      expect(screen.getByText('ブログ')).toBeInTheDocument();
    });

    test('お知らせセクションが表示される', () => {
      render(<CleaningServicePage companyInfo={mockCompanyInfo} plan="premium" />);
      const headings = screen.getAllByText('お知らせ');
      expect(headings.length).toBeGreaterThan(0);
    });

    test('Before/After画像が表示される', () => {
      render(<CleaningServicePage companyInfo={mockCompanyInfo} plan="premium" />);
      const beforeImages = screen.getAllByAltText(/施工前/);
      expect(beforeImages.length).toBeGreaterThan(0);
    });
  });

  describe('Standard プランでPremium機能が表示されない', () => {
    test('施工事例セクションが表示されない', () => {
      render(<CleaningServicePage companyInfo={mockCompanyInfo} plan="standard" />);
      expect(screen.queryByText('施工事例')).not.toBeInTheDocument();
    });

    test('ブログセクションが表示されない', () => {
      render(<CleaningServicePage companyInfo={mockCompanyInfo} plan="standard" />);
      expect(screen.queryByText('ブログ')).not.toBeInTheDocument();
    });

    test('お知らせセクションが表示されない', () => {
      render(<CleaningServicePage companyInfo={mockCompanyInfo} plan="standard" />);
      expect(screen.queryByText('お知らせ')).not.toBeInTheDocument();
    });
  });
});
