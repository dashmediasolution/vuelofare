
"use client";

import { Phone } from "lucide-react";
import { usePathname } from "next/navigation";

export default function MobileCallButton() {
    const pathname = usePathname();

    const phoneNumbers: Record<string, {
        support: string;
        display: string;
    }> = {
        "/american-airline": {
            support: "+18778810087",
            display: "+1 (877) 881-0087",
        },
        "/delta-airline": {
            support: "+18339041682",
            display: "+1 (833) 904-1682",
        },
        "/southwest-airline": {
            support: "+18337544023",
            display: "+1 (833) 754-4023",
        },
        "/united-airline": {
            support: "+18338041499",
            display: "+1 (833) 804-1499",
        },
    };

    const currentPhone = phoneNumbers[pathname] || {
        support: "+18778810087",
        display: "+1 (877) 881-0087",
    };

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white p-3 shadow-[0_-4px_15px_rgba(0,0,0,0.08)] md:hidden">
            <a
                href={`tel:${currentPhone.support}`}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#159b9c] px-5 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#117f80]"
            >
                <Phone size={20} />
                Call Now {currentPhone.display}
            </a>
        </div>
    );
}
