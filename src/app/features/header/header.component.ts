import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  effect,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { BodyService } from '../../core/services/body.service';
import { ThemeService } from '../../core/services/theme.service';
import { Theme } from '../../core/constants/const';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MainNaComponent } from '../main-nav/main-nav.component';
import { ThemeToggleComponent } from '../../shared/theme-toggle/theme-toggle.component';
import { NgOptimizedImage } from '@angular/common';
import { ToggleDirective } from '../../shared/directives/toggle.directive';
import { BreakpointsService } from '../../core/services/breakpoints.service';
import { CloseDialogDirective } from '../../shared/directives/close-dialog.directive';

@Component({
  selector: 'app-header',
  imports: [
    MainNaComponent,
    ThemeToggleComponent,
    NgOptimizedImage,
    ToggleDirective,
    CloseDialogDirective,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  private bodyService = inject(BodyService);
  private themeService = inject(ThemeService);
  private destroyRef = inject(DestroyRef);
  private breakPointsService = inject(BreakpointsService);

  public currentTheme = signal<Theme>(this.themeService.getTheme());
  public isNavMenuVisible = signal<boolean>(true);
  public isDialogOpen = signal<boolean>(false);

  constructor() {
    effect(() => {
      const isMobile = this.breakPointsService.isMobile();
      this.isNavMenuVisible.set(!isMobile);
      if (!isMobile) {
        this.isDialogOpen.set(false);
      }
    });
  }

  public ngOnInit(): void {
    this.themeService.currentTheme$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((theme) => {
        this.currentTheme.set(theme);
        this.bodyService.toggleDarkTheme(theme);
      });
  }

  public toggleDialog(): void {
    this.isDialogOpen.set(!this.isDialogOpen());
    this.bodyService.setOverflow(this.isDialogOpen());
  }
}
