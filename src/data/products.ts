import { ProductMachine } from '../types';

export const PRODUCTS_DATA: ProductMachine[] = [
  {
    id: 'kp-rotary-12',
    name: 'KP-ROTARY 12',
    series: 'ROTARY SERIES',
    category: 'auto',
    badge: '全電伺服 / 旗艦旋轉式',
    badgeType: 'cyan',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATjrGur1nvHLvKJQ4j7hPzbrkU74_x-QJ9RplK8SFFiw6-GctUwfi3ntHO6NSlitwI-g_3QjgH3hxzKm_Hd0w0SxwagK20-XI5yI-ohDIoqHqS_Atz1C9Ao0MQu9FN5J5Cb9Y2lxi3EE8cPPE4FF447-4dLUvSo-otK5RE_Rhfl2Y9HYgobUtk9yLS62_Za8Z50d5cYtHnLmxP9-ocVer879ZdB8EvRX5h127n_rBpYgG9XiH3e1Gk',
    description: '針對超大型飲品工廠設計的旗艦連續旋轉式全電吹瓶系統，支援熱充填與無菌冷充填製程。',
    specs: [
      { label: '額定產能 (BPH)', value: '18,000 ~ 24,000', highlight: true, color: 'text-[#00f0ff]' },
      { label: '適用容量範圍', value: '200ml - 2,500ml' },
      { label: '合模伺服精度', value: '±0.01 mm', highlight: true, color: 'text-[#00dbe9]' }
    ],
    actionLabel: '查看技術規格書',
    detailedSpecs: {
      cavities: '12 穴連續旋轉吹脹單元',
      powerConsumption: '145 kW (節能伺服雙向饋電迴路)',
      airRecoveryRate: '42.8% (四級排氣多階回收專利)',
      clampingForce: '120 kN 獨立伺服肘節鎖模機構',
      dimensions: '7,800 × 4,200 × 3,100 mm',
      applicablePreforms: 'PCO 1810 / 1881 / 2925 / 38mm 寬口胚',
      servoControl: 'Beckhoff TwinCAT 3 奈秒級同動多軸運動控制器'
    }
  },
  {
    id: 'kp-linear-6',
    name: 'KP-LINEAR 6',
    series: 'LINEAR ECO SERIES',
    category: 'linear',
    badge: '小批量多樣化 / 低耗能',
    badgeType: 'orange',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgJBzpoWgKhs11xVWqS5GF1fItto_fXN8XEdMUtCbZDiPne6Lama3axyqxz5Ls0z5CS9X9asUfGPQyUBmgpIewQq0LritGR1ApKLGgYXZufL_s63vYXZY_ZIWwm0M0QbfpwhnaUNEwyBHmV6Mp4-ckhOY9xtUoPeIPAbbKi5BjJk9rmAHPTQ2pFk7Io27ksSndNiMnftu80uxJEdNL9JiQ1MRQKJ-tzx2kuTIhjMHul_vvDl80VDUi',
    description: '直列式高效六穴吹瓶機，佔地面積極小，適用於特殊造型化妝品瓶、洗沐用品與高阻隔食用油瓶。',
    specs: [
      { label: '額定產能 (BPH)', value: '7,200 ~ 9,000', highlight: true, color: 'text-[#00f0ff]' },
      { label: '適用容量範圍', value: '50ml - 1,500ml' },
      { label: '換模時間 (Rapid Swap)', value: '< 15 Mins', highlight: true, color: 'text-[#fe6b00]' }
    ],
    actionLabel: '查看技術規格書',
    detailedSpecs: {
      cavities: '6 穴直列同步拉伸單元',
      powerConsumption: '68 kW (紅外線近紅外雙溫區加熱爐)',
      airRecoveryRate: '35.6% (專利雙向回流閥門組)',
      clampingForce: '85 kN 雙伺服曲柄合模機構',
      dimensions: '4,600 × 2,400 × 2,300 mm',
      applicablePreforms: '化妝品特規牙口、日化壓泵牙、28/410、30/25',
      servoControl: 'Omron Sysmac 智慧自動化平台'
    }
  },
  {
    id: 'aeromold-matrix',
    name: 'AeroMold Matrix',
    series: 'PRECISION TOOLING',
    category: 'mold',
    badge: '航太級鍍層 / 300萬模保證',
    badgeType: 'orange',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwO9mVuclx8oC_rOMK1zA3bOdoRTSjgP9lm2n7H53MuZGTPqL_-pTg713NxdLVSYmMxErKd8l6AbLzGCgW7L7cF1sSzynX2_cbvEzd_lQGi8aVaFaKTqbncOac76ABofMGqcDzKh49QCzARpGV327nIEF5WCk-AQjixbzz2HGitHAMCuKHdjZ9tARxEox3oxLuO-WbKCjTfUgDZ04-npFzmSYoUfnPcTr7pfGPi6SPHWYZPzG5SlU-',
    description: '客製高強度鋁合金模具，配置獨立螺旋冷卻水道與排氣微孔技術，確保瓶底成型晶瑩平整與優異耐壓性。',
    specs: [
      { label: '加工公差 (Tolerance)', value: '±0.005 mm', highlight: true, color: 'text-[#00f0ff]' },
      { label: '模具壽命 (Life Cycle)', value: '> 3,000,000 模次' },
      { label: '表面處理技術', value: 'Hard Anodizing / TiN', highlight: true, color: 'text-[#00dbe9]' }
    ],
    actionLabel: '預約瓶型 3D 模擬',
    detailedSpecs: {
      cavities: '依客戶客製 (1 ~ 24 穴模組)',
      powerConsumption: '無需外部驅動 (相容各大國際吹瓶機夾具)',
      airRecoveryRate: '全通徑微孔奈米透氣鑲塊 (氣孔直徑 0.02mm)',
      clampingForce: '耐受 45 bar 高壓吹脹鎖定',
      dimensions: '依標準母模座 CAD 規格快速抽換',
      applicablePreforms: '超薄壁輕量瓶 (最薄壁厚 0.12mm) 至厚壁抗跌落瓶',
      servoControl: '模內內嵌 RFID 智慧模具週期追蹤晶片'
    }
  },
  {
    id: 'autorobo-turnkey',
    name: 'AutoRobo Turnkey',
    series: 'SMART FACTORY CELL',
    category: 'turnkey',
    badge: 'AI 視覺檢測 / 無人化裝箱',
    badgeType: 'cyan',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_861MTyb-I-HRUNKfFX4PbhlRwTTINwBHCSIDe86FrE1alPm5AsD24t0iH_UCE2Q1p1dThxpjkojyqstRf6QSdXrnzCiqhpKPItH8DMktFqx49ktwJmhFr_2Vyi_TLnOf5K6IbwqG0tmARsE5gnDxMsudFpgFGMzZtsGfOWAViWjRW43c_lIFzQojHBE1_Qv4NUVKoHcSLZci2hYhaSDoki6bOKZCu-MPsOqf7lY2eFXzZsHLUPFc',
    description: '結合吹瓶機、AI 視覺瓶口瑕疵辨識、伺服裝箱機與 AGV 自動搬運機器人的端到端全廠無人化製造單元。',
    specs: [
      { label: '瑕疵檢測速率', value: '28,000 瓶 / 小時', highlight: true, color: 'text-[#00f0ff]' },
      { label: '通訊協定標準', value: 'OPC UA / MQTT' },
      { label: '產線人力節省率', value: '-85% 人力負擔', highlight: true, color: 'text-[#00dbe9]' }
    ],
    actionLabel: '索取整廠規劃書',
    detailedSpecs: {
      cavities: '雙線並聯高速入胚與成品分揀單元',
      powerConsumption: '智慧負載動態平衡 (節峰填谷演算法)',
      airRecoveryRate: '整合空壓機房智慧壓力群控 (8 ~ 40 bar 階梯式)',
      clampingForce: '重載機器手臂 6 軸伺服定位 ±0.03mm',
      dimensions: '客製化工廠空間配置 (提供 3D 廠房模型佈局)',
      applicablePreforms: '支援多品種混合柔性自動化辨識',
      servoControl: 'KEEN PRO Cloud MES + 邊緣運算 AI 瑕疵辨識儀'
    }
  }
];
