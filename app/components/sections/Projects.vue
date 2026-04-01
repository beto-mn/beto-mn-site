<template>
  <section id="projects" class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Encabezado de la sección -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Mis proyectos
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Algunos de los proyectos en los que he trabajado recientemente
        </p>
      </div>

      <!-- Grid de proyectos -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="project in projects"
          :key="project.id"
          class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          <!-- Imagen del proyecto -->
          <div
            class="h-48 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center"
          >
            <div class="text-4xl">{{ project.icon }}</div>
          </div>

          <!-- Contenido del proyecto -->
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-2">
              {{ project.title }}
            </h3>
            <p class="text-gray-600 mb-4">
              {{ project.description }}
            </p>

            <!-- Tecnologías -->
            <div class="flex flex-wrap gap-2 mb-4">
              <span
                v-for="tech in project.technologies"
                :key="tech"
                class="px-2 py-1 bg-primary-100 text-primary-800 text-xs font-medium rounded-full"
              >
                {{ tech }}
              </span>
            </div>

            <!-- Enlaces -->
            <div class="flex space-x-4">
              <a
                href="#"
                class="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center"
              >
                <svg
                  class="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                Ver demo
              </a>
              <a
                href="#"
                class="text-gray-600 hover:text-gray-700 font-medium text-sm flex items-center"
              >
                <svg
                  class="w-4 h-4 mr-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  />
                </svg>
                Código
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA para más proyectos -->
      <div class="text-center mt-12">
        <p class="text-gray-600 mb-6">¿Interesado en ver más de mi trabajo?</p>
        <button class="btn btn-secondary" @click="scrollToSection('contact')">
          Hablemos sobre tu proyecto
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description:
      'Plataforma de comercio electrónico completa con carrito de compras, pagos y gestión de inventario.',
    icon: '🛒',
    technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Stripe'],
  },
  {
    id: 2,
    title: 'Task Management App',
    description:
      'Aplicación de gestión de tareas con colaboración en tiempo real y notificaciones.',
    icon: '📋',
    technologies: ['React', 'TypeScript', 'Socket.io', 'PostgreSQL'],
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description:
      'Sitio web de portfolio responsivo con animaciones y optimización SEO.',
    icon: '🎨',
    technologies: ['Nuxt.js', 'Tailwind', 'GSAP', 'Netlify'],
  },
  {
    id: 4,
    title: 'API REST Service',
    description:
      'Servicio API REST escalable con autenticación JWT y documentación completa.',
    icon: '🔧',
    technologies: ['Express.js', 'JWT', 'Swagger', 'Docker'],
  },
  {
    id: 5,
    title: 'Mobile App',
    description:
      'Aplicación móvil híbrida para gestión de finanzas personales.',
    icon: '📱',
    technologies: ['Ionic', 'Vue.js', 'Capacitor', 'Firebase'],
  },
  {
    id: 6,
    title: 'Dashboard Analytics',
    description:
      'Dashboard de analíticas con visualizaciones interactivas y reportes en tiempo real.',
    icon: '📊',
    technologies: ['Chart.js', 'D3.js', 'Vue.js', 'WebSocket'],
  },
]

// Función para scroll suave a las secciones
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
}
</script>
