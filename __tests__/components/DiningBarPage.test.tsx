import { render, screen } from '@testing-library/react';
import { DiningBarPage } from '@/components/DiningBarPage';
import { DEFAULT_COMPANY_INFO } from '@/lib/defaultCompanyInfo';
import { PLANS } from '@/types/plan';

describe('DiningBarPage', () => {
  test('会社名が表示される', () => {
    render(
      <DiningBarPage
        companyInfo={DEFAULT_COMPANY_INFO}
        plan={PLANS.STANDARD}
      />
    );

    // Headerに会社名が表示される
    expect(screen.getAllByText('サンプル株式会社').length).toBeGreaterThan(0);
  });

  test('ダイニングバー業種の特徴的なコンテンツが表示される', () => {
    render(
      <DiningBarPage
        companyInfo={DEFAULT_COMPANY_INFO}
        plan={PLANS.STANDARD}
      />
    );

    // ダイニングバー関連のキーワードが含まれることを確認
    const barElements = screen.getAllByText(/料理|カクテル|バー/);
    expect(barElements.length).toBeGreaterThan(0);
  });

  test('Standardプランでは基本機能のみ表示される', () => {
    render(
      <DiningBarPage
        companyInfo={DEFAULT_COMPANY_INFO}
        plan={PLANS.STANDARD}
      />
    );

    // お問い合わせセクションが存在する（複数あるためgetAllByTextを使用）
    const contactElements = screen.getAllByText(/お問い合わせ|予約/);
    expect(contactElements.length).toBeGreaterThan(0);

    // プレミアム機能（コースメニュー詳細・イベント情報など）は表示されない
    expect(screen.queryByText(/本日のおすすめ/)).not.toBeInTheDocument();
    expect(screen.queryByText(/今月のイベント/)).not.toBeInTheDocument();
  });

  test('Premiumプランではコースメニューが表示される', () => {
    render(
      <DiningBarPage
        companyInfo={DEFAULT_COMPANY_INFO}
        plan={PLANS.PREMIUM}
      />
    );

    // プレミアム機能が表示される（見出しとして）
    const courseHeadings = screen.getAllByRole('heading', { name: /コース/ });
    expect(courseHeadings.length).toBeGreaterThan(0);
  });

  test('Premiumプランではイベント情報が表示される', () => {
    render(
      <DiningBarPage
        companyInfo={DEFAULT_COMPANY_INFO}
        plan={PLANS.PREMIUM}
      />
    );

    // イベント情報セクションが表示される（見出しとして）
    const eventHeadings = screen.getAllByRole('heading', { name: /イベント/ });
    expect(eventHeadings.length).toBeGreaterThan(0);
  });

  test('Premiumプランではお知らせが表示される', () => {
    render(
      <DiningBarPage
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
      <DiningBarPage
        companyInfo={DEFAULT_COMPANY_INFO}
        plan={PLANS.STANDARD}
      />
    );

    // Header（banner）とFooter（contentinfo）が存在する
    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });
});
