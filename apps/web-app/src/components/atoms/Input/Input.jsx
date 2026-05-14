const Input = ({ id, type = 'text', placeholder, value, onChange, className = '', ...props }) => {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={[
        'w-full rounded-lg bg-brand-input text-brand-text placeholder-brand-muted',
        'px-4 py-3 text-sm outline-none border border-transparent',
        'focus:border-brand-verde transition-colors',
        className,
      ].join(' ')}
      {...props}
    />
  )
}

export default Input
