import {inject, Injectable} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {Theme} from '../constants/const';

@Injectable({
  providedIn: 'root'
})
export class BodyService {
  private document = inject(DOCUMENT);
  private body = this.document.body;

 public toggleDarkTheme(currentTheme: Theme) {
   console.log( this.body.classList.contains(Theme.DARK));
   this.body.classList.toggle(Theme.DARK, !this.body.classList.contains(currentTheme));
  }
}
