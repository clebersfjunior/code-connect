# Agents.md

## Visão geral

Este repositório é um workspace com aplicações separadas em `apps/`.

- **Backend**: `apps/api-app`, aplicação NestJS.
- **Frontend**: `apps/web-app`, aplicação React.

## Instruções para agentes

- Trabalhe sempre a partir da raiz do workspace quando a tarefa envolver mais de uma aplicação.
- Preserve a estrutura existente do monorepo.
- Antes de alterar código, identifique se a mudança pertence ao backend, ao frontend ou à configuração compartilhada.
- Evite mudanças não relacionadas ao pedido do usuário.
- Não sobrescreva arquivos existentes sem verificar o conteúdo atual.

## Comandos úteis

Use os scripts definidos no `package.json` da raiz e nos `package.json` das aplicações quando precisar executar, testar ou validar alterações.

## Convenções

- Mantenha imports no topo dos arquivos.
- Siga o estilo de código já existente em cada aplicação.
- Prefira alterações pequenas e focadas.

## Frontend

- Utilize Atomic Design para organizar componentes.
- Utilize Tailwind CSS para estilização.
- Todo componente deve ter um teste cobrindo seu uso essencial.

### Paleta de cores

A paleta do projeto é definida via `@theme` em `apps/web-app/src/index.css` e deve ser usada por meio dos tokens abaixo. **Nunca use valores hexadecimais literais em classes Tailwind.**

| Token | Hex | Uso |
|---|---|---|
| `brand-grafite` | `#00090e` | Fundo da página |
| `brand-card` | `#171d1f` | Background do card/formulário |
| `brand-input` | `#3f3f46` | Background de inputs e divisores |
| `brand-text` | `#f4f4f5` | Texto principal |
| `brand-muted` | `#a1a1aa` | Texto atenuado, labels secundários |
| `brand-verde` | `#81fe88` | Destaque, botões primários, links de ação |
| `brand-verde-dark` | `#132e35` | Texto sobre fundo verde |
| `brand-banner` | `#14532d` | Background do banner lateral |

Para adicionar novas cores ao projeto, inclua a variável CSS em `@theme` no `index.css` e utilize o token gerado nas classes Tailwind.

### Tamanhos de fonte

Use os tokens nativos do Tailwind mais próximos ao tamanho definido no design. **Não use valores arbitrários como `text-[18px]`.**

| Tailwind | px | Uso (design) |
|---|---|---|
| `text-3xl` | 30px | Título de página/formulário |
| `text-xl` | 20px | Subtítulo grande |
| `text-lg` | 18px | Parágrafo principal |
| `text-sm` | 14px | Labels, textos auxiliares, small |
| `text-xs` | 12px | Rótulos de botões sociais |

### Acessibilidade

- Todo componente e página deve ter teste de acessibilidade automatizado com `jest-axe` cobrindo **WCAG 2 AA** (`wcag2a` + `wcag2aa`).
- Os testes ficam centralizados em `apps/web-app/src/test/accessibility.test.jsx`.
- Ao criar um novo componente ou página, adicione o caso correspondente nesse arquivo.
- Use `axe(container, { runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa'] } })` e `expect(results).toHaveNoViolations()`.
- Garanta sempre: label associado a cada input (`htmlFor`/`id`), `aria-label` em botões sem texto visível, `alt` em imagens, contraste mínimo de 4.5:1 para texto normal e 3:1 para texto grande.

## Backend

- Siga os princípios REST ao criar ou alterar endpoints.
- Utilize métodos HTTP de acordo com a semântica da operação.
- Modele URLs como recursos, evitando ações verbais nos caminhos.
- Retorne status codes adequados para sucesso, erro de validação, autenticação, autorização e recursos inexistentes.
- Mantenha respostas consistentes e previsíveis para os consumidores da API.

## Git

- Utilize Conventional Commits em ambos os projetos.
- Prefira mensagens no formato `tipo(escopo): descrição`.
- Use tipos como `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore` e `build` conforme a natureza da alteração.
