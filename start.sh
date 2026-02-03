#!/bin/bash

echo "🚀 Iniciando Dinasty Barber ASF..."
echo ""

# Verificar si Node.js está instalado
if ! command -v node &> /dev/null
then
    echo "❌ Error: Node.js no está instalado"
    echo "Por favor, instala Node.js desde https://nodejs.org/"
    exit 1
fi

# Verificar si npm está instalado
if ! command -v npm &> /dev/null
then
    echo "❌ Error: npm no está instalado"
    echo "Por favor, instala npm (viene con Node.js)"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo "✅ npm version: $(npm --version)"
echo ""

# Verificar si node_modules existe
if [ ! -d "node_modules" ]; then
    echo "📦 Instalando dependencias..."
    echo "Esto puede tomar 1-2 minutos..."
    npm install
    if [ $? -ne 0 ]; then
        echo "❌ Error al instalar dependencias"
        exit 1
    fi
    echo "✅ Dependencias instaladas"
    echo ""
fi

echo "🌟 Iniciando servidor de desarrollo..."
echo ""
echo "La aplicación estará disponible en:"
echo "   👉 http://localhost:3000"
echo ""
echo "Páginas disponibles:"
echo "   • Inicio:        http://localhost:3000"
echo "   • Admin Login:   http://localhost:3000/admin/login"
echo "   • Dashboard:     http://localhost:3000/admin"
echo ""
echo "Para detener el servidor, presiona Ctrl+C"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

npm run dev
