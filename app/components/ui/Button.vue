<template>
  <a
    v-if="href"
    :href="href"
    :download="normalizedDownload"
    :target="target"
    :rel="rel"
    :class="outerClasses"
  >
    <template v-if="props.variant === 'gradient'">
      <span :class="innerSpanClasses">
        <slot />
      </span>
    </template>
    <template v-else>
      <slot />
    </template>
  </a>

  <button v-else :class="outerClasses" @click="onClick">
    <template v-if="props.variant === 'gradient'">
      <span :class="innerSpanClasses">
        <slot />
      </span>
    </template>
    <template v-else>
      <slot />
    </template>
  </button>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'gradient'
  size?: 'lg' | 'md' | 'sm'
  onClick?: () => void
  href?: string
  download?: boolean | string
  target?: '_self' | '_blank' | '_parent' | '_top'
  rel?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'lg',
})

const variants = {
  primary:
    'rounded-full text-white text-center font-medium backdrop-blur-sm border border-white/20 shadow-[inset_0_1px_5px_rgba(255,255,255,0.6),_0_20px_25px_-5px_rgba(0,0,0,0.1),_0_10px_10px_-5px_rgba(0,0,0,0.04)] overflow-hidden transition-all duration-500 hover:bg-white/10 hover:scale-[1.02]',
  gradient:
    'relative p-[1px] rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 hover:from-purple-400 hover:via-pink-400 hover:to-indigo-400 transition cursor-pointer',
}

const sizes = {
  lg: 'px-8 py-5 text-lg font-medium',
  md: 'px-6 py-3 text-base font-medium',
  sm: 'px-4 py-2 text-sm font-medium',
}

const outerClasses = computed(() =>
  props.variant === 'gradient'
    ? variants.gradient
    : [sizes[props.size], variants[props.variant]]
)

const innerSpanClasses = computed(() => [
  'block rounded-full bg-void-black text-white text-center hover:bg-void-black/80 transition-colors duration-300 cursor-pointer',
  sizes[props.size],
])

const normalizedDownload = computed(() => {
  if (props.download === true) return ''
  if (typeof props.download === 'string') return props.download
  return undefined
})
</script>
