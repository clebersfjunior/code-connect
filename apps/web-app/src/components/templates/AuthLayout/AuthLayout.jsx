const AuthLayout = ({ banner, children }) => {
  return (
    <div className="min-h-screen bg-zinc-900 flex items-center justify-center p-6">
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-6 items-stretch">
        <div className="hidden lg:block">{banner}</div>
        <div className="flex items-center justify-center px-6 py-10 lg:py-16">
          {children}
        </div>
      </div>
    </div>
  )
}

export default AuthLayout
