export interface AirlinePolicyFAQ {
    question: string;
    answer: string;
}

export interface AirlinePolicySection {
    title: string;
    content: string;
    bullets?: string[];
}

export interface AirlinePolicyContent {
    slug: string;
    title: string;
    subtitle: string;
    description: string;
    sections: AirlinePolicySection[];
    faqs: AirlinePolicyFAQ[];
}

export const airlinePolicyContent: Record<string, AirlinePolicyContent> = {
    "name-change": {
        slug: "name-change",
        title: "Airline Name Correction Policy",
        subtitle: "Understand airline name correction requirements",
        description:
            "Learn about airline name correction procedures, ticket details, and the rules that may apply to your reservation.",
        sections: [
            {
                title: "Understanding Name Corrections",
                content:
                    "Airline name correction rules vary by carrier and ticket type. Minor spelling corrections and legal name updates may follow different procedures.",
                bullets: [
                    "Review the passenger name printed on your ticket.",
                    "Check the airline's requirements before requesting a correction.",
                    "Keep supporting documents available if required.",
                ],
            },
            {
                title: "Important Considerations",
                content:
                    "Not every ticket permits a name correction or passenger substitution. Eligibility, documentation, and applicable fees depend on the airline and fare conditions.",
                bullets: [
                    "Confirm the applicable policy with the airline.",
                    "Check whether your ticket allows the requested correction.",
                    "Verify that the corrected details match your travel documents.",
                ],
            },
        ],
        faqs: [
            {
                question: "Can I correct a spelling mistake on my ticket?",
                answer:
                    "Some airlines permit minor spelling corrections, subject to their rules and ticket conditions. Contact the airline to confirm eligibility.",
            },
            {
                question: "Can I transfer my ticket to another person?",
                answer:
                    "Many airlines do not permit passenger transfers. Check the airline's specific ticket conditions before making a request.",
            },
            {
                question: "What documents might be required?",
                answer:
                    "Depending on the airline and type of correction, you may need identification or legal documents supporting the requested update.",
            },
        ],
    },

    baggage: {
        slug: "baggage",
        title: "Airline Baggage Policy",
        subtitle: "Know your baggage allowance before traveling",
        description:
            "Review baggage allowances, carry-on requirements, checked baggage restrictions, and rules for special items before your flight.",
        sections: [
            {
                title: "Carry-On Baggage",
                content:
                    "Carry-on baggage allowances vary by airline, route, fare type, and cabin class. Check the permitted size and weight before arriving at the airport.",
                bullets: [
                    "Confirm your airline's cabin baggage dimensions.",
                    "Check the applicable weight allowance.",
                    "Review restrictions for liquids and prohibited items.",
                ],
            },
            {
                title: "Checked Baggage",
                content:
                    "Checked baggage allowances depend on your airline, destination, fare conditions, and ticket type. Additional charges may apply when baggage exceeds the permitted allowance.",
                bullets: [
                    "Review the baggage allowance shown in your travel details.",
                    "Check excess baggage fees before departure.",
                    "Label your bags with your contact information.",
                ],
            },
            {
                title: "Restricted and Special Items",
                content:
                    "Certain items may be restricted, prohibited, or subject to special handling requirements. Rules can differ between airlines and countries.",
                bullets: [
                    "Review restrictions for batteries and electronic devices.",
                    "Check rules for sports equipment and oversized baggage.",
                    "Confirm requirements for fragile or valuable items.",
                ],
            },
        ],
        faqs: [
            {
                question: "How much baggage can I bring?",
                answer:
                    "Your allowance depends on the airline, route, fare type, and cabin class. Check your travel confirmation or the airline's official baggage policy.",
            },
            {
                question: "Can I purchase additional baggage?",
                answer:
                    "Some airlines allow passengers to purchase extra baggage. Availability, pricing, and purchase deadlines vary by airline.",
            },
            {
                question: "Can baggage rules differ by destination?",
                answer:
                    "Yes. Allowances and restrictions may differ depending on the route, operating airline, and applicable local regulations.",
            },
        ],
    },

    "pet-travel": {
        slug: "pet-travel",
        title: "Airline Pet Travel Policy",
        subtitle: "Prepare for a journey with your pet",
        description:
            "Learn about airline requirements for traveling with pets, including carrier rules, documentation, and advance arrangements.",
        sections: [
            {
                title: "Traveling with Pets",
                content:
                    "Airlines have different requirements for transporting pets in the cabin or in the aircraft hold. Approval may depend on the animal, route, aircraft, and available capacity.",
                bullets: [
                    "Contact the airline before making travel arrangements.",
                    "Confirm whether your pet can travel in the cabin or hold.",
                    "Check carrier size, weight, and ventilation requirements.",
                ],
            },
            {
                title: "Documents and Health Requirements",
                content:
                    "Pet travel may require health certificates, vaccination records, identification, import permits, or other documentation, particularly for international journeys.",
                bullets: [
                    "Check the destination's animal-entry requirements.",
                    "Confirm vaccination and health certificate rules.",
                    "Allow sufficient time to arrange required documentation.",
                ],
            },
            {
                title: "Advance Arrangements and Preparation",
                content:
                    "Pet travel spaces may be limited, and advance approval may be required. Prepare your pet's carrier according to the airline's instructions.",
                bullets: [
                    "Request pet travel approval in advance.",
                    "Confirm any applicable transportation fees.",
                    "Follow the airline's instructions for check-in and handling.",
                ],
            },
        ],
        faqs: [
            {
                question: "Can my pet travel in the cabin?",
                answer:
                    "Some airlines allow eligible pets in the cabin, subject to carrier dimensions, weight limits, route restrictions, and availability.",
            },
            {
                question: "What documents does my pet need?",
                answer:
                    "Requirements vary by destination and airline and may include vaccination records, health certificates, identification, or permits.",
            },
            {
                question: "Should I arrange pet travel in advance?",
                answer:
                    "Yes. Contact the airline early because pet capacity may be limited and advance approval or documentation may be required.",
            },
        ],
    },
};