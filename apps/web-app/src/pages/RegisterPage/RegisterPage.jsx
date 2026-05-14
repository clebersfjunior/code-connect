import AuthLayout from '../../components/templates/AuthLayout/AuthLayout'
import AuthBanner from '../../components/organisms/AuthBanner/AuthBanner'
import RegisterForm from '../../components/organisms/RegisterForm/RegisterForm'

const RegisterPage = ({ onLogin }) => {
  return (
    <AuthLayout
      banner={<AuthBanner imageSrc="/banner-login.png" />}
    >
      <RegisterForm onLogin={onLogin} />
    </AuthLayout>
  )
}

export default RegisterPage
