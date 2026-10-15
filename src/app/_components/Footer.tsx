"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Phone, MapPin } from "lucide-react";

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
    content: `Last updated: 2026

Vuelofare respects your privacy. When you call, information you voluntarily provide may be used to assist with your travel needs and for legitimate service operations. We do not sell your personal information.

For privacy questions, please call (877) 881-0087.`,
},
    {
        label: "Terms & Conditions",
        content: `Vuelofare offers travel assistance by connecting customers with experienced travel specialists. We operate independently and are not affiliated with, sponsored by, or endorsed by any airline, hotel, or other travel service provider.
Vuelofare does not directly sell airline tickets. Your mobile carrier's standard calling charges may apply, depending on your service provider and phone plan.`,
    },
    {
        label: "Disclaimer",
        content: `Vuelofare operates as an independent travel assistance service and is not affiliated with, sponsored by, endorsed by, or associated with any airline, hotel, cruise operator, or other travel service provider.
All bookings, reservations, and purchases are subject to the terms, conditions, and policies of the respective travel providers.`,
    },
];


export default function Footer() {
    const [selectedLegal, setSelectedLegal] = useState<
        (typeof legalLinks)[number] | null
    >(null);

    return (
        <>
            <footer className="relative mb-15 w-full bg-[#F9FCFC] text-[#15546A] md:mb-0">
                <div className="mx-auto max-w-[1280px] px-5 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14">

                    {/* Main Footer */}
                    <div className="grid grid-cols-1 gap-9 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-10 lg:grid-cols-[1.15fr_1.4fr_0.85fr_1fr] lg:gap-10">

                        {/* Brand */}
                        <div className="min-w-0">
                            <Link
                                href="/"
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

                                <div>
                                    <p className="text-base font-medium leading-7 text-[#718b9b] sm:text-[17px]">
                                        B-16 S/F R/SIDE, Janakpuri Community
                                        Centre, Janakpuri, New Delhi – 110058
                                    </p>

                                    <p className="mt-3 text-sm font-medium leading-6 text-[#718b9b] sm:text-base">
                                        The Unit of JS Enterprises
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
                                            className="text-left text-base font-medium text-[#718b9b] transition-colors hover:text-[#159b9c] sm:text-[17px]"
                                        >
                                            {link.label}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact */}
                        <div className="min-w-0">
                            <h3 className="text-lg font-bold text-[#073452] sm:text-xl">
                                Contact
                            </h3>

                            <Link
                                href="tel:8778810087"
                                className="mt-4 inline-flex items-center gap-3 text-base font-semibold text-[#073452] transition-colors hover:text-[#159b9c] sm:text-lg"
                            >
                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e8f7f6] text-[#159b9c]">
                                    <Phone size={19} />
                                </span>

                                <span className="whitespace-nowrap">
                                    (877) 881-0087
                                </span>
                            </Link>

                            <p className="mt-3 pl-[52px] text-sm font-medium text-[#8ba0ac] sm:text-base">
                                Mon - Sun, 24/7
                            </p>
                        </div>
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


                        <DialogDescription className="whitespace-pre-line text-base leading-7 text-[#718b9b]">
                            {selectedLegal?.label === "Privacy Policy" ? (
                                <>
                                    <strong className="font-bold text-[#073452]">
                                        {selectedLegal.content.split("\n\n")[0]}
                                    </strong>
                                    {"\n\n"}
                                    {selectedLegal.content.split("\n\n").slice(1).join("\n\n")}
                                </>
                            ) : (
                                selectedLegal?.content
                            )}
                        </DialogDescription>

                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </>
    );
}
