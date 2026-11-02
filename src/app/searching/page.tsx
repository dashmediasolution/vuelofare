
"use client";

import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Plane,
  LoaderCircle,
  X,
  Phone,
  AlertCircle,
  ArrowRight,
} from "lucide-react";

const PRIMARY = "#159b9c";

function SearchingContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [completed, setCompleted] = useState(false);

  const from = searchParams.get("from") || "New York (JFK)";
  const to = searchParams.get("to") || "London (LHR)";

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setCompleted(true);
    }, 3000);

    return () => window.clearTimeout(timer);
  }, []);
const handleBackToSearch = () => {
  router.replace("/");
};
  return (
    <main
      data-searching-page
      className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-white px-5 py-12"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-cyan-100/40 blur-[100px]" />
        <div className="absolute -right-20 top-20 h-80 w-80 rounded-full bg-blue-100/40 blur-[100px]" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-orange-100/20 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-xl flex-col items-center text-center">
        {/* Animated Plane */}
        <div className="relative mb-7 flex h-28 w-28 items-center justify-center">
          <div
            className="absolute inset-0 animate-ping rounded-full opacity-20"
            style={{ backgroundColor: PRIMARY }}
          />

          <div className="absolute inset-3 rounded-full border border-cyan-100 bg-cyan-50 shadow-lg shadow-cyan-100/50" />

          <div className="relative flex h-20 w-20 items-center justify-center">
            {completed ? (
              <AlertCircle
                size={43}
                strokeWidth={2}
                className="text-amber-500"
              />
            ) : (
              <Plane
                size={43}
                strokeWidth={2.3}
                className="animate-[plane_1.8s_ease-in-out_infinite]"
                style={{ color: PRIMARY }}
              />
            )}
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-2xl font-extrabold tracking-tight text-[#101828] sm:text-3xl">
          {completed
            ? "Need Help Finding Flights?"
            : "Searching Best Flights..."}
        </h1>

        <p className="mt-3 max-w-md text-sm leading-6 text-slate-500">
          {completed
            ? `We couldn't confirm suitable flight options from ${from} to ${to}. Our travel specialists can help you explore available options.`
            : `Fetching flight options from ${from} to ${to}`}
        </p>

        {!completed ? (
          <div className="mt-7 flex w-full flex-col items-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-cyan-50 px-4 py-2">
              <LoaderCircle
                size={16}
                className="animate-spin"
                style={{ color: PRIMARY }}
              />
              <span className="text-xs font-semibold text-cyan-700">
                Scanning airlines...
              </span>
            </div>

            {/* Animated Progress Bar */}
            <div className="mt-8 h-1.5 w-52 overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full w-1/3 rounded-full"
                style={{
                  backgroundColor: PRIMARY,
                  animation: "loading-progress 1.4s ease-in-out infinite",
                }}
              />
            </div>

           <button
  type="button"
  onClick={handleBackToSearch}
  className="mt-8 inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-2.5 text-xs font-semibold text-slate-800 transition hover:border-slate-500 hover:bg-slate-50"
>
  <X size={15} />
  Stop Search
</button>
          </div>
        ) : (
          <div className="mt-7 w-full max-w-md rounded-2xl border border-amber-200 bg-amber-50/80 p-5 text-left sm:p-6">
            <h2 className="text-base font-bold text-slate-900">
              Let us find the right flight for you
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Contact our travel specialists for help checking flight
              availability, fares, and alternative travel options.
            </p>

            <a
              href="tel:+18778810087"
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-bold text-white shadow-md transition hover:brightness-95"
              style={{ backgroundColor: PRIMARY }}
            >
              <Phone size={18} />
              Call (877) 881-0087
              <ArrowRight size={16} />
            </a>

      <button
  type="button"
  onClick={handleBackToSearch}
  className="mt-3 w-full rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
>
  Back to Search
</button>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="absolute bottom-5 left-0 right-0 text-center">
        <p className="text-[10px] font-medium tracking-wide text-slate-400">
          VUELOFARE · YOUR JOURNEY STARTS HERE
        </p>
      </div>

      <style jsx global>{`
        @keyframes plane {
          0%, 100% {
            transform: translateY(0) rotate(-8deg);
          }
          50% {
            transform: translateY(-7px) rotate(5deg);
          }
        }

        @keyframes loading-progress {
          0% {
            transform: translateX(-110%);
          }
          100% {
            transform: translateX(320%);
          }
        }
      `}</style>
    </main>
  );
}

export default function SearchingPage() {
  return (
    <Suspense
      fallback={
        <main
          data-searching-page
          className="flex min-h-[100svh] w-full items-center justify-center bg-white"
        >
          <LoaderCircle
            size={32}
            className="animate-spin"
            style={{ color: PRIMARY }}
          />
        </main>
      }
    >
      <SearchingContent />
    </Suspense>
  );
}
