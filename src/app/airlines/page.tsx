
import Link from "next/link";
import {
  Plane,
  Phone,
  RefreshCw,
  BriefcaseBusiness,
  Tag,
  CalendarDays,
  Armchair,
  FileText,
  Headphones,
  ShieldCheck,
  CreditCard,
  Luggage,
  CheckCircle2,
  Clock,
  Globe,
  ArrowRight,
  Search,
  UserRound,
  Menu,
  CircleHelp,
  ExternalLink,
} from "lucide-react";

const SUPPORT_PHONE = "+18778810087";

const primaryServices = [
  {
    icon: RefreshCw,
    title: "American Airlines Booking & Travel Assistance",
    description: "Get expert guidance with your flight booking and travel needs.",
  },
  {
    icon: Luggage,
    title: "Baggage Policy Assistance",
    description: "Understand baggage rules, allowances, restrictions and fees.",
  },
  {
    icon: Tag,
    title: "Cheap Fares Assistance",
    description: "Explore affordable fares and available flight options for your journey.",
  },
  {
    icon: Plane,
    title: "Flight Status Assistance",
    description: "Get guidance on departure times, arrivals and flight schedules.",
  },
  {
    icon: Clock,
    title: "Check-in Assistance",
    description: "Get help understanding online check-in, boarding passes and airport procedures.",
  },
  {
    icon: ShieldCheck,
    title: "Travel Documentation Assistance",
    description: "Get guidance on passport requirements, travel documents and essential journey information.",
  },
];

const additionalServices = [
  {
    icon: Armchair,
    title: "Seat Selection Assistance",
    description:
      "Explore available seating options, preferred seats and extra legroom choices.",
  },
  {
    icon: CalendarDays,
    title: "Travel Date Assistance",
    description:
      "Get guidance on available travel dates and alternative flight schedules.",
  },
  {
    icon: CreditCard,
    title: "Payment & Booking Queries",
    description:
      "Get assistance with payment methods, booking charges and transaction-related questions.",
  },
  {
    icon: FileText,
    title: "Passenger Details Assistance",
    description:
      "Understand the requirements for updating passenger information and travel documents.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Group Travel Assistance",
    description:
      "Explore flight arrangements for families, friends and corporate groups.",
  },
];
const steps = [
  {
    number: "01",
    title: "Contact Our Team",
    description:
      "Call our travel assistance team and explain what you need help with.",
  },
  {
    number: "02",
    title: "Share Your Details",
    description:
      "Provide your itinerary or booking details when necessary.",
  },
  {
    number: "03",
    title: "Explore Your Options",
    description:
      "Understand available options, applicable charges and next steps.",
  },
];

const faqs = [
  {
    question: "How can I book flight tickets through Vuelofare?",
    answer:
      "You can contact Vuelofare's travel assistance team to explore available flight options, compare fares and get guidance with your booking. Flight reservations are subject to availability and applicable airline terms.",
  },
  {
    question: "Which airlines can I book through Vuelofare?",
    answer:
      "Vuelofare can assist travelers in exploring flight options across different airlines, depending on route availability, schedules and applicable booking conditions.",
  },
  {
    question: "How can I find affordable flight tickets?",
    answer:
      "You can explore different airlines, compare travel dates and check available fare options. Booking in advance and maintaining flexibility with your travel schedule may help you find competitive prices.",
  },
  {
    question: "Can I get assistance with my existing flight booking?",
    answer:
      "Yes. Our travel assistance team can help you understand your booking details, airline policies, travel requirements and available options based on your itinerary.",
  },
  {
    question: "How can I check my flight status?",
    answer:
      "You can check your flight status through the airline's official website using your flight number or booking information. You can also contact our team for general guidance.",
  },
  {
    question: "What baggage allowance is included with my ticket?",
    answer:
      "Baggage allowances depend on the airline, route, cabin class and fare type. We recommend checking your ticket details and the airline's official baggage policy before travelling.",
  },
  {
    question: "Can I choose my preferred seat?",
    answer:
      "Yes. Many airlines provide different seating options, including standard seats, preferred seats and extra-legroom seats. Availability and additional charges depend on the airline and ticket conditions.",
  },
  {
    question: "What documents do I need for air travel?",
    answer:
      "Travel document requirements depend on your destination and nationality. Passengers may need a valid passport, visa and other supporting documents for international journeys.",
  },
  {
    question: "Can I get help with passenger name corrections?",
    answer:
      "Our team can guide you through the airline's requirements for correcting passenger details. Eligibility and applicable charges depend on the airline's policies and ticket conditions.",
  },
  {
    question: "What payment methods are available for flight bookings?",
    answer:
      "Available payment methods may include major credit cards, debit cards and other supported payment options. The available methods will be displayed during the booking process.",
  },
  {
    question: "Does Vuelofare charge service fees?",
    answer:
      "Service fees may apply to certain travel assistance services. Any applicable agency fees and airline charges will be communicated before you proceed.",
  },
  {
    question: "Can I get assistance with group flight bookings?",
    answer:
      "Yes. Vuelofare can help families, friends and corporate groups explore suitable flight arrangements based on group size, travel dates and destination.",
  },
  {
    question: "How can I contact Vuelofare customer support?",
    answer:
      "You can contact our travel assistance team by calling +1 877-881-0087 for help with flight bookings, travel information and general enquiries.",
  },
  {
    question: "Is Vuelofare affiliated with any airline?",
    answer:
      "Vuelofare operates as an independent travel agency. It is not affiliated with, endorsed by or officially connected to any airline unless explicitly stated.",
  },
  {
    question: "Where can I find the latest airline travel policies?",
    answer:
      "You can find the latest travel policies, baggage information, airport guidelines and other official updates on the respective airline's website.",
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
    <a
      href={`tel:${SUPPORT_PHONE}`}
      className={className}
    >
      {children}
    </a>
  );
}

