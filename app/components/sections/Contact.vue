<template>
  <section
    id="contact"
    class="relative min-h-screen flex items-center py-20 px-4 sm:px-8"
  >
    <!-- Background glow -->
    <div class="absolute inset-0 pointer-events-none">
      <div
        class="absolute bottom-[-4rem] left-1/4 w-[500px] h-[500px] bg-purple-700/40 rounded-full blur-[120px]"
      />
      <div
        class="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-indigo-600/30 rounded-full blur-[100px]"
      />
    </div>

    <div
      class="relative z-10 max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center"
    >
      <!-- Left: text -->
      <div class="text-white">
        <h2 class="text-4xl md:text-5xl font-bold mb-6">👋 Let's connect!</h2>
        <p class="text-gray-300 text-lg leading-relaxed max-w-sm">
          Whether you want to collaborate, talk tech, or just say hi — feel free
          to reach out. I'll get back to you as soon as possible.
        </p>
      </div>

      <!-- Right: form card -->
      <div
        class="rounded-3xl p-5 sm:p-8 backdrop-blur-sm border border-white/20 shadow-[inset_0_1px_5px_rgba(255,255,255,0.6),_0_20px_25px_-5px_rgba(0,0,0,0.1),_0_10px_10px_-5px_rgba(0,0,0,0.04)] overflow-hidden"
      >
        <Transition name="fade" mode="out-in">
          <!-- Success state -->
          <div
            v-if="isSuccess"
            key="success"
            class="flex flex-col items-center justify-center py-10 text-center gap-5"
          >
            <div
              class="flex items-center justify-center w-16 h-16 rounded-full bg-neon-cyan/10 border border-neon-cyan/30"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="w-8 h-8 text-neon-cyan"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <div>
              <h3
                class="text-2xl font-bold bg-gradient-to-r from-neon-cyan to-cyber-void bg-clip-text text-transparent mb-2"
              >
                Message sent!
              </h3>
              <p class="text-gray-300 text-sm max-w-xs">
                Thanks for reaching out. I'll get back to you as soon as
                possible.
              </p>
            </div>
            <button
              class="mt-2 px-6 py-2 rounded-full text-white text-sm font-medium backdrop-blur-sm border border-white/20 shadow-[inset_0_1px_5px_rgba(255,255,255,0.6),_0_20px_25px_-5px_rgba(0,0,0,0.1),_0_10px_10px_-5px_rgba(0,0,0,0.04)] hover:bg-white/10 transition-all duration-300"
              @click="reset"
            >
              Send another message
            </button>
          </div>

          <!-- Form state -->
          <form
            v-else
            key="form"
            class="space-y-5"
            @submit.prevent="submitForm"
          >
            <div>
              <label
                for="name"
                class="block text-sm font-medium text-white mb-1"
                >Name</label
              >
              <input
                id="name"
                v-model="form.name"
                type="text"
                required
                placeholder="Your name"
                class="w-full rounded-xl px-4 py-3 text-white backdrop-blur-sm border border-white/20 shadow-[inset_0_1px_5px_rgba(255,255,255,0.6),_0_20px_25px_-5px_rgba(0,0,0,0.1),_0_10px_10px_-5px_rgba(0,0,0,0.04)] focus:outline-none focus:border-white/40 transition-colors bg-transparent"
              />
            </div>

            <div>
              <label
                for="email"
                class="block text-sm font-medium text-white mb-1"
                >Email</label
              >
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                placeholder="Your email"
                class="w-full rounded-xl px-4 py-3 text-white backdrop-blur-sm border border-white/20 shadow-[inset_0_1px_5px_rgba(255,255,255,0.6),_0_20px_25px_-5px_rgba(0,0,0,0.1),_0_10px_10px_-5px_rgba(0,0,0,0.04)] focus:outline-none focus:border-white/40 transition-colors bg-transparent"
              />
            </div>

            <div>
              <label
                for="message"
                class="block text-sm font-medium text-white mb-1"
                >Message</label
              >
              <textarea
                id="message"
                v-model="form.message"
                rows="5"
                required
                placeholder="Your message here..."
                class="w-full rounded-xl px-4 py-3 text-white backdrop-blur-sm border border-white/20 shadow-[inset_0_1px_5px_rgba(255,255,255,0.6),_0_20px_25px_-5px_rgba(0,0,0,0.1),_0_10px_10px_-5px_rgba(0,0,0,0.04)] focus:outline-none focus:border-white/40 transition-colors resize-none bg-transparent"
              />
            </div>

            <p v-if="hasError" class="text-sm text-plasma-magenta text-center">
              Something went wrong. Please try again.
            </p>

            <div class="flex justify-center pt-1">
              <button
                type="submit"
                :disabled="isSubmitting"
                class="flex items-center gap-2 px-8 py-3 rounded-full text-white font-medium backdrop-blur-sm border border-white/20 shadow-[inset_0_1px_5px_rgba(255,255,255,0.6),_0_20px_25px_-5px_rgba(0,0,0,0.1),_0_10px_10px_-5px_rgba(0,0,0,0.04)] overflow-hidden transition-all duration-500 hover:bg-white/10 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ui-spinner v-if="isSubmitting" size="sm" />
                {{ isSubmitting ? 'Sending...' : 'Submit' }}
              </button>
            </div>
          </form>
        </Transition>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const API_URL =
  'https://0iz3178srb.execute-api.mx-central-1.amazonaws.com/api/contact'
const API_KEY = 'CYTB6TAwnPcRFFEVFoBd5E87X6sPTbd8lQG1jzta'

const isSubmitting = ref(false)
const isSuccess = ref(false)
const hasError = ref(false)

const form = reactive({
  name: '',
  email: '',
  message: '',
})

const submitForm = async () => {
  isSubmitting.value = true
  hasError.value = false

  try {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY,
      },
      body: JSON.stringify({
        name: form.name.toUpperCase(),
        email: form.email.toLowerCase(),
        message: form.message,
      }),
    })

    if (!res.ok) throw new Error(`HTTP ${res.status}`)

    Object.assign(form, { name: '', email: '', message: '' })
    isSuccess.value = true
  } catch {
    hasError.value = true
  } finally {
    isSubmitting.value = false
  }
}

const reset = () => {
  isSuccess.value = false
  hasError.value = false
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(8px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
