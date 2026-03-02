import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';
import {ToggleDirective} from '../directives/toggle.directive';

@Component({
  selector: 'app-theme-toggle',
  imports: [
    ToggleDirective
  ],
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemeToggleComponent {
  @Output() toggled = new EventEmitter<void>();

  public onToggled() {
    this.toggled.emit();
  }
}
