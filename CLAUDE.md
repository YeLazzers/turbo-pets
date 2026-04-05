# turbo-pets

Turborepo монорепо для pet-проектов.

## Agency

<!-- После добавления submodule выполни:
     git submodule add https://github.com/you/frontend-agency .claude/agency
     Затем раскомментируй строку ниже: -->
@.claude/frontend-agency/CLAUDE.md

## Stack (default)

- state: jotai
- ui: shadcn
- query: tanstack-query
- testing: vitest
- routing: react-router-v7

## Architecture

Упрощённый FSD внутри каждого `apps/*`:

```
src/
  app/       ← провайдеры, роутер, глобальные стили
  pages/     ← page-компоненты (только композиция)
  features/  ← бизнес-действия (LoginForm, AddToCart...)
  entities/  ← бизнес-сущности (User, Product...)
  shared/    ← ui-kit, utils, api-client, types, hooks
```

Правило импортов: только вниз по слоям.
`features` → `entities` → `shared`. Не наоборот.

## Packages

- `@turbo-pets/ui` — shared shadcn/ui компоненты
- `@turbo-pets/config` — eslint, tsconfig, tailwind пресеты

## Apps

<!-- Добавляй сюда каждое новое приложение: -->
<!-- - `apps/web` — [описание] -->
<!-- - `apps/tma` — Telegram Mini App -->

## Conventions

- Язык кода: English (переменные, компоненты, файлы)
- Комментарии и коммиты: любой язык
- TypeScript: strict, no `any`, no `unknown` без type guard
- Компоненты: именованный экспорт, не default
- Файлы компонентов: `kebab-case.tsx`
- Хуки: `use-kebab-case.ts`
- Типы: `PascalCase`, в `types.ts` рядом с компонентом
