"use client";

import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Container } from "@/components/layout/Container";
import { motion } from "framer-motion";
import { ArrowLeft, Loader2 } from "lucide-react";

export default function SignupPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { login, isLoading } = useAuth();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        try {
            // For fake auth, we'll just log them in after "signing up"
            await login(email, password);
        } catch (err: any) {
            setError(err.message || "Failed to create account");
        }
    };

    return (
        <div className="min-h-screen bg-black flex flex-col md:flex-row overflow-hidden">
            {/* Left Side: Registration Form */}
            <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-16 lg:p-24 relative z-10">
                <div className="w-full max-w-md">
                    <Link
                        href="/"
                        className="inline-flex items-center text-xs font-bold uppercase tracking-[0.2em] text-white/40 hover:text-white mb-12 transition-colors"
                    >
                        <ArrowLeft className="mr-2 h-3 w-3" />
                        Back to home
                    </Link>

                    <div className="mb-12">
                        <h1 className="text-5xl font-extrabold text-white tracking-tight mb-4">Register</h1>
                        <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                            A good design is not only aesthetically pleasing, but also functional.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <Input
                            type="text"
                            placeholder="Full Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="bg-[#111111] border-white/5 rounded-xl h-14 px-6 text-white placeholder:text-white/20 focus:border-white/20 transition-all font-medium"
                            required
                        />
                        <Input
                            type="email"
                            placeholder="Your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="bg-[#111111] border-white/5 rounded-xl h-14 px-6 text-white placeholder:text-white/20 focus:border-white/20 transition-all font-medium"
                            required
                        />
                        <Input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="bg-[#111111] border-white/5 rounded-xl h-14 px-6 text-white placeholder:text-white/20 focus:border-white/20 transition-all font-medium"
                            required
                        />
                        <Input
                            type="password"
                            placeholder="Repeat Password"
                            className="bg-[#111111] border-white/5 rounded-xl h-14 px-6 text-white placeholder:text-white/20 focus:border-white/20 transition-all font-medium"
                            required
                        />

                        <Button
                            type="submit"
                            className="w-full bg-gradient-brand border-none text-white h-14 rounded-xl font-bold text-xs uppercase tracking-widest hover:opacity-90 active:scale-[0.98] transition-all shadow-xl shadow-pink-500/10 mt-4"
                            style={{ background: 'linear-gradient(92.51deg, #FF9898 0.48%, #8054FF 100%)' }}
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Signing up...
                                </>
                            ) : "Signup Now"}
                        </Button>

                        <div className="grid grid-cols-2 gap-4 mt-6">
                            <button className="flex items-center justify-center gap-3 bg-[#111111] hover:bg-[#111111]/80 border border-white/5 text-white/60 text-[10px] font-bold uppercase tracking-widest h-12 rounded-xl transition-all">
                                <svg className="w-4 h-4" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M12.545,11.025h11.017c0.232,0.957,0.367,1.868,0.367,3.15c0,6.502-4.444,11.127-11.017,11.127C5.645,25.302,0,19.657,0,12.651C0,5.645,5.645,0,12.545,0c3.31,0,6.13,1.21,8.31,3.19l-3.37,3.37c-0.91-0.87-2.48-1.88-4.94-1.88c-4.22,0-7.66,3.5-7.66,7.82s3.44,7.82,7.66,7.82c4.89,0,6.72-3.51,7.01-5.32h-7.01V11.025z" />
                                </svg>
                                Google
                            </button>
                            <button className="flex items-center justify-center gap-3 bg-[#111111] hover:bg-[#111111]/80 border border-white/5 text-white/60 text-[10px] font-bold uppercase tracking-widest h-12 rounded-xl transition-all">
                                <svg className="w-4 h-4" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z" />
                                </svg>
                                Twitter
                            </button>
                        </div>
                    </form>

                    <p className="text-center text-sm text-slate-500 mt-12">
                        Already have an account?{" "}
                        <Link href="/login" className="text-white font-bold hover:underline transition-all">
                            Log in
                        </Link>
                    </p>
                </div>
            </div>

            {/* Right Side: Decorative Grid */}
            <div className="hidden md:flex w-1/2 bg-[#050505] items-center justify-center p-12 overflow-hidden relative">
                <div className="grid grid-cols-3 grid-rows-3 gap-6 w-full h-full max-w-4xl max-h-[800px]">
                    {/* Row 1 */}
                    <div className="rounded-[2.5rem] bg-[#111111]" />
                    <div className="rounded-[2.5rem] bg-[#111111] overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop"
                            alt="Professional Portrait"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="rounded-[2.5rem] bg-[#111111]" />

                    {/* Row 2 */}
                    <div className="rounded-[2.5rem] bg-[#111111] overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=400&auto=format&fit=crop"
                            alt="Professional Portrait"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="rounded-[2.5rem] bg-[#111111] flex items-center justify-center">
                        <div className="w-12 h-12 bg-[#222222] rounded-full blur-xl animate-pulse" />
                    </div>
                    <div className="rounded-[2.5rem] bg-amber-400 overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&auto=format&fit=crop"
                            alt="Professional Portrait"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Row 3 */}
                    <div className="rounded-[2.5rem] bg-[#111111]" />
                    <div className="rounded-[2.5rem] bg-[#111111] overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop"
                            alt="Professional Portrait"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="rounded-[2.5rem] bg-[#111111]" />
                </div>

                {/* Ambient Overlays */}
                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-purple-500/10 blur-[150px] -z-10" />
                <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-pink-500/10 blur-[150px] -z-10" />
            </div>
        </div>
    );
}
