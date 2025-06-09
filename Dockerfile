FROM node:22-alpine

RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . .


EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]
