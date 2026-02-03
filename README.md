# 💈 Dinasty Barber ASF – Sistema de Reservas Premium

Aplicación web moderna y elegante para gestión de citas en barbería premium, con panel administrativo completo.

## 🚀 Cómo Ejecutar la Aplicación

### Prerrequisitos
- **Node.js** versión 18 o superior
- **npm** versión 9 o superior

### Instalación y Ejecución

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Ejecutar en modo desarrollo:**
   ```bash
   npm run dev
   ```

3. **Abrir en el navegador:**
   ```
   http://localhost:3000
   ```

4. **Compilar para producción:**
   ```bash
   npm run build
   npm start
   ```

### 📱 Rutas Principales

- **Página Principal:** `http://localhost:3000`
- **Reservar Cita:** `http://localhost:3000/booking/service`
- **Blog:** `http://localhost:3000/blog`
- **Admin Login:** `http://localhost:3000/admin/login`
- **Panel Admin:** `http://localhost:3000/admin` (requiere login)

### 🔐 Acceso al Panel Administrativo

Para acceder al dashboard administrativo:
1. Ir a `http://localhost:3000/admin/login`
2. Usar cualquier email válido (ej: `admin@test.com`)
3. Contraseña de 6+ caracteres (ej: `password123`)

**Nota:** El sistema está en modo demo y acepta cualquier combinación válida de credenciales.

## ✨ Características Implementadas

### Página Principal
- ✅ Hero section con diseño premium
- ✅ Sección de características premium (Calidad, Puntualidad, Atención)
- ✅ Catálogo de servicios (Corte Signature, Barba Premium, Experiencia Total)
- ✅ Presentación del equipo de barberos
- ✅ Blog con artículos destacados
- ✅ Información de contacto

### Sistema de Login
- ✅ Validación de formulario (email y contraseña)
- ✅ Manejo de errores con mensajes claros
- ✅ Estados de carga durante autenticación
- ✅ Auto-logout después de 30 minutos de inactividad

### Dashboard Administrativo
- ✅ Estadísticas en tiempo real (citas, pagos, barberos)
- ✅ Indicadores de tendencia (+12%, -8%, etc.)
- ✅ Seguimiento de ingresos diarios y mensuales
- ✅ Lista de citas recientes con estados (Confirmada, En progreso, Pendiente)
- ✅ Acciones rápidas para tareas comunes
- ✅ Navegación lateral con secciones (Resumen, Servicios, Barberos, Citas, Pagos)

### Imágenes Premium
- ✅ Ilustraciones SVG personalizadas para todas las secciones
- ✅ Diseño profesional con paleta de colores oro (#C8A15A) y negro
- ✅ Efectos de iluminación y gradientes sofisticados

## 🛠️ Stack Tecnológico

- **Frontend:** Next.js 14 (React) + TypeScript
- **Estilos:** Tailwind CSS
- **Autenticación:** localStorage (cliente)
- **Imagenes:** SVG personalizado

## 📂 Estructura del Proyecto

```
.
├── app/                    # Aplicación Next.js
│   ├── page.tsx           # Página principal
│   ├── admin/             # Panel administrativo
│   │   ├── login/         # Login de admin
│   │   └── page.tsx       # Dashboard
│   ├── booking/           # Flujo de reservas
│   └── blog/              # Blog
├── components/            # Componentes reutilizables
│   ├── Layout.tsx         # Layout principal
│   └── admin/             # Componentes del admin
├── public/                # Archivos estáticos
│   └── images/            # Imágenes SVG premium
├── lib/                   # Utilidades y hooks
│   └── admin/             # Lógica de autenticación
└── styles/                # Estilos globales
```

## 🎨 Objetivos del Proyecto

- ⚡ Reservar en menos de 1 minuto con flujo claro
- 💎 Imagen moderna, elegante y profesional
- 🎯 Posicionamiento como barbería premium en el mercado
- 🔒 Panel administrativo seguro y funcional

## Estructura propuesta del proyecto
```
.
├── apps
│   └── api/               # Backend (API REST con Express)
├── app/                   # Frontend Next.js (incluye /admin)
├── apps/web/              # (Futuro) Frontend separado si se decide monorepo completo
├── packages
│   ├── ui/                # Componentes reutilizables
│   └── config/            # ESLint, Prettier, Tailwind
├── docs/                  # Documentación funcional y técnica
│   ├── architecture.md
│   ├── booking-logic.md
│   ├── data-model.md
│   ├── user-flows.md
│   ├── admin-panel.md
│   └── ux-ui-guidelines.md
└── README.md
```

## Entregables en esta fase
- **Modelo de datos** y relaciones principales.
- **Flujos de usuario** para el proceso de agendamiento.
- **Arquitectura propuesta** para el sistema.
- **Componentes principales** del frontend.
- **Lógica de agendamiento** y reglas de negocio.
- **Recomendaciones UX/UI** para un diseño premium.

Consulta el directorio `/docs` para el detalle.
