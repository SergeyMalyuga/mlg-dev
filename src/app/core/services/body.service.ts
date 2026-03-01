import {inject, Injectable, OnInit} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {Theme} from '../constants/const';
import {ThemeService} from './theme.service';

@Injectable({
  providedIn: 'root'
})
export class BodyService {
  private document = inject(DOCUMENT);
  private body = this.document.body;

 public toggleDarkTheme(currentTheme: Theme) {
   this.body.classList.toggle(Theme.DARK, currentTheme === Theme.DARK);
  }
}
