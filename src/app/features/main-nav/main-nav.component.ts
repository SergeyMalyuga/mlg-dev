import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { ClickDirective } from '../../shared/directives/click.directive';

@Component({
  selector: 'app-main-nav',
  imports: [ClickDirective],
  templateUrl: './main-nav.component.html',
  styleUrl: './main-nav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainNaComponent {
  @Input({ required: true }) isVisible!: boolean;
  @Output() clicked = new EventEmitter();

  public onClicked() {
    this.clicked.emit();
  }
}
