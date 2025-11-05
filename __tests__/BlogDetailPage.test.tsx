import { render, screen } from '@testing-library/react';
import { BlogDetailPage } from '@/components/BlogDetailPage';
import { CompanyInfo } from '@/types';
import { BlogPost } from '@/types/cms';

/**
 * BlogDetailPage コンポーネントのテスト
 * ブログ記事の詳細ページ
 */
describe('BlogDetailPage', () => {
  const mockCompanyInfo: CompanyInfo = {
    companyName: 'テスト株式会社',
    postalCode: '100-0001',
    prefecture: '東京都',
    city: '千代田区',
    address: '千代田1-1-1',
    phoneNumber: '03-1234-5678',
    email: 'test@example.com',
  };

  const mockBlogPost: BlogPost = {
    id: '1',
    title: '不動産投資の始め方：初心者向けガイド',
    excerpt: '不動産投資を始めたい方に向けて、基礎知識から実践的なアドバイスまでご紹介します。',
    content: '不動産投資は、資産形成の有効な手段の一つです。本記事では、初心者の方でも安心して始められるよう、基礎知識から実践的なアドバイスまで詳しく解説します。',
    category: '投資',
    publishedAt: '2024-01-15',
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa',
    authorName: '山田太郎',
  };

  test('should render blog title', () => {
    render(<BlogDetailPage companyInfo={mockCompanyInfo} post={mockBlogPost} />);
    expect(screen.getByText('不動産投資の始め方：初心者向けガイド')).toBeInTheDocument();
  });

  test('should render blog category', () => {
    render(<BlogDetailPage companyInfo={mockCompanyInfo} post={mockBlogPost} />);
    expect(screen.getByText('投資')).toBeInTheDocument();
  });

  test('should render published date', () => {
    render(<BlogDetailPage companyInfo={mockCompanyInfo} post={mockBlogPost} />);
    expect(screen.getByText(/2024-01-15/)).toBeInTheDocument();
  });

  test('should render blog content', () => {
    render(<BlogDetailPage companyInfo={mockCompanyInfo} post={mockBlogPost} />);
    expect(screen.getByText(/不動産投資は、資産形成の有効な手段の一つです/)).toBeInTheDocument();
  });

  test('should render author name if provided', () => {
    render(<BlogDetailPage companyInfo={mockCompanyInfo} post={mockBlogPost} />);
    expect(screen.getByText(/山田太郎/)).toBeInTheDocument();
  });

  test('should render blog image', () => {
    render(<BlogDetailPage companyInfo={mockCompanyInfo} post={mockBlogPost} />);
    const images = screen.getAllByRole('img');
    expect(images.length).toBeGreaterThan(0);
  });

  test('should render back to list button', () => {
    render(<BlogDetailPage companyInfo={mockCompanyInfo} post={mockBlogPost} />);
    expect(screen.getByText(/一覧に戻る/)).toBeInTheDocument();
  });

  test('should not render author name if not provided', () => {
    const postWithoutAuthor = { ...mockBlogPost, authorName: undefined };
    render(<BlogDetailPage companyInfo={mockCompanyInfo} post={postWithoutAuthor} />);
    expect(screen.queryByText('山田太郎')).not.toBeInTheDocument();
  });
});
