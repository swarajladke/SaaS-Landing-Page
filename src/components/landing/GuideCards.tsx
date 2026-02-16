"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export function GuideCards() {
    return (
        <section className="py-32 bg-black">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Pink/Purple Card */}
                    <div className="rounded-[4rem] p-16 bg-gradient-to-br from-[#FFB295] to-[#7000FF] flex flex-col justify-between min-h-[550px] relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_top_right,white,transparent)]" />
                        <div className="relative z-10">
                            <h3 className="text-white text-5xl md:text-6xl font-extrabold leading-[1.1] mb-8 tracking-tight">
                                We're here to guide and help you at all times
                            </h3>
                            <p className="text-white/80 text-lg max-w-sm leading-relaxed">
                                A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem.
                            </p>
                        </div>
                        <div className="relative z-10 mt-12">
                            <Button className="bg-black text-white px-10 h-16 rounded-2xl hover:bg-black/80 transition-all font-bold text-sm tracking-widest uppercase shadow-2xl">
                                Download
                            </Button>
                        </div>
                    </div>

                    {/* Dark Card */}
                    <div className="rounded-[4rem] p-16 bg-white/5 border border-white/10 flex flex-col justify-between min-h-[550px] relative overflow-hidden group hover:bg-white/[0.07] transition-colors">
                        <div className="relative z-10">
                            <h3 className="text-white text-5xl md:text-6xl font-extrabold leading-[1.1] mb-8 tracking-tight">
                                We're here to guide and help you at all times
                            </h3>
                            <p className="text-slate-500 text-lg max-w-sm leading-relaxed">
                                A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem.
                            </p>
                        </div>
                        <div className="relative z-10 mt-12">
                            <Button className="bg-gradient-primary border-none text-white px-10 h-16 rounded-2xl hover:opacity-90 transition-all font-bold text-sm tracking-widest uppercase shadow-lg shadow-primary/20">
                                Download
                            </Button>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
