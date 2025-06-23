# Página de la Doctora

Sitio web profesional desarrollado con React, TypeScript y Vite para la consulta médica.

## 🚀 Despliegue en GitHub Pages

Este proyecto está configurado para desplegarse automáticamente en GitHub Pages.

### Configuración Inicial

1. **Actualizar el nombre del repositorio**: 
   - Cambia `[tu-usuario]` en `package.json` por tu nombre de usuario de GitHub
   - Ejemplo: `"homepage": "https://johndoe.github.io/pagina_doctora"`

2. **Habilitar GitHub Pages**:
   - Ve a Settings > Pages en tu repositorio
   - Source: Deploy from a branch
   - Branch: `gh-pages`
   - Folder: `/ (root)`

### Deploy Automático

El proyecto incluye GitHub Actions que se ejecutan automáticamente al hacer push a la rama `main`.

### Deploy Manual

```bash
# Instalar dependencias
npm install

# Build para producción
npm run build:prod

# Deploy (requiere gh-pages instalado globalmente)
npm run deploy:setup
npm run deploy
```

## 🛠️ Desarrollo

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build para desarrollo
npm run build:dev

# Preview del build
npm run preview
```

## 📁 Estructura del Proyecto

```
src/
├── components/     # Componentes reutilizables
├── pages/         # Páginas de la aplicación
├── hooks/         # Custom hooks
├── lib/           # Utilidades y configuraciones
└── main.tsx       # Punto de entrada
```

## 🔧 Tecnologías

- **React 18** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool y dev server
- **Tailwind CSS** - Framework de CSS
- **Radix UI** - Componentes accesibles
- **React Router** - Enrutamiento
- **React Query** - Manejo de estado del servidor

## 📝 Notas Importantes

- El proyecto está configurado para funcionar en la subruta `/pagina_doctora/` en GitHub Pages
- Las rutas están configuradas para manejar correctamente el routing de SPA
- El build está optimizado para producción con code splitting

## 🐛 Solución de Problemas

### Error 404 en rutas directas
- Verifica que el archivo `404.html` esté en la carpeta `public/`
- Asegúrate de que GitHub Pages esté configurado correctamente

### Assets no se cargan
- Verifica que la `base` URL en `vite.config.ts` coincida con el nombre del repositorio
- Asegúrate de que el `basename` en `App.tsx` esté configurado correctamente

### Build falla
- Verifica que todas las dependencias estén instaladas
- Ejecuta `npm run build:prod` para ver errores específicos
