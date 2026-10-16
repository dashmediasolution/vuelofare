import Image from "next/image";
import Link from "next/link";
import {
    ArrowRight,
    Phone,
    Star,
    Users,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
export default function HeroSection() {
    return (
        <section className="w-full overflow-hidden bg-white">
            <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 items-center gap-10 px-5 py-10 sm:px-8 sm:py-14 md:grid-cols-2 md:gap-5 md:px-10 md:py-14 lg:gap-10 lg:py-16">
                {/* Left Content */}
                <div className="relative z-10 max-w-[570px]">
                    {/* Eyebrow */}
                    <p className="mb-3 text-[10px] font-extrabold uppercase tracking-[1.8px] text-[#159a96] sm:text-[11px]">
                        Travel Assistance
                    </p>

                    {/* Heading */}
                    <h1 className="max-w-[560px] text-[42px] font-bold leading-[0.98] tracking-[-2px] text-[#073957] sm:text-[50px] md:text-[45px] lg:text-[56px]">
                        Travel help,
                        <br />
                        <span className="text-[#078f8b]">
                            without the hassle.
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="mt-5 max-w-[470px] text-[14px] leading-[1.3] text-[#658399] sm:text-[15px] md:text-[1.1rem]">
                        Our specialists help you sort out the details and travel with confidence.
                    </p>

                    {/* CTA */}
                    <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                        <a
                            href="tel:8778810087"
                            className="flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-[#079a91] px-6 text-sm font-bold text-white shadow-sm transition-all hover:bg-[#078a82] hover:shadow-md"
                        >
                            <Phone
                                className="h-4 w-4"
                                fill="currentColor"
                            />

                            Talk to a Specialist

                            <ArrowRight className="h-4 w-4" />
                        </a>

                      
                    </div>

                   
                </div>

                {/* Right Image */}
                <div className="relative mx-auto flex min-h-[330px] w-full max-w-[560px] items-center justify-center sm:min-h-[390px] md:min-h-[420px]">
                    {/* Background Shape */}

                    {/* Circle */}

                    {/* Image */}
                    <Image
                        src="/images/heroImage.png"
                        alt="Traveler at an airport"
                        fill
                        priority
                        sizes="(max-width: 768px) 90vw, 50vw"
                        className="object-cover"
                    />

                    {/* Specialist Card */}
                    <div className="absolute left-0 top-[6%] z-20 flex items-center gap-2 rounded-xl bg-white px-3 py-2.5 shadow-[0_8px_30px_rgba(20,80,90,0.12)] sm:left-[1%] md:left-[-3%]">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#e3f6f5]">
                            <Users className="h-4 w-4 text-[#078f8b]" />
                        </div>

                        <div>
                            <p className="text-[14px] font-bold text-[#174d63] sm:text-[10px] md:text-base">
                                Specialists available
                                <span className="ml-1 inline-block h-1.5 w-1.5 rounded-full bg-[#20bd78]" />
                            </p>

                            <p className="mt-0.5 text-xs text-[#8aa0ad] sm:text-[8px] md:text-xs">
                                Real people. Real help.
                            </p>
                        </div>
                    </div>

                    {/* 24/7 Card */}
                    <div className="absolute bottom-[5%] right-0 z-20 flex items-center gap-2 rounded-xl bg-white px-3 py-2.5 shadow-[0_8px_30px_rgba(20,80,90,0.12)] sm:right-[1%] md:right-[-3%]">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#e3f6f5]">
                            <Phone
                                className="h-3.5 w-3.5 text-[#078f8b]"
                                fill="currentColor"
                            />
                        </div>

                        <div>
                            <p className="text-[14px] font-bold text-[#174d63] sm:text-[10px] md:text-base">
                                24/7 assistance
                            </p>

                            <p className="mt-0.5 text-xs text-[#8aa0ad] sm:text-[8px] md:text-xs">
                                Whenever you need us.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}