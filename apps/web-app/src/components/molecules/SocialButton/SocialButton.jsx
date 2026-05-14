const SocialButton = ({ icon, label, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex flex-col items-center gap-1 cursor-pointer bg-transparent border-none"
      aria-label={`Entrar com ${label}`}
    >
      <span className="flex items-center justify-center w-12 h-12 rounded-full bg-zinc-700 hover:bg-zinc-600 transition-colors">
        {icon}
      </span>
      <span className="text-xs text-zinc-400">{label}</span>
    </button>
  )
}

export default SocialButton
