# 📸 Galería Visual - Dinasty Barber ASF

Esta guía visual te muestra cómo se ve la aplicación y cómo usarla.

## 🏠 Página Principal (Homepage)

**URL:** `http://localhost:3000`

### Hero Section
- Logo de la barbería "Dinasty barber ASF"
- Título principal con llamado a la acción
- Imagen premium del ambiente de barbería
- Botones para "Reservar cita" y "Contacto"

### Sección Premium
Destacamos 3 valores únicos:
1. ⭐ **Calidad Garantizada** - Productos premium y técnicas certificadas
2. ⏰ **Puntualidad Asegurada** - Sin esperas innecesarias
3. 👥 **Atención Exclusiva** - Ambiente personalizado

### Servicios Ofrecidos
1. **Corte Signature** (45 min)
   - Diseño personalizado
   - Precisión milimétrica
   
2. **Barba Premium** (30 min)
   - Ritual con toallas calientes
   - Aceites esenciales
   
3. **Experiencia Total** (75 min)
   - Corte + barba + masaje facial

### Equipo
- Alejandro Silva - Master Barber
- Fernando Cruz - Senior Barber  
- Sebastián Ríos - Style Curator

### Blog
- Guía definitiva para cuidar tu barba
- Tendencias de cortes premium 2024

---

## 🔐 Página de Login

**URL:** `http://localhost:3000/admin/login`

### Características:
- ✅ Formulario de login con validación
- ✅ Campo de email (requiere formato válido)
- ✅ Campo de contraseña (mínimo 6 caracteres)
- ✅ Mensajes de error en español
- ✅ Estado de carga "Ingresando..."
- ✅ Diseño profesional con icono branded

### Cómo acceder:
```
Email: admin@test.com (cualquier email válido)
Contraseña: password123 (6+ caracteres)
```

**Nota:** Sistema en modo demo - acepta cualquier credencial válida.

---

## 📊 Dashboard Administrativo

**URL:** `http://localhost:3000/admin` (requiere login)

### Panel de Control

#### 1. Estadísticas Principales
- **Citas hoy:** 24 (+12% ↗️)
- **Pagos pendientes:** 5 (-8% ↘️)
- **Barberos activos:** 3 (0%)

#### 2. Ingresos
- **Hoy:** $1,250.00
- **Mes:** $28,400.00 / $30,000 meta

#### 3. Citas Recientes
Lista con:
- Nombre del cliente
- Servicio contratado
- Barbero asignado
- Hora de la cita
- Estado (Confirmada / En progreso / Pendiente)

Ejemplo:
```
Juan Pérez
Corte Signature · Alejandro Silva
10:00 AM  [Confirmada]

Carlos Ruiz
Barba Premium · Fernando Cruz
11:30 AM  [En progreso]

Miguel Torres
Experiencia Total · Sebastián Ríos
2:00 PM   [Pendiente]
```

#### 4. Acciones Rápidas
- 🆕 Agregar cita
- 💰 Ver todos los pagos
- ⚙️ Gestionar servicios
- 📈 Ver reportes

### Navegación Lateral
- Resumen (página actual)
- Servicios
- Barberos
- Citas
- Pagos
- Botón "Cerrar sesión"

---

## 🎨 Paleta de Colores

La aplicación usa una paleta profesional:

- **Oro Premium:** `#C8A15A` - Para acentos y elementos destacados
- **Negro Profundo:** `#0B0B0D` - Fondo principal
- **Gris Grafito:** `#14151A` - Elementos secundarios
- **Blanco:** `#FFFFFF` - Texto principal

---

## 🖼️ Imágenes Premium

Todas las imágenes son SVG personalizados:

### Hero Image
- Silla de barbero profesional
- Herramientas (tijeras, peine, navaja)
- Espejo con marco dorado
- Efectos de iluminación ambiente

### Services Image
- Tres categorías de servicio
- Iconos personalizados para cada una
- Diseño minimalista y elegante

### Team Image
- Tres barberos profesionales
- Badges con roles y especialidades
- Efectos de spotlight

### Blog Images
- Productos de cuidado de barba
- Estilos de corte clásico y moderno
- Ilustraciones detalladas

---

## 📱 Responsive Design

La aplicación se adapta a diferentes tamaños de pantalla:
- 📱 Móvil (< 768px)
- 💻 Tablet (768px - 1024px)
- 🖥️ Desktop (> 1024px)

---

## ⚡ Características Técnicas

### Performance
- ⚡ Carga rápida con Next.js 14
- 🎨 Estilos optimizados con Tailwind CSS
- 📦 Imágenes SVG para máxima calidad

### Seguridad
- 🔒 Validación de formularios
- ⏱️ Auto-logout después de 30 min de inactividad
- 🛡️ Protección de rutas administrativas

### UX/UI
- ✨ Animaciones suaves
- 🎯 Navegación intuitiva
- 📝 Mensajes claros de error
- ⌨️ Accesibilidad con teclado

---

## 🌐 Navegación Completa

```
Proyecto-Barberia-/
│
├── Homepage (/)
│   ├── Hero Section
│   ├── Premium Features
│   ├── Servicios (#servicios)
│   ├── Equipo (#equipo)
│   ├── Blog Preview
│   └── Contacto (#contacto)
│
├── Booking Flow (/booking/)
│   ├── Service Selection (/booking/service)
│   ├── Barber Selection (/booking/barber)
│   ├── DateTime Selection (/booking/datetime)
│   └── Confirmation (/booking/confirm)
│
├── Blog (/blog)
│   └── Artículos de barbería
│
└── Admin Panel (/admin)
    ├── Login (/admin/login)
    ├── Dashboard (/admin)
    ├── Services (/admin/services)
    ├── Barbers (/admin/barbers)
    ├── Appointments (/admin/appointments)
    └── Payments (/admin/payments)
```

---

## 💡 Tips de Uso

1. **Primera vez:** Usa `npm install` para instalar dependencias
2. **Desarrollo:** Usa `npm run dev` para iniciar el servidor
3. **Login:** Prueba con `admin@test.com` / `password123`
4. **Hot Reload:** Los cambios se reflejan automáticamente
5. **Puerto ocupado:** Si el 3000 está en uso, Next.js te ofrecerá el 3001

---

**¡Disfruta explorando la aplicación! 💈✨**
