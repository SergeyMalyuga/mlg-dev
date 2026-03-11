import { ChangeDetectionStrategy, Component } from '@angular/core';
import {WORKS} from '../../core/constants/const';
import {WorkCardComponent} from '../work-card/work-card.component';

@Component({
  selector: 'app-works',
  imports: [
    WorkCardComponent
  ],
  templateUrl: './works.component.html',
  styleUrl: './works.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorksComponent {

  protected readonly WORKS = WORKS;
}
