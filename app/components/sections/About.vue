<template>
  <section
    id="about"
    class="relative text-white flex flex-col justify-center items-center overflow-x-hidden overflow-y-visible py-20"
  >
    <div
      class="relative flex flex-col items-center justify-center mb-40 text-center"
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

      <h3 class="text-xl mb-16">
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
        <h3 class="text-xl mb-16">
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
    title: 'Front-End 🎨',
    description:
      'I design and build fast, accessible, and user-friendly interfaces optimized for any device.',
    stack: ['graphql'],
    tag: 'Clean Architecture',
  },
  {
    title: 'Front-End 🎨',
    description:
      'I design and build fast, accessible, and user-friendly interfaces optimized for any device.',
    stack: ['graphql'],
    tag: 'Clean Architecture',
  },
  {
    title: 'Front-End 🎨',
    description:
      'I design and build fast, accessible, and user-friendly interfaces optimized for any device.',
    stack: ['graphql'],
    tag: 'Clean Architecture',
  },
  {
    title: 'Front-End 🎨',
    description:
      'I design and build fast, accessible, and user-friendly interfaces optimized for any device.',
    stack: ['graphql'],
    tag: 'Clean Architecture',
  },
  // {
  //   title: 'Front-End 🎨',
  //   description:
  //     'I design and build fast, accessible, and user-friendly interfaces optimized for any device.',
  //   stack: ['graphql', 'react', 'typescript'],
  //   tag: 'Clean Architecture',
  // },
  // {
  //   title: 'Front-End 🎨',
  //   description:
  //     'I design and build fast, accessible, and user-friendly interfaces optimized for any device.',
  //   stack: ['graphql', 'react', 'typescript'],
  //   tag: 'Clean Architecture',
  // },
  // {
  //   title: 'Front-End 🎨',
  //   description:
  //     'I design and build fast, accessible, and user-friendly interfaces optimized for any device.',
  //   stack: ['graphql', 'react', 'typescript'],
  //   tag: 'Clean Architecture',
  // },
  // {
  //   title: 'Front-End 🎨',
  //   description:
  //     'I design and build fast, accessible, and user-friendly interfaces optimized for any device.',
  //   stack: ['graphql', 'react', 'typescript'],
  //   tag: 'Clean Architecture',
  // },
  // {
  //   title: 'Front-End 🎨',
  //   description:
  //     'I design and build fast, accessible, and user-friendly interfaces optimized for any device.',
  //   stack: ['graphql', 'react', 'typescript'],
  //   tag: 'Clean Architecture',
  // },
]
</script>
