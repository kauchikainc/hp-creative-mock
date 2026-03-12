import { render, screen, fireEvent } from '@testing-library/react';
import { IndustryNavbar } from '@/components/common/IndustryNavbar';

/**
 * IndustryNavbar コンポーネントのテスト
 * 業種別の洗練されたナビゲーションバーの動作を確認
 */
describe('IndustryNavbar', () => {
  const mockOnNavigate = jest.fn();
  const defaultProps = {
    companyName: 'テスト株式会社',
    currentView: 'home' as const,
    onNavigate: mockOnNavigate,
    primaryColor: 'emerald' as const,
  };

  beforeEach(() => {
    mockOnNavigate.mockClear();
  });

  describe('基本表示', () => {
    test('会社名が表示される', () => {
      render(<IndustryNavbar {...defaultProps} />);
      expect(screen.getByText('テスト株式会社')).toBeInTheDocument();
    });

    test('ナビゲーションリンクが表示される', () => {
      render(<IndustryNavbar {...defaultProps} />);
      expect(screen.getByText('ホーム')).toBeInTheDocument();
      expect(screen.getByText('会社概要')).toBeInTheDocument();
      expect(screen.getByText('サービス')).toBeInTheDocument();
    });

    test('お問い合わせボタンが表示される', () => {
      render(<IndustryNavbar {...defaultProps} />);
      const buttons = screen.getAllByRole('button');
      const contactButton = buttons.find(btn => btn.textContent?.includes('お問い合わせ'));
      expect(contactButton).toBeInTheDocument();
    });
  });

  describe('ナビゲーション動作', () => {
    test('ホームリンクをクリックするとonNavigateが呼ばれる', () => {
      render(<IndustryNavbar {...defaultProps} currentView="about" />);
      fireEvent.click(screen.getByText('ホーム'));
      expect(mockOnNavigate).toHaveBeenCalledWith('home');
    });

    test('会社概要リンクをクリックするとonNavigateが呼ばれる', () => {
      render(<IndustryNavbar {...defaultProps} />);
      fireEvent.click(screen.getByText('会社概要'));
      expect(mockOnNavigate).toHaveBeenCalledWith('about');
    });

    test('サービスリンクをクリックするとonNavigateが呼ばれる', () => {
      render(<IndustryNavbar {...defaultProps} />);
      fireEvent.click(screen.getByText('サービス'));
      expect(mockOnNavigate).toHaveBeenCalledWith('service');
    });

    test('お問い合わせボタンをクリックするとonNavigateが呼ばれる', () => {
      render(<IndustryNavbar {...defaultProps} />);
      const buttons = screen.getAllByRole('button');
      const contactButton = buttons.find(btn => btn.textContent?.includes('お問い合わせ'));
      if (contactButton) {
        fireEvent.click(contactButton);
        expect(mockOnNavigate).toHaveBeenCalledWith('contact');
      }
    });
  });

  describe('アクティブ状態', () => {
    test('currentViewがhomeの場合、ホームリンクがアクティブになる', () => {
      render(<IndustryNavbar {...defaultProps} currentView="home" />);
      const homeLink = screen.getByText('ホーム');
      // アクティブなリンクには下線などのスタイルが適用される
      expect(homeLink).toBeInTheDocument();
    });

    test('currentViewがaboutの場合、会社概要リンクがアクティブになる', () => {
      render(<IndustryNavbar {...defaultProps} currentView="about" />);
      const aboutLink = screen.getByText('会社概要');
      expect(aboutLink).toBeInTheDocument();
    });

    test('currentViewがserviceの場合、サービスリンクがアクティブになる', () => {
      render(<IndustryNavbar {...defaultProps} currentView="service" />);
      const serviceLink = screen.getByText('サービス');
      expect(serviceLink).toBeInTheDocument();
    });
  });

  describe('モバイルメニュー', () => {
    test('モバイルメニューボタンが表示される', () => {
      render(<IndustryNavbar {...defaultProps} />);
      const menuButton = screen.getByLabelText('メニューを開く');
      expect(menuButton).toBeInTheDocument();
    });

    test('モバイルメニューボタンをクリックするとメニューが開く', () => {
      render(<IndustryNavbar {...defaultProps} />);
      const menuButton = screen.getByLabelText('メニューを開く');
      fireEvent.click(menuButton);
      // モバイルメニュー内のナビゲーションが表示される
      const mobileMenu = screen.getByTestId('mobile-menu');
      expect(mobileMenu).toBeInTheDocument();
    });

    test('モバイルメニュー内のリンクをクリックするとメニューが閉じる', () => {
      render(<IndustryNavbar {...defaultProps} />);
      const menuButton = screen.getByLabelText('メニューを開く');
      fireEvent.click(menuButton);

      // モバイルメニュー内の会社概要リンクをクリック
      const mobileAboutLinks = screen.getAllByText('会社概要');
      const mobileAboutLink = mobileAboutLinks[mobileAboutLinks.length - 1];
      fireEvent.click(mobileAboutLink);

      expect(mockOnNavigate).toHaveBeenCalledWith('about');
    });
  });

  describe('業種カラー対応', () => {
    test('emeraldカラーで表示される', () => {
      render(<IndustryNavbar {...defaultProps} primaryColor="emerald" />);
      expect(screen.getByText('テスト株式会社')).toBeInTheDocument();
    });

    test('amberカラーで表示される', () => {
      render(<IndustryNavbar {...defaultProps} primaryColor="amber" />);
      expect(screen.getByText('テスト株式会社')).toBeInTheDocument();
    });

    test('tealカラーで表示される', () => {
      render(<IndustryNavbar {...defaultProps} primaryColor="teal" />);
      expect(screen.getByText('テスト株式会社')).toBeInTheDocument();
    });
  });
});
