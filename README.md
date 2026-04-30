# Users Refactoring Task

Небольшое React-приложение на Vite для загрузки и фильтрации пользователей из JSONPlaceholder.

## Что сделано

- исправлен бесконечный `useEffect`;
- добавлены состояния загрузки и ошибки;
- запрос вынесен в `src/services/userService.js`;
- создан кастомный хук `src/hooks/useFetch.js`;
- интерфейс разбит на `SearchInput` и `UserList`;
- фильтрация пользователей оптимизирована через `useMemo`;
- добавлены placeholder, пустое состояние и базовая адаптивная верстка.

## Запуск

```bash
npm install
npm run dev
```

## Проверка

```bash
npm run lint
npm run build
```
