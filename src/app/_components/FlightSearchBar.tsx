
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
    X,
    ChevronDown,
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
    const [mobileOpen, setMobileOpen] = useState(false);

    const [today, setToday] = useState("");

    useEffect(() => {
        setToday(new Date().toISOString().split("T")[0]);
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

        setMobileOpen(false);
        router.push(`/searching?${params.toString()}`);
    };

    const renderSearchForm = () => (
        <form onSubmit={handleSearch} className="w-full">
            <div className="rounded-2xl border border-gray-200 bg-white p-3 shadow-sm">
                {/* Trip Type */}
                <div className="mb-3 flex flex-wrap items-center gap-2">
                    {[
                        { label: "One Way", value: "oneway" },
                        { label: "Round Trip", value: "roundtrip" },
                        { label: "Multi City", value: "multicity" },
                    ].map((item) => (
                        <button
                            key={item.value}
                            type="button"
                            onClick={() => setTripType(item.value as TripType)}
                            className={`rounded-full px-4 py-2 text-xs font-semibold transition-all sm:text-sm ${tripType === item.value
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
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-12 lg:items-stretch">
                    {/* From */}
                    <div className="rounded-xl border border-gray-200 bg-gray-50 px-3 py-3 transition hover:border-[#159b9c] focus-within:border-[#159b9c] lg:col-span-2">
                        <label className="mb-1 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-gray-500">
                            <PlaneTakeoff size={13} />
                            From
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
                            }} required
                        />
                    </div>

                    {/* Swap */}
                    <div className="flex items-center justify-center sm:col-span-2 lg:col-span-1">
                        <button
                            type="button"
                            onClick={swapLocations}
                            aria-label="Swap departure and arrival"
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-600 shadow-sm transition hover:border-[#159b9c] hover:text-[#159b9c]"
                        >
                            <ArrowLeftRight size={17} />
                        </button>
                    </div>

                    {/* To */}
                    <div className="rounded-xl border border-gray-200 bg-gray-50 px-3 py-3 transition hover:border-[#159b9c] focus-within:border-[#159b9c] lg:col-span-2">
                        <label className="mb-1 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-gray-500">
                            <PlaneLanding size={13} />
                            To
                        </label>

                        <input
                            type="text"
                            value={arrival}
                            onChange={(e) => setArrival(e.target.value)}
                            placeholder="Destination city"
                            required
                            className="w-full min-w-0 bg-transparent text-sm font-bold text-gray-800 outline-none placeholder:font-normal placeholder:text-gray-400"
                        />
                    </div>

                    {/* Departure */}
                    <div className="rounded-xl border border-gray-200 bg-gray-50 px-3 py-3 transition hover:border-[#159b9c] focus-within:border-[#159b9c] lg:col-span-2">
                        <label className="mb-1 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-gray-500">
                            <CalendarDays size={13} />
                            Departure
                        </label>

                        <input
                            type="date"
                            value={departureDate}
                            min={today}
                            onChange={(e) => setDepartureDate(e.target.value)}
                            required
                            className="w-full min-w-0 bg-transparent text-sm font-semibold text-gray-800 outline-none"
                        />
                    </div>

                    {/* Return */}
                    {tripType === "roundtrip" && (
                        <div className="rounded-xl border border-gray-200 bg-gray-50 px-3 py-3 transition hover:border-[#159b9c] focus-within:border-[#159b9c] lg:col-span-2">
                            <label className="mb-1 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-gray-500">
                                <CalendarDays size={13} />
                                Return
                            </label>

                            <input
                                type="date"
                                value={returnDate}
                                min={departureDate || today}
                                onChange={(e) => setReturnDate(e.target.value)}
                                required
                                className="w-full min-w-0 bg-transparent text-sm font-semibold text-gray-800 outline-none"
                            />
                        </div>
                    )}

                    {/* Passengers and Class */}
                    <div
                        className={`rounded-xl border border-gray-200 bg-gray-50 px-3 py-3 transition hover:border-[#159b9c] focus-within:border-[#159b9c] ${tripType === "roundtrip" ? "lg:col-span-2" : "lg:col-span-4"
                            }`}
                    >
                        <label className="mb-1 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-gray-500">
                            <Users size={13} />
                            Travelers & Class
                        </label>

                        <div className="flex items-center gap-1">
                            <select
                                value={passengers}
                                onChange={(e) => setPassengers(e.target.value)}
                                className="w-full min-w-0 cursor-pointer appearance-none bg-transparent text-xs font-semibold text-gray-800 outline-none"
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
                                className="w-full min-w-0 cursor-pointer appearance-none bg-transparent text-xs font-semibold text-gray-800 outline-none"
                            >
                                <option>Economy</option>
                                <option>Premium Economy</option>
                                <option>Business</option>
                                <option>First Class</option>
                            </select>
                        </div>
                    </div>

                    {/* Search Button */}
                    <div className="flex sm:col-span-2 lg:col-span-1">
                        <button
                            type="submit"
                            title="Search Flights"
                            aria-label="Search Flights"
                            className="flex min-h-[64px] w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-white shadow-md transition hover:brightness-95 lg:px-2"
                            style={{ backgroundColor: PRIMARY }}
                        >
                            <Search size={22} />
                            <span className="text-sm font-bold lg:hidden">
                                Search Flights
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );

    return (
        <>
            {/* Desktop Search Form */}
            <section className="relative bottom-12 hidden w-full flex-col items-center gap-3 md:flex">
                <div className="flex w-full max-w-[1500px] justify-center">
                    <div className="w-[85%]">{renderSearchForm()}</div>
                </div>
            </section>

            {/* Mobile Simple Search Trigger */}
            <section className="w-full px-4 md:hidden relative bottom-6">
                <button
                    type="button"
                    onClick={() => setMobileOpen(true)}
                    className="flex w-full items-center gap-3 rounded-2xl border border-gray-200 bg-white p-3.5 text-left shadow-sm transition hover:border-[#159b9c]"
                >
                    <span
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white"
                        style={{ backgroundColor: PRIMARY }}
                    >
                        <Search size={21} />
                    </span>

                    <span className="min-w-0 flex-1">
                        <span className="block text-sm font-bold text-gray-900">
                            Search Flights
                        </span>
                        <span className="mt-1 block truncate text-xs text-gray-500">
                            {departure} to {arrival}
                        </span>
                    </span>

                    <ChevronDown size={19} className="shrink-0 text-gray-500" />
                </button>
            </section>

            {/* Mobile Search Modal */}
            {mobileOpen && (
                <div
                    className="fixed inset-0 z-[100] flex items-end justify-center bg-black/50 backdrop-blur-[2px] sm:items-center sm:p-4"
                    onClick={() => setMobileOpen(false)}
                >
                    <div
                        className="max-h-[92dvh] w-full overflow-y-auto rounded-t-3xl bg-white p-4 shadow-2xl sm:max-w-2xl sm:rounded-2xl sm:p-5"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="mb-5 flex items-center justify-between">
                            <div>
                                <h2 className="text-lg font-bold text-gray-900">
                                    Search Flights
                                </h2>
                                <p className="mt-1 text-xs text-gray-500">
                                    Find the right flight for your journey
                                </p>
                            </div>

                            <button
                                type="button"
                                onClick={() => setMobileOpen(false)}
                                aria-label="Close search"
                                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition hover:bg-gray-200"
                            >
                                <X size={19} />
                            </button>
                        </div>

                        {renderSearchForm()}
                    </div>
                </div>
            )}
        </>
    );
}
