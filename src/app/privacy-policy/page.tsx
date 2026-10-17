
import type { Metadata } from "next";
import { LegalPageLayout, LegalSection } from "../_components/legal-page-layout";

export const metadata: Metadata = {
    title: "Privacy Policy | Vuelofare",
    description:
        "Read how Vuelofare may collect, use, disclose, and protect information when you use its website.",
    alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
    return (
        <LegalPageLayout
            eyebrow="Privacy"
            title="Privacy Policy"
            description="This page explains the types of information that may be handled when you visit Vuelofare or contact us."
        >
            <LegalSection title="1. About this policy">
                <p>
                    This Privacy Policy explains how Vuelofare collects, uses,
                    stores, and protects your personal information when you
                    visit or use our website and services.
                </p>
            </LegalSection>

            <LegalSection title="2. Information you provide">
                <p>
                    If you contact us, we may receive the information you
                    choose to provide, such as your name, email address, phone
                    number, message, and details relevant to your inquiry.
                    Please do not submit passwords, payment-card information,
                    government identification numbers, or other sensitive
                    information through a general inquiry form.
                </p>
            </LegalSection>

            <LegalSection title="3. Information collected automatically">
                <p>
                    Like many websites, Vuelofare may process technical
                    information such as browser type, device information, pages
                    visited, approximate usage timestamps, referring pages, and
                    basic diagnostic logs. Whether this information is
                    collected depends on the hosting, security, analytics, and
                    other tools enabled on the website.
                </p>
            </LegalSection>

            <LegalSection title="4. How information may be used">
                <p>Information may be used, where applicable, to:</p>
                <ul className="list-disc space-y-2 pl-6">
                    <li>
                        Respond to inquiries and provide requested information.
                    </li>
                    <li>
                        Operate, maintain, troubleshoot, and secure the website.
                    </li>
                    <li>
                        Understand website usage and improve content and
                        usability.
                    </li>
                    <li>
                        Detect abuse, spam, fraud, or technical problems.
                    </li>
                    <li>
                        Meet applicable legal obligations and protect
                        legitimate rights.
                    </li>
                </ul>
                <p>
                    We retain and use information only for purposes relevant
                    to the actual operation of the website and permitted by
                    applicable law.
                </p>
            </LegalSection>

            <LegalSection title="5. Cookies and similar technologies">
                <p>
                    The website or its service providers may use cookies or
                    similar technologies for essential functions, preferences,
                    analytics, or advertising if those features are enabled.
                    You can manage cookies through your browser settings,
                    although disabling some cookies may affect website
                    functionality.
                </p>
            </LegalSection>

            <LegalSection title="6. Sharing information">
                <p>
                    Information may be shared with service providers that help
                    operate the website, such as hosting, security, email,
                    analytics, or customer-support providers, when those
                    providers are used and access is necessary for their work.
                    Information may also be disclosed where required by law or
                    when reasonably necessary to protect rights, safety, or the
                    integrity of the website.
                </p>
                <p>
                    Our privacy disclosures should reflect the actual
                    third-party analytics, advertising,  payment, or
                    communications providers used on the website.
                </p>
            </LegalSection>

            <LegalSection title="7. Data retention and security">
                <p>
                    Information is retained only for as long as reasonably
                    necessary for the purpose for which it was collected,
                    unless a longer period is required or permitted by law.
                    Appropriate technical and organizational safeguards are
                    used, but no internet transmission or storage system can be
                    guaranteed to be completely secure.
                </p>
            </LegalSection>

            <LegalSection title="8. Your choices and rights">
                <p>
                    Depending on your location and applicable law, you may
                    have rights to request access to, correction of, deletion
                    of, or restrictions on certain personal information. You
                    may also be able to object to certain processing or
                    withdraw consent where processing is based on consent.
                    Contact us to make a request; we may need to verify it and
                    may be unable to fulfil requests where a legal exception
                    applies.
                </p>
            </LegalSection>

            <LegalSection title="9. Children’s privacy">
                <p>
                    This website is not intended to knowingly collect personal
                    information from children in violation of applicable law.
                    If you believe a child has provided personal information
                    inappropriately, contact us so the matter can be reviewed.
                </p>
            </LegalSection>

            <LegalSection title="10. Third-party websites">
                <p>
                    Links to third-party websites are provided for convenience
                    or information. Their privacy practices are governed by
                    their own policies, which we encourage you to review before
                    submitting information to them.
                </p>
            </LegalSection>

            <LegalSection title="11. Changes to this policy">
                <p>
                    We may update this Privacy Policy when our website,
                    practices, or legal obligations change. The updated version
                    will be posted on this page with a revised date. Changes
                    apply from the date stated in the updated policy, subject
                    to applicable law.
                </p>
            </LegalSection>
        </LegalPageLayout>
    );
}
