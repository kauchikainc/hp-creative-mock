import { renderHook } from '@testing-library/react';
import { usePlan } from '@/hooks/usePlan';
import { PLANS } from '@/types/plan';

describe('usePlan', () => {
  test('Standard プランで正しい機能設定を返す', () => {
    const { result } = renderHook(() => usePlan(PLANS.STANDARD));

    expect(result.current.plan).toBe(PLANS.STANDARD);
    expect(result.current.isPremium).toBe(false);
    expect(result.current.features.hasContactForm).toBe(true);
    expect(result.current.features.hasCMS).toBe(false);
    expect(result.current.features.hasBlog).toBe(false);
  });

  test('Premium プランで正しい機能設定を返す', () => {
    const { result } = renderHook(() => usePlan(PLANS.PREMIUM));

    expect(result.current.plan).toBe(PLANS.PREMIUM);
    expect(result.current.isPremium).toBe(true);
    expect(result.current.features.hasContactForm).toBe(true);
    expect(result.current.features.hasCMS).toBe(true);
    expect(result.current.features.hasBlog).toBe(true);
    expect(result.current.features.hasNews).toBe(true);
    expect(result.current.features.hasInventoryManagement).toBe(true);
  });

  test('プランが変更されても正しく動作する', () => {
    const { result, rerender } = renderHook(
      ({ plan }) => usePlan(plan),
      { initialProps: { plan: PLANS.STANDARD } }
    );

    expect(result.current.isPremium).toBe(false);

    // Premiumに変更
    rerender({ plan: PLANS.PREMIUM });

    expect(result.current.isPremium).toBe(true);
    expect(result.current.features.hasCMS).toBe(true);
  });
});
