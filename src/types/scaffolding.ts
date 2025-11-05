/**
 * 足場・鳶職業種の型定義
 */

/**
 * 施工実績の型
 */
export interface ConstructionProject {
  id: string;
  title: string;
  description: string;
  location: string;
  duration: string;
  imageUrl: string;
  category: '足場工事' | '鳶工事' | '解体工事' | '仮設工事';
  completedAt: string;
}

/**
 * サービス内容の型
 */
export interface ScaffoldingService {
  id: string;
  name: string;
  description: string;
  features: string[];
  icon: string;
}

/**
 * 安全実績の型
 */
export interface SafetyRecord {
  year: string;
  accidents: number;
  safetyDays: number;
  certifications: string[];
}

/**
 * スタッフ情報の型
 */
export interface StaffMember {
  id: string;
  name: string;
  position: string;
  qualifications: string[];
  experience: string;
  imageUrl: string;
}

/**
 * お知らせの型
 */
export interface ScaffoldingNews {
  id: string;
  date: string;
  category: '工事実績' | '安全対策' | 'お知らせ' | '求人';
  title: string;
  content?: string;
}

/**
 * ブログ記事の型
 */
export interface ScaffoldingBlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: '安全対策' | '技術情報' | '現場レポート' | '業界ニュース';
  author: string;
  publishedAt: string;
  imageUrl: string;
  tags: string[];
}
