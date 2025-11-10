import { render, screen } from '@testing-library/react';
import { CafePage } from '@/components/CafePage';
import { DEFAULT_COMPANY_INFO } from '@/lib/defaultCompanyInfo';
import { PLANS } from '@/types/plan';

describe('CafePage', () => {
  test('会社名が表示される', () => {
    render(
      <CafePage
        companyInfo={DEFAULT_COMPANY_INFO}
        plan={PLANS.STANDARD}
      />
    );

    // Headerに会社名が表示される
    expect(screen.getAllByText('サンプル株式会社').length).toBeGreaterThan(0);
  });

  test('カフェ業種の特徴的なコンテンツが表示される', () => {
    render(
      <CafePage
        companyInfo={DEFAULT_COMPANY_INFO}
        plan={PLANS.STANDARD}
      />
    );

    // カフェ関連のキーワードが含まれることを確認
    const cafeElements = screen.getAllByText(/コーヒー|カフェ|ドリンク/);
    expect(cafeElements.length).toBeGreaterThan(0);
  });

  test('Standardプランでは基本機能のみ表示される', () => {
    render(
      <CafePage
        companyInfo={DEFAULT_COMPANY_INFO}
        plan={PLANS.STANDARD}
      />
    );

    // お問い合わせセクションが存在する（複数あるためgetAllByTextを使用）
    const contactElements = screen.getAllByText(/お問い合わせ|ご来店/);
    expect(contactElements.length).toBeGreaterThan(0);

    // プレミアム機能（本日のおすすめ・イベント情報など）は表示されない
    expect(screen.queryByText(/本日のおすすめ/)).not.toBeInTheDocument();
    expect(screen.queryByText(/今月のイベント/)).not.toBeInTheDocument();
  });

  test('Premiumプランでは本日のおすすめメニューが表示される', () => {
    render(
      <CafePage
        companyInfo={DEFAULT_COMPANY_INFO}
        plan={PLANS.PREMIUM}
      />
    );

    // プレミアム機能が表示される（見出しとして）
    const recommendHeadings = screen.getAllByRole('heading', { name: /おすすめ/ });
    expect(recommendHeadings.length).toBeGreaterThan(0);
  });

  test('Premiumプランではイベント情報が表示される', () => {
    render(
      <CafePage
        companyInfo={DEFAULT_COMPANY_INFO}
        plan={PLANS.PREMIUM}
      />
    );

    // イベント情報セクションが表示される（見出しとして）
    const eventHeadings = screen.getAllByRole('heading', { name: /Events/ });
    expect(eventHeadings.length).toBeGreaterThan(0);
  });

  test('Premiumプランではお知らせが表示される', () => {
    render(
      <CafePage
        companyInfo={DEFAULT_COMPANY_INFO}
        plan={PLANS.PREMIUM}
      />
    );

    // お知らせセクションが表示される（見出しとして）
    const newsHeadings = screen.getAllByRole('heading', { name: /お知らせ|News/ });
    expect(newsHeadings.length).toBeGreaterThan(0);
  });

  test('BaseLayoutが使用されている', () => {
    render(
      <CafePage
        companyInfo={DEFAULT_COMPANY_INFO}
        plan={PLANS.STANDARD}
      />
    );

    // Header（banner）とFooter（contentinfo）が存在する
    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });
});
