'use client';

import { useCompanyInfo } from '@/hooks/useCompanyInfo';
import { Industry, Plan, INDUSTRIES } from '@/types/plan';
import { RealEstatePage } from './RealEstatePage';
import { UsedCarPage } from './UsedCarPage';
import { BeautySalonPage } from './BeautySalonPage';
import { ScaffoldingPage } from './ScaffoldingPage';
import { TutorialSchoolPage } from './TutorialSchoolPage';
import { PetShopPage } from './PetShopPage';
import { notFound } from 'next/navigation';

/**
 * IndustryPlanClient コンポーネントのプロパティ
 */
interface IndustryPlanClientProps {
  /** 業種 */
  industry: Industry;
  /** プラン */
  plan: Plan;
}

/**
 * 業種別ページのクライアントコンポーネント
 * LocalStorageから会社情報を読み込み、業種に応じたページを表示
 */
export const IndustryPlanClient = ({ industry, plan }: IndustryPlanClientProps) => {
  const { companyInfo, isLoaded } = useCompanyInfo();

  // LocalStorageからの読み込み完了を待つ
  if (!isLoaded) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-xl text-gray-600">読み込み中...</div>
      </div>
    );
  }

  // 業種に応じたページコンポーネントを表示
  switch (industry) {
    case INDUSTRIES.REAL_ESTATE:
      return <RealEstatePage companyInfo={companyInfo} plan={plan} />;

    case INDUSTRIES.USED_CAR:
      return <UsedCarPage companyInfo={companyInfo} plan={plan} />;

    case INDUSTRIES.BEAUTY_SALON:
      return <BeautySalonPage companyInfo={companyInfo} plan={plan} />;

    case INDUSTRIES.SCAFFOLDING:
      return <ScaffoldingPage companyInfo={companyInfo} plan={plan} />;

    case INDUSTRIES.TUTORIAL_SCHOOL:
      return <TutorialSchoolPage companyInfo={companyInfo} plan={plan} />;

    case INDUSTRIES.PET_SHOP:
      return <PetShopPage companyInfo={companyInfo} plan={plan} />;

    default:
      notFound();
  }
};
