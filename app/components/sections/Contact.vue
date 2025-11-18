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
        <form class="space-y-5" @submit.prevent="submitForm">
          <div>
            <label for="name" class="block text-sm font-medium text-white mb-1"
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
            <label for="email" class="block text-sm font-medium text-white mb-1"
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

          <div class="flex justify-center pt-1">
            <button
              type="submit"
              :disabled="isSubmitting"
              class="px-8 py-3 rounded-full text-white font-medium backdrop-blur-sm border border-white/20 shadow-[inset_0_1px_5px_rgba(255,255,255,0.6),_0_20px_25px_-5px_rgba(0,0,0,0.1),_0_10px_10px_-5px_rgba(0,0,0,0.04)] overflow-hidden transition-all duration-500 hover:bg-white/10 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {{ isSubmitting ? 'Sending...' : 'Submit' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const isSubmitting = ref(false)

const form = reactive({
  name: '',
  email: '',
  message: '',
})

const submitForm = async () => {
  isSubmitting.value = true
  await new Promise(resolve => setTimeout(resolve, 2000))
  console.log('Form submitted:', form)
  Object.assign(form, { name: '', email: '', message: '' })
  isSubmitting.value = false
}
</script>
