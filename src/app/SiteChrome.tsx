"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import LiveChatWidget from "./_components/LiveChatWidget";
import MobileCallButton from "./_components/MobileCallButton";

export default function SiteChrome({
    children,
}: {
    children: ReactNode;
}) {
    const pathname = usePathname();

    const isSearchingPage = pathname === "/searching";

    const airlinePages = [
        "/american-airline",
        "/united-airline",
        "/delta-airline",
        "/southwest-airline",
    ];

    const isAirlinePage = airlinePages.includes(pathname);

    return (
        <>
            {!isSearchingPage && (
                <div className="sticky top-0 z-50 w-full">
                    <Navbar />
                </div>
            )}

            <div className="min-h-screen">
                {children}
            </div>

            {!isSearchingPage && (
                <>
                    {!isAirlinePage && <LiveChatWidget />}

                    <MobileCallButton />
                    <Footer />
                </>
            )}
        </>
    );
}