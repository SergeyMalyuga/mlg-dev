import {ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit, signal} from '@angular/core';
import {ToggleThemeDirective} from './directives/toggle-theme.directive';
import {BodyService} from '../../core/services/body.service';
import {ThemeService} from '../../core/services/theme.service';
import {Theme} from '../../core/constants/const';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {MainNaComponent} from '../main-nav/main-nav.component';

@Component({
  selector: 'app-header',
  imports: [
    ToggleThemeDirective,
    MainNaComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  private bodyService = inject(BodyService);
  private themeService = inject(ThemeService);
  private destroyRef = inject(DestroyRef);

  public currentTheme = signal<Theme | null>(Theme.DARK);

  public ngOnInit(): void {
    this.themeService.currentTheme$.pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(theme => {this.currentTheme.set(theme); this.bodyService.toggleDarkTheme(theme)});
  }

  public changeTheme() {
    this.themeService.toggleTheme();
  }

  protected readonly Theme = Theme;
}
