import { ReactNode } from 'react'

type Props = {
  id?: string
  className?: string
  children: ReactNode
}

export function Section({ id, className, children }: Props) {
  return (
    <section id={id} className={`container-responsive py-12 ${className || ''}`}>
      {children}
    </section>
  )
}


