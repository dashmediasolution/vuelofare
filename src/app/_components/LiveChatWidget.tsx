
"use client";

import { useEffect, useRef, useState } from "react";
import {
    MessageCircle,
    X,
    Send,
    Headset,
    Phone,
    Minus,
    User,
} from "lucide-react";

type Message = {
    id: number;
    text: string;
    sender: "bot" | "user";
};

const PHONE_NUMBER = "(877) 881-0087";

const INITIAL_MESSAGES: Message[] = [
    {
        id: 1,
        sender: "bot",
        text: "Hi there! 👋 Welcome to Vuelofare. I'm here to help make your travel planning easier.",
    },
    {
        id: 2,
        sender: "bot",
        text: "What can I help you with today?",
    },
];

const quickReplies = [
    "Book a flight",
    "Find cheap flights",
    "Existing booking",
    "Talk to a specialist",
];

export default function LiveChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [showQuickReplies, setShowQuickReplies] = useState(true);
    const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);

    const messagesEndRef = useRef<HTMLDivElement>(null);
    const typingTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({
            behavior: "smooth",
        });
    }, [messages, isOpen, isTyping]);

    useEffect(() => {
        return () => {
            if (typingTimeoutRef.current) {
                clearTimeout(typingTimeoutRef.current);
            }
        };
    }, []);

    const addBotMessage = (text: string) => {
        setMessages((prev) => [
            ...prev,
            {
                id: Date.now() + Math.random(),
                sender: "bot",
                text,
            },
        ]);
    };

    const getReply = (message: string) => {
        const text = message.toLowerCase();

        if (
            text.includes("existing") ||
            text.includes("reservation") ||
            text.includes("ticket status") ||
            text.includes("my booking")
        ) {
            return "Of course! I'd be happy to point you in the right direction. Are you looking for help with an existing flight reservation, or do you have a question about your ticket?";
        }

        if (
            text.includes("cheap") ||
            text.includes("fare") ||
            text.includes("price") ||
            text.includes("cost")
        ) {
            return "Finding the right fare can make all the difference! 😊 Could you share your departure city, destination, and approximate travel dates? I'll help you explore your options.";
        }

        if (
            text.includes("book") ||
            text.includes("flight") ||
            text.includes("ticket")
        ) {
            return "Absolutely! ✈️ I'd love to help you plan your trip. Where would you be flying from, and what's your destination?";
        }

        if (
            text.includes("specialist") ||
            text.includes("human") ||
            text.includes("person") ||
            text.includes("call") ||
            text.includes("agent")
        ) {
            return "Absolutely! Sometimes speaking with a travel specialist makes things easier. You can reach our team directly using the phone number below.";
        }

        if (
            text.includes("hello") ||
            text.includes("hi") ||
            text.includes("hey")
        ) {
            return "Hey! 😊 Great to have you here. Are you planning a new trip or do you need a little help with an existing booking?";
        }

        if (text.includes("thank")) {
            return "You're very welcome! 😊 It's our pleasure to help. Is there anything else you'd like to know?";
        }

        return "I'd be happy to help you with that. Could you tell me a little more about what you're looking for? I'll do my best to guide you.";
    };

    const sendMessage = (message?: string) => {
        const text = (message ?? input).trim();

        if (!text || isTyping) return;

        const userMessage: Message = {
            id: Date.now(),
            sender: "user",
            text,
        };

        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setShowQuickReplies(false);
        setIsTyping(true);

        const reply = getReply(text);

        typingTimeoutRef.current = setTimeout(() => {
            addBotMessage(reply);
            setIsTyping(false);
            typingTimeoutRef.current = null;
        }, 1200);
    };

    const handleEndChat = () => {
        if (isTyping) return;

        setIsTyping(true);
        setShowQuickReplies(false);

        typingTimeoutRef.current = setTimeout(() => {
            setMessages((prev) => [
                ...prev,
                {
                    id: Date.now(),
                    sender: "bot",
                    text: "It was lovely helping you today! 😊 If you'd like personal assistance with your travel plans, our travel specialists are just a phone call away.",
                },
                {
                    id: Date.now() + 1,
                    sender: "bot",
                    text: "Call us directly at (877) 881-0087. We'd be happy to help you find the right flight!",
                },
            ]);

            setIsTyping(false);
            typingTimeoutRef.current = null;
        }, 1000);
    };

    const handleCloseChat = () => {
        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
            typingTimeoutRef.current = null;
        }

        setIsOpen(false);
        setInput("");
        setIsTyping(false);
        setShowQuickReplies(true);
        setMessages(INITIAL_MESSAGES);
    };

    return (
        <>
            {/* Floating Chat Button */}
            {!isOpen && (
                <button
                    type="button"
                    onClick={() => setIsOpen(true)}
                    aria-label="Open live chat"
                    className="fixed bottom-24 right-5 z-[999] flex h-12 items-center gap-2 rounded-full bg-[#159b9c] px-4 text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#128889] sm:bottom-6 sm:right-6 sm:h-14 sm:gap-3 sm:px-5"        >
                    <MessageCircle size={23} />
                    <span className="text-sm font-semibold">Chat with us</span>
                </button>
            )}

            {/* Chat Window */}
            {isOpen && (
                <div className="fixed bottom-5 right-5 z-[999] flex h-[560px] max-h-[calc(100dvh-40px)] w-[calc(100vw-40px)] max-w-[380px] flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl">
                    {/* Header */}
                    <div className="flex items-center justify-between bg-[#073452] px-5 py-4 text-white">
                        <div className="flex items-center gap-3">
                            <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-white/15">
                                <Headset size={23} />

                                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-[#073452] bg-green-400" />
                            </div>

                            <div>
                                <h3 className="text-sm font-bold">
                                    Vuelofare Support
                                </h3>

                                <p className="mt-0.5 text-xs text-green-300">
                                    Here to help you
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <button
                                type="button"
                                onClick={handleCloseChat}
                                aria-label="Minimize chat and clear conversation"
                                className="rounded-full p-2 transition hover:bg-white/10"
                            >
                                <Minus size={19} />
                            </button>

                            <button
                                type="button"
                                onClick={handleCloseChat}
                                aria-label="Close chat and clear conversation"
                                className="rounded-full p-2 transition hover:bg-white/10"
                            >
                                <X size={19} />
                            </button>
                        </div>
                    </div>

                    {/* Intro */}
                    <div className="border-b border-gray-100 bg-[#f7fbfb] px-5 py-3">
                        <p className="text-xs leading-relaxed text-gray-600">
                            Planning a trip? Have a question? Let's make your travel
                            experience easier.
                        </p>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 space-y-4 overflow-y-auto bg-white px-4 py-5">
                        <div className="text-center">
                            <span className="rounded-full bg-gray-100 px-3 py-1 text-[10px] text-gray-500">
                                Today
                            </span>
                        </div>

                        {messages.map((message) => (
                            <div
                                key={message.id}
                                className={`flex items-end gap-2 ${message.sender === "user"
                                        ? "justify-end"
                                        : "justify-start"
                                    }`}
                            >
                                {message.sender === "bot" && (
                                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#e8f5f5] text-[#159b9c]">
                                        <Headset size={15} />
                                    </div>
                                )}

                                <div
                                    className={`max-w-[82%] rounded-2xl px-4 py-3 text-[13px] leading-relaxed ${message.sender === "user"
                                            ? "rounded-br-sm bg-[#159b9c] text-white"
                                            : "rounded-bl-sm bg-[#f1f5f7] text-[#073452]"
                                        }`}
                                >
                                    {message.text}

                                    {message.text.includes(PHONE_NUMBER) && (
                                        <a
                                            href="tel:+18778810087"
                                            className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-[#159b9c] px-3 py-2.5 text-sm font-bold text-white transition hover:bg-[#128889]"
                                        >
                                            <Phone size={16} />
                                            Call {PHONE_NUMBER}
                                        </a>
                                    )}
                                </div>

                                {message.sender === "user" && (
                                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-500">
                                        <User size={15} />
                                    </div>
                                )}
                            </div>
                        ))}

                        {/* Typing Indicator */}
                        {isTyping && (
                            <div className="flex items-end gap-2">
                                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#e8f5f5] text-[#159b9c]">
                                    <Headset size={15} />
                                </div>

                                <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-sm bg-[#f1f5f7] px-4 py-3">
                                    <span className="mr-1 text-xs text-gray-500">
                                        Typing
                                    </span>

                                    <span
                                        className="h-1.5 w-1.5 rounded-full bg-[#159b9c]"
                                        style={{
                                            animation: "chatTyping 1.2s infinite",
                                        }}
                                    />

                                    <span
                                        className="h-1.5 w-1.5 rounded-full bg-[#159b9c]"
                                        style={{
                                            animation: "chatTyping 1.2s infinite 0.2s",
                                        }}
                                    />

                                    <span
                                        className="h-1.5 w-1.5 rounded-full bg-[#159b9c]"
                                        style={{
                                            animation: "chatTyping 1.2s infinite 0.4s",
                                        }}
                                    />
                                </div>
                            </div>
                        )}

                        {/* Quick Replies */}
                        {showQuickReplies && (
                            <div className="space-y-2 pl-9">
                                <p className="text-xs font-medium text-gray-500">
                                    Choose a topic to get started:
                                </p>

                                {quickReplies.map((reply) => (
                                    <button
                                        key={reply}
                                        type="button"
                                        onClick={() => sendMessage(reply)}
                                        className="block rounded-full border border-[#159b9c]/40 px-3 py-2 text-left text-xs font-medium text-[#159b9c] transition hover:bg-[#eaf7f7]"
                                    >
                                        {reply}
                                    </button>
                                ))}
                            </div>
                        )}

                        <div ref={messagesEndRef} />
                    </div>

                    {/* Footer */}
                    <div className="border-t border-gray-100 bg-white px-4 pb-4 pt-3">
                        <button
                            type="button"
                            onClick={handleEndChat}
                            disabled={isTyping}
                            className="mb-3 flex w-full items-center justify-center gap-2 rounded-lg border border-[#159b9c]/30 py-2 text-xs font-semibold text-[#159b9c] transition hover:bg-[#effafa] disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            <Phone size={14} />
                            Speak with a travel specialist
                        </button>

                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                sendMessage();
                            }}
                            className="flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 p-1.5 pl-4 focus-within:border-[#159b9c]"
                        >
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Type your message..."
                                disabled={isTyping}
                                className="min-w-0 flex-1 bg-transparent text-sm text-[#073452] outline-none placeholder:text-gray-400 disabled:opacity-60"
                            />

                            <button
                                type="submit"
                                disabled={!input.trim() || isTyping}
                                aria-label="Send message"
                                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#159b9c] text-white transition hover:bg-[#128889] disabled:cursor-not-allowed disabled:opacity-40"
                            >
                                <Send size={16} />
                            </button>
                        </form>

                        <p className="mt-2 text-center text-[10px] text-gray-400">
                            Vuelofare · Travel assistance
                        </p>
                    </div>
                </div>
            )}
        </>
    );
}
