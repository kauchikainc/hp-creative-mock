'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * ビュータイプの定義
 * ホーム、会社概要、サービス、お問い合わせの4ページ構成
 */
export type ViewType = 'home' | 'about' | 'service' | 'contact';

/**
 * 業種別カラーテーマ
 */
export type ColorTheme = 'emerald' | 'amber' | 'teal';

/**
 * IndustryNavbar コンポーネントのProps
 */
interface IndustryNavbarProps {
  /** 会社名 */
  companyName: string;
  /** 現在表示中のビュー */
  currentView: ViewType;
  /** ナビゲーション時のコールバック */
  onNavigate: (view: ViewType) => void;
  /** 業種別カラーテーマ */
  primaryColor: ColorTheme;
}

/**
 * ナビゲーションリンクの定義
 */
const NAV_LINKS: { view: ViewType; label: string }[] = [
  { view: 'home', label: 'ホーム' },
  { view: 'about', label: '会社概要' },
  { view: 'service', label: 'サービス' },
];

/**
 * カラーテーマごとのスタイル定義
 */
const COLOR_STYLES: Record<ColorTheme, {
  activeText: string;
  activeBorder: string;
  buttonBg: string;
  buttonHover: string;
  mobileMenuBg: string;
}> = {
  emerald: {
    activeText: 'text-emerald-600',
    activeBorder: 'bg-emerald-600',
    buttonBg: 'bg-emerald-600',
    buttonHover: 'hover:bg-emerald-700',
    mobileMenuBg: 'bg-emerald-600',
  },
  amber: {
    activeText: 'text-amber-600',
    activeBorder: 'bg-amber-500',
    buttonBg: 'bg-amber-500',
    buttonHover: 'hover:bg-amber-600',
    mobileMenuBg: 'bg-amber-500',
  },
  teal: {
    activeText: 'text-teal-600',
    activeBorder: 'bg-teal-500',
    buttonBg: 'bg-teal-600',
    buttonHover: 'hover:bg-teal-700',
    mobileMenuBg: 'bg-teal-600',
  },
};

/**
 * 業種別の洗練されたナビゲーションバーコンポーネント
 *
 * 機能:
 * - スクロール検知による背景色/シャドウの動的変更
 * - アクティブリンクの下線アニメーション
 * - 業種カラー対応
 * - モバイルメニュー（サイドスライド式）
 * - CTAボタン（お問い合わせ）
 */
export const IndustryNavbar = ({
  companyName,
  currentView,
  onNavigate,
  primaryColor,
}: IndustryNavbarProps) => {
  // スクロール状態の管理
  const [isScrolled, setIsScrolled] = useState(false);
  // モバイルメニューの開閉状態
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // カラースタイルの取得
  const colors = COLOR_STYLES[primaryColor];

  // スクロール検知
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /**
   * ナビゲーションハンドラー
   * ビューを切り替え、モバイルメニューを閉じる
   */
  const handleNavigate = (view: ViewType) => {
    onNavigate(view);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg'
            : 'bg-white/80 backdrop-blur-sm'
        }`}
        role="banner"
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* 会社名/ロゴエリア */}
            <motion.button
              onClick={() => handleNavigate('home')}
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className={`text-xl lg:text-2xl font-bold ${colors.activeText}`}
            >
              {companyName}
            </motion.button>

            {/* デスクトップナビゲーション */}
            <nav className="hidden md:flex items-center space-x-8">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.view}
                  onClick={() => handleNavigate(link.view)}
                  className="relative py-2 group"
                >
                  <span
                    className={`text-sm font-medium transition-colors ${
                      currentView === link.view
                        ? colors.activeText
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {link.label}
                  </span>
                  {/* アクティブリンクの下線アニメーション */}
                  <motion.span
                    className={`absolute bottom-0 left-0 h-0.5 ${colors.activeBorder}`}
                    initial={false}
                    animate={{
                      width: currentView === link.view ? '100%' : '0%',
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  {/* ホバー時の下線 */}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 ${colors.activeBorder} opacity-0 group-hover:opacity-30 transition-opacity w-full`}
                  />
                </button>
              ))}

              {/* CTAボタン */}
              <motion.button
                onClick={() => handleNavigate('contact')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2.5 ${colors.buttonBg} text-white text-sm font-medium rounded-lg ${colors.buttonHover} transition-colors shadow-sm`}
              >
                お問い合わせ
              </motion.button>
            </nav>

            {/* モバイルメニューボタン */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(true)}
              whileTap={{ scale: 0.95 }}
              className="md:hidden p-2 text-gray-600 hover:text-gray-900"
              aria-label="メニューを開く"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* モバイルメニュー（サイドスライド式） */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* オーバーレイ */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 z-[60] md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* サイドメニュー */}
            <motion.div
              data-testid="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-72 bg-white z-[70] md:hidden shadow-2xl"
            >
              {/* 閉じるボタン */}
              <div className="flex justify-end p-4">
                <motion.button
                  onClick={() => setIsMobileMenuOpen(false)}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 text-gray-600 hover:text-gray-900"
                  aria-label="メニューを閉じる"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
              </div>

              {/* ナビゲーションリンク */}
              <nav className="px-6 py-4">
                {NAV_LINKS.map((link, index) => (
                  <motion.button
                    key={link.view}
                    onClick={() => handleNavigate(link.view)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`w-full text-left py-4 text-lg font-medium border-b border-gray-100 ${
                      currentView === link.view
                        ? colors.activeText
                        : 'text-gray-600'
                    }`}
                  >
                    {link.label}
                  </motion.button>
                ))}

                {/* お問い合わせボタン */}
                <motion.button
                  onClick={() => handleNavigate('contact')}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: NAV_LINKS.length * 0.1 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full mt-6 py-4 ${colors.buttonBg} text-white text-lg font-medium rounded-lg ${colors.buttonHover} transition-colors`}
                >
                  お問い合わせ
                </motion.button>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ヘッダー分の余白 */}
      <div className="h-16 lg:h-20" />
    </>
  );
};
