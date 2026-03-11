import {Work} from '../models/work';
import {nanoid} from 'nanoid';

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

export const THEME_KEY = 'app-theme';

export const WORKS: Work[] = [
  {
    id: nanoid(),
    image: '/assets/images/raster/cyber-punk.jpg',
    alt: 'CyberPunk',
    url: 'https://github.com/SergeyMalyuga/cyberpunk',
    description: 'A platform for comparing and finding affordable flights, as well as booking and purchasing tickets safely\n' +
      '      and easily in a few simple clicks.',
    width: 1699,
    height: 1225
  },
  {
    id: nanoid(),
    image: '/assets/images/raster/moon-river.jpg',
    alt: 'Moon-River',
    url: 'https://github.com/SergeyMalyuga/moon-river',
    description: 'A platform for comparing and finding affordable flights, as well as booking and purchasing tickets safely\n' +
      '      and easily in a few simple clicks.',
    width: 1696,
    height: 1225
  }
]
