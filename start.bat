@echo off
echo 🚀 Iniciando Dinasty Barber ASF...
echo.

REM Verificar si Node.js está instalado
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ Error: Node.js no está instalado
    echo Por favor, instala Node.js desde https://nodejs.org/
    pause
    exit /b 1
)

REM Verificar si npm está instalado
where npm >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ Error: npm no está instalado
    echo Por favor, instala npm (viene con Node.js)
    pause
    exit /b 1
)

echo ✅ Node.js instalado
echo ✅ npm instalado
echo.

REM Verificar si node_modules existe
if not exist "node_modules\" (
    echo 📦 Instalando dependencias...
    echo Esto puede tomar 1-2 minutos...
    call npm install
    if %errorlevel% neq 0 (
        echo ❌ Error al instalar dependencias
        pause
        exit /b 1
    )
    echo ✅ Dependencias instaladas
    echo.
)

echo 🌟 Iniciando servidor de desarrollo...
echo.
echo La aplicación estará disponible en:
echo    👉 http://localhost:3000
echo.
echo Páginas disponibles:
echo    • Inicio:        http://localhost:3000
echo    • Admin Login:   http://localhost:3000/admin/login
echo    • Dashboard:     http://localhost:3000/admin
echo.
echo Para detener el servidor, presiona Ctrl+C
echo ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
echo.

call npm run dev
