<script setup lang="ts">
/**
 * Stroke icon set (24×24 grid) used across every section.
 * Single source of truth keeps line weight & style consistent site-wide.
 */
const props = withDefaults(defineProps<{ name: string; size?: number }>(), {
  size: 24,
})

const icons: Record<string, string> = {
  // ---- trust & service ----
  bank: '<path d="M3 9.5 12 4l9 5.5M5 10v8M9.5 10v8M14.5 10v8M19 10v8M3 18.5h18v1.5H3z"/>',
  building:
    '<path d="M4 20.5V6.8l7-3.3v17M11 20.5V10l7 2.6v7.9M2.5 20.5h19"/><path d="M6.5 9.5h2M6.5 13h2M6.5 16.5h2M13.5 14.5h2M13.5 17.5h2"/>',
  factory:
    '<path d="M3 20V9.5l5 3.5V9.5l5 3.5V9.5l5 3.5V5h3v15H3Z"/><path d="M7 16.5h2M12 16.5h2M17 16.5h2"/>',
  shield:
    '<path d="M12 3 5 5.8v5.4c0 4.4 3 8 7 9.3 4-1.3 7-4.9 7-9.3V5.8L12 3Z"/><path d="m9.2 11.6 2 2 3.6-3.9"/>',
  badge:
    '<circle cx="12" cy="9" r="5.5"/><path d="m8.8 13.5-1.3 7 4.5-2.6 4.5 2.6-1.3-7M12 6.5l.9 1.8 2 .3-1.4 1.4.3 2-1.8-1-1.8 1 .3-2-1.4-1.4 2-.3.9-1.8Z"/>',
  truck:
    '<path d="M2.5 6.5h11.5v10.5H2.5z"/><path d="M14 10h3.6l3.4 3.8V17H14z"/><circle cx="7" cy="18.5" r="1.9"/><circle cx="17.2" cy="18.5" r="1.9"/><path d="M8.9 18.5h6.4"/>',
  clipboard:
    '<path d="M9 4.5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-12a2 2 0 0 0-2-2h-2"/><rect x="9" y="2.5" width="6" height="4" rx="1.3"/><path d="M8.5 11.5h7M8.5 15h4.5"/>',
  handshake:
    '<path d="m12 6.5 3.2-2 5.8 3.4-3 5.3M3 7.9l5.8-3.4 3.2 2-4.4 4.2a1.6 1.6 0 0 0 2.2 2.3l2.2-2 4.8 4.4a1.5 1.5 0 0 1-2 2.2l-1-.9"/><path d="m13.8 17.7-1.2 1a1.5 1.5 0 0 1-2-2.2"/>',
  team: '<circle cx="9" cy="8" r="3.2"/><path d="M3.5 19c.6-3 2.9-4.6 5.5-4.6S13.9 16 14.5 19"/><circle cx="16.5" cy="9" r="2.6"/><path d="M15.5 14.6c2.4.1 4.3 1.6 5 4.4"/>',
  team2: '<circle cx="12" cy="8" r="3.4"/><path d="M5.5 20c.8-3.6 3.4-5.5 6.5-5.5s5.7 1.9 6.5 5.5"/>',

  // ---- product categories ----
  cabinet:
    '<rect x="4.5" y="3" width="15" height="18" rx="1.8"/><path d="M12 3v18M9.4 10.2v3.2M14.6 10.2v3.2M4.5 21.5v.5M19.5 21.5v.5"/>',
  chair:
    '<rect x="7.3" y="3" width="9.4" height="8" rx="2.2"/><path d="M5.5 13.5h13M12 13.5v4.4M8 21l4-3 4 3"/>',
  podium:
    '<path d="M6.4 4.5h11.2l-1.1 3.2H7.5z"/><path d="M9 7.7h6V17H9z"/><path d="M5.8 20.8h12.4v-3.8H5.8z"/>',
  shelf:
    '<rect x="3.5" y="3.5" width="17" height="17" rx="1.6"/><path d="M3.5 9.2h17M3.5 14.8h17M6.5 20.5v1M17.5 20.5v1"/>',
  mirror:
    '<rect x="6.8" y="2.6" width="10.4" height="14.8" rx="5.2"/><path d="M12 17.4v3.4M8.8 20.8h6.4"/>',
  bed: '<path d="M2.5 20V8.5M2.5 13.6h19V20M21.5 13.6v-2.4a2.2 2.2 0 0 0-2.2-2.2H11.6v4.6"/><rect x="4.6" y="10.4" width="5" height="3.2" rx="1.3"/>',
  pillow:
    '<path d="M4.4 8.2c4-1.3 11.2-1.3 15.2 0 1.3 2.3 1.3 5.3 0 7.6-4 1.3-11.2 1.3-15.2 0-1.3-2.3-1.3-5.3 0-7.6Z"/>',
  plug: '<path d="M9 2.8v5.4M15 2.8v5.4"/><path d="M6.4 8.2h11.2v2.6a5.6 5.6 0 1 1-11.2 0z"/><path d="M12 16.4v4.8"/>',
  flag: '<path d="M6 21.2V3"/><path d="M6 4.2h11.4l-2.3 3.6 2.3 3.6H6z"/>',

  // ---- IT solution ----
  server: '<rect x="3" y="4" width="18" height="6.5" rx="1.5"/><rect x="3" y="13.5" width="18" height="6.5" rx="1.5"/><path d="M6.5 7.25h.01M6.5 16.75h.01M10.5 7.25h6M10.5 16.75h6"/>',
  brain: '<path d="M9.5 4a3 3 0 0 0-3 3 3 3 0 0 0-2 2.8 3 3 0 0 0 1 5.7A3.2 3.2 0 0 0 9 20a2.8 2.8 0 0 0 3-2.8V6.8A2.8 2.8 0 0 0 9.5 4Z"/><path d="M14.5 4a3 3 0 0 1 3 3 3 3 0 0 1 2 2.8 3 3 0 0 1-1 5.7A3.2 3.2 0 0 1 15 20a2.8 2.8 0 0 1-3-2.8V6.8A2.8 2.8 0 0 1 14.5 4Z"/>',
  database: '<ellipse cx="12" cy="5.5" rx="7.5" ry="2.8"/><path d="M4.5 5.5v13c0 1.55 3.36 2.8 7.5 2.8s7.5-1.25 7.5-2.8v-13"/><path d="M4.5 12c0 1.55 3.36 2.8 7.5 2.8s7.5-1.25 7.5-2.8"/>',
  cloud: '<path d="M7 18.5a4.5 4.5 0 0 1-.6-8.96 5.5 5.5 0 0 1 10.7-1.04A4.25 4.25 0 0 1 17 18.5H7Z"/>',
  code: '<path d="m8 8.5-4 3.5 4 3.5M16 8.5l4 3.5-4 3.5M13.5 5.5l-3 13"/>',
  puzzle: '<path d="M10 4h4v3.2a1.8 1.8 0 1 0 3.4 1V8H20v4h-3.2a1.8 1.8 0 1 0-1 3.4H20V20h-4v-3.2a1.8 1.8 0 1 0-3.4-1V20H4v-4h3.2a1.8 1.8 0 1 0 1-3.4H4V8h6V4Z"/>',
  sectors: '<rect x="3.5" y="9" width="7" height="11"/><rect x="13.5" y="4" width="7" height="16"/><path d="M6 12h2M6 15h2M16 8h2M16 11.5h2M16 15h2"/>',
  clock: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7v5.2l3.4 2"/>',
  bulb: '<path d="M12 3.5a6 6 0 0 1 3.4 10.9c-.7.5-1 1.3-1 2.1H9.6c0-.8-.3-1.6-1-2.1A6 6 0 0 1 12 3.5Z"/><path d="M10 19.5h4M10.8 21.5h2.4"/>',
  architect: '<path d="M12 3.5 4 8l8 4.5L20 8l-8-4.5Z"/><path d="m4 12 8 4.5L20 12M4 16l8 4.5 8-4.5"/>',
  headset: '<path d="M4.5 13a7.5 7.5 0 0 1 15 0"/><rect x="3.5" y="12.5" width="4" height="6" rx="1.8"/><rect x="16.5" y="12.5" width="4" height="6" rx="1.8"/><path d="M19.5 18.5v1a2.5 2.5 0 0 1-2.5 2.5h-3"/>',
  rocket: '<path d="M12 3c3.5 1.6 5.5 5 5.5 9l-2.3 2.3h-6.4L6.5 12c0-4 2-7.4 5.5-9Z"/><circle cx="12" cy="9.5" r="1.8"/><path d="M8.8 14.3 6.5 18l3-.8M15.2 14.3 17.5 18l-3-.8M12 15.5V20"/>',

  // ---- contact ----
  phone:
    '<path d="M6.5 3.5h3l1.5 4.5-2 1.5a12 12 0 0 0 5.5 5.5l1.5-2 4.5 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.7a2 2 0 0 1 2-2.2Z"/>',
  whatsapp:
    '<path d="M12 3.2a8.4 8.4 0 0 0-7.2 12.7L3.4 20.8l5.1-1.3A8.4 8.4 0 1 0 12 3.2Z"/><path d="M9 8c.2-.5.4-.5.6-.5h.5c.2 0 .4 0 .6.5l.6 1.5c.1.2 0 .4-.1.5l-.4.5c-.1.2-.2.3-.1.5a5 5 0 0 0 2.3 2.3c.2.1.4.1.5 0l.5-.5c.2-.2.4-.2.5-.1l1.5.7c.2.1.3.3.3.5 0 .5 0 .9-.4 1.3-.4.3-1 .6-1.6.6-1.5 0-3.3-1-4.6-2.2-1.3-1.3-2.2-3-2.2-4.5 0-.5.2-.9.5-1.1Z"/>',
  mail: '<rect x="3" y="5.5" width="18" height="13" rx="2"/><path d="m4 7.5 8 5.5 8-5.5"/>',
  globe:
    '<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.4 2.3 3.6 5.2 3.6 8.5s-1.2 6.2-3.6 8.5c-2.4-2.3-3.6-5.2-3.6-8.5S9.6 5.8 12 3.5Z"/>',
  pin: '<path d="M12 21s6.5-5.6 6.5-10.5a6.5 6.5 0 1 0-13 0C5.5 15.4 12 21 12 21Z"/><circle cx="12" cy="10.5" r="2.5"/>',

  // ---- ui ----
  search: '<circle cx="11" cy="11" r="6.6"/><path d="m15.8 15.8 4.7 4.7"/>',
  close: '<path d="m6 6 12 12M18 6 6 18"/>',
  check: '<path d="m5 12.5 4.6 4.6L19 7.6"/>',
  chevron: '<path d="m6.5 9.5 5.5 5.5 5.5-5.5"/>',
  arrow: '<path d="M4.5 12h14M13 6.5 18.5 12 13 17.5"/>',
  star: '<path d="m12 3.5 2.5 5.4 5.9.7-4.4 4 1.2 5.9L12 16.5l-5.2 2.9 1.2-5.8-4.4-4 5.9-.7L12 3.5Z"/>',
  sparkle:
    '<path d="M12 3.2 13.9 9l5.9 1.9-5.9 1.9L12 18.7l-1.9-5.9L4.2 10.9 10.1 9 12 3.2Z"/>',
  target:
    '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1"/>',
  gear: '<circle cx="12" cy="12" r="3.2"/><path d="M12 2.8 13.4 5h2.8l1.4 2.4 2.4 1.4v2.8L22.2 13l-2.2 1.4v2.8l-2.4 1.4L16.2 21h-2.8L12 23.2 10.6 21H7.8l-1.4-2.4L4 17.2v-2.8L1.8 13 4 11.6V8.8l2.4-1.4L7.8 5h2.8L12 2.8Z" transform="scale(0.92) translate(1 1)"/>',
  sun: '<circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2.6M12 18.9v2.6M2.5 12h2.6M18.9 12h2.6M5.2 5.2l1.9 1.9M16.9 16.9l1.9 1.9M18.8 5.2l-1.9 1.9M7.1 16.9l-1.9 1.9"/>',
  moon: '<path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11Z"/>',
}

const path = computed(() => icons[props.name] ?? icons.gear)
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.7"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
    v-html="path"
  />
</template>
