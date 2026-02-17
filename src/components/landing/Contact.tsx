"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export function Contact() {
    return (
        <section id="contact" className="py-32 bg-black overflow-hidden border-t border-white/5">
            <Container className="grid md:grid-cols-2 gap-20 items-center">
                <div className="relative h-[400px] flex items-center justify-center">
                    <div className="absolute inset-0 border border-white/[0.03] rounded-full scale-125"></div>
                    <div className="absolute inset-0 border border-white/[0.05] rounded-full scale-110"></div>
                    <div className="relative w-80 h-80 flex items-center justify-center overflow-hidden">
                        <img
                            src="/contact-globe.png"
                            alt="Contact Globe"
                            className="w-full h-full object-contain opacity-40 scale-[1.6]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                    </div>
                </div>

                <div>
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white tracking-tight">Get In Touch</h2>
                    <p className="text-slate-400 mb-10 text-lg leading-relaxed max-w-lg">
                        A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem and also provide the best user experience.
                    </p>
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 gap-6">
                            <input
                                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-white placeholder:text-slate-500 transition-all font-medium"
                                placeholder="Your Email"
                                type="email"
                            />
                            <input
                                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-white placeholder:text-slate-500 transition-all font-medium"
                                placeholder="Name"
                                type="text"
                            />
                            <textarea
                                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 text-white placeholder:text-slate-500 resize-none transition-all font-medium"
                                placeholder="Message"
                                rows={4}
                            ></textarea>
                        </div>
                        <Button className="bg-gradient-primary border-none px-10 py-4 font-bold rounded-xl shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity h-auto uppercase tracking-widest text-xs">
                            Get In Touch
                        </Button>
                    </form>
                </div>
            </Container>
        </section>
    );
}
