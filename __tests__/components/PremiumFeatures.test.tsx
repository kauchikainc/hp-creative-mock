import { render, screen } from '@testing-library/react';
import { PremiumFeatures } from '@/components/PremiumFeatures';
import { PLANS } from '@/types/plan';

describe('PremiumFeatures', () => {
  test('Standardプランでは何も表示されない', () => {
    const { container } = render(
      <PremiumFeatures plan={PLANS.STANDARD}>
        <div>プレミアム限定コンテンツ</div>
      </PremiumFeatures>
    );

    // 子要素が表示されない
    expect(screen.queryByText('プレミアム限定コンテンツ')).not.toBeInTheDocument();
  });

  test('Premiumプランで子要素が表示される', () => {
    render(
      <PremiumFeatures plan={PLANS.PREMIUM}>
        <div>プレミアム限定コンテンツ</div>
      </PremiumFeatures>
    );

    // 子要素が表示される
    expect(screen.getByText('プレミアム限定コンテンツ')).toBeInTheDocument();
  });

  test('Premiumプランで複数の子要素が表示される', () => {
    render(
      <PremiumFeatures plan={PLANS.PREMIUM}>
        <div>コンテンツ1</div>
        <div>コンテンツ2</div>
        <div>コンテンツ3</div>
      </PremiumFeatures>
    );

    expect(screen.getByText('コンテンツ1')).toBeInTheDocument();
    expect(screen.getByText('コンテンツ2')).toBeInTheDocument();
    expect(screen.getByText('コンテンツ3')).toBeInTheDocument();
  });

  test('子要素がnullの場合でもエラーにならない', () => {
    const { container } = render(
      <PremiumFeatures plan={PLANS.PREMIUM}>
        {null}
      </PremiumFeatures>
    );

    // エラーが発生しないことを確認
    expect(container).toBeInTheDocument();
  });

  test('Standardプランで複数の子要素があっても表示されない', () => {
    render(
      <PremiumFeatures plan={PLANS.STANDARD}>
        <div>非表示コンテンツ1</div>
        <div>非表示コンテンツ2</div>
      </PremiumFeatures>
    );

    expect(screen.queryByText('非表示コンテンツ1')).not.toBeInTheDocument();
    expect(screen.queryByText('非表示コンテンツ2')).not.toBeInTheDocument();
  });
});
