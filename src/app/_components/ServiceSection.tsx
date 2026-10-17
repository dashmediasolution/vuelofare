"use client";

import Image from "next/image";
import {
    ArrowRight,
    Headphones,
    List,
    Map,
    Plane,
    RefreshCw,
    X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
interface Service {
    slug: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    image: string;
}
const services: Service[] = [
    {
        slug: "flight-reservations",
        title: "Your Journey Starts Here",
        description:
            "Find flights for your trip with expert guidance and reliable assistance.",
        icon: <Plane size={22} strokeWidth={2.2} />,
        image: "/images/flight.png",
    },
  
  {
    slug: "flight-changes",
    title: "Your Journey, Simplified.",
    description:
        "Explore your options and get information to plan your next steps with confidence.",
    icon: <RefreshCw size={22} strokeWidth={2.2} />,
    image: "/images/image_02.png",
},
   {
    slug: "flight-cancellations",
    title: "Travel with Confidence.",
    description:
        "Explore airline  policies, applicable fees, fare conditions, and refund options to make informed decisions about your travel plans.",
    icon: <X size={24} strokeWidth={2.2} />,
    image: "/images/image_01.png",
},
    {
        slug: "trip-planning",
        title: "Make Every Trip Count",
        description:
            "Planning a multi-stop trip? We’ll help coordinate your travel plans and create a smooth itinerary.",
        icon: <Map size={22} strokeWidth={2.2} />,
        image: "/images/planning.jpg",
    },
    {
        slug: "itinerary-assistance",
        title: "Everything in One Place",
        description:
            "Need help with your itinerary? We’ll review your plans, confirm details, and keep every trip step organized.",
        icon: <List size={22} strokeWidth={2.2} />,
        image: "/images/itinerary.png",
    },
    {
        slug: "travel-support",
        title: "We're Here When You Need Us",
        description:
            "Have a question about your trip? Speak with a specialist for personalized guidance and assistance.",
        icon: <Headphones size={22} strokeWidth={2.2} />,
        image: "/images/support.jpg",
    },
];

function ServiceCard({ service }: { service: Service }) {
    return (
         
            <article className="shadow-lg pb-6">
                {/* Image */}
                <div className="relative aspect-[2.7/1]">
                    <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="
                            (max-width: 767px) 100vw,
                            (max-width: 1023px) 50vw,
                            33vw
                        "
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Icon */}
                    <div className="absolute bottom-[-30px] left-5 z-10 flex h-13 w-13 items-center justify-center rounded-[17px] border-5 border-white bg-[#e5faf7] text-[#159b9c] shadow-sm">
                        {service.icon}
                    </div>
                </div>

                {/* Content */}
                <div className="flex min-h-[148px] flex-col px-5  pt-10">
                    <h3 className="text-[20px] font-bold leading-[1.15] tracking-tight text-[#073452] sm:text-[21px]">
                        {service.title}
                    </h3>

                    <p className="mt-2 max-w-[390px] text-[14px] font-medium leading-[1.55] text-[#7b8fa3] sm:text-[15px] md:text-base">
                        {service.description}
                    </p>

                   
                </div>
            </article>
     );
}

export default function ServicesSection() {
    return (
        <section className="relative overflow-hidden flex justify-center items-center bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
 
            <div className="relative  w-[90%] ">

                <div className="relative mb-9 lg:mb-10">
                    <div>
                        {/* Small Label */}
                        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#159b9c] sm:text-[12px]">
                            Our Services
                        </p>

                        {/* Heading */}
                        <h2 className="mt-3 max-w-[700px] text-[38px] font-bold leading-[1.05] tracking-[-0.045em] text-[#102d5b] sm:text-[48px] lg:text-[52px]">
                            assistance for every step
                            <br className="hidden sm:block" />
                            of{" "}
                            <span className="text-[#159b9c]">
                                your journey.
                            </span>
                        </h2>

                        {/* Description */}
                        <p className="mt-4 max-w-[690px] text-[15px] font-medium leading-[1.65] text-[#7d91aa] sm:text-[17px]">
                            Whether you're planning a new trip, facing unexpected issues, our travel
                            specialists are ready to help.
                        </p>
                    </div>
 

                    <div className="mt-7 flex sm:absolute sm:right-0 sm:top-2 sm:mt-0">
                        <div className="relative flex items-center gap-4 rounded-[20px] bg-white px-5 py-4 shadow-[0_12px_35px_rgba(0,56,59,0.08)] sm:min-w-[320px]">
                            {/* Icon */}
                            <div className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full bg-[#e5faf7] text-[#159b9c]">
                                <Headphones
                                    size={30}
                                    strokeWidth={2.1}
                                />
                            </div>

                            {/* Text */}
                            <div>
                                <p className="text-[16px] font-bold leading-tight text-[#102d5b] sm:text-[17px]">
                                    Real people. Real help.
                                </p>

                                <p className="mt-1 text-[12px] font-medium leading-[1.4] text-[#8091a8] sm:text-[13px]">
                                    Talk to a travel specialist anytime.
                                </p>
                            </div>
                        </div>
                    </div>

                     
                </div>

                {/* ========================= */}
                {/* SERVICES GRID */}
                {/* ========================= */}

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service) => (
                        <ServiceCard
                            key={service.title}
                            service={service}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}