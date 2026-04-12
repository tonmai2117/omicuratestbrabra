import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import { Stethoscope, Building2, ShieldCheck, AlertCircle, Clock, BarChart3, TrendingUp, Users, MessageCircle, Waves, Target, XCircle, CheckCircle2 } from 'lucide-react';

const LandingPage = () => {
    // State to trigger purely CSS based animations once page loads
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        // Small delay to let the page render before starting animations to make it feel organic
        const timer = setTimeout(() => setAnimate(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="bg-white">
            {/* 1) Pain Points Section */}
            <div className="relative isolate px-6 pt-14 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
                <div className="mx-auto max-w-7xl py-24 sm:py-32">
                    <div className="text-center">
                        <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl mb-6">
                            The Challenge in Healthcare Networking
                        </h1>
                        <p className="mt-4 text-xl leading-8 text-gray-600 max-w-3xl mx-auto">
                            The current landscape of professional medical collaboration is fragmented. Clinics struggle to verify doctors, and doctors waste time navigating tedious registration processes across multiple platforms.
                        </p>
                    </div>

                    <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10">
                        {/* Pain Point 1 */}
                        <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden group">
                            <div className="absolute top-0 left-0 w-full h-1 bg-red-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                            <Clock className="w-12 h-12 text-red-500 mb-6" />
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Time-Consuming</h3>
                            <p className="text-gray-600">Manual verification and endless paperwork delay the onboarding process by weeks.</p>
                        </div>
                        {/* Pain Point 2 */}
                        <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden group">
                            <div className="absolute top-0 left-0 w-full h-1 bg-amber-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                            <AlertCircle className="w-12 h-12 text-amber-500 mb-6" />
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Fragmented Data</h3>
                            <p className="text-gray-600">Medical professional data is scattered, making it hard for clinics to find the right specialists securely.</p>
                        </div>
                        {/* Pain Point 3 */}
                        <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden group">
                            <div className="absolute top-0 left-0 w-full h-1 bg-orange-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                            <ShieldCheck className="w-12 h-12 text-orange-500 mb-6" />
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Security Risks</h3>
                            <p className="text-gray-600">Unverified networks expose sensitive collaboration channels to potential privacy & compliance issues.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* 1.5) Metaphor Comparison Section */}
            <div className="py-24 bg-white overflow-hidden relative">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
                            Finding Doctors <span className="text-blue-600">Shouldn't Be a Fishing Trip</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-6">
                            Most clinics waste time posting in crowded chat groups, hoping for the right doctor to bite. See how we change the game.
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row items-stretch gap-12 max-w-6xl mx-auto">
                        {/* THE OLD WAY */}
                        <div className="flex-1 bg-gray-50 border border-gray-200 rounded-3xl overflow-hidden group shadow-lg">
                            <div className="h-64 overflow-hidden relative">
                                <img src="/ocean_fishing_metaphor.png" alt="Fishing in Ocean Metaphor" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute top-4 left-4 bg-red-100 text-red-600 px-4 py-1 rounded-full text-sm font-bold tracking-wide shadow-md">THE OLD WAY</div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">LINE Chat Groups</h3>
                                <p className="text-gray-700 italic border-l-4 border-red-300 pl-4 py-2 bg-red-50/50 rounded-r-lg mb-6">
                                    "Like dropping bait into the vast ocean and praying quietly."
                                </p>
                                <ul className="space-y-4 text-gray-600">
                                    <li className="flex items-start gap-3">
                                        <XCircle className="w-6 h-6 text-red-500 shrink-0" />
                                        <span>Post blindly into massive chat rooms with no filters</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <XCircle className="w-6 h-6 text-red-500 shrink-0" />
                                        <span>Messages get buried quickly; wrong matches waste time</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <XCircle className="w-6 h-6 text-red-500 shrink-0" />
                                        <span>Hard to verify credibility and easy to lose track of info</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* CLINIC&CO */}
                        <div className="flex-1 bg-gradient-to-br from-gray-900 to-blue-900 rounded-3xl overflow-hidden group shadow-[0_20px_50px_rgba(37,99,235,0.2)] transform lg:scale-105 z-10 text-white">
                            <div className="h-64 overflow-hidden relative border-b border-gray-700">
                                <img src="/precision_target_metaphor.png" alt="Target Radar Metaphor" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute top-4 left-4 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide shadow-lg shadow-blue-500/50">CLINIC&CO</div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-white mb-2">Smart Target Matching</h3>
                                <p className="text-blue-100 italic border-l-4 border-blue-400 pl-4 py-2 bg-blue-800/30 rounded-r-lg mb-6">
                                    "Precision targeting. Direct to the right, verified specialist."
                                </p>
                                <ul className="space-y-4 text-blue-50">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0" />
                                        <span>Instantly filter out available, verified specialists</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0" />
                                        <span>Connect systematically in a dedicated Slack Workspace</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0" />
                                        <span>Professional and highly reliable matching success rate</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2) Animated Infographics Section (Data) */}
            <div className="py-24 bg-gray-900 text-white overflow-hidden relative">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-400 via-gray-900 to-gray-900"></div>
                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Empowering Connections with Data</h2>
                        <p className="text-lg text-gray-400">See how Clinic&Co transforms professional efficiency (Placeholders for real info)</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-10">
                            {/* Animated Progress Bar 1 */}
                            <div>
                                <div className="flex justify-between mb-3 text-lg">
                                    <span className="font-semibold flex items-center gap-2"><TrendingUp className="w-6 h-6 text-blue-400" /> Onboarding Speed Increased</span>
                                    <span className="font-bold text-blue-400">85%</span>
                                </div>
                                <div className="w-full bg-gray-800 rounded-full h-5 relative overflow-hidden shadow-inner">
                                    <div 
                                        className={`bg-gradient-to-r from-blue-600 to-cyan-400 h-5 rounded-full transition-all duration-[1500ms] ease-out shadow-[0_0_15px_rgba(56,189,248,0.5)]`}
                                        style={{ width: animate ? '85%' : '0%' }}
                                    ></div>
                                </div>
                            </div>
                            
                            {/* Animated Progress Bar 2 */}
                            <div>
                                <div className="flex justify-between mb-3 text-lg">
                                    <span className="font-semibold flex items-center gap-2"><Users className="w-6 h-6 text-purple-400" /> Verified Match Rates</span>
                                    <span className="font-bold text-purple-400">98%</span>
                                </div>
                                <div className="w-full bg-gray-800 rounded-full h-5 relative overflow-hidden shadow-inner">
                                    <div 
                                        className={`bg-gradient-to-r from-purple-600 to-pink-500 h-5 rounded-full transition-all duration-[1500ms] delay-300 ease-out shadow-[0_0_15px_rgba(216,180,254,0.5)]`}
                                        style={{ width: animate ? '98%' : '0%' }}
                                    ></div>
                                </div>
                            </div>

                            {/* Animated Progress Bar 3 */}
                            <div>
                                <div className="flex justify-between mb-3 text-lg">
                                    <span className="font-semibold flex items-center gap-2"><BarChart3 className="w-6 h-6 text-green-400" /> Administrative Effort Cut</span>
                                    <span className="font-bold text-green-400">60%</span>
                                </div>
                                <div className="w-full bg-gray-800 rounded-full h-5 relative overflow-hidden shadow-inner">
                                    <div 
                                        className={`bg-gradient-to-r from-green-500 to-emerald-400 h-5 rounded-full transition-all duration-[1500ms] delay-500 ease-out shadow-[0_0_15px_rgba(52,211,153,0.5)]`}
                                        style={{ width: animate ? '60%' : '0%' }}
                                    ></div>
                                </div>
                            </div>
                        </div>

                        {/* Animated Stat Cards */}
                        <div className="grid grid-cols-2 gap-6">
                            <div className={`bg-gray-800/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-700 transform transition-all duration-[1000ms] delay-300 shadow-2xl hover:bg-gray-700/80 ${animate ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                                <h4 className="text-5xl font-extrabold text-white mb-2">10k+</h4>
                                <p className="text-gray-400 font-medium">Verified Doctors</p>
                            </div>
                            <div className={`bg-gray-800/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-700 transform transition-all duration-[1000ms] delay-500 shadow-2xl hover:bg-gray-700/80 mt-8 ${animate ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                                <h4 className="text-5xl font-extrabold text-blue-400 mb-2">500+</h4>
                                <p className="text-gray-400 font-medium">Partner Clinics</p>
                            </div>
                            <div className={`bg-gray-800/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-700 transform transition-all duration-[1000ms] delay-700 shadow-2xl hover:bg-gray-700/80 ${animate ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                                <h4 className="text-5xl font-extrabold text-purple-400 mb-2">0</h4>
                                <p className="text-gray-400 font-medium">Data Breaches</p>
                            </div>
                            <div className={`bg-gray-800/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-700 transform transition-all duration-[1000ms] delay-[1100ms] shadow-2xl hover:bg-gray-700/80 mt-8 ${animate ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                                <h4 className="text-5xl font-extrabold text-green-400 mb-2">24/7</h4>
                                <p className="text-gray-400 font-medium">Live Support</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3) Original Feature Section (Verification First) */}
            <div className="py-24 sm:py-32 bg-gray-50 border-t border-gray-200">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:text-center">
                        <h2 className="text-base font-semibold leading-7 text-blue-600">Verification First</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Secure Platform for Professionals
                        </p>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            We ensure every member is verified before granting access to our community.
                        </p>
                    </div>
                    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
                            <div className="relative pl-16 group">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 group-hover:bg-blue-700 transition-colors">
                                        <Stethoscope className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    For Doctors
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-600">
                                    Verify your medical license and specialties to join our network of professionals.
                                </dd>
                            </div>
                            <div className="relative pl-16 group">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 group-hover:bg-blue-700 transition-colors">
                                        <Building2 className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    For Clinics
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-600">
                                    Register your facility with operating licenses to connect with doctors.
                                </dd>
                            </div>
                            <div className="relative pl-16 group">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 group-hover:bg-blue-700 transition-colors">
                                        <ShieldCheck className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    Secure Verification
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-600">
                                    Manual verification ensures a trusted environment for all participants.
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>

            {/* 4) Hero Section (Moved to Bottom as highly-visible Call to Action) */}
            <div className="relative isolate px-6 pb-32 pt-20 lg:px-8 bg-blue-50">
                <div className="mx-auto max-w-2xl text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-8">
                        Healthcare Registration Simplified
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Join Clinic&Co today. Seamlessly connect doctors and clinics to our secure Slack workspace for unified collaboration.
                    </p>
                    <div className="mt-12 flex items-center justify-center gap-x-6 hover:scale-105 transition-transform duration-300">
                        <Link to="/register">
                            <Button variant="primary" className="px-10 py-4 text-xl shadow-xl hover:shadow-2xl">
                                Get Started Today
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
