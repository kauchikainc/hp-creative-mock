import { Plan, PLANS, PlanFeatures } from '@/types/plan';

/**
 * Premium プランかどうかを判定
 * @param plan - 判定対象のプラン
 * @returns Premium プランの場合 true
 */
export const isPremiumPlan = (plan: Plan): boolean => {
  return plan === PLANS.PREMIUM;
};

/**
 * プラン別の機能設定を取得
 * @param plan - 対象プラン
 * @returns プラン別の機能設定オブジェクト
 */
export const getPlanFeatures = (plan: Plan): PlanFeatures => {
  // Standard プランの基本機能
  const baseFeatures: PlanFeatures = {
    hasContactForm: true,
    hasCMS: false,
    hasBlog: false,
    hasNews: false,
    hasInventoryManagement: false,
  };

  // Premium プランの場合、CMS機能を追加
  if (isPremiumPlan(plan)) {
    return {
      ...baseFeatures,
      hasCMS: true,
      hasBlog: true,
      hasNews: true,
      hasInventoryManagement: true,
      hasSalesHistory: true,
    };
  }

  return baseFeatures;
};
