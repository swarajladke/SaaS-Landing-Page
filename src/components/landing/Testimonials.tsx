"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Star } from "lucide-react";

const testimonials = [
    {
        name: "Jane Doe",
        role: "CEO of Inkyy.com",
        feedback: "Designers need to have a strong understanding of the principles of design in order to create effective solutions. They must also be aware of the latest trends and technologies so that they can stay ahead of the curve.",
        stars: 5,
    },
    {
        name: "Jane Doe",
        role: "CEO of Inkyy.com",
        feedback: "Designers need to have a strong understanding of the principles of design in order to create effective solutions. They must also be aware of the latest trends and technologies so that they can stay ahead of the curve.",
        stars: 5,
    },
    {
        name: "Jane Doe",
        role: "CEO of Inkyy.com",
        feedback: "Designers need to have a strong understanding of the principles of design in order to create effective solutions. They must also be aware of the latest trends and technologies so that they can stay ahead of the curve.",
        stars: 2,
    }
];

export function Testimonials() {
    return (
        <section className="py-32 bg-black overflow-hidden">
            <Container>
                <div className="text-left mb-20 px-6">
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">Testimonials</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((t, idx) => (
                        <div
                            key={idx}
                            className="p-12 rounded-[3rem] bg-white/5 border border-white/10 flex flex-col gap-10 hover:-translate-y-2 transition-transform duration-300"
                        >
                            <p className="text-slate-500 text-lg leading-relaxed italic">
                                "{t.feedback}"
                            </p>
                            <div className="flex items-center justify-between mt-auto">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-slate-800" />
                                    <div className="text-left">
                                        <h4 className="text-white font-bold text-base">{t.name}</h4>
                                        <p className="text-slate-500 text-xs uppercase tracking-widest">{t.role}</p>
                                    </div>
                                </div>
                                <div className="flex gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className={`w-3 h-3 ${i < t.stars ? "fill-white text-white" : "fill-white/10 text-white/10"}`} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
