import { render, screen } from '@testing-library/react';
import { TutorialSchoolPage } from '@/components/TutorialSchoolPage';
import { DEFAULT_COMPANY_INFO } from '@/lib/defaultCompanyInfo';
import { PLANS } from '@/types/plan';

describe('TutorialSchoolPage', () => {
  test('会社名が表示される', () => {
    render(
      <TutorialSchoolPage
        companyInfo={DEFAULT_COMPANY_INFO}
        plan={PLANS.STANDARD}
      />
    );

    // Headerに会社名が表示される
    expect(screen.getAllByText('サンプル株式会社').length).toBeGreaterThan(0);
  });

  test('学習塾業種の特徴的なコンテンツが表示される', () => {
    render(
      <TutorialSchoolPage
        companyInfo={DEFAULT_COMPANY_INFO}
        plan={PLANS.STANDARD}
      />
    );

    // 学習塾関連のキーワードが含まれることを確認
    const tutorialElements = screen.getAllByText(/学習|成績|合格/);
    expect(tutorialElements.length).toBeGreaterThan(0);
  });

  test('Standardプランでは基本機能のみ表示される', () => {
    render(
      <TutorialSchoolPage
        companyInfo={DEFAULT_COMPANY_INFO}
        plan={PLANS.STANDARD}
      />
    );

    // お問い合わせセクションが存在する（複数あるためgetAllByTextを使用）
    const contactElements = screen.getAllByText(/お問い合わせ/);
    expect(contactElements.length).toBeGreaterThan(0);

    // プレミアム機能（合格実績詳細・教室だよりなど）は表示されない
    expect(screen.queryByText(/合格実績一覧/)).not.toBeInTheDocument();
    expect(screen.queryByText(/教室だより/)).not.toBeInTheDocument();
  });

  test('Premiumプランでは合格実績が表示される', () => {
    render(
      <TutorialSchoolPage
        companyInfo={DEFAULT_COMPANY_INFO}
        plan={PLANS.PREMIUM}
      />
    );

    // プレミアム機能が表示される（見出しとして）
    const achievementHeadings = screen.getAllByRole('heading', { name: /合格実績/ });
    expect(achievementHeadings.length).toBeGreaterThan(0);
  });

  test('Premiumプランでは教室だよりが表示される', () => {
    render(
      <TutorialSchoolPage
        companyInfo={DEFAULT_COMPANY_INFO}
        plan={PLANS.PREMIUM}
      />
    );

    // 教室だよりセクションが表示される（見出しとして）
    const blogHeadings = screen.getAllByRole('heading', { name: /教室だより/ });
    expect(blogHeadings.length).toBeGreaterThan(0);
  });

  test('Premiumプランではお知らせが表示される', () => {
    render(
      <TutorialSchoolPage
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
      <TutorialSchoolPage
        companyInfo={DEFAULT_COMPANY_INFO}
        plan={PLANS.STANDARD}
      />
    );

    // Header（banner）とFooter（contentinfo）が存在する
    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });
});
