/**
 * v-reveal — staggered scroll-reveal directive.
 * Usage: <div v-reveal /> or <div v-reveal="2" /> (stagger index, 90ms steps)
 *
 * Registered universally so SSR can resolve the directive (via getSSRProps);
 * the IntersectionObserver itself only exists on the client.
 */
export default defineNuxtPlugin((nuxtApp) => {
  let observer: IntersectionObserver | undefined

  if (import.meta.client) {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer!.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )
  }

  nuxtApp.vueApp.directive('reveal', {
    mounted(el: HTMLElement, binding) {
      el.classList.add('reveal')
      const step = Number(binding.value ?? 0)
      if (step > 0) el.style.setProperty('--reveal-delay', `${step * 90}ms`)
      observer?.observe(el)
    },
    getSSRProps() {
      return {}
    },
  })
})
