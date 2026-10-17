export interface ServiceContent {
    slug: string;
    title: string;
    shortTitle: string;
    label: string;
    description: string;
    heroImage: string;
    overviewImage: string;
    conditionsImage: string;

    heroPoints: {
        title: string;
        description: string;
    }[];

    overview: {
        title: string;
        paragraphs: string[];
        note: string;
    };

    keyInformation: {
        title: string;
        description: string;
        items: string[];
    };

    confidenceCard: {
        title: string;
        description: string;
        items: string[];
    };

    generalConditions: {
        title: string;
        description: string;
        points: string[];
        footerText: string;
    };

    relatedServices: string[];
}

export const servicesContent: Record<string, ServiceContent> = {
    "flight-reservations": {
        slug: "flight-reservations",
        title: "Flight Reservations",
        shortTitle: "Flight Reservations",
        label: "FLIGHT RESERVATIONS",

        description:
            "Find the right flight for your journey with expert assistance, flexible options, and reliable reservation support from start to finish.",

        heroImage:
            "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1400&q=85",

        overviewImage:
            "https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1200&q=85",

        conditionsImage:
            "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1200&q=85",

        heroPoints: [
            {
                title: "Flexible Options",
                description: "Compare suitable flight options.",
            },
            {
                title: "Expert Guidance",
                description: "Get help choosing the right itinerary.",
            },
            {
                title: "Easy reservation",
                description: "Complete your reservation with confidence.",
            },
        ],

        overview: {
            title: "How does flight reservation assistance work?",
            paragraphs: [
                "Finding the right flight can take time. Our flight reservation assistance helps you explore suitable travel options based on your destination, preferred dates, timing, and travel requirements.",
                "Whether you are planning a business trip, family vacation, or last-minute journey, our specialists can help you understand available options and organize your travel details.",
            ],
            note:
                "Not sure which flight option works best for you? Our travel specialists can help you review the available choices before you confirm.",
        },

        keyInformation: {
            title: "What We Help You With",
            description:
                "From comparing flight options to reviewing travel details, we help make the reservation process easier and more organized.",
            items: [
                "Flight option comparison",
                "Departure and arrival details",
                "Travel date and timing assistance",
                "Passenger information guidance",
                "Fare and reservation information",
                "Basic baggage information",
                "Seat and service information",
                "travel confirmation assistance",
            ],
        },

        confidenceCard: {
            title: "Travel with Confidence",
            description:
                "Get the support you need before completing your flight reservation.",
            items: [
                "Flight Options",
                "Travel Dates",
                "Passenger Details",
                "Fare Information",
            ],
        },

        generalConditions: {
            title: "General Conditions for Flight Reservations",
            description:
                "Flight reservations are subject to airline rules, availability, and the conditions of the selected fare.",
            points: [
                "Flight availability may vary at any time.",
                "Fare prices may vary before a reservation is completed.",
                "Passenger information should match the required travel documents.",
                "Baggage allowances depend on the selected airline and fare.",
                "Additional airline services may have separate charges.",
                "Travel documents and entry requirements remain the traveler's responsibility.",
            ],
            footerText:
                "For accurate information, review the airline's fare conditions and travel details before completing your reservation.",
        },

        relatedServices: [
            "flight-assistance",
            "refund-assistance",
            "trip-planning",
            "itinerary-assistance",
        ],
    },

    "flight-assistance": {
        slug: "flight-assistance",
        title: "Flight Assistance",
        shortTitle: "Flight Assistance",
        label: "FLIGHT ASSISTANCE",

        description:
            "Need help with your flight arrangements? Get professional assistance reviewing available dates, times, routes, and travel details.",

        heroImage:
            "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?auto=format&fit=crop&w=1400&q=85",

        overviewImage:
            "https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&w=1200&q=85",

        conditionsImage:
            "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=85",

        heroPoints: [
            {
                title: "Flexible Options",
                description: "Review available flight alternatives.",
            },
            {
                title: "Clear Guidance",
                description: "Understand applicable fare conditions.",
            },
            {
                title: "Smooth Assistance",
                description: "Get support throughout the process.",
            },
        ],

        overview: {
            title: "Need help with your flight?",
            paragraphs: [
                "Travel plans can shift unexpectedly. Whether your schedule has shifted or you need a different departure time, our flight assistance helps you understand the available options.",
                "We can help you review alternative flights, understand applicable fare conditions, and organize the information associated with your existing reservation.",
            ],
            note:
                "Applicable fees, fare differences, and availability depend on the airline and fare rules associated with your reservation.",
        },

        keyInformation: {
            title: "Flight Assistance Services",
            description:
                "Our team helps you understand available flight options and the requirements associated with your reservation.",
            items: [
                "Travel date assistance",
                "Departure time assistance",
                "Reviewing alternative flights",
                "Understanding fare differences",
                "Reviewing fare conditions",
                "Available route information",
                "Passenger information guidance",
                "Updated travel confirmation",
            ],
        },

        confidenceCard: {
            title: "Travel with Confidence",
            description:
                "Understand your options before confirming your flight arrangements.",
            items: [
                "Travel Dates",
                "Alternative Flights",
                "Fare Differences",
                "Fare Conditions",
            ],
        },

        generalConditions: {
            title: "General Conditions for Flight Assistance",
            description:
                "Flight arrangements are governed by the airline's fare rules and the conditions attached to your original reservation.",
            points: [
                "Requests depend on flight availability.",
                "Airlines may charge applicable fees depending on the fare.",
                "A fare difference may apply when selecting another flight.",
                "Some fares may have specific restrictions.",
                "Requests must be submitted before the applicable airline deadline.",
                "The final cost depends on the airline and selected itinerary.",
            ],
            footerText:
                "Before confirming your flight arrangements, review the applicable airline conditions and the total amount payable for the selected itinerary.",
        },

        relatedServices: [
            "flight-reservations",
            "refund-assistance",
            "itinerary-assistance",
            "travel-support",
        ],
    },

    "refund-assistance": {
        slug: "refund-assistance",
        title: "Refund Assistance",
        shortTitle: "Refund Assistance",
        label: "REFUND ASSISTANCE",

        description:
            "Need information about a flight refund? Get clear guidance on refund eligibility, applicable fare conditions, and estimated processing timelines.",

        heroImage:
            "https://images.unsplash.com/photo-1517400508447-f8dd518b86db?auto=format&fit=crop&w=1400&q=85",

        overviewImage:
            "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1200&q=85",

        conditionsImage:
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85",

        heroPoints: [
            {
                title: "Clear Information",
                description: "Understand the applicable refund process.",
            },
            {
                title: "Refund Guidance",
                description: "Review possible refund eligibility.",
            },
            {
                title: "Helpful Support",
                description: "Get assistance with your travel questions.",
            },
        ],

        overview: {
            title: "How does flight refund assistance work?",
            paragraphs: [
                "Refund eligibility depends on the airline, fare type, reservation conditions, and the circumstances associated with your reservation.",
                "Our refund assistance service helps you understand the relevant requirements, identify the responsible provider, and gather the information needed for a refund inquiry.",
            ],
            note:
                "Refund eligibility, applicable deductions, and processing timelines depend on the airline's fare rules and the specific reservation.",
        },

        keyInformation: {
            title: "Flight Refund Information",
            description:
                "Understand the important details that may affect the amount and timing of a potential refund.",
            items: [
                "Refund eligibility",
                "Applicable fare conditions",
                "Refund amount information",
                "Fare restrictions",
                "Estimated refund timelines",
                "Airline refund requirements",
                "Taxes and applicable fees",
                "Refund request assistance",
            ],
        },

        confidenceCard: {
            title: "Understand Your Refund Options",
            description:
                "Get clear information about the terms and requirements associated with your reservation.",
            items: [
                "Refund Eligibility",
                "Fare Conditions",
                "Applicable Fees",
                "Processing Timeline",
            ],
        },

        generalConditions: {
            title: "General Refund Conditions",
            description:
                "Refund eligibility and payment terms vary according to the airline, fare type, and reservation conditions.",
            points: [
                "Some fares may be non-refundable.",
                "Applicable deductions may depend on the fare rules.",
                "Refund amounts depend on the reservation terms.",
                "Taxes and fees may be treated differently from the base fare.",
                "Processing times vary by airline and payment method.",
                "Airline schedule disruptions may be subject to separate policies.",
            ],
            footerText:
                "Review the refund conditions associated with your reservation and contact the responsible provider for information about your eligibility.",
        },

        relatedServices: [
            "flight-reservations",
            "flight-assistance",
            "travel-support",
            "itinerary-assistance",
        ],
    },

    "trip-planning": {
        slug: "trip-planning",
        title: "Trip Planning",
        shortTitle: "Trip Planning",
        label: "TRIP PLANNING",

        description:
            "Planning a new adventure? Get practical travel assistance to organize flights, destinations, schedules, and important trip details.",

        heroImage:
            "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1400&q=85",

        overviewImage:
            "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=85",

        conditionsImage:
            "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=85",

        heroPoints: [
            {
                title: "Plan Smarter",
                description: "Organize your journey efficiently.",
            },
            {
                title: "Better Choices",
                description: "Review practical travel options.",
            },
            {
                title: "Less Stress",
                description: "Keep important trip details organized.",
            },
        ],

        overview: {
            title: "How can trip planning make travel easier?",
            paragraphs: [
                "A well-organized trip starts with understanding your destination, dates, transportation, and schedule. Our trip planning assistance helps you bring these details together before your journey.",
                "Whether you are traveling alone, with family, or managing a multi-stop journey, we can help you organize the important parts of your travel plan.",
            ],
            note:
                "A good travel plan leaves room for flexibility while keeping your most important travel details organized.",
        },

        keyInformation: {
            title: "Trip Planning Assistance",
            description:
                "We help you organize the practical details that can make your journey easier.",
            items: [
                "Destination planning",
                "Flight planning",
                "Multi-city travel coordination",
                "Travel date planning",
                "Transportation planning",
                "Schedule organization",
                "Important travel details",
                "Pre-trip checklist guidance",
            ],
        },

        confidenceCard: {
            title: "Travel Better Prepared",
            description:
                "Keep your travel plans organized from the beginning.",
            items: [
                "Destination Planning",
                "Travel Schedule",
                "Transportation",
                "Trip Details",
            ],
        },

        generalConditions: {
            title: "General Trip Planning Considerations",
            description:
                "Travel plans should be reviewed carefully because schedules, availability, and destination conditions may vary.",
            points: [
                "Transportation availability may vary.",
                "Flight and hotel prices can vary over time.",
                "Travel documents should be checked before departure.",
                "Destination entry requirements may apply.",
                "Weather can affect transportation and activities.",
                "Travelers should keep travel confirmations accessible.",
            ],
            footerText:
                "Planning ahead can help reduce last-minute issues and make it easier to respond to travel updates.",
        },

        relatedServices: [
            "flight-reservations",
            "itinerary-assistance",
            "flight-assistance",
            "travel-support",
        ],
    },

    "itinerary-assistance": {
        slug: "itinerary-assistance",
        title: "Itinerary Assistance",
        shortTitle: "Itinerary Assistance",
        label: "ITINERARY ASSISTANCE",

        description:
            "Keep every part of your journey organized with assistance reviewing flights, schedules, connections, and important travel details.",

        heroImage:
            "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1400&q=85",

        overviewImage:
            "https://images.unsplash.com/photo-1494783367193-149034c05e8f?auto=format&fit=crop&w=1200&q=85",

        conditionsImage:
            "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&w=1200&q=85",

        heroPoints: [
            {
                title: "Stay Organized",
                description: "Keep your travel details together.",
            },
            {
                title: "Review Connections",
                description: "Check important journey details.",
            },
            {
                title: "Travel Prepared",
                description: "Know what comes next in your trip.",
            },
        ],

        overview: {
            title: "Why is itinerary assistance useful?",
            paragraphs: [
                "Travel itineraries can become complicated when they include multiple flights, destinations, connections, or activities.",
                "Our itinerary assistance helps you review the important parts of your journey so you can keep your travel schedule clear and organized.",
            ],
            note:
                "Keeping an updated itinerary can make it easier to manage your journey and stay informed about schedule updates.",
        },

        keyInformation: {
            title: "What We Can Review",
            description:
                "We can help you organize and review the key details included in your travel itinerary.",
            items: [
                "Flight schedules",
                "Departure and arrival information",
                "Connecting flights",
                "Travel dates",
                "Destination sequence",
                "travel references",
                "Important travel notes",
                "Trip schedule organization",
            ],
        },

        confidenceCard: {
            title: "Know Your Journey",
            description:
                "Keep important travel information organized and easy to understand.",
            items: [
                "Flight Details",
                "Connections",
                "Travel Dates",
                "reservation information",
            ],
        },

        generalConditions: {
            title: "General Itinerary Conditions",
            description:
                "Travel schedules and itinerary details may vary according to airline operations and individual reservation conditions.",
            points: [
                "Flight schedules may be updated after reservation.",
                "Connection times should be reviewed carefully.",
                "Travelers should check departure times before travel.",
                "Airline schedule updates may affect connecting flights.",
                "Separate reservations may have separate conditions.",
                "Travel documents should be kept accessible throughout the journey.",
            ],
            footerText:
                "Review your itinerary before departure and check with the airline for the latest schedule information.",
        },

        relatedServices: [
            "trip-planning",
            "flight-reservations",
            "flight-assistance",
            "travel-support",
        ],
    },

    "travel-support": {
        slug: "travel-support",
        title: "Travel Support",
        shortTitle: "Travel Support",
        label: "TRAVEL SUPPORT",

        description:
            "Have a question about your trip? Get reliable assistance when you need help understanding your travel plans and options.",

        heroImage:
            "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?auto=format&fit=crop&w=1400&q=85",

        overviewImage:
            "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=85",

        conditionsImage:
            "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=85",

        heroPoints: [
            {
                title: "Real Assistance",
                description: "Speak with someone when you need help.",
            },
            {
                title: "Travel Guidance",
                description: "Get practical information for your journey.",
            },
            {
                title: "Peace of Mind",
                description: "Know where to turn when you need assistance.",
            },
        ],

        overview: {
            title: "When can travel support help?",
            paragraphs: [
                "Travel can involve unexpected questions and situations. Having access to reliable assistance can make it easier to understand your options and decide what to do next.",
                "Our travel support service is designed to help you navigate common travel questions and provide guidance related to your reservation and journey.",
            ],
            note:
                "For airline-specific operational decisions, the airline's current policies and instructions remain the final authority.",
        },

        keyInformation: {
            title: "Travel Support Services",
            description:
                "Our specialists can help you understand and organize information related to your journey.",
            items: [
                "General travel questions",
                "Flight information guidance",
                "reservation information",
                "Travel schedule assistance",
                "Flight assistance",
                "Refund information",
                "Itinerary assistance",
                "General travel preparation",
            ],
        },

        confidenceCard: {
            title: "We're Here to Help",
            description:
                "Get practical travel guidance when you need an extra hand.",
            items: [
                "Travel Questions",
                "travel help",
                "Schedule Guidance",
                "Trip Assistance",
            ],
        },

        generalConditions: {
            title: "General Travel Support Conditions",
            description:
                "Travel support provides guidance and assistance based on the information available for your reservation.",
            points: [
                "Airline policies may be updated without notice.",
                "Flight schedules are controlled by the operating airline.",
                "Final airline decisions remain subject to airline rules.",
                "Availability and pricing may vary at any time.",
                "Travelers remain responsible for valid travel documents.",
                "Some requests may require direct communication with the airline.",
            ],
            footerText:
                "When you are unsure about your next step, our support team can help you understand the available options and information.",
        },

        relatedServices: [
            "flight-reservations",
            "flight-assistance",
            "refund-assistance",
            "itinerary-assistance",
        ],
    },
};