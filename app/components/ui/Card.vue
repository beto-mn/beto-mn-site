<template>
  <div
    class="carousel-item snap-center shrink-0 w-[calc(100vw-3rem)] sm:w-[calc(50%-1rem)] lg:w-auto lg:basis-1/3 lg:max-w-[20rem]"
  >
    <div
      class="card-inner h-full rounded-3xl p-7 text-white font-medium backdrop-blur-sm border border-white/20 shadow-[inset_0_1px_5px_rgba(255,255,255,0.6),_0_20px_25px_-5px_rgba(0,0,0,0.1),_0_10px_10px_-5px_rgba(0,0,0,0.04)] overflow-hidden transition-transform duration-300 will-change-transform"
    >
      <h4 class="text-3xl font-extrabold mb-6">{{ title }}</h4>
      <p class="text-md font-light text-white mb-8">
        {{ description }}
      </p>
      <div class="text-sm uppercase tracking-wide text-white mb-3">
        Tech Stack
      </div>
      <div
        v-if="stack.length > 0"
        class="flex flex-wrap items-center gap-3 md:gap-4 mb-8 select-none"
        aria-hidden="true"
      >
        <span v-for="(item, i) in stack" :key="i" class="shrink-0">
          <img
            :src="`/images/logos/${item}.svg`"
            :alt="`${item} logo`"
            class="inline-block w-10 h-10 object-contain"
          />
        </span>
      </div>
      <div v-if="tag.length > 0">
        <span
          v-for="(item, i) in tag"
          :key="i"
          class="inline-flex items-center rounded-full bg-white/10 px-4 py-1 m-1 text-xs font-light"
        >
          {{ item }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  description: string
  stack: string[]
  tag: string[]
}

defineProps<Props>()
</script>
