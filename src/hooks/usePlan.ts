import { useMemo } from 'react';
import { Plan, PlanFeatures } from '@/types/plan';
import { getPlanFeatures, isPremiumPlan } from '@/lib/planUtils';

/**
 * usePlan フックの戻り値の型
 */
interface UsePlanReturn {
  /** プラン種別 */
  plan: Plan;
  /** プレミアムプランかどうか */
  isPremium: boolean;
  /** プランに応じた機能設定 */
  features: PlanFeatures;
}

/**
 * プラン情報を管理するカスタムフック
 * プランに応じた機能の有効/無効を提供
 *
 * @param plan - プラン種別（standard または premium）
 * @returns プラン情報と機能設定
 */
export const usePlan = (plan: Plan): UsePlanReturn => {
  // プレミアムプランかどうかを判定
  const isPremium = useMemo(() => isPremiumPlan(plan), [plan]);

  // プランに応じた機能設定を取得（メモ化して不要な再計算を防ぐ）
  const features = useMemo(() => getPlanFeatures(plan), [plan]);

  return {
    plan,
    isPremium,
    features,
  };
};
