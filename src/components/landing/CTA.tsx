"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

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
                    <div className="absolute right-0 top-0 h-full w-full md:w-1/2 opacity-20 pointer-events-none">
                        <img
                            alt="Abstract world map background pattern"
                            className="w-full h-full object-contain object-right scale-110 translate-x-10"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbSTTaRzVAZBDj6UYvR1d98Lxr55QO8OOdWMCtw61M_zSkDvna0H1Oj6oQValQQnTQjXTsDBesEXVa7hj_zCpyqDMhN1rBhQAwshNCJ243gxDeBz1am-OpOsLbacn-tnHN3KqPCUhAkTFYRdM7tWGEPQYGE6W0l9MZKwb2MUSIoAf_OxywWhmDnm-n7YRqnyt4hqm-S3CmNi8S0uoSgSJ8OHKhQQs7rrhkUBZuSbIxcKndTddeHzgtgI_somPpkOyPkVjbJ-AF3qUu"
                        />
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
