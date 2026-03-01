import {Directive, EventEmitter, HostListener, Injectable, Output} from '@angular/core';

@Directive({
  selector: '[appToggleTheme]',
})
export class ToggleThemeDirective {
  @Output() themeToggled = new EventEmitter<void>();

  @HostListener('click')
  onClick() {
    this.themeToggled.emit();
  }
}
