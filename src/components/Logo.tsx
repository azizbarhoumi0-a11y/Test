export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg viewBox="0 0 100 100" className="w-10 h-10 drop-shadow-md">
        <g transform="rotate(45 50 50)">
          {/* Top Left -> Rotates to Top (Red) */}
          <rect x="8" y="8" width="40" height="40" fill="#ef4444" rx="8"/>
          {/* Top Right -> Rotates to Right (Yellow) */}
          <rect x="52" y="8" width="40" height="40" fill="#eab308" rx="8"/>
          {/* Bottom Left -> Rotates to Left (Blue) */}
          <rect x="8" y="52" width="40" height="40" fill="#3b82f6" rx="8"/>
          {/* Bottom Right -> Rotates to Bottom (Green) */}
          <rect x="52" y="52" width="40" height="40" fill="#22c55e" rx="8"/>
        </g>
        {/* Center Head Silhouette Placeholder (White Circle) */}
        <circle cx="50" cy="50" r="20" fill="white" />
        {/* Neural Network Abstract Nodes */}
        <circle cx="43" cy="45" r="2.5" fill="#ef4444" />
        <circle cx="57" cy="43" r="2.5" fill="#eab308" />
        <circle cx="45" cy="55" r="2.5" fill="#3b82f6" />
        <circle cx="55" cy="53" r="2.5" fill="#22c55e" />
        <path d="M43 45 L57 43 L55 53 L45 55 Z" stroke="#e5e7eb" strokeWidth="1" fill="none" />
        <path d="M43 45 L45 55" stroke="#e5e7eb" strokeWidth="1" fill="none" />
      </svg>
      <span className="font-extrabold text-2xl tracking-wider flex">
        <span className="text-[#ef4444]">A</span>
        <span className="text-[#ef4444]">U</span>
        <span className="text-[#22c55e]">T</span>
        <span className="text-[#22c55e]">I</span>
        <span className="text-[#22c55e]">'</span>
        <span className="text-[#eab308]">A</span>
        <span className="text-[#eab308]">U</span>
        <span className="text-[#3b82f6]">R</span>
        <span className="text-[#3b82f6]">A</span>
      </span>
    </div>
  );
}
