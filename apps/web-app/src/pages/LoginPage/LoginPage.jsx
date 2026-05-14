import AuthLayout from '../../components/templates/AuthLayout/AuthLayout'
import AuthBanner from '../../components/organisms/AuthBanner/AuthBanner'
import LoginForm from '../../components/organisms/LoginForm/LoginForm'

const LoginPage = () => {
  return (
    <AuthLayout
      banner={<AuthBanner imageSrc="/banner-login.png" />}
    >
      <LoginForm />
    </AuthLayout>
  )
}

export default LoginPage
