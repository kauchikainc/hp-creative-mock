import React from 'react';
import { render, screen } from '@testing-library/react';
import { VacationRentalPage } from '@/components/VacationRentalPage';
import { CompanyInfo } from '@/types';

const mockCompanyInfo: CompanyInfo = {
  companyName: 'テスト民泊',
  postalCode: '100-0001',
  prefecture: '東京都',
  city: '千代田区',
  address: 'テスト町1-1-1',
  phoneNumber: '03-1234-5678',
  email: 'test@example.com',
  representativeName: '山田太郎',
  foundedYear: 2020,
  capital: 1000,
  employeeCount: 5,
};

describe('VacationRentalPage - Standard Plan', () => {
  test('会社名が表示される', () => {
    render(<VacationRentalPage companyInfo={mockCompanyInfo} plan="standard" />);
    const elements = screen.getAllByText('テスト民泊');
    expect(elements.length).toBeGreaterThan(0);
  });

  test('ヒーローセクションが表示される', () => {
    render(<VacationRentalPage companyInfo={mockCompanyInfo} plan="standard" />);
    expect(screen.getByText(/暮らすように旅する/)).toBeInTheDocument();
  });

  test('客室情報セクションが表示される', () => {
    render(<VacationRentalPage companyInfo={mockCompanyInfo} plan="standard" />);
    expect(screen.getByText(/客室のご案内/)).toBeInTheDocument();
  });

  test('施設情報セクションが表示される', () => {
    render(<VacationRentalPage companyInfo={mockCompanyInfo} plan="standard" />);
    expect(screen.getByText(/施設・設備/)).toBeInTheDocument();
  });

  test('周辺観光スポットセクションが表示される', () => {
    render(<VacationRentalPage companyInfo={mockCompanyInfo} plan="standard" />);
    expect(screen.getByText(/周辺観光スポット/)).toBeInTheDocument();
  });

  test('アクセス情報が表示される', () => {
    render(<VacationRentalPage companyInfo={mockCompanyInfo} plan="standard" />);
    expect(screen.getByText(/アクセス/)).toBeInTheDocument();
  });

  test('お問い合わせボタンが表示される', () => {
    render(<VacationRentalPage companyInfo={mockCompanyInfo} plan="standard" />);
    const buttons = screen.getAllByText(/お問い合わせ/);
    expect(buttons.length).toBeGreaterThan(0);
  });

  test('Standard プランでは宿泊プラン一覧は表示されない', () => {
    render(<VacationRentalPage companyInfo={mockCompanyInfo} plan="standard" />);
    expect(screen.queryByText(/宿泊プラン/)).not.toBeInTheDocument();
  });

  test('Standard プランではゲストレビューは表示されない', () => {
    render(<VacationRentalPage companyInfo={mockCompanyInfo} plan="standard" />);
    expect(screen.queryByText(/ゲストレビュー/)).not.toBeInTheDocument();
  });

  test('Standard プランではブログは表示されない', () => {
    render(<VacationRentalPage companyInfo={mockCompanyInfo} plan="standard" />);
    expect(screen.queryByText('ブログ')).not.toBeInTheDocument();
  });
});

describe('VacationRentalPage - Premium Plan', () => {
  test('会社名が表示される', () => {
    render(<VacationRentalPage companyInfo={mockCompanyInfo} plan="premium" />);
    const elements = screen.getAllByText('テスト民泊');
    expect(elements.length).toBeGreaterThan(0);
  });

  test('Premium プランでは宿泊プラン一覧が表示される', () => {
    render(<VacationRentalPage companyInfo={mockCompanyInfo} plan="premium" />);
    expect(screen.getByText(/宿泊プラン/)).toBeInTheDocument();
  });

  test('Premium プランではゲストレビューが表示される', () => {
    render(<VacationRentalPage companyInfo={mockCompanyInfo} plan="premium" />);
    expect(screen.getByText(/ゲストレビュー/)).toBeInTheDocument();
  });

  test('Premium プランではブログが表示される', () => {
    render(<VacationRentalPage companyInfo={mockCompanyInfo} plan="premium" />);
    expect(screen.getByText('ブログ')).toBeInTheDocument();
  });

  test('Premium プランではお知らせが表示される', () => {
    render(<VacationRentalPage companyInfo={mockCompanyInfo} plan="premium" />);
    expect(screen.getByText('お知らせ')).toBeInTheDocument();
  });

  test('客室情報セクションが表示される', () => {
    render(<VacationRentalPage companyInfo={mockCompanyInfo} plan="premium" />);
    expect(screen.getByText(/客室のご案内/)).toBeInTheDocument();
  });

  test('施設情報セクションが表示される', () => {
    render(<VacationRentalPage companyInfo={mockCompanyInfo} plan="premium" />);
    expect(screen.getByText(/施設・設備/)).toBeInTheDocument();
  });

  test('周辺観光スポットセクションが表示される', () => {
    render(<VacationRentalPage companyInfo={mockCompanyInfo} plan="premium" />);
    expect(screen.getByText(/周辺観光スポット/)).toBeInTheDocument();
  });
});
