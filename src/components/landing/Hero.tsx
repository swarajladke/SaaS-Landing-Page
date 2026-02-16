"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";

export function Hero() {
    return (
        <section className="relative pt-44 pb-44 overflow-hidden bg-[#050505]">
            {/* Background Pattern: Vertical Lines (More Visible) */}
            <div className="absolute inset-0 z-0 pointer-events-none bg-grid-lines opacity-70" />

            {/* Background Orbs (Figma Match) */}
            {/* Ellipse 14 (Top Left) */}
            <div
                className="absolute z-0 pointer-events-none rounded-full"
                style={{
                    width: '140px',
                    height: '140px',
                    left: '120px',
                    top: '420px',
                    background: 'radial-gradient(1202.04% 1056.38% at 42.92% -7.08%, #494955 0%, #141414 100%)',
                    filter: 'blur(35px)',
                    opacity: 0.8
                }}
            />

            {/* Ellipse 13 (Top Right) */}
            <div
                className="absolute z-0 pointer-events-none rounded-full"
                style={{
                    width: '220px',
                    height: '220px',
                    right: '180px',
                    top: '300px',
                    background: 'radial-gradient(1202.04% 1056.38% at 42.92% -7.08%, #494955 0%, #141414 100%)',
                    filter: 'blur(50px)',
                    opacity: 0.6
                }}
            />

            {/* Ellipse 3 (Center Area) */}
            <div
                className="absolute z-0 pointer-events-none rounded-full"
                style={{
                    width: '320px',
                    height: '320px',
                    left: '15%',
                    top: '650px',
                    background: 'radial-gradient(1202.04% 1056.38% at 42.92% -7.08%, #494955 0%, #141414 100%)',
                    filter: 'blur(70px)',
                    opacity: 0.5
                }}
            />

            {/* Additional Orb (Far Right) */}
            <div
                className="absolute z-0 pointer-events-none rounded-full"
                style={{
                    width: '240px',
                    height: '240px',
                    right: '5%',
                    top: '750px',
                    background: 'radial-gradient(1202.04% 1056.38% at 42.92% -7.08%, #494955 0%, #141414 100%)',
                    filter: 'blur(50px)',
                    opacity: 0.6
                }}
            />

            <Container className="relative z-10">
                <div className="text-center max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-6xl md:text-8xl font-extrabold mb-10 tracking-tight text-white leading-[1.05]">
                            Beautiful Landing Page <br className="hidden md:block" />
                            Design for You
                        </h1>
                        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-14 leading-relaxed font-medium">
                            A good design is not only aesthetically pleasing, but also <br className="hidden md:block" />
                            functional. It should be able to solve the problem
                        </p>
                        <div className="flex justify-center mb-32">
                            <Button className="bg-gradient-primary border-none text-white px-12 py-7 text-xs uppercase tracking-[0.2em] font-bold rounded-2xl shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all h-auto">
                                Download Template
                            </Button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative mx-auto max-w-6xl"
                    >
                        {/* DASHBOARD MOCKUP */}
                        <div className="rounded-[3rem] border border-white/10 bg-[#0A0A0B] p-2 shadow-[0_0_100px_-20px_rgba(128,84,255,0.3)] overflow-hidden relative group">
                            <div className="aspect-[16/9.5] bg-[#050505] rounded-[2.8rem] flex p-10 gap-10">
                                {/* Sidebar (Left) */}
                                <div className="w-[20%] h-full flex flex-col items-center py-4 border-r border-white/5 relative">
                                    <div className="w-10 h-10 bg-white/5 rounded-2xl mb-12 flex items-center justify-center">
                                        <div className="w-4 h-4 rounded-[3px] border border-white/20" />
                                    </div>
                                    <div className="flex flex-col gap-8 w-full px-6">
                                        {[1, 2, 3, 4, 5].map(i => (
                                            <div key={i} className="h-1.5 w-full bg-white/5 rounded-full" />
                                        ))}
                                    </div>
                                    {/* User Avatar bottom */}
                                    <div className="mt-auto pb-4">
                                        <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10">
                                            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop" alt="User" className="w-full h-full object-cover" />
                                        </div>
                                    </div>
                                </div>

                                {/* Main Content Widgets */}
                                <div className="flex-grow flex flex-col gap-10">
                                    <div className="flex gap-10 h-[45%]">
                                        {/* Widget 1: Progress Ring */}
                                        <div className="flex-grow bg-[#0A0A0B] rounded-[2rem] border border-white/5 p-8 flex items-center justify-center relative overflow-hidden group/widget">
                                            <div className="absolute inset-0 bg-gradient-brand opacity-0 group-hover/widget:opacity-5 transition-opacity" />
                                            <div className="relative w-40 h-40">
                                                <svg className="w-full h-full -rotate-90">
                                                    <circle cx="80" cy="80" r="70" className="stroke-white/5 fill-none" strokeWidth="14" />
                                                    <motion.circle
                                                        cx="80" cy="80" r="70"
                                                        className="fill-none"
                                                        strokeWidth="14"
                                                        strokeLinecap="round"
                                                        initial={{ strokeDasharray: "0 440" }}
                                                        whileInView={{ strokeDasharray: "320 440" }}
                                                        transition={{ duration: 2, ease: "easeOut" }}
                                                        style={{ stroke: "url(#grad1)" }}
                                                    />
                                                    <defs>
                                                        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                                                            <stop offset="0%" stopColor="#FF9898" />
                                                            <stop offset="100%" stopColor="#8054FF" />
                                                        </linearGradient>
                                                    </defs>
                                                </svg>
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <div className="w-20 h-20 rounded-full border border-white/5 bg-white/5" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Widget 2: Social List */}
                                        <div className="w-[40%] bg-[#0A0A0B] rounded-[2rem] border border-white/5 p-8 flex flex-col gap-6 justify-center">
                                            {[
                                                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
                                                "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
                                                "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6",
                                                "https://images.unsplash.com/photo-1517841905240-472988babdf9"
                                            ].map((url, i) => (
                                                <div key={i} className="flex items-center gap-4">
                                                    <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10 shrink-0">
                                                        <img src={`${url}?q=80&w=50&auto=format&fit=crop`} alt="User" className="w-full h-full object-cover" />
                                                    </div>
                                                    <div className="flex flex-col gap-1.5 flex-grow">
                                                        <div className="h-1.5 w-full bg-white/10 rounded-full" />
                                                        <div className="h-1.5 w-1/2 bg-white/5 rounded-full" />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Widget 3: Large Bar Chart */}
                                    <div className="flex-grow bg-[#0A0A0B] rounded-[2.5rem] border border-white/5 p-10 flex flex-col">
                                        <div className="flex-grow flex items-end justify-between gap-4 px-4">
                                            {[60, 45, 85, 30, 95, 55, 75, 40].map((h, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ height: 0 }}
                                                    whileInView={{ height: `${h}%` }}
                                                    transition={{ duration: 1, delay: i * 0.1 }}
                                                    className="w-full rounded-t-xl relative group/bar"
                                                    style={{
                                                        background: 'linear-gradient(180deg, #8054FF 0%, rgba(128,84,255,0.2) 100%)',
                                                        boxShadow: '0 0 20px rgba(128,84,255,0.1)'
                                                    }}
                                                >
                                                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover/bar:opacity-100 transition-opacity rounded-t-xl" />
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Background Glow Behind Mockup */}
                        <div className="absolute -inset-20 bg-primary/20 blur-[120px] -z-20 opacity-40" />
                    </motion.div>
                </div>
            </Container>

            {/* Pinkish Glide Decoration (Figma Match) - RESTORED */}
            <div className="absolute top-[950px] left-1/2 -translate-x-1/2 w-[1446px] h-[616px] -z-0 pointer-events-none overflow-hidden hidden md:block">
                {/* Main Gradient Shape (Rectangle 59 / Subtract) */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(92.51deg, #FF9898 0.48%, #8054FF 100%)',
                    }}
                />

                {/* Top Scoop (Ellipse 16) - Cuts into the gradient to create the swoop */}
                <div
                    className="absolute w-[1732.9px] h-[516.18px] left-[-147.02px] top-[-258.1px] bg-black rounded-[100%]"
                />

                {/* Bottom Scoop (Ellipse 17) - Defines the bottom curve */}
                <div
                    className="absolute w-[1732.9px] h-[516.18px] left-[-147.02px] top-[503.5px] bg-black rounded-[100%]"
                />
            </div>

            {/* Mobile Fallback Decoration */}
            <div className="md:hidden absolute bottom-[-50px] left-0 w-full h-[300px] bg-gradient-brand opacity-50 blur-[100px] -z-10" />
        </section>
    );
}
