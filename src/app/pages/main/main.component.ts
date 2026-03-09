import { ChangeDetectionStrategy, Component } from '@angular/core';
import {HeaderComponent} from '../../features/header/header.component';
import {HeroComponent} from '../../features/hero/hero.component';
import {AboutComponent} from '../../features/about/about.component';
import {SkillsComponent} from '../../features/skills/skills.component';

@Component({
  selector: 'app-main-page',
  imports: [
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent {

}
