"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface User {
    id: string;
    email: string;
    name: string;
}

interface AuthContextType {
    user: User | null;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
    isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const storedToken = localStorage.getItem("auth_token");
        const storedUser = localStorage.getItem("auth_user");

        if (storedToken && storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setIsLoading(false);
    }, []);

    const login = async (email: string, password: string) => {
        setIsLoading(true);
        // Fake auth logic - simulate snappier API delay
        await new Promise((resolve) => setTimeout(resolve, 300));

        // Check for any non-empty password (at least 6 chars for safety)
        if (password.length >= 6) {
            const mockUser = { id: "1", email, name: email.split("@")[0] };
            localStorage.setItem("auth_token", "fake-jwt-token");
            localStorage.setItem("auth_user", JSON.stringify(mockUser));
            setUser(mockUser);
            setIsLoading(false); // CRITICAL: Stop loading before redirect
            router.push("/dashboard");
        } else {
            setIsLoading(false);
            throw new Error("Invalid credentials or password too short.");
        }
    };

    const logout = () => {
        localStorage.removeItem("auth_token");
        localStorage.removeItem("auth_user");
        setUser(null);
        router.push("/");
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}
