"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import Link from "next/link";

export default function CallUsDialog() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setOpen(true);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader className="items-center text-center">
                    <div className="mb-2 flex h-14 w-14 items-center justify-center rounded-full bg-[#2FC2B0]/10">
                        <Phone className="h-7 w-7 text-[#2FC2B0]" />
                    </div>

                    <DialogTitle className="text-2xl text-[#00383B]">
                        Need Help With Your Trip?
                    </DialogTitle>

                    <DialogDescription className="max-w-sm text-center leading-6">
                        Our travel experts are ready to help you with flight information,
                        and travel assistance.
                    </DialogDescription>
                </DialogHeader>

                <div className="mt-4">
                    <Link 
                        href="tel:9667301134"
                        onClick={() => setOpen(false)}
                        className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#2FC2B0] text-base font-semibold text-white transition-colors hover:bg-[#26ad9d]"
                    >
                        <Phone className="h-5 w-5" />
                        Call Us Now
                    </Link>
                </div>
            </DialogContent>
        </Dialog>
    );
}   