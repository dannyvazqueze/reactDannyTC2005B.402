# 🚀 MyApp — React SPA con Vite + Material UI

Proyecto de práctica — Desarrollo Web. SPA con React, Vite, React Router DOM y Material UI.

## 📋 Requisitos cubiertos

| Requisito | Implementado en |
|-----------|----------------|
| Proyecto Vite | `npm create vite@latest my-app -- --template react` |
| React Router DOM | `npm i react-router-dom` |
| Navegación con vistas | `src/App.jsx` |
| Rutas protegidas | `src/components/ProtectedRoute.jsx` |
| Material UI | Todos los componentes |
| Barra de navegación (oculta en login) | `src/components/Navbar.jsx` |
| Vista de Login | `src/pages/Login.jsx` |
| Párrafo con variable dinámica | `src/pages/Home.jsx` |
| Botón que actualiza la variable | `src/pages/Home.jsx` |
| Componente botón personalizado | `src/components/CustomButton.jsx` |
| Login conectado a backend (API) | `src/pages/Login.jsx` — fetch a JSONPlaceholder |
| Logout en Navbar | `src/components/Navbar.jsx` |
| Pie de página | `src/components/Footer.jsx` |

## 🗂️ Estructura

```
src/
├── components/
│   ├── CustomButton.jsx
│   ├── Layout.jsx
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── ProtectedRoute.jsx
├── context/
│   └── AuthContext.jsx
├── hooks/
│   └── useCounter.js
├── pages/
│   ├── Login.jsx
│   ├── Home.jsx
│   ├── Dashboard.jsx
│   └── About.jsx
├── App.jsx
└── main.jsx
```

## 🚀 Instrucciones

```bash
npm install
npm run dev
```

## 🔑 Credenciales de prueba

Usuario: `Bret` | Contraseña: `123` (o Antonette, Samantha, etc.)

## 🛠️ Tecnologías

- React 18 + Hooks
- Vite
- React Router DOM v6
- Material UI v5
- JSONPlaceholder (API de prueba)
