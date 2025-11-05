import { render, screen } from '@testing-library/react';
import { UsedCarPage } from '@/components/UsedCarPage';
import { DEFAULT_COMPANY_INFO } from '@/lib/defaultCompanyInfo';
import { PLANS } from '@/types/plan';

describe('UsedCarPage', () => {
  test('会社名が表示される', () => {
    render(
      <UsedCarPage
        companyInfo={DEFAULT_COMPANY_INFO}
        plan={PLANS.STANDARD}
      />
    );

    // Headerに会社名が表示される
    expect(screen.getAllByText('サンプル株式会社').length).toBeGreaterThan(0);
  });

  test('中古車業種の特徴的なコンテンツが表示される', () => {
    render(
      <UsedCarPage
        companyInfo={DEFAULT_COMPANY_INFO}
        plan={PLANS.STANDARD}
      />
    );

    // 中古車関連のキーワードが含まれることを確認
    const carElements = screen.getAllByText(/車/);
    expect(carElements.length).toBeGreaterThan(0);
  });

  test('Standardプランでは基本機能のみ表示される', () => {
    render(
      <UsedCarPage
        companyInfo={DEFAULT_COMPANY_INFO}
        plan={PLANS.STANDARD}
      />
    );

    // お問い合わせセクションが存在する
    const contactElements = screen.getAllByText(/お問い合わせ/);
    expect(contactElements.length).toBeGreaterThan(0);

    // プレミアム機能（ブログなど）は表示されない
    expect(screen.queryByText(/ブログ/)).not.toBeInTheDocument();
  });

  test('Premiumプランでは販売実績が表示される', () => {
    render(
      <UsedCarPage
        companyInfo={DEFAULT_COMPANY_INFO}
        plan={PLANS.PREMIUM}
      />
    );

    // 販売実績セクションが表示される
    const salesHistoryHeadings = screen.getAllByRole('heading', { name: /販売実績/ });
    expect(salesHistoryHeadings.length).toBeGreaterThan(0);
  });

  test('Premiumプランではお知らせが表示される', () => {
    render(
      <UsedCarPage
        companyInfo={DEFAULT_COMPANY_INFO}
        plan={PLANS.PREMIUM}
      />
    );

    // お知らせセクションが表示される
    const newsHeadings = screen.getAllByRole('heading', { name: /お知らせ/ });
    expect(newsHeadings.length).toBeGreaterThan(0);
  });

  test('BaseLayoutが使用されている', () => {
    render(
      <UsedCarPage
        companyInfo={DEFAULT_COMPANY_INFO}
        plan={PLANS.STANDARD}
      />
    );

    // Header（banner）とFooter（contentinfo）が存在する
    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });
});
