import { Industry, Plan, INDUSTRIES, PLANS } from '@/types/plan';
import { IndustryPlanClient } from '@/components/IndustryPlanClient';
import { notFound } from 'next/navigation';

/**
 * 動的ルーティングページのプロパティ
 */
interface PageProps {
  params: Promise<{
    industry: Industry;
    plan: Plan;
  }>;
}

/**
 * 業種別・プラン別の動的ルーティングページ (Server Component)
 * [industry]/[plan] のパスでアクセス可能
 */
export default async function IndustryPlanPage({ params }: PageProps) {
  const { industry, plan } = await params;

  // パラメータのバリデーション
  const validIndustries = Object.values(INDUSTRIES);
  const validPlans = Object.values(PLANS);

  if (!validIndustries.includes(industry) || !validPlans.includes(plan)) {
    notFound();
  }

  // クライアントコンポーネントに渡す
  return <IndustryPlanClient industry={industry} plan={plan} />;
}

/**
 * 静的生成のためのパス一覧を生成
 */
export async function generateStaticParams() {
  const industries = Object.values(INDUSTRIES);
  const plans = Object.values(PLANS);

  const params: { industry: Industry; plan: Plan }[] = [];

  for (const industry of industries) {
    for (const plan of plans) {
      params.push({ industry, plan });
    }
  }

  return params;
}
