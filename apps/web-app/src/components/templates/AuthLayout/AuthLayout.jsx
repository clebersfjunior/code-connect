const AuthLayout = ({ banner, children }) => {
  return (
    <div className="min-h-screen bg-brand-grafite flex items-center justify-center p-6">
      <div
        className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-0 items-stretch
          bg-brand-card border border-black rounded-3xl overflow-hidden"
      >
        <div className="hidden lg:block">{banner}</div>
        <div className="flex items-center justify-center px-10 py-14">
          {children}
        </div>
      </div>
    </div>
  )
}

export default AuthLayout
