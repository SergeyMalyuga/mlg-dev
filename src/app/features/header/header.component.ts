import {ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit, signal} from '@angular/core';
import {BodyService} from '../../core/services/body.service';
import {ThemeService} from '../../core/services/theme.service';
import {Theme} from '../../core/constants/const';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {MainNaComponent} from '../main-nav/main-nav.component';
import {ThemeToggleComponent} from '../../shared/theme-toggle/theme-toggle.component';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [
    MainNaComponent,
    ThemeToggleComponent,
    NgOptimizedImage
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  private bodyService = inject(BodyService);
  private themeService = inject(ThemeService);
  private destroyRef = inject(DestroyRef);

  public currentTheme = signal<Theme>(this.themeService.getTheme());

  public ngOnInit(): void {
    this.themeService.currentTheme$.pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(theme => {this.currentTheme.set(theme); this.bodyService.toggleDarkTheme(theme)});
  }

/*  public changeTheme() {
    this.themeService.toggleTheme();
  }*/
}
