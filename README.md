# ФАКТОРАМА

Платформа перевірки фактів і медіаграмотності. Користувачі можуть надсилати на перевірку підозрілу інформацію або фейки.

Стек: Django 5.2, SQLite, Tailwind CSS.

## Вимоги

- Python 3.10 або новіший

## Запуск

1. Створіть віртуальне оточення та встановіть залежності:

   ```bash
   python3 -m venv .venv
   .venv/bin/pip install -r requirements.txt
   ```

   На Windows замість `.venv/bin/` використовуйте `.venv\Scripts\`.

2. Створіть базу даних:

   ```bash
   .venv/bin/python manage.py migrate
   ```

3. Додайте адміністраторів:

   ```bash
   .venv/bin/python manage.py seed_admins
   ```

   Команду можна запускати повторно: вже наявних користувачів вона пропускає.

4. Запустіть сервер:

   ```bash
   .venv/bin/python manage.py runserver
   ```

5. Відкрийте в браузері:
   - http://127.0.0.1:8000/ — головна сторінка
   - http://127.0.0.1:8000/submit/ — форма надсилання фейку

## Структура проєкту

```
config/     налаштування Django та головні URL
pages/      головна сторінка, спільний шаблон, стилі та скрипти
reports/    заявки на перевірку фейків: модель, сторінка форми, API
users/      модель користувача та команда seed_admins
```

## База даних

- `users` — користувачі. Паролі зберігаються у вигляді хешу Argon2.
- `fake_reports` — заявки на перевірку. Статус: `pending`, `approved` або `rejected`. Поле `reviewed_by` вказує, хто з користувачів розглянув заявку.

Після зміни моделей створіть і застосуйте міграції:

```bash
.venv/bin/python manage.py makemigrations
.venv/bin/python manage.py migrate
```
