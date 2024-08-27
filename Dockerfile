# Usando a imagem oficial do Node.js
FROM node:18

# Definindo o diretório de trabalho na imagem
WORKDIR /app

# Copiando os arquivos package.json e package-lock.json
COPY package*.json ./

# Instalando as dependências
RUN npm install

# Copiando
COPY . .

# Compilando o código TypeScript
RUN npm run build

# Expondo a porta da aplicação
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["npm", "run", "start"]
