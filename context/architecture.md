# Architecture

## Stack

| Слой                          | Инструмент                     | Назначение                                          |
| ------------------------------ | ------------------------ | ------------------------------------------------ |
| Фреймворк                      | React + TypeScript  | Одностраничное приложение                             |
| Сборщик                      | Webpack  | Быстрая сборка и dev-сервер                             |
| Стилизация                      | Tailwind CSS  | Утилитарная стилизация                             |
| Язык                      | TypeScript (strict)  | Во всём проекте                             |
Изображения | Vite asset imports + enum | Заглушка и удобная замена картинок

---

## Folder Structure

```/
├── context/
│   ├── project-overview.md
│   ├── architecture.md
│   ├── ui-tokens.md
│   ├── ui-rules.md
│   ├── ui-registry.md
│   ├── code-standards.md
│   ├── library-docs.md
│   ├── build-plan.md
│   └── progress-tracker.md
├── context/
│   └── designs/
│       ├── test-page.png                   → Макет страницы теста
│       └── colors-fonts.md                 → Шрифты и цвета
├── public/
│   └── images/                             → Все изображения (включая 1.png как заглушку)
├── src/
│   ├── main.tsx                            → Точка входа
│   ├── App.tsx                             → Корневой компонент, управляет состоянием теста
│   ├── components/
│   │   ├── StartScreen.tsx                 → Стартовый экран с кнопкой «Начать тест»
│   │   ├── QuestionCard.tsx                → Карточка вопроса с 4 вариантами
│   │   ├── ProgressBar.tsx                 → Индикатор прогресса
│   │   └── ResultScreen.tsx                → Экран результата
│   ├── data/
│   │   ├── questions.ts                    → Массив из 10 вопросов и вариантов ответов
│   │   └── results.ts                      → Описания типов и привязка к картинкам
│   ├── types/
│   │   └── index.ts                        → Типы: Letter, PersonalityType, Question, Answer
│   ├── enums/
│   │   └── images.ts                       → Enum с названиями всех изображений
│   └── styles/
│       └── index.css                       → Tailwind + переменные из colors-fonts.md
├── index.html
├── tailwind.config.ts
├── tsconfig.json
├── vite.config.ts
└── package.json
```
---

## System Boundaries

| Папка        | За что отвечает                                                                                                   |
| ------------- | ------------------------------------------------------------------------------------------------------ |
| `src/components/`        | Только UI. Никакой логики подсчёта.                                                         |
| `src/data/`      | Статические данные: вопросы, варианты, описания результатов. |
| `src/types/`    | Общие TypeScript-типы.                         |
| `src/enums/` | Enum с названиями изображений для удобной замены.                                                   |
| `src/App.tsx`        | Оркестрация: текущий вопрос, ответы, подсчёт, определение результата.                                       |
| `public/images/`      | Все картинки. Женские изображения заменены на 1.png.                                                            |

---

## Data Flow

### UI Mutations (Server Actions)

```
Пользователь открывает страницу
        ↓
Пользователь выбирает варианты (А / Б / В / Г)
        ↓
Ответы сохраняется в state
        ↓
После выбора ответа на всех вопросах — подсчёт букв
        ↓
Определяется преобладающий тип
        ↓
ResultScreen показывает название, описание и картинку
```

## Types
```
// Буква ответа
type Letter = "А" | "Б" | "В" | "Г";

// Тип личности
type PersonalityType = "Срывщик" | "Уставший" | "Теоретик" | "Перфекционист";

// Вариант ответа
interface AnswerOption {
  letter: Letter;
  text: string;
}

// Вопрос
interface Question {
  id: number;
  text: string;
  options: AnswerOption[]; // ровно 4
}

// Результат
interface TestResult {
  type: PersonalityType;
  description: string;
  image: ImageName;
}
```
## Enum images 
```
// src/enums/images.ts
export enum ImageName {
  Placeholder = "1.png",      // заглушка для женских изображений
  // ...остальные названия картинок из public/images
}

export const imagePath = (name: ImageName) => `/images/${name}`;
```
Все женские изображения в проекте рендерятся через ImageName.Placeholder. Позже достаточно заменить значение в enum на целевой файл.

## Style
Tailwind CSS

Шрифты и цвета берутся из context/designs/colors-fonts.md

CSS-переменные объявляются в src/styles/index.css

В компонентах не используются хардкод-цвета и произвольные hex-значения — только переменные
