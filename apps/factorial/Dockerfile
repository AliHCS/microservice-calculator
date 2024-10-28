# Etapa de desarrollo y construcción
FROM node:20

# Configurar el directorio de trabajo
WORKDIR /usr/src/app

# Instalar pnpm globalmente
RUN npm install -g pnpm

# Copiar archivos de dependencias y bloquear versiones
COPY package*.json pnpm-lock.yaml ./

# Instalar todas las dependencias (sin ejecutar postinstalls)

RUN pnpm install

# Copiar todo el código fuente al contenedor
COPY . .

# Construir el proyecto
RUN pnpm build factorial

# Expose the application port
EXPOSE 3003

# Comando para ejecutar la aplicación
CMD ["node", "dist/apps/factorial/main"]
