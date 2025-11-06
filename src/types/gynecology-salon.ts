/**
 * 婦人科サロン業種の型定義
 */

/**
 * 診療メニュー
 */
export interface TreatmentMenu {
  id: string;
  name: string;
  description: string;
  price: string;
  duration: string;
  imageUrl: string;
  features: string[];
}

/**
 * 医師・スタッフ情報
 */
export interface Doctor {
  id: string;
  name: string;
  position: string;
  specialty: string[];
  imageUrl: string;
  bio: string;
  qualifications: string[];
  message: string;
}

/**
 * 症例・施術実績
 */
export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  description: string;
  beforeImageUrl: string;
  afterImageUrl: string;
  treatment: string;
  duration: string;
  date: string;
  testimonial?: string;
}

/**
 * お知らせ
 */
export interface NewsItem {
  id: string;
  date: string;
  category: string;
  title: string;
  content: string;
  imageUrl?: string;
}

/**
 * お客様の声
 */
export interface Testimonial {
  id: string;
  name: string;
  age: string;
  imageUrl: string;
  rating: number;
  comment: string;
  treatment: string;
  date: string;
}
