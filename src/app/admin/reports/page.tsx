"use client";

import { useEffect, useState } from "react";
import {
    getReportedPosts,
    getReportedComments,
    hidePost,
    hideComment,
} from "@/services/admin.service";

export default function ReportsPage() {
    const [posts, setPosts] = useState<any[]>([]);
    const [comments, setComments] = useState<any[]>([]);
    const [tab, setTab] = useState<"posts" | "comments">("posts");

    const fetchData = async () => {
        const [p, c] = await Promise.all([
            getReportedPosts(),
            getReportedComments(),
        ]);

        setPosts(p);
        setComments(c);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleHidePost = async (id: string) => {
        await hidePost(id);
        fetchData();
    };

    const handleHideComment = async (id: string) => {
        await hideComment(id);
        fetchData();
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-semibold mb-6">
                🚨 Reports
            </h1>

            {/* Tabs */}
            <div className="flex gap-4 mb-6">
                <button
                    onClick={() => setTab("posts")}
                    className={`px-4 py-2 rounded-lg ${tab === "posts"
                            ? "bg-black text-white"
                            : "bg-gray-200"
                        }`}
                >
                    Reported Posts
                </button>

                <button
                    onClick={() => setTab("comments")}
                    className={`px-4 py-2 rounded-lg ${tab === "comments"
                            ? "bg-black text-white"
                            : "bg-gray-200"
                        }`}
                >
                    Reported Comments
                </button>
            </div>

            {/* POSTS */}
            {tab === "posts" && (
                <div className="space-y-4">
                    {posts.map((p) => (
                        <div
                            key={p.id}
                            className="bg-white p-4 rounded-xl shadow"
                        >
                            <p className="mb-2">{p.content}</p>
                            <p className="text-sm text-gray-500 mb-3">
                                Reports: {p.reportCount}
                            </p>

                            <button
                                onClick={() => handleHidePost(p.id)}
                                className="bg-red-500 text-white px-3 py-1 rounded"
                            >
                                Hide
                            </button>
                        </div>
                    ))}
                </div>
            )}

            {/* COMMENTS */}
            {tab === "comments" && (
                <div className="space-y-4">
                    {comments.map((c) => (
                        <div
                            key={c.id}
                            className="bg-white p-4 rounded-xl shadow"
                        >
                            <p className="mb-2">{c.content}</p>
                            <p className="text-sm text-gray-500 mb-3">
                                Reports: {c.reportCount}
                            </p>

                            <button
                                onClick={() => handleHideComment(c.id)}
                                className="bg-red-500 text-white px-3 py-1 rounded"
                            >
                                Hide
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}