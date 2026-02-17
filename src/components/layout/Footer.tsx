"use client";

import Link from "next/link";
import { Container } from "./Container";
import { Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-black py-20 border-t border-white/5">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                    <div className="col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 bg-gradient-brand rounded-lg flex items-center justify-center bg-gradient-primary">
                                <span className="text-white text-xl">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="3" />
                                        <circle cx="19" cy="5" r="2" />
                                        <circle cx="5" cy="19" r="2" />
                                    </svg>
                                </span>
                            </div>
                            <span className="text-xl font-bold text-white">Squid</span>
                        </div>
                        <p className="text-slate-500 leading-relaxed text-sm">
                            A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem.
                        </p>
                    </div>

                    <div className="grid grid-cols-3 col-span-3 gap-8">
                        <div>
                            <h4 className="font-bold mb-6 text-white text-sm">Sections</h4>
                            <ul className="space-y-4 text-sm text-slate-500">
                                <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                                <li><Link href="#features" className="hover:text-primary transition-colors">Features</Link></li>
                                <li><Link href="#pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
                                <li><Link href="#testimonials" className="hover:text-primary transition-colors">Testimonials</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-6 text-white text-sm">&nbsp;</h4>
                            <ul className="space-y-4 text-sm text-slate-500">
                                <li><Link href="/login" className="hover:text-primary transition-colors">Login</Link></li>
                                <li><Link href="/signup" className="hover:text-primary transition-colors">Sign Up</Link></li>
                                <li><Link href="/dashboard" className="hover:text-primary transition-colors">Dashboard</Link></li>
                                <li><Link href="#faq" className="hover:text-primary transition-colors">FAQ</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-6 text-white text-sm">Resources</h4>
                            <ul className="space-y-4 text-sm text-slate-500">
                                <li><Link href="/support" className="hover:text-primary transition-colors">Support</Link></li>
                                <li><Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                                <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                                <li><Link href="/api-docs" className="hover:text-primary transition-colors">API Reference</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-sm text-slate-600">All Rights Reserved Inkyy.com 2024</p>
                    <div className="flex gap-3">
                        <Link href="#" className="w-14 h-14 bg-[#222228] rounded-2xl flex items-center justify-center text-white hover:bg-[#2a2a32] transition-colors shadow-xl">
                            <Linkedin className="w-6 h-6" />
                        </Link>
                        <Link href="#" className="w-14 h-14 bg-[#222228] rounded-2xl flex items-center justify-center text-white hover:bg-[#2a2a32] transition-colors shadow-xl">
                            <Twitter className="w-6 h-6" />
                        </Link>
                        <Link href="#" className="w-14 h-14 bg-[#222228] rounded-2xl flex items-center justify-center text-white hover:bg-[#2a2a32] transition-colors shadow-xl">
                            <Github className="w-6 h-6" />
                        </Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
