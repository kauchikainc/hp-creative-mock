import { render, screen } from '@testing-library/react';
import { BeautySalonPage } from '@/components/BeautySalonPage';
import { DEFAULT_COMPANY_INFO } from '@/lib/defaultCompanyInfo';
import { PLANS } from '@/types/plan';

describe('BeautySalonPage', () => {
  test('会社名が表示される', () => {
    render(
      <BeautySalonPage
        companyInfo={DEFAULT_COMPANY_INFO}
        plan={PLANS.STANDARD}
      />
    );

    // Headerに会社名が表示される
    expect(screen.getAllByText('サンプル株式会社').length).toBeGreaterThan(0);
  });

  test('美容室業種の特徴的なコンテンツが表示される', () => {
    render(
      <BeautySalonPage
        companyInfo={DEFAULT_COMPANY_INFO}
        plan={PLANS.STANDARD}
      />
    );

    // 美容室関連のキーワードが含まれることを確認
    const elements = screen.getAllByText(/メニュー|スタイル|カット|カラー/);
    expect(elements.length).toBeGreaterThan(0);
  });

  test('Standardプランでは基本機能のみ表示される', () => {
    render(
      <BeautySalonPage
        companyInfo={DEFAULT_COMPANY_INFO}
        plan={PLANS.STANDARD}
      />
    );

    // メニューセクションが存在する
    const menuElements = screen.getAllByText(/メニュー/);
    expect(menuElements.length).toBeGreaterThan(0);

    // プレミアム機能（スタイリスト見出し）は表示されない
    expect(screen.queryByRole('heading', { name: /スタイリスト/ })).not.toBeInTheDocument();
  });

  test('Premiumプランではスタイリストが表示される', () => {
    render(
      <BeautySalonPage
        companyInfo={DEFAULT_COMPANY_INFO}
        plan={PLANS.PREMIUM}
      />
    );

    // プレミアム機能が表示される（見出しとして）
    const stylistHeadings = screen.getAllByRole('heading', { name: /スタイリスト/ });
    expect(stylistHeadings.length).toBeGreaterThan(0);
  });

  test('Premiumプランではヘアギャラリーが表示される', () => {
    render(
      <BeautySalonPage
        companyInfo={DEFAULT_COMPANY_INFO}
        plan={PLANS.PREMIUM}
      />
    );

    // ヘアギャラリーセクションが表示される（見出しとして）
    const galleryHeadings = screen.getAllByRole('heading', { name: /ヘアギャラリー/ });
    expect(galleryHeadings.length).toBeGreaterThan(0);
  });

  test('Premiumプランではお客様の声が表示される', () => {
    render(
      <BeautySalonPage
        companyInfo={DEFAULT_COMPANY_INFO}
        plan={PLANS.PREMIUM}
      />
    );

    // お客様の声セクションが表示される（見出しとして）
    const reviewHeadings = screen.getAllByRole('heading', { name: /お客様の声/ });
    expect(reviewHeadings.length).toBeGreaterThan(0);
  });

  test('Premiumプランではブログが表示される', () => {
    render(
      <BeautySalonPage
        companyInfo={DEFAULT_COMPANY_INFO}
        plan={PLANS.PREMIUM}
      />
    );

    // プレミアム機能が表示される（見出しとして）
    const blogHeadings = screen.getAllByRole('heading', { name: /ビューティーコラム/ });
    expect(blogHeadings.length).toBeGreaterThan(0);
  });

  test('Premiumプランではお知らせが表示される', () => {
    render(
      <BeautySalonPage
        companyInfo={DEFAULT_COMPANY_INFO}
        plan={PLANS.PREMIUM}
      />
    );

    // お知らせセクションが表示される（見出しとして）
    const newsHeadings = screen.getAllByRole('heading', { name: /お知らせ/ });
    expect(newsHeadings.length).toBeGreaterThan(0);
  });

  test('BaseLayoutが使用されている', () => {
    render(
      <BeautySalonPage
        companyInfo={DEFAULT_COMPANY_INFO}
        plan={PLANS.STANDARD}
      />
    );

    // Header（banner）とFooter（contentinfo）が存在する
    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });
});
