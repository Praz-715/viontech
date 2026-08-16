<script setup lang="ts">
import { company } from '~/data/company'

/**
 * The official Viontech artwork. `full` is the stacked lockup (mark + wordmark),
 * `mark` is the globe/skyline symbol on its own — used where the wordmark would
 * be too small to read, e.g. the sticky header.
 */
const props = withDefaults(
  defineProps<{ variant?: 'full' | 'mark'; height?: number; priority?: boolean }>(),
  { variant: 'full', height: 64, priority: false },
)

// Intrinsic sizes — declared so the browser reserves space and never shifts layout.
const RATIO = { full: 1536 / 1024, mark: 1031 / 720 } as const

const src = computed(() => (props.variant === 'full' ? company.logo : company.logoMark))
const width = computed(() => Math.round(props.height * RATIO[props.variant]))
</script>

<template>
  <img
    :src="src"
    :width="width"
    :height="height"
    :alt="`Logo ${company.nama}`"
    :loading="priority ? 'eager' : 'lazy'"
    :fetchpriority="priority ? 'high' : undefined"
    decoding="async"
    class="brand-logo"
  />
</template>

<style scoped>
.brand-logo {
  height: v-bind('`${height}px`');
  width: auto;
  object-fit: contain;
}
</style>
