 "use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Phone, MapPin, ShieldCheck } from "lucide-react";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";

const legalLinks = [
    {
        label: "Privacy Policy",
        content: `Last updated: October 2026

Vuelofare respects your privacy. Information you voluntarily provide when contacting us may be used to respond to your travel inquiries and provide requested assistance. We do not sell your personal information.

For privacy questions, please contact us using the contact details listed on this website.`,
    },
    {
        label: "Terms & Conditions",
        content: `Last updated: October 2026

Vuelofare operates as an independent travel assistance service. We are not directly affiliated with, authorized by, sponsored by, or endorsed by any airline or other travel provider.

Travel services and any booking, change, cancellation, or refund are subject to the applicable terms and policies of the relevant travel provider.`,
    },
    {
        label: "Disclaimer",
        content: `Vuelofare is an independent, third-party travel agency and is not directly affiliated with, authorized by, or endorsed by any specific airline.

All airline names, logos, and trademarks belong to their respective owners and are used for identification purposes only.

Travel services, bookings, changes, cancellations, and refunds are subject to the applicable terms and policies of the relevant travel providers.`,
    },
];

const quickLinks = [
    { label: "About Us", href: "/about-us" },
    { label: "Contact Us", href: "/contact-us" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
    { label: "Refund Policy", href: "/refund-policy" },
];

export default function Footer() {
    const [selectedLegal, setSelectedLegal] =
        useState<(typeof legalLinks)[number] | null>(null);

    return (
        <>
            <footer className="relative mb-15 w-full bg-[#F9FCFC] text-[#15546A] md:mb-0">
                <div className="mx-auto max-w-[1280px] px-5 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14">
<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-[1.05fr_1.5fr_0.7fr_0.85fr] lg:gap-x-8">                        {/* Brand */}
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
                                    <MapPin size={21} />
                                </span>

                                <div className="min-w-0">
                                    <p className="text-base font-medium leading-7 text-[#718b9b] sm:text-[17px]">
                                        B-16 S/F R/SIDE, Janakpuri Community
                                        Centre, Janakpuri, New Delhi – 110058
                                    </p>

                                    <p className="mt-3 text-sm font-medium leading-6 text-[#718b9b] sm:text-base">
                                        A unit of JS Enterprises
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Legal */}
                        <div className="min-w-0">
                            <h3 className="text-lg font-bold text-[#073452] sm:text-xl">
                                Legal
                            </h3>

                            <ul className="mt-4 space-y-3">
                                {legalLinks.map((link) => (
                                    <li key={link.label}>
                                        <button
                                            type="button"
                                            onClick={() => setSelectedLegal(link)}
                                            className="text-left text-base font-medium text-[#718b9b] transition-colors hover:text-[#159b9c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#159b9c] sm:text-[17px]"
                                        >
                                            {link.label}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Quick Links */}
                        <div className="min-w-0">
                            <h3 className="text-lg font-bold text-[#073452] sm:text-xl">
                                Quick Links
                            </h3>

                            <ul className="mt-4 flex flex-col items-start gap-3">
                                {quickLinks.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="text-base font-medium text-[#718b9b] transition-colors hover:text-[#159b9c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#159b9c] sm:text-[17px]"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact */}
                        <div className="min-w-0 sm:col-span-2 lg:col-span-4">
                            <div className="rounded-2xl border border-[#e1efee] bg-white p-5 sm:flex sm:items-center sm:justify-between sm:gap-6 sm:p-6">
                                <div>
                                    <h3 className="text-lg font-bold text-[#073452] sm:text-xl">
                                        Contact Our Team
                                    </h3>

                                    <p className="mt-2 text-sm leading-6 text-[#718b9b] sm:text-base">
                                        Have a question? Contact us for assistance
                                        with your travel inquiry.
                                    </p>
                                </div>

                                <div className="mt-4 shrink-0 sm:mt-0">
                                    <Link
                                        href="tel:+918778810087"
                                        className="inline-flex items-center gap-3 rounded-xl bg-[#e8f7f6] px-4 py-3 font-semibold text-[#073452] transition-colors hover:bg-[#d9f0ee]"
                                    >
                                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#159b9c]">
                                            <Phone size={19} />
                                        </span>

                                        <span>
                                            <span className="block text-xs font-medium text-[#718b9b]">
                                                Call Us
                                            </span>
                                            <span className="block whitespace-nowrap text-base sm:text-lg">
                                                +91 87788 10087
                                            </span>
                                        </span>
                                    </Link>

                                    <p className="mt-2 text-center text-sm font-medium text-[#8ba0ac]">
                                        Mon – Sun, 24/7
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Affiliation Disclaimer — directly inside Footer */}
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
                            Vuelofare is an independent, third-party travel
                            agency and is not directly affiliated with,
                            authorized by, or endorsed by any specific airline.
                         
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

            {/* Legal Dialog */}
            <Dialog
                open={!!selectedLegal}
                onOpenChange={(open) => {
                    if (!open) setSelectedLegal(null);
                }}
            >
                <DialogContent className="max-h-[85vh] overflow-y-auto rounded-xl bg-white p-6 sm:max-w-[550px] sm:p-8">
                    <DialogHeader className="space-y-4">
                        <DialogTitle className="text-xl font-bold text-[#073452] sm:text-2xl">
                            {selectedLegal?.label}
                        </DialogTitle>

                        <DialogDescription className="whitespace-pre-line text-left text-base leading-7 text-[#718b9b]">
                            {selectedLegal?.content}
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </>
    );
}
 