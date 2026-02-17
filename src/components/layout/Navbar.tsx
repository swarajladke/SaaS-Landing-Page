"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "./Container";
import { motion } from "framer-motion";

export function Navbar() {
    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 z-50 w-full bg-[#050505]/80 backdrop-blur-xl px-6 overflow-hidden"
        >
            {/* Hero-like Grid Layer */}
            <div className="absolute inset-0 z-0 pointer-events-none bg-grid-lines opacity-70" />

            {/* Subtle Gradient to blend with Hero top */}
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 opacity-50" />
            <div className="relative z-10 max-w-7xl mx-auto h-20 flex items-center justify-between">
                <div className="flex items-center gap-2 group cursor-pointer">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-brand rounded-lg flex items-center justify-center bg-gradient-primary">
                            <span className="text-white text-xl">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="3" />
                                    <circle cx="19" cy="5" r="2" />
                                    <circle cx="5" cy="19" r="2" />
                                </svg>
                            </span>
                        </div>
                        <span className="text-xl font-extrabold tracking-tight text-white">Squid</span>
                    </Link>
                </div>

                <div className="flex items-center gap-10">
                    <nav className="hidden md:block">
                        <Link href="/" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Home</Link>
                    </nav>

                    <Link href="/login">
                        <Button className="bg-gradient-primary border-none text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity">
                            Download Template
                        </Button>
                    </Link>
                </div>
            </div>
        </motion.header>
    );
}
