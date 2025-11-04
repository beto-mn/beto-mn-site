<template>
  <div class="relative min-h-screen w-full overflow-hidden bg-void-black">
    <div class="absolute inset-0 overflow-hidden">
      <!-- Gradient Orbs -->
      <div
        class="absolute left-1/2 -top-[28rem] transform -translate-x-1/2 w-[40rem] h-[40rem] rounded-full blur-[70px] bg-gradient-move-01"
      />
      <div
        class="absolute top-[45rem] left-0 transform -translate-x-1/2 w-96 h-96 bg-quantum-blue/50 rounded-full blur-3xl"
      />
     <div
        class="absolute left-1/2 top-[100rem] transform -translate-x-1/2 w-[50rem] h-[50rem] rounded-full blur-[100px] bg-gradient-move-02"
      />
    </div>

    <!-- Content -->
    <div class="relative z-10">
      <ui-header />

      <sections-hero />
      <sections-about />
    </div>
  </div>
</template>

<script setup lang="ts">
// Page meta
useHead({
  title: 'Roberto Mirón Nájera',
  meta: [
    {
      name: 'Description',
      content:
        'Full Stack Developer passionate about creating exceptional digital experiences with TypeScript, AWS, Node.js, Terraform, and GraphQL.',
    },
  ],
})
</script>

<style scoped>
@keyframes gradient-move {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.bg-gradient-move-01 {
  background: linear-gradient(
    270deg,
    rgba(219, 40, 121, 0.6),
    rgba(156, 32, 187, 0.6),
    rgba(219, 40, 121, 0.6)
  );
  background-size: 200% 200%;
  animation: gradient-move 8s ease infinite;
}

.bg-gradient-move-02 {
  background: linear-gradient(
    270deg,
    rgb(0, 181, 232, 0.6),
    rgb(219, 40, 120, 0.6),
    rgb(166, 59, 194, 0.6)
  );
  background-size: 200% 200%;
  animation: gradient-move 8s ease infinite;
}
</style>
