"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export function MoreSections() {
    return (
        <section className="py-32 bg-black border-t border-white/5">
            <Container>
                <div className="mb-20 text-center md:text-left">
                    <h2 className="text-4xl md:text-7xl font-extrabold text-white tracking-tight">More Sections</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="p-12 rounded-[3.5rem] bg-white/5 border border-white/10 flex flex-col gap-8 hover:bg-white/[0.07] transition-colors group">
                            <h3 className="text-white text-3xl font-bold leading-tight">Guide Cards</h3>
                            <p className="text-slate-500 text-lg leading-relaxed">
                                A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem.
                            </p>
                            <div className="mt-4">
                                <Button className="bg-white/5 text-white border border-white/10 px-8 h-12 rounded-xl hover:bg-white/10 transition-all font-bold text-sm">
                                    Download
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
