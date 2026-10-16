import type { Metadata } from "next";
import { LegalPageLayout , LegalSection } from "../_components/legal-page-layout";

export const metadata: Metadata = {
  title: "Refund Policy | Vuelofare",
  description: "Understand how refund requests and cancellations should be handled for services actually purchased through Vuelofare.",
  alternates: { canonical: "/refund-policy" },
};

export default function RefundPolicyPage() {
  return (
    <LegalPageLayout eyebrow="Refund information" title="Refund Policy" description="Read the general information below about cancellations, refunds, and service fees. The final policy must match the services Vuelofare actually sells or facilitates.">
      <LegalSection title="1. Important information"><p>Refund eligibility depends on the specific product or service purchased, the terms disclosed at the time of purchase, the relevant provider’s rules, and applicable law. This page is a policy template; it must be customized before publication to describe Vuelofare’s actual transaction and refund process.</p></LegalSection>
      <LegalSection title="2. Airline tickets and third-party bookings"><p>If a booking is made directly with an airline or another travel provider, the provider’s fare rules, cancellation conditions, and refund process generally apply to that booking. Contact the provider or the seller identified on your booking confirmation to determine who can process a cancellation or refund.</p><p>Do not assume that Vuelofare can cancel a reservation, authorize a provider refund, or return money for a booking that it did not sell or process.</p></LegalSection>
      <LegalSection title="3. Services purchased directly from Vuelofare"><p>If Vuelofare directly charges for a service, state here the exact cancellation window, eligibility criteria, any non-refundable amount, service-fee treatment, and steps required to request a refund. These conditions must be shown to customers before they pay and must comply with applicable law.</p><p><strong>Publication requirement:</strong> Replace this paragraph with the business’s verified terms. Do not claim that all fees are non-refundable or promise a refund timeline unless that is accurate.</p></LegalSection>
      <LegalSection title="4. How to submit a request"><p>To ask about a refund, contact the support team using the details on the Contact Us page. Include only the information reasonably necessary to identify the inquiry, such as a reference number, the email used for the transaction, and a short description of the request. Do not send full payment-card details or passwords.</p></LegalSection>
      <LegalSection title="5. Review and processing"><p>Once a request is received, the responsible seller or provider should review it against the applicable booking conditions and legal requirements. If a refund is approved, the method and timing depend on the payment provider, bank, original payment method, and applicable rules. Insert the actual processing estimates and responsible party here after verification.</p></LegalSection>
      <LegalSection title="6. Changes, cancellations, and no-shows"><p>Changes, cancellations, missed departures, unused services, and partially used bookings may have different conditions. Review the relevant provider’s rules and the terms disclosed at purchase. Any service fee charged by Vuelofare must be clearly disclosed and lawful.</p></LegalSection>
      <LegalSection title="7. Duplicate or incorrect charges"><p>If you believe you were charged incorrectly, contact the seller or payment provider shown on your receipt as soon as reasonably possible. Provide the transaction reference and a description of the issue, but never provide your complete card number, PIN, password, or one-time security code.</p></LegalSection>
      <LegalSection title="8. Legal rights"><p>Nothing in this policy is intended to limit mandatory consumer rights or remedies available under applicable law. Where this policy conflicts with a non-waivable legal right, the applicable legal requirement takes precedence.</p></LegalSection>
     </LegalPageLayout>
  );
}
