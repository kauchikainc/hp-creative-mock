import { render, screen } from '@testing-library/react';
import { RyokanPage } from '@/components/RyokanPage';
import { DEFAULT_COMPANY_INFO } from '@/lib/defaultCompanyInfo';
import { PLANS } from '@/types/plan';

describe('RyokanPage', () => {
  test('会社名が表示される', () => {
    render(
      <RyokanPage
        companyInfo={DEFAULT_COMPANY_INFO}
        plan={PLANS.STANDARD}
      />
    );

    // Headerに会社名が表示される
    expect(screen.getAllByText('サンプル株式会社').length).toBeGreaterThan(0);
  });

  test('旅館業種の特徴的なコンテンツが表示される', () => {
    render(
      <RyokanPage
        companyInfo={DEFAULT_COMPANY_INFO}
        plan={PLANS.STANDARD}
      />
    );

    // 旅館関連のキーワードが含まれることを確認
    const ryokanElements = screen.getAllByText(/温泉|客室|おもてなし/);
    expect(ryokanElements.length).toBeGreaterThan(0);
  });

  test('Standardプランでは基本機能のみ表示される', () => {
    render(
      <RyokanPage
        companyInfo={DEFAULT_COMPANY_INFO}
        plan={PLANS.STANDARD}
      />
    );

    // お問い合わせセクションが存在する（複数あるためgetAllByTextを使用）
    const contactElements = screen.getAllByText(/お問い合わせ/);
    expect(contactElements.length).toBeGreaterThan(0);

    // プレミアム機能（宿泊プラン一覧・お知らせなど）は表示されない
    expect(screen.queryByText(/宿泊プラン一覧/)).not.toBeInTheDocument();
    expect(screen.queryByText(/季節のお便り/)).not.toBeInTheDocument();
  });

  test('Premiumプランでは宿泊プラン一覧が表示される', () => {
    render(
      <RyokanPage
        companyInfo={DEFAULT_COMPANY_INFO}
        plan={PLANS.PREMIUM}
      />
    );

    // プレミアム機能が表示される（見出しとして）
    const planHeadings = screen.getAllByRole('heading', { name: /宿泊プラン/ });
    expect(planHeadings.length).toBeGreaterThan(0);
  });

  test('Premiumプランでは季節のお便りが表示される', () => {
    render(
      <RyokanPage
        companyInfo={DEFAULT_COMPANY_INFO}
        plan={PLANS.PREMIUM}
      />
    );

    // 季節のお便りセクションが表示される（見出しとして）
    const blogHeadings = screen.getAllByRole('heading', { name: /季節のお便り/ });
    expect(blogHeadings.length).toBeGreaterThan(0);
  });

  test('Premiumプランではお知らせが表示される', () => {
    render(
      <RyokanPage
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
      <RyokanPage
        companyInfo={DEFAULT_COMPANY_INFO}
        plan={PLANS.STANDARD}
      />
    );

    // Header（banner）とFooter（contentinfo）が存在する
    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });
});
