<template>
  <div class="flex flex-col w-full gap-4">
    <!-- Track + buttons row -->
    <div class="flex w-full items-center md:px-10 gap-2 md:gap-4">
      <button
        type="button"
        class="hidden lg:flex shrink-0 h-12 w-12 items-center justify-center rounded-full text-white font-medium backdrop-blur-sm border border-white/20 shadow-[inset_0_1px_5px_rgba(255,255,255,0.6),_0_20px_25px_-5px_rgba(0,0,0,0.1),_0_10px_10px_-5px_rgba(0,0,0,0.04)] hover:bg-white/10 hover:scale-[1.02] disabled:opacity-40 disabled:cursor-not-allowed"
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
        class="flex-1 md:mx-auto md:max-w-[69rem] px-2 md:px-0 overflow-x-hidden overflow-y-visible"
      >
        <div
          ref="track"
          class="relative w-full flex gap-8 lg:gap-16 justify-start overflow-x-auto py-6 md:py-8 scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          @scroll="onScroll"
        >
          <slot />
        </div>
      </div>

      <button
        type="button"
        class="hidden lg:flex shrink-0 h-12 w-12 items-center justify-center rounded-full text-white font-medium backdrop-blur-sm border border-white/20 shadow-[inset_0_1px_5px_rgba(255,255,255,0.6),_0_20px_25px_-5px_rgba(0,0,0,0.1),_0_10px_10px_-5px_rgba(0,0,0,0.04)] hover:bg-white/10 hover:scale-[1.02] disabled:opacity-40 disabled:cursor-not-allowed"
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

    <!-- Dots: mobile + tablet only -->
    <div class="flex lg:hidden justify-center gap-2">
      <button
        v-for="(_, i) in dotsCount"
        :key="i"
        class="rounded-full transition-all duration-300"
        :class="i === currentIndex ? 'w-6 h-2 bg-white' : 'w-2 h-2 bg-white/30'"
        :aria-label="`Go to card ${i + 1}`"
        @click="scrollToIndex(i)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const track = ref<HTMLElement | null>(null)
const canPrev = ref(false)
const canNext = ref(true)
const currentIndex = ref(0)
const totalItems = ref(0)
const dotsCount = ref(0)

let resizeObserver: ResizeObserver | undefined
let onWindowResize: (() => void) | undefined

const getItems = () => {
  const el = track.value
  if (!el) return [] as HTMLElement[]
  return Array.from(
    el.querySelectorAll(':scope > .carousel-item')
  ) as HTMLElement[]
}

const DESKTOP_VISIBLE = 3

const getVisibleForScreen = () => {
  if (typeof window === 'undefined') return 1
  if (window.innerWidth >= 1024) return DESKTOP_VISIBLE
  if (window.innerWidth >= 640) return 2
  return 1
}

const updateDotsCount = () => {
  const visible = getVisibleForScreen()
  dotsCount.value = Math.max(1, totalItems.value - visible + 1)
}

const updateButtons = () => {
  const items = getItems()
  canPrev.value = currentIndex.value > 0
  canNext.value = currentIndex.value < items.length - DESKTOP_VISIBLE
}

const scrollToIndex = (index: number) => {
  const el = track.value
  if (!el) return
  const items = getItems()
  const maxIndex = Math.max(0, items.length - getVisibleForScreen())
  const clamped = Math.max(0, Math.min(index, maxIndex))
  const target = items[clamped]
  if (!target) return
  currentIndex.value = clamped
  el.scrollTo({ left: target.offsetLeft, behavior: 'smooth' })
  updateButtons()
}

// Sync index from manual scroll (touch/swipe)
const syncIndexFromScroll = () => {
  const el = track.value
  if (!el) return
  const items = getItems()
  const x = el.scrollLeft
  let closest = 0
  let minDist = Infinity
  items.forEach((item, i) => {
    const dist = Math.abs(item.offsetLeft - x)
    if (dist < minDist) {
      minDist = dist
      closest = i
    }
  })
  currentIndex.value = closest
  updateButtons()
}

const next = () => scrollToIndex(currentIndex.value + 1)
const prev = () => scrollToIndex(currentIndex.value - 1)

let rafId: number | null = null

const updateEmphasis = () => {
  const el = track.value
  if (!el) return

  const items = Array.from(
    el.querySelectorAll(':scope > .carousel-item')
  ) as HTMLElement[]

  // Disable emphasis on tablet and mobile — only active on desktop
  if (window.innerWidth < 1024) {
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
  syncIndexFromScroll()
  if (rafId) cancelAnimationFrame(rafId)
  rafId = requestAnimationFrame(() => updateEmphasis())
}

onMounted(() => {
  currentIndex.value = 0
  totalItems.value = getItems().length
  updateDotsCount()
  updateButtons()
  updateEmphasis()
  if ('ResizeObserver' in window && track.value) {
    resizeObserver = new ResizeObserver(() => {
      updateDotsCount()
      updateButtons()
      updateEmphasis()
    })
    resizeObserver.observe(track.value)
  }
  onWindowResize = () => {
    updateDotsCount()
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
