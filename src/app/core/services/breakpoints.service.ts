import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BreakpointsService {
  private mediaQuery = window.matchMedia('(max-width: 768px)');
  public isMobile = signal<boolean>(this.mediaQuery.matches);

  constructor() {
  this.mediaQuery.addEventListener('change', (evt) => {
    this.isMobile.set(evt.matches);
  })
  }
}
