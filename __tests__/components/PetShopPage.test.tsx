import { render, screen } from '@testing-library/react';
import { PetShopPage } from '@/components/PetShopPage';
import { DEFAULT_COMPANY_INFO } from '@/lib/defaultCompanyInfo';
import { PLANS } from '@/types/plan';

describe('PetShopPage', () => {
  test('会社名が表示される', () => {
    render(
      <PetShopPage
        companyInfo={DEFAULT_COMPANY_INFO}
        plan={PLANS.STANDARD}
      />
    );

    // Headerに会社名が表示される
    expect(screen.getAllByText('サンプル株式会社').length).toBeGreaterThan(0);
  });

  test('ペットショップ業種の特徴的なコンテンツが表示される', () => {
    render(
      <PetShopPage
        companyInfo={DEFAULT_COMPANY_INFO}
        plan={PLANS.STANDARD}
      />
    );

    // ペットショップ関連のキーワードが含まれることを確認
    const petElements = screen.getAllByText(/ペット|家族/);
    expect(petElements.length).toBeGreaterThan(0);
  });

  test('Standardプランでは基本機能のみ表示される', () => {
    render(
      <PetShopPage
        companyInfo={DEFAULT_COMPANY_INFO}
        plan={PLANS.STANDARD}
      />
    );

    // お問い合わせセクションが存在する（複数あるためgetAllByTextを使用）
    const contactElements = screen.getAllByText(/お問い合わせ/);
    expect(contactElements.length).toBeGreaterThan(0);

    // プレミアム機能（ペット一覧・スタッフ日記など）は表示されない
    expect(screen.queryByText(/ペット一覧/)).not.toBeInTheDocument();
    expect(screen.queryByText(/スタッフ日記/)).not.toBeInTheDocument();
  });

  test('Premiumプランではペット一覧が表示される', () => {
    render(
      <PetShopPage
        companyInfo={DEFAULT_COMPANY_INFO}
        plan={PLANS.PREMIUM}
      />
    );

    // プレミアム機能が表示される（見出しとして）
    const petListHeadings = screen.getAllByRole('heading', { name: /新着ペット/ });
    expect(petListHeadings.length).toBeGreaterThan(0);
  });

  test('Premiumプランではスタッフ日記が表示される', () => {
    render(
      <PetShopPage
        companyInfo={DEFAULT_COMPANY_INFO}
        plan={PLANS.PREMIUM}
      />
    );

    // スタッフ日記セクションが表示される（見出しとして）
    const blogHeadings = screen.getAllByRole('heading', { name: /スタッフ日記/ });
    expect(blogHeadings.length).toBeGreaterThan(0);
  });

  test('Premiumプランではお知らせが表示される', () => {
    render(
      <PetShopPage
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
      <PetShopPage
        companyInfo={DEFAULT_COMPANY_INFO}
        plan={PLANS.STANDARD}
      />
    );

    // Header（banner）とFooter（contentinfo）が存在する
    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });
});
