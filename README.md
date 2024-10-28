# Microservicios con NestJS y RabbitMQ

Este proyecto implementa varios microservicios utilizando **NestJS** en un entorno de microservicios. Cada microservicio realiza un cálculo específico, como determinar si un número es par o primo, calcular su factorial, la suma de enteros hasta `n`, la secuencia de Fibonacci, y los factores de un número. La mensajería entre los microservicios se gestiona con **RabbitMQ**.

## Requisitos Previos

Asegúrate de tener los siguientes programas instalados en tu máquina:

- **Git** – Para clonar el proyecto.
- **Node.js** – Instalación recomendada: LTS (Long-Term Support).
- **Docker y Docker Compose** – Para ejecutar RabbitMQ y los microservicios en contenedores.

## Instrucciones de Instalación

### Paso 1: Descargar el Proyecto

Descarga el proyecto con el metodo que deseas

### Paso 2: Instalar las Dependencias

Instala las dependencias utilizando **npm**, **yarn** o **pnpm**:

```bash
npm install
```

Si prefieres **yarn**:

```bash
yarn install
```

Si prefieres **pnpm**:

```bash
pnpm install
```

### Paso 3: Levantar RabbitMQ con Docker

Asegúrate de tener **Docker** corriendo y luego ejecuta:

```bash
docker-compose up -d
```

Este comando:

- Levanta **RabbitMQ** y lo deja corriendo en segundo plano.
- Levanta todos los microservicios automáticamente.

Puedes verificar si RabbitMQ está funcionando correctamente accediendo a:

```
http://localhost:15672
```

- **Usuario:** `guest`
- **Contraseña:** `guest`

### Paso 4: Prueba de la API con Postman

Usa **Postman** para probar la API REST.

#### Ejemplo de Solicitud:

- **Método:** `POST`
- **URL:** `http://localhost:3000/calculate`
- **Body (JSON):**
  ```json
  { "number": 5 }
  ```

#### Respuesta Esperada:

```json
{
  "isPair": false,
  "isPrime": true,
  "factorial": 120,
  "sumN": 15,
  "fibonacci": [0, 1, 1, 2, 3, 5],
  "factors": [1, 5]
}
```

## Tecnologías Utilizadas

- **NestJS** – Framework para construir aplicaciones de backend escalables.
- **RabbitMQ** – Sistema de mensajería para la comunicación entre microservicios.
- **Docker** – Contenedorización de los servicios.
- **TypeScript** – Lenguaje utilizado para el desarrollo del proyecto.

## Licencia

Este proyecto está bajo la licencia MIT.
