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
        className="w-4 h-4 accent-green-400 cursor-pointer"
      />
      {label && <span className="text-sm text-zinc-300">{label}</span>}
    </label>
  )
}

export default Checkbox
