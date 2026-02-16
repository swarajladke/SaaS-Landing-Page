"use client";

import { ProtectedRoute } from "@/components/layout/ProtectedRoute";
import { Sidebar } from "@/components/layout/Sidebar";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ProtectedRoute>
            <div className="flex min-h-screen bg-accent/30">
                <Sidebar />
                <main className="flex-grow p-8 overflow-auto">
                    {children}
                </main>
            </div>
        </ProtectedRoute>
    );
}
