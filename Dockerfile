FROM node:18-alpine

WORKDIR /app

# Копируем зависимости
COPY package.json package-lock.json ./

# Устанавливаем зависимости (включая devDependencies)
RUN npm install

# Копируем исходный код
COPY . .

# Определяем переменные окружения
ARG VITE_BACKEND_URL
ARG VITE_ALLOWED_HOST
ENV VITE_BACKEND_URL=$VITE_BACKEND_URL
ENV VITE_ALLOWED_HOST=$VITE_ALLOWED_HOST

ENV NODE_ENV=development

# Открываем порт и запускаем dev-сервер
EXPOSE 3000
CMD ["npm", "run", "dev"]
