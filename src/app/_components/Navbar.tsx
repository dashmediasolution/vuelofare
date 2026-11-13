 
"use client";

import Link from "next/link";
import { Phone, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    const airlinePages = [
        "/american-airline",
        "/united-airline",
        "/delta-airline",
        "/southwest-airline",
    ];

    const isAirlinePage = airlinePages.includes(pathname);

    return (
        <header className="relative z-10 w-full border-b border-slate-100 bg-white">
            <div className="mx-auto flex h-[64px] w-full max-w-[1280px] items-center justify-between gap-1 px-3 sm:h-[68px] sm:gap-3 sm:px-8 lg:px-10">

                {/* Logo and Agency Badge */}
                <div className="flex min-w-0 shrink items-center gap-1.5 sm:gap-3">
                    <Link href="/" className="flex shrink-0 items-center">
                        <Image
                            src="/images/vuelofarelogo.svg"
                            alt="VueloFare"
                            width={140}
                            height={40}
                            priority
                            className={`h-auto ${
                                isAirlinePage
                                    ? "w-[92px] sm:w-[125px] md:w-[140px]"
                                    : "w-[100px] sm:w-[125px] md:w-[140px]"
                            }`}
                        />
                    </Link>

                    {isAirlinePage && (
                        <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-[#159b9c]/20 bg-[#eaf7f6] px-1.5 py-1 text-[9px] font-semibold text-[#087f7d] sm:gap-1.5 sm:px-3 sm:text-xs">
                            <ShieldCheck className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                            Travel Agency
                        </span>
                    )}
                </div>

                {/* Phone Number */}
                <Link
                    href="tel:+18778810087"
                    className={
                        isAirlinePage
                            ? "group inline-flex shrink-0 items-center gap-1 text-[10px] font-semibold tracking-tight text-[#073452] sm:gap-2 sm:rounded-full sm:border sm:border-[#079a91]/20 sm:bg-[#079a91] sm:px-5 sm:py-2 sm:text-sm sm:tracking-[0.2px] sm:text-white sm:shadow-[0_4px_14px_rgba(7,154,145,0.18)] sm:transition-all sm:duration-300 sm:hover:-translate-y-0.5 sm:hover:bg-[#078a82] md:text-base"
                            : "inline-flex shrink-0 items-center gap-2 rounded-full bg-[#159b9c] px-2.5 py-2 text-white shadow-sm transition hover:bg-[#078a82] sm:gap-2.5 sm:px-4"
                    }
                >
                    {isAirlinePage ? (
                        <>
                            <Phone className="h-3 w-3 shrink-0 text-[#159b9c] sm:hidden" />

                            <span className="sm:hidden">
                                +1 (877) 881-0087
                            </span>

                            <span className="hidden sm:inline">
                                +1 (877) 881-0087
                            </span>
                        </>
                    ) : (
                        <>
                            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15">
                                <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                            </span>

                            <span className="text-[11px] font-semibold tracking-wide sm:text-sm md:text-base">
                                <span className="sm:hidden">Call Us</span>
                                <span className="hidden sm:inline">
                                    +1 (877) 881-0087
                                </span>
                            </span>
                        </>
                    )}
                </Link>
            </div>
        </header>
    );
}
