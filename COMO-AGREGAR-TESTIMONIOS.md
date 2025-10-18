# 📝 Cómo agregar testimonios reales de clientes

## Cuándo usar testimonios vs logros

**Actualmente tienes**: Logros cuantificables (métricas reales de tus proyectos)
```
✅ 100% Uptime en migraciones
✅ 15+ horas ahorradas semanalmente  
✅ 5x más rápido tiempo de testing
```

**Cuando tengas 2-3 clientes satisfechos**: Reemplazá por testimonios

---

## Paso a paso para agregar testimonios

### 1. Reemplazar el array en OnePager.jsx

**Encontrá** (línea ~85):
```javascript
const achievements = [
  {
    metric: '100%',
    label: 'Uptime en migraciones',
    description: '...'
  },
  // ...
];
```

**Reemplazá por**:
```javascript
const testimonials = [
  {
    name: 'María González',
    role: 'CTO - Startup FinTech',
    company: 'PayTech Solutions',
    text: 'Rescató nuestro sistema de pagos en 36h cuando teníamos un bug crítico en producción. Profesionalismo y expertise de primer nivel.'
  },
  {
    name: 'Carlos Méndez',
    role: 'Engineering Manager',
    company: 'E-commerce LATAM',
    text: 'La automatización que desarrolló nos ahorra 20 horas semanales. ROI en menos de 2 meses. Altamente recomendado.'
  }
];
```

### 2. Actualizar el HTML de renderizado

**Encontrá** (línea ~352):
```javascript
{/* Logros cuantificables */}
<div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
  {achievements.map((achievement, idx) => (
    // ...
  ))}
</div>
```

**Reemplazá por**:
```javascript
{/* Testimonios de clientes */}
<div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
  {testimonials.map((testimonial, idx) => (
    <div key={idx} className="bg-slate-900 rounded-2xl p-8 border border-slate-700">
      <div className="flex items-start mb-4">
        <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center text-xl font-bold mr-4">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <h4 className="font-semibold">{testimonial.name}</h4>
          <p className="text-sm text-slate-400">{testimonial.role}</p>
          <p className="text-xs text-slate-500">{testimonial.company}</p>
        </div>
      </div>
      <p className="text-slate-300 italic">"{testimonial.text}"</p>
    </div>
  ))}
</div>
```

### 3. Eliminar la nota de disclaimer

**Borrá** (línea ~365):
```javascript
{/* Nota sobre testimonios */}
<div className="max-w-3xl mx-auto mt-12 text-center">
  <p className="text-slate-400 text-sm italic">
    * Actualmente construyendo portfolio...
  </p>
</div>
```

---

## 💡 Consejos para pedir testimonios

### Timing ideal
- Justo después de entregar el proyecto
- Cuando el cliente te diga "¡Excelente trabajo!"
- 1 semana después de deployment exitoso

### Cómo pedirlos

**Email template**:
```
Hola [Nombre],

Me alegra que el proyecto de [servicio] haya cumplido tus expectativas.

¿Te gustaría compartir tu experiencia en mi sitio web? 
Sería una breve reseña (2-3 líneas) sobre qué problema resolvimos 
y el resultado que obtuviste.

Si prefieres, puedo usar solo tu nombre/inicial y cargo, 
sin mencionar la empresa.

¡Gracias!
G. Llera
```

### Qué incluir
✅ Nombre (o inicial si prefieren)
✅ Cargo/rol
✅ Empresa (opcional, pueden pedir confidencialidad)
✅ Resultado específico ("ahorré X tiempo", "solucionó Y problema")
✅ Métricas si es posible

❌ Evitar frases genéricas ("muy bueno", "recomendado")
❌ Textos muy largos (máximo 3 líneas)

---

## 🎯 Estructura ideal de testimonios

**Malo**:
> "Muy buen profesional. Recomendado."

**Bueno**:
> "Rescató nuestro sistema legacy en 48h cuando ningún otro dev pudo. Su expertise en Java EE y SOAP fue exactamente lo que necesitábamos. Precio justo y entrega a tiempo."

**Excelente (con métrica)**:
> "La automatización de validaciones que desarrolló nos ahorra 15 horas semanales. ROI en menos de 1 mes. Entregó en 40h cuando estimaba 48h. Definitivamente vuelvo a contratarlo."

---

## 📸 Bonus: Agregar foto del cliente

Si el cliente te da permiso y una foto:

```javascript
const testimonials = [
  {
    name: 'María González',
    role: 'CTO - PayTech',
    text: '...',
    image: '/testimonios/maria.jpg' // ← agregar
  }
];
```

Luego en el HTML:
```javascript
<div className="w-12 h-12 rounded-full overflow-hidden mr-4">
  {testimonial.image ? (
    <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
  ) : (
    <div className="w-full h-full bg-teal-500 flex items-center justify-center text-xl font-bold text-white">
      {testimonial.name.charAt(0)}
    </div>
  )}
</div>
```

---

**Recuerda**: Es mejor tener 2 testimonios excelentes que 5 mediocres. Calidad > Cantidad.

