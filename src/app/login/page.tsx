"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginAdmin } from "@/services/auth.service";
import { useAuthStore } from "@/store/auth.store";

export default function LoginPage() {
    const router = useRouter();
    const setToken = useAuthStore((s) => s.setToken);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleLogin = async () => {
        try {
            setLoading(true);
            setError("");

            const data = await loginAdmin(email, password);

            setToken(data.token);

            router.push("/dashboard");
        } catch (err: any) {
            setError(err.response?.data?.message || "Login failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex h-screen items-center justify-center bg-gray-100">
            <div className="w-[350px] rounded-2xl bg-white p-6 shadow-md">
                <h1 className="mb-4 text-xl font-semibold text-center">
                    Admin Login
                </h1>

                <input
                    type="email"
                    placeholder="Email"
                    className="w-full mb-3 p-2 border rounded-lg"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="w-full mb-3 p-2 border rounded-lg"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                {error && (
                    <p className="text-red-500 text-sm mb-2">{error}</p>
                )}

                <button
                    onClick={handleLogin}
                    disabled={loading}
                    className="w-full bg-black text-white p-2 rounded-lg"
                >
                    {loading ? "Logging in..." : "Login"}
                </button>
            </div>
        </div>
    );
}