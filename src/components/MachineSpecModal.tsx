import React from 'react';
import { X, Check, Download, Layers, Activity, Cpu } from 'lucide-react';
import { ProductMachine } from '../types';

interface MachineSpecModalProps {
  product: ProductMachine | null;
  onClose: () => void;
  onRequestQuote: (productName: string) => void;
}

export const MachineSpecModal: React.FC<MachineSpecModalProps> = ({
  product,
  onClose,
  onRequestQuote,
}) => {
  if (!product) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-3xl rounded-3xl bg-[#141b2d] border border-[#00f0ff]/40 shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden relative my-8"
      >
        {/* Top glow */}
        <div className="h-1 bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent" />

        {/* Header */}
        <div className="p-6 sm:p-8 flex items-start justify-between border-b border-[#3b494b]/30">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-['JetBrains_Mono'] text-[11px] text-[#00dbe9] tracking-wider uppercase font-semibold">
                {product.series}
              </span>
              <span className="px-2 py-0.5 rounded-full bg-[#00f0ff]/10 text-[#00f0ff] text-[10px] font-mono">
                CAD APPROVED
              </span>
            </div>
            <h3 className="font-['Space_Grotesk'] text-[26px] sm:text-[30px] text-[#e0e2eb] font-bold mt-1">
              {product.name}
            </h3>
            <p className="text-[#b9cacb] text-[14px] mt-1 max-w-lg">
              {product.description}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-[#272a31] hover:bg-[#32353c] text-[#b9cacb] hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Image & Quick Highlight Banner */}
          <div className="relative rounded-2xl overflow-hidden aspect-[16/8] bg-[#0b0e14] border border-[#3b494b]/40">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e14] via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-[#0b0e14]/85 border border-[#3b494b] text-[#dbfcff] font-['JetBrains_Mono'] text-[12px]">
                {product.badge}
              </span>
              <div className="flex items-center gap-2 bg-[#00f0ff]/20 px-3 py-1 rounded-full backdrop-blur-md">
                <Activity className="w-3.5 h-3.5 text-[#00f0ff]" />
                <span className="font-['JetBrains_Mono'] text-[11px] text-[#00f0ff]">
                  MIL-STD COMPLIANT
                </span>
              </div>
            </div>
          </div>

          {/* Detailed Engineering Specifications Matrix */}
          <div>
            <h4 className="font-['Space_Grotesk'] text-[16px] text-[#e0e2eb] font-semibold mb-3 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-[#00f0ff]" />
              機電技術規格數據矩陣 (Engineering Specifications)
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[13px]">
              {product.detailedSpecs && (
                <>
                  <div className="p-3.5 rounded-xl bg-[#1d2026] border border-[#3b494b]/30 flex flex-col">
                    <span className="text-[#849495] font-['JetBrains_Mono'] text-[11px]">穴數與機構配置</span>
                    <span className="text-[#e0e2eb] font-medium mt-1">{product.detailedSpecs.cavities}</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#1d2026] border border-[#3b494b]/30 flex flex-col">
                    <span className="text-[#849495] font-['JetBrains_Mono'] text-[11px]">總裝機功耗與能效</span>
                    <span className="text-[#00f0ff] font-medium mt-1">{product.detailedSpecs.powerConsumption}</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#1d2026] border border-[#3b494b]/30 flex flex-col">
                    <span className="text-[#849495] font-['JetBrains_Mono'] text-[11px]">氣體回收率與專利</span>
                    <span className="text-[#e0e2eb] font-medium mt-1">{product.detailedSpecs.airRecoveryRate}</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#1d2026] border border-[#3b494b]/30 flex flex-col">
                    <span className="text-[#849495] font-['JetBrains_Mono'] text-[11px]">鎖模出力 / 伺服合模精度</span>
                    <span className="text-[#e0e2eb] font-medium mt-1">{product.detailedSpecs.clampingForce}</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#1d2026] border border-[#3b494b]/30 flex flex-col">
                    <span className="text-[#849495] font-['JetBrains_Mono'] text-[11px]">機台佔地與空間尺寸</span>
                    <span className="text-[#e0e2eb] font-medium mt-1">{product.detailedSpecs.dimensions}</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#1d2026] border border-[#3b494b]/30 flex flex-col">
                    <span className="text-[#849495] font-['JetBrains_Mono'] text-[11px]">適用瓶胚與牙口規格</span>
                    <span className="text-[#e0e2eb] font-medium mt-1">{product.detailedSpecs.applicablePreforms}</span>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Standard Key Points */}
          <div className="p-4 rounded-xl bg-[#191c22] border border-[#3b494b]/30 space-y-2">
            <div className="flex items-center gap-2 text-[13px] text-[#b9cacb]">
              <Check className="w-4 h-4 text-[#00f0ff] shrink-0" />
              <span>全機通過歐盟 CE 安全驗證與 ISO 9001:2015 國際品質管理體系</span>
            </div>
            <div className="flex items-center gap-2 text-[13px] text-[#b9cacb]">
              <Check className="w-4 h-4 text-[#00f0ff] shrink-0" />
              <span>支援 OPC UA / MQTT 工業物聯網協議，可直接與 MES / SCADA 無縫介接</span>
            </div>
            <div className="flex items-center gap-2 text-[13px] text-[#b9cacb]">
              <Check className="w-4 h-4 text-[#00f0ff] shrink-0" />
              <span>原廠提供 2 年機械與伺服電氣保固，全球外銷 50 國備品 48 小時直發</span>
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-6 bg-[#0b0e14] border-t border-[#3b494b]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-['JetBrains_Mono'] text-[12px] text-[#849495] flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#00dbe9]" />
            <span>CAD 3D STEP / DWG 規格圖檔就緒</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => {
                alert(`已將「${product.name}」完整技術參數資料包 (PDF/CAD) 下載至您的瀏覽器！`);
              }}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#272a31] hover:bg-[#32353c] text-[#e0e2eb] text-[13px] font-medium transition-colors cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>下載規格型錄 (PDF)</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onRequestQuote(product.name);
              }}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#00f0ff] hover:bg-[#7df4ff] text-[#00363a] text-[13px] font-bold shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all cursor-pointer"
            >
              <span>為此機種索取報價</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
