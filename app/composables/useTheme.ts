export type Theme = 'dark' | 'light'

/**
 * Theme state, shared app-wide. The initial value on the client is read from
 * <html data-theme> — already set pre-paint by the inline head script in
 * nuxt.config.ts (localStorage → prefers-color-scheme fallback).
 */
export const useTheme = () => {
  const theme = useState<Theme>('theme', () => 'dark')

  const apply = (value: Theme) => {
    document.documentElement.dataset.theme = value
    localStorage.setItem('theme', value)
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', value === 'dark' ? '#081229' : '#eef3fb')
  }

  const sync = () => {
    const current = document.documentElement.dataset.theme
    if (current === 'light' || current === 'dark') theme.value = current
  }

  const toggle = () => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
    apply(theme.value)
  }

  return { theme, toggle, sync }
}