export default function AmericanAirlinesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f9fb] pb-20 text-[#073452] md:pb-0">

      
 

      {/* Hero Section */}
      <section className="relative bg-white">
        <div className="mx-auto max-w-7xl px-4 pb-9 pt-9 sm:px-8 sm:pb-16 sm:pt-16 lg:py-20">

          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center rounded-full border border-[#073452]/30 bg-[#dce8ff] px-4 py-1.5 text-xs font-bold text-[#073452]">
                Travel Agency
            </span>

            <h1 className="mx-auto mt-5 max-w-3xl text-[27px] font-extrabold leading-[1.2] tracking-tight text-[#073452] sm:text-4xl lg:text-4xl">
              American Airlines Flight Tickets - Booking Assistance by
              Vuelofare.com Travel Agency
            </h1>

            <p className="mt-4 text-base font-medium text-gray-600 sm:text-lg">
              Cheap Tickets & Support via Our Agency
            </p>

            <p className="mx-auto mt-4 hidden max-w-2xl text-sm leading-7 text-gray-500 sm:block sm:text-base">
              Planning your next journey? Explore available American Airlines
              flight options and get assistance with booking questions,
              baggage information, travel changes and other travel-related
              services through Vuelofare.
            </p>
          </div>

          {/* Primary Assistance Cards */}
          <div className="mx-auto mt-7 grid max-w-4xl gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
            {primaryServices.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="flex min-h-[148px] items-center gap-3 rounded-xl border border-[#dce2e8] bg-white px-3.5 py-5 shadow-[0_4px_12px_rgba(7,52,82,0.06)] transition hover:-translate-y-1 hover:shadow-lg sm:min-h-[235px] sm:flex-col sm:items-start sm:justify-between sm:p-6"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#073452]/30 bg-white text-[#073452] sm:h-12 sm:w-12">
                    <Icon size={20} />
                  </div>

                  <div className="min-w-0 flex-1 sm:flex-none">
                    <h2 className="text-[15px] font-bold leading-[1.35] text-[#073452] sm:text-lg">
                      {service.title}
                    </h2>
                    <p className="mt-1.5 text-xs leading-5 text-gray-600 sm:text-sm">
                      {service.description}
                    </p>
                  </div>

                  <CallButton className="flex shrink-0 flex-col items-center justify-center rounded-lg border border-[#073452] px-2 py-2 text-center text-[10px] font-bold leading-[1.3] text-[#073452] transition hover:bg-[#073452] hover:text-white sm:w-full sm:flex-row sm:gap-1.5 sm:px-3 sm:py-3 sm:text-sm">
                    <span>Get Live Quote</span>
                    <span>on Call</span>
                  </CallButton>
                </div>
              );
            })}
          </div>

          {/* Desktop trust information */}
          <div className="mt-9 hidden flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs font-medium text-gray-500 md:flex">
            {[
              "Booking guidance",
              "Travel support",
              "Clear service information",
            ].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#159b9c]" />
                {item}
              </span>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="mt-9 hidden text-center md:block">
            <CallButton className="inline-flex items-center gap-2 rounded-xl bg-[#073452] px-9 py-4 text-sm font-bold text-white transition hover:bg-[#159b9c]">
              <Phone size={17} />
              Call for Booking Assistance
              <ArrowRight size={17} />
            </CallButton>
          </div>
        </div>
      </section>

      {/* Assistance Benefits */}
      <section className="border-y border-gray-100 bg-[#eff7f8] py-7 sm:py-10">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 sm:px-8 md:grid-cols-4">
          {[
            {
              icon: Headphones,
              title: "Personal Assistance",
              desc: "Help with travel queries",
            },
            {
              icon: Globe,
              title: "Travel Options",
              desc: "Explore available routes",
            },
            {
              icon: ShieldCheck,
              title: "Clear Information",
              desc: "Understand applicable terms",
            },
            {
              icon: Clock,
              title: "Convenient Support",
              desc: "Assistance when you need it",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="flex items-start gap-3">
                <Icon
                  size={23}
                  className="mt-1 shrink-0 text-[#159b9c]"
                />
                <div>
                  <h3 className="text-xs font-bold text-[#073452] sm:text-sm">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[11px] leading-5 text-gray-500 sm:text-xs">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Additional Services */}
      <section id="services" className="scroll-mt-20 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="mx-auto mb-9 max-w-2xl text-center sm:mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#159b9c]">
              MORE TRAVEL SERVICES
            </span>

            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-[#073452] sm:text-4xl">
              More Airlines Travel Assistance
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-500 sm:text-base sm:leading-7">
              Find additional assistance for your flight booking and travel
              requirements.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {additionalServices.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="flex flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:border-[#159b9c]/50 hover:shadow-lg sm:p-6"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#159b9c]/10 text-[#159b9c]">
                    <Icon size={21} />
                  </div>

                  <h3 className="mt-4 text-base font-bold text-[#073452]">
                    {service.title}
                  </h3>

                  <p className="mt-2 flex-1 text-sm leading-6 text-gray-500">
                    {service.description}
                  </p>

                  <CallButton className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#159b9c] hover:text-[#073452]">
                    Get Assistance
                    <ArrowRight size={16} />
                  </CallButton>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-[#073452] py-14 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-8">
          <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#6ad4cf]">
              SIMPLE PROCESS
            </span>

            <h2 className="mt-3 text-2xl font-extrabold sm:text-4xl">
              How Vuelofare Can Help
            </h2>

            <p className="mt-3 text-sm leading-6 text-white/65 sm:text-base">
              Getting travel assistance should be simple. Follow these
              three steps to get started.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3 sm:gap-10">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-[#159b9c]/40 bg-[#159b9c]/15 text-xl font-extrabold text-[#6ad4cf] sm:h-16 sm:w-16 sm:text-2xl">
                  {step.number}
                </div>

                <h3 className="mt-5 text-base font-bold sm:text-lg">
                  {step.title}
                </h3>

                <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-white/60">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center sm:mt-14">
            <CallButton className="inline-flex items-center gap-2 rounded-xl bg-[#159b9c] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#117f80]">
              <Phone size={17} />
              Talk to Our Travel Team
              <ArrowRight size={17} />
            </CallButton>
          </div>
        </div>
      </section>

      {/* Travel Information */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 sm:px-8 lg:grid-cols-2 lg:gap-14">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#159b9c]">
              TRAVEL SMARTER
            </span>

            <h2 className="mt-3 text-2xl font-extrabold leading-tight text-[#073452] sm:text-4xl">
              Helpful Information Before Your Airlines Flight
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-500 sm:text-base">
              A little preparation can make your journey easier. Before
              travelling, review your ticket details, baggage allowance,
              check-in requirements and airport information.
            </p>

            <div className="mt-6 space-y-4">
              {[
                "Review your ticket and passenger details.",
                "Check baggage allowance for your specific itinerary.",
                "Confirm airport and flight departure information.",
                "Understand change, cancellation and refund conditions.",
                "Check check-in times and travel document requirements.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={19}
                    className="mt-0.5 shrink-0 text-[#159b9c]"
                  />
                  <p className="text-sm leading-6 text-gray-600">{item}</p>
                </div>
              ))}
            </div>
          </div>

         
        </div>
      </section>

      {/* FAQs */}
      <section className="border-t border-gray-100 bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-8">
          <div className="mb-8 text-center sm:mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#159b9c]">
              FREQUENTLY ASKED QUESTIONS
            </span>

            <h2 className="mt-3 text-2xl font-extrabold text-[#073452] sm:text-4xl">
              Airlines Travel FAQs
            </h2>

            <p className="mt-3 text-sm text-gray-500 sm:text-base">
              Find answers to common questions about bookings and travel
              assistance.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-gray-200 bg-white p-4 transition open:border-[#159b9c]/50 open:bg-[#f8fbfb] sm:p-5"
                open={index === 0}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-bold text-[#073452] marker:hidden sm:text-base">
                  <span className="flex items-start gap-3">
                    <CircleHelp
                      size={19}
                      className="mt-0.5 shrink-0 text-[#159b9c]"
                    />
                    {faq.question}
                  </span>

                  <span className="text-xl text-[#159b9c] transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="mt-4 border-t border-gray-100 pt-4 pl-8 text-sm leading-7 text-gray-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>

          <div className="mt-10 rounded-2xl bg-[#eff7f8] p-6 text-center sm:p-9">
            <h3 className="text-xl font-extrabold text-[#073452] sm:text-2xl">
              Still Have Questions?
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Contact our travel assistance team for help with your
              travel-related queries.
            </p>

            <CallButton className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#159b9c] px-7 py-3.5 text-sm font-bold text-white transition hover:bg-[#117f80]">
              <Phone size={17} />
              Call Our Team
            </CallButton>
          </div>
        </div>
      </section>
 
      {/* Fixed Mobile Call CTA */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-gray-200 bg-white/95 p-3 shadow-[0_-4px_15px_rgba(0,0,0,0.10)] backdrop-blur-md md:hidden">
        <CallButton className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#d51f2a] px-5 py-3.5 text-sm font-bold text-white shadow-md transition active:scale-[0.98]">
          <Phone size={18} fill="currentColor" />
          Call for Booking Assistance
        </CallButton>
      </div>

    </main>
  );
}
