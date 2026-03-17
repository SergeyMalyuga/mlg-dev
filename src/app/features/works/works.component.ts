import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { WorkCardComponent } from '../work-card/work-card.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { WorksService } from '../../core/services/works.sevice';

@Component({
  selector: 'app-works',
  imports: [WorkCardComponent],
  templateUrl: './works.component.html',
  styleUrl: './works.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorksComponent {
  private worksService = inject(WorksService);
  public works = toSignal(this.worksService.getWorks(), { initialValue: [] });
}
