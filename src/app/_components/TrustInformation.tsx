import {
    Lock,
    ShieldCheck,
    Star,
} from "lucide-react";

export default function TrustInformation() {
    return (
        <section
            id="why-travelconnect"
            className="w-full border-t border-[#e2f1f1] bg-[#f0fbfb]"
        >
            <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 px-5 sm:grid-cols-3 sm:px-8 lg:px-10">
                {/* Trusted Experts */}
                <div className="flex items-center gap-3 border-b border-[#d7eeee] py-5 sm:border-b-0 sm:border-r sm:px-5 md:px-6 lg:py-6">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#d8f2f0]">
                        <ShieldCheck className="h-5 w-5 text-[#078f8b]" />
                    </div>

                    <div>
                        <h3 className="text-base font-bold text-[#174d63] sm:text-sm md:text-[1.2rem]">
                            Trusted Travel Experts
                        </h3>

                        <p className="mt-1 text-xs leading-4 text-[#7793a2] sm:text-xs md:text-[0.88rem]">
                            Experienced specialists, not bots.
                        </p>
                    </div>
                </div>

                {/* Secure */}
                <div className="flex items-center gap-3 border-b border-[#d7eeee] py-5 sm:border-b-0 sm:border-r sm:px-5 md:px-6 lg:py-6">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#d8f2f0]">
                        <Lock className="h-5 w-5 text-[#078f8b]" />
                    </div>

                    <div>
                        <h3 className="text-base font-bold text-[#174d63] sm:text-sm md:text-[1.2rem]">
                            Secure & Private
                        </h3>

                        <p className="mt-1 text-xs leading-4 text-[#7793a2] sm:text-xs md:text-[0.88rem]">
                            Your information stays protected.
                        </p>
                    </div>
                </div>

                {/* Happy Travelers */}
                <div className="flex items-center gap-3 py-5 sm:px-5 md:px-6 lg:py-6">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#d8f2f0]">
                        <Star className="h-5 w-5 fill-[#078f8b] text-[#078f8b]" />
                    </div>

                    <div>
                        <h3 className="text-base font-bold text-[#174d63] sm:text-sm md:text-[1.2rem]">
                            Travel Made Simple
                        </h3>

                        <p className="mt-1 text-xs leading-4 text-[#7793a2] sm:text-xs md:text-[0.88rem]">
                            Helpful guidance for every journey.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}