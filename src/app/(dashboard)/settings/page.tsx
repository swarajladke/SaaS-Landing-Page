"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { useTheme } from "@/context/ThemeContext";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { motion } from "framer-motion";
import { User, Bell, Shield, Moon, Sun, Save } from "lucide-react";

export default function SettingsPage() {
    const { user } = useAuth();
    const { theme, toggleTheme } = useTheme();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [isSaving, setIsSaving] = useState(false);
    const [message, setMessage] = useState("");

    useEffect(() => {
        if (user) {
            setName(user.name);
            setEmail(user.email);
        }

        // Load other settings from localStorage
        const savedName = localStorage.getItem("settings_name");
        const savedEmail = localStorage.getItem("settings_email");
        if (savedName) setName(savedName);
        if (savedEmail) setEmail(savedEmail);
    }, [user]);

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSaving(true);
        setMessage("");

        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        localStorage.setItem("settings_name", name);
        localStorage.setItem("settings_email", email);

        setIsSaving(false);
        setMessage("Settings saved successfully!");

        setTimeout(() => setMessage(""), 3000);
    };

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-foreground">Settings</h1>
                <p className="text-muted mt-2">Manage your account settings and preferences.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                <div className="lg:col-span-1">
                    <nav className="flex flex-col gap-1">
                        <Button variant="ghost" className="justify-start gap-3 bg-accent/50">
                            <User className="h-4 w-4" /> Profile
                        </Button>
                        <Button variant="ghost" className="justify-start gap-3">
                            <Bell className="h-4 w-4" /> Notifications
                        </Button>
                        <Button variant="ghost" className="justify-start gap-3">
                            <Shield className="h-4 w-4" /> Security
                        </Button>
                    </nav>
                </div>

                <div className="lg:col-span-3 space-y-6">
                    <section className="bg-background rounded-xl border border-border shadow-sm overflow-hidden">
                        <div className="p-6 border-b border-border">
                            <h3 className="text-lg font-bold">Personal Information</h3>
                            <p className="text-sm text-muted">Update your personal details and how others see you.</p>
                        </div>
                        <form onSubmit={handleSave} className="p-6 space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Full Name</label>
                                    <Input
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Enter your name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Email Address</label>
                                    <Input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email"
                                    />
                                </div>
                            </div>
                            <div className="pt-4 flex items-center justify-between">
                                {message && (
                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="text-sm text-green-600 font-medium"
                                    >
                                        {message}
                                    </motion.p>
                                )}
                                <Button type="submit" className="ml-auto" disabled={isSaving}>
                                    {isSaving ? "Saving..." : "Save Changes"}
                                </Button>
                            </div>
                        </form>
                    </section>

                    <section className="bg-background rounded-xl border border-border shadow-sm overflow-hidden">
                        <div className="p-6 border-b border-border">
                            <h3 className="text-lg font-bold">Appearance</h3>
                            <p className="text-sm text-muted">Customize how the dashboard looks for you.</p>
                        </div>
                        <div className="p-6 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className={`p-2 rounded-lg ${theme === 'dark' ? 'bg-indigo-900/30' : 'bg-orange-100'}`}>
                                    {theme === 'dark' ? <Moon className="h-5 w-5 text-indigo-400" /> : <Sun className="h-5 w-5 text-orange-500" />}
                                </div>
                                <div>
                                    <p className="font-medium">Dark Mode</p>
                                    <p className="text-sm text-muted">Switch between light and dark themes.</p>
                                </div>
                            </div>
                            <Button variant="outline" onClick={toggleTheme} className="min-w-[100px]">
                                {theme === 'light' ? 'Enable' : 'Disable'}
                            </Button>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
