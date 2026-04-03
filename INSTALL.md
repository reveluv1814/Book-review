# Guía de Instalación

Esta guía cubre el proceso completo de instalación, configuración y ejecución del proyecto.

## Instalación

### 1. Clonar repositorio

```bash
git clone https://github.com/reveluv1814/Book-review.git
cd Book-review
```

### 2. Configuración de variables de entorno

```bash
cp .env.sample .env
```

### 3. Instalar dependencias

```bash
npm ci
```

### 4. Variables de entorno

El proyecto incluye un archivo `.env` con la siguiente configuración:

```bash
# .env
POSTGRES_URL=url_conection_postgres
JWT_SECRET=mi_secreto_para_jwt
```

Asegúrate de reemplazar `url_conection_postgres` con la URL de conexión a tu base de datos PostgreSQL y `mi_secreto_para_jwt` con un secreto seguro para la generación de JWT.

## Ejecución

### Modo desarrollo

```bash
npm run dev
```

La aplicación estará disponible en: `http://localhost:3000/`

### Modo producción

Primero se debe construir la aplicación y después iniciar el servidor:

```bash
npm run build

npm run start
```

La aplicación estará disponible en el puerto `3000`

### Postgres en Railway

1. Crea un nuevo proyecto en Railway y selecciona PostgreSQL como tu base de datos.
2. Railway proporcionará dos URL de conexión para tu base de datos.
3. La URL publica es para conectarse a la base de datos desde tu app. La URL intrena es para conectarse desde el entorno de Railway.
4. Copia la URL y modifica tu variable de entorno `POSTGRES_URL` en tu archivo `.env`.

### Deploy en Railway

Para desplegar en Railway, sigue estos pasos:

1. Crea un nuevo proyecto en Railway y conecta tu repositorio de GitHub.
2. Configura las variables de entorno en Railway con los mismos valores que en `.env`.

```bash
# .env
POSTGRES_URL=url_conection_postgres # Debe ser la URL interna
JWT_SECRET=mi_secreto_para_jwt
```

3. Railway detectará automáticamente el proyecto y ejecutará los comandos de construcción y despliegue.

4. Una vez desplegado, podrás acceder a la aplicación a través del enlace proporcionado por Railway.

### Pruebas e2e con Playwright

Para ejecutar las pruebas end-to-end, primero instala los navegadores necesarios con:

```bash
npx playwright install

```

Si ya lo tienes instalado, puedes ejecutar las pruebas con:

```bash
npm run test:e2e
```

**Otros scripts disponibles:**

```bash
npm run lint # Ejecuta ESLint para revisar el código
npm run format # Formatea el código con Prettier
npm run format:check # Verifica el formato del código sin modificarlo
npm run test:codegen # Live codegen para los tests e2e
```

### Estructura del Proyecto

El proyecto sigue la estructura estándar de Next.js con una carpeta `src` que contiene el código fuente. Las rutas de la API se encuentran en `src/app/api`, mientras que los componentes y páginas están organizados dentro de `src/app`.

Se tienen las carpetas:

- `src/` carpeta source.
  - `app/` para las páginas y rutas de la aplicación.
  - `components/` para los componentes reutilizables de la interfaz de usuario.
  - `lib/` para las funciones de utilidad y configuración de la base de datos.
  - `hooks/` para los hooks personalizados de React.
  - `context/` para los contextos de React, como el de autenticación.
  - `types/` para los tipos de TypeScript.
  - `db/` esquema de la bd

- `tests/e2e` para las pruebas e2e con Playwright.
