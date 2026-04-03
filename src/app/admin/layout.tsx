"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    const menu = [
        { name: "Dashboard", path: "/dashboard" },
        { name: "Users", path: "/users" },
        { name: "Reports", path: "/reports" },
    ];

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <div className="w-64 bg-white shadow-md p-4">
                <h2 className="text-xl font-semibold mb-6">
                    Admin Panel
                </h2>

                <nav className="space-y-2">
                    {menu.map((item) => (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={`block px-3 py-2 rounded-lg ${pathname === item.path
                                    ? "bg-black text-white"
                                    : "hover:bg-gray-200"
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6 overflow-y-auto">
                {children}
            </div>
        </div>
    );
}