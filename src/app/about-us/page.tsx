import type { Metadata } from "next";
import { LegalPageLayout , LegalSection } from "../_components/legal-page-layout";

export const metadata: Metadata = {
  title: "About Us | Vuelofare",
  description: "Learn about Vuelofare, our website, and our approach to providing travel information and assistance.",
  alternates: { canonical: "/about-us" },
};

export default function AboutUsPage() {
  return (
    <LegalPageLayout eyebrow="About Vuelofare" title="Travel information to help you plan with confidence" description="Learn what Vuelofare is, what this website is intended to provide, and how to contact us.">
      <LegalSection title="Who we are">
        <p>Vuelofare is a travel-focused website designed to help visitors explore travel-related information and understand options that may be available for their journeys. We aim to make information easier to find and help visitors make informed decisions.</p>
        <p>Before publishing this page, add the accurate legal name of the business operating Vuelofare, its place of business, and a precise description of the services it actually offers.</p>
      </LegalSection>
      <LegalSection title="What you can expect">
        <p>Depending on the features currently available on the website, visitors may find general travel information, trip-planning resources, or ways to submit an inquiry. The availability of any specific service should be confirmed on the relevant page before you rely on it.</p>
        <p>Unless a service is expressly described and confirmed, do not assume that Vuelofare issues airline tickets, changes reservations, cancels bookings, or processes refunds directly.</p>
      </LegalSection>
      <LegalSection title="Independent website">
        <p>Vuelofare is presented as an independent travel website. Airline names, logos, trademarks, and other third-party names belong to their respective owners. References to third parties are for identification or informational purposes and do not, by themselves, imply a partnership, sponsorship, authorization, or endorsement.</p>
      </LegalSection>
      <LegalSection title="Accurate information matters">
        <p>We aim to keep website content clear and useful. Travel requirements, schedules, prices, fees, and provider policies can change, so visitors should verify important details with the relevant airline, hotel, travel provider, or official authority before making a decision.</p>
      </LegalSection>
      <LegalSection title="Contact us">
        <p>For questions about this website, use the contact details on our <a className="font-semibold text-[#087f81] underline" href="/contact-us">Contact Us</a> page. Replace all marked contact placeholders with monitored, accurate business details before the website goes live.</p>
      </LegalSection>
    </LegalPageLayout>
  );
}
