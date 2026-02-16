"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";

const companies = [
    { name: "Smile", style: "font-black italic tracking-tighter" },
    { name: "URBAN", style: "font-black tracking-widest" },
    { name: "natural", style: "font-light tracking-widest text-lowercase" },
    { name: "WAVE", style: "font-extrabold italic" },
    { name: "HAPPY", style: "font-serif" },
    { name: "Alisa", style: "font-mono uppercase" }
];

export function Companies() {
    return (
        <section className="py-24 bg-black border-t border-white/5">
            <Container className="text-center">
                <h3 className="text-2xl font-bold mb-16 text-slate-300">Companies we Worked With Since 2015</h3>

                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500 text-white cursor-default">
                    {companies.map((company, index) => (
                        <motion.span
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`text-2xl ${company.style}`}
                        >
                            {company.name}
                        </motion.span>
                    ))}
                </div>
            </Container>
        </section>
    );
}
