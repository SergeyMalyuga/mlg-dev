import {
  Directive,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appCloseDialog]',
})
export class CloseDialogDirective {
  @Input({ required: true }) isOpen!: boolean;
  @Output() closed = new EventEmitter<void>();

  @HostListener('click', ['$event'])
  onClick(evt: MouseEvent) {
    if (this.isOpen) {
      const target = evt.currentTarget as HTMLElement;
      target.blur();
      this.closed.emit();
    }
  }

  @HostListener('document:keydown', ['$event'])
  onKeyDown(evt: KeyboardEvent) {
    if (evt.key === 'Escape' && this.isOpen) {
      const target = evt.target as HTMLElement;
      target.blur();
      this.closed.emit();
    }
  }
}
