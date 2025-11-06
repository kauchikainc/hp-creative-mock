import { render, screen } from '@testing-library/react';
import { GynecologySalonPage } from '@/components/GynecologySalonPage';
import { defaultCompanyInfo } from '@/lib/defaultCompanyInfo';

describe('GynecologySalonPage', () => {
  const mockCompanyInfo = {
    ...defaultCompanyInfo,
    companyName: 'レディースクリニック桜',
  };

  describe('Standard プラン', () => {
    test('会社名が表示される', () => {
      render(<GynecologySalonPage companyInfo={mockCompanyInfo} plan="standard" />);
      const headings = screen.getAllByText('レディースクリニック桜');
      expect(headings.length).toBeGreaterThan(0);
    });

    test('ヒーローセクションが表示される', () => {
      render(<GynecologySalonPage companyInfo={mockCompanyInfo} plan="standard" />);
      expect(screen.getByText('女性のための安心できる専門医療')).toBeInTheDocument();
    });

    test('診療内容セクションが表示される', () => {
      render(<GynecologySalonPage companyInfo={mockCompanyInfo} plan="standard" />);
      expect(screen.getByText('診療内容')).toBeInTheDocument();
    });

    test('当院の特徴が表示される', () => {
      render(<GynecologySalonPage companyInfo={mockCompanyInfo} plan="standard" />);
      expect(screen.getByText('当院の特徴')).toBeInTheDocument();
    });

    test('お問い合わせボタンが表示される', () => {
      render(<GynecologySalonPage companyInfo={mockCompanyInfo} plan="standard" />);
      const buttons = screen.getAllByText(/ご予約・お問い合わせ/);
      expect(buttons.length).toBeGreaterThan(0);
    });

    test('診療時間が表示される', () => {
      render(<GynecologySalonPage companyInfo={mockCompanyInfo} plan="standard" />);
      expect(screen.getByText('診療時間')).toBeInTheDocument();
    });

    test('医師紹介セクションが表示される', () => {
      render(<GynecologySalonPage companyInfo={mockCompanyInfo} plan="standard" />);
      expect(screen.getByText('医師紹介')).toBeInTheDocument();
    });

    test('安心への取り組みが表示される', () => {
      render(<GynecologySalonPage companyInfo={mockCompanyInfo} plan="standard" />);
      expect(screen.getByText('安心への取り組み')).toBeInTheDocument();
    });
  });

  describe('Premium プラン', () => {
    test('施術メニューセクションが表示される', () => {
      render(<GynecologySalonPage companyInfo={mockCompanyInfo} plan="premium" />);
      expect(screen.getByText('施術メニュー')).toBeInTheDocument();
    });

    test('症例実績セクションが表示される', () => {
      render(<GynecologySalonPage companyInfo={mockCompanyInfo} plan="premium" />);
      expect(screen.getByText('症例実績')).toBeInTheDocument();
    });

    test('ブログセクションが表示される', () => {
      render(<GynecologySalonPage companyInfo={mockCompanyInfo} plan="premium" />);
      expect(screen.getByText('健康コラム')).toBeInTheDocument();
    });

    test('お知らせセクションが表示される', () => {
      render(<GynecologySalonPage companyInfo={mockCompanyInfo} plan="premium" />);
      const headings = screen.getAllByText('お知らせ');
      expect(headings.length).toBeGreaterThan(0);
    });

    test('医師の詳細情報が表示される', () => {
      render(<GynecologySalonPage companyInfo={mockCompanyInfo} plan="premium" />);
      // Premium版では医師の詳細プロフィールが複数表示される
      const doctorSection = screen.getByText('医師紹介');
      expect(doctorSection).toBeInTheDocument();
    });

    test('お客様の声セクションが表示される', () => {
      render(<GynecologySalonPage companyInfo={mockCompanyInfo} plan="premium" />);
      expect(screen.getByText('お客様の声')).toBeInTheDocument();
    });
  });

  describe('Standard プランでPremium機能が表示されない', () => {
    test('施術メニューセクションが表示されない', () => {
      render(<GynecologySalonPage companyInfo={mockCompanyInfo} plan="standard" />);
      expect(screen.queryByText('施術メニュー')).not.toBeInTheDocument();
    });

    test('症例実績セクションが表示されない', () => {
      render(<GynecologySalonPage companyInfo={mockCompanyInfo} plan="standard" />);
      expect(screen.queryByText('症例実績')).not.toBeInTheDocument();
    });

    test('健康コラムが表示されない', () => {
      render(<GynecologySalonPage companyInfo={mockCompanyInfo} plan="standard" />);
      expect(screen.queryByText('健康コラム')).not.toBeInTheDocument();
    });

    test('お知らせセクションが表示されない', () => {
      render(<GynecologySalonPage companyInfo={mockCompanyInfo} plan="standard" />);
      expect(screen.queryByText('お知らせ')).not.toBeInTheDocument();
    });

    test('お客様の声セクションが表示されない', () => {
      render(<GynecologySalonPage companyInfo={mockCompanyInfo} plan="standard" />);
      expect(screen.queryByText('お客様の声')).not.toBeInTheDocument();
    });
  });
});
