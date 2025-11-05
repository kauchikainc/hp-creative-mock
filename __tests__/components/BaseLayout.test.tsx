import { render, screen } from '@testing-library/react';
import { BaseLayout } from '@/components/BaseLayout';
import { DEFAULT_COMPANY_INFO } from '@/lib/defaultCompanyInfo';

describe('BaseLayout', () => {
  test('HeaderとFooterが表示される', () => {
    render(
      <BaseLayout companyInfo={DEFAULT_COMPANY_INFO}>
        <div>テストコンテンツ</div>
      </BaseLayout>
    );

    // Headerが存在する（bannerロール）
    expect(screen.getByRole('banner')).toBeInTheDocument();

    // Footerが存在する（contentinfoロール）
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();

    // 子要素が表示される
    expect(screen.getByText('テストコンテンツ')).toBeInTheDocument();
  });

  test('会社名がHeaderに正しく渡される', () => {
    const customInfo = {
      ...DEFAULT_COMPANY_INFO,
      companyName: 'テストレイアウト株式会社',
    };

    render(
      <BaseLayout companyInfo={customInfo}>
        <div>コンテンツ</div>
      </BaseLayout>
    );

    // 会社名はHeaderとFooterの両方に表示されるため、複数存在する
    const companyNames = screen.getAllByText('テストレイアウト株式会社');
    expect(companyNames.length).toBeGreaterThan(0);
  });

  test('会社情報がFooterに正しく渡される', () => {
    const customInfo = {
      ...DEFAULT_COMPANY_INFO,
      representativeName: '鈴木 次郎',
    };

    render(
      <BaseLayout companyInfo={customInfo}>
        <div>コンテンツ</div>
      </BaseLayout>
    );

    expect(screen.getByText(/鈴木 次郎/)).toBeInTheDocument();
  });

  test('複数の子要素を含むことができる', () => {
    render(
      <BaseLayout companyInfo={DEFAULT_COMPANY_INFO}>
        <div>コンテンツ1</div>
        <div>コンテンツ2</div>
        <div>コンテンツ3</div>
      </BaseLayout>
    );

    expect(screen.getByText('コンテンツ1')).toBeInTheDocument();
    expect(screen.getByText('コンテンツ2')).toBeInTheDocument();
    expect(screen.getByText('コンテンツ3')).toBeInTheDocument();
  });

  test('mainロールを持つ要素が存在する', () => {
    render(
      <BaseLayout companyInfo={DEFAULT_COMPANY_INFO}>
        <div>メインコンテンツ</div>
      </BaseLayout>
    );

    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
