import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils"
    
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Super E-commerce | Eric",
    description: "Um e-commerce completo com Next.js",
    keywords: ["ecommerce", "nextjs", "typescript"],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-BR">
            <body className={cn(
                inter.className,
                "min-h-screen bg-gray-50 dark:bg-gray-900"
            )}>
                {/* Header/Navbar virá aqui */}
                <main className="container mx-auto px-4 py-8">
                    {children}
                </main>
                {/* Footer virá aqui */}
            </body>
        </html>
    );
}