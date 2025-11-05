import { CompanyInfo } from '@/types';

/**
 * 住所の整形
 * @param info - 会社情報
 * @returns 整形された住所文字列
 */
export const formatAddress = (info: CompanyInfo): string => {
  const parts = [
    info.prefecture,
    info.city,
    info.streetAddress,
    info.buildingName,
  ].filter(Boolean); // 空文字列を除外

  return parts.join('');
};

/**
 * 郵便番号付き住所の整形
 * @param info - 会社情報
 * @returns 〒付きの整形された住所文字列
 */
export const formatFullAddress = (info: CompanyInfo): string => {
  const address = formatAddress(info);
  return `〒${info.postalCode} ${address}`;
};

/**
 * 価格のフォーマット（カンマ区切り）
 * @param price - 価格（円）
 * @returns カンマ区切りの価格文字列
 */
export const formatPrice = (price: number): string => {
  return price.toLocaleString('ja-JP');
};

/**
 * 面積のフォーマット
 * @param area - 面積（㎡）
 * @returns 小数点2桁 + 単位付きの面積文字列
 */
export const formatArea = (area: number): string => {
  return `${area.toFixed(2)}㎡`;
};
