"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { WORLD_MAP_VECTORS } from "./WorldMapData";

export function CTA() {
    return (
        <section className="py-20 bg-black">
            <Container className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative rounded-[2.5rem] overflow-hidden p-12 md:p-24 bg-gradient-brand text-white bg-gradient-to-r from-[#FFB295] via-[#EC4899] to-[#7000FF]"
                >
                    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-30 select-none translate-x-[15%]">
                        <div className="relative w-full h-full max-w-[600px] ml-auto">
                            {WORLD_MAP_VECTORS.map((v, i) => (
                                <div
                                    key={i}
                                    className="absolute bg-white"
                                    style={{
                                        left: `${v.l}%`,
                                        right: `${v.r}%`,
                                        top: `${v.t}%`,
                                        bottom: `${v.b}%`,
                                        boxShadow: '0 0 2px rgba(255,255,255,0.3)'
                                    }}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="relative z-10 max-w-xl">
                        <p className="text-white/80 font-semibold mb-4 uppercase tracking-wider text-sm">Love our Our Tool?</p>
                        <h2 className="text-4xl md:text-6xl font-extrabold mb-10 leading-[1.1] tracking-tight">
                            Feel Free to Join our <br />
                            15 Days Free Trial
                        </h2>
                        <Button className="inline-block px-10 py-5 bg-black text-white font-bold rounded-xl hover:bg-black/80 transition-all shadow-xl h-auto border-none uppercase tracking-widest text-xs">
                            Download Template
                        </Button>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}
