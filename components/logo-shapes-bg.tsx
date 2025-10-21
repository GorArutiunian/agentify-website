export default function LogoShapesBg() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Very big logo-style abstract shapes - much more visible and prominent */}
      <svg className="absolute top-[-15%] left-[-20%] w-[80vw] opacity-50 blur-[1px]" viewBox="0 0 300 300">
        {/* Massive abstract logo-like shape with flowing curves */}
        <path d="M30 30 Q150 10 270 30 Q290 150 270 270 Q150 290 30 270 Q10 150 30 30 Z" fill="#E93E8F" />
        <path d="M60 60 Q150 40 240 60 Q260 150 240 240 Q150 260 60 240 Q40 150 60 60 Z" fill="none" stroke="#FF6B9D" strokeWidth="6" />
        <circle cx="150" cy="150" r="15" fill="#E93E8F" />
        <circle cx="150" cy="50" r="8" fill="#FF6B9D" />
        <circle cx="150" cy="250" r="8" fill="#E93E8F" />
        <circle cx="50" cy="150" r="8" fill="#FF6B9D" />
        <circle cx="250" cy="150" r="8" fill="#E93E8F" />
      </svg>
      
      <svg className="absolute bottom-[-20%] right-[-25%] w-[75vw] opacity-40 blur-[1px]" viewBox="0 0 300 300">
        {/* Another massive abstract logo shape */}
        <path d="M45 45 C120 30 180 30 255 45 C270 120 270 180 255 255 C180 270 120 270 45 255 C30 180 30 120 45 45 Z" fill="#FF6B9D" />
        <path d="M75 75 C135 60 165 60 225 75 C240 135 240 165 225 225 C165 240 135 240 75 225 C60 165 60 135 75 75 Z" fill="none" stroke="#E93E8F" strokeWidth="4" />
        <rect x="120" y="120" width="60" height="60" rx="30" fill="#E93E8F" />
        <circle cx="150" cy="80" r="12" fill="#FF6B9D" />
        <circle cx="150" cy="220" r="12" fill="#E93E8F" />
        <circle cx="80" cy="150" r="12" fill="#FF6B9D" />
        <circle cx="220" cy="150" r="12" fill="#E93E8F" />
      </svg>
      
      <svg className="absolute top-[30%] right-[10%] w-[60vw] opacity-35" viewBox="0 0 300 300">
        {/* Third massive shape */}
        <path d="M40 40 L260 40 L260 260 L40 260 Z" fill="#E93E8F" rx="30" ry="30" />
        <path d="M70 70 L230 70 L230 230 L70 230 Z" fill="none" stroke="#FF6B9D" strokeWidth="8" rx="15" ry="15" />
        <circle cx="150" cy="80" r="12" fill="#FF6B9D" />
        <circle cx="150" cy="220" r="12" fill="#E93E8F" />
        <circle cx="80" cy="150" r="12" fill="#FF6B9D" />
        <circle cx="220" cy="150" r="12" fill="#E93E8F" />
        <circle cx="150" cy="150" r="20" fill="#E93E8F" />
      </svg>
      
      <svg className="absolute bottom-[20%] left-[15%] w-[50vw] opacity-25" viewBox="0 0 300 300">
        {/* Fourth massive shape */}
        <path d="M60 60 Q150 40 240 60 L240 240 Q150 260 60 240 Z" fill="#FF6B9D" />
        <path d="M90 90 Q150 75 210 90 L210 210 Q150 225 90 210 Z" fill="none" stroke="#E93E8F" strokeWidth="6" />
        <ellipse cx="150" cy="150" rx="25" ry="12" fill="#E93E8F" />
        <circle cx="150" cy="100" r="8" fill="#FF6B9D" />
        <circle cx="150" cy="200" r="8" fill="#E93E8F" />
        <circle cx="100" cy="150" r="8" fill="#FF6B9D" />
        <circle cx="200" cy="150" r="8" fill="#E93E8F" />
      </svg>
      
      {/* Additional very large shapes for more coverage */}
      <svg className="absolute top-[60%] left-[-10%] w-[70vw] opacity-20" viewBox="0 0 300 300">
        <path d="M50 50 Q150 30 250 50 Q270 150 250 250 Q150 270 50 250 Q30 150 50 50 Z" fill="#E93E8F" />
        <path d="M80 80 Q150 65 220 80 Q235 150 220 220 Q150 235 80 220 Q65 150 80 80 Z" fill="none" stroke="#FF6B9D" strokeWidth="5" />
        <circle cx="150" cy="150" r="18" fill="#FF6B9D" />
      </svg>
    </div>
  );
}