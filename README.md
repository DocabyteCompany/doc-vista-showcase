# Doc Vista Showcase

Sitio web de demostración desarrollado por [Docabyte](https://github.com/DocabyteCompany) para mostrar cómo puede verse la presencia online de un profesional de la salud. El ejemplo incluye una landing page de una cardióloga con secciones de servicios, perfil profesional, testimonios y contacto.

> **Nota:** El contenido (textos, imágenes y datos de contacto) es ficticio y sirve únicamente como referencia visual y técnica.

## ¿Qué incluye?

La página es una **single-page application (SPA)** con las siguientes secciones:

| Sección | Descripción |
|---------|-------------|
| **Hero** | Presentación principal con llamadas a la acción |
| **Services** | Catálogo de servicios médicos en tarjetas |
| **About** | Perfil profesional, credenciales y logros |
| **Testimonials** | Opiniones de pacientes |
| **Contact** | Formulario de contacto e información de la consulta |

## Requisitos previos

- [Node.js](https://nodejs.org/) 20.19+ o 22.12+ (requerido por Vite 8)
- npm (incluido con Node.js)

## Inicio rápido

```powershell
# Clonar el repositorio
git clone https://github.com/DocabyteCompany/doc-vista-showcase.git
cd doc-vista-showcase

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo (http://localhost:8080)
npm run dev
```

## Scripts disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo con recarga en caliente |
| `npm run build` | Build de producción |
| `npm run build:prod` | Build de producción (modo explícito) |
| `npm run preview` | Vista previa del build generado |
| `npm run lint` | Análisis estático con ESLint |
| `npm run deploy` | Build y publicación manual en GitHub Pages |

## Estructura del proyecto

```
doc-vista-showcase/
├── public/                  # Archivos estáticos (404.html para GitHub Pages)
├── src/
│   ├── components/          # Componentes de la landing (Hero, Services, etc.)
│   │   └── ui/              # Componentes base (shadcn/ui + Radix)
│   ├── pages/               # Páginas de la aplicación
│   ├── hooks/               # Hooks personalizados
│   ├── lib/                 # Utilidades compartidas
│   ├── App.tsx              # Enrutamiento y proveedores globales
│   └── main.tsx             # Punto de entrada
├── .github/workflows/       # CI/CD para despliegue automático
└── vite.config.ts           # Configuración de Vite y rutas base
```

## Tecnologías

- **React 18** + **TypeScript**
- **Vite** — bundler y servidor de desarrollo
- **Tailwind CSS** — estilos utilitarios
- **shadcn/ui** + **Radix UI** — componentes accesibles
- **React Router** — enrutamiento de la SPA
- **Lucide React** — iconografía

## Despliegue en GitHub Pages

El proyecto incluye un workflow de GitHub Actions (`.github/workflows/deploy.yml`) que compila y publica automáticamente en la rama `gh-pages` cada vez que se hace push a `main`.

### Configuración en GitHub

1. Ve a **Settings → Pages** en el repositorio.
2. En **Source**, selecciona la rama `gh-pages` y la carpeta `/ (root)`.
3. La URL de publicación será:

   ```
   https://docabytecompany.github.io/doc-vista-showcase/
   ```

### Alinear la ruta base

La ruta base de producción está configurada como `/doc-vista-showcase/` en:

- `vite.config.ts` → propiedad `base`
- `src/App.tsx` → variable `basename`
- `package.json` → campo `homepage`

Si renombras el repositorio, actualiza esos tres valores para que coincidan con el nuevo nombre.

### Despliegue manual

```powershell
npm install
npm run build:prod
npm run deploy
```

## Solución de problemas

### Error 404 al abrir una ruta directamente

GitHub Pages no enruta SPAs de forma nativa. El archivo `public/404.html` redirige las rutas al `index.html`. Verifica que exista y que GitHub Pages esté activo en la rama `gh-pages`.

### Los assets no cargan (CSS, JS o imágenes rotas)

La propiedad `base` en `vite.config.ts` y el `basename` en `App.tsx` deben coincidir con la ruta del repositorio en GitHub Pages (por ejemplo, `/doc-vista-showcase/`).

### El build falla

```powershell
npm install
npm run build:prod
```

Revisa los errores en consola. Suele deberse a dependencias sin instalar o errores de TypeScript.

## Licencia

Proyecto privado de Docabyte. Consulta con el equipo antes de reutilizar o redistribuir el código.
