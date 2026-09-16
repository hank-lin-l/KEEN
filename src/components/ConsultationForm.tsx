import React, { useState } from 'react';
import { Lock, Send, CheckCircle2, FileText, ArrowRight } from 'lucide-react';
import { InquiryFormData } from '../types';

interface ConsultationFormProps {
  initialNotes?: string;
  initialApplication?: string;
}

export const ConsultationForm: React.FC<ConsultationFormProps> = ({
  initialNotes = '',
  initialApplication = 'water'
}) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    application: initialApplication,
    targetOutput: '12000',
    notes: initialNotes
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRefNumber, setSubmittedRefNumber] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const randomRef = `KP-RFQ-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmittedRefNumber(randomRef);
    }, 800);
  };

  return (
    <section id="quote-section" className="relative w-full max-w-6xl mx-auto px-6 lg:px-12 py-24">
      <div className="relative rounded-3xl bg-[#1d2026] border border-[#3b494b]/40 p-8 lg:p-16 shadow-2xl overflow-hidden">
        {/* Top Subtle Cyan Glow Edge */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent"></div>
        <div className="absolute -right-24 -bottom-24 w-96 h-96 bg-[#00f0ff]/5 rounded-full blur-3xl pointer-events-none"></div>

        {/* Section Heading */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#00f0ff] shadow-[0_0_6px_#00f0ff]"></span>
              <span className="font-['JetBrains_Mono'] text-[11px] uppercase text-[#00dbe9] tracking-widest font-semibold">
                CUSTOM ENGINEERING CONSULTATION
              </span>
            </div>
            <h2 className="font-['Space_Grotesk'] text-[28px] sm:text-[36px] lg:text-[40px] text-[#e0e2eb] font-semibold mt-3 tracking-tight">
              啟動產線客製規劃
            </h2>
            <p className="text-[#b9cacb] text-[15px] mt-2 max-w-lg leading-relaxed">
              請輸入您的預期產能指標與瓶型用途，精普國際工程顧問小組將於 24 小時內為您評估機電配比與 3D 產線配置 CAD 初步方案。
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end gap-1 font-['JetBrains_Mono'] text-[11px] text-[#849495]">
            <span>FAST TRACK DISPATCH</span>
            <span className="text-[#00f0ff] font-semibold">
              DIRECT ROUTE: ENGINEERING HEADQUARTERS
            </span>
          </div>
        </div>

        {submittedRefNumber ? (
          /* Submission Success State */
          <div className="p-8 rounded-2xl bg-[#191c22] border border-[#00f0ff]/40 flex flex-col items-center text-center animate-in fade-in duration-300">
            <div className="w-16 h-16 rounded-full bg-[#00f0ff]/20 text-[#00f0ff] flex items-center justify-center mb-4">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3 className="font-['Space_Grotesk'] text-[24px] text-[#e0e2eb] font-bold">
              客製諮詢需求已成功送達
            </h3>
            <p className="text-[#b9cacb] text-[15px] max-w-lg mt-2">
              精普國際工程顧問小組已接收您的規格配置，系統已指派專案工程處協理在 24 小時內發送初步 CAD 產線空間評估與報價方案。
            </p>

            <div className="my-6 p-4 rounded-xl bg-[#0b0e14] border border-[#3b494b]/50 w-full max-w-md text-left font-['JetBrains_Mono'] text-[13px] space-y-2">
              <div className="flex justify-between">
                <span className="text-[#849495]">詢價工單號 (Ref ID):</span>
                <span className="text-[#00f0ff] font-bold">{submittedRefNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#849495]">送出時間 (Timestamp):</span>
                <span className="text-[#e0e2eb]">{new Date().toLocaleString('zh-TW')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#849495]">指定用途:</span>
                <span className="text-[#00dbe9]">{formData.application}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => setSubmittedRefNumber(null)}
                className="px-6 py-2.5 rounded-full bg-[#32353c] hover:bg-[#363940] text-[#e0e2eb] text-[13px] font-medium transition-colors cursor-pointer"
              >
                再填寫另一筆詢價
              </button>
            </div>
          </div>
        ) : (
          /* Luxury Underline Input Grid Form */
          <form onSubmit={handleSubmit} className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {/* Full Name */}
              <div className="flex flex-col gap-1.5">
                <label className="font-['JetBrains_Mono'] text-[11px] text-[#b9cacb] uppercase tracking-wider">
                  姓名 (Full Name) & 職稱 (Designation)
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="例如：張力行 廠務協理"
                  className="w-full bg-transparent py-3 text-[#e0e2eb] text-[15px] placeholder:text-[#849495] focus:outline-none transition-colors border-b border-[#32353c] focus:border-[#00f0ff]"
                />
              </div>

              {/* Enterprise Name */}
              <div className="flex flex-col gap-1.5">
                <label className="font-['JetBrains_Mono'] text-[11px] text-[#b9cacb] uppercase tracking-wider">
                  公司名稱 (Enterprise Name)
                </label>
                <input
                  type="text"
                  required
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  placeholder="例如：晶源頂級礦泉水股份有限公司"
                  className="w-full bg-transparent py-3 text-[#e0e2eb] text-[15px] placeholder:text-[#849495] focus:outline-none transition-colors border-b border-[#32353c] focus:border-[#00f0ff]"
                />
              </div>

              {/* Corporate Email */}
              <div className="flex flex-col gap-1.5">
                <label className="font-['JetBrains_Mono'] text-[11px] text-[#b9cacb] uppercase tracking-wider">
                  商業電子郵箱 (Corporate Email)
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@company.com"
                  className="w-full bg-transparent py-3 text-[#e0e2eb] text-[15px] placeholder:text-[#849495] focus:outline-none transition-colors border-b border-[#32353c] focus:border-[#00f0ff]"
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-1.5">
                <label className="font-['JetBrains_Mono'] text-[11px] text-[#b9cacb] uppercase tracking-wider">
                  聯繫電話 (Phone / WhatsApp)
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+886 4 2359 xxxx"
                  className="w-full bg-transparent py-3 text-[#e0e2eb] text-[15px] placeholder:text-[#849495] focus:outline-none transition-colors border-b border-[#32353c] focus:border-[#00f0ff]"
                />
              </div>

              {/* Bottle Type Selector */}
              <div className="flex flex-col gap-1.5">
                <label className="font-['JetBrains_Mono'] text-[11px] text-[#b9cacb] uppercase tracking-wider">
                  預計瓶型與用途 (Application)
                </label>
                <select
                  value={formData.application}
                  onChange={(e) => setFormData({ ...formData, application: e.target.value })}
                  className="w-full bg-[#1d2026] py-3 text-[#e0e2eb] text-[15px] focus:outline-none border-b border-[#32353c] focus:border-[#00f0ff] cursor-pointer"
                >
                  <option value="water">天然純水 / 礦泉水瓶 (Mineral Water)</option>
                  <option value="csd">含氣碳酸飲料瓶 (Carbonated Soft Drink)</option>
                  <option value="hotfill">茶飲 / 耐熱充填瓶 (Hot Fill Juice & Tea)</option>
                  <option value="cosmetics">化妝品精華液 / 高光瓶 (Cosmetics & Perfume)</option>
                  <option value="pharma">醫療級無菌安瓶 / 滴劑瓶 (Pharma & Biotech)</option>
                  <option value="wide">廣口大容量食品罐 (Wide Mouth Jar)</option>
                </select>
              </div>

              {/* Target Output */}
              <div className="flex flex-col gap-1.5">
                <label className="font-['JetBrains_Mono'] text-[11px] text-[#b9cacb] uppercase tracking-wider">
                  需求產能目標 (Target Output / BPH)
                </label>
                <select
                  value={formData.targetOutput}
                  onChange={(e) => setFormData({ ...formData, targetOutput: e.target.value })}
                  className="w-full bg-[#1d2026] py-3 text-[#e0e2eb] text-[15px] focus:outline-none border-b border-[#32353c] focus:border-[#00f0ff] cursor-pointer"
                >
                  <option value="2000">2,000 ~ 4,000 瓶/小時 (入門/客製樣品)</option>
                  <option value="6000">6,000 ~ 9,000 瓶/小時 (中型自動化)</option>
                  <option value="12000">12,000 ~ 18,000 瓶/小時 (高速量產線)</option>
                  <option value="24000">20,000 ~ 24,000+ 瓶/小時 (旗艦極速旋轉線)</option>
                </select>
              </div>
            </div>

            {/* Memo & Requirements */}
            <div className="flex flex-col gap-1.5">
              <label className="font-['JetBrains_Mono'] text-[11px] text-[#b9cacb] uppercase tracking-wider">
                技術需求備註 / 索取型錄內容 (Technical Notes / Inquiries)
              </label>
              <textarea
                rows={3}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="請簡述您的既有產線空間、預算或需要索取的指定型錄 PDF..."
                className="w-full bg-transparent py-3 text-[#e0e2eb] text-[15px] placeholder:text-[#849495] focus:outline-none transition-colors border-b border-[#32353c] focus:border-[#00f0ff]"
              ></textarea>
            </div>

            {/* Submit & Security Info */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-2 text-[#849495] font-['JetBrains_Mono'] text-[11px]">
                <Lock className="w-4 h-4 text-[#00dbe9]" />
                <span>DATA ENCRYPTED VIA TLS 1.3 · STRICT CONFIDENTIALITY</span>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full bg-[#00f0ff] text-[#00363a] text-[14px] font-bold shadow-[0_0_30px_rgba(0,240,255,0.4)] hover:shadow-[0_0_45px_rgba(0,240,255,0.65)] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer disabled:opacity-50"
              >
                <span>
                  {isSubmitting ? '正在傳送加密工單...' : 'REQUEST PROPOSAL & CAD DRAWINGS'}
                </span>
                <Send className="w-5 h-5" />
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
