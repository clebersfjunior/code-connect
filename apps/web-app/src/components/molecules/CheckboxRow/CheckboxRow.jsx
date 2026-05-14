import Checkbox from '../../atoms/Checkbox/Checkbox'

const CheckboxRow = ({ checked, onChange, onForgotPassword }) => {
  return (
    <div className="flex items-center justify-between">
      <Checkbox
        id="remember-me"
        label="Lembrar-me"
        checked={checked}
        onChange={onChange}
      />
      <button
        type="button"
        onClick={onForgotPassword}
        className="text-sm text-brand-muted underline hover:text-brand-text transition-colors cursor-pointer bg-transparent border-none"
      >
        Esqueci a senha
      </button>
    </div>
  )
}

export default CheckboxRow
