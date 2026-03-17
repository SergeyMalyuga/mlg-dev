import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appClick]',
})
export class ClickDirective {
  @Output() clicked = new EventEmitter();

  @HostListener('click')
  onClick() {
    this.clicked.emit();
  }
}
