<template>
  <section
    id="hero"
    class="flex flex-col md:flex-row items-center justify-evenly min-h-screen px-6 pt-20 pb-2 md:py-0 text-white"
  >
    <!-- Text + buttons (desktop: left column) -->
    <div
      class="flex flex-col items-center md:items-start text-center md:text-left"
    >
      <!-- Text -->
      <div class="max-w-xl space-y-3">
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold">
          Hi, I'm Roberto!
        </h1>

        <h2
          class="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-neon-cyan via-cyber-pulse to-plasma-magenta bg-clip-text text-transparent animate-gradient"
        >
          <span ref="roleText">Full Stack Developer</span>
        </h2>

        <div class="relative overflow-hidden w-full max-w-md">
          <div
            class="pointer-events-none absolute left-0 top-0 h-full w-24 md:w-48 bg-gradient-to-r from-void-black to-transparent z-10"
          />
          <div
            class="pointer-events-none absolute right-0 top-0 h-full w-24 md:w-48 bg-gradient-to-l from-void-black to-transparent z-10"
          />

          <div class="flex animate-marquee">
            <template v-for="(tech, index) in technologies" :key="index">
              <div class="flex items-center">
                <span class="text-gray-400 font-medium text-lg ml-4">
                  {{ tech }}
                </span>
                <span class="text-3xl text-gray-500 leading-none ml-4">•</span>
              </div>
            </template>

            <!-- Duplicate for infinite loop -->
            <template v-for="(tech, index) in technologies" :key="index">
              <div class="flex items-center">
                <span class="text-gray-400 font-medium text-lg ml-4">
                  {{ tech }}
                </span>
                <span class="text-3xl text-gray-500 leading-none ml-4">•</span>
              </div>
            </template>
          </div>
        </div>
      </div>

      <!-- Photo: visible only on mobile, between text and buttons -->
      <div class="relative my-8 md:hidden">
        <div class="absolute inset-0 bg-electric-blue rounded-full blur-3xl" />
        <NuxtImg
          src="/images/photo.jpg"
          alt="Roberto Mirón Nájera"
          format="webp"
          loading="eager"
          width="208"
          height="208"
          class="relative rounded-full w-52 h-52 object-cover shadow-2xl"
        />
      </div>

      <!-- Buttons -->
      <div
        class="w-full flex flex-col items-center sm:items-start sm:flex-row gap-4 md:mt-20"
      >
        <ui-button variant="primary" size="lg" href="#contact">
          Got a project?
        </ui-button>

        <ui-button
          variant="gradient"
          size="lg"
          href="/downloads/resume.pdf"
          download
        >
          Download Resume
        </ui-button>
      </div>
    </div>

    <!-- Photo: visible only on desktop, right column -->
    <div class="relative hidden md:block">
      <div class="absolute inset-0 bg-electric-blue rounded-full blur-3xl" />
      <NuxtImg
        src="/images/photo.jpg"
        alt="Roberto Mirón Nájera"
        format="webp"
        loading="eager"
        fetchpriority="high"
        width="320"
        height="320"
        class="relative rounded-full w-80 h-80 object-cover shadow-2xl"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
const technologies = [
  'TypeScript',
  'Node.js',
  'NestJS',
  'Go',
  'AWS',
  'Terraform',
  'Docker',
  'GraphQL',
  'REST',
  'gRPC',
  'React',
  'Next.js',
  'Vue.js',
  'Nuxt.js',
  'PostgreSQL',
  'MongoDB',
]
</script>

<style scoped>
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-marquee {
  display: flex;
  width: max-content;
  animation: marquee 40s linear infinite;
}
</style>
