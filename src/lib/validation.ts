import { CompanyInfo } from '@/types';

/**
 * 会社情報のバリデーション
 * @param info - バリデーション対象の会社情報
 * @returns エラーオブジェクト（キー: フィールド名、値: エラーメッセージ）
 */
export const validateCompanyInfo = (
  info: Partial<CompanyInfo>
): Record<string, string> => {
  const errors: Record<string, string> = {};

  // 会社名は必須
  if (!info.companyName || info.companyName.trim() === '') {
    errors.companyName = '会社名/組織名/屋号は必須です';
  }

  // 郵便番号の形式チェック(入力されている場合のみ)
  if (info.postalCode && !/^\d{3}-?\d{4}$/.test(info.postalCode)) {
    errors.postalCode = '郵便番号の形式が正しくありません (例: 100-0001)';
  }

  return errors;
};

/**
 * 郵便番号の正規化（ハイフン自動挿入）
 * @param value - 正規化対象の郵便番号
 * @returns ハイフン付き郵便番号（7桁の数字の場合）、それ以外はそのまま
 */
export const normalizePostalCode = (value: string): string => {
  // 数字のみを抽出
  const digits = value.replace(/\D/g, '');

  // 7桁の場合はハイフンを挿入
  if (digits.length === 7) {
    return `${digits.slice(0, 3)}-${digits.slice(3)}`;
  }

  return value;
};
