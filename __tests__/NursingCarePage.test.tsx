import { render, screen, fireEvent } from '@testing-library/react';
import { NursingCarePage } from '@/components/NursingCarePage';
import { defaultCompanyInfo } from '@/lib/defaultCompanyInfo';

/**
 * 介護ページコンポーネントのテスト
 * 信頼と安心感を重視したデザインの表示を確認
 * 複数ビュー対応（ホーム、会社概要、サービス、お問い合わせ）
 */
describe('NursingCarePage', () => {
  const mockCompanyInfo = {
    ...defaultCompanyInfo,
    companyName: 'やすらぎ介護サービス',
  };

  describe('Standard プラン', () => {
    test('会社名が表示される', () => {
      render(<NursingCarePage companyInfo={mockCompanyInfo} plan="standard" />);
      const headings = screen.getAllByText('やすらぎ介護サービス');
      expect(headings.length).toBeGreaterThan(0);
    });

    test('ヒーローセクションが表示される', () => {
      render(<NursingCarePage companyInfo={mockCompanyInfo} plan="standard" />);
      expect(screen.getByText('安心と信頼で、大切なご家族をお守りします')).toBeInTheDocument();
    });

    test('サービス紹介セクションが表示される', () => {
      render(<NursingCarePage companyInfo={mockCompanyInfo} plan="standard" />);
      const headings = screen.getAllByText('サービス案内');
      expect(headings.length).toBeGreaterThan(0);
    });

    test('選ばれる理由が表示される', () => {
      render(<NursingCarePage companyInfo={mockCompanyInfo} plan="standard" />);
      expect(screen.getByText('選ばれる理由')).toBeInTheDocument();
    });

    test('お問い合わせボタンが表示される', () => {
      render(<NursingCarePage companyInfo={mockCompanyInfo} plan="standard" />);
      const buttons = screen.getAllByText(/お問い合わせ|ご相談/);
      expect(buttons.length).toBeGreaterThan(0);
    });

    test('資格・認定情報が表示される', () => {
      render(<NursingCarePage companyInfo={mockCompanyInfo} plan="standard" />);
      const elements = screen.getAllByText(/資格|認定/);
      expect(elements.length).toBeGreaterThan(0);
    });

    test('ご利用の流れが表示される', () => {
      render(<NursingCarePage companyInfo={mockCompanyInfo} plan="standard" />);
      expect(screen.getByText('ご利用の流れ')).toBeInTheDocument();
    });
  });

  describe('Premium プラン', () => {
    test('スタッフ紹介セクションが表示される', () => {
      render(<NursingCarePage companyInfo={mockCompanyInfo} plan="premium" />);
      expect(screen.getByText('スタッフ紹介')).toBeInTheDocument();
    });

    test('施設紹介セクションが表示される', () => {
      render(<NursingCarePage companyInfo={mockCompanyInfo} plan="premium" />);
      expect(screen.getByText('施設紹介')).toBeInTheDocument();
    });

    test('ご利用者様の声が表示される', () => {
      render(<NursingCarePage companyInfo={mockCompanyInfo} plan="premium" />);
      expect(screen.getByText('ご利用者様の声')).toBeInTheDocument();
    });

    test('お知らせセクションが表示される', () => {
      render(<NursingCarePage companyInfo={mockCompanyInfo} plan="premium" />);
      const headings = screen.getAllByText('お知らせ');
      expect(headings.length).toBeGreaterThan(0);
    });
  });

  describe('Standard プランでPremium機能が表示されない', () => {
    test('スタッフ紹介セクションが表示されない', () => {
      render(<NursingCarePage companyInfo={mockCompanyInfo} plan="standard" />);
      expect(screen.queryByText('スタッフ紹介')).not.toBeInTheDocument();
    });

    test('施設紹介セクションが表示されない', () => {
      render(<NursingCarePage companyInfo={mockCompanyInfo} plan="standard" />);
      expect(screen.queryByText('施設紹介')).not.toBeInTheDocument();
    });

    test('ご利用者様の声が表示されない', () => {
      render(<NursingCarePage companyInfo={mockCompanyInfo} plan="standard" />);
      expect(screen.queryByText('ご利用者様の声')).not.toBeInTheDocument();
    });

    test('お知らせセクションが表示されない', () => {
      render(<NursingCarePage companyInfo={mockCompanyInfo} plan="standard" />);
      expect(screen.queryByText('お知らせ')).not.toBeInTheDocument();
    });
  });

  describe('複数ビュー対応', () => {
    test('IndustryNavbarが表示される', () => {
      render(<NursingCarePage companyInfo={mockCompanyInfo} plan="standard" />);
      // ナビゲーションリンクが表示される
      const homeLinks = screen.getAllByText('ホーム');
      const aboutLinks = screen.getAllByText('会社概要');
      const serviceLinks = screen.getAllByText('サービス');
      expect(homeLinks.length).toBeGreaterThan(0);
      expect(aboutLinks.length).toBeGreaterThan(0);
      expect(serviceLinks.length).toBeGreaterThan(0);
    });

    test('会社概要リンクをクリックすると会社概要ページが表示される', () => {
      render(<NursingCarePage companyInfo={mockCompanyInfo} plan="standard" />);
      // NavbarのAboutリンクをクリック（最初の会社概要リンク）
      const aboutLinks = screen.getAllByText('会社概要');
      fireEvent.click(aboutLinks[0]);
      // 会社概要ページ特有の内容が表示される
      expect(screen.getByText('代表挨拶')).toBeInTheDocument();
    });

    test('サービスリンクをクリックするとサービスページが表示される', () => {
      render(<NursingCarePage companyInfo={mockCompanyInfo} plan="standard" />);
      // Navbarのサービスリンクをクリック
      const serviceLinks = screen.getAllByText('サービス');
      fireEvent.click(serviceLinks[0]);
      // サービスページ特有の内容が表示される（複数あるのでAllByを使用）
      const serviceListHeadings = screen.getAllByText('サービス一覧');
      expect(serviceListHeadings.length).toBeGreaterThan(0);
    });

    test('お問い合わせボタンをクリックするとお問い合わせページが表示される', () => {
      render(<NursingCarePage companyInfo={mockCompanyInfo} plan="standard" />);
      // Navbarのお問い合わせボタンをクリック
      const contactButtons = screen.getAllByRole('button').filter(btn =>
        btn.textContent?.includes('お問い合わせ')
      );
      if (contactButtons.length > 0) {
        fireEvent.click(contactButtons[0]);
        // お問い合わせフォームが表示される
        expect(screen.getByText('お問い合わせフォーム')).toBeInTheDocument();
      }
    });

    test('会社概要ページからホームに戻れる', () => {
      render(<NursingCarePage companyInfo={mockCompanyInfo} plan="standard" />);
      // 会社概要に移動
      const aboutLinks = screen.getAllByText('会社概要');
      fireEvent.click(aboutLinks[0]);
      expect(screen.getByText('代表挨拶')).toBeInTheDocument();
      // ホームに戻る
      const homeLinks = screen.getAllByText('ホーム');
      fireEvent.click(homeLinks[0]);
      // ホームページの内容が表示される
      expect(screen.getByText('安心と信頼で、大切なご家族をお守りします')).toBeInTheDocument();
    });
  });
});
