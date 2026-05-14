const Button = ({ children, type = 'button', onClick, variant = 'primary', className = '', ...props }) => {
  const variants = {
    primary:
      'bg-green-400 hover:bg-green-300 text-zinc-900 font-bold',
    ghost:
      'bg-zinc-700 hover:bg-zinc-600 text-zinc-100',
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={[
        'flex items-center justify-center gap-2 rounded-xl px-6 py-4',
        'text-sm transition-colors cursor-pointer w-full',
        variants[variant],
        className,
      ].join(' ')}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
