# Página de Login — Code Connect

Implementar a página de login com Atomic Design, Tailwind CSS e testes, preparando o layout base para reuso na futura página de cadastro.

## Status

✅ Implementado em 13/05/2026

## Dependências instaladas

- `tailwindcss` + `@tailwindcss/vite` (Tailwind v4, integração nativa com Vite)
- `vitest` + `@testing-library/react` + `@testing-library/jest-dom` + `jsdom`

## Estrutura de componentes (Atomic Design)

```
src/
  components/
    atoms/
      Input/         → Input.jsx + Input.test.jsx
      Button/        → Button.jsx + Button.test.jsx
      Checkbox/      → Checkbox.jsx + Checkbox.test.jsx
    molecules/
      FormField/     → Label + Input agrupados + FormField.test.jsx
      CheckboxRow/   → Checkbox + "Lembrar-me" + link "Esqueci a senha" + test
      SocialButton/  → Botão com ícone (Github / Gmail) + test
      Divider/       → Linha com texto centralizado ("ou entre com outras contas") + test
    organisms/
      AuthBanner/    → Painel esquerdo (imagem + logo text) + test
                       Props: `imageSrc?`, `logoText?` → reutilizável na tela de cadastro
      LoginForm/     → Formulário completo de login + test
    templates/
      AuthLayout/    → Layout 2 colunas: slot `banner` + slot `children` (form)
                       A tela de cadastro reutilizará esse template com banner/form diferentes
  pages/
    LoginPage/       → Compõe AuthLayout + AuthBanner + LoginForm
```

## Paleta de cores (dark theme fixo)

| Token        | Valor       |
|--------------|-------------|
| bg           | `#18181b`   |
| surface      | `#27272a`   |
| input-bg     | `#3f3f46`   |
| text         | `#f4f4f5`   |
| muted        | `#a1a1aa`   |
| accent green | `#4ade80`   |
| banner bg    | `#14532d`   |

## Layout

- Tela cheia dividida em 2 colunas: ~45% banner | ~55% form
- Banner: `public/banner-login.png` com logo "code connect" no rodapé
- Formulário: título "Login", subtítulo, campos Email/Senha, checkbox "Lembrar-me" + "Esqueci a senha", botão verde, divider, social buttons (Github + Gmail via `public/github.png` e `public/gmail.png`), link de cadastro

## Assets (public/)

| Arquivo              | Uso                        |
|----------------------|----------------------------|
| `banner-login.png`   | Imagem do painel esquerdo  |
| `github.png`         | Ícone do botão Github      |
| `gmail.png`          | Ícone do botão Gmail       |

## Testes

- 24 testes cobrindo todos os componentes
- Comando: `pnpm --filter web-app test`

## O que NÃO foi implementado (próximos passos)

- Integração com API
- Página de cadastro (mas `AuthLayout` e `AuthBanner` já estão prontos para reuso)
- Roteamento (react-router-dom)
