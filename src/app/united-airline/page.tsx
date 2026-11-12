
import Link from "next/link";
import {
  CheckCircle2,
  Phone,
  Users,
  Headphones,
  Clock,
  CalendarCheck,
  RefreshCw,
  XCircle,
  Star,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";  
import type { Metadata } from "next";
const SUPPORT_PHONE = "+18338041499";
const DISPLAY_PHONE = "(833) 804-1499";
import CTASection from "../_components/CTASection";
import FlightSearchBar from "../_components/FlightSearchBar";
export const metadata: Metadata = {
  title: "United Airlines Tickets & Booking Assistance",
  description:
    "Need help with United Airlines flights? Contact Vuelofare for assistance with new bookings, flight changes, cancellations, and travel options. Call our travel assistance team today.",
  keywords: [
    "United Airlines tickets",
    "United booking assistance",
    "United flight booking",
    "United flight changes",
    "United cancellation assistance",
    "United travel assistance",
    "Vuelofare",
  ],
  alternates: {
    canonical: "/united-airlines",
  },
  openGraph: {
    title: "United Airlines Tickets & Booking Assistance",
    description:
      "Get assistance with United Airlines flight bookings, changes, and cancellations. Speak with the Vuelofare travel assistance team.",
    url: "/united-airlines",
    siteName: "Vuelofare",
    type: "website",
  },
};

const services = [
  {
    icon: CalendarCheck,
    title: "New Booking",
    description:
      "Explore available  United Airlines flights and get assistance with your next booking.",
    number: "01",
  },
  {
    icon: RefreshCw,
    title: "Change Flight",
    description:
      "Get guidance with available flight alternatives, schedule updates and applicable fees.",
    number: "02",
  },
  {
    icon: XCircle,
    title: "Cancel Flight",
    description:
      "Speak with our travel agents to understand cancellation options and applicable airline policies.",
    number: "03",
  },
];
   
const reviews = [
  {
    rating: 5,
    text: "The booking assistance was helpful and the team made it easy to understand the available flight options. Overall, a smooth experience.",
  },
  {
    rating: 5,
    text: "I needed help understanding my flight options and received clear guidance. The support team was friendly and professional.",
  },
  {
    rating: 4,
    text: "The agent was patient and explained the available travel options and booking details. It was convenient to get assistance over the phone.",
  },
  {
    rating: 5,
    text: "Getting help with my travel plans was straightforward. The team answered my questions and helped me understand the next steps.",
  },
];
const trustItems = [
  {
    icon: Users,
    title: "15,000+",
    subtitle: "Travelers Helped",
  },
  {
    icon: Headphones,
    title: "Live Agents",
    subtitle: "Personalized Support",
  },
  {
    icon: Clock,
    title: "24/7",
    subtitle: "Booking Help",
  },
];

function CallButton({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a href={`tel:${SUPPORT_PHONE}`} className={className}>
      {children}
    </a>
  );
}

export default function DeltaAirlinesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f9fb] text-[#073452]">


{/* HERO */}
<section className="relative isolate flex min-h-[300px] flex-col justify-center overflow-hidden bg-[#f2f9fc] sm:min-h-[350px] lg:min-h-[650px]">

  {/* Background Image */}
  <div className="absolute inset-0 z-0">
    <Image
      src="/images/CustomerSupport.png"
      alt="VueloFare travel assistance representative"
      fill
      priority
      sizes="100vw"
      quality={90}
      className="object-cover object-[76%_center] sm:object-[72%_center] lg:object-center"
    />
  </div>

  {/* Gradient Overlay */}
  <div className="absolute inset-0 z-[1] bg-gradient-to-r from-white via-white/90 to-white/5" />

  {/* Mobile Bottom Blend */}
  <div className="absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-transparent to-[#f2f9fc]/40 sm:hidden" />

  {/* Main Content */}
  <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col px-4 py-10 sm:px-8 sm:py-16 lg:px-12 lg:py-20">

    {/* Hero Text */}
    <div className="w-[68%] text-left sm:w-[62%] lg:w-[58%]">

      <h1 className="text-[clamp(1.25rem,5.5vw,2.2rem)] font-extrabold leading-[1.13] tracking-tight text-[#073452] sm:text-4xl lg:text-6xl">
        United Airlines Tickets

        <span className="mt-1.5 block text-[#159b9c] sm:mt-3">
          Book With a Live Agent in Minutes - Call VueloFare
        </span>
      </h1>

      <p className="mt-3 max-w-md text-[10px] leading-[1.6] text-gray-600 sm:mt-5 sm:text-sm sm:leading-7 lg:text-lg">
        Don't wait on hold for hours. Our agents help you book,
        change or cancel your flight in minutes. Call Now.
      </p>

      {/* Call Now Button */}
      <div className="mt-4 sm:mt-6">
        <CallButton className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#159b9c] px-3 py-3 text-[11px] font-bold text-white shadow-lg transition hover:bg-[#117f80] sm:w-fit sm:px-6 sm:py-4 sm:text-base">
          <Phone size={17} fill="currentColor" />
          <span>Call Now {DISPLAY_PHONE}</span>
          <ArrowRight size={16} />
        </CallButton>
      </div>

      {/* Supporting Text */}
      <div className="mt-3 flex items-center gap-2">
        <CheckCircle2 className="h-4 w-4 shrink-0 text-[#159b9c]" />
        <p className="text-[9px] font-semibold text-[#073452]/80 sm:text-sm">
          Speak directly with our travel assistance team.
        </p>
      </div>

    </div>


  </div>
    
</section>
{/* FULL-WIDTH TRUST INDICATORS */}
<section className="relative z-10 w-full  border-gray-100 bg-white py-5  sm:py-7">
  <div className="mx-auto grid w-full max-w-7xl grid-cols-3 divide-x divide-gray-200 px-3 sm:px-8">

    {trustItems.map((item) => {
      const Icon = item.icon;

      return (
        <div
          key={item.title}
          className="flex items-center justify-center gap-2 px-1 text-center sm:gap-3 sm:px-4"
        >
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#159b9c]/10 text-[#159b9c] sm:h-10 sm:w-10">
            <Icon size={18} />
          </div>

          <div className="min-w-0">
            <h3 className="text-[10px] font-extrabold text-[#073452] sm:text-sm md:text-base">
              {item.title}
            </h3>

            <p className="text-[9px] leading-tight text-gray-500 sm:text-xs">
              {item.subtitle}
            </p>
          </div>
        </div>
      );
    })}

  </div>
</section>

  <CTASection/>
{/* Reviews */}
<section className="border-y border-gray-100 bg-white py-14 sm:py-20">
  <div className="mx-auto max-w-7xl px-4 sm:px-8">
    <div className="mb-10 text-center">
      <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#159b9c]">
        TRAVELER EXPERIENCES
      </span>

      <h2 className="mt-3 text-2xl font-extrabold text-[#073452] sm:text-4xl">
        What Travelers Say About Vuelofare
      </h2>

      <p className="mt-3 text-sm text-gray-500 sm:text-base">
        Discover experiences from travelers who have used our travel assistance services.
      </p>
    </div>

    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {reviews.map((review, index) => (
        <div
          key={index}
          className="flex flex-col rounded-2xl border border-gray-200 bg-[#fafcfd] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          {/* Rating */}
          <div className="flex items-center gap-3">
            <span className="text-2xl font-extrabold text-[#073452]">
              4.6/5
            </span>

            <div>
              <div className="flex gap-1 text-[#f5a623]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={15} fill="currentColor" />
                ))}
              </div>
              <p className="mt-1 text-xs text-gray-500">
                Rated by travelers
              </p>
            </div>
          </div>

          {/* Review Text */}
          <p className="mt-5 flex-1 text-sm leading-7 text-gray-600">
            "{review.text}"
          </p>

          {/* Bottom Label */}
          <div className="mt-6 border-t border-gray-200 pt-4">
            <span className="text-xs font-bold text-[#073452]">
              Traveler Feedback
            </span>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

     

    </main>
  );
}
