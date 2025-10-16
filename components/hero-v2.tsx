'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
// Static import so it always loads

export default function HeroV2() {
  return (
    <section className="relative overflow-hidden bg-agentify-hero">
      <div className="absolute inset-0 bg-agentify-radial pointer-events-none" />
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <span className="inline-block rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs tracking-wide text-white/80">
              AI Agents for SMBs
            </span>

            <h1 className="mt-5 text-4xl sm:text-5xl font-extrabold leading-tight">
              <span className="bg-gradient-to-r from-brand-pink via-brand-glow to-brand-purple bg-clip-text text-transparent">
                Automate your busywork.
              </span>
              <br /><span className="text-white">Grow faster.</span>
            </h1>

            <p className="mt-5 max-w-xl text-white/80">
              We deploy ready-made AI agents for sales, support and ops—so you reply in minutes,
              cut costs, and never miss a lead.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="https://calendly.com/agentifyworks/15min"
                className="inline-flex items-center rounded-full px-7 py-3.5 text-base font-semibold shadow-glow
                           bg-gradient-to-r from-brand-pink to-brand-purple hover:opacity-95 focus:outline-none">
                Book a 15-min consult <ArrowRight className="ml-2 h-4 w-4" />
              </Link>

              <Link href="/agents"
                className="inline-flex items-center rounded-full px-7 py-3.5 text-base font-semibold
                           border border-white/20 bg-white/5 hover:bg-white/10">
                See 50+ agents
              </Link>
            </div>

            {/* Proof cards — slightly bigger */}
            <ul className="mt-8 grid sm:grid-cols-3 gap-4 text-sm text-white/85">
              {[
                ['≲ 2 min', 'avg response'],
                ['30–50% fewer', 'no-shows'],
                ['Up to 40%', 'more qualified leads'],
              ].map(([title, sub]) => (
                <li key={title} className="rounded-2xl card-surface p-5">
                  <div className="text-white font-semibold text-lg">{title}</div>
                  <div className="text-white/70">{sub}</div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right mockup */}
          <div className="relative">
            <div className="relative mx-auto w-[340px] sm:w-[380px] rounded-3xl card-surface p-4 backdrop-blur">
              <Image src="/og-image.png" alt="Agentify conversation preview" className="rounded-2xl" priority width={640} height={400} />
            </div>
            <div className="pointer-events-none absolute -z-10 inset-0 blur-3xl opacity-40 bg-agentify-radial" />
          </div>
        </div>
      </div>
    </section>
  );
}