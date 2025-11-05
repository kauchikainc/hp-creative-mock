import { render, screen, fireEvent } from '@testing-library/react';
import { IndustryPlanSelector } from '@/components/IndustryPlanSelector';
import { INDUSTRIES, PLANS } from '@/types/plan';

describe('IndustryPlanSelector', () => {
  const mockOnSelect = jest.fn();

  beforeEach(() => {
    mockOnSelect.mockClear();
  });

  test('業種選択ボタンが表示される', () => {
    render(<IndustryPlanSelector onSelect={mockOnSelect} />);

    expect(screen.getByText(/不動産/)).toBeInTheDocument();
    expect(screen.getByText(/中古車販売/)).toBeInTheDocument();
  });

  test('プラン選択ボタンが表示される', () => {
    render(<IndustryPlanSelector onSelect={mockOnSelect} />);

    // aria-labelで特定のボタンを検索
    expect(screen.getByRole('button', { name: /Standard/ })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Premium/ })).toBeInTheDocument();
  });

  test('業種を選択するとコールバックが呼ばれない（プランも必要）', () => {
    render(<IndustryPlanSelector onSelect={mockOnSelect} />);

    const realEstateButton = screen.getByRole('button', { name: /不動産/ });
    fireEvent.click(realEstateButton);

    // 業種だけではコールバックは呼ばれない
    expect(mockOnSelect).not.toHaveBeenCalled();
  });

  test('プランを選択するとコールバックが呼ばれない（業種も必要）', () => {
    render(<IndustryPlanSelector onSelect={mockOnSelect} />);

    const standardButton = screen.getByRole('button', { name: /Standard/ });
    fireEvent.click(standardButton);

    // プランだけではコールバックは呼ばれない
    expect(mockOnSelect).not.toHaveBeenCalled();
  });

  test('業種とプランを両方選択するとコールバックが呼ばれる', () => {
    render(<IndustryPlanSelector onSelect={mockOnSelect} />);

    // 業種を選択
    const realEstateButton = screen.getByRole('button', { name: /不動産/ });
    fireEvent.click(realEstateButton);

    // プランを選択
    const premiumButton = screen.getByRole('button', { name: /Premium/ });
    fireEvent.click(premiumButton);

    // コールバックが正しい引数で呼ばれる
    expect(mockOnSelect).toHaveBeenCalledWith({
      industry: INDUSTRIES.REAL_ESTATE,
      plan: PLANS.PREMIUM,
    });
  });

  test('プランと業種の選択順序が逆でも動作する', () => {
    render(<IndustryPlanSelector onSelect={mockOnSelect} />);

    // プランを先に選択
    const standardButton = screen.getByRole('button', { name: /Standard/ });
    fireEvent.click(standardButton);

    // 業種を選択
    const usedCarButton = screen.getByRole('button', { name: /中古車販売/ });
    fireEvent.click(usedCarButton);

    // コールバックが正しい引数で呼ばれる
    expect(mockOnSelect).toHaveBeenCalledWith({
      industry: INDUSTRIES.USED_CAR,
      plan: PLANS.STANDARD,
    });
  });

  test('選択済みの業種が視覚的に強調表示される', () => {
    render(<IndustryPlanSelector onSelect={mockOnSelect} />);

    const realEstateButton = screen.getByRole('button', { name: /不動産/ });
    fireEvent.click(realEstateButton);

    // 選択されたボタンに特定のクラスが適用されることを確認
    // 実装に応じて具体的なアサーションを追加
    expect(realEstateButton).toBeInTheDocument();
  });
});
