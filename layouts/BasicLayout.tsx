import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button"; // Shadcn Button 컴포넌트
import { cn } from "@/utils/cn"; // 유틸리티 함수 (classnames 병합)

const BasicLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();

  return (
    <main className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-md p-4">
        <ul className="flex space-x-8 justify-center">
          <li>
            <Link href="/" passHref>
              <Button
                variant="link"
                className={cn(
                  "text-xl font-bold py-2 px-4 rounded-md transition-colors",
                  pathname === "/"
                    ? "bg-primary text-white"
                    : "bg-transparent text-gray-600 hover:bg-gray-200"
                )}
              >
                Product
              </Button>
            </Link>
          </li>
          <li>
            <Link href="/cart" passHref>
              <Button
                variant="link"
                className={cn(
                  "text-xl font-bold py-2 px-4 rounded-md transition-colors",
                  pathname === "/cart"
                    ? "bg-primary text-white"
                    : "bg-transparent text-gray-600 hover:bg-gray-200"
                )}
              >
                Cart
              </Button>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="container mx-auto py-8 px-4">{children}</div>
    </main>
  );
};

export default BasicLayout;
