
"use client";

import Image from "next/image";
import {
    CalendarDays,
    Plane,
    Sparkles,
    Clock3,
    Tag,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const flightDeals = [
    {
        from: "New York",
        fromCode: "JFK",
        to: "London",
        toCode: "LHR",
        price: 450,
        tag: "Popular Route",
        image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=900&q=85",
        description:
            "Explore London's iconic landmarks, shopping, and culture with affordable flight options.",
    },
    {
        from: "New York",
        fromCode: "JFK",
        to: "Paris",
        toCode: "CDG",
        price: 489,
        tag: "Limited Offer",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=900&q=85",
        description:
            "Plan a Paris getaway and discover world-famous attractions, food, and experiences.",
    },
    {
        from: "Los Angeles",
        fromCode: "LAX",
        to: "Tokyo",
        toCode: "NRT",
        price: 599,
        tag: "Popular Route",
        image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=900&q=85",
        description:
            "Discover Japan with flight options designed to make your next adventure easier.",
    },
    {
        from: "Chicago",
        fromCode: "ORD",
        to: "Rome",
        toCode: "FCO",
        price: 529,
        tag: "Special Fare",
        image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=900&q=85",
        description:
            "Experience historic streets, Italian cuisine, and unforgettable European destinations.",
    },
    {
        from: "New York",
        fromCode: "JFK",
        to: "Dubai",
        toCode: "DXB",
        price: 575,
        tag: "Travel Deal",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=900&q=85",
        description:
            "Explore modern attractions, luxury shopping, and exciting desert experiences.",
    },
    {
        from: "San Francisco",
        fromCode: "SFO",
        to: "Singapore",
        toCode: "SIN",
        price: 620,
        tag: "Popular Route",
        image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=900&q=85",
        description:
            "Discover vibrant city life, beautiful gardens, and incredible Asian cuisine.",
    },
];

export default function FlashFlightDeals() {
    return (
        <section className="w-full  px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            <div className="mx-auto max-w-[1200px]">

                {/* Heading */}
                <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
                    <div className="max-w-[680px]">
                     

                        <h2 className="text-[30px] font-bold leading-tight tracking-[-0.035em] text-[#073452] sm:text-[38px] lg:text-[42px]">
                            Explore Our Latest {" "}
                            <span className=" text-[#159b9c]">
                                Flight Deals
                            </span>
                        </h2>

                        <p className="mt-4 max-w-[580px] text-sm leading-7 text-[#718096]">
                            Discover exciting destinations and attractive
                            flight fares. Compare popular routes and get
                            personalized assistance from our travel
                            specialists to plan your next journey.
                        </p>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-semibold text-[#718096]">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#159b9c]/10">
                            <Plane size={15} className="text-[#159b9c]" />
                        </span>
                        Explore. Compare. Travel.
                    </div>
                </div>

                {/* Deal Cards */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {flightDeals.map((deal, index) => (
                        <Card className="group flex h-full flex-col py-0 overflow-hidden rounded-xl  border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md">
                            <div className="relative h-[130px] w-full overflow-hidden">
                                <Image
                                    src={deal.image}
                                    alt={deal.to}
                                    fill
                                    unoptimized
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

                                <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-semibold text-[#159b9c]">
                                    {deal.tag}
                                </span>

                                <div className="absolute bottom-3 left-4">
                                    <p className="text-lg font-bold text-white">{deal.to}</p>
                                    <p className="text-xs text-white/90">Explore this destination</p>
                                </div>
                            </div>

                            <CardContent className="flex flex-1 flex-col p-4">
                                <div className="flex items-center justify-between gap-2">
                                    <div>
                                        <p className="text-[10px] font-medium uppercase tracking-wide text-gray-500">
                                            Departure
                                        </p>
                                        <p className="text-sm font-semibold text-[#073452]">
                                            {deal.from} ({deal.fromCode})
                                        </p>
                                    </div>

                                    <Plane className="h-4 w-4 shrink-0 text-[#159b9c]" />

                                    <div className="text-right">
                                        <p className="text-[10px] font-medium uppercase tracking-wide text-gray-500">
                                            Arrival
                                        </p>
                                        <p className="text-sm font-semibold text-[#073452]">
                                            {deal.toCode}
                                        </p>
                                    </div>
                                </div>

                              

                                <div className="mt-3 flex items-end justify-between border-t border-gray-100 pt-3">
                                    <div>
                                        <p className="text-[10px] text-gray-500 md:text-sm">Per person from</p>
                                        <p className="text-xl font-bold leading-none text-[#073452]">
                                            ${deal.price}
                                        </p>
                                    </div>

                                    <span className="text-[10px] font-medium text-[#159b9c] md:text-sm">
                                        <Tag className="mr-1 inline h-4 w-4" />
                                        Flight deal
                                    </span>
                                </div>
                            </CardContent>
                        </Card>

                    ))}
                </div>

               
 
            </div>
        </section>
    );
}
