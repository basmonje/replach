# Replach

> Proyecto final para Curso de React de Escalab Academy. Replach es una app de imágenes gratuitas construida con React y Unsplash.

# Instalación

Clonar repositorio

```
git clone https://github.com/basmonje/replach.git
```

Instalar dependencias

```
npm install
```

# Configurar variable de entorno

Crear un archivo `.env` y agregar la variable `API_KEY_UNSPLASH` con tu `secret key`.

Ejemplo:

```.env
API_KEY_UNSPLASH=*****YOUR_SECRET_KEY*****
```

> Importante ⚠ Sin la llave secreta no podremos realizar peticiones a la API de Unsplash, [conseguir clave secreta](https://unsplash.com/developers).
# Características

| Descripción            | Elección   |
| ---------------------- | ---------- |
| Peticiones HTTP        | `fetch`    |
| Patrón de Arquitectura | `Context`  |
| API                    | `Unsplash` |

# Rutas

- Home - Lista de imágenes aleatorias
- Photo - Ver detalles de imágen por `:id`
- SearchPhotos - Buscar imágenes por `:query`
- Collections - Lista de colecciones
- Collection - Ver detalles de colección por `:id`
- SearchCollections - Buscar colecciones por `:query`

# Investigar: Limites de errores

Los límites de errores nos ayudan a capturar los errores en nuestra aplicación, así podemos entregar una mejor experiencia de usuario mostrando información acerca del error que ha ocurrido, de lo contrario nuestra app se rompería.
