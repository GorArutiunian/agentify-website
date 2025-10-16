import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function calculateRoi({ tasksPerMonth, minutesPerTask, hourlyCost }: { tasksPerMonth: number; minutesPerTask: number; hourlyCost: number }) {
  const hoursSaved = (tasksPerMonth * minutesPerTask) / 60
  const dollarsSaved = hoursSaved * hourlyCost
  return { hoursSaved, dollarsSaved }
}

