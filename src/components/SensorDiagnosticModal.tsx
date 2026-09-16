import React, { useState } from 'react';
import { X, Activity, CheckCircle2, RefreshCw, Thermometer, Gauge, Zap } from 'lucide-react';

interface SensorDiagnosticModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SensorDiagnosticModal: React.FC<SensorDiagnosticModalProps> = ({ isOpen, onClose }) => {
  const [isCalibrating, setIsCalibrating] = useState(false);
  const [statusMessage, setStatusMessage] = useState('熱溫控閉迴路即時補償已啟動 (P.I.D. Sync OK)');

  if (!isOpen) return null;

  const handleRecalibrate = () => {
    setIsCalibrating(true);
    setStatusMessage('正在進行伺服壓力零點校準與紅外線測溫補償...');
    setTimeout(() => {
      setIsCalibrating(false);
      setStatusMessage('校準完成！熱溫差穩定在 ±0.3°C，符合航太級吹瓶公差規範。');
    }, 900);
  };

  const cavities = [
    { id: '#01', temp: 112.4, status: 'PASS', variance: '+0.1°C' },
    { id: '#02', temp: 112.6, status: 'PASS', variance: '+0.3°C' },
    { id: '#03', temp: 112.2, status: 'PASS', variance: '-0.1°C' },
    { id: '#04', temp: 112.5, status: 'ACTIVE PASS', variance: '0.0°C', highlight: true },
    { id: '#05', temp: 112.3, status: 'PASS', variance: '-0.2°C' },
    { id: '#06', temp: 112.7, status: 'PASS', variance: '+0.4°C' },
    { id: '#07', temp: 112.1, status: 'PASS', variance: '-0.3°C' },
    { id: '#08', temp: 112.5, status: 'PASS', variance: '0.0°C' },
  ];

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-2xl rounded-3xl bg-[#141b2d] border border-[#fe6b00]/50 shadow-[0_0_60px_rgba(254,107,0,0.25)] overflow-hidden relative my-6"
      >
        {/* Top orange glow */}
        <div className="h-1 bg-gradient-to-r from-transparent via-[#fe6b00] to-transparent" />

        {/* Header */}
        <div className="p-6 sm:p-8 flex items-start justify-between border-b border-[#3b494b]/30">
          <div>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#fe6b00] opacity-80"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#fe6b00]"></span>
              </span>
              <span className="font-['JetBrains_Mono'] text-[11px] text-[#fe6b00] tracking-wider uppercase font-semibold">
                DIAGNOSTIC TELEMETRY NODE
              </span>
            </div>
            <h3 className="font-['Space_Grotesk'] text-[24px] text-[#e0e2eb] font-bold mt-1">
              CAVITY SENSOR #04: THERMAL SYNC PASS
            </h3>
            <p className="text-[#b9cacb] text-[13px] mt-1">
              雙向紅外線測溫儀與模內熱電偶即時遙測分析
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-[#272a31] hover:bg-[#32353c] text-[#b9cacb] hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Top Quick Metrics */}
          <div className="grid grid-cols-3 gap-3">
            <div className="p-4 rounded-2xl bg-[#0b0e14] border border-[#3b494b]/40">
              <div className="flex items-center gap-1.5 text-[#849495] font-mono text-[11px]">
                <Thermometer className="w-3.5 h-3.5 text-[#fe6b00]" />
                <span>模穴即時溫度</span>
              </div>
              <div className="font-mono text-[22px] font-bold text-[#e0e2eb] mt-1">
                112.5 <span className="text-[12px] font-normal text-[#fe6b00]">°C</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#0b0e14] border border-[#3b494b]/40">
              <div className="flex items-center gap-1.5 text-[#849495] font-mono text-[11px]">
                <Gauge className="w-3.5 h-3.5 text-[#00f0ff]" />
                <span>高壓吹脹壓力</span>
              </div>
              <div className="font-mono text-[22px] font-bold text-[#00f0ff] mt-1">
                40.2 <span className="text-[12px] font-normal text-[#b9cacb]">BAR</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#0b0e14] border border-[#3b494b]/40">
              <div className="flex items-center gap-1.5 text-[#849495] font-mono text-[11px]">
                <Zap className="w-3.5 h-3.5 text-[#7df4ff]" />
                <span>熱平衡評級</span>
              </div>
              <div className="font-mono text-[22px] font-bold text-[#7df4ff] mt-1">
                99.9% <span className="text-[12px] font-normal text-[#849495]">SYNC</span>
              </div>
            </div>
          </div>

          {/* 8-Cavity Temperature Synchronicity Grid */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="font-['Space_Grotesk'] text-[14px] text-[#e0e2eb] font-medium">
                8 穴同步熱場均勻度分佈 (Cavity Thermal Heat Map)
              </span>
              <span className="font-mono text-[11px] text-[#00dbe9]">±0.4°C 工差管制內</span>
            </div>

            <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
              {cavities.map((c) => (
                <div
                  key={c.id}
                  className={`p-2.5 rounded-xl text-center border font-mono transition-all ${
                    c.highlight
                      ? 'bg-[#fe6b00]/15 border-[#fe6b00] ring-1 ring-[#fe6b00]/50'
                      : 'bg-[#191c22] border-[#3b494b]/30'
                  }`}
                >
                  <div className="text-[11px] text-[#849495] font-semibold">{c.id}</div>
                  <div className={`text-[13px] font-bold my-0.5 ${c.highlight ? 'text-[#fe6b00]' : 'text-[#e0e2eb]'}`}>
                    {c.temp}°
                  </div>
                  <div className="text-[10px] text-[#00dbe9]">{c.variance}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Status Bar */}
          <div className="p-3.5 rounded-xl bg-[#191c22] border border-[#3b494b]/40 flex items-center justify-between text-[13px]">
            <div className="flex items-center gap-2 text-[#b9cacb]">
              <CheckCircle2 className="w-4 h-4 text-[#00f0ff] shrink-0" />
              <span>{statusMessage}</span>
            </div>
            <button
              onClick={handleRecalibrate}
              disabled={isCalibrating}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#272a31] hover:bg-[#32353c] text-[#00f0ff] font-mono text-[11px] cursor-pointer transition-colors shrink-0 disabled:opacity-50"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isCalibrating ? 'animate-spin' : ''}`} />
              <span>重新校正</span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 bg-[#0b0e14] border-t border-[#3b494b]/30 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-[#32353c] hover:bg-[#363940] text-[#e0e2eb] text-[13px] font-medium transition-colors cursor-pointer"
          >
            關閉遙測面版
          </button>
        </div>
      </div>
    </div>
  );
};
