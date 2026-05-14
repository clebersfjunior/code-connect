import { render, screen } from '@testing-library/react'
import Input from './Input'

describe('Input', () => {
  it('renders with placeholder', () => {
    render(<Input placeholder="usuario123" />)
    expect(screen.getByPlaceholderText('usuario123')).toBeInTheDocument()
  })

  it('renders as password type', () => {
    render(<Input type="password" placeholder="senha" />)
    expect(screen.getByPlaceholderText('senha')).toHaveAttribute('type', 'password')
  })
})
