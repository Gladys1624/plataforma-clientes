# Plataforma Clientes — Seguridad y continuidad

## Arquitectura V1
- La aplicación está separada de los datos.
- Los datos operativos se almacenan en IndexedDB del navegador.
- Se incluye respaldo completo JSON y restauración.
- Se mantiene un registro de auditoría de operaciones principales.
- Se crean seis carpetas raíz por empresa y subcarpetas ilimitadas.
- Se incluye migración desde versiones locales anteriores cuando están disponibles.

## Regla de actualización
Nunca reemplazar ni borrar la base de datos del usuario durante una actualización. Antes de cambios estructurales, generar un respaldo.

## Importante
Para operación multiusuario, almacenamiento central de archivos, autenticación real y sincronización entre equipos, se requiere un backend/base de datos y almacenamiento de objetos. Esta versión no simula esa infraestructura.
