import {ChangeDetectionStrategy, Component, EventEmitter, inject, Output} from '@angular/core';
import {ToggleDirective} from '../directives/toggle.directive';
import {ThemeService} from '../../core/services/theme.service';

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
  private themeService = inject(ThemeService);

  public currentTheme = this.themeService.getTheme();

  public changeTheme() {
    this.themeService.toggleTheme();
  }
}
