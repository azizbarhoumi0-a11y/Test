export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`} dir="ltr">
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
