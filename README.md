# Velhio Web

Web de Velhio — tartas de queso artesanales. Construida con React + Vite.

## Cómo usar en local (VSCode)

### 1. Instala Node.js (solo la primera vez)
Descarga Node.js desde https://nodejs.org — elige la versión "LTS"

### 2. Abre la carpeta en VSCode
Archivo → Abrir Carpeta → selecciona esta carpeta `velhio-web`

### 3. Abre la Terminal integrada
Terminal → Nueva Terminal (o Ctrl + `)

### 4. Instala las dependencias (solo la primera vez)
```
npm install
```

### 5. Arranca el servidor local
```
npm run dev
```

Se abrirá en http://localhost:5173 — la web se actualiza automáticamente al guardar cambios.

## Estructura de carpetas

```
velhio-web/
├── src/
│   ├── App.jsx              ← componente principal
│   ├── main.jsx             ← punto de entrada
│   ├── styles.css           ← estilos globales
│   ├── assets/              ← datos JSON
│   └── components/
│       ├── Hero.jsx         ← sección inicio
│       ├── History.jsx      ← sección historia
│       ├── MeltingTarts.jsx ← animación tartas
│       ├── WheelNav.jsx     ← menú navegación
│       ├── Sections.jsx     ← carta, favoritas, contacto...
│       ├── TartIllustrations.jsx ← ilustraciones SVG
│       └── TweaksPanel.jsx  ← panel modo día/noche
├── public/
│   └── (aquí van tus fotos)
├── index.html
├── package.json
└── vite.config.js
```

## Subir a Vercel

1. Sube esta carpeta a GitHub
2. Ve a vercel.com → New Project → importa el repositorio
3. Vercel detecta Vite automáticamente → pulsa Deploy
4. ¡Listo! Tu web estará en velhio-web.vercel.app
