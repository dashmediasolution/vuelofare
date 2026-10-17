import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone, MessageCircle, MapPin, Clock, ArrowRight } from "lucide-react";
import { LegalPageLayout, LegalSection } from "../_components/legal-page-layout";

export const metadata: Metadata = {
  title: "Contact Us | Vuelofare",
  description: "Contact Vuelofare with questions about the website, travel information, or an inquiry you have submitted.",
  alternates: { canonical: "/contact-us" },
};

const contactEmail = "REPLACE_WITH_VERIFIED_SUPPORT_EMAIL";
const contactPhone = "REPLACE_WITH_VERIFIED_LOCAL_PHONE";
const businessAddress = "REPLACE_WITH_VERIFIED_BUSINESS_ADDRESS";
const supportHours = "Add verified support days and hours";

export default function ContactUsPage() {
  const emailReady = !contactEmail.startsWith("REPLACE_");
  const phoneReady = !contactPhone.startsWith("REPLACE_");
  const addressReady = !businessAddress.startsWith("REPLACE_");

  return (
    <LegalPageLayout eyebrow="Get in touch" title="Contact Vuelofare" description="Have a question about the website or need clarification about information you found here? Use the contact details below once they have been verified by the website owner.">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-slate-200 p-5">
          <Phone className="mb-3 text-[#159b9c]" size={24} />
          <h2 className="font-bold text-slate-900">Phone</h2>
          <p className="mt-2 text-lg text-slate-600">{"+91 96673 01134"}
          </p>
        
            <a className="mt-3 inline-block text-base font-bold text-[#087f81] underline" href={`tel:+919667301134`}>
              Call us
            </a>
        </div>
        <div className="rounded-xl border border-slate-200 p-5"><MapPin className="mb-3 text-[#159b9c]" size={24} /><h2 className="font-bold text-slate-900">Business address</h2><p className="mt-2 text-base leading-6 text-slate-600">{"B-16 S/F R/Side, Janakpuri Community Centre, Janakpuri, New Delhi – 110058"}</p></div>
      </div>
      <LegalSection title="Before you contact us">
        <p>Describe your question clearly and include a reference number only if one has been provided to you. Do not send passwords, full payment-card details, one-time codes, or unnecessary sensitive personal information.</p><p>If your question concerns a booking made directly with an airline, hotel, or another travel provider, check your confirmation for the provider responsible for that booking. Vuelofare cannot be assumed to control reservations or transactions handled by another company.</p></LegalSection>

    </LegalPageLayout>
  );
}
