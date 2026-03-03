export enum AppRoutes {
  MAIN = '',
}

export enum Theme {
  DARK = 'theme-dark',
  LIGHT = 'theme-light',
}

export const THEME_PATH = {
  [Theme.DARK]: '/assets/images/vector/sun.svg',
  [Theme.LIGHT]: '/assets/images/vector/moon-star.svg',
} as const;

export const LOGO_PATH = {
  [Theme.DARK]: '/assets/images/vector/logo-light.svg',
  [Theme.LIGHT]: '/assets/images/vector/logo-dark.svg',
} as const;

export const THEME_KEY = 'app-theme';
