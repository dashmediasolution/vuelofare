"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Phone, Plane } from "lucide-react";

export default function CTASection() {
    return (
        <section className="w-full bg-[#f3fbfa] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            <div
                className="
                    mx-auto
                    grid
                    w-full
                    max-w-[1200px]
                    overflow-hidden
                    rounded-[28px]
                    bg-[#00383b]
                    lg:grid-cols-[1.1fr_0.9fr]
                "
            >
                {/* LEFT CONTENT */}
                <div
                    className="
                        relative
                        flex
                        min-h-[390px]
                        flex-col
                        justify-center
                        overflow-hidden
                        px-7
                        py-12
                        sm:px-10
                        sm:py-14
                        lg:min-h-[440px]
                        lg:px-14
                    "
                >
                    {/* Decorative circles */}
                    <div
                        className="
                            pointer-events-none
                            absolute
                            -left-24
                            -top-24
                            h-64
                            w-64
                            rounded-full
                            border
                            border-[#42d5c8]/15
                        "
                    />

                    <div
                        className="
                            pointer-events-none
                            absolute
                            -bottom-28
                            -right-20
                            h-72
                            w-72
                            rounded-full
                            border
                            border-[#42d5c8]/10
                        "
                    />

                    {/* Small label */}
                    <div className="relative z-10 flex items-center gap-2">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#18b9ad] text-white">
                            <Plane
                                size={15}
                                strokeWidth={2.4}
                                fill="currentColor"
                            />
                        </span>

                        <span
                            className="
                                text-[11px]
                                font-bold
                                uppercase
                                tracking-[0.18em]
                                text-[#63dcd3]
                                sm:text-[12px]
                            "
                        >
                            Travel Assistance
                        </span>
                    </div>

                    {/* Heading */}
                    <h2
                        className="
                            relative
                            z-10
                            mt-6
                            max-w-[580px]
                            text-[36px]
                            font-bold
                            leading-[1.05]
                            tracking-[-0.04em]
                            text-white
                            sm:text-[46px]
                            lg:text-[54px]
                        "
                    >
                        Wherever you're going,
                        <span className="block text-[#55d8ce]">
                            we're here to help.
                        </span>
                    </h2>

                    {/* Description */}
                    <p
                        className="
                            relative
                            z-10
                            mt-5
                            max-w-[510px]
                            text-[15px]
                            font-medium
                            leading-[1.65]
                            text-white/70
                            sm:text-[16px]
                        "
                    >
                        Get expert travel guidance for your flight plans, airline policies, and travel-related questions. Our team helps you understand your options so you can make informed decisions for your journey.
                    </p>

                    {/* CTA */}
                    <div className="relative z-10 mt-8 flex flex-wrap items-center gap-4">
                        <Link
                            href="tel:+18778810087"
                            className="
                                inline-flex
                                h-13
                                items-center
                                gap-3
                                rounded-full
                                bg-[#18b9ad]
                                px-6
                                py-3
                                text-[19px]
                                font-bold
                                text-white
                                transition-all
                                duration-300
                                hover:bg-[#23cabe]
                                hover:shadow-[0_12px_30px_rgba(24,185,173,0.25)]
                            "
                        >
                            <Phone
                                size={18}
                                strokeWidth={2.5}
                            />

                            <span>Call +1 (877) 881-0087</span>
                        </Link>

                        
                    </div>
                </div>

                {/* RIGHT IMAGE */}
                <div
                    className="
                        relative
                        min-h-[300px]
                        overflow-hidden
                        sm:min-h-[360px]
                        lg:min-h-[440px]
                    "
                >
                    <Image
                        src="/images/flight.png"
                        alt="Flight travel"
                        fill
                        sizes="
                            (max-width: 1023px) 100vw,
                            45vw
                        "
                        className="
                            object-cover
                            transition-transform
                            duration-700
                            hover:scale-105
                        "
                    />

                    {/* Image gradient */}
                    <div
                        className="
                            absolute
                            inset-0
                            bg-gradient-to-r
                            from-[#00383b]/50
                            via-transparent
                            to-transparent
                        "
                    />

                    {/* Image badge */}
                    <div
                        className="
                            absolute
                            bottom-5
                            left-5
                            right-5
                            flex
                            items-center
                            justify-between
                            rounded-2xl
                            border
                            border-white/20
                            bg-[#00383b]/65
                            px-4
                            py-3
                            backdrop-blur-md
                            sm:bottom-7
                            sm:left-7
                            sm:right-7
                            sm:px-5
                            sm:py-4
                        "
                    >
                        <div>
                            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#63dcd3]">
                                Need assistance?
                            </p>

                            <p className="mt-1 text-[14px] font-semibold text-white sm:text-[15px]">
                                Talk to a travel specialist
                            </p>
                        </div>

                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#18b9ad] text-white">
                            <Phone size={16} />
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}