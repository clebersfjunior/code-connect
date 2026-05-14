const Divider = ({ label }) => {
  return (
    <div className="flex items-center gap-3 text-brand-muted text-xs">
      <span className="flex-1 h-px bg-brand-input" />
      {label && <span>{label}</span>}
      <span className="flex-1 h-px bg-brand-input" />
    </div>
  )
}

export default Divider
