import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SocialButton from './SocialButton'

describe('SocialButton', () => {
  it('renders label', () => {
    render(<SocialButton label="Github" icon={<span>icon</span>} onClick={() => {}} />)
    expect(screen.getByText('Github')).toBeInTheDocument()
  })

  it('has accessible label', () => {
    render(<SocialButton label="Github" icon={<span>icon</span>} onClick={() => {}} />)
    expect(screen.getByRole('button', { name: /entrar com github/i })).toBeInTheDocument()
  })

  it('calls onClick when clicked', async () => {
    const handleClick = vi.fn()
    render(<SocialButton label="Github" icon={<span>icon</span>} onClick={handleClick} />)
    await userEvent.click(screen.getByRole('button', { name: /entrar com github/i }))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
