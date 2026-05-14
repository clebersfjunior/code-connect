import { render, screen } from '@testing-library/react'
import RegisterPage from './RegisterPage'

describe('RegisterPage', () => {
  it('renders the register form and banner', () => {
    render(<RegisterPage />)
    expect(screen.getByRole('heading', { name: /cadastro/i })).toBeInTheDocument()
    expect(screen.getByText('code connect')).toBeInTheDocument()
  })
})
