 "use client";

import Image from "next/image";
import AutoScroll from "embla-carousel-auto-scroll";
import { useRef } from "react";
import { Plane } from "lucide-react";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";

const airlines = [
    { name: "American Airlines", logo: "/images/AA.png" },
    { name: "Delta Air Lines", logo: "/images/delta.png" },
    { name: "British Airways", logo: "/images/BA.png" },
    { name: "All Nippon Airways", logo: "/images/ANA.png" },
    { name: "Asiana Airlines", logo: "/images/Asiana.png" },
    { name: "Korean Air", logo: "/images/Korean.png" },
    { name: "Qatar Airways", logo: "/images/Qatar.png" },
    { name: "Qantas", logo: "/images/Quantas.png" },
    { name: "Singapore Airlines", logo: "/images/singapore.png" },
    { name: "Turkish Airlines", logo: "/images/Turkish.png" },
];

export default function AirlinePartners() {
    const autoScroll = useRef(
        AutoScroll({
            speed: 1,
            direction: "forward",
            startDelay: 0,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
        })
    );

    return (
        <section className="w-full overflow-hidden px-4 py-0 sm:px-6 sm:py-6 lg:px-8 lg:py-20">
            <div className="mx-auto w-full max-w-[1200px]">

                {/* Left Aligned Heading */}
                <div className="max-w-[700px] text-left">

                 

                    <h2 className="mt-4 text-[30px] font-bold leading-[1.15] tracking-[-0.035em] text-[#073452] sm:text-[38px] lg:text-[42px]">
                        Explore Flights from {" "}
                        <span className="text-[#159b9c]">
                            Leading Airlines
                        </span>
                    </h2>

                    <p className="text-[13px] font-medium leading-[1.6] text-[#718096] sm:text-sm md:text-base">
                        Discover flight options from airlines serving
                        domestic and international destinations. Explore
                        routes and find options that suit your travel plans.
                    </p>
                </div>

                {/* Full Width Airline Carousel */}
                <div className="relative mt-10 w-full">

                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        plugins={[autoScroll.current]}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-6">

                            {airlines.map((airline) => (
                                <CarouselItem
                                    key={airline.name}
                                    className="basis-[220px] pl-6 sm:basis-[250px] lg:basis-[280px]"
                                >
                                    <div className="flex h-[130px] items-center justify-center sm:h-[150px]">
                                        <Image
                                            src={airline.logo}
                                            alt={airline.name}
                                            width={280}
                                            height={140}
                                            className="h-auto max-h-[105px] w-auto max-w-[220px] object-contain sm:max-h-[125px] sm:max-w-[250px]"
                                        />
                                    </div>
                                </CarouselItem>
                            ))}

                        </CarouselContent>
                    </Carousel>

                </div>
            </div>
        </section>
    );
}
