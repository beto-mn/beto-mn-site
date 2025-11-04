<template>
  <div class="flex w-screen items-center md:px-10 gap-2 md:gap-4">
    <button
      type="button"
      class="hidden md:flex shrink-0 h-12 w-12 items-center justify-center rounded-full text-white font-medium backdrop-blur-sm border border-white/20 shadow-[inset_0_1px_5px_rgba(255,255,255,0.6),_0_20px_25px_-5px_rgba(0,0,0,0.1),_0_10px_10px_-5px_rgba(0,0,0,0.04)] hover:bg-white/10 hover:scale-[1.02] disabled:opacity-40 disabled:cursor-not-allowed"
      :disabled="!canPrev"
      aria-label="Previous"
      @click="prev"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="h-6 w-6"
      >
        <path
          fill-rule="evenodd"
          d="M15.53 4.47a.75.75 0 0 1 0 1.06L9.06 12l6.47 6.47a.75.75 0 1 1-1.06 1.06l-7-7a.75.75 0 0 1 0-1.06l7-7a.75.75 0 0 1 1.06 0Z"
          clip-rule="evenodd"
        />
      </svg>
    </button>

    <div
      class="flex-1 md:mx-auto md:max-w-[69rem] px-2 overflow-x-hidden overflow-y-visible"
    >
      <div
        ref="track"
        class="w-full flex gap-16 justify-center md:justify-start overflow-x-auto py-6 md:py-8 scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        @scroll="onScroll"
      >
        <slot />
      </div>
    </div>

    <button
      type="button"
      class="hidden md:flex shrink-0 h-12 w-12 items-center justify-center rounded-full text-white font-medium backdrop-blur-sm border border-white/20 shadow-[inset_0_1px_5px_rgba(255,255,255,0.6),_0_20px_25px_-5px_rgba(0,0,0,0.1),_0_10px_10px_-5px_rgba(0,0,0,0.04)] hover:bg-white/10 hover:scale-[1.02] disabled:opacity-40 disabled:cursor-not-allowed"
      :disabled="!canNext"
      aria-label="Next"
      @click="next"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="h-6 w-6"
      >
        <path
          fill-rule="evenodd"
          d="M8.47 19.53a.75.75 0 0 1 0-1.06L14.94 12 8.47 5.53a.75.75 0 1 1 1.06-1.06l7 7a.75.75 0 0 1 0 1.06l-7 7a.75.75 0 0 1-1.06 0Z"
          clip-rule="evenodd"
        />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const track = ref<HTMLElement | null>(null)
const canPrev = ref(false)
const canNext = ref(true)

let resizeObserver: ResizeObserver | undefined
let onWindowResize: (() => void) | undefined

const getPositions = () => {
  const el = track.value
  if (!el) return [] as number[]
  const elRect = el.getBoundingClientRect()
  const items = Array.from(
    el.querySelectorAll(':scope > .carousel-item')
  ) as HTMLElement[]
  return items.map(item => {
    const r = item.getBoundingClientRect()
    // position relative to scroll container's content box
    return Math.round(r.left - elRect.left + el.scrollLeft)
  })
}

const updateButtons = () => {
  const el = track.value
  if (!el) return
  const maxScroll = el.scrollWidth - el.clientWidth - 1
  canPrev.value = el.scrollLeft > 1
  canNext.value = el.scrollLeft < maxScroll
}

const scrollToClosest = (direction: 1 | -1) => {
  const el = track.value
  if (!el) return
  const x = el.scrollLeft
  const positions = getPositions()
  if (direction > 0) {
    const nextPos = positions.find(p => p > x + 4)
    if (nextPos !== undefined)
      el.scrollTo({ left: nextPos, behavior: 'smooth' })
  } else {
    const prevPos = [...positions].reverse().find(p => p < x - 4)
    if (prevPos !== undefined)
      el.scrollTo({ left: prevPos, behavior: 'smooth' })
  }
}

const next = () => scrollToClosest(1)
const prev = () => scrollToClosest(-1)

let rafId: number | null = null

const updateEmphasis = () => {
  const el = track.value
  if (!el) return

  const items = Array.from(
    el.querySelectorAll(':scope > .carousel-item')
  ) as HTMLElement[]

  // Disable emphasis on screens smaller than 768px: reset styles
  if (window.innerWidth < 768) {
    items.forEach(item => {
      const inner = (item.querySelector('.card-inner') as HTMLElement) || item
      inner.style.transform = 'scale(1)'
      inner.style.opacity = '1'
    })
    return
  }

  const rect = el.getBoundingClientRect()
  const centerX = rect.left + rect.width / 2

  items.forEach(item => {
    const r = item.getBoundingClientRect()
    const itemCenter = r.left + r.width / 2
    const distance = Math.abs(centerX - itemCenter)
    // Normalize distance [0..1] across half viewport
    const norm = Math.min(distance / (rect.width / 2), 1)
    const scale = 0.9 + (1 - norm) * 0.2 // 0.9 -> 1.1 para resaltar más el centro
    const opacity = 0.55 + (1 - norm) * 0.45 // 0.55 -> 1

    const inner = (item.querySelector('.card-inner') as HTMLElement) || item
    inner.style.transform = `scale(${scale})`
    inner.style.opacity = String(opacity)
  })
}

const onScroll = () => {
  updateButtons()
  if (rafId) cancelAnimationFrame(rafId)
  rafId = requestAnimationFrame(() => updateEmphasis())
}

onMounted(() => {
  updateButtons()
  updateEmphasis()
  // Observe size changes to keep buttons state in sync
  if ('ResizeObserver' in window && track.value) {
    resizeObserver = new ResizeObserver(() => {
      updateButtons()
      updateEmphasis()
    })
    resizeObserver.observe(track.value)
  }
  onWindowResize = () => {
    updateButtons()
    updateEmphasis()
  }
  window.addEventListener('resize', onWindowResize)
})

onUnmounted(() => {
  if (onWindowResize) window.removeEventListener('resize', onWindowResize)
  if (resizeObserver) resizeObserver.disconnect()
})
</script>
