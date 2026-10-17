"use client";

import Link from "next/link";
import { ChevronDown, Phone, Menu } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

 
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [policyOpen, setPolicyOpen] = useState(false);

    return (
<header className="relative z-10 w-full border-b border-slate-100 bg-white">
                <div className="mx-auto flex h-[68px] w-full max-w-[1280px] items-center justify-between px-5 sm:px-8 lg:px-10">

                {/* Logo */}
                <Link
                    href="/"
                    className="flex shrink-0 items-center gap-2.5"
                    onClick={() => setIsOpen(false)}
                >


                    <Image
                        src="/images/vuelofarelogo.svg"
                        alt="Vuelofare"
                        width={140}
                        height={40}
                        className="h-auto w-[100px] sm:flex md:w-[140px]"
                    />
                </Link>      

                <Link
                    href="tel:+18778810087
"
                    className="
                     
                    items-center
                    gap-2.5
                    rounded-full
                    border
                    border-[#079a91]/20
                    bg-[#079a91]
                    md:px-5
                    md:py-2
                    text-[14px]
                    font-semibold
                    tracking-[0.2px]
                    text-white
                    shadow-[0_4px_14px_rgba(7,154,145,0.18)]
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-[#078a82]
                    md:inline-flex
                "
                >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
                        <Phone
                            className="h-4 w-4"
                            strokeWidth={2.2}
                        />
                    </span>

                    <span className="font-sans hidden md:flex text-[1.1rem] font-semibold tracking-[1px]">
                    +1 (877) 881-0087
                    </span>
                </Link>




            </div>
        </header>
    );
}