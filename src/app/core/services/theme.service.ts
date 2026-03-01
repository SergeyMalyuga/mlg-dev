import {Injectable} from '@angular/core';
import {Theme, THEME_KEY} from '../constants/const';

@Injectable({
  providedIn: 'root'
})

export class ThemeService {
  public getTheme(): Theme {
    const theme = localStorage.getItem(THEME_KEY) as Theme;
    if (!theme) {
      localStorage.setItem(THEME_KEY, Theme.DARK);
      return Theme.DARK;
    }
    return theme;
  }

  public setTheme(theme: Theme): void {
    localStorage.setItem(THEME_KEY, theme);
  }
}
