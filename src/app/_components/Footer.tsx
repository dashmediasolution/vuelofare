 "use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, ShieldCheck } from "lucide-react";

const quickLinks = [
    { label: "About Us", href: "/about-us" },
    { label: "Contact Us", href: "/contact-us" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
    { label: "Refund Policy", href: "/refund-policy" },
];

export default function Footer() {
    return (
        <footer className="relative mb-15 w-full bg-[#F9FCFC] text-[#15546A] md:mb-0">
            {/* Main Footer */}
            <div className="mx-auto max-w-[1280px] px-5 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-[1.05fr_1.5fr_0.7fr_0.95fr] lg:gap-x-8">
                    {/* Brand */}
                    <div className="min-w-0">
                        <Link
                            href="/"
                            aria-label="Vuelofare homepage"
                            className="inline-flex items-center"
                        >
                            <Image
                                src="/images/vuelofarelogo.svg"
                                alt="Vuelofare"
                                width={150}
                                height={44}
                                className="h-auto w-[135px] sm:w-[150px]"
                            />
                        </Link>

                        <p className="mt-4 max-w-[300px] text-base font-medium leading-7 text-[#718b9b] sm:text-lg">
                            Real people. Expert support. Better journeys.
                        </p>
                    </div>

                    {/* Address */}
                    <div className="min-w-0">
                        <h3 className="text-lg font-bold text-[#073452] sm:text-xl">
                            Our Address
                        </h3>

                        <div className="mt-4 flex items-start gap-3">
                            <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#e8f7f6] text-[#159b9c]">
                                <MapPin size={21} aria-hidden="true" />
                            </span>

                            <div className="min-w-0">
                                <p className="break-words text-base font-medium leading-7 text-[#718b9b] sm:text-[17px]">
                                    B-16 S/F R/SIDE, Janakpuri Community
                                    Centre, Janakpuri, New Delhi – 110058
                                </p>

                                <p className="mt-3 text-sm font-medium leading-6 text-[#718b9b] sm:text-base">
                                    A unit of JS Enterprises
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Legal Links */}
                    <div className="min-w-0">
                        <h3 className="text-lg font-bold text-[#073452] sm:text-xl">
                            Legal
                        </h3>

                        <ul className="mt-4 flex flex-col items-start gap-2.5">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-base font-medium text-[#718b9b] transition-colors hover:text-[#159b9c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#159b9c] sm:text-[15px]"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact — right of Legal */}
                    <div className="min-w-0">
                        <h3 className="text-lg font-bold text-[#073452] sm:text-xl">
                            Contact
                        </h3>

                        <p className="mt-4 text-sm leading-6 text-[#718b9b]">
                            Have a question? Get in touch with our team.
                        </p>

                        <Link
                            href="tel:+918778810087"
                            aria-label="Call Vuelofare at +91 87788 10087"
                            className="mt-4 inline-flex max-w-full items-center gap-2 rounded-xl bg-[#e8f7f6] px-3 py-3 font-semibold text-[#073452] transition-colors hover:bg-[#d9f0ee] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#159b9c]"
                        >
                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#159b9c]">
                                <Phone size={18} aria-hidden="true" />
                            </span>

                            <span className="min-w-0">
                                <span className="block text-xs font-medium text-[#718b9b]">
                                    Call Us
                                </span>

                                <span className="block break-words text-sm font-semibold">
                                    +91 87788 10087
                                </span>
                            </span>
                        </Link>

                        <p className="mt-3 text-sm font-medium text-[#8ba0ac]">
                            Mon – Sun, 24/7
                        </p>
                    </div>
                </div>
            </div>

            {/* Affiliation Disclaimer */}
            <div className="border-y border-[#dcebea] bg-[#eaf7f6] px-5 py-5 sm:px-8">
                <div className="mx-auto flex max-w-[1150px] items-start gap-3">
                    <ShieldCheck
                        size={22}
                        className="mt-0.5 shrink-0 text-[#159b9c]"
                        aria-hidden="true"
                    />

                    <p className="text-sm leading-6 text-[#355c68] sm:text-base">
                        <strong className="font-bold text-[#073452]">
                            Disclaimer:
                        </strong>{" "}
                        Vuelofare is an independent, third-party travel agency
                        and is not directly affiliated with, authorized by, or
                        endorsed by any specific airline. All airline names
                        and trademarks belong to their respective owners.
                    </p>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-[#e7eeee]">
                <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-2 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
                    <p className="text-sm font-medium text-[#8ba0ac] sm:text-base">
                        © 2026 Vuelofare. All rights reserved.
                    </p>

                    <p className="text-sm font-medium text-[#8ba0ac] sm:text-base">
                        Travel smarter. With people who care.
                    </p>
                </div>
            </div>
        </footer>
    );
}
 