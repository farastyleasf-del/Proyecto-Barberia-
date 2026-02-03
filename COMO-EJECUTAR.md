# 🚀 Guía Rápida de Inicio - Dinasty Barber ASF

## Cómo Levantar la Aplicación

### Paso 1: Abrir la Terminal
- En Windows: Presiona `Windows + R`, escribe `cmd` y presiona Enter
- En Mac: Presiona `Command + Espacio`, escribe `Terminal` y presiona Enter
- En Linux: Presiona `Ctrl + Alt + T`

### Paso 2: Navegar a la Carpeta del Proyecto
```bash
cd ruta/a/Proyecto-Barberia-
```

### Paso 3: Instalar Dependencias (Solo la Primera Vez)
```bash
npm install
```
⏱️ Esto tomará 1-2 minutos

### Paso 4: Iniciar el Servidor de Desarrollo
```bash
npm run dev
```

### Paso 5: Abrir en el Navegador
Verás un mensaje como este:
```
▲ Next.js 14.2.4
- Local:        http://localhost:3000
✓ Ready in 1329ms
```

Abre tu navegador web y ve a: **http://localhost:3000**

## 🎉 ¡Listo! Ya puedes ver la aplicación

### Qué puedes hacer ahora:

#### 1️⃣ Ver la Página Principal
- Dirección: `http://localhost:3000`
- Aquí verás el sitio web completo de la barbería

#### 2️⃣ Probar el Login de Administrador
- Dirección: `http://localhost:3000/admin/login`
- Email: `admin@test.com` (o cualquier email válido)
- Contraseña: `password123` (mínimo 6 caracteres)

#### 3️⃣ Ver el Dashboard Administrativo
- Después de hacer login, serás redirigido a: `http://localhost:3000/admin`
- Aquí verás estadísticas, citas, ingresos y más

## 🛑 Detener el Servidor

Cuando termines de trabajar:
1. Ve a la terminal donde está corriendo
2. Presiona `Ctrl + C`
3. Confirma con `Y` si te pregunta

## ⚠️ Problemas Comunes

### "comando npm no encontrado"
**Solución:** Necesitas instalar Node.js
- Descarga desde: https://nodejs.org/
- Instala la versión LTS (recomendada)
- Reinicia la terminal después de instalar

### "Puerto 3000 ya en uso"
**Solución:** Ya hay algo corriendo en el puerto 3000
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID [número] /F

# Mac/Linux
lsof -ti:3000 | xargs kill
```

### Los cambios no se ven reflejados
**Solución:** 
1. Guarda el archivo
2. Espera 1-2 segundos (el servidor recarga automáticamente)
3. Refresca el navegador con `F5` o `Ctrl + R`

## 📝 Comandos Útiles

```bash
# Iniciar en modo desarrollo (con hot-reload)
npm run dev

# Verificar errores de código
npm run lint

# Compilar para producción
npm run build

# Iniciar en modo producción (después de build)
npm start
```

## 🎨 Explorar las Páginas

| Ruta | Descripción |
|------|-------------|
| `/` | Página principal con servicios |
| `/booking/service` | Selección de servicio |
| `/booking/barber` | Selección de barbero |
| `/booking/datetime` | Selección de fecha/hora |
| `/booking/confirm` | Confirmación de reserva |
| `/blog` | Blog de la barbería |
| `/admin/login` | Login administrativo |
| `/admin` | Dashboard principal |
| `/admin/services` | Gestión de servicios |
| `/admin/barbers` | Gestión de barberos |
| `/admin/appointments` | Gestión de citas |
| `/admin/payments` | Gestión de pagos |

## 💡 Consejos

- **Hot Reload:** Los cambios en el código se reflejan automáticamente sin reiniciar
- **Consola del Navegador:** Presiona `F12` para ver errores o mensajes
- **Modo Incógnito:** Útil para probar sin caché del navegador
- **Auto-logout:** Si estás inactivo 30 minutos en admin, se cierra la sesión automáticamente

## 📞 ¿Necesitas Ayuda?

Si tienes problemas:
1. Revisa que Node.js esté instalado: `node --version`
2. Revisa que npm esté instalado: `npm --version`
3. Asegúrate de estar en la carpeta correcta del proyecto
4. Verifica que el puerto 3000 esté libre

---

**¡Disfruta desarrollando tu barbería premium! 💈✨**
