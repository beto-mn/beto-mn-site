<template>
  <section
    class="flex flex-col md:flex-row items-center justify-evenly min-h-screen px-8 text-white"
  >
    <div class="flex flex-col">
      <div class="max-w-xl space-y-3">
        <h1 class="text-6xl font-bold">Hi, I'm Roberto!</h1>

        <h2
          class="text-2xl font-semibold bg-gradient-to-r from-neon-cyan via-cyber-pulse to-plasma-magenta bg-clip-text text-transparent animate-gradient"
        >
          <span ref="roleText">Full Stack Developer</span>
        </h2>

        <div class="relative overflow-hidden w-full max-w-md">
          <div
            class="pointer-events-none absolute left-0 top-0 h-full w-48 bg-gradient-to-r from-black to-transparent z-10"
          />
          <div
            class="pointer-events-none absolute right-0 top-0 h-full w-48 bg-gradient-to-l from-black to-transparent z-10"
          />

          <div class="flex animate-marquee">
            <template v-for="(tech, index) in technologies" :key="index">
              <div class="flex items-center">
                <span class="text-gray-400 font-medium text-lg ml-4">
                  {{ tech }}
                </span>

                <span class="text-3xl text-gray-500 leading-none ml-4">
                  •
                </span>
              </div>
            </template>

            <!-- Duplicate for infinite loop -->
            <template v-for="(tech, index) in technologies" :key="index">
              <div class="flex items-center">
                <span class="text-gray-400 font-medium text-lg ml-4">
                  {{ tech }}
                </span>

                <span class="text-3xl text-gray-500 leading-none ml-4">
                  •
                </span>
              </div>
            </template>
          </div>
        </div>
      </div>

      <div>
        <div class="flex gap-4 mt-20">
          <button
            class="px-6 py-5 rounded-full text-white font-medium backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl overflow-hidden transition-all duration-500 hover:bg-white/20 hover:scale-[1.02]"
          >
            Got a project?
          </button>
          <button
            class="relative p-[1px] rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 hover:from-purple-400 hover:via-pink-400 hover:to-indigo-400 transition"
          >
            <span
              class="block px-6 py-5 rounded-full bg-black text-white font-medium hover:bg-black/80 transition-colors duration-300"
            >
              Download Resume
            </span>
          </button>
        </div>
      </div>
    </div>

    <!-- Image with blue halo -->
    <div class="relative mt-12 md:mt-0">
      <div class="absolute inset-0 bg-electric-blue rounded-full blur-3xl" />
      <img
        src="/photo.jpg"
        alt="Roberto"
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
