import React from 'react';
import { render, screen } from '@testing-library/react';
import { VacationRentalCasualPage } from '@/components/VacationRentalCasualPage';
import { CompanyInfo } from '@/types';

const mockCompanyInfo: CompanyInfo = {
  companyName: 'テスト民泊(大衆)',
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

describe('VacationRentalCasualPage - Standard Plan', () => {
  test('会社名が表示される', () => {
    render(<VacationRentalCasualPage companyInfo={mockCompanyInfo} plan="standard" />);
    const elements = screen.getAllByText('テスト民泊(大衆)');
    expect(elements.length).toBeGreaterThan(0);
  });

  test('ヒーローセクションが表示される', () => {
    render(<VacationRentalCasualPage companyInfo={mockCompanyInfo} plan="standard" />);
    const elements = screen.getAllByText(/おうちみたいに/);
    expect(elements.length).toBeGreaterThan(0);
  });

  test('お部屋紹介セクションが表示される', () => {
    render(<VacationRentalCasualPage companyInfo={mockCompanyInfo} plan="standard" />);
    expect(screen.getByText(/お部屋紹介/)).toBeInTheDocument();
  });

  test('設備・アメニティセクションが表示される', () => {
    render(<VacationRentalCasualPage companyInfo={mockCompanyInfo} plan="standard" />);
    expect(screen.getByText(/設備・アメニティ/)).toBeInTheDocument();
  });

  test('周辺情報セクションが表示される', () => {
    render(<VacationRentalCasualPage companyInfo={mockCompanyInfo} plan="standard" />);
    expect(screen.getByText(/周辺情報/)).toBeInTheDocument();
  });

  test('アクセス情報が表示される', () => {
    render(<VacationRentalCasualPage companyInfo={mockCompanyInfo} plan="standard" />);
    const elements = screen.getAllByText(/アクセス/);
    expect(elements.length).toBeGreaterThan(0);
  });

  test('予約・お問い合わせボタンが表示される', () => {
    render(<VacationRentalCasualPage companyInfo={mockCompanyInfo} plan="standard" />);
    const buttons = screen.getAllByText(/予約/);
    expect(buttons.length).toBeGreaterThan(0);
  });

  test('Standard プランでは宿泊プランは表示されない', () => {
    render(<VacationRentalCasualPage companyInfo={mockCompanyInfo} plan="standard" />);
    expect(screen.queryByText(/宿泊プラン/)).not.toBeInTheDocument();
  });

  test('Standard プランではゲストの声は表示されない', () => {
    render(<VacationRentalCasualPage companyInfo={mockCompanyInfo} plan="standard" />);
    expect(screen.queryByText(/ゲストの声/)).not.toBeInTheDocument();
  });

  test('Standard プランではブログは表示されない', () => {
    render(<VacationRentalCasualPage companyInfo={mockCompanyInfo} plan="standard" />);
    expect(screen.queryByText(/ホストのブログ/)).not.toBeInTheDocument();
  });
});

describe('VacationRentalCasualPage - Premium Plan', () => {
  test('会社名が表示される', () => {
    render(<VacationRentalCasualPage companyInfo={mockCompanyInfo} plan="premium" />);
    const elements = screen.getAllByText('テスト民泊(大衆)');
    expect(elements.length).toBeGreaterThan(0);
  });

  test('Premium プランでは宿泊プランが表示される', () => {
    render(<VacationRentalCasualPage companyInfo={mockCompanyInfo} plan="premium" />);
    expect(screen.getByText(/宿泊プラン/)).toBeInTheDocument();
  });

  test('Premium プランではゲストの声が表示される', () => {
    render(<VacationRentalCasualPage companyInfo={mockCompanyInfo} plan="premium" />);
    expect(screen.getByText(/ゲストの声/)).toBeInTheDocument();
  });

  test('Premium プランではブログが表示される', () => {
    render(<VacationRentalCasualPage companyInfo={mockCompanyInfo} plan="premium" />);
    expect(screen.getByText(/ホストのブログ/)).toBeInTheDocument();
  });

  test('Premium プランではお知らせが表示される', () => {
    render(<VacationRentalCasualPage companyInfo={mockCompanyInfo} plan="premium" />);
    const elements = screen.getAllByText(/お知らせ/);
    expect(elements.length).toBeGreaterThan(0);
  });

  test('お部屋紹介セクションが表示される', () => {
    render(<VacationRentalCasualPage companyInfo={mockCompanyInfo} plan="premium" />);
    expect(screen.getByText(/お部屋紹介/)).toBeInTheDocument();
  });

  test('設備・アメニティセクションが表示される', () => {
    render(<VacationRentalCasualPage companyInfo={mockCompanyInfo} plan="premium" />);
    expect(screen.getByText(/設備・アメニティ/)).toBeInTheDocument();
  });

  test('周辺情報セクションが表示される', () => {
    render(<VacationRentalCasualPage companyInfo={mockCompanyInfo} plan="premium" />);
    expect(screen.getByText(/周辺情報/)).toBeInTheDocument();
  });
});
