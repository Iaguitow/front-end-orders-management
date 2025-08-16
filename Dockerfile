FROM node:18

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY . .

# NÃO FAÇA build aqui — isso é só para produção!
# RUN yarn build

EXPOSE 3000

CMD ["yarn", "dev"]
