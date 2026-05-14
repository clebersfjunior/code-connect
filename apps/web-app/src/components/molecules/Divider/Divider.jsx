const Divider = ({ label }) => {
  return (
    <div className="flex items-center gap-3 text-zinc-500 text-xs">
      <span className="flex-1 h-px bg-zinc-700" />
      {label && <span>{label}</span>}
      <span className="flex-1 h-px bg-zinc-700" />
    </div>
  )
}

export default Divider
