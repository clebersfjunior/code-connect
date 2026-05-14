import { render, screen } from '@testing-library/react'
import FormField from './FormField'

describe('FormField', () => {
  it('renders label and input', () => {
    render(<FormField id="email" label="Email ou usuário" placeholder="usuario123" />)
    expect(screen.getByLabelText('Email ou usuário')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('usuario123')).toBeInTheDocument()
  })

  it('associates label with input via id', () => {
    render(<FormField id="email" label="Email ou usuário" />)
    const input = screen.getByLabelText('Email ou usuário')
    expect(input).toHaveAttribute('id', 'email')
  })
})
