<template>
  <section
    id="about"
    class="relative text-white flex flex-col justify-center items-center overflow-hidden py-20"
  >
    <div
      class="relative flex flex-col items-center justify-center mb-40 text-center"
    >
      <img
        src="/images/memoji-01.svg"
        alt=""
        aria-hidden="true"
        class="pointer-events-none select-none absolute top-3 -left-24 w-[8rem] -z-10"
      />
      <img
        src="/images/memoji-02.svg"
        alt=""
        aria-hidden="true"
        class="pointer-events-none select-none absolute top-36 -right-20 w-[10rem] -z-10"
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

    <div class="relative z-10">
      <div>
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

        <div class="h-[100rem]">carousel</div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>
