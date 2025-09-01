# FETarjetaCredito

Este proyecto es una aplicación web para la gestión de tarjetas de crédito. Incluye un backend desarrollado en .NET y un frontend construido con Angular.

## Tabla de Contenidos

- [Características](#características)
- [Tecnologías](#tecnologías)
- [Instalación](#instalación)
  - [Backend](#backend)
  - [Frontend](#frontend)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [API REST](#api-rest)
- [Testing](#testing)
- [Licencia](#licencia)

---

## Características

- Listado, alta, edición y eliminación de tarjetas de crédito.
- Validación de formularios en frontend.
- API RESTful para operaciones CRUD.
- Interfaz moderna con Bootstrap y FontAwesome.

## Tecnologías

- **Backend:** .NET 8, Entity Framework Core, SQL Server
- **Frontend:** Angular 16+, Bootstrap, FontAwesome
- **Base de datos:** Archivo `.bacpac` para despliegue en SQL Server

## Instalación

### Backend

1. **Requisitos previos:**
   - .NET 8 SDK
   - SQL Server (local o remoto)

2. **Configuración de la base de datos:**
   - Restaura el archivo `TarjetaCreditoDB.bacpac` en tu instancia de SQL Server.

3. **Configuración de la API:**
   - Edita `Backend/Backend/appsettings.json` para ajustar la cadena de conexión a tu base de datos.

4. **Compilación y ejecución:**
   ```sh
   cd Backend/Backend
   dotnet build
   dotnet run
   ```
   La API estará disponible en `https://localhost:44339/`.

### Frontend

1. **Requisitos previos:**
   - Node.js (v18+ recomendado)
   - Angular CLI (`npm install -g @angular/cli`)

2. **Instalación de dependencias:**
   ```sh
   cd Frontend
   npm install
   ```

3. **Ejecución en modo desarrollo:**
   ```sh
   ng serve
   ```
   Accede a la aplicación en [http://localhost:4200](http://localhost:4200).

## Uso

- En la pantalla principal puedes agregar, editar y eliminar tarjetas de crédito.
- El formulario valida los campos antes de permitir el envío.
- El listado muestra todas las tarjetas registradas y permite editar o eliminar cada una.

## Estructura del Proyecto

```
FETarjetaCredito/
├── Backend/
│   └── Backend/
│       ├── Controllers/
│       ├── Migrations/
│       ├── Models/
│       ├── AplicationDbContext.cs
│       ├── Program.cs
│       └── appsettings.json
├── Frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── component/
│   │   │   │   └── tarjeta-credito/
│   │   │   └── services/
│   │   │       └── tarjeta.service.ts
│   ├── angular.json
│   └── package.json
└── TarjetaCreditoDB.bacpac
```

## API REST

La API expone los siguientes endpoints en `https://localhost:44339/api/Tarjeta/`:

- `GET /api/Tarjeta` — Listar todas las tarjetas
- `POST /api/Tarjeta` — Crear una nueva tarjeta
- `PUT /api/Tarjeta/{id}` — Actualizar una tarjeta existente
- `DELETE /api/Tarjeta/{id}` — Eliminar una tarjeta

### Ejemplo de objeto Tarjeta

```json
{
  "id": 1,
  "titular": "Juan Pérez",
  "numeroTarjeta": "1234567890123456",
  "fechaExpiracion": "12/25",
  "cvv": "123"
}
```

## Testing

### Backend

- Ejecuta los tests con:
  ```sh
  dotnet test
  ```

### Frontend

- Ejecuta los tests unitarios con:
  ```sh
  ng test
  ```
- Para pruebas end-to-end:
  ```sh
  ng e2e
  ```

## Licencia

Este proyecto está bajo la licencia MIT.

---

**Autor:** Maldonado  
**Repositorio:**