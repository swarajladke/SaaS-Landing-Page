"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Users, Building2, UserCheck, UserPlus, Loader2 } from "lucide-react";

export default function DashboardPage() {
    const [counts, setCounts] = useState({ users: 0, companies: 0 });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/users");
                const userData = response.data;
                const uniqueCompanies = new Set(userData.map((u: any) => u.company.name)).size;
                setCounts({
                    users: userData.length,
                    companies: uniqueCompanies
                });
            } catch (err) {
                console.error("Failed to fetch stats", err);
            } finally {
                setIsLoading(false);
            }
        };
        fetchStats();
    }, []);

    const stats = [
        { label: "Total Users", value: isLoading ? "..." : counts.users.toString(), icon: Users, color: "text-blue-600", bg: "bg-blue-50" },
        { label: "Total Companies", value: isLoading ? "..." : counts.companies.toString(), icon: Building2, color: "text-purple-600", bg: "bg-purple-50" },
        { label: "Active Now", value: "4", icon: UserCheck, color: "text-green-600", bg: "bg-green-50" },
        { label: "New Users", value: "+2", icon: UserPlus, color: "text-orange-600", bg: "bg-orange-50" },
    ];

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-foreground">Dashboard Overview</h1>
                <p className="text-muted mt-2">Welcome back! Here's what's happening today.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="p-6 bg-background rounded-xl border border-border shadow-sm"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <div className={`p-2 rounded-lg ${stat.bg}`}>
                                <stat.icon className={`h-6 w-6 ${stat.color}`} />
                            </div>
                            <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full">+12%</span>
                        </div>
                        <div>
                            <p className="text-sm text-muted font-medium">{stat.label}</p>
                            <h3 className="text-3xl font-bold text-foreground mt-1">{stat.value}</h3>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="p-6 bg-background rounded-xl border border-border shadow-sm h-80 flex flex-col">
                    <h3 className="text-lg font-bold mb-4">User Growth</h3>
                    <div className="flex-grow flex items-end gap-2 px-2">
                        {[40, 65, 45, 90, 75, 55, 85].map((height, i) => (
                            <div
                                key={i}
                                className="flex-grow bg-primary/20 hover:bg-primary transition-colors rounded-t-sm relative group"
                                style={{ height: `${height}%` }}
                            >
                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-foreground text-background text-[10px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                    {height} users
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between mt-4 text-xs text-muted">
                        <span>Mon</span>
                        <span>Tue</span>
                        <span>Wed</span>
                        <span>Thu</span>
                        <span>Fri</span>
                        <span>Sat</span>
                        <span>Sun</span>
                    </div>
                </div>

                <div className="p-6 bg-background rounded-xl border border-border shadow-sm h-80">
                    <h3 className="text-lg font-bold mb-4">Recent Activity</h3>
                    <div className="space-y-4">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="flex items-center gap-4">
                                <div className="h-2 w-2 rounded-full bg-primary" />
                                <div className="flex-grow">
                                    <p className="text-sm font-medium">New user registered</p>
                                    <p className="text-xs text-muted">2 hours ago</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
