import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import { 
    Activity, Users, MessageSquare, Stethoscope, 
    Zap, Building2, CheckCircle2, Cpu, 
    Star, Lock, Briefcase 
} from 'lucide-react';

const LandingPage = () => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setAnimate(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="bg-[#0B1120] text-slate-300 font-sans selection:bg-blue-900 selection:text-white pb-20">
            {/* SECTION 1: The Crisis */}
            <div className="relative pt-24 pb-20 px-6 lg:px-8 border-b border-slate-800/50 overflow-hidden">
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-8">
                        เมื่อระบบเก่าถึงทางตัน...<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">
                            การหาเวรแพทย์จึงกลายเป็น "การเสี่ยงดวง"
                        </span>
                    </h1>
                    <p className="mt-4 text-xl text-slate-400 font-medium">
                        การหลั่งไหลของแพทย์ออกจากระบบรัฐ สู่ตลาดฟรีแลนซ์ที่ไร้ศูนย์กลางจัดการ
                    </p>
                </div>
                
                {/* Data Storytelling Cards */}
                <div className={`max-w-6xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-[1000ms] ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                    {/* The Exodus */}
                    <div className="bg-slate-800/40 rounded-3xl p-8 border border-slate-700/60 shadow-lg hover:border-red-500/50 hover:bg-slate-800/60 transition-all relative group overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
                        <Activity className="w-12 h-12 text-red-500 mb-6 drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
                        <h3 className="text-2xl font-bold text-white mb-2">The Crisis<br/><span className="text-base font-semibold text-red-400 block mt-1">คลื่นการลาออก</span></h3>
                        <div className="mt-6">
                            <div className="relative w-full h-44 flex items-center justify-center mb-5 overflow-hidden bg-slate-900/40 rounded-2xl border border-slate-700/40">
                                <style dangerouslySetInnerHTML={{__html:`
                                    @keyframes leak-out {
                                        0% { transform: translate(0, 0) scale(0.5); opacity: 1; }
                                        100% { transform: translate(var(--tx), var(--ty)) scale(1.2); opacity: 0; }
                                    }
                                    .particle { animation: leak-out 2.5s infinite ease-out; }
                                `}} />
                                
                                {/* Central Hub */}
                                <div className="z-10 bg-slate-800 border-[3px] border-slate-600 rounded-full w-[76px] h-[76px] flex flex-col items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.8)] relative">
                                    <span className="text-[10px] text-slate-400 font-medium tracking-wider">ระบบรัฐ</span>
                                    <span className="text-sm font-bold text-white">24k</span>
                                    <div className="absolute inset-0 rounded-full bg-blue-500/10 animate-ping opacity-20"></div>
                                </div>

                                {/* Particles */}
                                {[...Array(12)].map((_, i) => {
                                    const angle = (i * 30) * (Math.PI / 180);
                                    const tx = Math.cos(angle) * 110;
                                    const ty = Math.sin(angle) * 110;
                                    return (
                                        <div 
                                            key={i}
                                            className="particle absolute w-2.5 h-2.5 rounded-full bg-red-500 drop-shadow-[0_0_6px_rgba(239,68,68,1)] z-0"
                                            style={{
                                                '--tx': `${tx}px`,
                                                '--ty': `${ty}px`,
                                                animationDelay: `${(i * 0.2)}s`
                                            }}
                                        />
                                    );
                                })}

                                {/* Overlay Label */}
                                <div className="absolute bottom-3 left-3 flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                                    <span className="text-[10px] text-slate-400">แพทย์ลาออก</span>
                                </div>
                                <div className="absolute top-3 right-3 flex items-baseline gap-1 bg-red-950/40 px-2.5 py-1 rounded-lg border border-red-900/30">
                                    <span className="text-lg font-bold text-red-500">-650</span>
                                    <span className="text-[10px] text-red-400/80">คน/ปี</span>
                                </div>
                            </div>
                            {/* Critical Workload Bar Graph */}
                            <div className="mt-4 bg-slate-900/50 p-4 rounded-xl border border-slate-700/50">
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
                    {/* The Shift */}
                    <div className="bg-slate-800/40 rounded-3xl p-8 border border-slate-700/60 shadow-lg hover:border-blue-500/50 hover:bg-slate-800/60 transition-all relative group overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
                        <Users className="w-12 h-12 text-blue-400 mb-6 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                        <h3 className="text-2xl font-bold text-white mb-2">Mobilization<br/><span className="text-base font-semibold text-blue-400 block mt-1">การย้ายฐาน</span></h3>
                        <div className="mt-6">
                            <div className="relative w-full h-32 flex items-center justify-between px-5 mb-4 bg-slate-900/40 rounded-2xl border border-slate-700/40 overflow-hidden">
                                <style dangerouslySetInnerHTML={{__html:`
                                    @keyframes flow-right {
                                        0% { left: 0%; transform: scale(0.5) translateY(var(--y-offset)); opacity: 0; }
                                        15% { opacity: 1; transform: scale(1) translateY(var(--y-offset)); }
                                        85% { opacity: 1; transform: scale(1) translateY(var(--y-offset)); }
                                        100% { left: 100%; transform: scale(0.5) translateY(var(--y-offset)); opacity: 0; }
                                    }
                                    .particle-flow { animation: flow-right 2s infinite linear; }
                                `}} />
                                
                                {/* Left: Public System */}
                                <div className="z-10 flex flex-col items-center">
                                    <div className="bg-slate-800 border-[3px] border-slate-600 rounded-full w-[64px] h-[64px] flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)] relative">
                                        <Building2 className="w-7 h-7 text-slate-400" />
                                        <div className="absolute inset-0 rounded-full bg-slate-500/10 animate-pulse"></div>
                                    </div>
                                    <span className="text-[10px] text-slate-400 mt-2 font-bold tracking-wider">ในระบบรัฐ</span>
                                </div>

                                {/* Center: Flying Particles container */}
                                <div className="absolute left-[80px] right-[75px] h-10 top-1/2 -translate-y-[60%]">
                                    {/* Trail line */}
                                    <div className="absolute inset-x-0 h-[1px] top-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent border-t border-dashed border-blue-500/30"></div>
                                    
                                    {[...Array(6)].map((_, i) => {
                                        const yOffset = i % 2 === 0 ? '4px' : i % 3 === 0 ? '-4px' : '0px';
                                        return (
                                            <div 
                                                key={i}
                                                className="particle-flow absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-blue-400 drop-shadow-[0_0_6px_rgba(59,130,246,0.8)]"
                                                style={{
                                                    '--y-offset': yOffset,
                                                    animationDelay: `${i * 0.33}s`
                                                }}
                                            />
                                        )
                                    })}
                                </div>

                                {/* Right: Private/Freelance */}
                                <div className="z-10 flex flex-col items-center">
                                    <div className="bg-slate-800 border-[2px] border-blue-500/60 rounded-full w-[48px] h-[48px] flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                                        <Briefcase className="w-5 h-5 text-blue-400" />
                                    </div>
                                    <span className="text-[10px] text-blue-400 mt-2 font-bold tracking-wider">นอกระบบ (อิสระ)</span>
                                </div>
                            </div>
                            
                            <p className="text-sm text-slate-300 leading-relaxed bg-blue-900/10 p-3.5 rounded-xl border border-blue-500/20">
                                หมอจำนวนมากเลือกเดินสู่เส้นทาง <strong className="text-blue-400">"แพทย์อิสระ"</strong> เพื่อแลกกับข้อเสนอและคุณภาพชีวิตที่ดีกว่า
                            </p>
                        </div>
                    </div>
                    {/* The Paradox */}
                    <div className="bg-slate-800/40 rounded-3xl p-8 border border-slate-700/60 shadow-lg hover:border-amber-500/50 hover:bg-slate-800/60 transition-all relative group overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
                        <MessageSquare className="w-12 h-12 text-amber-400 mb-6 drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
                        <h3 className="text-2xl font-bold text-white mb-2">The Paradox &amp; Chaos<br/><span className="text-base font-semibold text-amber-400 block mt-1">ความขัดแย้ง</span></h3>
                        <div className="mt-6">
                            <div className="relative w-full h-44 bg-slate-900/60 rounded-2xl border border-slate-700/40 overflow-hidden mb-4 p-3 shadow-inner">
                                <style dangerouslySetInnerHTML={{__html:`
                                    @keyframes flood-scroll {
                                        0% { transform: translateY(140px); }
                                        20% { transform: translateY(140px); }
                                        70% { transform: translateY(-250px); }
                                        100% { transform: translateY(-250px); }
                                    }
                                    .chat-flood { animation: flood-scroll 3.5s infinite cubic-bezier(0.4, 0, 0.2, 1); }
                                `}} />
                                
                                <div className="absolute top-0 inset-x-0 h-12 bg-gradient-to-b from-slate-900/90 to-transparent z-20"></div>
                                <div className="absolute bottom-0 inset-x-0 h-8 bg-gradient-to-t from-slate-900/90 to-transparent z-20"></div>

                                <div className="chat-flood w-full flex flex-col gap-2 relative z-10">
                                    {/* Urgent Post */}
                                    <div className="self-end bg-amber-500/20 border border-amber-500/40 text-amber-200 text-xs py-2 px-3 rounded-2xl rounded-tr-sm max-w-[85%] shadow-[0_0_15px_rgba(245,158,11,0.2)] mb-2 mt-4 relative">
                                        หาหมอเวรด่วน พรุ่งนี้คับ!!
                                        <div className="absolute -left-2 -top-2 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
                                        <div className="absolute -left-2 -top-2 w-3 h-3 bg-red-500 rounded-full"></div>
                                    </div>
                                    
                                    {/* Spam Messages flooding */}
                                    {[...Array(12)].map((_, i) => (
                                        <div key={i} className="self-start flex gap-2 w-full max-w-[90%]">
                                            <div className="w-5 h-5 rounded-full bg-slate-700/80 shrink-0 border border-slate-600/50"></div>
                                            <div className="bg-slate-800 border border-slate-700/50 text-slate-400 text-[10px] py-1.5 px-3 rounded-xl rounded-tl-sm w-full shadow-sm">
                                                {i % 3 === 0 ? 'สนใจรับเวรครับ' : i % 3 === 1 ? 'ขออนุญาตฝากใบประกอบครับ' : 'ว่างรับครับ ทักแชทไปแล้ว'}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            
                            <p className="text-xs text-slate-300 leading-relaxed bg-amber-900/10 p-3 rounded-xl border border-amber-500/20">
                                กลุ่ม LINE ที่ยุ่งเหยิง ทำให้โพสต์หาหมอ <strong className="text-amber-400">"ถูกดันจนหาย"</strong> เกิดภาวะ <strong className="text-white">Information Asymmetry</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* SECTION 2: The Target */}
            <div className="py-24 px-6 lg:px-8 relative overflow-hidden border-b border-slate-800/50">
                {/* Decorative background blobs */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-900/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

                <div className="max-w-4xl mx-auto text-center mb-16 relative z-10">
                    <div className="inline-block bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 px-4 py-1 rounded-full text-sm font-bold tracking-wide mb-4">THE TARGET</div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white">แพลตฟอร์มนี้ทำมาเพื่อใคร?</h2>
                </div>
                
                <div className={`max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 relative z-10 transition-all duration-[1000ms] delay-300 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                    {/* Card 1: Doctors */}
                    <div className="flex-[1.1] bg-[#111827]/80 backdrop-blur-md rounded-[2rem] p-10 lg:p-12 shadow-2xl border border-slate-700/50 border-t-8 border-t-cyan-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(6,182,212,0.15)] transition-all duration-500 flex flex-col">
                        <div className="flex items-center gap-5 mb-8">
                            <div className="bg-cyan-900/40 p-4 rounded-2xl border border-cyan-500/20">
                                <Stethoscope className="w-10 h-10 text-cyan-400 drop-shadow-md" />
                            </div>
                            <div>
                                <h3 className="text-3xl font-extrabold text-white">The Professional Doctors</h3>
                                <p className="text-cyan-400 font-semibold">(สำหรับแพทย์ปฏิบัติการมืออาชีพ)</p>
                            </div>
                        </div>
                        <p className="text-xl text-cyan-200/90 italic font-light leading-relaxed mb-10 drop-shadow-sm">
                            "เบื่อไหม? กับการต้องคอยเฝ้าจอ ไถแชทแย่งเวรในกลุ่มไลน์ แถมต้องลุ้นว่าจะโดนคลินิกเบี้ยวค่าตอบแทนหรือไม่"
                        </p>
                        
                        <div className="mt-auto">

                            <ul className="space-y-6">
                                <li className="flex items-start gap-4">
                                    <div className="bg-green-900/50 p-2 rounded-full shrink-0 mt-0.5 border border-green-700/50"><CheckCircle2 className="w-5 h-5 text-green-400" /></div>
                                    <div><strong className="text-white text-lg">มั่นคง:</strong> <span className="text-slate-400 text-lg">การันตีรายได้ จ่ายเงินผ่านตัวกลาง โปร่งใส ปลอดภัย</span></div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="bg-green-900/50 p-2 rounded-full shrink-0 mt-0.5 border border-green-700/50"><CheckCircle2 className="w-5 h-5 text-green-400" /></div>
                                    <div><strong className="text-white text-lg">ง่ายดาย:</strong> <span className="text-slate-400 text-lg">ไม่ต้องรอแชทจนตาแฉะ หรือแชทต่อรองให้เหนื่อย ระบบค้นหาเวรที่ตรงตามความต้องการ หรือสามารถเลือกสรรเวรที่ตรงตามใจ ผ่านทาง dashboard ได้ทันที</span></div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="bg-green-900/50 p-2 rounded-full shrink-0 mt-0.5 border border-green-700/50"><CheckCircle2 className="w-5 h-5 text-green-400" /></div>
                                    <div><strong className="text-white text-lg">ปลอดภัย:</strong> <span className="text-slate-400 text-lg">เห็น Trust Score และประวัติการจ่ายเงินของคลินิกก่อนตัดสินใจ</span></div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Card 2: Clinics */}
                    <div className="flex-1 bg-[#111827]/80 backdrop-blur-md rounded-[2rem] p-10 lg:p-12 shadow-2xl border border-slate-700/50 border-t-8 border-t-purple-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(168,85,247,0.15)] transition-all duration-500 flex flex-col">
                        <div className="flex items-center gap-5 mb-8">
                            <div className="bg-purple-900/40 p-4 rounded-2xl border border-purple-500/20">
                                <Building2 className="w-10 h-10 text-purple-400 drop-shadow-md" />
                            </div>
                            <div>
                                <h3 className="text-3xl font-extrabold text-white">Hi-Standard Clinic</h3>
                                <p className="text-purple-400 font-semibold">(สำหรับคลินิกมาตรฐานสูง)</p>
                            </div>
                        </div>
                        <p className="text-xl text-purple-200/90 italic font-light leading-relaxed mb-10 drop-shadow-sm">
                            "ไม่มีเวลาคัดกรองประวัติหมอ โพสต์หาคนในไลน์แล้วแชทจม หรือเจอปัญหาหมอทิ้งเวรกะทันหัน"
                        </p>
                        
                        <div className="mt-auto">

                            <ul className="space-y-6">
                                <li className="flex items-start gap-4">
                                    <div className="bg-green-900/50 p-2 rounded-full shrink-0 mt-0.5 border border-green-700/50"><CheckCircle2 className="w-5 h-5 text-green-400" /></div>
                                    <div><strong className="text-white text-lg">คุณภาพ:</strong> <span className="text-slate-400 text-lg">แพทย์ทุกท่านผ่านการ Verified ใบประกอบวิชาชีพและประวัติชัดเจน</span></div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="bg-green-900/50 p-2 rounded-full shrink-0 mt-0.5 border border-green-700/50"><CheckCircle2 className="w-5 h-5 text-green-400" /></div>
                                    <div><strong className="text-white text-lg">สะดวก รวดเร็ว:</strong> <span className="text-slate-400 text-lg">จับคู่แพทย์ที่พร้อมทำงานทันที ไม่ต้องรอลุ้นว่าการ์ดงานจะเด้งหายลับตลอดไป</span></div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="bg-green-900/50 p-2 rounded-full shrink-0 mt-0.5 border border-green-700/50"><CheckCircle2 className="w-5 h-5 text-green-400" /></div>
                                    <div><strong className="text-white text-lg">โปร่งใส:</strong> <span className="text-slate-400 text-lg">มีระบบรีวิวจากคลินิกอื่น (Rating System) เลือกสิ่งที่ดีที่สุด</span></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* SECTION 3: The Core Solution */}
            <div className="py-24 px-6 lg:px-8 border-b border-slate-800/50">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <div className="inline-block bg-blue-500/20 text-blue-400 px-4 py-1 rounded-full text-sm font-bold tracking-wide mb-6 border border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.2)]">THE CORE SOLUTION</div>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight text-white">Clinic & Co:<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Intelligent Medical Staffing Ecosystem</span></h2>
                    <p className="text-xl md:text-2xl text-slate-400 leading-relaxed font-light">
                        เปลี่ยนโลกการจัดจ้างที่ <span className="text-white font-medium">"ยุ่งเหยิง"</span> ให้กลายเป็น <span className="text-blue-300 font-medium">"ระบบนิเวศที่ขับเคลื่อนด้วย ความโปร่งใส มาตรฐาน และมืออาชีพ"</span> (Professional-Based Ecosystem)
                    </p>
                </div>
                
                <div className={`max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-[1000ms] delay-500 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                    {/* Feature 1 */}
                    <div className="bg-[#111827]/80 backdrop-blur-sm p-10 rounded-3xl border border-slate-700/60 hover:border-blue-500/50 hover:bg-slate-800 transition-all duration-300 group shadow-lg">
                        <div className="bg-blue-500/10 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.15)]">
                            <Cpu className="w-10 h-10 text-blue-400" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-white">AI Verification<br/>& Matching</h3>
                        <p className="text-slate-400 leading-relaxed text-lg">
                            ตรวจสอบข้อมูลแพทย์และคลินิกอย่างแม่นยำ พร้อมจับคู่ความต้องการแบบ Real-time <strong className="text-slate-200">ลดเวลาการหาเวรจากหลักชั่วโมงเหลือเพียงไม่กี่คลิก</strong>
                        </p>
                    </div>
                    
                    {/* Feature 2 */}
                    <div className="bg-[#111827]/80 backdrop-blur-sm p-10 rounded-3xl border border-slate-700/60 hover:border-yellow-500/50 hover:bg-slate-800 transition-all duration-300 group shadow-lg">
                        <div className="bg-yellow-500/10 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform border border-yellow-500/20 shadow-[0_0_15px_rgba(234,179,8,0.15)]">
                            <Star className="w-10 h-10 text-yellow-400" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-white">Transparent<br/>Review System</h3>
                        <p className="text-slate-400 leading-relaxed text-lg">
                            ทลายกำแพง Information Asymmetry ด้วยระบบให้คะแนน (Rating & Trust Score) ทั้งสองฝั่ง <strong className="text-slate-200">ข้อมูลจริง ประวัติจริง รีวิวจริง</strong>
                        </p>
                    </div>
                    
                    {/* Feature 3 */}
                    <div className="bg-[#111827]/80 backdrop-blur-sm p-10 rounded-3xl border border-slate-700/60 hover:border-green-500/50 hover:bg-slate-800 transition-all duration-300 group shadow-lg">
                        <div className="bg-green-500/10 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform border border-green-500/20 shadow-[0_0_15px_rgba(34,197,94,0.15)]">
                            <Lock className="w-10 h-10 text-green-400" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-white">Secure & Fast<br/>Payment</h3>
                        <p className="text-slate-400 leading-relaxed text-lg">
                            จบปัญหาการตุกติกทางการเงิน ด้วยระบบประมาณการทางการเงินเชิงธุรกิจและ<strong className="text-slate-200">ระบบการจ่ายค่าตอบแทนที่ปลอดภัยระดับสากล</strong>
                        </p>
                    </div>
                </div>
            </div>

            {/* SECTION 4: Why Now? + CTA */}
            <div className="py-32 px-6 lg:px-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-[#060B14] opacity-80 backdrop-blur-xl"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
                
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-10 leading-tight">
                        "หมดยุคของการพึ่งพาโชคชะตา<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">ในการหาคน และหางานด้านการแพทย์</span>"
                    </h2>
                    
                    <div className="mb-12">
                        <p className="text-2xl md:text-3xl font-bold text-white leading-relaxed drop-shadow-md">
                            วงการแพทย์ต้องการมาตรฐานใหม่ที่ <span className="text-blue-400">โปร่งใส ตรวจสอบได้ และยุติธรรมกับทั้งสองฝ่าย</span> เข้าร่วมเป็นส่วนหนึ่งของระบบนิเวศแบบผู้เชี่ยวชาญกับ Clinic & Co ได้แล้ววันนี้
                        </p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
                        <Link to="/register/doctor" className="w-full sm:w-auto">
                            <Button variant="primary" className="w-full sm:w-auto px-10 py-5 text-xl font-bold bg-cyan-600 hover:bg-cyan-500 text-white border-0 shadow-[0_0_20px_rgba(8,145,178,0.4)] hover:shadow-[0_0_30px_rgba(8,145,178,0.6)] transition-all flex items-center justify-center gap-3 rounded-2xl hover:-translate-y-1">
                                <Stethoscope className="w-6 h-6" /> ลงทะเบียนสำหรับแพทย์
                            </Button>
                        </Link>
                        <Link to="/register/clinic" className="w-full sm:w-auto">
                            <Button variant="primary" className="w-full sm:w-auto px-10 py-5 text-xl font-bold bg-purple-600 hover:bg-purple-500 text-white border-0 shadow-[0_0_20px_rgba(147,51,234,0.4)] hover:shadow-[0_0_30px_rgba(147,51,234,0.6)] transition-all flex items-center justify-center gap-3 rounded-2xl hover:-translate-y-1">
                                <Building2 className="w-6 h-6" /> ลงทะเบียนสำหรับคลินิก
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
