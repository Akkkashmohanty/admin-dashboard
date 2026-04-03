"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const token = localStorage.getItem("admin_token");

    if (!token && pathname !== "/login") {
      router.push("/login");
    }

    if (token && pathname === "/login") {
      router.push("/dashboard");
    }
  }, [pathname, router]);

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}