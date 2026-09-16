import React, { useState } from 'react';
import { Globe, ArrowRight, ShieldCheck, Check } from 'lucide-react';

interface FooterProps {
  onScrollToQuote: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollToQuote, onNavigate }) => {
  const [currentLang, setCurrentLang] = useState('繁體中文 (台灣)');
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const languages = [
    '繁體中文 (台灣)',
    'English (US)',
    'Deutsch (DE)',
    '日本語 (JP)',
    'Español (ES)',
  ];

  return (
    <footer className="w-full bg-[#0b0e14] border-t border-[#3b494b]/30 pt-16 pb-12 mt-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-[#3b494b]/20">
          {/* Brand info (Span 2) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="font-['Space_Grotesk'] text-[18px] text-[#e0e2eb] font-semibold tracking-tight">
                KEEN PRO 精普國際
              </span>
              <span className="h-2 w-2 rounded-full bg-[#00f0ff] shadow-[0_0_8px_#00f0ff]"></span>
            </div>
            <p className="text-[13px] text-[#b9cacb] max-w-sm leading-relaxed">
              全球領先的高速全電氣化 PET 吹瓶成型設備與整廠自動化包裝整合方案。提供低碳高產能的智能製造實踐。
            </p>
            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              <span className="px-2.5 py-1 rounded-md bg-[#272a31] border border-[#3b494b]/40 font-['JetBrains_Mono'] text-[10px] text-[#849495]">
                CE CERTIFIED
              </span>
              <span className="px-2.5 py-1 rounded-md bg-[#272a31] border border-[#3b494b]/40 font-['JetBrains_Mono'] text-[10px] text-[#849495]">
                ISO 9001:2015
              </span>
              <span className="px-2.5 py-1 rounded-md bg-[#272a31] border border-[#3b494b]/40 font-['JetBrains_Mono'] text-[10px] text-[#00dbe9]">
                INDUSTRY 4.0 READY
              </span>
            </div>
          </div>

          {/* Solutions Column */}
          <div className="flex flex-col gap-3">
            <span className="font-['JetBrains_Mono'] text-[11px] uppercase text-[#e0e2eb] tracking-wider font-semibold">
              設備與方案
            </span>
            <button
              onClick={() => onNavigate('machinery-catalogue')}
              className="text-left text-[13px] text-[#b9cacb] hover:text-[#00f0ff] transition-colors cursor-pointer"
            >
              全電型吹瓶機 (E-Series)
            </button>
            <button
              onClick={() => onNavigate('machinery-catalogue')}
              className="text-left text-[13px] text-[#b9cacb] hover:text-[#00f0ff] transition-colors cursor-pointer"
            >
              大容量包裝設備 (G-Series)
            </button>
            <button
              onClick={() => onNavigate('machinery-catalogue')}
              className="text-left text-[13px] text-[#b9cacb] hover:text-[#00f0ff] transition-colors cursor-pointer"
            >
              整廠智能包裝系統
            </button>
            <button
              onClick={() => onNavigate('bento')}
              className="text-left text-[13px] text-[#b9cacb] hover:text-[#00f0ff] transition-colors cursor-pointer"
            >
              客製瓶型模具開發
            </button>
          </div>

          {/* Global Hubs */}
          <div className="flex flex-col gap-3">
            <span className="font-['JetBrains_Mono'] text-[11px] uppercase text-[#e0e2eb] tracking-wider font-semibold">
              全球服務據點
            </span>
            <div className="text-[13px] text-[#b9cacb] flex flex-col gap-1.5">
              <span>亞洲營運總部 (臺灣 / 臺中)</span>
              <span>歐洲聯絡處 (德國 / 杜塞道夫)</span>
              <span>美洲支援中心 (美國 / 芝加哥)</span>
              <span className="text-[#00dbe9] font-medium pt-1">服務全球 42+ 國家與地區</span>
            </div>
          </div>

          {/* Language & Contact */}
          <div className="flex flex-col gap-3">
            <span className="font-['JetBrains_Mono'] text-[11px] uppercase text-[#e0e2eb] tracking-wider font-semibold">
              語言 / 聯繫
            </span>

            {/* Language Selector Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#1d2026] border border-[#3b494b]/40 w-fit hover:border-[#00f0ff]/50 transition-colors cursor-pointer"
              >
                <Globe className="w-4 h-4 text-[#00dbe9]" />
                <span className="text-[13px] text-[#e0e2eb]">{currentLang}</span>
              </button>

              {langMenuOpen && (
                <div className="absolute bottom-full mb-2 left-0 w-44 rounded-xl bg-[#191c22] border border-[#3b494b] shadow-2xl p-1.5 z-20">
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setCurrentLang(lang);
                        setLangMenuOpen(false);
                      }}
                      className="w-full text-left px-3 py-1.5 rounded-lg text-[12px] flex items-center justify-between text-[#b9cacb] hover:text-[#00f0ff] hover:bg-[#272a31]"
                    >
                      <span>{lang}</span>
                      {currentLang === lang && <Check className="w-3.5 h-3.5 text-[#00f0ff]" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={onScrollToQuote}
              className="text-[13px] text-[#fe6b00] hover:underline mt-2 flex items-center gap-1 cursor-pointer font-medium"
            >
              <span>即時工程詢價支援</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Copyright & Disclaimers */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-['JetBrains_Mono'] text-[11px] text-[#849495]">
          <p>© 2024 KEEN PRO INDUSTRY CO., LTD. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => alert('隱私權政策：精普國際嚴格遵守 ISO/IEC 27001 與歐盟 GDPR 資訊隱私標準，詢價資料全程經 TLS 1.3 高強度加密保護。')}
              className="hover:text-[#e0e2eb] transition-colors cursor-pointer"
            >
              隱私權政策
            </button>
            <button
              onClick={() => alert('使用條款：本平台展示之 PET 吹瓶機械設備專利、CAD 3D 模型與技術規格受專利法保護。')}
              className="hover:text-[#e0e2eb] transition-colors cursor-pointer"
            >
              使用條款
            </button>
            <button
              onClick={() => alert('技術專利公告：氣動共生循環系統 (專利號 M594831)、高同動旋轉合模總成 (專利號 I682847)。')}
              className="hover:text-[#e0e2eb] transition-colors cursor-pointer"
            >
              技術專利公告
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
