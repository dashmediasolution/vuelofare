 import HeroSection from "./_components/HeroSection";
import Navbar from "./_components/Navbar";
import TrustInformation from "./_components/TrustInformation";
import ServicesSection from "./_components/ServiceSection";
import HowItWorks from "./_components/HowItWorks";
import CTASection from "./_components/CTASection";
import AirlinePartners from "./_components/AirlinePartners";
import WhyChooseUs from "./_components/WhyChooseUs";
import FlashFlightDeals from "./_components/FlashFlightDeals";
import FlightSearchBar from "./_components/FlightSearchBar";
export default function Home() {
    return (
        <main className="min-h-screen bg-white">
 
            {/* Homepage Affiliation Disclaimer */}
            

            <HeroSection />
            <FlightSearchBar/>
            <TrustInformation />

            <ServicesSection />

            <AirlinePartners/>
            <FlashFlightDeals/>
            <HowItWorks />
            <CTASection />

            <WhyChooseUs />

         </main>
    );
}
 