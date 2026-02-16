"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { cn } from "@/lib/utils";
import {
    LayoutDashboard,
    Users,
    Settings,
    LogOut,
    ChevronLeft,
    ChevronRight
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";

export function Sidebar() {
    const pathname = usePathname();
    const { logout, user } = useAuth();
    const [collapsed, setCollapsed] = useState(false);

    const navItems = [
        { label: "Overview", href: "/dashboard", icon: LayoutDashboard },
        { label: "Users", href: "/users", icon: Users },
        { label: "Settings", href: "/settings", icon: Settings },
    ];

    return (
        <div
            className={cn(
                "flex flex-col border-r border-border bg-background transition-all duration-300 relative",
                collapsed ? "w-20" : "w-64"
            )}
        >
            <div className="flex h-16 items-center justify-between px-6 border-b border-border">
                {!collapsed && (
                    <span className="text-xl font-bold text-primary">SaaSNext</span>
                )}
                {collapsed && (
                    <span className="text-xl font-bold text-primary mx-auto">S</span>
                )}
            </div>

            <nav className="flex-grow p-4 space-y-2">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
                                isActive
                                    ? "bg-primary text-primary-foreground"
                                    : "text-muted hover:bg-accent hover:text-foreground",
                                collapsed && "justify-center px-0"
                            )}
                        >
                            <item.icon className="h-5 w-5 shrink-0" />
                            {!collapsed && <span>{item.label}</span>}
                        </Link>
                    );
                })}
            </nav>

            <div className="p-4 border-t border-border space-y-4">
                {!collapsed && user && (
                    <div className="flex items-center gap-3 px-3 py-2">
                        <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs">
                            {user.name.charAt(0).toUpperCase()}
                        </div>
                        <div className="flex-grow overflow-hidden">
                            <p className="text-sm font-medium truncate">{user.name}</p>
                            <p className="text-xs text-muted truncate">{user.email}</p>
                        </div>
                    </div>
                )}

                <button
                    onClick={logout}
                    className={cn(
                        "flex w-full items-center gap-3 px-3 py-2 rounded-md text-muted hover:bg-red-50 hover:text-red-600 transition-colors",
                        collapsed && "justify-center px-0"
                    )}
                >
                    <LogOut className="h-5 w-5 shrink-0" />
                    {!collapsed && <span>Logout</span>}
                </button>
            </div>

            <button
                onClick={() => setCollapsed(!collapsed)}
                className="absolute -right-3 top-20 h-6 w-6 rounded-full border border-border bg-background flex items-center justify-center hover:bg-accent shadow-sm"
            >
                {collapsed ? <ChevronRight className="h-3 w-3" /> : <ChevronLeft className="h-3 w-3" />}
            </button>
        </div>
    );
}
