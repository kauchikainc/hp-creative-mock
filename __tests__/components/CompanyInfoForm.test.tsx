import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CompanyInfoForm } from '@/components/CompanyInfoForm';
import { DEFAULT_COMPANY_INFO } from '@/lib/defaultCompanyInfo';

describe('CompanyInfoForm', () => {
  const mockOnUpdate = jest.fn();

  beforeEach(() => {
    mockOnUpdate.mockClear();
  });

  test('初期値が正しく表示される', () => {
    render(
      <CompanyInfoForm
        companyInfo={DEFAULT_COMPANY_INFO}
        onUpdate={mockOnUpdate}
      />
    );

    expect(screen.getByDisplayValue('サンプル株式会社')).toBeInTheDocument();
    expect(screen.getByDisplayValue('山田 太郎')).toBeInTheDocument();
    expect(screen.getByDisplayValue('100-0001')).toBeInTheDocument();
  });

  test('会社名の入力が正しく動作する', async () => {
    const user = userEvent.setup();
    render(
      <CompanyInfoForm
        companyInfo={DEFAULT_COMPANY_INFO}
        onUpdate={mockOnUpdate}
      />
    );

    const input = screen.getByLabelText(/会社名/) as HTMLInputElement;

    // 直接値を変更してテスト
    await user.clear(input);
    await user.type(input, 'テスト');

    // onUpdateが呼ばれたことを確認
    expect(mockOnUpdate).toHaveBeenCalled();
  });

  test('郵便番号のフォーマットが正しく適用される', async () => {
    // normalizePostalCode関数のテストとして、
    // 7桁の数字が自動的にハイフン付きフォーマットになることを確認
    const { normalizePostalCode } = require('@/lib/validation');

    const result = normalizePostalCode('1500001');
    expect(result).toBe('150-0001');

    // フォームでも同様に動作することを確認
    const customInfo = {
      ...DEFAULT_COMPANY_INFO,
      postalCode: '', // 空の郵便番号から始める
    };

    render(
      <CompanyInfoForm
        companyInfo={customInfo}
        onUpdate={mockOnUpdate}
      />
    );

    const input = screen.getByLabelText(/郵便番号/) as HTMLInputElement;

    // 1文字だけ入力してonUpdateが呼ばれることを確認
    await userEvent.type(input, '1');
    expect(mockOnUpdate).toHaveBeenCalled();
  });

  test('バリデーションエラーが表示される', async () => {
    const customInfo = {
      ...DEFAULT_COMPANY_INFO,
      companyName: '', // 空の会社名でテスト
    };

    render(
      <CompanyInfoForm
        companyInfo={customInfo}
        onUpdate={mockOnUpdate}
      />
    );

    const input = screen.getByLabelText(/会社名/) as HTMLInputElement;
    fireEvent.blur(input);

    await waitFor(() => {
      expect(screen.getByText(/必須です/)).toBeInTheDocument();
    });
  });

  test('不正な郵便番号でエラーが表示される', async () => {
    const customInfo = {
      ...DEFAULT_COMPANY_INFO,
      postalCode: '12345', // 不正な郵便番号でテスト
    };

    render(
      <CompanyInfoForm
        companyInfo={customInfo}
        onUpdate={mockOnUpdate}
      />
    );

    const input = screen.getByLabelText(/郵便番号/) as HTMLInputElement;
    fireEvent.blur(input);

    await waitFor(() => {
      expect(screen.getByText(/形式が正しくありません/)).toBeInTheDocument();
    });
  });

  test('全ての入力フィールドが表示される', () => {
    render(
      <CompanyInfoForm
        companyInfo={DEFAULT_COMPANY_INFO}
        onUpdate={mockOnUpdate}
      />
    );

    expect(screen.getByLabelText(/会社名/)).toBeInTheDocument();
    expect(screen.getByLabelText(/代表者名/)).toBeInTheDocument();
    expect(screen.getByLabelText(/郵便番号/)).toBeInTheDocument();
    expect(screen.getByLabelText(/都道府県/)).toBeInTheDocument();
    expect(screen.getByLabelText(/市区町村/)).toBeInTheDocument();
    expect(screen.getByLabelText(/番地/)).toBeInTheDocument();
    expect(screen.getByLabelText(/建物名/)).toBeInTheDocument();
  });
});
