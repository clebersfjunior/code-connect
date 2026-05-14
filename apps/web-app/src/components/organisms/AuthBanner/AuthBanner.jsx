const AuthBanner = ({ imageSrc, logoText = 'code connect', className = '' }) => {
  return (
    <div
      className={[
        'relative flex flex-col justify-end rounded-2xl overflow-hidden',
        'bg-brand-banner min-h-[480px]',
        className,
      ].join(' ')}
    >
      {imageSrc ? (
        <img
          src={imageSrc}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-brand-banner via-green-900 to-brand-card" />
      )}

      <div className="relative z-10 p-8">
        <span className="flex items-center gap-2 text-brand-verde font-bold text-xl">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
            <rect width="12" height="12" rx="2" fill="currentColor" />
            <rect x="16" y="16" width="12" height="12" rx="2" fill="currentColor" />
            <rect x="16" width="12" height="12" rx="2" fill="currentColor" opacity="0.4" />
            <rect x="0" y="16" width="12" height="12" rx="2" fill="currentColor" opacity="0.4" />
          </svg>
          {logoText}
        </span>
      </div>
    </div>
  )
}

export default AuthBanner
