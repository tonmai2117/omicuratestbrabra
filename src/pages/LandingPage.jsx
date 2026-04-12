import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import { 
    Activity, Users, MessageSquare, Stethoscope, 
    Zap, Building2, CheckCircle2, Cpu, 
    Star, Lock 
} from 'lucide-react';

const LandingPage = () => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setAnimate(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="bg-slate-50 font-sans selection:bg-blue-200">
            {/* SECTION 1: The Crisis */}
            <div className="relative pt-24 pb-20 px-6 lg:px-8 bg-white border-b border-gray-100 overflow-hidden">
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div className="inline-block bg-red-100 text-red-600 px-4 py-1 rounded-full text-sm font-bold tracking-wide mb-6">THE CRISIS (วิกฤตที่สร้างโอกาส)</div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight mb-8">
                        เมื่อระบบเก่าถึงทางตัน...<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">
                            การหาเวรแพทย์จึงกลายเป็น "การเสี่ยงดวง"
                        </span>
                    </h1>
                    <p className="mt-4 text-xl text-gray-600 font-medium">
                        การหลั่งไหลของแพทย์ออกจากระบบรัฐ สู่ตลาดฟรีแลนซ์ที่ไร้ศูนย์กลางจัดการ
                    </p>
                </div>
                
                {/* Data Storytelling Cards */}
                <div className={`max-w-6xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-[1000ms] ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                    {/* The Exodus */}
                    <div className="bg-red-50/70 rounded-3xl p-8 border border-red-100 shadow-sm hover:shadow-xl transition-shadow relative group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-red-200 rounded-bl-full -z-10 opacity-30 group-hover:scale-110 transition-transform"></div>
                        <Activity className="w-12 h-12 text-red-500 mb-6 drop-shadow-sm" />
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">The Exodus<br/><span className="text-base font-semibold text-red-500 block mt-1">คลื่นการลาออก</span></h3>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            สถิติพบว่าในแต่ละปีมีแพทย์ลาออกจากระบบสาธารณสุขรัฐเฉลี่ยถึง <strong className="text-red-600">ปีละ 450-650 คน</strong> (รวมเกษียณ) โดยเฉพาะกลุ่มแพทย์จบใหม่ (Intern) ที่เผชิญภาระงานหนักกว่า 50-58 ชั่วโมง/สัปดาห์
                        </p>
                    </div>
                    {/* The Shift */}
                    <div className="bg-blue-50/70 rounded-3xl p-8 border border-blue-100 shadow-sm hover:shadow-xl transition-shadow relative group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200 rounded-bl-full -z-10 opacity-30 group-hover:scale-110 transition-transform"></div>
                        <Users className="w-12 h-12 text-blue-500 mb-6 drop-shadow-sm" />
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">The Shift<br/><span className="text-base font-semibold text-blue-500 block mt-1">การย้ายฐาน</span></h3>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            หมอจำนวนมากเลือกเดินสู่เส้นทาง <strong className="text-blue-600">"แพทย์อิสระ (Freelance)"</strong> หรือรับเวรคลินิกเอกชนและคลินิกความงาม เพื่อแลกกับข้อเสนอและคุณภาพชีวิตที่ดีกว่า
                        </p>
                    </div>
                    {/* The Paradox */}
                    <div className="bg-amber-50/70 rounded-3xl p-8 border border-amber-100 shadow-sm hover:shadow-xl transition-shadow relative group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-200 rounded-bl-full -z-10 opacity-30 group-hover:scale-110 transition-transform"></div>
                        <MessageSquare className="w-12 h-12 text-amber-500 mb-6 drop-shadow-sm" />
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">The Paradox<br/><span className="text-base font-semibold text-amber-500 block mt-1">ความขัดแย้ง</span></h3>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            แม้จะมีหมอฟรีแลนซ์ในตลาดมากขึ้น แต่คลินิกกลับ <strong className="text-amber-600">"หาหมอยากขึ้น"</strong> เพราะระบบการหางานพึ่งพากลุ่ม LINE ที่ยุ่งเหยิง เกิดภาวะ <strong className="font-bold">Information Asymmetry</strong> หมอดีๆ พลาดเวร คลินิกดีๆ ได้หมอไม่ตรงปก
                        </p>
                    </div>
                </div>
            </div>

            {/* SECTION 2: The Target */}
            <div className="py-24 px-6 lg:px-8 bg-slate-50 relative overflow-hidden">
                {/* Decorative background blobs */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-200/40 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

                <div className="max-w-4xl mx-auto text-center mb-16 relative z-10">
                    <div className="inline-block bg-indigo-100 text-indigo-700 px-4 py-1 rounded-full text-sm font-bold tracking-wide mb-4">THE TARGET</div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900">แพลตฟอร์มนี้ทำมาเพื่อใคร?</h2>
                </div>
                
                <div className={`max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 relative z-10 transition-all duration-[1000ms] delay-300 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                    {/* Card 1: Doctors */}
                    <div className="flex-[1.1] bg-white rounded-[2rem] p-10 lg:p-12 shadow-2xl border-t-8 border-cyan-500 hover:-translate-y-2 transition-transform duration-500 flex flex-col">
                        <div className="flex items-center gap-5 mb-8">
                            <div className="bg-cyan-50 p-4 rounded-2xl">
                                <Stethoscope className="w-10 h-10 text-cyan-600" />
                            </div>
                            <div>
                                <h3 className="text-3xl font-extrabold text-gray-900">สำหรับ "หมอมือโปร"</h3>
                                <p className="text-cyan-600 font-semibold">(The Professional Doctors)</p>
                            </div>
                        </div>
                        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 mb-10 shadow-inner">
                            <p className="text-gray-700 font-medium leading-relaxed">
                                <span className="text-red-500 font-bold block mb-2 text-lg">⚠️ Pain Point:</span> 
                                เบื่อไหม? กับการต้องคอยเฝ้าจอ ไถแชทแย่งเวรในกลุ่มไลน์ แถมต้องลุ้นว่าจะโดนคลินิกเบี้ยวค่าตอบแทนหรือไม่
                            </p>
                        </div>
                        
                        <div className="mt-auto">
                            <h4 className="text-xl font-bold text-gray-900 mb-6 bg-cyan-50 inline-block px-4 py-1 rounded-lg">✨ What you get:</h4>
                            <ul className="space-y-6">
                                <li className="flex items-start gap-4">
                                    <div className="bg-cyan-100 p-2 rounded-full shrink-0 mt-0.5"><Zap className="w-5 h-5 text-cyan-600" /></div>
                                    <div><strong className="text-gray-900 text-lg">มั่นคง:</strong> <span className="text-gray-700 text-lg">การันตีรายได้ จ่ายเงินไวที่สุด (Fastest Payout)</span></div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="bg-cyan-100 p-2 rounded-full shrink-0 mt-0.5"><Zap className="w-5 h-5 text-cyan-600" /></div>
                                    <div><strong className="text-gray-900 text-lg">ง่ายดาย:</strong> <span className="text-gray-700 text-lg">ไม่ต้องแชทต่อรอง ระบบค้นหาเวรที่ตรงสเปกและกดรับได้ทันที</span></div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="bg-cyan-100 p-2 rounded-full shrink-0 mt-0.5"><Zap className="w-5 h-5 text-cyan-600" /></div>
                                    <div><strong className="text-gray-900 text-lg">ปลอดภัย:</strong> <span className="text-gray-700 text-lg">เห็น Trust Score และประวัติการจ่ายเงินของคลินิกก่อนตัดสินใจ</span></div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Card 2: Clinics */}
                    <div className="flex-1 bg-white rounded-[2rem] p-10 lg:p-12 shadow-2xl border-t-8 border-purple-500 hover:-translate-y-2 transition-transform duration-500 flex flex-col">
                        <div className="flex items-center gap-5 mb-8">
                            <div className="bg-purple-50 p-4 rounded-2xl">
                                <Building2 className="w-10 h-10 text-purple-600" />
                            </div>
                            <div>
                                <h3 className="text-3xl font-extrabold text-gray-900">สำหรับ "คลินิกเงินไว"</h3>
                                <p className="text-purple-600 font-semibold">(The Busy Clinics)</p>
                            </div>
                        </div>
                        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 mb-10 shadow-inner">
                            <p className="text-gray-700 font-medium leading-relaxed">
                                <span className="text-red-500 font-bold block mb-2 text-lg">⚠️ Pain Point:</span> 
                                ไม่มีเวลาคัดกรองประวัติหมอ โพสต์หาคนในไลน์แล้วแชทจม หรือเจอปัญหาหมอทิ้งเวรกะทันหัน
                            </p>
                        </div>
                        
                        <div className="mt-auto">
                            <h4 className="text-xl font-bold text-gray-900 mb-6 bg-purple-50 inline-block px-4 py-1 rounded-lg">💎 What you get:</h4>
                            <ul className="space-y-6">
                                <li className="flex items-start gap-4">
                                    <div className="bg-purple-100 p-2 rounded-full shrink-0 mt-0.5"><CheckCircle2 className="w-5 h-5 text-purple-600" /></div>
                                    <div><strong className="text-gray-900 text-lg">คุณภาพ:</strong> <span className="text-gray-700 text-lg">แพทย์ทุกท่านผ่านการ Verified ใบประกอบวิชาชีพและประวัติชัดเจน</span></div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="bg-purple-100 p-2 rounded-full shrink-0 mt-0.5"><CheckCircle2 className="w-5 h-5 text-purple-600" /></div>
                                    <div><strong className="text-gray-900 text-lg">รวดเร็ว:</strong> <span className="text-gray-700 text-lg">จับคู่แพทย์ที่พร้อมทำงานทันที ไม่ต้องรอลุ้น</span></div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="bg-purple-100 p-2 rounded-full shrink-0 mt-0.5"><CheckCircle2 className="w-5 h-5 text-purple-600" /></div>
                                    <div><strong className="text-gray-900 text-lg">โปร่งใส:</strong> <span className="text-gray-700 text-lg">มีระบบรีวิวจากคลินิกอื่น (Rating System) เลือกสิ่งที่ดีที่สุด</span></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* SECTION 3: The Core Solution */}
            <div className="py-24 px-6 lg:px-8 bg-[#0B1120] text-white">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <div className="inline-block bg-blue-500/20 text-blue-400 px-4 py-1 rounded-full text-sm font-bold tracking-wide mb-6 border border-blue-500/30">THE CORE SOLUTION</div>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight">Clinic & Co:<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Intelligent Medical Staffing Ecosystem</span></h2>
                    <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-light">
                        เปลี่ยนโลกการจัดจ้างที่ <span className="text-white font-medium">"ยุ่งเหยิง"</span> ให้กลายเป็น <span className="text-blue-300 font-medium">"ระบบนิเวศที่ขับเคลื่อนด้วยความเชื่อใจ"</span> (Trust-Based Ecosystem)
                    </p>
                </div>
                
                <div className={`max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-[1000ms] delay-500 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                    {/* Feature 1 */}
                    <div className="bg-gray-800/50 backdrop-blur-sm p-10 rounded-3xl border border-gray-700/50 hover:border-blue-500/50 hover:bg-gray-800 transition-all duration-300 group">
                        <div className="bg-blue-500/10 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                            <Cpu className="w-10 h-10 text-blue-400" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-white">AI Verification<br/>& Matching</h3>
                        <p className="text-gray-400 leading-relaxed text-lg">
                            ตรวจสอบข้อมูลแพทย์และคลินิกอย่างแม่นยำ พร้อมจับคู่ความต้องการแบบ Real-time <strong className="text-gray-200">ลดเวลาการหาเวรจากหลักชั่วโมงเหลือเพียงไม่กี่คลิก</strong>
                        </p>
                    </div>
                    
                    {/* Feature 2 */}
                    <div className="bg-gray-800/50 backdrop-blur-sm p-10 rounded-3xl border border-gray-700/50 hover:border-yellow-500/50 hover:bg-gray-800 transition-all duration-300 group">
                        <div className="bg-yellow-500/10 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                            <Star className="w-10 h-10 text-yellow-400" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-white">Transparent<br/>Review System</h3>
                        <p className="text-gray-400 leading-relaxed text-lg">
                            ทลายกำแพง Information Asymmetry ด้วยระบบให้คะแนน (Rating & Trust Score) ทั้งสองฝั่ง <strong className="text-gray-200">ข้อมูลจริง ประวัติจริง รีวิวจริง</strong>
                        </p>
                    </div>
                    
                    {/* Feature 3 */}
                    <div className="bg-gray-800/50 backdrop-blur-sm p-10 rounded-3xl border border-gray-700/50 hover:border-green-500/50 hover:bg-gray-800 transition-all duration-300 group">
                        <div className="bg-green-500/10 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                            <Lock className="w-10 h-10 text-green-400" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-white">Secure & Fast<br/>Payment</h3>
                        <p className="text-gray-400 leading-relaxed text-lg">
                            จบปัญหาการตุกติกทางการเงิน ด้วยระบบประมาณการทางการเงินเชิงธุรกิจและ<strong className="text-gray-200">ระบบการจ่ายค่าตอบแทนที่ปลอดภัยระดับสากล</strong>
                        </p>
                    </div>
                </div>
            </div>

            {/* SECTION 4: Why Now? + CTA */}
            <div className="py-32 px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-10 leading-tight">
                        "หมดยุคของการพึ่งพาโชคชะตา<br/><span className="text-blue-600">ในการหาบุคลากรทางการแพทย์</span>"
                    </h2>
                    
                    <div className="bg-white/80 backdrop-blur-md border border-gray-200 p-8 md:p-12 rounded-3xl shadow-xl mb-12">
                        <p className="text-xl md:text-2xl text-gray-700 mb-6 font-medium leading-relaxed">
                            หลังวิกฤตโรคระบาดและภาวะสมองไหลของแพทย์ ระบบการรีวิวแบบเดิมๆ และกลุ่มแชทที่ตรวจสอบไม่ได้ <strong className="text-red-500">ไม่ตอบโจทย์อีกต่อไป</strong>
                        </p>
                        <hr className="my-8 border-gray-200" />
                        <p className="text-2xl md:text-3xl font-bold text-gray-900 leading-relaxed">
                            วงการแพทย์ต้องการมาตรฐานใหม่ที่ <span className="text-blue-600">โปร่งใส ตรวจสอบได้ และยุติธรรมกับทั้งสองฝ่าย</span> เข้าร่วมเป็นส่วนหนึ่งของระบบนิเวศอัจฉริยะกับ Clinic & Co ได้แล้ววันนี้
                        </p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
                        <Link to="/register/doctor" className="w-full sm:w-auto">
                            <Button variant="primary" className="w-full sm:w-auto px-10 py-5 text-xl font-bold bg-cyan-600 hover:bg-cyan-700 shadow-[0_10px_20px_rgba(8,145,178,0.3)] hover:shadow-[0_15px_30px_rgba(8,145,178,0.4)] transition-all flex items-center justify-center gap-3 rounded-2xl hover:-translate-y-1">
                                <Stethoscope className="w-6 h-6" /> ลงทะเบียนสำหรับแพทย์
                            </Button>
                        </Link>
                        <Link to="/register/clinic" className="w-full sm:w-auto">
                            <Button variant="primary" className="w-full sm:w-auto px-10 py-5 text-xl font-bold bg-purple-600 hover:bg-purple-700 shadow-[0_10px_20px_rgba(147,51,234,0.3)] hover:shadow-[0_15px_30px_rgba(147,51,234,0.4)] transition-all flex items-center justify-center gap-3 rounded-2xl hover:-translate-y-1">
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
