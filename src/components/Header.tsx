import React, { useState } from 'react';
import { ArrowRight, User, Menu, X, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface HeaderProps {
  onOpenQuote: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuote, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showUserModal, setShowUserModal] = useState(false);

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 pointer-events-none px-4">
        <div className="pointer-events-auto h-20 max-w-6xl mx-auto flex items-center justify-between mt-3 px-6 py-3.5 rounded-full bg-[#0b0e14]/80 backdrop-blur-xl border border-[#3b494b]/30 shadow-[0_8px_32px_-4px_rgba(0,0,0,0.7)]">
          {/* Logo & Brand */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleNavClick('hero')}
              className="flex flex-col text-left group cursor-pointer focus:outline-none"
            >
              <div className="flex items-center gap-1.5">
                <span className="font-['Space_Grotesk'] text-[18px] font-semibold tracking-tight text-[#e0e2eb] group-hover:text-[#dbfcff] transition-colors">
                  KEEN PRO
                </span>
                <span className="h-2 w-2 rounded-full bg-[#00f0ff] shadow-[0_0_8px_#00f0ff] animate-pulse"></span>
              </div>
              <span className="font-['JetBrains_Mono'] text-[10px] tracking-wider uppercase text-[#849495] group-hover:text-[#00dbe9] transition-colors">
                PRECISION PET MOLDING
              </span>
            </button>

            {/* Status pill */}
            <div className="hidden lg:flex items-center gap-2 pl-3.5 py-1 pr-3 rounded-full bg-[#272a31]/40 border border-[#3b494b]/30">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f0ff] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00f0ff]"></span>
              </span>
              <span className="font-['JetBrains_Mono'] text-[11px] text-[#00dbe9] tracking-wider font-medium">
                PET MOLDING EXPERT
              </span>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => handleNavClick('bento')}
              className="text-[14px] text-[#b9cacb] hover:text-[#e0e2eb] transition-colors cursor-pointer"
            >
              關於精普
            </button>
            <button
              onClick={() => handleNavClick('bento')}
              className="text-[14px] text-[#00f0ff] font-medium transition-colors cursor-pointer"
            >
              Bento 工藝藝廊
            </button>
            <button
              onClick={() => handleNavClick('machinery-catalogue')}
              className="text-[14px] text-[#b9cacb] hover:text-[#e0e2eb] transition-colors cursor-pointer"
            >
              吹瓶設備方案
            </button>
            <button
              onClick={() => handleNavClick('machinery-catalogue')}
              className="text-[14px] text-[#b9cacb] hover:text-[#e0e2eb] transition-colors cursor-pointer"
            >
              智慧產線
            </button>
            <button
              onClick={() => handleNavClick('bento')}
              className="text-[14px] text-[#b9cacb] hover:text-[#e0e2eb] transition-colors cursor-pointer"
            >
              技術核心
            </button>
          </nav>

          {/* Right Action CTA & User */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenQuote}
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#00f0ff] text-[#00363a] text-[14px] font-semibold shadow-[0_0_20px_rgba(0,240,255,0.35)] hover:shadow-[0_0_28px_rgba(0,240,255,0.6)] hover:scale-105 active:scale-95 transition-all duration-200 overflow-hidden group cursor-pointer"
            >
              <span className="relative z-10">索取設備報價</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-0.5 transition-transform" />
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
            </button>

            {/* Profile trigger */}
            <button
              onClick={() => setShowUserModal(!showUserModal)}
              title="工程客戶識別"
              className="w-9 h-9 rounded-full bg-[#dbfcff] hover:bg-white text-[#00363a] flex items-center justify-center shrink-0 border border-[#3b494b]/40 cursor-pointer transition-colors shadow-sm"
            >
              <User className="w-4 h-4" />
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#b9cacb] hover:text-white cursor-pointer"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="pointer-events-auto md:hidden max-w-6xl mx-auto mt-2 px-6 py-5 rounded-2xl bg-[#0b0e14]/95 backdrop-blur-2xl border border-[#3b494b]/50 shadow-2xl flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-200">
            <button
              onClick={() => handleNavClick('bento')}
              className="text-left text-[15px] py-2 text-[#b9cacb] hover:text-[#00f0ff] border-b border-[#32353c]/40"
            >
              關於精普 (About KEEN PRO)
            </button>
            <button
              onClick={() => handleNavClick('bento')}
              className="text-left text-[15px] py-2 text-[#00f0ff] font-medium border-b border-[#32353c]/40"
            >
              Bento 工藝藝廊 (Craft Gallery)
            </button>
            <button
              onClick={() => handleNavClick('machinery-catalogue')}
              className="text-left text-[15px] py-2 text-[#b9cacb] hover:text-[#00f0ff] border-b border-[#32353c]/40"
            >
              吹瓶設備方案 (Machinery Solutions)
            </button>
            <button
              onClick={() => handleNavClick('machinery-catalogue')}
              className="text-left text-[15px] py-2 text-[#b9cacb] hover:text-[#00f0ff] border-b border-[#32353c]/40"
            >
              智慧產線 (Smart Factory)
            </button>
            <button
              onClick={() => handleNavClick('quote-section')}
              className="mt-2 w-full py-3 rounded-full bg-[#00f0ff] text-[#00363a] font-semibold text-center flex items-center justify-center gap-2"
            >
              <span>立即索取報價</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </header>

      {/* User Status Modal */}
      {showUserModal && (
        <div
          onClick={() => setShowUserModal(false)}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-start justify-center pt-28 px-4 animate-in fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-sm rounded-2xl bg-[#1d2026] border border-[#3b494b] p-6 shadow-2xl relative"
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#32353c]">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#00f0ff]/20 text-[#00f0ff] flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-[14px] font-semibold text-[#e0e2eb]">精普工程會員中心</h3>
                  <p className="font-mono text-[11px] text-[#849495]">PORTAL ID: KP-PRO-CLIENT</p>
                </div>
              </div>
              <button
                onClick={() => setShowUserModal(false)}
                className="text-[#849495] hover:text-white p-1 rounded-md"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="mt-4 space-y-2.5 text-[13px] text-[#b9cacb]">
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#191c22]">
                <span>CAD 授權檔案下載</span>
                <span className="text-[#00f0ff] font-mono text-[12px] flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> 已開通
                </span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#191c22]">
                <span>專屬工程協理</span>
                <span className="text-white text-[12px]">張工程顧問 (全球技術中心)</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#191c22]">
                <span>連線協定加密</span>
                <span className="text-[#00dbe9] font-mono text-[12px]">TLS 1.3 Active</span>
              </div>
            </div>
            <button
              onClick={() => {
                setShowUserModal(false);
                onOpenQuote();
              }}
              className="mt-5 w-full py-2.5 rounded-lg bg-[#00f0ff] text-[#00363a] font-semibold text-[13px] hover:bg-[#7df4ff] transition-colors"
            >
              填寫技術詢價工單
            </button>
          </div>
        </div>
      )}
    </>
  );
};
