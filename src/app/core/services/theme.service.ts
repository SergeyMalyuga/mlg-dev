import {Injectable} from '@angular/core';
import {Theme, THEME_KEY} from '../constants/const';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ThemeService {
  public currentTheme$ = new BehaviorSubject<Theme>(Theme.DARK);

  public getTheme(): Theme {
    const theme = localStorage.getItem(THEME_KEY) as Theme;
    if (!theme) {
      localStorage.setItem(THEME_KEY, Theme.DARK);
      return Theme.DARK;
    }
    return theme;
  }

  private setTheme(theme: Theme): void {
    localStorage.setItem(THEME_KEY, theme);
    this.currentTheme$.next(theme);
  }

  public toggleTheme() {
    const currentTheme = this.currentTheme$.value;
    if (currentTheme === Theme.DARK) {
      this.setTheme(Theme.LIGHT);
    } else {
      this.setTheme(Theme.DARK);
    }
  }
}
