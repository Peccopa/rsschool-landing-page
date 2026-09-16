const THEME_KEY = 'dev-store-theme';

export function getTheme() {
  return localStorage.getItem(THEME_KEY) ?? 'light';
}

export function setTheme(theme) {
  localStorage.setItem(THEME_KEY, theme);
}

export function applyTheme(theme) {
  document.documentElement.classList.toggle('dark-theme', theme === 'dark');
}
