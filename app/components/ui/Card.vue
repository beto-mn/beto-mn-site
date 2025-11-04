<template>
  <div
    class="carousel-item snap-center md:snap-start shrink-0 basis-full sm:basis-1/2 md:basis-1/3 max-w-[20rem]"
  >
    <div
      class="card-inner h-full rounded-3xl p-8 text-white font-medium backdrop-blur-sm border border-white/20 shadow-[inset_0_1px_5px_rgba(255,255,255,0.6),_0_20px_25px_-5px_rgba(0,0,0,0.1),_0_10px_10px_-5px_rgba(0,0,0,0.04)] overflow-hidden transition-transform duration-300 will-change-transform"
    >
      <h4 class="text-3xl font-extrabold mb-6">{{ title }}</h4>
      <p class="text-lg text-white/90 mb-8">
        {{ description }}
      </p>
      <div class="text-sm uppercase tracking-wide text-white/70 mb-3">
        Tech Stack
      </div>
      <div
        class="flex items-center gap-4 text-3xl mb-8 select-none"
        aria-hidden="true"
      >
        <span v-for="(item, i) in stack" :key="i">{{ item }}</span>
      </div>
      <div v-if="tag">
        <span
          class="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm"
          >{{ tag }}</span
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue'

interface Props {
  title: string
  description: string
  stack: string[]
  tag: string
}

const props = defineProps<Props>()

const { title, description, stack, tag } = toRefs(props)
</script>
