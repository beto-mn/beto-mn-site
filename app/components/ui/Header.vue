<template>
  <header
    class="fixed top-0 w-full bg-transpartent z-50 transition-transform duration-500 ease-in-out"
    :class="[isHeaderVisible ? 'translate-y-0' : '-translate-y-full']"
  >
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Mobile Layout: Flex with justify-between -->
      <div class="flex justify-between items-center py-6 px-4 md:hidden">
        <!-- Logo - Mobile -->
        <div>
          <a
            href="#hero"
            class="text-2xl font-bold text-white hover:text-gray-300 transition-colors"
          >
            Beto Najera
          </a>
        </div>

        <!-- Mobile menu button -->
        <div>
          <button
            class="p-2 rounded-xl text-white font-medium backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl overflow-hidden transition-all duration-500 hover:bg-white/20 hover:scale-[1.02]"
            @click="mobileMenuOpen = !mobileMenuOpen"
          >
            <span class="sr-only">Abrir menú</span>
            <svg
              :class="[mobileMenuOpen ? 'hidden' : 'block', 'h-6 w-6']"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              :class="[mobileMenuOpen ? 'block' : 'hidden', 'h-6 w-6']"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Desktop Layout: Grid with 3 columns -->
      <div class="hidden md:grid md:grid-cols-3 md:items-center md:py-4">
        <!-- Logo - Left Column -->
        <div class="justify-self-start">
          <a
            href="#hero"
            class="text-2xl font-bold text-white hover:text-gray-300 transition-colors"
          >
            Beto Najera
          </a>
        </div>

        <!-- Navigation Desktop - Center Column -->
        <div class="justify-self-center">
          <div
            class="relative px-6 py-3 rounded-full text-white font-medium backdrop-blur-sm border border-white/20 shadow-[inset_0_1px_5px_rgba(255,255,255,0.6),_0_20px_25px_-5px_rgba(0,0,0,0.1),_0_10px_10px_-5px_rgba(0,0,0,0.04)] overflow-hidden transition-all duration-500 hover:bg-white/10 hover:scale-[1.02]"
          >
            <div class="flex items-baseline space-x-10 px-10 py-2 text-lg">
              <a href="#hero" class="" @click="scrollToSection('hero')">
                Home
              </a>
              <a href="#about" class="" @click="scrollToSection('about')">
                About
              </a>
              <a href="#projects" class="" @click="scrollToSection('projects')">
                Projects
              </a>
              <a href="#contact" class="" @click="scrollToSection('contact')">
                Contact
              </a>
            </div>
          </div>
        </div>

        <!-- Empty Space - Right Column -->
        <div />
      </div>

      <!-- Mobile Navigation -->
      <div :class="[mobileMenuOpen ? 'block' : 'hidden', 'md:hidden']">
        <div
          class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200"
        >
          <a href="#hero" class="" @click="navigateToSection('hero')"> Home </a>
          <a href="#about" class="" @click="navigateToSection('about')">
            About
          </a>
          <a href="#projects" class="" @click="navigateToSection('projects')">
            Projects
          </a>
          <a href="#contact" class="" @click="navigateToSection('contact')">
            Contact
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'

const mobileMenuOpen = ref(false)

// Header visibility state
const isHoverZone = ref(false) // cursor near top of the viewport
const isScrolling = ref(false) // recently scrolling
const isAtTop = ref(true) // near top of page
const isHeaderVisible = computed(
  () =>
    isAtTop.value ||
    isHoverZone.value ||
    isScrolling.value ||
    mobileMenuOpen.value
)

// Function for smooth scrolling to sections
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
}

// Function to navigate and close mobile menu
const navigateToSection = (sectionId: string) => {
  scrollToSection(sectionId)
  mobileMenuOpen.value = false
}

// Reveal/hide header based on scroll and cursor near top
let scrollHideTimeout: number | undefined
let initialShowTimeout: number | undefined

const TOP_STICKY_THRESHOLD = 8
const onScroll = () => {
  // close mobile menu when scrolling
  mobileMenuOpen.value = false

  // mark as scrolling (show header) and schedule hide after inactivity
  isScrolling.value = true
  if (scrollHideTimeout) window.clearTimeout(scrollHideTimeout)
  scrollHideTimeout = window.setTimeout(() => {
    isScrolling.value = false
  }, 1200)

  // keep header visible when at very top
  isAtTop.value = window.scrollY <= TOP_STICKY_THRESHOLD
}

const TOP_REVEAL_ZONE = 64 // px from top to reveal header on mouse proximity
const onMouseMove = (e: MouseEvent) => {
  if (e.clientY <= TOP_REVEAL_ZONE) {
    isHoverZone.value = true
  } else if (!mobileMenuOpen.value) {
    isHoverZone.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', onScroll)
  window.addEventListener('mousemove', onMouseMove)

  // initial top state
  isAtTop.value = window.scrollY <= TOP_STICKY_THRESHOLD

  // Show header briefly on load, then hide if idle
  isScrolling.value = true
  initialShowTimeout = window.setTimeout(() => {
    isScrolling.value = false
  }, 1500)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('mousemove', onMouseMove)
  if (scrollHideTimeout) window.clearTimeout(scrollHideTimeout)
  if (initialShowTimeout) window.clearTimeout(initialShowTimeout)
})
</script>
