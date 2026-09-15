# Landing Page

Авторский проект для RS School Fullstack Engineering Course.

## 1. Концепция

Сайт-презентация и каталог собственных инструментов для frontend-разработки.

Проект объединяет готовые, разрабатываемые и планируемые инструменты в единую коллекцию.

Основная идея:

> Build once. Reuse everywhere.

Название проекта будет определено отдельно.

---

## 2. Цели

### Учебные

- выполнить требования Landing Page Part 1;
- выполнить требования Landing Page Part 2;
- закрепить адаптивную вёрстку;
- реализовать работу с DOM;
- реализовать интерактивность на чистом JavaScript;
- использовать `localStorage`;
- реализовать светлую и тёмную темы.

### Практические

- создать реальную презентацию собственных инструментов;
- развивать собственный `ui-kit` на базе `component-kit`;
- проверить совместную работу собственных инструментов;
- получить основу для дальнейшего развития проекта.

---

## 3. Технологии

- HTML
- CSS / SCSS
- JavaScript
- Vite
- Vitest
- ESLint
- Prettier
- Git / GitHub

Собственные инструменты:

- `component-kit`
- `state-kit`
- `router-kit`
- `sound-kit`
- `i18n-kit`
- `js-starter-pack`

При необходимости:

- `ts-starter-pack`
- `ui-kit`
- `style-kit`
- `theme-kit`

---

## 4. Страницы

### Home

Главная страница проекта.

Предварительная структура:

1. Hero
2. Featured Tools
3. Advantages / Philosophy
4. About Author
5. Roadmap
6. CTA

### Catalog

Каталог инструментов.

Основные возможности:

- категории;
- карточки инструментов;
- фильтрация;
- дополнительные карточки;
- открытие подробной информации;
- выбор параметров инструмента;
- модальное окно.

---

## 5. Инструменты

### Available

| Tool            | Category | Status    |
| --------------- | -------- | --------- |
| Component Kit   | Core     | Available |
| State Kit       | Core     | Available |
| Router Kit      | Core     | Available |
| Sound Kit       | Utility  | Available |
| i18n Kit        | Utility  | Available |
| JS Starter Pack | Starter  | Available |
| TS Starter Pack | Starter  | Available |

### In development

| Tool      | Category     | Status      |
| --------- | ------------ | ----------- |
| UI Kit    | UI           | Development |
| Style Kit | UI / Styling | Development |
| Theme Kit | UI / Styling | Development |

### Planned

Возможные будущие инструменты:

- Form Kit
- HTTP / API Kit
- Storage Kit
- Validation Kit
- Test Kit
- Animation Kit
- Utils Kit
- Date Kit
- Modal Kit

Список не является обязательством к реализации.

---

## 6. UI Kit

`ui-kit` создаётся непосредственно в процессе выполнения проекта.

Базой служит `component-kit`.

Предварительные компоненты:

- Navigation
- Slider
- Card
- Modal
- Theme Switcher
- Search
- Filter
- Select
- Pagination
- Tabs

Компоненты добавляются по мере возникновения реальной необходимости.

Не создавать компоненты заранее без практического применения.

---

## 7. Theme System

Необходимо реализовать:

- light theme;
- dark theme;
- переключение темы;
- сохранение выбора в `localStorage`;
- восстановление темы после перезагрузки;
- сохранение темы при переходе между страницами.

`theme-kit` будет использоваться как экспериментальная основа для этой функциональности.

---

## 8. Catalog

Каталог должен содержать минимум три категории.

Предварительные категории:

- Core
- UI
- Tools

Карточка инструмента содержит:

- обложку;
- название;
- категорию;
- статус;
- краткое описание;
- дополнительную информацию;
- ссылку на репозиторий / npm при наличии.

В одной категории должно быть не менее восьми карточек.

Для будущих инструментов используется явный статус:

- Available
- Development
- Planned

---

## 9. Part 1 — Layout

### Pages

- [ ] Home
- [ ] Catalog
- [ ] Общий Header
- [ ] Общий Footer
- [ ] Разные URL
- [ ] Favicon

### Header

- [ ] Logo / project name
- [ ] Navigation
- [ ] Theme switcher
- [ ] Burger button ≤768px

### Home

- [ ] Hero
- [ ] CTA
- [ ] Slider ≥3 items
- [ ] Section 3
- [ ] Section 4

### Catalog

- [ ] ≥3 categories
- [ ] Category controls
- [ ] ≥8 cards in one category
- [ ] Show more / pagination
- [ ] Card image
- [ ] Card title
- [ ] Card description
- [ ] Additional card information

### Footer

- [ ] Contact information
- [ ] External links
- [ ] GitHub
- [ ] RS School link
- [ ] Copyright

### Responsive

- [ ] 1440px
- [ ] 768px
- [ ] 380px
- [ ] Intermediate widths
- [ ] No horizontal overflow

### Theme

- [ ] Light
- [ ] Dark
- [ ] localStorage
- [ ] Restore after reload
- [ ] Preserve between pages

---

## 10. Part 2 — Functionality

- [ ] Burger menu
- [ ] Slider / carousel
- [ ] Category switching
- [ ] Additional cards
- [ ] Card modal
- [ ] Card parameters
- [ ] Dynamic modal information
- [ ] No page reload for interactions

---

## 11. Development Strategy

Работа выполняется итеративно:

1. Project structure
2. Content and data
3. Base layout
4. Responsive layout
5. Theme system
6. UI Kit components
7. Part 1 functionality
8. Part 2 functionality
9. Testing
10. Accessibility
11. Final responsive check
12. Deployment
13. Cross-check preparation

Не реализовывать будущую функциональность без необходимости.

Сначала рабочая версия, затем улучшения.

---

## 12. Testing

Проверить:

- функциональность;
- responsive layout;
- обе темы;
- сохранение темы;
- навигацию;
- интерактивные компоненты;
- модальные окна;
- отсутствие горизонтального скролла;
- консоль браузера;
- тесты собственных компонентов.

---

## 13. Deployment

После каждой завершённой части:

- актуализировать deployment;
- проверить production build;
- добавить ссылку на deployment в соответствующий Pull Request.

---

## 14. RS School Workflow

Repository:

`rsschool-landing-page`

Branches:

```text
main
└── landing-page
    └── landing-page-part-2
```

### Part 1

`landing-page` → `main`

### Part 2

`landing-page-part-2` → `landing-page`

Pull Requests не мержить.

История коммитов должна отражать реальный процесс разработки.

---

## 15. Final Checklist

Перед сдачей проверить:

- [ ] Part 1 requirements
- [ ] Part 2 requirements
- [ ] Responsive 1440 / 768 / 380
- [ ] Light / Dark
- [ ] localStorage
- [ ] Navigation
- [ ] Slider
- [ ] Categories
- [ ] Cards
- [ ] Show more / pagination
- [ ] Modal
- [ ] Card parameters
- [ ] Accessibility
- [ ] Browser console
- [ ] Tests
- [ ] Build
- [ ] Deployment
- [ ] Pull Request
- [ ] Cross-check checklist
