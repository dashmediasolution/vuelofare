 import type { Metadata } from "next";
import { LegalPageLayout, LegalSection } from "../_components/legal-page-layout";

export const metadata: Metadata = {
    title: "Refund Policy | Vuelofare",
    description:
        "Understand refund eligibility, refund requests, processing, and applicable terms for services purchased through Vuelofare.",
    alternates: { canonical: "/refund-policy" },
};

export default function RefundPolicyPage() {
    return (
        <LegalPageLayout
            eyebrow="Refund information"
            title="Refund Policy"
            description="Learn about refund eligibility, how to submit a refund request, and how approved refunds are processed."
        >
            <LegalSection title="1. Important information">
                <p>
                    Refund eligibility depends on the specific product or
                    service purchased, the terms disclosed at the time of
                    purchase, the relevant provider’s rules, and applicable
                    law.
                </p>
            </LegalSection>

            <LegalSection title="2. Airline tickets and third-party bookings">
                <p>
                    If a booking is made directly with an airline or another
                    travel provider, that provider’s applicable terms and
                    refund procedures generally apply. Contact the provider
                    or the seller identified on your booking confirmation to
                    determine who is responsible for processing your refund.
                </p>

                <p>
                    Vuelofare cannot guarantee a refund for a booking that it
                    did not sell or process. Refund eligibility and approval
                    depend on the responsible seller, provider, and applicable
                    terms.
                </p>
            </LegalSection>

            <LegalSection title="3. Services purchased directly from Vuelofare">
                <p>
                    For services purchased directly from Vuelofare, refund
                    eligibility depends on the specific service, the terms
                    disclosed before payment, and applicable law. Any
                    applicable service fees, deductions, or refund conditions
                    will be determined according to the terms applicable to
                    the transaction.
                </p>
            </LegalSection>

            <LegalSection title="4. How to submit a refund request">
                <p>
                    To inquire about a refund, contact our support team using
                    the details provided on the Contact Us page. Include the
                    relevant booking or transaction reference, the email
                    address associated with the transaction, and a brief
                    description of your request.
                </p>

                <p>
                    For your security, do not share complete payment-card
                    details, passwords, PINs, or one-time security codes.
                </p>
            </LegalSection>

            <LegalSection title="5. Refund review and processing">
                <p>
                    Refund requests are reviewed by the responsible seller
                    or service provider according to the applicable terms
                    and legal requirements. Where a refund is approved, the
                    amount and processing time may depend on the payment
                    provider, bank, original payment method, and applicable
                    procedures.
                </p>
            </LegalSection>

            <LegalSection title="6. Duplicate or incorrect charges">
                <p>
                    If you believe you have been charged incorrectly or
                    charged more than once, contact the seller or payment
                    provider identified on your receipt. Provide the
                    transaction reference and a description of the issue
                    to help the responsible team investigate.
                </p>

                <p>
                    Never share your complete card number, PIN, password,
                    or one-time security code when reporting a payment issue.
                </p>
            </LegalSection>

            <LegalSection title="7. Legal rights">
                <p>
                    Nothing in this policy is intended to limit any
                    mandatory consumer rights or remedies available under
                    applicable law. Where this policy conflicts with a
                    non-waivable legal right, the applicable legal
                    requirement takes precedence.
                </p>
            </LegalSection>
        </LegalPageLayout>
    );
}
 