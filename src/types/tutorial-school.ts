/**
 * 学習塾業種の型定義
 */

/**
 * コースの型
 */
export interface Course {
  id: string;
  name: string;
  grade: string;
  description: string;
  subjects: string[];
  schedule: string;
  fee: number;
}

/**
 * 講師の型
 */
export interface Teacher {
  id: string;
  name: string;
  subjects: string[];
  qualifications: string[];
  introduction: string;
  imageUrl: string;
}

/**
 * 合格実績の型
 */
export interface Achievement {
  year: string;
  schoolName: string;
  studentCount: number;
  category: '大学' | '高校' | '中学';
}

/**
 * 生徒・保護者の声の型
 */
export interface Testimonial {
  id: string;
  studentName: string;
  grade: string;
  comment: string;
  achievement?: string;
  date: string;
}

/**
 * お知らせの型
 */
export interface TutorialNews {
  id: string;
  date: string;
  category: 'お知らせ' | 'イベント' | '合格速報' | '休校日';
  title: string;
  content?: string;
}

/**
 * ブログ記事の型
 */
export interface TutorialBlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: '学習方法' | '受験情報' | '教室だより' | '保護者向け';
  author: string;
  publishedAt: string;
  imageUrl: string;
  tags: string[];
}
