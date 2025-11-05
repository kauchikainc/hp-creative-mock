import { isPremiumPlan, getPlanFeatures } from '@/lib/planUtils';
import { PLANS } from '@/types/plan';

describe('planUtils', () => {
  describe('isPremiumPlan', () => {
    test('Premium プランの場合 true を返す', () => {
      expect(isPremiumPlan(PLANS.PREMIUM)).toBe(true);
    });

    test('Standard プランの場合 false を返す', () => {
      expect(isPremiumPlan(PLANS.STANDARD)).toBe(false);
    });
  });

  describe('getPlanFeatures', () => {
    test('Standard プランで基本機能のみ有効', () => {
      const features = getPlanFeatures(PLANS.STANDARD);

      expect(features.hasContactForm).toBe(true);
      expect(features.hasCMS).toBe(false);
      expect(features.hasBlog).toBe(false);
      expect(features.hasNews).toBe(false);
      expect(features.hasInventoryManagement).toBe(false);
    });

    test('Premium プランで全機能が有効', () => {
      const features = getPlanFeatures(PLANS.PREMIUM);

      expect(features.hasContactForm).toBe(true);
      expect(features.hasCMS).toBe(true);
      expect(features.hasBlog).toBe(true);
      expect(features.hasNews).toBe(true);
      expect(features.hasInventoryManagement).toBe(true);
      expect(features.hasSalesHistory).toBe(true);
    });
  });
});
