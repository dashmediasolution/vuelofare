 import HeroSection from "./_components/HeroSection";
import Navbar from "./_components/Navbar";
import TrustInformation from "./_components/TrustInformation";
import ServicesSection from "./_components/ServiceSection";
import HowItWorks from "./_components/HowItWorks";
import CTASection from "./_components/CTASection";
import Footer from "./_components/Footer";
import WhyChooseUs from "./_components/WhyChooseUs";

export default function Home() {
    return (
        <main className="min-h-screen bg-white">
 
            {/* Homepage Affiliation Disclaimer */}
            

            <HeroSection />

            <TrustInformation />

            <ServicesSection />

            <HowItWorks />

            <CTASection />

            <WhyChooseUs />

         </main>
    );
}
 