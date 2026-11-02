
"use client";

import {
    Search,
    Headphones,
    TicketCheck,
} from "lucide-react";

interface HowItWorksStep {
    title: string;
    description: string;
    icon: React.ReactNode;
}

const steps: HowItWorksStep[] = [
    {
        title: "Search Flights Online",
        description:
            "Explore flight options, compare fares, and find a flight that matches your travel plans.",
        icon: <Search size={24} strokeWidth={2.2} />,
    },
    {
        title: "Customize & Book with a Specialist",
        description:
            "Connect with our travel specialists through live chat or phone for personalized booking assistance.",
        icon: <Headphones size={24} strokeWidth={2.2} />,
    },
    {
        title: "Receive Your E-Ticket",
        description:
            "Complete your booking and receive your electronic ticket with all your travel details.",
        icon: <TicketCheck size={24} strokeWidth={2.2} />,
    },
];

export default function HowItWorks() {
    return (
        <section className="w-full bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            <div className="mx-auto w-full max-w-[1200px]">
                <div
                    className="
                        grid
                        grid-cols-1
                        gap-10
                        lg:grid-cols-[1.05fr_2fr]
                        lg:items-center
                        lg:gap-16
                    "
                >
                    {/* Left Content */}
                    <div className="max-w-[470px]">
                        <p
                            className="
                                text-[11px]
                                font-bold
                                uppercase
                                tracking-[0.16em]
                                text-[#159b9c]
                                sm:text-xs
                            "
                        >
                            How It Works
                        </p>

                        <h2
                            className="
                                mt-2
                                text-[30px]
                                font-bold
                                leading-[1.1]
                                tracking-[-0.035em]
                                text-[#073452]
                                sm:text-[38px]
                                lg:text-[42px]
                            "
                        >
                            Book your flight in 3 simple steps.
                        </h2>

                        <p
                            className="
                                mt-4
                                max-w-[430px]
                                text-[15px]
                                font-medium
                                leading-[1.6]
                                text-[#718b9b]
                                sm:text-[16px]
                            "
                        >
                            Search flights online, get personalized
                            assistance from our specialists, and
                            receive your e-ticket with ease.
                        </p>
                    </div>

                    {/* Steps */}
                    <div
                        className="
                            grid
                            grid-cols-1
                            gap-8
                            sm:grid-cols-3
                            sm:gap-5
                            lg:gap-8
                        "
                    >
                        {steps.map((step) => (
                            <div
                                key={step.title}
                                className="
                                    group
                                    flex
                                    flex-col
                                    items-start
                                    sm:items-start
                                "
                            >
                                {/* Icon */}
                                <div
                                    className="
                                        flex
                                        h-14
                                        w-14
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-[#e8f7f6]
                                        text-[#087f86]
                                        transition-all
                                        duration-300
                                        group-hover:bg-[#159b9c]
                                        group-hover:text-white
                                        group-hover:scale-105
                                    "
                                >
                                    {step.icon}
                                </div>

                                {/* Content */}
                                <div className="mt-5">
                                    <h3
                                        className="
                                            text-[18px]
                                            font-bold
                                            leading-[1.2]
                                            tracking-[-0.02em]
                                            text-[#073452]
                                            sm:text-[19px]
                                            lg:text-[20px]
                                        "
                                    >
                                        {step.title}
                                    </h3>

                                    <p
                                        className="
                                            mt-2.5
                                            max-w-[210px]
                                            text-[14px]
                                            font-medium
                                            leading-[1.55]
                                            text-[#718b9b]
                                            sm:text-[14px]
                                            lg:text-[15px]
                                        "
                                    >
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
