import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import RegisterForm from './RegisterForm'

describe('RegisterForm', () => {
  it('renders all form elements', () => {
    render(<RegisterForm />)
    expect(screen.getByRole('heading', { name: /cadastro/i })).toBeInTheDocument()
    expect(screen.getByLabelText('Nome')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Senha')).toBeInTheDocument()
    expect(screen.getByLabelText('Lembrar-me')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /cadastrar →/i })).toBeInTheDocument()
  })

  it('renders social login options', () => {
    render(<RegisterForm />)
    expect(screen.getByRole('button', { name: /entrar com github/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /entrar com gmail/i })).toBeInTheDocument()
  })

  it('renders login link', () => {
    render(<RegisterForm />)
    expect(screen.getByText(/já tem conta/i)).toBeInTheDocument()
    expect(screen.getByText(/faça seu login/i)).toBeInTheDocument()
  })

  it('calls onSubmit with form data when submitted', async () => {
    const handleSubmit = vi.fn()
    render(<RegisterForm onSubmit={handleSubmit} />)

    await userEvent.type(screen.getByLabelText('Nome'), 'João Silva')
    await userEvent.type(screen.getByLabelText('Email'), 'joao@test.com')
    await userEvent.type(screen.getByLabelText('Senha'), 'secret123')
    await userEvent.click(screen.getByRole('button', { name: /cadastrar →/i }))

    expect(handleSubmit).toHaveBeenCalledWith(
      expect.objectContaining({ name: 'João Silva', email: 'joao@test.com', password: 'secret123' })
    )
  })

  it('calls onLogin when login link is clicked', async () => {
    const handleLogin = vi.fn()
    render(<RegisterForm onLogin={handleLogin} />)

    await userEvent.click(screen.getByText(/faça seu login/i))
    expect(handleLogin).toHaveBeenCalled()
  })
})
