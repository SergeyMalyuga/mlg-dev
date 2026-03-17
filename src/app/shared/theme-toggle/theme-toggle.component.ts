import {ChangeDetectionStrategy, Component, DestroyRef, inject, Input, OnInit, signal} from '@angular/core';
import {ToggleDirective} from '../directives/toggle.directive';
import {ThemeService} from '../../core/services/theme.service';
import {NgOptimizedImage} from '@angular/common';
import {Theme, THEME_PATH} from '../../core/constants/const';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-theme-toggle',
  imports: [
    ToggleDirective,
    NgOptimizedImage
  ],
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemeToggleComponent implements OnInit {
  @Input({required: true}) isVisible!: boolean;

  private themeService = inject(ThemeService);
  private destroyRef = inject(DestroyRef);

  public currentTheme = signal<Theme>(this.themeService.getTheme());

  ngOnInit(): void {
    this.themeService.currentTheme$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((theme: Theme) => this.currentTheme.set(theme));
  }

  public changeTheme() {
    this.themeService.toggleTheme();
  }

  protected readonly THEME_PATH = THEME_PATH;
}
