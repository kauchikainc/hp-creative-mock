import { renderHook, act } from '@testing-library/react';
import { useCompanyInfo } from '@/hooks/useCompanyInfo';
import { DEFAULT_COMPANY_INFO } from '@/lib/defaultCompanyInfo';

describe('useCompanyInfo', () => {
  beforeEach(() => {
    // 各テストの前にlocalStorageをクリア
    localStorage.clear();
    jest.clearAllMocks();
  });

  test('初期値としてデフォルト値が設定される', () => {
    const { result } = renderHook(() => useCompanyInfo());

    expect(result.current.companyInfo).toEqual(DEFAULT_COMPANY_INFO);
    expect(result.current.isLoaded).toBe(true);
  });

  test('LocalStorageに保存された値が読み込まれる', () => {
    const savedInfo = {
      ...DEFAULT_COMPANY_INFO,
      companyName: 'テスト株式会社',
    };

    localStorage.setItem('companyInfo', JSON.stringify(savedInfo));

    const { result } = renderHook(() => useCompanyInfo());

    expect(result.current.companyInfo.companyName).toBe('テスト株式会社');
  });

  test('updateCompanyInfo で値が更新される', () => {
    const { result } = renderHook(() => useCompanyInfo());

    act(() => {
      result.current.updateCompanyInfo({
        companyName: '更新株式会社',
        representativeName: '鈴木 花子',
      });
    });

    expect(result.current.companyInfo.companyName).toBe('更新株式会社');
    expect(result.current.companyInfo.representativeName).toBe('鈴木 花子');
    // 他の項目はデフォルト値のまま
    expect(result.current.companyInfo.prefecture).toBe(DEFAULT_COMPANY_INFO.prefecture);
  });

  test('updateCompanyInfo で LocalStorage に保存される', () => {
    const { result } = renderHook(() => useCompanyInfo());

    act(() => {
      result.current.updateCompanyInfo({
        companyName: '保存テスト株式会社',
      });
    });

    const saved = localStorage.getItem('companyInfo');
    expect(saved).toBeTruthy();

    const parsed = JSON.parse(saved!);
    expect(parsed.companyName).toBe('保存テスト株式会社');
  });

  test('resetToDefault でデフォルト値に戻る', () => {
    const { result } = renderHook(() => useCompanyInfo());

    // まず値を変更
    act(() => {
      result.current.updateCompanyInfo({
        companyName: '変更株式会社',
      });
    });

    expect(result.current.companyInfo.companyName).toBe('変更株式会社');

    // リセット
    act(() => {
      result.current.resetToDefault();
    });

    expect(result.current.companyInfo).toEqual(DEFAULT_COMPANY_INFO);
  });

  test('不正なJSONがLocalStorageにある場合、デフォルト値を使用', () => {
    localStorage.setItem('companyInfo', 'invalid json');

    const { result } = renderHook(() => useCompanyInfo());

    expect(result.current.companyInfo).toEqual(DEFAULT_COMPANY_INFO);
  });
});
