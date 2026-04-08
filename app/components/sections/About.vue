<template>
  <section
    id="about"
    class="relative text-white flex flex-col justify-center items-center overflow-y-visible pt-8 pb-14 md:py-24 px-4 sm:px-8"
  >
    <div
      class="relative flex flex-col items-center justify-center mb-16 md:mb-32 text-center"
    >
      <img
        src="/images/memoji-01.svg"
        alt="Beto Roberto Mirón Nájera Memoji"
        aria-hidden="true"
        width="128"
        height="128"
        class="pointer-events-none select-none absolute -top-16 -left-10 md:-left-14 lg:-left-28 w-[8rem] -z-10 hidden md:block"
      />
      <img
        src="/images/memoji-02.svg"
        alt="Beto Roberto Mirón Nájera Memoji"
        aria-hidden="true"
        width="160"
        height="160"
        class="pointer-events-none select-none absolute top-52 -right-10 md:-right-14 lg:-right-24 w-[10rem] -z-10 hidden md:block"
      />

      <p class="text-xl mb-10">
        Who
        <span
          class="font-bold bg-gradient-to-r from-cyber-void to-neon-cyan bg-clip-text text-transparent animate-gradient"
        >
          I am
        </span>
      </p>
      <h2 class="text-2xl sm:text-3xl md:text-4xl font-semibold max-w-3xl">
        I'm a
        <span
          class="bg-gradient-to-r from-neon-cyan to-cyber-void bg-clip-text text-transparent animate-gradient"
        >
          Full-Stack Developer
        </span>
        passionate about crafting reliable solutions that blend strong
        performance with great user experiences.
      </h2>
    </div>

    <div
      class="relative flex flex-col items-center justify-center w-full sm:-mx-8 sm:w-[calc(100%+4rem)]"
    >
      <div>
        <h2 class="text-xl mb-10">
          What
          <span
            class="font-bold bg-gradient-to-r from-cyber-void to-neon-cyan bg-clip-text text-transparent animate-gradient"
          >
            I do
          </span>
        </h2>
      </div>

      <!-- Skills Carousel -->
      <ui-carousel>
        <ui-card
          v-for="(item, i) in knowledge"
          :key="i"
          :title="item.title"
          :description="item.description"
          :stack="item.stack"
          :tag="item.tag"
        />
      </ui-carousel>
    </div>
  </section>
</template>

<script setup lang="ts">
const knowledge = [
  {
    title: '🎨 Front-End',
    description:
      'I design and build fast, accessible, and responsive interfaces focused on delivering the best user experience.',
    stack: ['react', 'next', 'vue', 'nuxt', 'tailwindcss'],
    tag: [],
  },
  {
    title: '🏗️ Software Architecture & Design',
    description:
      'I design clean, modular, and scalable architectures that allow projects to evolve without sacrificing stability.',
    stack: [],
    tag: [
      'Microservicios',
      'Event-Driven',
      'Clean Architecture',
      'REST APIs',
      'Domain-Driven Design (DDD)',
    ],
  },
  {
    title: '⚙️ Back-End',
    description:
      'I build scalable, secure, and maintainable systems that efficiently handle data, processes, and business logic.',
    stack: [
      'nodejs',
      'nestjs',
      'express',
      'typescript',
      'javascript',
      'go',
      'python',
    ],
    tag: [],
  },
  {
    title: '🗄️ Data Base',
    description:
      'I design and manage secure, optimized databases with structures built for performance and scalability.',
    stack: ['postresql', 'mysql', 'mongodb', 'redis', 'prisma'],
    tag: ['DynamoDB'],
  },
  {
    title: '☁️ DevOps & Cloud',
    description:
      'I automate infrastructure and deploy cloud applications with CI/CD pipelines that ensure stability, availability, and efficiency.',
    stack: ['aws', 'docker', 'kubernetes', 'terraform'],
    tag: ['GitHub Actions'],
  },
  {
    title: '🧩 Consulting & Custom Solutions',
    description:
      'I analyze your needs and design tailored solutions that combine strategy, architecture, and technology to achieve your goals.',
    stack: [],
    tag: [
      'System design',
      'Requirements Analysis',
      'Technical Documentation',
      'MVP Validation',
      'Project Roadmaps',
    ],
  },
  {
    title: '📊 Integrations & APIs',
    description:
      'I develop and integrate APIs that connect platforms and automate business processes seamlessly.',
    stack: ['graphql', 'webhook'],
    tag: ['REST', 'gRPC', 'Websockets'],
  },
  {
    title: '🔐 Security',
    description:
      'I implement security measures across all layers of software to protect information and comply with modern standards.',
    stack: ['jwt', 'oauth2', 'owasp'],
    tag: ['HTTPS', 'RBAC (Role-Based Access Control)'],
  },
]
</script>
