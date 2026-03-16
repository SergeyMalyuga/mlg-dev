import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-main-nav',
  imports: [],
  templateUrl: './main-nav.component.html',
  styleUrl: './main-nav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainNaComponent {
  @Input({required: true}) isVisible!: boolean;
}
