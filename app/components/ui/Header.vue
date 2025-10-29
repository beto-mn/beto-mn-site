<template>
  <header class="fixed top-0 w-full bg-transpartent z-50">
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
            class="relative px-6 py-3 rounded-full text-white font-medium backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl overflow-hidden transition-all duration-500 hover:bg-white/20 hover:scale-[1.02]"
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
          <a
            href="#hero"
            class=""
            @click="
              scrollToSection('hero')
              mobileMenuOpen = false
            "
          >
            Home
          </a>
          <a
            href="#about"
            class=""
            @click="
              scrollToSection('about')
              mobileMenuOpen = false
            "
          >
            About
          </a>
          <a
            href="#projects"
            class=""
            @click="
              scrollToSection('projects')
              mobileMenuOpen = false
            "
          >
            Projects
          </a>
          <a
            href="#contact"
            class=""
            @click="
              scrollToSection('contact')
              mobileMenuOpen = false
            "
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const mobileMenuOpen = ref(false)

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

// Close mobile menu on scroll
onMounted(() => {
  window.addEventListener('scroll', () => {
    mobileMenuOpen.value = false
  })
})
</script>
