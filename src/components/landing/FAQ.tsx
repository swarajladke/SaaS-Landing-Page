"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
    { question: "How to use this template?", answer: "A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem." },
    { question: "What are your shipping rates?", answer: "A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem." },
    { question: "What is your refund policy?", answer: "A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem." },
    { question: "How can I track my order?", answer: "A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem." },
    { question: "How to Use this Template?", answer: "A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem." },
    { question: "I received the wrong item, what do I do?", answer: "A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem." },
    { question: "Best web design agency ever is?", answer: "A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem." },
    { question: "What are benefits of this template?", answer: "A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem." },
    { question: "How can i order web design services?", answer: "A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem." },
    { question: "How promote the product?", answer: "A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem  good design is not only aesthetically pleasing, but also functional." },
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(9);

    return (
        <section className="py-32 bg-black">
            <Container>
                <div className="mb-20">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Frequently Asked Questions</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4">
                    {faqs.map((faq, idx) => (
                        <div
                            key={idx}
                            onClick={() => setOpenIndex(idx)}
                            className={`rounded-[2rem] border border-white/5 p-8 cursor-pointer transition-all duration-300 ${openIndex === idx ? 'bg-white/5 border-white/10' : 'bg-transparent hover:border-white/10'}`}
                        >
                            <div className="flex justify-between items-center bg-transparent">
                                <h3 className="text-white font-bold text-lg">{faq.question}</h3>
                                <div className="w-6 h-6 flex items-center justify-center opacity-40">
                                    <Plus className="w-5 h-5 text-white" />
                                </div>
                            </div>
                            {openIndex === idx && (
                                <div className="mt-8 pt-8 border-t border-white/5">
                                    <p className="text-slate-500 text-base leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
