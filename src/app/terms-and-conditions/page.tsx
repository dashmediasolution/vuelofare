import type { Metadata } from "next";
import { LegalPageLayout , LegalSection } from "../_components/legal-page-layout";

export const metadata: Metadata = {
  title: "Terms & Conditions | Vuelofare",
  description: "Review the terms that apply to access to and use of the Vuelofare website.",
  alternates: { canonical: "/terms-and-conditions" },
};

export default function TermsAndConditionsPage() {
  return (
    <LegalPageLayout eyebrow="Website terms" title="Terms & Conditions" description="These terms describe the general conditions for accessing and using the Vuelofare website.">
      <LegalSection title="1. Acceptance of these terms"><p>By accessing or using Vuelofare, you agree to these Terms & Conditions and any applicable laws. If you do not agree, please stop using the website. These terms should be reviewed by the business and adapted to its actual services and applicable jurisdiction before publication.</p></LegalSection>
       <LegalSection title="3. Services and availability"><p>Features and services may change, be unavailable, or be limited by location or other conditions. A description on the website is not a confirmation that a booking,  refund, or other transaction has been completed. Any service that Vuelofare actually provides should be explained clearly, including applicable charges, conditions, and confirmation procedures.</p></LegalSection>
      <LegalSection title="4. Third-party providers"><p>The website may refer or link to airlines, hotels, booking platforms, travel suppliers, or other third parties. Those providers operate under their own terms, conditions, availability, and privacy policies. Unless expressly stated in a separate, accurate agreement, Vuelofare does not represent that it owns, operates, or controls those third-party services.</p><p>A link or reference does not imply a commercial relationship, sponsorship, authorization, or endorsement.</p></LegalSection>
      <LegalSection title="5. Prices, schedules, and provider rules"><p>Travel prices, availability, schedules, baggage rules, entry requirements, and provider policies can change without notice. Any third-party price or policy shown on the website should be treated according to its stated source and time of retrieval. The relevant provider’s confirmed terms govern its service.</p></LegalSection>
      <LegalSection title="6. User conduct"><p>You agree not to:</p><ul className="list-disc space-y-2 pl-6"><li>Use the website for unlawful, deceptive, or fraudulent purposes.</li><li>Attempt unauthorized access to the website, its systems, or accounts.</li><li>Introduce malicious code or interfere with website operation.</li><li>Submit information that you know is false or that you are not entitled to share.</li><li>Copy or misuse website content in violation of applicable law or third-party rights.</li></ul></LegalSection>
      <LegalSection title="7. Intellectual property"><p>Unless otherwise indicated, the website’s original text, design, and materials are owned by or used with permission by the relevant rights holder. You may access and use the website for lawful personal purposes. Do not reproduce or commercially exploit protected material without appropriate permission. Third-party trademarks remain the property of their respective owners.</p></LegalSection>
      <LegalSection title="8. Disclaimers"><p>To the extent permitted by law, the website is provided on an “as is” and “as available” basis. Nothing in these terms excludes a consumer right, guarantee, or liability that cannot lawfully be excluded. See the Disclaimer page for additional information.</p></LegalSection>
      <LegalSection title="9. Limitation of liability"><p>To the extent permitted by applicable law, Vuelofare is not responsible for losses arising from reliance on general website information, third-party websites or services, provider decisions, interruptions, or events outside its reasonable control. This provision does not exclude liability where exclusion is prohibited by law, nor does it replace any specific obligations Vuelofare expressly accepts for a service.</p></LegalSection>
       <LegalSection title="10. Governing law"><p>Insert the correct governing law, jurisdiction, and dispute-resolution terms after confirming the legal entity operating the website and obtaining appropriate legal advice. Do not publish a jurisdiction that does not accurately apply to the business.</p></LegalSection>
     </LegalPageLayout>
  );
}
