const Input = ({ id, type = 'text', placeholder, value, onChange, className = '', ...props }) => {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={[
        'w-full rounded-lg bg-zinc-700 text-zinc-100 placeholder-zinc-400',
        'px-4 py-3 text-sm outline-none border border-transparent',
        'focus:border-green-400 transition-colors',
        className,
      ].join(' ')}
      {...props}
    />
  )
}

export default Input
