<script setup lang="ts">
withDefaults(defineProps<{ size?: number; mono?: boolean }>(), {
  size: 48,
  mono: false,
})
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 96 96"
    fill="none"
    role="img"
    aria-label="Logo PT Viontech Integrasi Optima"
  >
    <defs>
      <linearGradient id="vt-building" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#4d9aff" />
        <stop offset="100%" stop-color="#1d4392" />
      </linearGradient>
      <linearGradient id="vt-orbit" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#45c4ff" />
        <stop offset="100%" stop-color="#2f6fde" />
      </linearGradient>
    </defs>

    <!-- City skyline -->
    <g :fill="mono ? 'currentColor' : 'url(#vt-building)'">
      <rect x="28" y="34" width="13" height="38" rx="1.5" />
      <rect x="44" y="22" width="15" height="50" rx="1.5" />
      <rect x="62" y="40" width="12" height="32" rx="1.5" />
    </g>

    <!-- Windows -->
    <g fill="#dceaff" opacity="0.9">
      <rect x="31" y="38" width="3" height="3" /><rect x="36" y="38" width="3" height="3" />
      <rect x="31" y="44" width="3" height="3" /><rect x="36" y="44" width="3" height="3" />
      <rect x="31" y="50" width="3" height="3" /><rect x="36" y="50" width="3" height="3" />
      <rect x="48" y="27" width="3" height="3" /><rect x="53" y="27" width="3" height="3" />
      <rect x="48" y="33" width="3" height="3" /><rect x="53" y="33" width="3" height="3" />
      <rect x="48" y="39" width="3" height="3" /><rect x="53" y="39" width="3" height="3" />
      <rect x="48" y="45" width="3" height="3" /><rect x="53" y="45" width="3" height="3" />
      <rect x="65" y="44" width="3" height="3" /><rect x="70" y="44" width="3" height="3" />
      <rect x="65" y="50" width="3" height="3" /><rect x="70" y="50" width="3" height="3" />
    </g>

    <!-- Orbit swoosh -->
    <g
      :stroke="mono ? 'currentColor' : 'url(#vt-orbit)'"
      stroke-width="5"
      stroke-linecap="round"
      fill="none"
    >
      <path d="M14 60c-4-14 10-30 34-36 22-6 42-1 46 10" />
      <path d="M86 44c2 13-12 27-34 33-20 5-38 2-44-7" opacity="0.85" />
    </g>

    <!-- Ground line -->
    <rect x="24" y="72" width="54" height="3.5" rx="1.75" :fill="mono ? 'currentColor' : '#1d4392'" />
  </svg>
</template>
