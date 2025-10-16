"use client"

type Props = { priceId: string }

export function SubscribeButton({ priceId }: Props) {
  const onClick = async () => {
    const data = new FormData()
    data.set('priceId', priceId)
    const res = await fetch('/api/subscribe', { method: 'POST', body: data })
    if (res.status === 501) {
      alert('Stripe not configured. Contact us to subscribe.')
      return
    }
    if (res.redirected) {
      window.location.href = res.url
      return
    }
    if (!res.ok) {
      alert('Subscription error')
    }
  }
  return (
    <button onClick={onClick} className="w-full rounded-lg bg-primary text-white py-2 font-medium">Subscribe</button>
  )
}


