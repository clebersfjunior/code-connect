import { useState } from 'react'
import Button from '../../atoms/Button/Button'
import FormField from '../../molecules/FormField/FormField'
import Checkbox from '../../atoms/Checkbox/Checkbox'
import Divider from '../../molecules/Divider/Divider'
import SocialButton from '../../molecules/SocialButton/SocialButton'

const GithubIcon = () => (
  <img src="/github.png" alt="" width="24" height="24" />
)

const GmailIcon = () => (
  <img src="/gmail.png" alt="" width="24" height="24" />
)

const RegisterForm = ({ onSubmit, onLogin, onGithub, onGmail }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(true)

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit?.({ name, email, password, remember })
  }

  return (
    <div className="flex flex-col gap-8 w-full max-w-sm">
      <div>
        <h1 className="text-3xl font-bold text-brand-text mb-2">Cadastro</h1>
        <p className="text-brand-muted text-lg">Olá! Preencha seus dados.</p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
        <FormField
          id="name"
          label="Nome"
          type="text"
          placeholder="Nome completo"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <FormField
          id="email"
          label="Email"
          type="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="flex flex-col gap-2">
          <FormField
            id="password"
            label="Senha"
            type="password"
            placeholder="••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Checkbox
            id="remember-me-register"
            label="Lembrar-me"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
          />
        </div>

        <Button type="submit" variant="primary">
          Cadastrar →
        </Button>
      </form>

      <div className="flex flex-col gap-5">
        <Divider label="ou entre com outras contas" />

        <div className="flex justify-center gap-8">
          <SocialButton icon={<GithubIcon />} label="Github" onClick={onGithub} />
          <SocialButton icon={<GmailIcon />} label="Gmail" onClick={onGmail} />
        </div>
      </div>

      <div className="flex items-center gap-2 text-sm text-brand-muted">
        <span>Já tem conta?</span>
        <button
          type="button"
          onClick={onLogin}
          className="text-brand-verde font-semibold hover:opacity-80 transition-opacity cursor-pointer bg-transparent border-none inline-flex items-center gap-1"
        >
          Faça seu login! →
        </button>
      </div>
    </div>
  )
}

export default RegisterForm
