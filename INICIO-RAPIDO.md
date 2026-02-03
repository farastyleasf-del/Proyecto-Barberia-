# ⚡ INICIO RÁPIDO - 3 Pasos

## 🎯 Lo que necesitas saber

Esta aplicación es un sitio web para una barbería premium con:
- ✨ Página principal elegante
- 📅 Sistema de reservas
- 🔐 Panel administrativo
- 💼 Dashboard con estadísticas

---

## 🚀 MÉTODO 1: Inicio Automático (Recomendado)

### En Windows
1. Hacer doble clic en: `start.bat`
2. Esperar que se abra la consola
3. Ir a: http://localhost:3000

### En Mac o Linux
1. Abrir Terminal
2. Ejecutar: `./start.sh`
3. Ir a: http://localhost:3000

---

## 💻 MÉTODO 2: Inicio Manual

### Paso 1: Abrir Terminal/CMD
- **Windows:** Presiona `Win + R`, escribe `cmd`, Enter
- **Mac:** Presiona `Cmd + Espacio`, escribe "Terminal", Enter
- **Linux:** Presiona `Ctrl + Alt + T`

### Paso 2: Ir a la carpeta del proyecto
```bash
cd ruta/donde/descargaste/Proyecto-Barberia-
```

### Paso 3: Instalar (solo primera vez)
```bash
npm install
```
⏱️ Espera 1-2 minutos

### Paso 4: Iniciar
```bash
npm run dev
```

### Paso 5: Abrir navegador
```
http://localhost:3000
```

---

## 🎮 ¿Qué puedo hacer?

### 1️⃣ Ver el sitio web
```
http://localhost:3000
```
- Página principal con servicios
- Información de barberos
- Blog
- Contacto

### 2️⃣ Acceder al panel admin
```
http://localhost:3000/admin/login
```
**Credenciales:**
- Email: `admin@test.com`
- Contraseña: `password123`

### 3️⃣ Ver estadísticas
```
http://localhost:3000/admin
```
(Después de hacer login)
- Citas del día
- Ingresos
- Pagos pendientes
- Lista de citas

---

## 🛑 Para detener

En la consola donde está corriendo:
1. Presiona `Ctrl + C`
2. Si pregunta algo, escribe `Y` y Enter

---

## ❗ ¿Problemas?

### "npm no encontrado"
👉 Instala Node.js desde: https://nodejs.org/

### "Puerto 3000 en uso"
👉 Algo más está usando el puerto. Opciones:
1. Cierra otras aplicaciones en desarrollo
2. Reinicia tu computadora
3. Usa otro puerto: `npm run dev -- -p 3001`

### "Los cambios no se ven"
👉 Refresca el navegador con `F5` o `Ctrl + R`

---

## 📁 Archivos importantes

```
Proyecto-Barberia-/
├── 📖 README.md           ← Documentación completa
├── 🇪🇸 COMO-EJECUTAR.md   ← Guía paso a paso (este archivo)
├── 🎨 GUIA-VISUAL.md      ← Descripción visual
├── ⚡ start.bat           ← Inicio Windows
├── ⚡ start.sh            ← Inicio Mac/Linux
├── 📦 package.json        ← Configuración npm
└── 📂 app/                ← Código de la aplicación
```

---

## 🎓 Comandos útiles

```bash
# Ver si Node está instalado
node --version

# Ver si npm está instalado  
npm --version

# Instalar dependencias
npm install

# Iniciar desarrollo
npm run dev

# Verificar errores
npm run lint

# Compilar para producción
npm run build

# Iniciar en producción
npm start
```

---

## 🌐 Todas las páginas

| URL | Descripción |
|-----|-------------|
| `/` | Inicio |
| `/booking/service` | Reservar - Paso 1 |
| `/booking/barber` | Reservar - Paso 2 |
| `/booking/datetime` | Reservar - Paso 3 |
| `/booking/confirm` | Reservar - Paso 4 |
| `/blog` | Blog |
| `/admin/login` | Login admin |
| `/admin` | Dashboard |
| `/admin/services` | Gestión servicios |
| `/admin/barbers` | Gestión barberos |
| `/admin/appointments` | Gestión citas |
| `/admin/payments` | Gestión pagos |

---

## ✨ ¡Listo!

**Ahora puedes:**
- ✅ Ver la aplicación funcionando
- ✅ Explorar todas las páginas
- ✅ Acceder al panel admin
- ✅ Modificar el código (auto-recarga)

**Disfruta tu barbería premium! 💈**
