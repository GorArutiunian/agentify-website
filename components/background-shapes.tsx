"use client"
import React from 'react'

interface BackgroundShapesProps {
  variant?: 'light' | 'dark'
  intensity?: 'low' | 'medium' | 'high'
}

export function BackgroundShapes({ variant = 'light', intensity = 'medium' }: BackgroundShapesProps) {
  const opacity = intensity === 'low' ? 'opacity-5' : intensity === 'medium' ? 'opacity-10' : 'opacity-15'
  const color = variant === 'light' ? 'text-primary' : 'text-white'
  
  return (
    <div className={`absolute inset-0 ${opacity} ${color}`}>
      {/* Geometric shapes scattered across the background */}
      <div className="absolute top-20 left-20 w-16 h-16 bg-current transform rotate-45"></div>
      <div className="absolute top-32 right-32 w-12 h-12 bg-current transform -rotate-12"></div>
      <div className="absolute top-60 left-1/3 w-20 h-20 bg-current transform rotate-12"></div>
      <div className="absolute top-80 right-20 w-14 h-14 bg-current transform -rotate-45"></div>
      
      <div className="absolute top-1/3 left-10 w-18 h-18 bg-current transform rotate-45"></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-current transform -rotate-12"></div>
      <div className="absolute top-2/3 left-1/4 w-22 h-22 bg-current transform rotate-12"></div>
      
      <div className="absolute bottom-32 left-20 w-16 h-16 bg-current transform -rotate-45"></div>
      <div className="absolute bottom-20 right-32 w-14 h-14 bg-current transform rotate-12"></div>
      <div className="absolute bottom-40 left-2/3 w-18 h-18 bg-current transform -rotate-12"></div>
      
      {/* Circles */}
      <div className="absolute top-40 right-10 w-8 h-8 bg-current rounded-full"></div>
      <div className="absolute top-2/3 left-10 w-6 h-6 bg-current rounded-full"></div>
      <div className="absolute bottom-20 left-1/3 w-10 h-10 bg-current rounded-full"></div>
      
      {/* Triangles */}
      <div className="absolute top-1/4 right-1/3 w-0 h-0 border-l-8 border-r-8 border-b-12 border-transparent border-b-current"></div>
      <div className="absolute bottom-1/3 left-1/5 w-0 h-0 border-l-6 border-r-6 border-b-10 border-transparent border-b-current"></div>
    </div>
  )
}
