# Microservicios con NestJS y RabbitMQ

Este proyecto implementa varios microservicios utilizando **NestJS** en un entorno de microservicios. Cada microservicio realiza un cálculo específico, como determinar si un número es par o primo, calcular su factorial, la suma de enteros hasta `n`, la secuencia de Fibonacci, y los factores de un número. La mensajería entre los microservicios se gestiona con **RabbitMQ**.

## Requisitos Previos

Asegúrate de tener los siguientes programas instalados en tu máquina:

- **Git** - Para clonar el proyecto.
- **Node.js** - Instalación recomendada: LTS (Long-Term Support).
- **Docker y Docker Compose** - Para ejecutar RabbitMQ, la aplicación principal y los microservicios en contenedores.
- **Postman** - Herramienta para probar la API REST.

## Instrucciones de Instalación

### 1. Clonar el Repositorio

```bash
git clone <URL_DEL_REPOSITORIO>
cd <nombre_del_proyecto>
```

### 2. Instalar Dependencias

```bash
npm install
```

### 3. Configurar Variables de Entorno

```bash
echo "RABBITMQ_URL=amqp://guest:guest@rabbitmq:5672" > .env
```

### 4. Levantar con Docker Compose

```bash
docker-compose up -d
```

Este comando:

- Levanta **RabbitMQ** en segundo plano.
- Ejecuta la **aplicación principal** junto con los **microservicios** automáticamente.

Puedes verificar si **RabbitMQ** está funcionando correctamente accediendo a:

```
http://localhost:15672
```

- Usuario: `guest`
- Contraseña: `guest`

### 5. Prueba de la API con Postman

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

## Estructura del Proyecto

```
<nombre_del_proyecto>/
│
├── apps/
│   ├── fibonacci/
│   ├── factorial/
│   ├── prime/
│   ├── sumN/
│   ├── factors/
├── docker-compose.yml
├── package.json
├── .env
└── README.md
```

## Comandos Útiles

- **Reiniciar RabbitMQ**:

  ```bash
  docker-compose restart
  ```

- **Ver Logs de RabbitMQ**:

  ```bash
  docker-compose logs -f rabbitmq
  ```

- **Parar todos los servicios**:
  ```bash
  docker-compose down
  ```

## Tecnologías Utilizadas

- **NestJS** - Framework de backend escalable.
- **RabbitMQ** - Sistema de mensajería.
- **Docker** - Contenedorización de servicios.
- **TypeScript** - Lenguaje de desarrollo.
- **Postman** - Pruebas API REST.

## Contribuciones

1. Hacer un **fork** del repositorio.
2. Crear una nueva rama:
   ```bash
   git checkout -b nueva-funcionalidad
   ```
3. Realizar cambios y hacer un **commit**:
   ```bash
   git commit -m "Descripción de los cambios"
   ```
4. Hacer **push**:
   ```bash
   git push origin nueva-funcionalidad
   ```
5. Crear un **pull request**.

## Licencia

Este proyecto está bajo la licencia [MIT](https://opensource.org/licenses/MIT).
