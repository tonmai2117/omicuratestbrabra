import React, { useState, useEffect } from 'react';
import { flushSync } from 'react-dom';
import { 
  Users, UserMinus, UserCheck, AlertCircle, 
  Clock, Activity, Coins, ChevronRight, Info, User, ChevronDown
} from 'lucide-react';

export default function MedicalBrainDrainDashboard() {
  const [mounted, setMounted] = useState(false);
  const [activeResignYear, setActiveResignYear] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  
  // เพิ่ม State สำหรับจัดการลูป Animation ของ Waffle Chart
  const [pictoCycle, setPictoCycle] = useState('enter'); // 'enter' | 'leave' | 'reset'

  // Section 1 flow loop: 'enter' -> hold 20s -> 'leave' -> 'reset' -> 'enter' ...
  const [flowCycle, setFlowCycle] = useState('reset'); // 'enter' | 'leave' | 'reset'

  useEffect(() => {
    setMounted(true);
  }, []);

  // Loop control for Section 1 flow pipeline
  useEffect(() => {
    if (!isOpen) return;
    let timeout;
    if (flowCycle === 'enter') {
      // All boxes animated in — hold for 20 seconds then fade out
      timeout = setTimeout(() => setFlowCycle('leave'), 20000);
    } else if (flowCycle === 'leave') {
      // Fade-out takes ~1s, then reset
      timeout = setTimeout(() => setFlowCycle('reset'), 1200);
    } else if (flowCycle === 'reset') {
      // Brief pause then re-enter
      timeout = setTimeout(() => setFlowCycle('enter'), 150);
    }
    return () => clearTimeout(timeout);
  }, [flowCycle, isOpen]);

  const flowVisible = flowCycle === 'enter';

  // Re-animate Section 1 every time the dropdown opens
  const handleToggle = () => {
    const willOpen = !isOpen;
    if (willOpen) {
      flushSync(() => {
        setFlowCycle('reset');
        setPictoCycle('reset');
      });
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  // Effect สำหรับควบคุมลูปเวลาเข้า-ออก (วนลูปทุกปี)
  useEffect(() => {
    let timeout;
    if (pictoCycle === 'enter') {
      // แสดงผลครบทุกตัวแล้ว ค้างไว้ 4 วินาที ก่อนให้สีแดงออกจากระบบ
      timeout = setTimeout(() => setPictoCycle('leave'), 4000);
    } else if (pictoCycle === 'leave') {
      // ให้เวลาสีแดงขยับบินออกจากกรอบ 1.5 วินาที ก่อนรีเซ็ต
      timeout = setTimeout(() => setPictoCycle('reset'), 1500);
    } else if (pictoCycle === 'reset') {
      // รีเซ็ตทันที แล้วเริ่มรับแพทย์ลอตใหม่ (เข้าใหม่)
      timeout = setTimeout(() => setPictoCycle('enter'), 100);
    }
    return () => clearTimeout(timeout);
  }, [pictoCycle]);

  // ข้อมูลสถิติการลาออก
  const resignData = [
    { id: 'y1', label: 'แพทย์ใช้ทุนปี 1', count: 23, percent: 5, color: 'bg-emerald-400', hex: '#34d399', desc: 'น้อยที่สุด เพราะติดเงื่อนไขต้องผ่านการเพิ่มพูนทักษะ 1 ปี' },
    { id: 'y2', label: 'แพทย์ใช้ทุนปี 2', count: 188, percent: 41, color: 'bg-red-500', hex: '#ef4444', desc: 'มากที่สุด! พ้นภาระผูกพันเบื้องต้น ออกไปเรียนต่อเฉพาะทางหรือย้ายไปเอกชน' },
    { id: 'y3', label: 'แพทย์ใช้ทุนปี 3', count: 86, percent: 19, color: 'bg-orange-400', hex: '#fb923c', desc: 'กลุ่มที่กำลังจะจบการใช้ทุน' },
    { id: 'post', label: 'พ้นภาระใช้ทุนแล้ว', count: 158, percent: 35, color: 'bg-amber-400', hex: '#fbbf24', desc: 'กลุ่มที่อยู่มานานแต่ตัดสินใจลาออกในภายหลัง' },
  ];

  // คำนวณสัดส่วนสำหรับ Pictogram (จำลองแพทย์ 100 คน)
  const totalGrid = 100;
  const leaveCount = Math.round((655 / 1850) * 100); // ออกจากระบบ ~35 คน
  const stayCount = totalGrid - leaveCount; // คงอยู่ในระบบ ~65 คน

  return (
    <div className="bg-transparent p-4 md:p-8 font-sans text-slate-800">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <header 
          onClick={handleToggle}
          className="bg-slate-800/40 rounded-3xl p-8 shadow-sm border border-slate-700/60 text-center cursor-pointer hover:bg-slate-800/60 transition-colors relative group"
        >
          <div className="absolute right-8 top-1/2 -translate-y-1/2 p-2 bg-slate-700/30 rounded-full group-hover:bg-slate-700/60 transition-colors">
            <ChevronDown className={`w-6 h-6 text-slate-400 transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`} />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-yellow-400 flex items-center justify-center gap-3 pr-10 md:pr-0">
            สถานการณ์แพทย์ในระบบสาธารณสุขไทย
          </h1>
          <p className="text-slate-400 mt-2 text-sm md:text-base pr-10 md:pr-0">
            ภาพรวมการผลิต การจัดสรร และการสูญเสียบุคลากรทางการแพทย์ในแต่ละปี
          </p>
        </header>
        
        {/* Dropdown Content */}
        <div className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
          <div className="overflow-hidden">
            <div className="flex flex-col gap-6 pt-6">

        {/* Section 1: ภาพรวมการเข้า-ออกระบบ (Flow) */}
        <section className="bg-slate-800/40 rounded-3xl p-6 shadow-sm border border-slate-700/60">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-white">
            <Users className="text-blue-500" />
            1. ภาพรวมการไหลเวียนของแพทย์ (ต่อปี)
          </h2>
          
          <div className="relative">
            {/* Flow Pipeline */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 mt-8 mb-4">
              
              {/* Step 1: ผลิตรวม */}
              <div className="z-10 bg-slate-800/80 border-2 border-blue-500/30 rounded-xl p-4 w-full md:w-64 text-center shadow-sm relative group cursor-pointer hover:bg-slate-700 transition-all duration-700 ease-out"
                   style={{ opacity: flowVisible ? 1 : 0, transform: flowVisible ? 'translateX(0)' : 'translateX(-30px)', transitionDelay: '0ms' }}>
                <div className="text-blue-400 text-sm font-semibold mb-1">กำลังการผลิตรวม</div>
                <div className="text-3xl font-bold text-blue-500">~3,300</div>
                <div className="text-blue-400/80 text-xs">คน/ปี (รัฐ + เอกชน)</div>
              </div>

              {/* Arrow 1 */}
              <div className="hidden md:flex flex-1 items-center justify-center">
                <div className={`h-1 bg-blue-500/30 transition-all duration-700 ease-in-out ${flowVisible ? 'w-full' : 'w-0'}`} style={{ transitionDelay: '400ms' }}></div>
                <ChevronRight className="text-blue-500/50 -ml-2 transition-opacity duration-300" style={{ opacity: flowVisible ? 1 : 0, transitionDelay: '800ms' }} />
              </div>

              {/* Step 2: เข้าระบบ */}
              <div className="z-10 bg-slate-800/80 border-2 border-emerald-500/30 rounded-xl p-4 w-full md:w-64 text-center shadow-sm hover:bg-slate-700 transition-all duration-700 ease-out cursor-pointer"
                   style={{ opacity: flowVisible ? 1 : 0, transform: flowVisible ? 'translateX(0)' : 'translateX(-30px)', transitionDelay: '800ms' }}>
                <div className="text-emerald-400 text-sm font-semibold mb-1">จัดสรรเข้า กสธ.</div>
                <div className="text-3xl font-bold text-emerald-500">1,850</div>
                <div className="text-emerald-400/80 text-xs">คน/ปี (เฉลี่ย)</div>
              </div>

              {/* Arrow 2 */}
              <div className="hidden md:flex flex-1 items-center justify-center relative">
                <div className={`h-1 bg-slate-600/50 transition-all duration-700 ease-in-out ${flowVisible ? 'w-full' : 'w-0'}`} style={{ transitionDelay: '1300ms' }}></div>
                <ChevronRight className="text-slate-500 -ml-2 transition-opacity duration-300" style={{ opacity: flowVisible ? 1 : 0, transitionDelay: '1700ms' }} />
              </div>

              {/* Step 3: แยกทาง */}
              <div className="z-10 flex flex-col gap-4 w-full md:w-64">
                <div className="bg-slate-800/80 border-2 border-slate-600/50 rounded-xl p-4 text-center shadow-sm relative overflow-hidden group transition-all duration-700 ease-out"
                     style={{ opacity: flowVisible ? 1 : 0, transform: flowVisible ? 'translateX(0)' : 'translateX(-30px)', transitionDelay: '1700ms' }}>
                  <div className="absolute inset-0 bg-green-500/10 w-full transform origin-left transition-transform duration-1000" style={{ transform: flowVisible ? 'scaleX(1)' : 'scaleX(0)', transitionDelay: '2200ms' }}></div>
                  <div className="relative z-10">
                    <div className="text-slate-300 text-sm font-semibold mb-1">คงเหลือในระบบสุทธิ</div>
                    <div className="text-2xl font-bold text-slate-100">~1,195 <span className="text-sm font-normal text-slate-400">คน</span></div>
                  </div>
                </div>

                <div className="bg-slate-800/80 border-2 border-red-500/30 rounded-xl p-4 text-center shadow-sm relative overflow-hidden group hover:border-red-500/50 transition-all duration-700 ease-out"
                     style={{ opacity: flowVisible ? 1 : 0, transform: flowVisible ? 'translateX(0)' : 'translateX(-30px)', transitionDelay: '2000ms' }}>
                  <div className="absolute inset-0 bg-red-500/10 w-full transform origin-left transition-transform duration-1000" style={{ transform: flowVisible ? 'scaleX(1)' : 'scaleX(0)', transitionDelay: '2500ms' }}></div>
                  <div className="relative z-10">
                    <div className="text-red-400 text-sm font-semibold mb-1">ออกจากระบบรวม</div>
                    <div className="text-2xl font-bold text-red-500 flex items-center justify-center gap-2">
                      <UserMinus className="w-5 h-5" /> 655 <span className="text-sm font-normal text-red-400">คน</span>
                    </div>
                    <div className="text-xs text-red-400/80 mt-1">
                      (ลาออก 455 + เกษียณ ~200)
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded-r-lg mt-6 transition-all duration-700 ease-out"
                 style={{ opacity: flowVisible ? 1 : 0, transform: flowVisible ? 'translateY(0)' : 'translateY(10px)', transitionDelay: '2700ms' }}>
              <p className="text-sm text-amber-200 flex items-start gap-2">
                <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-amber-500" />
                <span><strong>ข้อสังเกต:</strong> กสธ. รับแพทย์ใหม่ปีละ ~1,850 คน แต่สูญเสียแพทย์ไปถึงปีละ ~655 คน <strong className="text-amber-400">คิดเป็นสัดส่วนราว 1 ใน 3 ของแพทย์ที่รับเข้ามาใหม่</strong></span>
              </p>
            </div>

            {/* เพิ่มส่วน Pictogram Grid (Waffle Chart) จำลองสไตล์จากภาพ */}
            <div className="mt-10 pt-8 border-t border-slate-700/60">
              <div className="text-center mb-6">
                <h3 className="text-lg font-bold text-white mb-2">สถานการณ์ Doctor pool ในปัจจุบัน</h3>
                <div className="flex justify-center gap-6 text-sm mt-3">
                  <div className="flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full cursor-default">
                    <User className="w-4 h-4 text-blue-400" fill="currentColor" />
                    <span className="font-semibold text-blue-300">คงอยู่ในระบบ ({stayCount}%)</span>
                  </div>
                  <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/20 px-4 py-2 rounded-full cursor-default">
                    <User className="w-4 h-4 text-red-400" fill="currentColor" />
                    <span className="font-semibold text-red-300">ออกจากระบบ ({leaveCount}%)</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-center overflow-x-auto pb-4">
                <div className="grid grid-cols-10 gap-1.5 md:gap-2 p-6 bg-slate-900/50 rounded-2xl shadow-inner border border-slate-700/50 min-w-[320px]">
                  {[...Array(totalGrid)].map((_, i) => {
                    const col = i % 10;
                    const row = Math.floor(i / 10);
                    // คำนวณ Index ให้ระบายสีจากล่างขึ้นบน และซ้ายไปขวา (ตามสไตล์ในภาพที่แนบมา)
                    const fillIndex = col * 10 + (9 - row);
                    const isLeave = fillIndex >= stayCount;

                    // จัดการสไตล์แอนิเมชันตาม Cycle
                    let delay = '0ms';
                    let opacityVal = 1;
                    let transformVal = 'scale(1) translate(0px, 0px)';

                    if (pictoCycle === 'reset') {
                      delay = '0ms';
                      opacityVal = 0;
                      transformVal = 'scale(0.5) translate(0px, 0px)';
                    } else if (pictoCycle === 'enter') {
                      delay = `${(col + row) * 20}ms`;
                      opacityVal = 1;
                      transformVal = 'scale(1) translate(0px, 0px)';
                    } else if (pictoCycle === 'leave') {
                      if (isLeave) {
                        // สีแดง: ขยับบินออกไปทางขวาและล่าง พร้อมจางหายไป (ไล่ลำดับจากขวาไปซ้าย)
                        delay = `${(10 - col) * 40 + (10 - row) * 20}ms`;
                        opacityVal = 0;
                        transformVal = 'scale(0.5) translate(40px, 20px)';
                      } else {
                        // สีน้ำเงิน: คงอยู่ในระบบดังเดิม
                        delay = '0ms';
                        opacityVal = 1;
                        transformVal = 'scale(1) translate(0px, 0px)';
                      }
                    }

                    return (
                      <div
                        key={i}
                        className="transition-all ease-out"
                        style={{
                          transitionDuration: pictoCycle === 'reset' ? '0ms' : '600ms',
                          transitionDelay: delay,
                          opacity: opacityVal,
                          transform: transformVal,
                        }}
                        title={isLeave ? 'แพทย์ที่ออกจากระบบ (ลาออก/เกษียณ)' : 'แพทย์ที่ปฏิบัติงานในระบบ'}
                      >
                        {/* แยก Hover effect ไว้ด้านในเพื่อไม่ให้ชนกับ Transform ของลูป Animation */}
                        <div className="transition-transform duration-200 hover:scale-125 hover:-translate-y-1 cursor-pointer h-full w-full flex items-center justify-center">
                          <User
                            className={`w-6 h-6 md:w-8 md:h-8 ${isLeave ? 'text-red-500' : 'text-blue-500'}`}
                            fill="currentColor"
                            strokeWidth={1}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Section 2: สถิติการลาออก */}
        <section className="bg-slate-800/40 rounded-3xl p-6 shadow-sm border border-slate-700/60">
            <h2 className="text-xl font-bold mb-2 flex items-center gap-2 text-white">
              <UserMinus className="text-red-500" />
              2. สถิติแพทย์ลาออก (455 คน/ปี)
            </h2>
            <p className="text-sm text-slate-400 mb-6">แบ่งตามอายุงาน (ไม่รวมเกษียณอายุ)</p>

            <div className="flex flex-col md:flex-row items-center gap-8 mt-4">
              {/* Pie/Donut Chart */}
              <div className="relative w-48 h-48 md:w-56 md:h-56 shrink-0 transition-all duration-1000" style={{ opacity: mounted ? 1 : 0, transform: `scale(${mounted ? 1 : 0.8})` }}>
                <svg viewBox="0 0 42 42" className="w-full h-full overflow-visible" style={{ transform: 'rotate(-90deg)' }}>
                  {resignData.map((item, index) => {
                    // คำนวณองศาเริ่มต้น (offset สะสม)
                    const previousPercents = resignData.slice(0, index).reduce((sum, d) => sum + d.percent, 0);
                    const offset = -previousPercents;
                    const isActive = activeResignYear === item.id;
                    
                    return (
                      <circle
                        key={item.id}
                        cx="21"
                        cy="21"
                        r="15.91549430918954"
                        fill="transparent"
                        stroke={item.hex}
                        strokeWidth={isActive ? "9" : "6"}
                        strokeDasharray={`${item.percent} ${100 - item.percent}`}
                        strokeDashoffset={offset}
                        className="transition-all duration-300 ease-out cursor-pointer hover:opacity-90"
                        onMouseEnter={() => setActiveResignYear(item.id)}
                        onMouseLeave={() => setActiveResignYear(null)}
                      />
                    );
                  })}
                </svg>
                {/* Center text for Donut Chart */}
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <span className="text-4xl font-bold text-white">455</span>
                  <span className="text-sm font-medium text-slate-400">คน/ปี</span>
                </div>
              </div>

              {/* Legend with embedded tooltips */}
              <div className="flex-1 w-full space-y-2">
                {resignData.map((item) => {
                  const isActive = activeResignYear === item.id;
                  return (
                    <div 
                      key={item.id}
                      className={`relative p-3 rounded-xl border transition-all duration-300 cursor-pointer ${
                        isActive ? 'bg-slate-800/80 border-slate-600 scale-105 shadow-sm' : 'border-transparent hover:bg-slate-800/40 hover:border-slate-700/50'
                      }`}
                      onMouseEnter={() => setActiveResignYear(item.id)}
                      onMouseLeave={() => setActiveResignYear(null)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`w-3.5 h-3.5 rounded-full ${item.color} shadow-sm`}></div>
                          <span className={`font-semibold text-sm transition-colors ${isActive ? 'text-white' : 'text-slate-300'}`}>{item.label}</span>
                        </div>
                        <div className="text-right">
                          <span className={`font-bold transition-colors ${isActive ? 'text-white' : 'text-slate-300'}`}>{item.count} คน</span>
                          <span className="text-slate-500 text-xs ml-1 w-10 inline-block text-right">({item.percent}%)</span>
                        </div>
                      </div>
                      
                      {/* Accordion Description */}
                      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isActive ? 'max-h-24 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                        <div className="flex items-start gap-2 pt-2 border-t border-slate-700/50">
                          <Info className={`w-4 h-4 mt-0.5 shrink-0 transition-colors ${isActive ? 'text-blue-400' : 'text-blue-500/50'}`} />
                          <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="mt-8 pt-4 border-t border-slate-700/60 flex justify-center">
               <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-900/20 text-red-400 rounded-full text-sm font-medium border border-red-900/30">
                 จุดวิกฤต: แพทย์ใช้ทุนปีที่ 2 ลาออกมากที่สุดถึง 41%
               </div>
            </div>
          </section>

          {/* Section 3: สาเหตุหลัก */}
          <section className="bg-slate-800/40 rounded-3xl p-6 shadow-sm border border-slate-700/60">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-white">
              <AlertCircle className="text-orange-500" />
              3. สาเหตุหลักที่ทำให้แพทย์ออกจากระบบ
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Reason 1 */}
              <div className="flex flex-col gap-4 p-5 rounded-xl border border-slate-700/50 bg-slate-800/50 hover:bg-slate-800 hover:border-slate-600 transition-all cursor-default group h-full">
                <div className="flex items-center gap-3">
                  <div className="bg-red-900/30 text-red-500 p-3 rounded-lg h-fit group-hover:scale-110 transition-transform shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-white leading-tight">ภาระงานหนักมาก (Overload)</h3>
                </div>
                <div className="w-full flex-1 flex flex-col">
                  <p className="text-sm text-slate-400 mt-1">
                    โรงพยาบาลหลายแห่ง แพทย์ต้องทำงานล่วงเวลา (OT) สูงถึง <strong className="text-red-400">40 - 64 ชั่วโมงต่อสัปดาห์</strong> ซึ่งส่งผลเสียต่อสุขภาพกายและจิตใจ
                  </p>
                  
                  {/* Critical Workload Bar Graph */}
                  <div className="mt-6 bg-slate-900/50 p-4 rounded-xl border border-slate-700/50">
                      <div className="text-[10px] text-slate-400 mb-3 font-semibold tracking-wider uppercase">เทียบภาระงาน (ชั่วโมง/สัปดาห์)</div>
                      <div className="space-y-3">
                          {/* Standard Worker */}
                          <div className="flex items-center gap-3">
                              <div className="w-16 text-right text-[11px] text-slate-400 font-medium">ทั่วไป</div>
                              <div className="flex-1 h-2.5 bg-slate-800 rounded-full overflow-hidden">
                                  <div className="h-full bg-slate-500 rounded-full w-[50%]"></div>
                              </div>
                              <div className="w-8 text-left text-xs font-bold text-slate-300">40h</div>
                          </div>
                          {/* Intern Doctor */}
                          <div className="flex items-center gap-3">
                              <div className="w-16 text-right text-[11px] text-red-400 font-bold">แพทย์จบใหม่</div>
                              <div className="flex-1 h-2.5 bg-slate-800 rounded-full overflow-hidden relative">
                                  <div className="h-full bg-red-500 rounded-full w-[80%] shadow-[0_0_8px_rgba(239,68,68,0.8)] relative">
                                      <div className="absolute inset-0 bg-red-400 animate-pulse mix-blend-overlay opacity-50"></div>
                                  </div>
                                  {/* Threshold marker */}
                                  <div className="absolute top-0 bottom-0 left-[50%] w-[1px] bg-slate-400/80 border-r border-dashed border-slate-300/50"></div>
                              </div>
                              <div className="w-8 text-left text-xs font-bold text-red-500">58h+</div>
                          </div>
                      </div>
                      <p className="text-[11px] text-slate-300/90 mt-4 leading-relaxed p-2.5 bg-red-950/30 rounded-lg border border-red-900/30">
                          <span className="text-red-400 font-bold">Critical:</span> ภาระงานหนักเกินมาตรฐาน เป็นสาเหตุหลักให้แพทย์เกิดภาวะหมดไฟ (Burnout) และลาออก
                      </p>
                  </div>
                </div>
              </div>

              {/* Reason 2 */}
              <div className="flex flex-col gap-4 p-5 rounded-xl border border-slate-700/50 bg-slate-800/50 hover:bg-slate-800 hover:border-slate-600 transition-all cursor-default group h-full">
                <div className="flex items-center gap-3">
                  <div className="bg-orange-900/30 text-orange-500 p-3 rounded-lg h-fit group-hover:scale-110 transition-transform shrink-0">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-white leading-tight">สัดส่วนแพทย์ต่อคนไข้สูงลิ่ว</h3>
                </div>
                <div className="w-full flex-1 flex flex-col">
                  <p className="text-sm text-slate-400 mt-1">
                    บางพื้นที่แพทย์ 1 คน ต้องดูแลประชากรถึง <strong className="text-orange-400">2,000 คน</strong> ทำให้การดูแลไม่ทั่วถึงและเกิดความเครียดสะสม
                  </p>
                  
                  {/* Doctor to Patient Ratio Visualization */}
                  <div className="mt-6 bg-slate-900/50 p-4 rounded-xl border border-slate-700/50 flex flex-col md:flex-row items-center gap-6">
                    {/* Doctor */}
                    <div className="flex flex-col items-center shrink-0">
                      <div className="relative">
                        <div className="absolute inset-0 bg-blue-500/20 rounded-full animate-ping opacity-75"></div>
                        <div className="relative bg-slate-800 border-2 border-blue-500/50 p-3 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                          <User className="w-8 h-8 text-blue-400" />
                        </div>
                      </div>
                      <span className="text-xs font-bold text-blue-400 mt-3">แพทย์ 1 คน</span>
                    </div>

                    {/* Divider */}
                    <div className="hidden md:flex flex-col items-center justify-center">
                      <div className="w-[1px] h-8 bg-slate-700"></div>
                      <span className="text-[10px] text-slate-500 font-bold my-1 bg-slate-800 px-2 py-0.5 rounded-full border border-slate-700">ดูแล</span>
                      <div className="w-[1px] h-8 bg-slate-700"></div>
                    </div>

                    {/* Patients */}
                    <div className="flex-1 w-full">
                      <div className="bg-orange-950/30 p-4 rounded-xl border border-orange-500/20 shadow-inner">
                        <div className="flex flex-wrap gap-1.5 justify-center">
                          {/* Render 100 tiny users to represent 2000 (1 user = 20) */}
                          {[...Array(100)].map((_, i) => (
                            <User key={i} className="w-3 h-3 text-orange-500/60 transition-transform hover:scale-125 hover:text-orange-400" fill="currentColor" />
                          ))}
                        </div>
                        <div className="mt-4 flex items-center justify-between border-t border-orange-500/20 pt-3">
                          <span className="text-xs text-orange-400/80 font-medium flex items-center gap-1.5">
                            <User className="w-3 h-3" fill="currentColor" /> = 20 คนไข้
                          </span>
                          <span className="text-sm font-bold text-orange-500 flex items-center gap-1.5">
                            รวม 2,000 คน <Users className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Reason 3 */}
              <div className="flex flex-col gap-4 p-5 rounded-xl border border-slate-700/50 bg-slate-800/50 hover:bg-slate-800 hover:border-slate-600 transition-all cursor-default group h-full">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-900/30 text-blue-400 p-3 rounded-lg h-fit group-hover:scale-110 transition-transform shrink-0">
                    <Coins className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-white leading-tight">ค่าตอบแทนไม่สอดคล้องกับภาระงาน</h3>
                </div>
                <div className="w-full flex-1 flex flex-col">
                  <p className="text-sm text-slate-400 mt-1">
                    เมื่อเทียบปริมาณงาน ความเสี่ยง และเวลาที่ต้องเสียไป ค่าตอบแทนในระบบราชการยังไม่สามารถจูงใจให้รั้งบุคลากรไว้ได้เมื่อเทียบกับภาคเอกชน
                  </p>
                  
                  {/* Compensation Visualization */}
                  <div className="mt-6 bg-slate-900/50 p-5 rounded-xl border border-slate-700/50">
                    <div className="text-[10px] text-slate-400 mb-4 font-semibold tracking-wider uppercase text-center">เปรียบเทียบค่าตอบแทนเริ่มต้น (บาท/เดือน)</div>
                    <div className="space-y-6 mt-2 px-1 pb-2">
                      {/* Public Sector (รัฐบาล) - 20,000 */}
                      <div className="space-y-2">
                        <div className="flex justify-between items-end">
                          <div className="text-xs font-bold text-slate-300">รัฐบาล</div>
                          <div className="text-sm font-black text-slate-100">~20,000</div>
                        </div>
                        <div className="w-full bg-slate-800 rounded-full h-4 border border-slate-700/50 overflow-hidden">
                          {/* 20% width to represent 20k vs 100k */}
                          <div className="bg-slate-400 h-full rounded-full w-[20%] relative group cursor-pointer transition-all hover:bg-slate-300">
                          </div>
                        </div>
                      </div>

                      {/* Private Sector (เอกชน) - 100,000+ */}
                      <div className="space-y-2">
                        <div className="flex justify-between items-end">
                          <div className="text-xs font-bold text-blue-400">เอกชน / ฟรีแลนซ์</div>
                          <div className="text-sm font-black text-emerald-400">100,000+</div>
                        </div>
                        <div className="w-full bg-slate-800 rounded-full h-4 border border-slate-700/50 overflow-hidden">
                          {/* 100% width to represent 100k+ */}
                          <div className="bg-gradient-to-r from-emerald-600 to-emerald-400 h-full rounded-full w-full relative group cursor-pointer transition-all hover:brightness-125 shadow-[0_0_15px_rgba(16,185,129,0.4)]">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
