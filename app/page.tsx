import React from "react";
import AutomationHero from "./AutomationHero";

export default function Home() {
  return (
    <div className="relative min-h-screen text-[#E4E4E7] font-sans selection:bg-[#800020] selection:text-white">
      <AutomationHero />
      <main className="portfolio-content relative z-[1]">

      {/* GROWTH SOLUTIONS SERVICES */}
      <section className="max-w-4xl mx-auto px-6 py-14 border-b border-[#27272A]">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-2">
          <div>
            <h2 className="text-xs font-semibold tracking-widest text-[#A1A1AA] uppercase">
              Services
            </h2>
            <h3 className="mt-1 text-2xl font-bold text-white">
              <a
                className="growth-solutions-link"
                href="https://growth-solutions-indol.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp Growth Solutions <span aria-hidden="true">↗</span>
              </a>
            </h3>
          </div>
          <span className="text-xs font-mono px-3 py-1 bg-[#1A1A1E] text-[#A1A1AA] border border-[#27272A] rounded-full self-start md:self-auto">
            WhatsApp · Websites · Follow-ups
          </span>
        </div>

        <p className="text-[#A1A1AA] mb-6 leading-relaxed">
          I set up WhatsApp Business, build fast one-page websites that send visitors straight to your chat, and create follow-ups that help turn more enquiries into sales.
        </p>
        <a
          className="growth-solutions-cta"
          href="https://growth-solutions-indol.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          Visit Growth Solutions <span aria-hidden="true">↗</span>
        </a>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-[#18181B] border border-[#27272A] p-5 rounded-lg">
            <h4 className="font-semibold text-white mb-2">WhatsApp Business Setup</h4>
            <p className="text-sm text-[#A1A1AA]">
              Product catalog, greeting and away messages, quick replies, and labels—set up so enquiries are easy to manage and customers get timely answers.
            </p>
          </div>
          <div className="bg-[#18181B] border border-[#27272A] p-5 rounded-lg">
            <h4 className="font-semibold text-white mb-2">Fast One-Page Websites</h4>
            <p className="text-sm text-[#A1A1AA]">
              Phone-friendly one-page sites that load quickly and keep a WhatsApp chat button in reach, so visitors can message your business from any section.
            </p>
          </div>
          <div className="bg-[#18181B] border border-[#27272A] p-5 rounded-lg">
            <h4 className="font-semibold text-white mb-2">Sales Follow-Ups</h4>
            <p className="text-sm text-[#A1A1AA]">
              Timely reminders, broadcast messages, and Instagram links that bring interested customers back to the conversation when they’re ready to buy.
            </p>
          </div>
        </div>
      </section>

      {/* TECHNICAL FEATURED BUILDS */}
      <section className="max-w-4xl mx-auto px-6 py-14">
        <h2 className="text-xs font-semibold tracking-widest text-[#A1A1AA] uppercase mb-8">
          Open Source Systems
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: WhatsApp Storefront Chatbot */}
          <div className="bg-[#18181B] border border-[#27272A] hover:border-[#3F3F46] p-6 rounded-lg transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white">whatsapp-agent</h3>
                <span className="text-xs font-mono px-2 py-1 bg-[#27272A] text-[#A1A1AA] rounded">
                  Chatbot Engine
                </span>
              </div>
              <p className="mt-3 text-sm text-[#A1A1AA] leading-relaxed">
                  An automated WhatsApp ordering system that turns a phone number into an interactive online storefront. Built to handle session state, catalog items, and order logging.           
               </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-xs text-[#D4D4D8] bg-[#27272A] px-2 py-1 rounded">
                  Next.js
                </span>
                <span className="text-xs text-[#D4D4D8] bg-[#27272A] px-2 py-1 rounded">
                  Vercel
                </span>
                <span className="text-xs text-[#D4D4D8] bg-[#27272A] px-2 py-1 rounded">
                  Meta APIs
                </span>
              </div>
            </div>
            <div className="mt-6">
              <a
                href="https://github.com/Uncbatman/whatsapp-agent"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-white hover:text-[#A31D1D] inline-flex items-center gap-1 transition-colors"
              >
                View Repository <span>→</span>
              </a>
            </div>
          </div>

          {/* Card 2: Meta Dev Account Tool */}
          <div className="bg-[#18181B] border border-[#27272A] hover:border-[#3F3F46] p-6 rounded-lg transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white">
                  whatsapp-accelerator
                </h3>
                <span className="text-xs font-mono px-2 py-1 bg-[#27272A] text-[#A1A1AA] rounded">
                  Onboarding Tool
                </span>
              </div>
              <p className="mt-3 text-sm text-[#A1A1AA] leading-relaxed">
                A guided onboarding tool that helps non-technical business owners set up their Meta Developer account and API credentials without technical friction.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-xs text-[#D4D4D8] bg-[#27272A] px-2 py-1 rounded">
                  Automation
                </span>
                <span className="text-xs text-[#D4D4D8] bg-[#27272A] px-2 py-1 rounded">
                  Node.js
                </span>
                <span className="text-xs text-[#D4D4D8] bg-[#27272A] px-2 py-1 rounded">
                  Integration
                </span>
              </div>
            </div>
            <div className="mt-6">
              <a
                href="https://github.com/Uncbatman/whatsapp-accelerator"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-white hover:text-[#A31D1D] inline-flex items-center gap-1 transition-colors"
              >
                View Repository <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="max-w-4xl mx-auto px-6 py-12 border-t border-[#27272A] flex justify-between text-xs text-[#71717A] font-mono">
        <p>© 2026 Adam Mbori.</p>
        <p>Deployed via Vercel Edge.</p>
      </footer>
      </main>
    </div>
  );
}
