import { render, screen } from '@testing-library/react'
import CheckboxRow from './CheckboxRow'

describe('CheckboxRow', () => {
  it('renders checkbox and forgot-password link', () => {
    render(<CheckboxRow checked={false} onChange={() => {}} onForgotPassword={() => {}} />)
    expect(screen.getByLabelText('Lembrar-me')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /esqueci a senha/i })).toBeInTheDocument()
  })

  it('reflects checked state', () => {
    render(<CheckboxRow checked={true} onChange={() => {}} />)
    expect(screen.getByLabelText('Lembrar-me')).toBeChecked()
  })
})
