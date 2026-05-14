import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useState } from 'react'
import Checkbox from './Checkbox'

const ControlledCheckbox = () => {
  const [checked, setChecked] = useState(false)
  return <Checkbox id="test" label="Lembrar-me" checked={checked} onChange={(e) => setChecked(e.target.checked)} />
}

describe('Checkbox', () => {
  it('renders with label', () => {
    render(<Checkbox id="test" label="Lembrar-me" checked={false} onChange={() => {}} />)
    expect(screen.getByLabelText('Lembrar-me')).toBeInTheDocument()
  })

  it('toggles when clicked', async () => {
    render(<ControlledCheckbox />)
    const checkbox = screen.getByLabelText('Lembrar-me')
    expect(checkbox).not.toBeChecked()
    await userEvent.click(checkbox)
    expect(checkbox).toBeChecked()
  })
})
