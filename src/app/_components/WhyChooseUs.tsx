"use client";

import Image from "next/image";
import Link from "next/link";
import {
    ArrowRight,
    Check,
    Clock3,
    Headphones,
    Phone,
    ShieldCheck,
    Sparkles,
    Tag,
    Users,
    Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const features = [
    {
        icon: Headphones,
        title: "Talk to a Travel Expert",
        description: "Get guidance from a real travel specialist.",
    },
    {
        icon: Clock3,
        title: "Help When You Need It",
        description: "Get travel assistance whenever you need it.",
    },
    {
        icon: Zap,
        title: "Simple, Straightforward Help",
        description: "Clear help for bookings and travel",
    },
    {
        icon: Users,
        title: "Guidance for Your Trip",
        description: "Find options that work for your plans.",
    },
    {
        icon: Tag,
        title: "Travel Options That Fit",
        description: "Explore options that suit your journey.",
    },
    {
        icon: ShieldCheck,
        title: "Support Beyond Booking",
        description: "We're here to help before and after you book.",
    },
];
export default function WhyChooseUs() {
    return (
        <section className="w-full bg-[#effafa] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20 ">
            <div className="mx-auto w-full max-w-[1200px]">
                <div
                    className="
                        grid
                        grid-cols-1
                        items-center
                        gap-10
                        lg:grid-cols-[0.95fr_1.35fr_0.95fr]
                        lg:gap-8
                    "
                >
                    {/* ========================= */}
                    {/* LEFT CONTENT               */}
                    {/* ========================= */}
                    <div className="max-w-[360px]">
                        <p
                            className="
                                text-[10px]
                                font-bold
                                uppercase
                                tracking-[0.18em]
                                text-[#159b9c]
                                sm:text-[11px]
                            "
                        >
                            Why Call Us
                        </p>

                        <h2
                            className="
                                mt-2
                                text-[30px]
                                font-bold
                                leading-[1.05]
                                tracking-[-0.035em]
                                text-[#073452]
                                sm:text-[36px]
                                lg:text-[38px]
                            "
                        >
                            Why Choose
                            <br />
                            Vuelofare?
                        </h2>

                        <p
                            className="
                                mt-4
                                max-w-[330px]
                                text-[13px]
                                font-medium
                                leading-[1.55]
                                text-[#75919c]
                                sm:text-[14px]
                            "
                        >
                           We make travel simpler by helping you make confident choices, handle the details, and enjoy the journey with less hassle.
                        </p>

                        <Button
                             
                            className="
                                mt-6
                                h-11
                                rounded-full
                                bg-[#079a91]
                                px-5
                                text-[12px]
                                font-bold
                                text-white
                                shadow-none
                                hover:bg-[#078a82]
                                hover:text-white
                                sm:h-12
                                sm:px-6
                                sm:text-[13px]
                            "
                        >
                            <Link href="tel:8778810087" className="flex gap-3 text-base">
                                <Phone
                                    className="h-3.5 w-3.5"
                                    fill="currentColor"
                                />

                              Call Now  +91 87788 10087

                                <ArrowRight className="h-3.5 w-3.5" />
                            </Link>
                        </Button>
                    </div>

                    
                    <div
                        className="
                            grid
                            grid-cols-1
                            gap-x-5
                            gap-y-1
                            sm:grid-cols-2
                            lg:grid-cols-3
                        "
                    >
                        {features.map((feature) => {
                            const Icon = feature.icon;

                            return (
                                <div
                                    key={feature.title}
                                    className="
                                        group
                                        border-b
                                        border-[#d8eeee]
                                        px-1
                                        py-4
                                        sm:px-2
                                        lg:min-h-[135px]
                                    "
                                >
                                    {/* Icon */}
                                    <div
                                        className="
                                            flex
                                            h-8
                                            w-8
                                            items-center
                                            justify-center
                                            rounded-full
                                            bg-[#d9f3f1]
                                            text-[#159b9c]
                                            transition-colors
                                            duration-300
                                            group-hover:bg-[#159b9c]
                                            group-hover:text-white
                                        "
                                    >
                                        <Icon
                                            size={20}
                                            strokeWidth={3}
                                        />
                                    </div>

                                    {/* Text */}
                                    <h3
                                        className="
                                            mt-3
                                            text-[25px]
                                            font-bold
                                            leading-[1.2]
                                            text-[#073452]
                                            sm:text-base
                                            md:text-base
                                        "
                                    >
                                        {feature.title}
                                    </h3>

                                    <p
                                        className="
                                            mt-1.5
                                            max-w-[150px]
                                            text-[20px]
                                            font-medium
                                            leading-[1.45]
                                            text-[#78939c]
                                            md:text-sm
                                        "
                                    >
                                        {feature.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>

                    {/* ========================= */}
                    {/* RIGHT IMAGE                 */}
                    {/* ========================= */}
                    <div
                        className="
                            relative
                            mx-auto
                            w-full
                            max-w-[390px]
                            lg:max-w-[340px]
                        "
                    >
                        <Image
                            src="/images/whyCallUs.png"
                            alt="TravelConnect travel assistance"
                            width={700}
                            height={500}
                            priority
                            className="
                                h-auto
                                w-full
                                object-contain
                            "
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}