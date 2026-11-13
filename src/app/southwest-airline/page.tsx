
import Link from "next/link";
import {
  Plane,
  Phone,
  Users,
  Headphones,
  Clock,
  CalendarCheck,
  CheckCircle2,
  RefreshCw,
  XCircle,
  Star,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";
const SUPPORT_PHONE = "+18337544023";
const DISPLAY_PHONE = "(833) 754-4023";
import CTASection from "../_components/CTASection";

export const metadata: Metadata = {
  title: "Southwest Airlines Tickets & Booking Assistance",
  description:
    "Need help with Southwest Airlines flights? Contact Vuelofare for assistance with new bookings, flight changes, cancellations, and available travel options. Speak with our travel assistance team today.",
  keywords: [
    "Southwest Airlines tickets",
    "Southwest Airlines booking assistance",
    "Southwest flight booking",
    "Southwest flight changes",
    "Southwest cancellation assistance",
    "Southwest Airlines travel assistance",
    "Southwest flight reservations",
    "Vuelofare",
  ],
  alternates: {
    canonical: "/southwest-airlines",
  },
  openGraph: {
    title: "Southwest Airlines Tickets & Booking Assistance | Vuelofare",
    description:
      "Get assistance exploring Southwest Airlines flight options, bookings, and reservation questions. Contact the Vuelofare travel assistance team.",
    url: "/southwest-airlines",
    siteName: "Vuelofare",
    type: "website",
  },
};
const services = [
  {
    icon: CalendarCheck,
    title: "New",
    subtitle: "Booking",
  },
  {
    icon: RefreshCw,
    title: "Change",
    subtitle: "Flight",
  },
  {
    icon: XCircle,
    title: "Cancel",
    subtitle: "Flight",
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
    title: "Live Agent",
    subtitle: "Support",
  },
  {
    icon: Clock,
    title: "24/7",
    subtitle: "Booking Help",
  },
];

 

export default function SouthwestAirlinesPage() {
  return (
       <main className="min-h-screen overflow-hidden bg-white text-[#073452]">
    
          {/* HERO */}
          <section
            className="relative h-[28svh] min-h-[180px] max-h-[390px] overflow-hidden bg-[#f4f8fc] bg-no-repeat sm:h-[370px] sm:max-h-none md:h-[420px] lg:h-[510px] xl:h-[540px]"
            style={{
              backgroundImage: "url('/images/AirlineSupport.png')",
              backgroundSize: "auto 100%",
              backgroundPosition: "right center",
            }}
          >
            
            <div className="relative z-10 mx-auto flex  h-full top-3 max-w-6xl items-center px-4 sm:px-8 md:top-0 md:max-w-7xl md:px-10 lg:px-16">
    
              <div className="w-[69%] sm:w-[50%] md:w-[54%] lg:w-[50%]">
    
                <h1 className="text-lg font-extrabold leading-[1.17] tracking-tight text-[#073452] sm:text-3xl md:text-4xl md:leading-[1.15] lg:text-[48px] lg:leading-[1.13]">
                  SouthWest Airlines Tickets - Book, Change or Cancel With a Live Agent in Minutes - Call Vuelofare
                </h1>
    
                <p className="mt-3 max-w-sm text-[11px] leading-[1.3] text-gray-700 sm:text-base md:mt-5 md:max-w-lg md:text-lg md:leading-7 lg:text-xl">
                  Don't wait on hold for hours. Our agents help you book,
                  change or cancel your flight in minutes - Call Now.
                </p>
                <section className="relative top-6 hidden md:block  ">
                  <a
                    href={`tel:${SUPPORT_PHONE}`}
                    className="mx-auto flex min-h-[40px] max-w-5xl items-center justify-center gap-2 rounded-lg bg-[#159b9c] px-2 py-2 text-sm font-extrabold text-white shadow-[0_8px_20px_rgba(21,155,156,0.18)] transition hover:bg-[#117f80] sm:min-h-[48px] sm:text-xl md:min-h-[64px] md:rounded-xl md:text-xl lg:min-h-[72px] lg:text-2xl"
                  >
                    <Phone size={19} fill="currentColor" className="md:h-6 md:w-6" />
                    Call Now {DISPLAY_PHONE}
                  </a>
                </section>
              </div>
    
            </div>
          </section>
    
          {/* TRUST INDICATORS */}
          <section className="bg-white px-3 py-3 sm:px-8 sm:py-6 md:py-7 lg:py-9">
            <div className="mx-auto grid max-w-5xl grid-cols-3 gap-1 md:gap-8 lg:gap-14">
    
              {trustItems.map((item) => {
                const Icon = item.icon;
    
                return (
                  <div
                    key={item.title}
                    className="flex items-center justify-center gap-1.5 md:gap-3 lg:gap-4"
                  >
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#159b9c] text-white sm:h-9 sm:w-9 md:h-11 md:w-11 lg:h-12 lg:w-12">
                      <CheckCircle2 size={12} className="sm:h-5 sm:w-5 md:h-6 md:w-6" />
                    </div>
    
                    <div>
                      <h3 className="text-[11px] font-extrabold leading-tight text-[#073452] sm:text-sm md:text-base lg:text-lg">
                        {item.title}
                      </h3>
    
                      <p className="text-[10px] leading-tight text-gray-500 sm:text-xs md:text-sm lg:text-base">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                );
              })}
    
            </div>
          </section>
    
          {/* MAIN CALL BUTTON */}
          <section className="bg-white md:hidden px-4 pb-3 pt-2 sm:px-8 sm:pb-8 md:pb-9 lg:pb-11">
            <a
              href={`tel:${SUPPORT_PHONE}`}
              className="mx-auto flex min-h-[40px] max-w-5xl items-center justify-center gap-2 rounded-lg bg-[#159b9c] px-2 py-2 text-sm font-extrabold text-white shadow-[0_8px_20px_rgba(21,155,156,0.18)] transition hover:bg-[#117f80] sm:min-h-[48px] sm:text-xl md:min-h-[64px] md:rounded-xl md:text-xl lg:min-h-[72px] lg:text-2xl"
            >
              <Phone size={19} fill="currentColor" className="md:h-6 md:w-6" />
              Call Now {DISPLAY_PHONE}
            </a>
          </section>
    
          {/* THREE SERVICE CARDS */}
          <section className="bg-white px-3 pb-4 pt-2 sm:px-8 sm:pb-8 md:pb-10 lg:pb-12">
            <div className="mx-auto grid max-w-5xl grid-cols-3 gap-3 sm:gap-5 md:gap-7 lg:gap-8">
    
              {services.map((service) => {
                const Icon = service.icon;
    
                return (
                  <div
                
                key={service.title}
                className="flex min-h-[80px] flex-col items-center justify-center rounded-xl border border-gray-100 bg-white px-1 py-3 text-center shadow-[0_4px_14px_rgba(7,52,82,0.09)] transition hover:-translate-y-1 hover:shadow-lg sm:min-h-[180px] sm:rounded-2xl sm:p-6 md:min-h-[200px] md:p-7 lg:min-h-[230px] lg:p-9"
              >
                <div className="mb-2 flex h-7 w-7 items-center justify-center rounded-full bg-[#e5f5f5] text-[#159b9c] sm:mb-4 sm:h-12 sm:w-12 md:mb-5 md:h-16 md:w-16 lg:h-[76px] lg:w-[76px]">
                  <Icon size={16} className="sm:h-5 sm:w-5 md:h-8 md:w-8" />
                </div>

                <h3 className="text-[12px] font-extrabold leading-tight text-[#073452] sm:text-xl md:text-2xl lg:text-3xl">
                  {service.title}
                  <span className="mt-0.5 block">
                    {service.subtitle}
                  </span>
                </h3>
              </div>
                );
              })}
    
            </div>
          </section>
    
          {/* RATING */}
          <section className="bg-white px-4 pb-5 pt-3 sm:pb-10 md:pb-12 lg:pb-14">
            <div className="flex flex-col items-center text-center">
    
              <div className="flex items-center gap-1 text-[#efa92c] md:gap-2">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    size={22}
                    fill="currentColor"
                    strokeWidth={1}
                    className={`${index === 4 ? "opacity-60" : ""} md:h-8 md:w-8 lg:h-9 lg:w-9`}
                  />
                ))}
              </div>
    
              <h2 className="mt-1 text-xl font-extrabold text-[#073452] sm:text-3xl md:mt-2 md:text-4xl">
                4.6/5
              </h2>
    
              <p className="mt-1 text-[13px] text-gray-500 sm:text-sm md:text-base">
                Rated by travelers • Vuelofare Reviews
              </p>
    
            </div>
          </section>
        <section className="bg-[#f5f9fc] px-4 py-10 sm:px-8 sm:py-14 lg:py-16">
             <div className="mx-auto max-w-6xl">
     
               <div className="mx-auto max-w-3xl text-center">
                 <span className="text-sm font-bold uppercase tracking-wider text-[#159b9c]">
                   Travel Assistance
                 </span>
     
                 <h2 className="mt-2 text-2xl font-extrabold leading-tight text-[#073452] sm:text-3xl md:text-4xl">
                   SouthWest Airlines Booking Assistance
                 </h2>
     
                 <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                   Planning a trip or need assistance with an existing reservation?
                   Vuelofare provides independent travel assistance for customers
                   looking for SouthWest Airlines flight booking options, itinerary
                   updates, and general travel information. Connect with our team
                   to discuss your travel requirements and available options.
                 </p>
               </div>
     
               <div className="mt-9 grid gap-5 md:grid-cols-3">
     
                 <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                   <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#e5f5f5] text-[#159b9c]">
                     <CalendarCheck size={25} />
                   </div>
     
                   <h3 className="text-lg font-bold text-[#073452]">
                     New Flight Bookings
                   </h3>
     
                   <p className="mt-3 text-sm leading-6 text-gray-600">
                     Explore available flight options, compare itinerary details,
                     and get assistance with your new travel arrangements.
                   </p>
                 </div>
     
                 <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                   <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#e5f5f5] text-[#159b9c]">
                     <RefreshCw size={25} />
                   </div>
     
                   <h3 className="text-lg font-bold text-[#073452]">
                     Existing Reservations
                   </h3>
     
                   <p className="mt-3 text-sm leading-6 text-gray-600">
                     Get guidance about itinerary modifications, flight schedule
                     updates, and available options for existing reservations.
                   </p>
                 </div>
     
                 <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                   <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#e5f5f5] text-[#159b9c]">
                     <Headphones size={25} />
                   </div>
     
                   <h3 className="text-lg font-bold text-[#073452]">
                     Travel Support
                   </h3>
     
                   <p className="mt-3 text-sm leading-6 text-gray-600">
                     Speak with our travel assistance team about booking-related
                     questions, itinerary details, and general travel concerns.
                   </p>
                 </div>
     
               </div>
             </div>
           </section>
     
           {/* HOW IT WORKS */}
           <section className="bg-white px-4 py-10 sm:px-8 sm:py-14">
             <div className="mx-auto max-w-6xl">
     
               <div className="text-center">
                 <span className="text-sm font-bold uppercase tracking-wider text-[#159b9c]">
                   Simple Process
                 </span>
     
                 <h2 className="mt-2 text-2xl font-extrabold text-[#073452] sm:text-3xl md:text-4xl">
                   How Our Travel Assistance Works
                 </h2>
     
                 <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
                   Getting help with your travel arrangements is straightforward.
                   Contact our team and discuss the assistance you need.
                 </p>
               </div>
     
               <div className="mt-9 grid gap-7 md:grid-cols-3">
     
                 {[
                   {
                     number: "01",
                     title: "Call Our Team",
                     description:
                       "Contact our travel assistance team and explain whether you need a new booking or help with an existing itinerary.",
                   },
                   {
                     number: "02",
                     title: "Discuss Your Options",
                     description:
                       "Share your travel requirements and review the available options, applicable conditions, and service fees.",
                   },
                   {
                     number: "03",
                     title: "Review Your Arrangements",
                     description:
                       "Review the booking or reservation details carefully before proceeding with any requested service.",
                   },
                 ].map((step) => (
                   <div
                     key={step.number}
                     className="rounded-2xl border border-gray-100 bg-[#f8fbfc] p-6"
                   >
                     <span className="text-3xl font-extrabold text-[#159b9c]/40">
                       {step.number}
                     </span>
     
                     <h3 className="mt-3 text-lg font-bold text-[#073452]">
                       {step.title}
                     </h3>
     
                     <p className="mt-3 text-sm leading-6 text-gray-600">
                       {step.description}
                     </p>
                   </div>
                 ))}
     
               </div>
             </div>
           </section>
     
           
     
           {/* FINAL CALL TO ACTION */}
           <section className="bg-white px-4 py-10 sm:px-8 sm:py-14">
             <div className="mx-auto max-w-5xl rounded-2xl bg-[#073452] px-5 py-9 text-center sm:px-10 sm:py-12">
     
               <h2 className="text-2xl font-extrabold text-white sm:text-3xl md:text-4xl">
                 Need Help With Your Travel Plans?
               </h2>
     
               <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
                 Speak with our independent travel assistance team to discuss
                 booking options, existing reservations, and your travel needs.
               </p>
     
               <a
                 href={`tel:${SUPPORT_PHONE}`}
                 className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#159b9c] px-7 py-3 text-base font-bold text-white shadow-lg transition hover:bg-[#117f80] sm:text-lg"
               >
                 <Phone size={20} fill="currentColor" />
                 Call {DISPLAY_PHONE}
               </a>
     
             </div>
           </section>
        </main>
  );
}
