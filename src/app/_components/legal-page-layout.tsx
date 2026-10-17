import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowLeft, ArrowRight, ShieldCheck } from "lucide-react";

const legalLinks = [
  { href: "/about-us", label: "About Us" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
  { href: "/refund-policy", label: "Refund Policy" },
  { href: "/contact-us", label: "Contact Us" },

];

type LegalPageLayoutProps = {
  eyebrow?: string;
  title: string;
  description: string;
  lastUpdated?: string;
  children: ReactNode;
};

export function LegalPageLayout({
  eyebrow = "Vuelofare information",
  title,
  description,
  lastUpdated = "October 2026",
  children,
}: LegalPageLayoutProps) {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <section className="relative overflow-hidden bg-[#073b40] text-white">
        <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-[#159b9c]/25 blur-3xl" />
        <div className="absolute -bottom-32 left-1/4 h-64 w-64 rounded-full bg-teal-300/10 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
          <Link href="/" className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-teal-100 transition hover:text-white">
            <ArrowLeft size={16} /> Back to home
          </Link>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-teal-200 sm:text-sm">{eyebrow}</p>
          <h1 className="max-w-4xl text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">{title}</h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">{description}</p>
          <p className="mt-5 text-xs text-slate-300 sm:text-sm">Last updated: {lastUpdated}</p>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 sm:px-8 sm:py-14 lg:grid-cols-[minmax(0,1fr)_280px] lg:px-10">
        <article className="min-w-0 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8 lg:p-10">
          <div className="mb-8 flex gap-3 rounded-xl border border-teal-100 bg-teal-50 p-4">
            <ShieldCheck className="mt-0.5 shrink-0 text-[#159b9c]" size={22} />
            <p className="text-sm leading-6 text-slate-700">
Please review this  carefully to understand Vuelofare’s policies, terms, and procedures.            </p>
          </div>
          <div className="space-y-9">{children}</div>
        </article>

        <aside className="space-y-5">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-base font-bold text-slate-900">Website information</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">Find information about Vuelofare, website terms, privacy, refunds, and ways to contact the team.</p>
            <nav aria-label="Legal pages" className="mt-4 space-y-1">
              {legalLinks.map((item) => (
                <Link key={item.href} href={item.href} className="group flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-teal-50 hover:text-[#087f81]">
                  {item.label}<ArrowRight size={15} className="opacity-50 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
                </Link>
              ))}
            </nav>
          </div>
          <div className="rounded-2xl bg-[#e6f6f5] p-5">
            <h2 className="font-bold text-[#073b40]">Need help?</h2>
            <p className="mt-2 text-sm leading-6 text-slate-700">Contact details must be verified and updated before this website is published.</p>
            <Link href="/contact-us" className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#087f81] hover:underline">Contact Vuelofare <ArrowRight size={15} /></Link>
          </div>
        </aside>
      </div>
    </main>
  );
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">{title}</h2>
      <div className="mt-3 space-y-3 text-sm leading-7 text-slate-600 sm:text-base">{children}</div>
    </section>
  );
}
