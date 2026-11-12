
import Link from "next/link";
import {
  Plane,
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
import type { Metadata } from "next";
const SUPPORT_PHONE = "+18339041682";
const DISPLAY_PHONE = "(833) 904-1582";
import CTASection from "../_components/CTASection";
export const metadata: Metadata = {
  title: "Delta Air Lines Tickets & Booking Assistance",
  description:
    "Need help with Delta Air Lines flights? Contact Vuelofare for assistance with new bookings, flight changes, cancellations, and travel options. Call our travel assistance team today.",
  keywords: [
    "Delta Air Lines tickets",
    "Delta booking assistance",
    "Delta flight booking",
    "Delta flight changes",
    "Delta cancellation assistance",
    "Delta travel assistance",
    "Vuelofare",
  ],
  alternates: {
    canonical: "/delta-air-lines",
  },
  openGraph: {
    title: "Delta Air Lines Tickets & Booking Assistance | Vuelofare",
    description:
      "Get assistance with Delta Air Lines flight bookings, changes, and cancellations. Speak with the Vuelofare travel assistance team.",
    url: "/delta-air-lines",
    siteName: "Vuelofare",
    type: "website",
  },
};
const services = [
  {
    icon: CalendarCheck,
    title: "New Booking",
    description:
      "Explore available  Delta Airlines flights and get assistance with your next booking.",
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


{/* Hero */}
<section className="relative overflow-hidden bg-[#f5fbfb]">
  <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#159b9c]/10 blur-3xl" />
  <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-blue-100/60 blur-3xl" />

  <div className="relative mx-auto max-w-7xl p-3">
    <div className="mx-auto max-w-7xl text-center">
    
      <h1 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-[#073452] text-3xl sm:text-4xl lg:text-[58px]">
         Delta Airlines Tickets
        <span className="mt-2 block text-[#159b9c]">
        Book With a Live Agent in Minutes -  <br/>
        Call vuelofare
        </span>
      </h1>

      <p className="mx-auto mt-6 max-w-4xl text-sm leading-7 text-gray-600 sm:text-base md:text-lg sm:leading-8">
        Don't wait on hold for hours. Our agents help you book, change or cancel your flight in minutes - Call Now.
      </p>

      <div className="mt-8 flex justify-center">
        <CallButton className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#159b9c] px-7 py-4 text-sm font-extrabold text-white shadow-[0_12px_30px_rgba(21,155,156,0.25)] transition hover:-translate-y-1 hover:bg-[#117f80] sm:w-auto sm:px-9 sm:text-base">
          <Phone size={19} fill="currentColor" />
          <span>Call Now {DISPLAY_PHONE}</span>
          <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
        </CallButton>
      </div>

      <p className="mt-4 text-xs md:text-base text-gray-500">
        Speak directly with our travel assistance team.
      </p>
    </div>

  

    {/* Trust Indicators */}
    <div className="mx-auto mt-10 grid max-w-3xl grid-cols-3 gap-4 border-t border-[#073452]/10 pt-8">
      {trustItems.map((item) => {
        const Icon = item.icon;

        return (
          <div key={item.title} className="text-center">
            <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#159b9c] shadow-sm">
              <Icon size={20} />
            </div>

            <h3 className="text-xs font-extrabold text-[#073452] sm:text-sm md:text-base">
              {item.title}
            </h3>

            <p className="mt-1 text-[10px] text-gray-500 sm:text-xs  md:text-base">
              {item.subtitle}
            </p>
          </div>
        );
      })}
    </div>
  </div>
</section>


      {/* Services */}
      <section className="relative py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">

          <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
           

            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-[#073452] sm:text-4xl">
               Delta Airlines Travel Assistance
            </h2>

            <p className="mt-3 text-sm leading-7 text-gray-500 sm:text-base">
              Whether you're planning a new journey or need help with an
              existing reservation, our travel agents are here to assist.
            </p>
          </div>
<div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
  {services.map((service) => {
    const Icon = service.icon;

    return (
      <div
        key={service.title}
        className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_5px_20px_rgba(7,52,82,0.04)] transition duration-300 hover:-translate-y-1 hover:border-[#159b9c]/40 hover:shadow-[0_15px_35px_rgba(7,52,82,0.09)] sm:p-8"
      >
        <span className="absolute right-6 top-5 text-4xl font-black text-gray-100">
          {service.number}
        </span>

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#159b9c]/10 text-[#159b9c] transition group-hover:bg-[#159b9c] group-hover:text-white">
          <Icon size={27} />
        </div>

        <h3 className="mt-6 text-xl font-extrabold text-[#073452]">
          {service.title}
        </h3>

        <p className="mt-3 text-sm leading-7 text-gray-500">
          {service.description}
        </p>

        <div className="mt-auto pt-6">
          <CallButton className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#159b9c] px-5 py-3 text-sm font-bold text-white shadow-md transition hover:bg-[#117f80]">
            <Phone size={17} fill="currentColor" />
            <span>Call Now {DISPLAY_PHONE}</span>
            <ArrowRight size={16} />
          </CallButton>
        </div>
      </div>
    );
  })}
</div>
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
