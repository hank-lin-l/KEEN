import React, { useState, useEffect } from 'react';
import { PlayCircle, Cpu, Activity, Gauge } from 'lucide-react';

interface HeroProps {
  onExploreMachines: () => void;
  onConsultation: () => void;
  onOpenSensorModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreMachines,
  onConsultation,
  onOpenSensorModal
}) => {
  // Real-time telemetry micro fluctuations for realistic industrial feedback
  const [pressure, setPressure] = useState(40.2);
  const [isLiveStream, setIsLiveStream] = useState(true);
  const [cycleSpeed, setCycleSpeed] = useState(1.82);

  useEffect(() => {
    if (!isLiveStream) return;
    const interval = setInterval(() => {
      // Subtle realistic servo oscillation
      const delta = (Math.random() - 0.5) * 0.15;
      setPressure((prev) => +(prev + delta).toFixed(1));
      if (Math.random() > 0.6) {
        setCycleSpeed((prev) => +(1.80 + Math.random() * 0.04).toFixed(2));
      }
    }, 2400);

    return () => clearInterval(interval);
  }, [isLiveStream]);

  return (
    <section id="hero" className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 pt-8 lg:pt-14 pb-24 flex flex-col items-center">
      {/* Top Status Capsule Badge */}
      <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-[#1d2026]/90 border border-[#3b494b]/40 backdrop-blur-xl shadow-xl">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f0ff] opacity-80"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00f0ff]"></span>
        </span>
        <span className="font-['JetBrains_Mono'] text-[11px] text-[#dbfcff] uppercase tracking-widest font-semibold">
          NEXT-GEN INDUSTRIAL REVOLUTION · 次世代極速智慧吹瓶系統
        </span>
        <span className="font-['JetBrains_Mono'] text-[11px] text-[#849495] font-normal hidden sm:inline">
          | MIL-STD TOLERANCE
        </span>
      </div>

      {/* Main Headline with Shimmer Depth */}
      <div className="text-center mt-8 max-w-5xl">
        <h1 className="font-['Space_Grotesk'] text-[36px] sm:text-[46px] lg:text-[56px] font-bold tracking-tight text-[#e0e2eb] leading-tight">
          重構 PET 吹瓶工藝極限
          <span className="block mt-2 bg-gradient-to-r from-[#7df4ff] via-[#00f0ff] to-[#ffb693] bg-clip-text text-transparent italic">
            Redefining Blow Molding Precision
          </span>
        </h1>
        <p className="mt-6 text-[#b9cacb] text-[16px] sm:text-[18px] max-w-3xl mx-auto leading-relaxed">
          精普國際融合 30+ 年精密機械工程與 Industry 4.0 智慧聯網，為全球頂級飲品、日化與生醫包裝巨頭打造每小時突破 24,000 瓶的高效節能吹瓶整合產線。
        </p>
      </div>

      {/* Hero Action Buttons */}
      <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
        <button
          onClick={onExploreMachines}
          className="relative group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#00f0ff] text-[#00363a] text-[14px] font-bold shadow-[0_0_35px_rgba(0,240,255,0.4)] hover:shadow-[0_0_50px_rgba(0,240,255,0.7)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
        >
          <span>探索旗艦機種 (Explore Machines)</span>
          <Cpu className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>

        <button
          onClick={onConsultation}
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#272a31]/60 border border-[#3b494b]/40 backdrop-blur-md text-[#e0e2eb] text-[14px] font-medium hover:bg-[#32353c] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
        >
          <PlayCircle className="w-5 h-5 text-[#fe6b00]" />
          <span>預約模具客製評估 (Custom Mold Consultation)</span>
        </button>
      </div>

      {/* Machine Viewport Showcase with Futuristic HUD Telemetry Nodes */}
      <div className="relative w-full mt-16 rounded-2xl overflow-hidden bg-[#0b0e14] border border-[#3b494b]/40 shadow-2xl group">
        {/* Background Machinery Image */}
        <div className="relative w-full aspect-[16/9] max-h-[640px] overflow-hidden">
          <img
            alt="KEEN PRO KP-SUPERIOR 8C Rotary Blow Molder"
            className="w-full h-full object-cover object-center transform transition-transform duration-1000 ease-out group-hover:scale-105"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuATjrGur1nvHLvKJQ4j7hPzbrkU74_x-QJ9RplK8SFFiw6-GctUwfi3ntHO6NSlitwI-g_3QjgH3hxzKm_Hd0w0SxwagK20-XI5yI-ohDIoqHqS_Atz1C9Ao0MQu9FN5J5Cb9Y2lxi3EE8cPPE4FF447-4dLUvSo-otK5RE_Rhfl2Y9HYgobUtk9yLS62_Za8Z50d5cYtHnLmxP9-ocVer879ZdB8EvRX5h127n_rBpYgG9XiH3e1Gk"
          />
          {/* Subtle Ambient Vignettes */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#10131a] via-[#10131a]/30 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#10131a]/70 via-transparent to-[#10131a]/50"></div>

          {/* Telemetry HUD Badge 1 (Top Left) */}
          <div className="absolute top-6 left-6 sm:top-8 sm:left-8 px-4 py-2.5 rounded-lg bg-[#0b0e14]/85 border border-[#3b494b]/50 backdrop-blur-xl flex flex-col gap-1 shadow-lg">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]"></span>
              <span className="font-['JetBrains_Mono'] text-[11px] text-[#849495] tracking-wider uppercase">
                UNIT IDENTIFIER
              </span>
            </div>
            <span className="font-['Space_Grotesk'] text-[16px] sm:text-[18px] text-[#e0e2eb] font-semibold tracking-tight">
              MODEL: KP-SUPERIOR 8C
            </span>
          </div>

          {/* Telemetry HUD Node 2 (Top Right - Pressure Metric) */}
          <div className="absolute top-6 right-6 sm:top-8 sm:right-8 px-5 py-3 rounded-lg bg-[#0b0e14]/85 border border-[#3b494b]/50 backdrop-blur-xl flex items-center gap-4 shadow-xl">
            <div className="p-2.5 rounded-md bg-[#272a31] text-[#00dbe9]">
              <Gauge className="w-5 h-5" />
            </div>
            <div>
              <div className="font-['JetBrains_Mono'] text-[10px] text-[#849495] uppercase tracking-wider">
                SERVO PRESSURE
              </div>
              <div className="font-['JetBrains_Mono'] text-[20px] text-[#dbfcff] font-bold">
                {pressure.toFixed(1)} <span className="text-xs font-normal text-[#b9cacb]">BAR</span>
              </div>
            </div>
          </div>

          {/* Floating Interactive Viewport Targeting Node (Center Bottom-Right) */}
          <button
            onClick={onOpenSensorModal}
            className="absolute bottom-28 right-8 sm:right-12 flex items-center gap-3 px-4 py-2 rounded-full bg-[#32353c]/85 hover:bg-[#32353c] border border-[#fe6b00]/60 backdrop-blur-md shadow-2xl transition-all hover:scale-105 cursor-pointer group/pin"
            title="點擊檢視熱影像感測儀與各穴溫差"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#fe6b00] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#fe6b00]"></span>
            </span>
            <span className="font-['JetBrains_Mono'] text-[11px] text-[#e0e2eb] font-semibold tracking-wide group-hover/pin:text-[#fe6b00] transition-colors">
              CAVITY SENSOR #04: THERMAL SYNC PASS
            </span>
            <span className="text-[10px] text-[#849495] bg-black/40 px-1.5 py-0.5 rounded border border-[#3b494b]">
              DIAGNOSE ↗
            </span>
          </button>

          {/* Bottom Telemetry Bar Overlay */}
          <div className="absolute bottom-0 inset-x-0 p-6 lg:p-8 bg-gradient-to-t from-[#10131a] via-[#0b0e14]/90 to-transparent flex flex-wrap items-center justify-between gap-6 border-t border-[#3b494b]/20">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full lg:w-auto">
              <div>
                <div className="font-['JetBrains_Mono'] text-[11px] text-[#849495] uppercase tracking-widest">
                  CYCLE SPEED
                </div>
                <div className="font-['JetBrains_Mono'] text-[20px] text-[#e0e2eb] font-bold">
                  {cycleSpeed.toFixed(2)}{' '}
                  <span className="text-xs font-normal text-[#00dbe9]">SEC/CYCLE</span>
                </div>
              </div>
              <div>
                <div className="font-['JetBrains_Mono'] text-[11px] text-[#849495] uppercase tracking-widest">
                  ENERGY SAVING
                </div>
                <div className="font-['JetBrains_Mono'] text-[20px] text-[#dbfcff] font-bold">
                  +32.4% <span className="text-xs font-normal text-[#b9cacb]">AIR RECYCLE</span>
                </div>
              </div>
              <div>
                <div className="font-['JetBrains_Mono'] text-[11px] text-[#849495] uppercase tracking-widest">
                  TOTAL EFFICIENCY
                </div>
                <div className="font-['JetBrains_Mono'] text-[20px] text-[#e0e2eb] font-bold">
                  99.85% <span className="text-xs font-normal text-[#fe6b00]">OEE RATING</span>
                </div>
              </div>
              <div>
                <div className="font-['JetBrains_Mono'] text-[11px] text-[#849495] uppercase tracking-widest">
                  MAX CAPACITY
                </div>
                <div className="font-['JetBrains_Mono'] text-[20px] text-[#00f0ff] font-bold">
                  24,000 <span className="text-xs font-normal text-[#b9cacb]">BPH</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsLiveStream(!isLiveStream)}
                className="px-3.5 py-1.5 rounded-full bg-[#272a31] hover:bg-[#32353c] border border-[#3b494b]/40 font-['JetBrains_Mono'] text-[11px] text-[#00dbe9] flex items-center gap-2 cursor-pointer transition-colors"
              >
                <Activity className={`w-3.5 h-3.5 ${isLiveStream ? 'animate-pulse text-[#00f0ff]' : 'text-gray-500'}`} />
                <span>{isLiveStream ? 'LIVE TELEMETRY STREAM' : 'STREAM PAUSED'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
