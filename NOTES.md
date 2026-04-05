# turbo-pets — Заметки

Turborepo монорепо для pet-проектов. Общая концепция агентства — в [frontend-agency/CONCEPT.md](https://github.com/you/frontend-agency/blob/main/CONCEPT.md).

---

## Текущая структура

```
turbo-pets/
  CLAUDE.md               ← точка входа для Claude (project adapter)
  NOTES.md                ← этот файл
  package.json            ← workspace root (pnpm, turbo)
  turbo.json              ← pipeline: build, dev, test, lint, typecheck
  tsconfig.json           ← IDE-навигация по монорепо
  pnpm-workspace.yaml     ← pnpm workspaces
  .gitignore
  apps/                   ← приложения (пока пусто)
  packages/
    config/               ← @turbo-pets/config
    │ tsconfig/base.json      строгий TypeScript
    │ tsconfig/react.json     extends base + JSX
    │ eslint/base.js          TS strict rules
    │ eslint/react.js         React + Hooks + FSD boundaries
    │ tailwind/preset.ts      shared Tailwind preset
    ui/                   ← @turbo-pets/ui (shared shadcn компоненты)
```

---

## Agency

Агентство пока не подключено как submodule. После публикации `frontend-agency` на GitHub:

```bash
git submodule add https://github.com/you/frontend-agency .claude/agency
```

Затем раскомментировать в `CLAUDE.md`:
```
@.claude/agency/CLAUDE.md
```

---

## Apps

| Приложение | Статус | Описание |
|---|---|---|
| — | — | Пока нет приложений |

---

## Следующие шаги

- [ ] `pnpm install` в корне (установить turbo и зависимости)
- [ ] Создать первое приложение в `apps/` (React SPA)
- [ ] Подключить `frontend-agency` как submodule
- [ ] Настроить shadcn в `packages/ui`

---

## Telegram Mini App (TMA)

Статус: **не определился**. Когда будет готово:

- SDK: `@telegram-apps/sdk`
- Тема: адаптировать shadcn под Telegram CSS-переменные (`--tg-theme-*`)
- Приложение: `apps/tma/`
- Отдельный `apps/tma/CLAUDE.md` с TMA-специфичными инструкциями
