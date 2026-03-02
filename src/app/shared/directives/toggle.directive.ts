import {Directive, EventEmitter, HostListener, Injectable, Output} from '@angular/core';

@Directive({
  selector: '[appToggle]',
})
export class ToggleDirective {
  @Output() toggled = new EventEmitter<void>();

  @HostListener('click')
  onClick() {
    this.toggled.emit();
  }
}
