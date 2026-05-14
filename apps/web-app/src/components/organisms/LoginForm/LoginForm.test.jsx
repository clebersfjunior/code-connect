import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import LoginForm from './LoginForm'

describe('LoginForm', () => {
  it('renders all form elements', () => {
    render(<LoginForm />)
    expect(screen.getByRole('heading', { name: /login/i })).toBeInTheDocument()
    expect(screen.getByLabelText('Email ou usuário')).toBeInTheDocument()
    expect(screen.getByLabelText('Senha')).toBeInTheDocument()
    expect(screen.getByLabelText('Lembrar-me')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /login →/i })).toBeInTheDocument()
  })

  it('renders social login options', () => {
    render(<LoginForm />)
    expect(screen.getByRole('button', { name: /entrar com github/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /entrar com gmail/i })).toBeInTheDocument()
  })

  it('renders register link', () => {
    render(<LoginForm />)
    expect(screen.getByText(/crie seu cadastro/i)).toBeInTheDocument()
  })

  it('calls onSubmit with form data when submitted', async () => {
    const handleSubmit = vi.fn()
    render(<LoginForm onSubmit={handleSubmit} />)

    await userEvent.type(screen.getByLabelText('Email ou usuário'), 'user@test.com')
    await userEvent.type(screen.getByLabelText('Senha'), 'secret123')
    await userEvent.click(screen.getByRole('button', { name: /login →/i }))

    expect(handleSubmit).toHaveBeenCalledWith(
      expect.objectContaining({ email: 'user@test.com', password: 'secret123' })
    )
  })
})
