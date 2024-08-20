import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils"; // Shadcn 유틸리티 함수

const BasicLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();

  return (
    <main className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-md p-4">
        <ul className="flex space-x-4 justify-center">
          <li>
            <Link
              href="/"
              className={cn(
                "text-lg font-medium hover:text-blue-600",
                pathname === "/" ? "text-blue-600 underline" : "text-gray-600"
              )}
            >
              Product
            </Link>
          </li>
          <li>
            <Link
              href="/cart"
              className={cn(
                "text-lg font-medium hover:text-blue-600",
                pathname === "/cart"
                  ? "text-blue-600 underline"
                  : "text-gray-600"
              )}
            >
              Cart
            </Link>
          </li>
        </ul>
      </nav>
      <div className="container mx-auto py-8 px-4">{children}</div>
    </main>
  );
};

export default BasicLayout;
