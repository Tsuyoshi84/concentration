import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-top-title',
  templateUrl: './top-title.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./top-title.component.css'],
})
export class TopTitleComponent {}
