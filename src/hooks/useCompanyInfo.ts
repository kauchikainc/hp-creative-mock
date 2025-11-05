import { useState, useEffect, useCallback } from 'react';
import { CompanyInfo } from '@/types';
import { DEFAULT_COMPANY_INFO } from '@/lib/defaultCompanyInfo';

/**
 * useCompanyInfo フックの戻り値の型
 */
interface UseCompanyInfoReturn {
  /** 会社情報 */
  companyInfo: CompanyInfo;
  /** 会社情報を更新する関数 */
  updateCompanyInfo: (info: Partial<CompanyInfo>) => void;
  /** デフォルト値にリセットする関数 */
  resetToDefault: () => void;
  /** LocalStorageからの読み込みが完了したかどうか */
  isLoaded: boolean;
}

/**
 * 会社情報を管理するカスタムフック
 * LocalStorageと連携して、ページリロード時も情報を保持
 */
export const useCompanyInfo = (): UseCompanyInfoReturn => {
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo>(DEFAULT_COMPANY_INFO);
  const [isLoaded, setIsLoaded] = useState(false);

  // LocalStorageから読み込み
  useEffect(() => {
    const saved = localStorage.getItem('companyInfo');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setCompanyInfo(parsed);
      } catch (e) {
        console.error('Failed to parse company info:', e);
        // パースに失敗した場合はデフォルト値を使用
      }
    }
    setIsLoaded(true);
  }, []);

  /**
   * 会社情報を更新
   * LocalStorageにも保存
   */
  const updateCompanyInfo = useCallback((info: Partial<CompanyInfo>) => {
    setCompanyInfo((prev) => {
      const updated = { ...prev, ...info };
      localStorage.setItem('companyInfo', JSON.stringify(updated));
      return updated;
    });
  }, []);

  /**
   * デフォルト値にリセット
   */
  const resetToDefault = useCallback(() => {
    setCompanyInfo(DEFAULT_COMPANY_INFO);
    localStorage.setItem('companyInfo', JSON.stringify(DEFAULT_COMPANY_INFO));
  }, []);

  return {
    companyInfo,
    updateCompanyInfo,
    resetToDefault,
    isLoaded,
  };
};
