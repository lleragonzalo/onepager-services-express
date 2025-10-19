# 📅 Setup de Calendly - Guía Rápida

## ✅ Botones de Calendly agregados

He agregado 2 botones de Calendly en tu one-pager:

1. **Hero** (botón central púrpura con icono)
2. **Sección Contacto** (botón destacado principal)

Ambos usan el mismo link: `https://calendly.com/TU_USUARIO/consulta-tecnica`

---

## 🚀 Setup de Calendly (5 minutos)

### Paso 1: Crear cuenta gratis

Andá a: https://calendly.com/signup

**Opciones de registro:**
- Email + contraseña
- Google (recomendado - más rápido)

### Paso 2: Configurar tu primer evento

Una vez logueado, creá tu primer evento:

**Nombre del evento**: "Consulta Técnica - 30 min"

**Configuración básica:**
- **Duración**: 30 minutos
- **Tipo de ubicación**: Google Meet o Zoom (se crea automáticamente)
- **Disponibilidad**: Configurá tus horarios (ej: Lun-Vie 9am-6pm)
- **Buffer time**: 15 min entre reuniones (opcional)

**Personalización:**
- **Color**: Púrpura (para que combine con el botón)
- **Preguntas al agendar**:
  - Nombre completo
  - Email
  - Empresa/Proyecto
  - Breve descripción del problema

### Paso 3: Copiar tu link de Calendly

Tu link de Calendly configurado:
```
https://calendly.com/devsculpt10/30min
```

### Paso 4: ✅ Ya configurado

**Ambos botones ya están configurados:**
- ✅ Hero (línea ~496) - Botón grande destacado (púrpura-índigo)
- ✅ Contacto (línea ~918) - Botón simple (azul)

Link actualizado a: `https://calendly.com/devsculpt10/30min`

---

## 🎨 Diseño del botón

### Hero (botón central):
- Color: Púrpura degradado (purple-500 → purple-600)
- Tamaño: Mediano, mismo que los otros CTAs
- Icono: Calendario + texto "Agendar Llamada"
- Efecto: Hover con sombra púrpura brillante

### Contacto (botón destacado principal):
- Color: Púrpura → Índigo degradado (más dramático)
- Tamaño: Grande (text-lg)
- Texto: "Agendar Videollamada Gratis"
- Iconos: Calendario izquierda + flecha derecha
- Descripción: "30 minutos para analizar tu proyecto sin compromiso"
- Sombra: 2xl con glow púrpura intenso

---

## 🎯 Estrategia de conversión

**Por qué funciona este diseño:**

1. **Color púrpura**: Se destaca del teal (diferenciación visual)
2. **"Gratis"**: Elimina fricción de contacto inicial
3. **"30 minutos"**: Compromiso de tiempo claro
4. **"Sin compromiso"**: Reduce miedo a venta agresiva
5. **Posición**: Principal en Contacto, visible en Hero
6. **CTA dual**: Dos oportunidades de agendar

---

## 💡 Tips de Calendly

### Configuración recomendada:

1. **Confirmación automática**: Activá para que se agenden al instante
2. **Recordatorios**: 
   - Email 24h antes
   - Email 1h antes
3. **Personalización**:
   - Logo/foto profesional
   - Mensaje de bienvenida técnico
4. **Integración calendario**: Google Calendar o Outlook
5. **Zona horaria**: Configurá correctamente para Uruguay

### Preguntas sugeridas al agendar:

1. "¿Cuál es el problema técnico principal que necesitás resolver?"
2. "¿Cuál es tu stack tecnológico actual?"
3. "¿Qué urgencia tiene el proyecto? (24h, 48h, 1 semana)"
4. "¿Cuál es tu presupuesto estimado?"

Esto te ahorra tiempo filtrando leads.

---

## 📊 Alternativas si no querés Calendly

Si preferís otra herramienta:

1. **Cal.com** (open source, gratis): https://cal.com
2. **TidyCal** (pago único USD 29, sin suscripción)
3. **Google Calendar Appointment Scheduling** (gratis con Google Workspace)

Solo cambiarías el `href` en los 2 botones.

---

## 🔄 Después de configurar Calendly

1. Reemplazá los 2 links en OnePager.jsx
2. Guardá el archivo
3. Avisame cuando quieras publicar
4. Yo hago: `git push origin main`
5. ¡Listo en GitHub Pages en 2 minutos!

---

**Nota**: Los botones ya están en el código esperando tu link de Calendly. El sitio funciona perfectamente, solo mostrará error 404 si alguien hace click antes de que configures Calendly.

