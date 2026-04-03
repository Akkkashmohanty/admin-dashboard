"use client";

import { useEffect, useState } from "react";
import {
    getUsers,
    suspendUser,
    activateUser,
} from "@/services/admin.service";

export default function UsersPage() {
    const [users, setUsers] = useState<any[]>([]);
    const [tab, setTab] = useState<
        "PENDING" | "ACTIVE" | "SUSPENDED"
    >("PENDING");

    const fetchUsers = async () => {
        const data = await getUsers(tab);
        setUsers(data);
    };

    useEffect(() => {
        fetchUsers();
    }, [tab]);

    const handleSuspend = async (id: string) => {
        await suspendUser(id);
        fetchUsers();
    };

    const handleActivate = async (id: string) => {
        await activateUser(id);
        fetchUsers();
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-semibold mb-6">
                👤 Users
            </h1>

            {/* Tabs */}
            <div className="flex gap-4 mb-6">
                {["PENDING", "ACTIVE", "SUSPENDED"].map((t) => (
                    <button
                        key={t}
                        onClick={() => setTab(t as any)}
                        className={`px-4 py-2 rounded-lg ${tab === t
                                ? "bg-black text-white"
                                : "bg-gray-200"
                            }`}
                    >
                        {t}
                    </button>
                ))}
            </div>

            {/* Users List */}
            <div className="space-y-4">
                {users.map((u) => (
                    <div
                        key={u.id}
                        className="bg-white p-4 rounded-xl shadow flex justify-between items-center"
                    >
                        <div>
                            <p className="font-medium">{u.email}</p>
                            <p className="text-sm text-gray-500">
                                {u.college} • {u.stream}
                            </p>
                        </div>

                        <div className="flex gap-2">
                            {tab === "ACTIVE" && (
                                <button
                                    onClick={() => handleSuspend(u.id)}
                                    className="bg-red-500 text-white px-3 py-1 rounded"
                                >
                                    Suspend
                                </button>
                            )}

                            {tab === "SUSPENDED" && (
                                <button
                                    onClick={() => handleActivate(u.id)}
                                    className="bg-green-500 text-white px-3 py-1 rounded"
                                >
                                    Activate
                                </button>
                            )}

                            {tab === "PENDING" && (
                                <button
                                    onClick={() => handleActivate(u.id)}
                                    className="bg-blue-500 text-white px-3 py-1 rounded"
                                >
                                    Approve
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}