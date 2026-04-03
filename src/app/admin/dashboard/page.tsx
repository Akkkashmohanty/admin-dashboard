"use client";

import { useEffect, useState } from "react";
import { getStats } from "@/services/admin.service";

export default function DashboardPage() {
    const [stats, setStats] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const data = await getStats();
                setStats(data);
            } catch (err) {
                console.error("Failed to fetch stats");
            } finally {
                setLoading(false);
            }
        };

        fetchStats();
    }, []);

    if (loading) {
        return <p className="p-6">Loading dashboard...</p>;
    }

    if (!stats) {
        return <p className="p-6 text-red-500">Failed to load data</p>;
    }

    const cards = [
        { label: "Total Users", value: stats.totalUsers },
        { label: "Active Users", value: stats.activeUsers },
        { label: "Posts", value: stats.posts },
        { label: "Comments", value: stats.comments },
        { label: "Reports", value: stats.reports },
    ];

    return (
        <div>
            <h1 className="text-2xl font-semibold mb-6">
                Dashboard
            </h1>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {cards.map((c) => (
                    <div
                        key={c.label}
                        className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
                    >
                        <p className="text-gray-500">{c.label}</p>
                        <h2 className="text-2xl font-bold">
                            {c.value}
                        </h2>
                    </div>
                ))}
            </div>
        </div>
    );
}