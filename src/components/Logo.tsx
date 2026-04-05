export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* 
        L'image du logo. 
        Pour utiliser votre propre image :
        1. Créez un dossier "public" à la racine du projet s'il n'existe pas
        2. Glissez-déposez votre image (ex: logo.png) dans ce dossier "public"
        3. Assurez-vous que le nom ci-dessous correspond (ex: src="/logo.png")
      */}
      <img 
        src="/logo.png" 
        alt="Logo Auti-Aura" 
        className="h-12 w-auto object-contain drop-shadow-sm"
        onError={(e) => {
          // Fallback textuel si l'image n'est pas trouvée
          e.currentTarget.style.display = 'none';
          const fallback = e.currentTarget.nextElementSibling;
          if (fallback) fallback.classList.remove('hidden');
        }}
      />
      
      {/* Texte de secours affiché uniquement si l'image n'est pas encore importée */}
      <span className="hidden font-extrabold text-2xl tracking-wider flex">
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
