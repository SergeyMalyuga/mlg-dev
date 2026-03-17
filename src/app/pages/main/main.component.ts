import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from '../../features/header/header.component';
import { HeroComponent } from '../../features/hero/hero.component';
import { AboutComponent } from '../../features/about/about.component';
import { SkillsComponent } from '../../features/skills/skills.component';
import { WorksComponent } from '../../features/works/works.component';
import { ContactsComponent } from '../../features/contacts/contacts.component';
import { FooterComponent } from '../../features/footer/footer.component';

@Component({
  selector: 'app-main-page',
  imports: [
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    WorksComponent,
    ContactsComponent,
    FooterComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {}
