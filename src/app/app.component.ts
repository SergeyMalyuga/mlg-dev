import { AfterViewInit, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './core/services/theme.service';
import { BodyService } from './core/services/body.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  private themeService = inject(ThemeService);
  private bodyService = inject(BodyService);

  ngAfterViewInit(): void {
    this.bodyService.toggleDarkTheme(this.themeService.getTheme());
  }
}
