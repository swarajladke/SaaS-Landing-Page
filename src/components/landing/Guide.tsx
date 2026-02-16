"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export function Guide() {
    const orbitingIcons = [
        { color: "#FF5C00", x: "-60%", y: "-30%", size: "w-14 h-14", icon: "F" }, // Orange Circle
        { color: "#FFD600", x: "70%", y: "-20%", size: "w-14 h-14", icon: "☺" }, // Yellow Circle
        { color: "#0057FF", x: "-40%", y: "60%", size: "w-14 h-14", icon: "W" }, // Blue Circle
        { color: "#A855F7", x: "40%", y: "40%", size: "w-3 h-3", blur: true }, // Purple Glow
        { color: "#EC4899", x: "-70%", y: "20%", size: "w-3 h-3", blur: true }, // Pink Glow
        { color: "#7000FF", x: "20%", y: "-60%", size: "w-3 h-3", blur: true }, // Deep Purple Glow
    ];

    return (
        <section className="py-32 bg-black overflow-hidden">
            <Container className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div className="relative aspect-square max-w-[600px] mx-auto lg:mx-0 flex items-center justify-center scale-75 md:scale-100">
                    {/* Orbital Rings - Concentric Circles */}
                    <div className="absolute w-full h-full border border-white/5 rounded-full" />
                    <div className="absolute w-[70%] h-[70%] border border-white/5 rounded-full" />
                    <div className="absolute w-[40%] h-[40%] border border-white/5 rounded-full" />

                    {/* Faint Grid lines within orbit for texture */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/20" />
                        <div className="absolute left-1/2 top-0 w-[1px] h-full bg-white/20" />
                    </div>

                    {/* Center Icon (Group 211) */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        className="z-20 w-28 h-28 bg-[#111111] border border-white/10 rounded-[2.5rem] flex items-center justify-center shadow-2xl relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-gradient-brand opacity-0 group-hover:opacity-20 transition-opacity" />
                        {/* Squid Logo Style */}
                        <div className="relative flex flex-col gap-1.5">
                            <div className="w-8 h-1.5 bg-white rounded-full" />
                            <div className="w-10 h-1.5 bg-white rounded-full translate-x-1" />
                            <div className="w-8 h-1.5 bg-white rounded-full" />
                        </div>
                    </motion.div>

                    {/* Orbiting Elements */}
                    {orbitingIcons.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            animate={!item.blur ? {
                                y: [0, idx % 2 === 0 ? 10 : -10, 0],
                            } : {}}
                            transition={{
                                y: { duration: 4 + idx, repeat: Infinity, ease: "easeInOut" },
                                delay: idx * 0.1,
                            }}
                            style={{
                                position: 'absolute',
                                left: `calc(50% + (${item.x} / 2))`,
                                top: `calc(50% + (${item.y} / 2))`,
                                backgroundColor: item.blur ? item.color : '#222228',
                            }}
                            className={`z-10 ${item.size} rounded-[1.8rem] flex items-center justify-center p-3 shadow-2xl border border-white/5 ${item.blur ? 'blur-[8px] opacity-60' : ''}`}
                        >
                            {!item.blur && (
                                <div
                                    className="w-full h-full rounded-2xl flex items-center justify-center text-white font-bold text-xl"
                                    style={{ backgroundColor: item.color }}
                                >
                                    {item.icon}
                                </div>
                            )}
                        </motion.div>
                    ))}

                    {/* Ambient Glow */}
                    <div className="absolute inset-0 bg-gradient-brand blur-[120px] opacity-10 -z-10" />
                </div>

                <div className="text-left lg:pl-10">
                    <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-10 leading-[1.05] tracking-tight">
                        We're here to <br />
                        guide and help <br />
                        you at all times
                    </h2>
                    <p className="text-slate-400 text-lg leading-relaxed mb-12 max-w-sm">
                        A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem
                    </p>
                    <Button className="bg-gradient-primary border-none text-white px-10 h-14 rounded-2xl font-bold text-xs uppercase tracking-[0.2em] shadow-lg shadow-primary/20 hover:opacity-90 active:scale-95 transition-all">
                        Download
                    </Button>
                </div>
            </Container>
        </section>
    );
}
