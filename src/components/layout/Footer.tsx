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
                                <li><Link href="#" className="hover:text-primary transition-colors">Home</Link></li>
                                <li><Link href="#" className="hover:text-primary transition-colors">Section One</Link></li>
                                <li><Link href="#" className="hover:text-primary transition-colors">Section Two</Link></li>
                                <li><Link href="#" className="hover:text-primary transition-colors">Section Three</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-6 text-white text-sm">&nbsp;</h4>
                            <ul className="space-y-4 text-sm text-slate-500">
                                <li><Link href="#" className="hover:text-primary transition-colors">Home</Link></li>
                                <li><Link href="#" className="hover:text-primary transition-colors">Section One</Link></li>
                                <li><Link href="#" className="hover:text-primary transition-colors">Section Two</Link></li>
                                <li><Link href="#" className="hover:text-primary transition-colors">Section Three</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-6 text-white text-sm">&nbsp;</h4>
                            <ul className="space-y-4 text-sm text-slate-500">
                                <li><Link href="#" className="hover:text-primary transition-colors">Home</Link></li>
                                <li><Link href="#" className="hover:text-primary transition-colors">Section One</Link></li>
                                <li><Link href="#" className="hover:text-primary transition-colors">Section Two</Link></li>
                                <li><Link href="#" className="hover:text-primary transition-colors">Section Three</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-sm text-slate-600">All Rights Reserved Inkyy.com 2024</p>
                    <div className="flex gap-6">
                        <Link href="#" className="text-slate-500 hover:text-white transition-colors">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                        </Link>
                        <Link href="#" className="text-slate-500 hover:text-white transition-colors">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                        </Link>
                        <Link href="#" className="text-slate-500 hover:text-white transition-colors">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" /><polyline points="16 6 12 2 8 6" /><line x1="12" y1="2" x2="12" y2="15" /></svg>
                        </Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
