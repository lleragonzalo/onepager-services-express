import { useState } from 'react';

export default function OnePager() {
  const [openFaq, setOpenFaq] = useState(null);
  const [language, setLanguage] = useState('es'); // 'es' o 'en'

  const translations = {
    es: {
      nav: {
        contact: 'Contacto'
      },
      hero: {
        title: 'Ingeniería de Software & Data\npara Sistemas Críticos',
        subtitle: 'MSc en TI. Especializado en automatización inteligente, ML y rescate de sistemas enterprise con entregas rápidas, según complejidad del proyecto, en promedio en 48hs.',
        cta1: 'Ver servicios',
        cta2: 'Ver proyectos reales'
      },
      differentiators: {
        title1: 'MSc + EMBA',
        desc1: 'Visión técnica y estratégica empresarial',
        title2: '24-48h Garantizado',
        desc2: 'Entregas express sin comprometer calidad',
        title3: 'ML & Automatización',
        desc3: 'Soluciones inteligentes, no solo scripts',
        title4: 'LATAM + Europa',
        desc4: 'Experiencia internacional comprobada'
      },
      about: {
        title: 'Sobre mí',
        badge1: 'MSc in IT',
        badge2: 'EMBA',
        badge3: 'Software & Data Engineer',
        bio1: 'Becado por la OEA para completar mi Maestría en TIC, especializado en Python, ML/AI y Data Analytics. Trabajo con equipos de LATAM y Europa, combinando ingeniería de software con visión estratégica para resolver problemas críticos en tiempo récord.',
        bio2: 'Mi enfoque:',
        bio2b: ' Convertir sistemas legacy en soluciones escalables sin comprometer la operación. Zero downtime, máxima eficiencia.',
        stack: 'Stack Tecnológico'
      },
      services: {
        title: 'Servicios Express',
        subtitle: 'Soluciones estratégicas con alcance definido, precio fijo y entrega garantizada',
        includes: 'Incluye',
        payMP: 'Pagar con MercadoPago',
        payPP: 'Pagar con PayPal',
        combo: {
          badge: 'Oferta Paquete',
          title: '🎁 Paquete Premium',
          price: 'USD 1.250',
          desc: 'Los 3 servicios express incluidos •',
          save: 'Ahorrás USD 300',
          cta: 'Consultar Paquete'
        }
      },
      process: {
        title: '¿Cómo Funciona?',
        subtitle: 'Proceso simple y transparente, de la consulta a la entrega',
        step1: {
          time: '15-30 min',
          title: 'Contacto Inicial',
          desc: 'Me contás tu problema. Analizo rápidamente el alcance y te confirmo si puedo ayudarte.'
        },
        step2: {
          time: '1-2 horas',
          title: 'Análisis & Cotización',
          desc: 'Reviso tu código/sistema. Te envío cotización exacta, alcance detallado y estimación realista de tiempo según complejidad.'
        },
        step3: {
          time: '48-72h típico',
          title: 'Desarrollo',
          desc: 'Trabajo enfocado en tu proyecto con tiempo estimado en el paso 2. Updates diarios de progreso. Código limpio y documentado.'
        },
        step4: {
          time: 'Inmediato',
          title: 'Entrega & Soporte',
          desc: 'Código + documentación + 7 días de soporte incluido. Todo listo para producción.'
        },
        guarantee1: {
          title: 'Garantía de Entrega',
          desc: 'Si no cumplo el plazo acordado, devuelvo el 25% del pago. Sin excusas.'
        },
        guarantee2: {
          title: 'Disponibilidad Limitada',
          desc: 'Solo acepto 2 proyectos simultáneos para garantizar calidad y velocidad.'
        },
        guarantee3: {
          title: 'Respuesta Rápida',
          desc: 'Análisis inicial en 2-4 horas. Te confirmo viabilidad, tiempo estimado y podemos arrancar el mismo día si es urgente.'
        }
      },
      projects: {
        title: 'Últimos Proyectos Reales',
        subtitle: 'Experiencia comprobada en sistemas críticos de producción',
        note: 'Los casos y métricas reflejan proyectos reales en sistemas gubernamentales y enterprise'
      },
      faq: {
        title: 'Preguntas Frecuentes',
        subtitle: 'Respuestas rápidas a las consultas más comunes'
      },
      contact: {
        title: '¿Sistema en crisis o proceso\nmanual crítico?',
        subtitle: 'Hablemos hoy.',
        subtitleHighlight: 'Te doy estimación realista en 30 minutos',
        email: 'Email',
        emailDesc: 'Respuesta en 24h',
        whatsapp: 'WhatsApp',
        whatsappDesc: 'Respuesta inmediata',
        linkedin: 'LinkedIn',
        linkedinDesc: 'Conectemos'
      },
      footer: {
        copyright: '© 2025 leratech.dev. Todos los derechos reservados.',
        aboutMe: 'Sobre mí',
        services: 'Servicios',
        projects: 'Proyectos',
        contact: 'Contacto'
      }
    },
    en: {
      nav: {
        contact: 'Contact'
      },
      hero: {
        title: 'Software & Data Engineering\nfor Critical Systems',
        subtitle: 'MSc in IT. Specialized in intelligent automation, ML, and enterprise system rescue with fast delivery according to project complexity, average 48h.',
        cta1: 'View services',
        cta2: 'View real projects'
      },
      differentiators: {
        title1: 'MSc + EMBA',
        desc1: 'Technical and strategic business vision',
        title2: '24-48h Guaranteed',
        desc2: 'Express delivery without compromising quality',
        title3: 'ML & Automation',
        desc3: 'Intelligent solutions, not just scripts',
        title4: 'LATAM + Europe',
        desc4: 'Proven international experience'
      },
      about: {
        title: 'About Me',
        badge1: 'MSc in IT',
        badge2: 'EMBA',
        badge3: 'Software & Data Engineer',
        bio1: 'OAS scholarship recipient to complete my Master\'s in ICT, specialized in Python, ML/AI and Data Analytics. I work with teams in LATAM and Europe, combining software engineering with strategic vision to solve critical problems in record time.',
        bio2: 'My approach:',
        bio2b: ' Transform legacy systems into scalable solutions without compromising operations. Zero downtime, maximum efficiency.',
        stack: 'Tech Stack'
      },
      services: {
        title: 'Express Services',
        subtitle: 'Strategic solutions with defined scope, fixed price and guaranteed delivery',
        includes: 'Includes',
        payMP: 'Pay with MercadoPago',
        payPP: 'Pay with PayPal',
        combo: {
          badge: 'Package Offer',
          title: '🎁 Premium Package',
          price: 'USD 1,250',
          desc: 'All 3 express services included •',
          save: 'Save USD 300',
          cta: 'Inquire Package'
        }
      },
      process: {
        title: 'How It Works?',
        subtitle: 'Simple and transparent process, from inquiry to delivery',
        step1: {
          time: '15-30 min',
          title: 'Initial Contact',
          desc: 'Tell me your problem. I quickly analyze the scope and confirm if I can help you.'
        },
        step2: {
          time: '1-2 hours',
          title: 'Analysis & Quote',
          desc: 'I review your code/system. I send you exact quote, detailed scope and realistic time estimation based on complexity.'
        },
        step3: {
          time: '48-72h typical',
          title: 'Development',
          desc: 'Focused work on your project with time estimated in step 2. Daily progress updates. Clean and documented code.'
        },
        step4: {
          time: 'Immediate',
          title: 'Delivery & Support',
          desc: 'Code + documentation + 7 days of included support. Ready for production.'
        },
        guarantee1: {
          title: 'Delivery Guarantee',
          desc: 'If I don\'t meet the agreed deadline, I refund 25% of payment. No excuses.'
        },
        guarantee2: {
          title: 'Limited Availability',
          desc: 'I only accept 2 simultaneous projects to guarantee quality and speed.'
        },
        guarantee3: {
          title: 'Quick Response',
          desc: 'Initial analysis in 2-4 hours. I confirm feasibility, estimated time and we can start same day if urgent.'
        }
      },
      projects: {
        title: 'Recent Real Projects',
        subtitle: 'Proven experience in critical production systems',
        note: 'Cases and metrics reflect real projects in government and enterprise systems'
      },
      faq: {
        title: 'Frequently Asked Questions',
        subtitle: 'Quick answers to common questions'
      },
      contact: {
        title: 'System in crisis or critical\nmanual process?',
        subtitle: 'Let\'s talk today.',
        subtitleHighlight: 'I give you realistic estimate in 2 hours',
        email: 'Email',
        emailDesc: 'Response in 24h',
        whatsapp: 'WhatsApp',
        whatsappDesc: 'Immediate response',
        linkedin: 'LinkedIn',
        linkedinDesc: 'Let\'s connect'
      },
      footer: {
        copyright: '© 2025 leratech.dev. All rights reserved.',
        aboutMe: 'About me',
        services: 'Services',
        projects: 'Projects',
        contact: 'Contact'
      }
    }
  };

  const t = translations[language];

  const services = language === 'es' ? [
    {
      id: 1,
      title: 'Legacy System Rescue',
      price: 'USD 650',
      time: 'Desde 48h',
      description: 'Rescate express de sistemas críticos en producción con fallas técnicas',
      deliverables: [
        'Diagnóstico completo y plan de acción',
        'Fix de errores críticos y deployment funcional',
        'Testing automatizado y validación',
        'Documentación técnica + guía de contingencia',
        'Code review y mejores prácticas aplicadas'
      ],
      paymentLinks: {
        mercadopago: 'https://link.mercadopago.com.uy/gllera',
        paypal: 'https://paypal.me/lleragonzalo/650'
      }
    },
    {
      id: 2,
      title: 'Data Automation Suite',
      price: 'USD 500',
      time: 'Desde 48h',
      description: 'Automatización inteligente de procesos manuales con análisis y reportería',
      deliverables: [
        'Script de automatización con ML/reglas de negocio',
        'Integración con bases de datos y APIs',
        'Reportes ejecutivos automatizados (Excel/PDF)',
        'Dashboard de métricas y KPIs',
        'Documentación de uso y mantenimiento'
      ],
      paymentLinks: {
        mercadopago: 'https://link.mercadopago.com.uy/gllera',
        paypal: 'https://paypal.me/lleragonzalo/500'
      }
    },
    {
      id: 3,
      title: 'Performance Optimization',
      price: 'USD 400',
      time: 'Desde 48h',
      description: 'Análisis y optimización de performance para APIs y sistemas enterprise',
      deliverables: [
        'Auditoría de performance y bottlenecks',
        'Plan de pruebas de carga parametrizable',
        'Reporte profesional con insights accionables',
        'Recomendaciones de arquitectura y tuning',
        'Integración CI/CD para monitoreo continuo'
      ],
      paymentLinks: {
        mercadopago: 'https://link.mercadopago.com.uy/gllera',
        paypal: 'https://paypal.me/lleragonzalo/400'
      }
    },
    {
      id: 4,
      title: 'Desarrollo a Medida',
      price: 'A consultar',
      time: 'Según alcance',
      description: 'Desarrollo personalizado de aplicaciones web y backend según tus necesidades',
      deliverables: [
        'Análisis de requerimientos y planificación',
        'Desarrollo backend (Python, Java) o frontend (React, JavaScript)',
        'Integración con APIs y bases de datos',
        'Testing y documentación completa',
        'Deployment y capacitación del equipo'
      ],
      paymentLinks: {
        mercadopago: 'https://link.mercadopago.com.uy/gllera',
        paypal: 'https://paypal.me/lleragonzalo'
      }
    }
  ] : [
    {
      id: 1,
      title: 'Legacy System Rescue',
      price: 'USD 650',
      time: 'From 48h',
      description: 'Express rescue of critical production systems with technical failures',
      deliverables: [
        'Complete diagnosis and action plan',
        'Critical error fixes and functional deployment',
        'Automated testing and validation',
        'Technical documentation + contingency guide',
        'Code review and best practices applied'
      ],
      paymentLinks: {
        mercadopago: 'https://link.mercadopago.com.uy/gllera',
        paypal: 'https://paypal.me/lleragonzalo/650'
      }
    },
    {
      id: 2,
      title: 'Data Automation Suite',
      price: 'USD 500',
      time: 'From 48h',
      description: 'Intelligent automation of manual processes with analysis and reporting',
      deliverables: [
        'Automation script with ML/business rules',
        'Database and API integration',
        'Automated executive reports (Excel/PDF)',
        'Metrics and KPIs dashboard',
        'Usage and maintenance documentation'
      ],
      paymentLinks: {
        mercadopago: 'https://link.mercadopago.com.uy/gllera',
        paypal: 'https://paypal.me/lleragonzalo/500'
      }
    },
    {
      id: 3,
      title: 'Performance Optimization',
      price: 'USD 400',
      time: 'From 48h',
      description: 'Performance analysis and optimization for enterprise APIs and systems',
      deliverables: [
        'Performance audit and bottlenecks',
        'Parametrizable load testing plan',
        'Professional report with actionable insights',
        'Architecture and tuning recommendations',
        'CI/CD integration for continuous monitoring'
      ],
      paymentLinks: {
        mercadopago: 'https://link.mercadopago.com.uy/gllera',
        paypal: 'https://paypal.me/lleragonzalo/400'
      }
    },
    {
      id: 4,
      title: 'Custom Development',
      price: 'On request',
      time: 'Based on scope',
      description: 'Custom web and backend application development tailored to your needs',
      deliverables: [
        'Requirements analysis and planning',
        'Backend (Python, Java) or frontend (React, JavaScript) development',
        'API and database integration',
        'Complete testing and documentation',
        'Deployment and team training'
      ],
      paymentLinks: {
        mercadopago: 'https://link.mercadopago.com.uy/gllera',
        paypal: 'https://paypal.me/lleragonzalo'
      }
    }
  ];

  const technologies = [
    'Python', 'Machine Learning', 'FastAPI', 'Data Analytics',
    'Pandas', 'NumPy', 'Scikit-learn', 'PostgreSQL', 'Oracle',
    'SOAP/REST APIs', 'JMeter', 'Excel Automation',
    'Java EE', 'JBoss', 'EJB', 'Dozer'
  ];

  const cases = language === 'es' ? [
    {
      title: 'Sistema de Compras Públicas',
      description: 'Desarrollo y mantenimiento de Web Services SOAP para plataforma gubernamental de contrataciones. Migración de mapeos Dozer, integración con Oracle y deployment en JBoss sin downtime.'
    },
    {
      title: 'Pipeline de Validación Enterprise',
      description: 'Automatización de validaciones de reglas de negocio complejas (OF/AD/AC/LL/SCO) con Python. Procesamiento batch contra Oracle, generación de reportes Excel con análisis pivot y dashboard ejecutivo.'
    },
    {
      title: 'Gestor de Convocatorias – Visualización y Reportes',
      description: 'Aplicación web full-stack para gestión integral de convocatorias desde API REST. Frontend JavaScript moderno con MySQL backend. Exportación Excel/JSON, visualización dinámica y reportería ejecutiva para toma de decisiones basada en datos.'
    }
  ] : [
    {
      title: 'Public Procurement System',
      description: 'Development and maintenance of SOAP Web Services for government procurement platform. Dozer mapping migration, Oracle integration and JBoss deployment with zero downtime.'
    },
    {
      title: 'ARCE Validation Pipeline',
      description: 'Automation of complex business rules validation (OF/AD/AC/LL/SCO) with Python. Batch processing against Oracle, Excel report generation with pivot analysis and executive dashboard.'
    },
    {
      title: 'Procurement Manager – Visualization & Reports',
      description: 'Full-stack web application for comprehensive procurement management from REST API. Modern JavaScript frontend with MySQL backend. Excel/JSON export, dynamic visualization and executive reporting for data-driven decision making.'
    }
  ];

  const achievements = language === 'es' ? [
    {
      metric: '100%',
      label: 'Uptime en migraciones',
      description: 'Migración de Web Services SOAP legacy a nuevas versiones sin interrupciones en producción'
    },
    {
      metric: '15+ horas',
      label: 'Ahorradas semanalmente',
      description: 'Automatización de validaciones manuales con Python, liberando tiempo del equipo técnico'
    },
    {
      metric: '100% web',
      label: 'Visualización en tiempo real',
      description: 'Aplicación JavaScript con MySQL para gestión de convocatorias, exportación Excel y reportería ejecutiva'
    }
  ] : [
    {
      metric: '100%',
      label: 'Migration uptime',
      description: 'Legacy SOAP Web Services migration to new versions without production interruptions'
    },
    {
      metric: '15+ hours',
      label: 'Saved weekly',
      description: 'Manual validation automation with Python, freeing up technical team time'
    },
    {
      metric: '100% web',
      label: 'Real-time visualization',
      description: 'JavaScript application with MySQL for procurement management, Excel export and executive reporting'
    }
  ];

  const faqs = language === 'es' ? [
    {
      question: '¿Cómo determinás el tiempo de entrega?',
      answer: 'Después del análisis inicial (1-2h) te doy una estimación realista basada en la complejidad. La mayoría de proyectos se completan en 48-72h. Si hay cambios de alcance durante el desarrollo, te informo inmediatamente antes de continuar.'
    },
    {
      question: '¿Qué forma de pago aceptás?',
      answer: 'MercadoPago y PayPal. Para proyectos estándar (48-72h): 50% al iniciar, 50% a la entrega. Para proyectos urgentes o menores a 48h: 100% upfront. Facturo con todos los respaldos legales.'
    },
    {
      question: '¿Ofrecés soporte post-entrega?',
      answer: 'Sí. Incluyo 7 días de soporte para dudas o ajustes menores relacionados con el entregable. Para mantenimiento continuo, podemos acordar un retainer mensual.'
    }
  ] : [
    {
      question: 'How do you determine delivery time?',
      answer: 'After the initial analysis (1-2h) I give you a realistic estimate based on complexity. Most projects are completed in 48-72h. If there are scope changes during development, I inform you immediately before continuing.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'MercadoPago and PayPal. For standard projects (48-72h): 50% to start, 50% on delivery. For urgent projects or less than 48h: 100% upfront. I invoice with all legal backing.'
    },
    {
      question: 'Do you offer post-delivery support?',
      answer: 'Yes. I include 7 days of support for questions or minor adjustments related to the deliverable. For continuous maintenance, we can agree on a monthly retainer.'
    }
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-slate-900 text-white min-h-screen">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg flex items-center justify-center font-bold text-lg">
                Gl
              </div>
              <span className="ml-3 font-semibold text-lg">leratech.dev</span>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
                className="flex items-center gap-2 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg text-sm font-medium transition-colors"
                title={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.494 1 1 0 111.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 110-2h3V3a1 1 0 011-1zm6 6a1 1 0 01.894.553l2.991 5.982a.869.869 0 01.02.037l.99 1.98a1 1 0 11-1.79.895L15.383 16h-4.764l-.724 1.447a1 1 0 11-1.788-.894l.99-1.98.019-.038 2.99-5.982A1 1 0 0113 8zm-1.382 6h2.764L13 11.236 11.618 14z" clipRule="evenodd" />
                </svg>
                <span>{language === 'es' ? 'EN' : 'ES'}</span>
              </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className="text-teal-400 hover:text-teal-300 font-medium transition-colors"
            >
                {t.nav.contact}
            </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/20 to-slate-900"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent leading-tight whitespace-pre-line">
              {t.hero.title}
            </h1>
            <p className="text-xl sm:text-2xl text-slate-300 mb-6 max-w-3xl mx-auto leading-relaxed">
              {t.hero.subtitle}
            </p>
            
            {/* Tagline de experiencia */}
            <div className="flex items-center justify-center gap-3 mb-12">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-teal-500"></div>
              <p className="text-base text-slate-400 italic">
                {language === 'es' 
                  ? '8 años de experiencia en sistemas gubernamentales y corporativos. Desarrollo rápido, seguro y auditado.' 
                  : '8 years of experience in government and corporate systems. Fast, secure and audited development.'}
              </p>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-teal-500"></div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('servicios')}
                className="px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-teal-500/50 transition-all transform hover:scale-105"
              >
                {t.hero.cta1}
              </button>
              <a
                href="https://calendly.com/devsculpt10/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 bg-gradient-to-r from-purple-500 via-purple-600 to-indigo-600 hover:from-purple-600 hover:via-purple-700 hover:to-indigo-700 text-white font-bold text-lg rounded-2xl shadow-2xl shadow-purple-500/40 hover:shadow-purple-500/60 transition-all transform hover:scale-105 flex items-center justify-center gap-3"
              >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{language === 'es' ? 'Agendar Videollamada Gratis' : 'Schedule Free Video Call'}</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <button
                onClick={() => scrollToSection('confianza')}
                className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-2xl border border-slate-700 transition-all"
              >
                {t.hero.cta2}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Por qué elegirme - Diferenciadores */}
      <section className="py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">{t.differentiators.title1}</h3>
              <p className="text-slate-400 text-sm">{t.differentiators.desc1}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">{t.differentiators.title2}</h3>
              <p className="text-slate-400 text-sm">{t.differentiators.desc2}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">{t.differentiators.title3}</h3>
              <p className="text-slate-400 text-sm">{t.differentiators.desc3}</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">{t.differentiators.title4}</h3>
              <p className="text-slate-400 text-sm">{t.differentiators.desc4}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre mí */}
      <section id="sobre-mi" className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">{t.about.title}</h2>
            
            {/* Credenciales */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="px-6 py-3 bg-gradient-to-r from-teal-900/50 to-blue-900/50 border border-teal-500/30 rounded-xl text-base font-semibold">
                {t.about.badge1}
              </span>
              <span className="px-6 py-3 bg-gradient-to-r from-teal-900/50 to-blue-900/50 border border-teal-500/30 rounded-xl text-base font-semibold">
                {t.about.badge2}
              </span>
              <span className="px-6 py-3 bg-gradient-to-r from-teal-900/50 to-blue-900/50 border border-teal-500/30 rounded-xl text-base font-semibold">
                {t.about.badge3}
              </span>
            </div>

            <p className="text-base text-slate-300 mb-10 text-center leading-relaxed max-w-3xl mx-auto">
              {t.about.bio1}
            </p>
            <p className="text-base text-slate-400 text-center max-w-2xl mx-auto mb-12">
              <strong className="text-teal-400">{t.about.bio2}</strong>{t.about.bio2b}
            </p>
            
            <div className="bg-slate-900 rounded-2xl p-8 border border-slate-700 mt-2">
              <h3 className="text-lg font-bold mb-5 text-teal-400 flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
                {t.about.stack}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-2 bg-slate-800 border border-slate-700 rounded-lg text-xs font-medium hover:border-teal-500 hover:bg-slate-750 transition-all cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Desarrollo a Medida - Servicio Principal */}
          <div className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-center">
              {language === 'es' ? 'Servicio Principal' : 'Main Service'}
            </h2>
            <p className="text-slate-400 text-center mb-12 text-lg max-w-2xl mx-auto">
              {language === 'es' ? 'Desarrollo personalizado adaptado a tus necesidades específicas' : 'Custom development tailored to your specific needs'}
            </p>

            <div className="max-w-2xl mx-auto">
              {services[3] && (
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-10 border-2 border-teal-500/30 hover:border-teal-500 transition-all hover:shadow-2xl hover:shadow-teal-500/20">
                  <div className="flex items-center justify-between mb-5">
                    <h3 className="text-3xl font-bold text-teal-400 leading-tight">{services[3].title}</h3>
                    <span className="px-4 py-2 bg-gradient-to-r from-teal-500/20 to-blue-500/20 border border-teal-500/30 text-teal-400 rounded-xl text-sm font-bold">
                      {language === 'es' ? '✨ Personalizado' : '✨ Custom'}
                    </span>
                  </div>
                  <div className="flex items-baseline gap-3 mb-6">
                    <span className="text-4xl font-bold text-white">{services[3].price}</span>
                    <span className="text-slate-500">•</span>
                    <span className="text-slate-400 text-lg">{services[3].time}</span>
                  </div>
                  <p className="text-slate-300 mb-8 text-base leading-relaxed">{services[3].description}</p>
                  
                  <div className="mb-8">
                    <h4 className="font-bold mb-5 text-xs uppercase tracking-wider text-slate-500">{t.services.includes}</h4>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {services[3].deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start group">
                          <svg className="w-4 h-4 text-teal-400 mr-3 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm text-slate-300 leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Botones de contacto */}
                  <div className="grid md:grid-cols-2 gap-3 mb-4">
                    <a
                      href="https://calendly.com/devsculpt10/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold rounded-xl transition-all transform hover:scale-105"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>{language === 'es' ? 'Consultar' : 'Inquire'}</span>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/gonzalollera/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-medium rounded-xl transition-all border border-slate-600"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      <span>LinkedIn</span>
                    </a>
                  </div>

                  {/* Botones de pago */}
                  <div className="grid md:grid-cols-2 gap-3">
                    <a
                      href="https://link.mercadopago.com.uy/gllera"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-xl text-center transition-all transform hover:scale-105"
                    >
                      {t.services.payMP}
                    </a>
                    <a
                      href="https://paypal.me/lleragonzalo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl text-center transition-all transform hover:scale-105"
                    >
                      {t.services.payPP}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Separador visual */}
          <div className="flex items-center gap-4 mb-16">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
            <span className="text-slate-500 text-sm font-semibold uppercase tracking-wide">
              {language === 'es' ? 'Servicios Express' : 'Express Services'}
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
          </div>

          {/* Servicios Express - 3 columnas */}
          <div className="mb-12">
            <p className="text-slate-400 text-center mb-12 text-base max-w-2xl mx-auto">
              {language === 'es' ? 'Soluciones con alcance definido, precio fijo y entrega garantizada' : 'Solutions with defined scope, fixed price and guaranteed delivery'}
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {services.slice(0, 3).map((service) => (
              <div
                key={service.id}
                className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-teal-500 transition-all hover:shadow-xl hover:shadow-teal-500/10"
              >
                <h3 className="text-2xl font-bold mb-3 text-teal-400 leading-tight">{service.title}</h3>
                <div className="flex items-baseline gap-3 mb-5">
                  <span className="text-3xl font-bold text-white">{service.price}</span>
                  <span className="text-slate-500">•</span>
                  <span className="text-slate-400 text-base">{service.time}</span>
                </div>
                <p className="text-slate-300 mb-6 text-sm leading-relaxed">{service.description}</p>
                
                <div className="mb-8">
                  <h4 className="font-bold mb-4 text-xs uppercase tracking-wider text-slate-500">{t.services.includes}</h4>
                  <ul className="space-y-2.5">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start group">
                        <svg className="w-4 h-4 text-teal-400 mr-3 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm text-slate-300 leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Botones de pago - Reemplazar links */}
                <div className="space-y-3">
                  <a
                    href={service.paymentLinks.mercadopago}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-xl text-center transition-all transform hover:scale-105"
                  >
                    {t.services.payMP}
                  </a>
                  <a
                    href={service.paymentLinks.paypal}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl text-center transition-all transform hover:scale-105"
                  >
                    {t.services.payPP}
                  </a>
                </div>
              </div>
            ))}
            </div>
          </div>

          {/* Combo */}
          <div className="bg-gradient-to-r from-teal-900/50 to-blue-900/50 rounded-2xl p-8 border-2 border-teal-500/50 max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-3">{t.services.combo.title}</h3>
             <p className="text-3xl font-bold text-teal-400 mb-2">{t.services.combo.price}</p>
             <p className="text-slate-300 mb-2">{t.services.combo.desc} <span className="text-teal-400 font-semibold">{t.services.combo.save}</span></p>
             <p className="text-slate-400 text-xs mb-6">
              {language === 'es' ? '* Incluye los 3 primeros servicios. "Desarrollo a Medida" se cotiza por separado.' : '* Includes the first 3 services. "Custom Development" is quoted separately.'}
             </p>
            
            {/* Botones de pago del combo */}
            <div className="space-y-3 max-w-md mx-auto">
              <a
                href="https://link.mercadopago.com.uy/gllera"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-xl text-center transition-all transform hover:scale-105"
              >
                {t.services.payMP}
              </a>
              <a
                href="https://paypal.me/lleragonzalo/1250"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl text-center transition-all transform hover:scale-105"
              >
                {t.services.payPP}
              </a>
              <a
                href="https://www.linkedin.com/in/gonzalollera/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-medium rounded-xl text-center transition-all border border-slate-600"
              >
                {t.services.combo.cta}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Cómo Funciona */}
      <section className="py-20 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-center">{t.process.title}</h2>
          <p className="text-slate-400 text-center mb-16 text-lg max-w-2xl mx-auto">
            {t.process.subtitle}
          </p>

          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {/* Paso 1 */}
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-7 border border-slate-700 h-full">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center font-bold text-xl">
                    1
                  </div>
                  <span className="text-xs font-semibold text-teal-400 uppercase tracking-wide">{t.process.step1.time}</span>
                </div>
                <h3 className="text-lg font-bold mb-3 text-white">{t.process.step1.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {t.process.step1.desc}
                </p>
              </div>
              {/* Flecha */}
              <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                <svg className="w-6 h-6 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            {/* Paso 2 */}
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-7 border border-slate-700 h-full">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center font-bold text-xl">
                    2
                  </div>
                  <span className="text-xs font-semibold text-teal-400 uppercase tracking-wide">{t.process.step2.time}</span>
                </div>
                <h3 className="text-lg font-bold mb-3 text-white">{t.process.step2.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {t.process.step2.desc}
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                <svg className="w-6 h-6 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            {/* Paso 3 */}
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-7 border border-slate-700 h-full">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center font-bold text-xl">
                    3
                  </div>
                  <span className="text-xs font-semibold text-teal-400 uppercase tracking-wide">{t.process.step3.time}</span>
                </div>
                <h3 className="text-lg font-bold mb-3 text-white">{t.process.step3.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {t.process.step3.desc}
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                <svg className="w-6 h-6 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            {/* Paso 4 */}
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-7 border border-slate-700 h-full">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center font-bold text-xl">
                    4
                  </div>
                  <span className="text-xs font-semibold text-teal-400 uppercase tracking-wide">{t.process.step4.time}</span>
                </div>
                <h3 className="text-lg font-bold mb-3 text-white">{t.process.step4.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {t.process.step4.desc}
                </p>
              </div>
            </div>
          </div>

          {/* Garantías y urgencia */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 text-center">
              <div className="w-14 h-14 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-bold text-white mb-2">{t.process.guarantee1.title}</h4>
              <p className="text-slate-400 text-sm">{t.process.guarantee1.desc}</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 text-center">
              <div className="w-14 h-14 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-bold text-white mb-2">{t.process.guarantee2.title}</h4>
              <p className="text-slate-400 text-sm">{t.process.guarantee2.desc}</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 text-center">
              <div className="w-14 h-14 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h4 className="font-bold text-white mb-2">{t.process.guarantee3.title}</h4>
              <p className="text-slate-400 text-sm">{t.process.guarantee3.desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Confianza & Casos */}
      <section id="confianza" className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-center">{t.projects.title}</h2>
          <p className="text-slate-400 text-center mb-16 text-lg max-w-2xl mx-auto">
            {t.projects.subtitle}
          </p>

          {/* Casos */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {cases.map((caso, idx) => (
              <div key={idx} className="bg-slate-900 rounded-2xl p-7 border border-slate-700 hover:border-teal-500/50 transition-all group">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 bg-teal-500/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-teal-500/20 transition-colors">
                    <span className="text-2xl">💼</span>
                  </div>
                  <h3 className="text-lg font-bold text-teal-400 leading-tight pt-1">{caso.title}</h3>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">{caso.description}</p>
              </div>
            ))}
          </div>

          {/* Logros cuantificables */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {achievements.map((achievement, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700 text-center hover:border-teal-500/50 transition-all group">
                <div className="text-5xl font-bold bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform">
                  {achievement.metric}
                </div>
                <h4 className="font-bold text-lg mb-3 text-white">{achievement.label}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{achievement.description}</p>
              </div>
            ))}
          </div>
          
          {/* Nota sobre testimonios */}
          <div className="max-w-3xl mx-auto mt-16 text-center">
            <div className="inline-flex items-center gap-2 px-5 py-3 bg-slate-800/50 border border-slate-700 rounded-xl">
              <svg className="w-4 h-4 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <p className="text-slate-400 text-xs">
                {t.projects.note}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-center">{t.faq.title}</h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            {t.faq.subtitle}
          </p>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-7 py-5 text-left flex justify-between items-center hover:bg-slate-700/30 transition-all group"
                  aria-expanded={openFaq === idx}
                >
                  <span className="font-semibold text-base text-white group-hover:text-teal-400 transition-colors">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-teal-400 transition-all flex-shrink-0 ml-4 ${openFaq === idx ? 'rotate-180' : 'group-hover:translate-y-0.5'}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === idx && (
                  <div className="px-7 pb-6 pt-2 animate-fadeIn">
                    <p className="text-slate-300 text-sm leading-relaxed mb-2">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto/Compra */}
      <section id="contacto" className="py-20 bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-5 leading-tight whitespace-pre-line">
            {t.contact.title}
          </h2>
          <p className="text-xl text-slate-300 mb-12">
            {t.contact.subtitle} <span className="text-teal-400 font-semibold">{t.contact.subtitleHighlight}</span>
          </p>
          
          {/* Botón simple de Calendly */}
          <div className="mb-12">
            <a
              href="https://calendly.com/devsculpt10/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-2xl shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all transform hover:scale-105"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{language === 'es' ? 'Agendar Llamada' : 'Schedule Call'}</span>
            </a>
          </div>

          <p className="text-slate-500 text-sm mb-8">
            {language === 'es' ? 'O contactame directamente por:' : 'Or contact me directly via:'}
          </p>

          <div className="grid sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
            <a
              href="mailto:devsculpt10@gmail.com?subject=Consulta%20sobre%20servicios%20-%20Leratech&body=Hola,%0D%0A%0D%0AMe%20interesa%20consultar%20sobre:%0D%0A%0D%0A"
              className="flex flex-col items-center justify-center px-6 py-10 bg-gradient-to-br from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 rounded-2xl border border-slate-700 hover:border-teal-500 transition-all group shadow-lg hover:shadow-teal-500/20"
            >
              <div className="w-16 h-16 bg-teal-500/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-teal-500/20 transition-colors">
                <svg className="w-8 h-8 text-teal-400 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              </div>
              <span className="font-bold text-white group-hover:text-teal-400 transition-colors">{t.contact.email}</span>
              <span className="text-xs text-slate-500 mt-1">{t.contact.emailDesc}</span>
            </a>

            <a
              href="https://wa.me/TUNUMERO?text=Hola,%20tengo%20un%20sistema%20crítico%20y%20necesito%20ayuda%20urgente"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center px-6 py-10 bg-gradient-to-br from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 rounded-2xl border border-slate-700 hover:border-teal-500 transition-all group shadow-lg hover:shadow-teal-500/20"
            >
              <div className="w-16 h-16 bg-teal-500/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-teal-500/20 transition-colors">
                <svg className="w-8 h-8 text-teal-400 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              </div>
              <span className="font-bold text-white group-hover:text-teal-400 transition-colors">{t.contact.whatsapp}</span>
              <span className="text-xs text-slate-500 mt-1">{t.contact.whatsappDesc}</span>
            </a>

            <a
              href="https://www.linkedin.com/in/gonzalollera/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center px-6 py-10 bg-gradient-to-br from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 rounded-2xl border border-slate-700 hover:border-teal-500 transition-all group shadow-lg hover:shadow-teal-500/20"
            >
              <div className="w-16 h-16 bg-teal-500/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-teal-500/20 transition-colors">
                <svg className="w-8 h-8 text-teal-400 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              </div>
              <span className="font-bold text-white group-hover:text-teal-400 transition-colors">{t.contact.linkedin}</span>
              <span className="text-xs text-slate-500 mt-1">{t.contact.linkedinDesc}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <p className="text-slate-400">{t.footer.copyright}</p>
            </div>
            <div className="flex gap-6">
              <button
                onClick={() => scrollToSection('sobre-mi')}
                className="text-slate-400 hover:text-teal-400 transition-colors"
              >
                {t.footer.aboutMe}
              </button>
              <button
                onClick={() => scrollToSection('servicios')}
                className="text-slate-400 hover:text-teal-400 transition-colors"
              >
                {t.footer.services}
              </button>
              <button
                onClick={() => scrollToSection('confianza')}
                className="text-slate-400 hover:text-teal-400 transition-colors"
              >
                {t.footer.projects}
              </button>
              <button
                onClick={() => scrollToSection('contacto')}
                className="text-slate-400 hover:text-teal-400 transition-colors"
              >
                {t.footer.contact}
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

