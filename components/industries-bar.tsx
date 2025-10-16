import Link from 'next/link';

const items = [
  { label: 'Real Estate', href: '/agents?tag=real-estate' },
  { label: 'Healthcare', href: '/agents?tag=healthcare' },
  { label: 'Legal', href: '/agents?tag=legal' },
  { label: 'Insurance', href: '/agents?tag=insurance' },
  { label: 'Accounting', href: '/agents?tag=accounting' },
  { label: 'Education', href: '/agents?tag=education' },
  { label: 'Logistics', href: '/agents?tag=logistics' },
  { label: 'E-commerce', href: '/agents?tag=ecommerce' },
  { label: 'HR/Recruiting', href: '/agents?tag=hr' },
  { label: 'Marketing', href: '/agents?tag=marketing' },
];

export function IndustriesBar() {
  return (
    <div className="bg-brand-dark/50 border-t border-white/10">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-wrap gap-2">
          {items.map((i) => (
            <Link
              key={i.label}
              href={i.href}
              className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-white/80 hover:bg-white/10"
            >
              {i.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
