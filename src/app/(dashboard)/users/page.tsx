"use client";

import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import {
    Search,
    ChevronUp,
    ChevronDown,
    Eye,
    SearchX,
    ChevronLeft,
    ChevronRight,
    MoreVertical,
    Mail,
    MapPin,
    Phone,
    Globe,
    Building2
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import { Modal } from "@/components/ui/Modal";
import { motion, AnimatePresence } from "framer-motion";

interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
    };
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
    };
}

export default function UsersPage() {
    const [users, setUsers] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedUser, setSelectedUser] = useState<User | null>(null);

    const itemsPerPage = 5;

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/users");
                setUsers(response.data);
            } catch (err: any) {
                setError("Failed to fetch users. Please try again later.");
            } finally {
                setIsLoading(false);
            }
        };
        fetchUsers();
    }, []);

    const filteredAndSortedUsers = useMemo(() => {
        let result = users.filter(user =>
            user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.email.toLowerCase().includes(searchQuery.toLowerCase())
        );

        result.sort((a, b) => {
            if (sortOrder === "asc") return a.name.localeCompare(b.name);
            return b.name.localeCompare(a.name);
        });

        return result;
    }, [users, searchQuery, sortOrder]);

    const totalPages = Math.ceil(filteredAndSortedUsers.length / itemsPerPage);
    const currentUsers = filteredAndSortedUsers.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const toggleSort = () => {
        setSortOrder(prev => prev === "asc" ? "desc" : "asc");
    };

    if (error) {
        return (
            <div className="flex flex-col items-center justify-center py-20 bg-background rounded-xl border border-dashed border-red-200">
                <p className="text-red-500 mb-4">{error}</p>
                <Button onClick={() => window.location.reload()}>Retry</Button>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-foreground">User Management</h1>
                    <p className="text-muted mt-1">Manage and monitor all platform users in one place.</p>
                </div>
                <Button className="shrink-0">
                    Add New User
                </Button>
            </div>

            <div className="bg-background rounded-xl border border-border shadow-sm overflow-hidden">
                <div className="p-4 border-b border-border flex flex-col sm:flex-row gap-4 justify-between items-center bg-accent/10">
                    <div className="relative w-full sm:max-w-xs">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted" />
                        <Input
                            placeholder="Search by name or email..."
                            className="pl-9 h-10"
                            value={searchQuery}
                            onChange={(e) => {
                                setSearchQuery(e.target.value);
                                setCurrentPage(1);
                            }}
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-sm text-muted">Sort by:</span>
                        <Button variant="outline" size="sm" onClick={toggleSort} className="gap-2">
                            Name {sortOrder === "asc" ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                        </Button>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm border-collapse">
                        <thead className="bg-accent/30 text-muted-foreground font-medium border-b border-border">
                            <tr>
                                <th className="px-6 py-4">User</th>
                                <th className="px-6 py-4 hidden md:table-cell">Email</th>
                                <th className="px-6 py-4 hidden sm:table-cell">Company</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            {isLoading ? (
                                [...Array(5)].map((_, i) => (
                                    <tr key={i} className="animate-pulse">
                                        <td className="px-6 py-4"><div className="h-10 w-24 bg-accent rounded" /></td>
                                        <td className="px-6 py-4"><div className="h-10 w-32 bg-accent rounded" /></td>
                                        <td className="px-6 py-4"><div className="h-10 w-20 bg-accent rounded" /></td>
                                        <td className="px-6 py-4"><div className="h-10 w-16 bg-accent rounded" /></td>
                                        <td className="px-6 py-4"><div className="h-10 w-10 bg-accent rounded ml-auto" /></td>
                                    </tr>
                                ))
                            ) : currentUsers.length > 0 ? (
                                currentUsers.map((user) => (
                                    <motion.tr
                                        layout
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        key={user.id}
                                        className="hover:bg-accent/20 transition-colors group"
                                    >
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs shrink-0">
                                                    {user.name.charAt(0).toUpperCase()}
                                                </div>
                                                <span className="font-medium text-foreground">{user.name}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-muted hidden md:table-cell">{user.email}</td>
                                        <td className="px-6 py-4 text-muted hidden sm:table-cell">{user.company.name}</td>
                                        <td className="px-6 py-4">
                                            <Badge variant="secondary" className="bg-green-100 text-green-700 hover:bg-green-100">Active</Badge>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                className="h-8 w-8"
                                                onClick={() => setSelectedUser(user)}
                                            >
                                                <Eye className="h-4 w-4" />
                                            </Button>
                                        </td>
                                    </motion.tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={5} className="px-6 py-20 text-center">
                                        <div className="flex flex-col items-center justify-center text-muted">
                                            <SearchX className="h-12 w-12 mb-4 opacity-20" />
                                            <p className="text-lg font-medium">No users found</p>
                                            <p className="text-sm">Try adjusting your search filters.</p>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {!isLoading && totalPages > 1 && (
                    <div className="p-4 border-t border-border flex items-center justify-between bg-accent/10">
                        <p className="text-sm text-muted">
                            Page <span className="font-medium">{currentPage}</span> of <span className="font-medium">{totalPages}</span>
                        </p>
                        <div className="flex gap-2">
                            <Button
                                variant="outline"
                                size="sm"
                                disabled={currentPage === 1}
                                onClick={() => setCurrentPage(prev => prev - 1)}
                            >
                                <ChevronLeft className="h-4 w-4" />
                            </Button>
                            <Button
                                variant="outline"
                                size="sm"
                                disabled={currentPage === totalPages}
                                onClick={() => setCurrentPage(prev => prev + 1)}
                            >
                                <ChevronRight className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                )}
            </div>

            <Modal
                isOpen={!!selectedUser}
                onClose={() => setSelectedUser(null)}
                title="User Details"
                className="max-w-xl"
            >
                {selectedUser && (
                    <div className="space-y-8">
                        <div className="flex items-center gap-4">
                            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-2xl">
                                {selectedUser.name.charAt(0).toUpperCase()}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold">{selectedUser.name}</h3>
                                <p className="text-muted">{selectedUser.email}</p>
                                <Badge className="mt-2 bg-green-100 text-green-700 hover:bg-green-100">Status: Active</Badge>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <Phone className="h-5 w-5 text-muted shrink-0 mt-0.5" />
                                    <div>
                                        <p className="text-xs font-medium text-muted uppercase">Phone</p>
                                        <p className="text-sm">{selectedUser.phone}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Globe className="h-5 w-5 text-muted shrink-0 mt-0.5" />
                                    <div>
                                        <p className="text-xs font-medium text-muted uppercase">Website</p>
                                        <a href={`http://${selectedUser.website}`} target="_blank" className="text-sm text-primary hover:underline">{selectedUser.website}</a>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <Building2 className="h-5 w-5 text-muted shrink-0 mt-0.5" />
                                    <div>
                                        <p className="text-xs font-medium text-muted uppercase">Company</p>
                                        <p className="text-sm font-semibold">{selectedUser.company.name}</p>
                                        <p className="text-xs text-muted leading-tight">{selectedUser.company.catchPhrase}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <MapPin className="h-5 w-5 text-muted shrink-0 mt-0.5" />
                                    <div>
                                        <p className="text-xs font-medium text-muted uppercase">Address</p>
                                        <p className="text-sm leading-tight">
                                            {selectedUser.address.suite}, {selectedUser.address.street}<br />
                                            {selectedUser.address.city}, {selectedUser.address.zipcode}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pt-4 border-t border-border flex justify-end">
                            <Button variant="outline" onClick={() => setSelectedUser(null)}>Close</Button>
                        </div>
                    </div>
                )}
            </Modal>
        </div>
    );
}
