import React, { useState, useEffect, useRef } from 'react';
import { Leaf } from 'lucide-react';

export const BentoGallery: React.FC = () => {
  const [counts, setCounts] = useState({ years: 0, countries: 0, lines: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Animate counters smoothly
          const duration = 1400;
          const start = performance.now();

          const animate = (time: number) => {
            const progress = Math.min((time - start) / duration, 1);
            // Ease out cubic
            const ease = 1 - Math.pow(1 - progress, 3);

            setCounts({
              years: Math.floor(ease * 30),
              countries: Math.floor(ease * 50),
              lines: Math.floor(ease * 1200)
            });

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCounts({ years: 30, countries: 50, lines: 1200 });
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section id="bento" ref={containerRef} className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 py-16">
      {/* Header of Bento Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-8 h-0.5 bg-[#00f0ff]"></span>
            <span className="font-['JetBrains_Mono'] text-[11px] uppercase text-[#00dbe9] tracking-widest font-semibold">
              ENGINEERING METRICS
            </span>
          </div>
          <h2 className="font-['Space_Grotesk'] text-[28px] sm:text-[36px] lg:text-[40px] text-[#e0e2eb] mt-2 font-semibold tracking-tight">
            BENTO CRAFT GALLERY / 工藝精粹與數據實力
          </h2>
        </div>
        <p className="text-[#b9cacb] text-[14px] max-w-md leading-relaxed">
          精普從高精度模具研磨、伺服全電氣化機構，到智慧物聯網數位化整廠，將工藝轉化為極致量產數據。
        </p>
      </div>

      {/* Dynamic Asymmetric Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-6">
        {/* Card A: Span 8 Cols - Automated High-Speed Bottling Packaging Line */}
        <div className="lg:col-span-8 rounded-2xl overflow-hidden bg-[#1d2026] border border-[#3b494b]/40 shadow-xl relative group flex flex-col justify-end min-h-[380px]">
          <img
            alt="Automated High Speed Beverage Bottling Line"
            className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_861MTyb-I-HRUNKfFX4PbhlRwTTINwBHCSIDe86FrE1alPm5AsD24t0iH_UCE2Q1p1dThxpjkojyqstRf6QSdXrnzCiqhpKPItH8DMktFqx49ktwJmhFr_2Vyi_TLnOf5K6IbwqG0tmARsE5gnDxMsudFpgFGMzZtsGfOWAViWjRW43c_lIFzQojHBE1_Qv4NUVKoHcSLZci2hYhaSDoki6bOKZCu-MPsOqf7lY2eFXzZsHLUPFc"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e14] via-[#0b0e14]/65 to-transparent"></div>

          <div className="relative z-10 p-8 flex flex-col gap-3">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="px-3 py-1 rounded-full bg-[#00f0ff]/20 border border-[#00f0ff]/30 backdrop-blur-md text-[#dbfcff] font-['JetBrains_Mono'] text-[11px] uppercase tracking-wider font-medium">
                HIGH-OUTPUT TURNKEY
              </span>
              <span className="px-3 py-1 rounded-full bg-[#32353c]/80 border border-[#849495]/20 backdrop-blur-md text-[#e0e2eb] font-['JetBrains_Mono'] text-[11px]">
                99.8% OEE LINE SYNCHRONIZATION
              </span>
            </div>
            <h3 className="font-['Space_Grotesk'] text-[24px] sm:text-[30px] text-[#e0e2eb] font-semibold">
              極速產能 每小時 12,000 ~ 24,000 瓶
            </h3>
            <p className="text-[#b9cacb] text-[15px] max-w-xl leading-relaxed">
              機械手無縫同步追蹤入胚、吹脹、高壓氣體循環回收與自動下瓶裝箱，達成整廠全流程無人化連續運轉標準。
            </p>
          </div>
        </div>

        {/* Card B: Span 4 Cols - Animated Stat Counter Card */}
        <div className="lg:col-span-4 rounded-2xl p-8 bg-[#272a31] border border-[#3b494b]/50 shadow-xl flex flex-col justify-between relative overflow-hidden">
          <div className="absolute -right-8 -top-8 w-40 h-40 rounded-full bg-[#00f0ff]/10 blur-2xl pointer-events-none"></div>

          <div>
            <span className="font-['JetBrains_Mono'] text-[11px] text-[#00dbe9] uppercase tracking-wider font-semibold">
              MILESTONES & HERITAGE
            </span>
            <h4 className="font-['Space_Grotesk'] text-[22px] text-[#e0e2eb] font-semibold mt-2">
              三十年精密底蘊
            </h4>
          </div>

          <div className="space-y-6 my-6">
            {/* Stat 1 */}
            <div>
              <div className="flex items-baseline justify-between mb-2">
                <div>
                  <span className="font-['JetBrains_Mono'] text-[32px] text-[#e0e2eb] font-bold">
                    {counts.years}
                  </span>
                  <span className="font-['JetBrains_Mono'] text-[20px] text-[#00dbe9] font-bold">
                    + 年
                  </span>
                </div>
                <span className="text-[13px] text-[#b9cacb]">工藝沉澱 (Engineering)</span>
              </div>
              <div className="w-full bg-[#32353c] h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-[#00f0ff] h-full rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${(counts.years / 30) * 85}%` }}
                ></div>
              </div>
            </div>

            {/* Stat 2 */}
            <div>
              <div className="flex items-baseline justify-between mb-2">
                <div>
                  <span className="font-['JetBrains_Mono'] text-[32px] text-[#e0e2eb] font-bold">
                    {counts.countries}
                  </span>
                  <span className="font-['JetBrains_Mono'] text-[20px] text-[#fe6b00] font-bold">
                    + 國
                  </span>
                </div>
                <span className="text-[13px] text-[#b9cacb]">全球外銷佈局 (Countries)</span>
              </div>
              <div className="w-full bg-[#32353c] h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-[#fe6b00] h-full rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${(counts.countries / 50) * 92}%` }}
                ></div>
              </div>
            </div>

            {/* Stat 3 */}
            <div>
              <div className="flex items-baseline justify-between mb-2">
                <div>
                  <span className="font-['JetBrains_Mono'] text-[32px] text-[#e0e2eb] font-bold">
                    {counts.lines.toLocaleString()}
                  </span>
                  <span className="font-['JetBrains_Mono'] text-[20px] text-[#dbfcff] font-bold">
                    + 線
                  </span>
                </div>
                <span className="text-[13px] text-[#b9cacb]">交付運轉產線 (Deployments)</span>
              </div>
              <div className="w-full bg-[#32353c] h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-[#7df4ff] h-full rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${(counts.lines / 1200) * 78}%` }}
                ></div>
              </div>
            </div>
          </div>

          <div className="pt-4 flex items-center justify-between text-[#849495] font-['JetBrains_Mono'] text-[11px] border-t border-[#3b494b]/30">
            <span>GLOBAL INDUSTRIAL HUBS</span>
            <span className="text-[#00f0ff] font-semibold">TAIWAN · GERMANY · USA</span>
          </div>
        </div>

        {/* Card C: Span 4 Cols - Eco-Air Recovery & Servo Synergy Pulse Card */}
        <div className="lg:col-span-4 rounded-2xl p-8 bg-[#1d2026] border border-[#3b494b]/40 shadow-xl flex flex-col justify-between relative overflow-hidden group">
          <div className="flex items-start justify-between">
            <div className="p-3 rounded-xl bg-[#32353c] text-[#00f0ff]">
              <Leaf className="w-7 h-7" />
            </div>
            <span className="px-3 py-1 rounded-full bg-[#fe6b00]/20 border border-[#fe6b00]/30 text-[#fe6b00] font-['JetBrains_Mono'] text-[11px] font-semibold">
              ESG SUSTAINABILITY
            </span>
          </div>

          <div className="my-6">
            <span className="font-['JetBrains_Mono'] text-[11px] text-[#849495] uppercase tracking-wider">
              ECO-SERVO PULSE
            </span>
            <h4 className="font-['Space_Grotesk'] text-[22px] text-[#e0e2eb] font-semibold mt-1">
              氣動與全電共生架構
            </h4>
            <p className="text-[#b9cacb] text-[13px] sm:text-[14px] mt-3 leading-relaxed">
              獨家多級氣體再生專利回收吹瓶排出之 40 bar 高壓氣體，導入預吹及氣動輔助迴路，直接降低整廠 45% 碳足跡與 30% 電能損耗。
            </p>
          </div>

          {/* Inline SVG Eco Pulse Wave Visualization */}
          <div className="w-full h-20 bg-[#0b0e14] border border-[#3b494b]/30 rounded-xl p-3 flex items-center justify-center overflow-hidden">
            <svg className="w-full h-full text-[#00f0ff]" fill="none" preserveAspectRatio="none" viewBox="0 0 300 60">
              <path
                d="M0 30 Q30 5, 60 30 T120 30 T180 15 T240 45 T300 30"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2.5"
              />
              <path
                d="M0 30 Q30 5, 60 30 T120 30 T180 15 T240 45 T300 30 L300 60 L0 60 Z"
                fill="currentColor"
                fillOpacity="0.12"
              />
            </svg>
          </div>
        </div>

        {/* Card D: Span 4 Cols - CNC Precision Mold Cavities */}
        <div className="lg:col-span-4 rounded-2xl overflow-hidden bg-[#1d2026] border border-[#3b494b]/40 shadow-xl relative group flex flex-col justify-end min-h-[340px]">
          <img
            alt="High Precision CNC Machined Metal Aluminum Alloy Mold"
            className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwO9mVuclx8oC_rOMK1zA3bOdoRTSjgP9lm2n7H53MuZGTPqL_-pTg713NxdLVSYmMxErKd8l6AbLzGCgW7L7cF1sSzynX2_cbvEzd_lQGi8aVaFaKTqbncOac76ABofMGqcDzKh49QCzARpGV327nIEF5WCk-AQjixbzz2HGitHAMCuKHdjZ9tARxEox3oxLuO-WbKCjTfUgDZ04-npFzmSYoUfnPcTr7pfGPi6SPHWYZPzG5SlU-"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e14] via-[#0b0e14]/70 to-transparent"></div>

          <div className="relative z-10 p-6 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#fe6b00]"></span>
              <span className="font-['JetBrains_Mono'] text-[11px] text-[#ffdbcc] uppercase tracking-wider font-medium">
                AEROSPACE ALLOY 7075-T6
              </span>
            </div>
            <h4 className="font-['Space_Grotesk'] text-[22px] text-[#e0e2eb] font-semibold">
              ±0.005mm 航太級模具加工
            </h4>
            <p className="text-[#b9cacb] text-[13px] leading-relaxed">
              五軸極限雕銑與專利快速卡扣換模機構，15 分鐘內完成全機換線，支援輕量化超薄壁瓶身成型。
            </p>
          </div>
        </div>

        {/* Card E: Span 4 Cols - Product Application Showcase */}
        <div className="lg:col-span-4 rounded-2xl overflow-hidden bg-[#1d2026] border border-[#3b494b]/40 shadow-xl relative group flex flex-col justify-end min-h-[340px]">
          <img
            alt="Array of crystal clear elegant design PET bottles"
            className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgJBzpoWgKhs11xVWqS5GF1fItto_fXN8XEdMUtCbZDiPne6Lama3axyqxz5Ls0z5CS9X9asUfGPQyUBmgpIewQq0LritGR1ApKLGgYXZufL_s63vYXZY_ZIWwm0M0QbfpwhnaUNEwyBHmV6Mp4-ckhOY9xtUoPeIPAbbKi5BjJk9rmAHPTQ2pFk7Io27ksSndNiMnftu80uxJEdNL9JiQ1MRQKJ-tzx2kuTIhjMHul_vvDl80VDUi"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e14] via-[#0b0e14]/70 to-transparent"></div>

          <div className="relative z-10 p-6 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00f0ff]"></span>
              <span className="font-['JetBrains_Mono'] text-[11px] text-[#00dbe9] uppercase tracking-wider font-medium">
                APPLICATION SPECTRUM
              </span>
            </div>
            <h4 className="font-['Space_Grotesk'] text-[22px] text-[#e0e2eb] font-semibold">
              多元包裝工藝呈現
            </h4>
            <p className="text-[#b9cacb] text-[13px] leading-relaxed">
              無瑕晶瑩穿透度，廣泛涵蓋：高端天然礦泉水、高阻隔氣泡碳酸飲料、冷壓果汁、奢華化妝品與無菌醫藥安瓶。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
