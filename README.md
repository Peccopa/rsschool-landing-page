# Dev Store

Авторский проект для **RS School Fullstack Engineering Course**.

**Dev Store** — сайт-презентация и каталог собственных инструментов для frontend-разработки.

> Build once. Reuse everywhere.

## Demo

[Live Demo](https://peccopa.github.io/rsschool-landing-page/)

## 1. О проекте

Проект объединяет собственные инструменты и starter-пакеты для frontend-разработки в едином каталоге.

Основная идея — создавать небольшие переиспользуемые инструменты, которые можно применять в разных проектах.

Проект также используется для практики:

- адаптивной вёрстки;
- DOM manipulation;
- работы с состоянием;
- клиентской маршрутизации;
- интерактивных UI-компонентов;
- `localStorage`;
- светлой и тёмной тем;
- accessibility;
- тестирования;
- production build и deployment.

---

## 2. Страницы

### Home

Главная страница проекта содержит:

- Hero;
- Featured Tools;
- преимущества и философию проекта;
- интерактивный slider;
- About Author;
- CTA.

### Catalog

Каталог инструментов содержит:

- категории;
- фильтрацию;
- карточки инструментов;
- Show More;
- подробное модальное окно;
- параметры инструментов;
- динамическую информацию;
- ссылки на GitHub.

Навигация между страницами выполняется без перезагрузки страницы.

---

## 3. Инструменты

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

### In Development

| Tool      | Category     | Status      |
| --------- | ------------ | ----------- |
| UI Kit    | UI           | Development |
| Style Kit | UI / Styling | Development |
| Theme Kit | UI / Styling | Development |

Дополнительные инструменты могут быть добавлены в будущем.

---

## 4. Technologies

- HTML
- CSS
- JavaScript
- Vite
- Vitest
- ESLint
- Prettier
- Git
- GitHub Pages

Собственные инструменты:

- `@peccopa/component-kit`
- `@peccopa/state-kit`
- `@peccopa/router-kit`
- `@peccopa/sound-kit`
- `@peccopa/i18n-kit`

---

## 5. Architecture

Проект использует компонентный подход и FSD-подобную структуру.

Основные уровни:

```text
src/
├── app/
├── entities/
├── pages/
├── widgets/
├── shared/
└── main.js
```

`component-kit` используется как основа для создания UI-компонентов проекта.

Для клиентской навигации используется собственный `router-kit`.

Состояние отдельных интерактивных элементов управляется через собственный `state-kit`.

---

## 6. Implemented Features

### Navigation

- Home / Catalog navigation;
- hash navigation;
- active page state;
- browser Back / Forward;
- navigation without page reload;
- mobile burger menu;
- Escape для закрытия мобильного меню.

### Catalog

- категории;
- фильтрация инструментов;
- отображение карточек;
- Show More;
- динамическое количество отображаемых карточек;
- модальное окно инструмента.

### Modal

- открытие по карточке;
- закрытие по кнопке;
- закрытие по overlay;
- закрытие по `Escape`;
- выбор параметров инструмента;
- динамическое изменение информации;
- GitHub Repository link;
- open / close animations.

### Theme

- Light Theme;
- Dark Theme;
- переключение темы;
- сохранение выбранной темы в `localStorage`;
- восстановление темы после перезагрузки;
- сохранение темы при переходе между страницами.

### Responsive Design

Поддерживаются:

- 1440px;
- 768px;
- 380px;
- промежуточные размеры.

Особое внимание уделено отсутствию горизонтального overflow.

### Animations

В проекте реализованы:

- плавное появление страницы;
- последовательное появление карточек каталога;
- анимация открытия модального окна;
- анимация закрытия модального окна;
- плавное появление и исчезновение modal overlay;
- hover / focus transitions.

На мобильных устройствах некоторые desktop-анимации отключаются или упрощаются для более быстрого взаимодействия.

---

## 7. Accessibility

В проекте используются:

- семантические HTML-элементы;
- корректная структура заголовков;
- `alt` для изображений;
- keyboard navigation;
- `focus-visible`;
- `aria-label`;
- `role="dialog"`;
- `aria-modal`;
- возможность закрытия модального окна клавишей `Escape`.

---

## 8. Testing

Для проверки проекта используются:

- Vitest;
- ESLint;
- production build;
- ручная проверка responsive layout;
- проверка Light / Dark Theme;
- проверка навигации;
- проверка интерактивных компонентов;
- проверка модальных окон;
- проверка отсутствия горизонтального overflow;
- проверка браузерной консоли.

---

## 9. Development Workflow

Разработка выполнялась итеративно:

1. Project structure
2. Content and data
3. Base layout
4. Responsive layout
5. Theme system
6. UI components
7. Navigation
8. Catalog functionality
9. Modal functionality
10. Animations
11. Testing
12. Accessibility
13. Production build
14. Deployment

Основной принцип разработки:

> Make it work → make it better.

Сначала реализовывалась рабочая версия, затем добавлялись улучшения и визуальная полировка.

---

## 10. Deployment

Проект опубликован через **GitHub Pages**.

Production:

https://peccopa.github.io/rsschool-landing-page/

Перед deployment выполняется production build и проверяется итоговая версия приложения.

---

## 11. RS School Workflow

Repository:

`rsschool-landing-page`

Основные branches:

```text
main
└── landing-page
    └── landing-page-part-2
```

### Part 1

```text
landing-page → main
```

### Part 2

```text
landing-page-part-2 → landing-page
```

Pull Requests используются для проверки выполненной части задания.

История коммитов отражает процесс разработки проекта.

---

## 12. Final Result

Проект реализует:

- две страницы;
- клиентскую навигацию;
- responsive layout;
- Light / Dark Theme;
- `localStorage`;
- slider;
- категории;
- фильтрацию;
- карточки инструментов;
- Show More;
- modal;
- параметры инструментов;
- динамическую информацию;
- animations;
- mobile navigation;
- accessibility;
- tests;
- production build;
- deployment.

Проект завершён в рамках поставленных требований Landing Page Part 1 и Part 2.
