import { render, screen } from '@testing-library/react'
import AuthLayout from './AuthLayout'

describe('AuthLayout', () => {
  it('renders banner and children', () => {
    render(
      <AuthLayout
        banner={<div>banner content</div>}
      >
        <div>form content</div>
      </AuthLayout>
    )
    expect(screen.getByText('banner content')).toBeInTheDocument()
    expect(screen.getByText('form content')).toBeInTheDocument()
  })
})
