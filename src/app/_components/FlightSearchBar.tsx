 
"use client";

import { useEffect, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import {
  PlaneTakeoff,
  PlaneLanding,
  ArrowLeftRight,
  CalendarDays,
  Users,
  Search,
} from "lucide-react";

type TripType = "oneway" | "roundtrip" | "multicity";

const PRIMARY = "#159b9c";

export default function FlightSearchBar() {
  const router = useRouter();

  const [tripType, setTripType] = useState<TripType>("roundtrip");
  const [departure, setDeparture] = useState("New York (JFK)");
  const [arrival, setArrival] = useState("London (LHR)");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [passengers, setPassengers] = useState("1 Adult");
  const [travelClass, setTravelClass] = useState("Economy");
  const [today, setToday] = useState("");

  useEffect(() => {
    setToday(new Date().toLocaleDateString("en-CA"));
  }, []);

  const swapLocations = () => {
    setDeparture(arrival);
    setArrival(departure);
  };

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!departure.trim() || !arrival.trim() || !departureDate) return;

    if (
      tripType === "roundtrip" &&
      (!returnDate || returnDate < departureDate)
    ) {
      return;
    }

    const params = new URLSearchParams({
      tripType,
      from: departure,
      to: arrival,
      departureDate,
      passengers,
      travelClass,
    });

    if (tripType === "roundtrip") {
      params.set("returnDate", returnDate);
    }

    router.push(`/searching?${params.toString()}`);
  };

  return (
    <section className="relative z-20 w-full px-3 sm:px-5 lg:px-6  bottom-10">
      <div className="mx-auto w-full max-w-[90%]">
        <form onSubmit={handleSearch}>
          <div className="rounded-2xl border border-gray-200 bg-white p-2.5 shadow-lg sm:p-4 lg:p-5">

            {/* Trip Type */}
            <div className="mb-3 flex flex-wrap items-center gap-1.5 sm:gap-2">
              {[
                { label: "One Way", value: "oneway" },
                { label: "Round Trip", value: "roundtrip" },
                { label: "Multi City", value: "multicity" },
              ].map((item) => (
                <button
                  key={item.value}
                  type="button"
                  onClick={() => setTripType(item.value as TripType)}
                  className={`rounded-full px-3 py-1.5 text-[11px] font-semibold transition sm:px-4 sm:py-2 sm:text-sm ${
                    tripType === item.value
                      ? "text-white shadow-sm"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                  style={
                    tripType === item.value
                      ? { backgroundColor: PRIMARY }
                      : undefined
                  }
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Search Fields */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-12 lg:items-stretch">

              {/* From */}
              <div className="rounded-xl border border-gray-200 bg-gray-50 px-2.5 py-2 sm:px-3 sm:py-3 lg:col-span-2">
                <label className="mb-1 flex items-center gap-1 text-[9px] font-bold uppercase tracking-wide text-gray-500 sm:text-[10px]">
                  <PlaneTakeoff size={12} />
                  From
                </label>

                <input
                  type="text"
                  value={departure}
                  onChange={(e) => setDeparture(e.target.value)}
                  placeholder="Departure city"
                  required
                  className="w-full min-w-0 bg-transparent text-xs font-bold text-gray-800 outline-none sm:text-sm"
                />
              </div>

              {/* To */}
              <div className="rounded-xl border border-gray-200 bg-gray-50 px-2.5 py-2 sm:px-3 sm:py-3 lg:col-span-2">
                <label className="mb-1 flex items-center gap-1 text-[9px] font-bold uppercase tracking-wide text-gray-500 sm:text-[10px]">
                  <PlaneLanding size={12} />
                  To
                </label>

                <input
                  type="text"
                  value={arrival}
                  onChange={(e) => setArrival(e.target.value)}
                  placeholder="Destination city"
                  required
                  className="w-full min-w-0 bg-transparent text-xs font-bold text-gray-800 outline-none sm:text-sm"
                />
              </div>

              {/* Swap */}
              <div className="col-span-2 flex justify-center lg:col-span-1 lg:items-center">
                <button
                  type="button"
                  onClick={swapLocations}
                  aria-label="Swap departure and arrival"
                  className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm transition hover:border-[#159b9c] hover:text-[#159b9c] lg:h-9 lg:w-9"
                >
                  <ArrowLeftRight size={15} />
                </button>
              </div>

              {/* Departure Date */}
              <div className="rounded-xl border border-gray-200 bg-gray-50 px-2.5 py-2 sm:px-3 sm:py-3 lg:col-span-2">
                <label className="mb-1 flex items-center gap-1 text-[9px] font-bold uppercase tracking-wide text-gray-500 sm:text-[10px]">
                  <CalendarDays size={12} />
                  Departure
                </label>

                <input
                  type="date"
                  value={departureDate}
                  min={today}
                  onChange={(e) => {
                    const value = e.target.value;
                    setDepartureDate(value);

                    if (returnDate && returnDate < value) {
                      setReturnDate("");
                    }
                  }}
                  required
                  className="w-full min-w-0 bg-transparent text-[11px] font-semibold text-gray-800 outline-none sm:text-sm"
                />
              </div>

              {/* Return Date */}
              {tripType === "roundtrip" && (
                <div className="rounded-xl border border-gray-200 bg-gray-50 px-2.5 py-2 sm:px-3 sm:py-3 lg:col-span-2">
                  <label className="mb-1 flex items-center gap-1 text-[9px] font-bold uppercase tracking-wide text-gray-500 sm:text-[10px]">
                    <CalendarDays size={12} />
                    Return
                  </label>

                  <input
                    type="date"
                    value={returnDate}
                    min={departureDate || today}
                    onChange={(e) => setReturnDate(e.target.value)}
                    required
                    className="w-full min-w-0 bg-transparent text-[11px] font-semibold text-gray-800 outline-none sm:text-sm"
                  />
                </div>
              )}

              {/* Travelers & Class */}
              <div
                className={`col-span-2 rounded-xl border border-gray-200 bg-gray-50 px-2.5 py-2 sm:px-3 sm:py-3 ${
                  tripType === "roundtrip"
                    ? "lg:col-span-2"
                    : "lg:col-span-4"
                }`}
              >
                <label className="mb-1 flex items-center gap-1 text-[9px] font-bold uppercase tracking-wide text-gray-500 sm:text-[10px]">
                  <Users size={12} />
                  Travelers & Class
                </label>

                <div className="flex min-w-0 items-center gap-2">
                  <select
                    value={passengers}
                    onChange={(e) => setPassengers(e.target.value)}
                    className="w-1/2 min-w-0 cursor-pointer appearance-none bg-transparent text-xs font-semibold text-gray-800 outline-none sm:text-sm"
                  >
                    <option>1 Adult</option>
                    <option>2 Adults</option>
                    <option>3 Adults</option>
                    <option>4 Adults</option>
                    <option>5 Adults</option>
                    <option>6 Adults</option>
                  </select>

                  <span className="text-gray-300">|</span>

                  <select
                    value={travelClass}
                    onChange={(e) => setTravelClass(e.target.value)}
                    className="w-1/2 min-w-0 cursor-pointer appearance-none bg-transparent text-xs font-semibold text-gray-800 outline-none sm:text-sm"
                  >
                    <option>Economy</option>
                    <option>Premium Economy</option>
                    <option>Business</option>
                    <option>First Class</option>
                  </select>
                </div>
              </div>

              {/* Search Button */}
              <div className="col-span-2 flex lg:col-span-1">
                <button
                  type="submit"
                  title="Search Flights"
                  aria-label="Search Flights"
                  className="flex min-h-10 w-full items-center justify-center gap-2 rounded-xl px-3 py-2 text-white shadow-sm transition hover:brightness-95 sm:min-h-12 lg:min-h-full"
                  style={{ backgroundColor: PRIMARY }}
                >
                  <Search size={19} />
                  <span className="text-xs font-bold sm:text-sm">
                    Search Flights
                  </span>
                </button>
              </div>

            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
