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
