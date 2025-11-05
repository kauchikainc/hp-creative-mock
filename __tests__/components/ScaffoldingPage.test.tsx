import { render, screen } from '@testing-library/react';
import { ScaffoldingPage } from '@/components/ScaffoldingPage';
import { DEFAULT_COMPANY_INFO } from '@/lib/defaultCompanyInfo';
import { PLANS } from '@/types/plan';

describe('ScaffoldingPage', () => {
  test('会社名が表示される', () => {
    render(
      <ScaffoldingPage
        companyInfo={DEFAULT_COMPANY_INFO}
        plan={PLANS.STANDARD}
      />
    );

    // Headerに会社名が表示される
    expect(screen.getAllByText('サンプル株式会社').length).toBeGreaterThan(0);
  });

  test('足場・鳶職業種の特徴的なコンテンツが表示される', () => {
    render(
      <ScaffoldingPage
        companyInfo={DEFAULT_COMPANY_INFO}
        plan={PLANS.STANDARD}
      />
    );

    // 足場・鳶職関連のキーワードが含まれることを確認
    const scaffoldingElements = screen.getAllByText(/足場|安全/);
    expect(scaffoldingElements.length).toBeGreaterThan(0);
  });

  test('Standardプランでは基本機能のみ表示される', () => {
    render(
      <ScaffoldingPage
        companyInfo={DEFAULT_COMPANY_INFO}
        plan={PLANS.STANDARD}
      />
    );

    // お問い合わせセクションが存在する（複数あるためgetAllByTextを使用）
    const contactElements = screen.getAllByText(/お問い合わせ/);
    expect(contactElements.length).toBeGreaterThan(0);

    // プレミアム機能（施工実績・現場レポートなど）は表示されない
    expect(screen.queryByText(/施工実績一覧/)).not.toBeInTheDocument();
    expect(screen.queryByText(/現場レポート/)).not.toBeInTheDocument();
  });

  test('Premiumプランでは施工実績が表示される', () => {
    render(
      <ScaffoldingPage
        companyInfo={DEFAULT_COMPANY_INFO}
        plan={PLANS.PREMIUM}
      />
    );

    // プレミアム機能が表示される（見出しとして）
    const projectHeadings = screen.getAllByRole('heading', { name: /施工実績/ });
    expect(projectHeadings.length).toBeGreaterThan(0);
  });

  test('Premiumプランでは現場レポートが表示される', () => {
    render(
      <ScaffoldingPage
        companyInfo={DEFAULT_COMPANY_INFO}
        plan={PLANS.PREMIUM}
      />
    );

    // 現場レポートセクションが表示される（見出しとして）
    const blogHeadings = screen.getAllByRole('heading', { name: /現場レポート/ });
    expect(blogHeadings.length).toBeGreaterThan(0);
  });

  test('Premiumプランではお知らせが表示される', () => {
    render(
      <ScaffoldingPage
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
      <ScaffoldingPage
        companyInfo={DEFAULT_COMPANY_INFO}
        plan={PLANS.STANDARD}
      />
    );

    // Header（banner）とFooter（contentinfo）が存在する
    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });
});
