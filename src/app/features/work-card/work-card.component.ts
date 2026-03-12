import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {WorkCard} from '../../core/models/workCard';

@Component({
  selector: 'app-work-card',
  imports: [],
  templateUrl: './work-card.component.html',
  styleUrl: './work-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkCardComponent {
  @Input({required: true}) card!: WorkCard;
  @Input({required: true}) index!: number;

  public isRevert() {
    return this.index % 2 !== 0;
  }
}
