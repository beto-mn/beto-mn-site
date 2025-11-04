<template>
  <section
    id="about"
    class="relative text-white flex flex-col justify-center items-center overflow-x-hidden overflow-y-visible py-10"
  >
    <div
      class="relative flex flex-col items-center justify-center mb-32 text-center"
    >
      <img
        src="/images/memoji-01.svg"
        alt=""
        aria-hidden="true"
        class="pointer-events-none select-none absolute top-3 -left-28 w-[8rem] -z-10"
      />
      <img
        src="/images/memoji-02.svg"
        alt=""
        aria-hidden="true"
        class="pointer-events-none select-none absolute top-36 -right-24 w-[10rem] -z-10"
      />

      <h3 class="text-xl mb-10">
        Who
        <span
          class="font-bold bg-gradient-to-r from-cyber-void to-neon-cyan bg-clip-text text-transparent animate-gradient"
        >
          I am
        </span>
      </h3>
      <h1 class="text-4xl font-semibold max-w-3xl">
        I'm a
        <span
          class="bg-gradient-to-r from-neon-cyan to-cyber-void bg-clip-text text-transparent animate-gradient"
        >
          Full-Stack Developer
        </span>
        passionate about crafting reliable solutions that blend strong
        performance with great user experiences.
      </h1>
    </div>

    <div class="relative flex flex-col items-center justify-center">
      <div>
        <h3 class="text-xl mb-10">
          What
          <span
            class="font-bold bg-gradient-to-r from-cyber-void to-neon-cyan bg-clip-text text-transparent animate-gradient"
          >
            I do
          </span>
        </h3>
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
