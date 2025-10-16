"use client"
import Link from 'next/link'
import { useState } from 'react'
import AnimatedAgentIcon from './animated-agent-icon'
import type { AgentDetail, AgentCategory } from '@/content/agents'

type Props = {
  agents: AgentDetail[]
  categories: (AgentCategory | 'All')[]
  locale: string
}

export function AgentsClient({ agents, categories, locale }: Props) {
  const [active, setActive] = useState<AgentCategory | 'All'>('All')
  const filtered = active === 'All' ? agents : agents.filter((a) => a.category === active)

  return (
    <div>
      <div role="tablist" aria-label="Categories" className="mb-6 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            role="tab"
            aria-selected={active === c}
            onClick={() => setActive(c)}
            className={`rounded-full border px-3 py-1 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
              active === c ? 'bg-primary text-white' : 'bg-light-cream hover:bg-light-peach text-secondary'
            }`}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((a) => (
          <Link
            key={a.slug}
            href={`/${locale}/agents/${a.slug}`}
            className="rounded-2xl border border-pink-100 bg-light-cream p-6 shadow-sm hover:shadow-md transition flex flex-col items-center h-full min-h-[280px]"
          >
            <div className="mb-4">
              <AnimatedAgentIcon name={a.name} animation={a.slug} />
            </div>
            <div className="text-lg font-medium text-secondary text-center mb-2">{a.name}</div>
            <p className="text-sm text-slate-600 text-center leading-relaxed flex-grow">{a.blurb}</p>
            <div className="mt-4 inline-flex rounded-full border px-3 py-1 text-xs text-slate-600 bg-white/50">{a.category}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}


