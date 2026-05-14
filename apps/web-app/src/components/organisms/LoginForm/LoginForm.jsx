import { useState } from 'react'
import Button from '../../atoms/Button/Button'
import FormField from '../../molecules/FormField/FormField'
import CheckboxRow from '../../molecules/CheckboxRow/CheckboxRow'
import Divider from '../../molecules/Divider/Divider'
import SocialButton from '../../molecules/SocialButton/SocialButton'

const GithubIcon = () => (
  <img src="/github.png" alt="" width="24" height="24" />
)

const GmailIcon = () => (
  <img src="/gmail.png" alt="" width="24" height="24" />
)

const LoginForm = ({ onSubmit, onForgotPassword, onRegister, onGithub, onGmail }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit?.({ email, password, remember })
  }

  return (
    <div className="flex flex-col gap-8 w-full max-w-sm">
      <div>
        <h1 className="text-3xl font-bold text-zinc-100 mb-2">Login</h1>
        <p className="text-zinc-400 text-base">Boas-vindas! Faça seu login.</p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
        <FormField
          id="email"
          label="Email ou usuário"
          type="text"
          placeholder="usuario123"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <FormField
          id="password"
          label="Senha"
          type="password"
          placeholder="••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <CheckboxRow
          checked={remember}
          onChange={(e) => setRemember(e.target.checked)}
          onForgotPassword={onForgotPassword}
        />

        <Button type="submit" variant="primary">
          Login →
        </Button>
      </form>

      <div className="flex flex-col gap-5">
        <Divider label="ou entre com outras contas" />

        <div className="flex justify-center gap-8">
          <SocialButton icon={<GithubIcon />} label="Github" onClick={onGithub} />
          <SocialButton icon={<GmailIcon />} label="Gmail" onClick={onGmail} />
        </div>
      </div>

      <div className="text-center text-sm text-zinc-400">
        <p>Ainda não tem conta?</p>
        <button
          type="button"
          onClick={onRegister}
          className="text-green-400 font-semibold hover:text-green-300 transition-colors cursor-pointer bg-transparent border-none mt-1 inline-flex items-center gap-1"
        >
          Crie seu cadastro! 🗒️
        </button>
      </div>
    </div>
  )
}

export default LoginForm
