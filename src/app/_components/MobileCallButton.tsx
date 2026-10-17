"use client";

import { Phone } from "lucide-react";

export default function MobileCallButton() {
    return (<div className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white p-3 shadow-[0_-4px_15px_rgba(0,0,0,0.08)] md:hidden"> <a
        href="tel:+18778810087"
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#159b9c] px-5 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#117f80]"
    > <Phone size={20} />
        Call Now  +1 (877) 881-0087
        </a> </div>
    );
}
