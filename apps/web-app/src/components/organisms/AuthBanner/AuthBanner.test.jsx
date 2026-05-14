import { render, screen } from '@testing-library/react'
import AuthBanner from './AuthBanner'

describe('AuthBanner', () => {
  it('renders default logo text', () => {
    render(<AuthBanner />)
    expect(screen.getByText('code connect')).toBeInTheDocument()
  })

  it('renders custom logo text', () => {
    render(<AuthBanner logoText="my brand" />)
    expect(screen.getByText('my brand')).toBeInTheDocument()
  })

  it('renders image when imageSrc is provided', () => {
    const { container } = render(<AuthBanner imageSrc="/banner.png" />)
    const img = container.querySelector('img')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', '/banner.png')
  })
})
