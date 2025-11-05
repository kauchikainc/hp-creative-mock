'use client';

import { ReactNode } from 'react';
import { Plan } from '@/types/plan';
import { isPremiumPlan } from '@/lib/planUtils';

/**
 * PremiumFeatures コンポーネントのプロパティ
 */
interface PremiumFeaturesProps {
  /** プラン種別 */
  plan: Plan;
  /** 子要素（プレミアム限定コンテンツ） */
  children: ReactNode;
}

/**
 * プレミアム限定機能表示コンポーネント
 * プレミアムプランの場合のみ子要素を表示
 */
export const PremiumFeatures = ({ plan, children }: PremiumFeaturesProps) => {
  // プレミアムプランでない場合は何も表示しない
  if (!isPremiumPlan(plan)) {
    return null;
  }

  return <>{children}</>;
};
