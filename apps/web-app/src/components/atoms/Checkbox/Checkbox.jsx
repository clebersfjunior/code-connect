const Checkbox = ({ id, checked, onChange, label, className = '' }) => {
  return (
    <label
      htmlFor={id}
      className={['flex items-center gap-2 cursor-pointer select-none', className].join(' ')}
    >
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="w-4 h-4 accent-brand-verde cursor-pointer"
      />
      {label && <span className="text-sm text-brand-muted">{label}</span>}
    </label>
  )
}

export default Checkbox
