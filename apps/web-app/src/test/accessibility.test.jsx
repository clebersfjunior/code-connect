import { render } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import { expect } from 'vitest'

expect.extend(toHaveNoViolations)

const wcag2aa = {
  runOnly: {
    type: 'tag',
    values: ['wcag2a', 'wcag2aa'],
  },
}

import Button from '../components/atoms/Button/Button'
import Input from '../components/atoms/Input/Input'
import Checkbox from '../components/atoms/Checkbox/Checkbox'
import FormField from '../components/molecules/FormField/FormField'
import Divider from '../components/molecules/Divider/Divider'
import SocialButton from '../components/molecules/SocialButton/SocialButton'
import CheckboxRow from '../components/molecules/CheckboxRow/CheckboxRow'
import AuthBanner from '../components/organisms/AuthBanner/AuthBanner'
import LoginForm from '../components/organisms/LoginForm/LoginForm'
import RegisterForm from '../components/organisms/RegisterForm/RegisterForm'
import LoginPage from '../pages/LoginPage/LoginPage'
import RegisterPage from '../pages/RegisterPage/RegisterPage'

describe('Acessibilidade WCAG 2 AA', () => {
  describe('Atoms', () => {
    it('Button - sem violações', async () => {
      const { container } = render(<Button>Entrar</Button>)
      const results = await axe(container, wcag2aa)
      expect(results).toHaveNoViolations()
    })

    it('Input - sem violações (com label associado)', async () => {
      const { container } = render(
        <div>
          <label htmlFor="test-input">Email</label>
          <Input id="test-input" placeholder="Digite seu email" value="" onChange={() => {}} />
        </div>
      )
      const results = await axe(container, wcag2aa)
      expect(results).toHaveNoViolations()
    })

    it('Checkbox - sem violações', async () => {
      const { container } = render(
        <Checkbox id="test-check" label="Lembrar-me" checked={false} onChange={() => {}} />
      )
      const results = await axe(container, wcag2aa)
      expect(results).toHaveNoViolations()
    })
  })

  describe('Molecules', () => {
    it('FormField - sem violações', async () => {
      const { container } = render(
        <FormField id="email" label="Email" placeholder="Digite seu email" value="" onChange={() => {}} />
      )
      const results = await axe(container, wcag2aa)
      expect(results).toHaveNoViolations()
    })

    it('Divider - sem violações', async () => {
      const { container } = render(<Divider label="ou entre com outras contas" />)
      const results = await axe(container, wcag2aa)
      expect(results).toHaveNoViolations()
    })

    it('SocialButton - sem violações', async () => {
      const { container } = render(
        <SocialButton
          label="Github"
          icon={<img src="/github.png" alt="Github" width="24" height="24" />}
        />
      )
      const results = await axe(container, wcag2aa)
      expect(results).toHaveNoViolations()
    })

    it('CheckboxRow - sem violações', async () => {
      const { container } = render(
        <CheckboxRow checked={false} onChange={() => {}} onForgotPassword={() => {}} />
      )
      const results = await axe(container, wcag2aa)
      expect(results).toHaveNoViolations()
    })
  })

  describe('Organisms', () => {
    it('AuthBanner - sem violações', async () => {
      const { container } = render(<AuthBanner />)
      const results = await axe(container, wcag2aa)
      expect(results).toHaveNoViolations()
    })

    it('AuthBanner com imagem - sem violações', async () => {
      const { container } = render(<AuthBanner imageSrc="/banner-login.png" />)
      const results = await axe(container, wcag2aa)
      expect(results).toHaveNoViolations()
    })

    it('LoginForm - sem violações', async () => {
      const { container } = render(<LoginForm />)
      const results = await axe(container, wcag2aa)
      expect(results).toHaveNoViolations()
    })

    it('RegisterForm - sem violações', async () => {
      const { container } = render(<RegisterForm />)
      const results = await axe(container, wcag2aa)
      expect(results).toHaveNoViolations()
    })
  })

  describe('Pages', () => {
    it('LoginPage - sem violações', async () => {
      const { container } = render(<LoginPage />)
      const results = await axe(container, wcag2aa)
      expect(results).toHaveNoViolations()
    })

    it('RegisterPage - sem violações', async () => {
      const { container } = render(<RegisterPage />)
      const results = await axe(container, wcag2aa)
      expect(results).toHaveNoViolations()
    })
  })
})
