"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";

export function Hero() {
    return (
        <section className="relative pt-44 pb-32 overflow-hidden bg-black">
            {/* Background Pattern: Vertical Lines */}
            <div className="absolute inset-0 z-0 pointer-events-none bg-grid-lines" />

            {/* Background Glow from HTML */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[150%] flex items-center justify-center -z-10 pointer-events-none">
                <div className="hero-glow w-[100%] h-[400px] rounded-[100%] rotate-[-5deg]"></div>
            </div>

            <Container className="relative z-10">
                <div className="text-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight text-white leading-tight">
                            Beautiful Landing Page <br />
                            Design for You
                        </h1>
                        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
                            A good design is not only aesthetically pleasing, but also <br className="hidden md:block" />
                            functional. It should be able to solve the problem and create impact.
                        </p>
                        <div className="flex justify-center mb-24">
                            <Button className="bg-gradient-primary border-none text-white px-10 py-4 text-lg font-bold rounded-2xl shadow-lg shadow-purple-500/20 active:scale-95 transition-transform h-auto">
                                Download Template
                            </Button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 40 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative mx-auto max-w-5xl"
                    >
                        {/* Dashboard Mockup Component */}
                        <div className="rounded-3xl border border-white/10 bg-[#111111] p-1 shadow-2xl overflow-hidden relative group">
                            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
                            <div className="aspect-[16/10] bg-[#0A0A0A] rounded-[22px] flex p-6 gap-6">
                                {/* Simulated Dashboard Sidebar */}
                                <div className="w-1/4 h-full border-r border-white/5 flex flex-col gap-4">
                                    <div className="h-4 w-1/2 bg-white/10 rounded" />
                                    <div className="space-y-3 pt-4">
                                        {[1, 2, 3, 4, 5].map(i => (
                                            <div key={i} className="h-2 w-full bg-white/5 rounded-full" />
                                        ))}
                                    </div>
                                </div>
                                {/* Simulated Dashboard Content */}
                                <div className="flex-grow flex flex-col gap-6">
                                    <div className="flex gap-6 items-center">
                                        <div className="w-24 h-24 rounded-full border-8 border-[#7000FF] border-r-transparent animate-spin-slow p-2">
                                            <div className="w-full h-full rounded-full border-4 border-[#FF5BF3] border-b-transparent" />
                                        </div>
                                        <div className="flex-grow flex flex-col gap-3">
                                            <div className="h-4 w-1/3 bg-white/10 rounded" />
                                            <div className="h-2 w-2/3 bg-white/5 rounded" />
                                            <div className="flex -space-x-2 pt-2">
                                                {[1, 2, 3, 4].map(i => (
                                                    <div key={i} className="w-6 h-6 rounded-full bg-white/10 border border-[#0A0A0A]" />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-grow grid grid-cols-2 gap-4">
                                        <div className="bg-white/5 rounded-xl border border-white/5 flex flex-col p-4 gap-2">
                                            <div className="h-2 w-1/2 bg-white/10 rounded" />
                                            <div className="flex-grow bg-white/5 rounded-lg border border-white/5" />
                                        </div>
                                        <div className="bg-white/5 rounded-xl border border-white/5 flex flex-col p-4 gap-2">
                                            <div className="h-2 w-1/2 bg-white/10 rounded" />
                                            <div className="flex-grow bg-white/5 rounded-lg border border-white/5" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Glow Behind Mockup */}
                        <div className="absolute -inset-10 bg-gradient-primary blur-[100px] -z-10 opacity-30" />
                    </motion.div>
                </div>
            </Container>

            {/* Pinkish Glide Decoration (Figma Match) */}
            <div className="absolute top-[635px] left-1/2 -translate-x-1/2 w-[1446px] h-[616px] -z-0 pointer-events-none overflow-hidden hidden md:block">
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
